import { expect } from 'chai'
import nock from 'nock'
import { PublicApiClient } from '../../../src'
import { FilterFindResult, FindData, FindResult } from '../../../src/licenses'
import {
  MOCK_FIND_RESPONSE,
  MOCK_RESULT_DATA,
  LICENSES_FIND_ENDPOINT,
} from '../licensesClient.test'

const FIND_RESULT_LICENSES_MOCK_URL = 'https://find.licenses.localhost'

const licensesClient = new PublicApiClient()
  .getLicensesClient()
  .setUrl(FIND_RESULT_LICENSES_MOCK_URL)

const response = new FindResult(MOCK_FIND_RESPONSE, licensesClient)

describe('FindResult', () => {
  describe('constructor', () => {
    it('does not create an offer result if it is missing', async () => {
      const noOfferResponse = new FindResult(
        {
          ...MOCK_FIND_RESPONSE,
          results: [{ license: MOCK_RESULT_DATA.license }],
        },
        licensesClient,
      )

      for await (const result of noOfferResponse.getResultsForCurrentPage()) {
        expect(result.offer).to.be.undefined
      }
    })
  })

  describe('getLicensesForCurrentPage', () => {
    it('yields the results licenses', () => {
      for (const result of response.getResultsForCurrentPage()) {
        expect(result).to.eqls(MOCK_RESULT_DATA)
      }
    })
  })

  describe('getLicenses', () => {
    it('yields all licenses from all pages', async () => {
      // Let's make the response two pages of a single item each
      const mockData: FindData = {
        ...MOCK_FIND_RESPONSE,
        pagination: {
          ...MOCK_FIND_RESPONSE.pagination,
          currentPage: 1,
          total: 3,
          totalPage: 3,
        },
        results: [MOCK_RESULT_DATA],
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
      for await (const result of mockResult.getResults()) {
        expect(result).to.eqls(MOCK_RESULT_DATA)
        count++
      }
      // Assert we evaluated two licenses
      expect(count).to.equal(3)
    })

    it('does not create an offer result if it is missing', async () => {
      // Let's make the response two pages of a single item each
      const mockData: FindData = {
        ...MOCK_FIND_RESPONSE,
        pagination: {
          ...MOCK_FIND_RESPONSE.pagination,
          currentPage: 1,
          total: 3,
          totalPage: 3,
        },
        results: [{ license: MOCK_RESULT_DATA.license }],
      }
      nock(FIND_RESULT_LICENSES_MOCK_URL)
        .post(LICENSES_FIND_ENDPOINT)
        .reply(
          200,
          (): FindData => ({
            ...mockData,
            pagination: {
              currentPage: 1,
              total: 1,
              totalPage: 1,
            },
          }),
        )
      licensesClient.setPerPage(1)
      const mockResult = new FindResult(mockData, licensesClient)
      for await (const result of mockResult.getResults()) {
        expect(result.offer).to.be.undefined
      }
    })
  })

  describe('getFilters', () => {
    it('returns the filter entity results', () => {
      const result = new FindResult(MOCK_FIND_RESPONSE, licensesClient)
      expect(result.filters).to.eqls(
        MOCK_FIND_RESPONSE.filters.map((filter) =>
          new FilterFindResult(filter).toJSON(),
        ),
      )
    })
  })

  describe('getNbResults', () => {
    it('returns this.#nbResults', () => {
      const result = new FindResult(MOCK_FIND_RESPONSE, licensesClient)
      expect(result.nbResults).to.eqls(MOCK_FIND_RESPONSE.pagination.total)
    })
  })

  describe('getTotalPages', () => {
    it('returns this.#totalPage', () => {
      const result = new FindResult(MOCK_FIND_RESPONSE, licensesClient)
      expect(result.totalPage).to.eqls(MOCK_FIND_RESPONSE.pagination.totalPage)
    })
  })

  describe('toJSON', () => {
    it('returns the serialized FindResultData', () => {
      const result = new FindResult(MOCK_FIND_RESPONSE, licensesClient)
      expect(result.toJSON()).to.eqls({
        totalPage: 2,
        nbResults: 2,
        results: result.results,
        filters: result.filters,
      })
    })
  })
})
