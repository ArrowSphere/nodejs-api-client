import { expect } from 'chai'
import nock from 'nock'
import { PublicApiClient } from '../../../src'
import { FilterFindResult, FindData, FindResult } from '../../../src/licenses'
import {
  MOCK_FIND_DATA,
  MOCK_LICENSE_DATA,
  LICENSES_FIND_ENDPOINT,
} from '../licensesClient.test'

const FIND_RESULT_LICENSES_MOCK_URL = 'https://find.licenses.localhost'

const licensesClient = new PublicApiClient()
  .getLicensesClient()
  .setUrl(FIND_RESULT_LICENSES_MOCK_URL)

const result = new FindResult(MOCK_FIND_DATA, licensesClient)

describe('FindResult', () => {
  describe('getLicensesForCurrentPage', () => {
    it('yields the results licenses', () => {
      for (const license of result.getLicensesForCurrentPage()) {
        expect(license).to.eqls(MOCK_LICENSE_DATA)
      }
    })
  })

  describe('getLicenses', () => {
    it('yields all licenses from all pages', async () => {
      // Let's make the response two pages of a single item each
      const mockData: FindData = {
        ...MOCK_FIND_DATA,
        pagination: {
          ...MOCK_FIND_DATA.pagination,
          currentPage: 1,
          total: 3,
          totalPage: 3,
        },
        licenses: [MOCK_LICENSE_DATA],
      }
      nock(FIND_RESULT_LICENSES_MOCK_URL)
        .post(LICENSES_FIND_ENDPOINT)
        .reply(
          200,
          (): FindData => ({
            ...mockData,
            pagination: {
              currentPage: 2,
              total: 3,
              totalPage: 3,
            },
          }),
        )
        .post(LICENSES_FIND_ENDPOINT)
        .reply(
          200,
          (): FindData => ({
            ...mockData,
            pagination: {
              currentPage: 3,
              total: 3,
              totalPage: 3,
            },
          }),
        )
      licensesClient.setPerPage(1)
      const mockResult = new FindResult(mockData, licensesClient)
      let count = 0
      for await (const license of mockResult.getLicenses()) {
        expect(license).to.eqls(MOCK_LICENSE_DATA)
        count++
      }
      // Assert we evaluated two licenses
      expect(count).to.equal(3)
    })
  })

  describe('getFilters', () => {
    it('returns the filter entity results', () => {
      const result = new FindResult(MOCK_FIND_DATA, licensesClient)
      expect(result.getFilters()).to.eqls(
        MOCK_FIND_DATA.filters.map((filter) =>
          new FilterFindResult(filter).toJSON(),
        ),
      )
    })
  })

  describe('getNbResults', () => {
    it('returns this.nbResults', () => {
      const result = new FindResult(MOCK_FIND_DATA, licensesClient)
      expect(result.getNbResults()).to.eqls(MOCK_FIND_DATA.pagination.total)
    })
  })

  describe('getTotalPages', () => {
    it('returns this.totalPage', () => {
      const result = new FindResult(MOCK_FIND_DATA, licensesClient)
      expect(result.getTotalPages()).to.eqls(
        MOCK_FIND_DATA.pagination.totalPage,
      )
    })
  })

  describe('toJSON', () => {
    it('returns the serialized FindResultData', () => {
      const result = new FindResult(MOCK_FIND_DATA, licensesClient)
      expect(result.toJSON()).to.eqls({
        totalPage: 2,
        nbResults: 2,
        licenses: result.getLicenses(),
        filters: result.getFilters(),
      })
    })
  })
})
