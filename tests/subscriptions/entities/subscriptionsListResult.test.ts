import { expect } from 'chai'
import nock from 'nock'
import { PublicApiClient } from '../../../src'
import {
  SubscriptionsListData,
  SubscriptionsListResult,
  ListResultData,
} from '../../../src/subscriptions'
import {
  MOCK_LIST_RESPONSE,
  MOCK_SUBSCRIPTION_DATA,
  SUBSCRIPTIONS_LIST_ENDPOINT,
  SUBSCRIPTIONS_LIST_PAYLOAD,
} from '../subscriptionsClient.test'

const LIST_RESULT_SUBSCRIPTIONS_MOCK_URL =
  'https://list.subscriptions.localhost'

const subscriptionsClient = new PublicApiClient()
  .getSubscriptionsClient()
  .setUrl(LIST_RESULT_SUBSCRIPTIONS_MOCK_URL)

const result = new SubscriptionsListResult(
  MOCK_LIST_RESPONSE,
  subscriptionsClient,
)

describe('SubscriptionsListResult', () => {
  describe('getSubscriptionsForCurrentPage', () => {
    it('yields the results subscriptions', () => {
      for (const subscription of result.getSubscriptionsForCurrentPage()) {
        expect(subscription).to.eqls(MOCK_SUBSCRIPTION_DATA)
      }
    })
  })

  describe('getSubscriptions', () => {
    it('yields all subscriptions from all pages', async () => {
      // Let's make the response two pages of a single item each
      const mockData: SubscriptionsListData = {
        ...MOCK_LIST_RESPONSE,
        pagination: {
          ...MOCK_LIST_RESPONSE.pagination,
          currentPage: 1,
          total: 3,
          totalPage: 3,
        },
        data: [MOCK_SUBSCRIPTION_DATA],
      }
      nock(LIST_RESULT_SUBSCRIPTIONS_MOCK_URL)
        .get(SUBSCRIPTIONS_LIST_ENDPOINT)
        .reply(
          200,
          (): SubscriptionsListData => ({
            ...mockData,
            pagination: {
              currentPage: 2,
              total: 3,
              totalPage: 3,
              perPage: 1,
              next: '',
              previous: '',
            },
          }),
        )
        .get(SUBSCRIPTIONS_LIST_ENDPOINT)
        .reply(
          200,
          (): SubscriptionsListData => ({
            ...mockData,
            pagination: {
              currentPage: 3,
              total: 3,
              totalPage: 3,
              perPage: 1,
              next: '',
              previous: '',
            },
          }),
        )
      subscriptionsClient.setPerPage(1)
      const mockResult = new SubscriptionsListResult(
        mockData,
        subscriptionsClient,
      )
      let count = 0
      for await (const subscription of mockResult.getSubscriptions()) {
        expect(subscription).to.eqls(MOCK_SUBSCRIPTION_DATA)
        count++
      }
      // Assert we evaluated two subscriptions
      expect(count).to.equal(3)
    })
  })

  describe('getClient', () => {
    it('returns this.#client', () => {
      const result = new SubscriptionsListResult(
        MOCK_LIST_RESPONSE,
        subscriptionsClient,
      )

      expect(result.client).to.eqls(subscriptionsClient)
    })
  })

  describe('getPayload', () => {
    it('returns this.#payload', () => {
      const result = new SubscriptionsListResult(
        MOCK_LIST_RESPONSE,
        subscriptionsClient,
        SUBSCRIPTIONS_LIST_PAYLOAD,
      )

      expect(result.payload).to.eqls(SUBSCRIPTIONS_LIST_PAYLOAD)
    })
  })

  describe('getCurrentPage', () => {
    it('returns this.#client', () => {
      const result = new SubscriptionsListResult(
        MOCK_LIST_RESPONSE,
        subscriptionsClient,
      )

      expect(result.currentPage).to.eqls(
        MOCK_LIST_RESPONSE.pagination.currentPage,
      )
    })
  })

  describe('getNbResults', () => {
    it('returns this.#nbResults', () => {
      const result = new SubscriptionsListResult(
        MOCK_LIST_RESPONSE,
        subscriptionsClient,
      )
      expect(result.nbResults).to.eqls(MOCK_LIST_RESPONSE.pagination.total)
    })
  })

  describe('getTotalPages', () => {
    it('returns this.#totalPage', () => {
      const result = new SubscriptionsListResult(
        MOCK_LIST_RESPONSE,
        subscriptionsClient,
      )
      expect(result.totalPage).to.eqls(MOCK_LIST_RESPONSE.pagination.totalPage)
    })
  })

  describe('getNextPageURL', () => {
    it('returns this.#nextPageURL', () => {
      const result = new SubscriptionsListResult(
        MOCK_LIST_RESPONSE,
        subscriptionsClient,
      )
      expect(result.nextPageURL).to.eqls(MOCK_LIST_RESPONSE.pagination.next)
    })
  })

  describe('getPreviousPageURL', () => {
    it('returns this.#previousPageURL', () => {
      const result = new SubscriptionsListResult(
        MOCK_LIST_RESPONSE,
        subscriptionsClient,
      )
      expect(result.previousPageURL).to.eqls(
        MOCK_LIST_RESPONSE.pagination.previous,
      )
    })
  })

  describe('toJSON', () => {
    it('returns the serialized SubscriptionData', () => {
      const result = new SubscriptionsListResult(
        MOCK_LIST_RESPONSE,
        subscriptionsClient,
      )
      expect(result.toJSON()).to.eqls({
        totalPage: 2,
        nbResults: 2,
        subscriptions: result.subscriptions,
      } as ListResultData)
    })
  })
})
