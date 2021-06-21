// Test tools
import Joi from 'joi'
import { URL } from 'url'
import { expect } from 'chai'
import nock from 'nock'

// Sources
import { PublicApiClient } from '../../src'
import {
  FindData,
  LicenseFields,
  LicenseFindParameters,
  LicenseFindPayload,
  FilterFindFields,
  LicenseFindResultData,
  LicenseFindResultFields,
  FindResult,
  LicenseOfferFindResultData,
  LicenseOfferFields,
  LicenseFindRawPayload,
} from '../../src/licenses'

export const LICENSES_MOCK_URL = 'https://licenses.localhost'
export const LICENSES_FIND_ENDPOINT = new RegExp('/licenses/v2/find.*')

/**
 * Mock license data to be used in tests and returned by mocks
 */
export const MOCK_RESULT_DATA: {
  license: LicenseFindResultData
  offer: LicenseOfferFindResultData
} = {
  license: {
    [LicenseFindResultFields.COLUMN_HIGHLIGHT]: {},
    [LicenseFields.COLUMN_ID]: 1,
    [LicenseFields.COLUMN_ACCEPT_EULA]: true,
    [LicenseFields.COLUMN_ACTIVE_SEATS]: {
      [LicenseFields.ACTIVE_SEATS_LAST_UPDATE]: new Date().toISOString(),
      [LicenseFields.ACTIVE_SEATS_NUMBER]: 1,
    },
    [LicenseFields.COLUMN_AUTO_RENEW]: true,
    [LicenseFields.COLUMN_BASE_SEAT]: 1,
    [LicenseFields.COLUMN_CATEGORY]: 'category',
    [LicenseFields.COLUMN_CLOUD_TYPE]: 'cloud_type',
    [LicenseFields.COLUMN_CUSTOMER_NAME]: 'customer_name',
    [LicenseFields.COLUMN_CUSTOMER_REF]: 'ref',
    [LicenseFields.COLUMN_END_DATE]: new Date().toISOString(),
    [LicenseFields.COLUMN_FRIENDLY_NAME]: 'friendly_name',
    [LicenseFields.COLUMN_IS_ENABLED]: true,
    [LicenseFields.COLUMN_LAST_UPDATE]: new Date().toISOString(),
    [LicenseFields.COLUMN_MARKETPLACE]: 'marketplace',
    [LicenseFields.COLUMN_MESSAGE]: 'message',
    [LicenseFields.COLUMN_OFFER]: 'offer',
    [LicenseFields.COLUMN_PARENT_LINE_ID]: 2,
    [LicenseFields.COLUMN_PARENT_ORDER_REF]: 'parent_order_ref',
    [LicenseFields.COLUMN_PARTNER_REF]: 'partner_ref',
    [LicenseFields.COLUMN_PERIODICITY]: 1,
    [LicenseFields.COLUMN_PRICE]: {
      [LicenseFields.PRICE_BUY_PRICE]: 1000,
      [LicenseFields.PRICE_LIST_PRICE]: 1000,
      [LicenseFields.PRICE_CURRENCY]: 'EUR',
    },
    [LicenseFields.COLUMN_RESELLER_NAME]: 'reseller_name',
    [LicenseFields.COLUMN_RESELLER_REF]: 'reseller_ref',
    [LicenseFields.COLUMN_SEAT]: 1,
    [LicenseFields.COLUMN_SERVICE_REF]: 'service_ref',
    [LicenseFields.COLUMN_SKU]: 'SKU',
    [LicenseFields.COLUMN_START_DATE]: new Date().toISOString(),
    [LicenseFields.COLUMN_STATUS_CODE]: 200,
    [LicenseFields.COLUMN_STATUS_LABEL]: 'Success',
    [LicenseFields.COLUMN_SUBSCRIPTION_ID]: 'subscription_id',
    [LicenseFields.COLUMN_SUBSIDIARY_NAME]: 'subsidiary_name',
    [LicenseFields.COLUMN_TERM]: 1,
    [LicenseFields.COLUMN_TRIAL]: false,
    [LicenseFields.COLUMN_TYPE]: 'string',
    [LicenseFields.COLUMN_UOM]: 'uom',
    [LicenseFields.COLUMN_VENDOR_CODE]: 'vendor_code',
    [LicenseFields.COLUMN_VENDOR_NAME]: 'vendor_name',
    [LicenseFields.COLUMN_VENDOR_SUBSCRIPTION_ID]: 'vendor_subscription_id',
  },
  offer: {
    [LicenseOfferFields.COLUMN_ACTION_FLAGS]: {
      [LicenseOfferFields.COLUMN_IS_AUTO_RENEW]: true,
      [LicenseOfferFields.COLUMN_IS_MANUAL_PROVISIONING]: true,
    },
    [LicenseOfferFields.COLUMN_IS_ENABLED]: true,
    [LicenseOfferFields.COLUMN_LAST_UPDATE]: new Date().toISOString(),
    [LicenseOfferFields.COLUMN_NAME]: 'name',
    [LicenseOfferFields.COLUMN_PRICE_BAND]: {
      [LicenseOfferFields.COLUMN_ACTION_FLAGS]: {
        [LicenseOfferFields.COLUMN_CAN_BE_CANCELLED]: true,
        [LicenseOfferFields.COLUMN_CAN_BE_REACTIVATED]: true,
        [LicenseOfferFields.COLUMN_CAN_BE_SUSPENDED]: true,
        [LicenseOfferFields.COLUMN_CAN_DECREASE_SEATS]: true,
        [LicenseOfferFields.COLUMN_CAN_INCREASE_SEATS]: true,
      },
      [LicenseOfferFields.COLUMN_MARKETPLACE]: 'priceBandMarketplace',
      [LicenseOfferFields.COLUMN_IS_ENABLED]: true,
      [LicenseOfferFields.COLUMN_CURRENCY]: 'priceBandCurrency',
      [LicenseOfferFields.COLUMN_PRICES]: {
        [LicenseOfferFields.COLUMN_PUBLIC]: 1000,
        [LicenseOfferFields.COLUMN_BUY]: 1500,
        [LicenseOfferFields.COLUMN_SELL]: 2000,
      },
      [LicenseOfferFields.COLUMN_BILLING]: {
        [LicenseOfferFields.COLUMN_TERM]: 1,
        [LicenseOfferFields.COLUMN_TYPE]: 'priceBandBillingType',
        [LicenseOfferFields.COLUMN_CYCLE]: 1,
      },
    },
  },
}

/**
 * Mocks a potential find call response data
 */
export const MOCK_FIND_RESPONSE: FindData = {
  pagination: {
    currentPage: 1,
    total: 2,
    totalPage: 2,
  },
  filters: [
    {
      [FilterFindFields.COLUMN_NAME]: LicenseFields.COLUMN_ACCEPT_EULA,
      [FilterFindFields.COLUMN_VALUES]: {
        [LicenseFields.COLUMN_ACCEPT_EULA]: true,
      },
    },
  ],
  results: [MOCK_RESULT_DATA],
}

/**
 * Joi representation of the payload schema to be sent to the find payload
 * This allows us to insure the payload integrity throughout the updates.
 */
const PAYLOAD_SCHEMA = Joi.object({
  [LicenseFindParameters.DATA_KEYWORD]: Joi.string(),
  [LicenseFindParameters.DATA_KEYWORDS]: Joi.object().pattern(
    Joi.string().valid(
      ...Object.values(LicenseFields).map((field) => `license.${field}`),
      ...Object.values(LicenseOfferFields).map((field) => `offer.${field}`),
    ),
    Joi.object({
      [LicenseFindParameters.KEYWORDS_VALUES]: Joi.array().items(Joi.string()),
      [LicenseFindParameters.KEYWORDS_OPERATOR]: Joi.string().valid(
        LicenseFindParameters.OPERATOR_AND,
        LicenseFindParameters.OPERATOR_BETWEEN,
        LicenseFindParameters.OPERATOR_OR,
      ),
    }),
  ),
  [LicenseFindParameters.DATA_FILTERS]: Joi.object().pattern(
    Joi.string().valid(
      ...Object.values(LicenseFields).map((field) => `license.${field}`),
      ...Object.values(LicenseOfferFields).map((field) => `offer.${field}`),
    ),
    Joi.any(),
  ),
  [LicenseFindParameters.DATA_SORT]: Joi.object().pattern(
    Joi.string().valid(...Object.values(LicenseFields)),
    Joi.string().valid(
      LicenseFindParameters.SORT_ASCENDING,
      LicenseFindParameters.SORT_DESCENDING,
    ),
  ),
  [LicenseFindParameters.DATA_HIGHLIGHT]: Joi.alternatives(
    Joi.object(),
    Joi.boolean(),
  ),
})

describe('LicensesClient', () => {
  const client = new PublicApiClient()
    .getLicensesClient()
    .setUrl(LICENSES_MOCK_URL)
  // Standard payload as per described by types
  const standardPayload: LicenseFindPayload = {
    [LicenseFindParameters.DATA_KEYWORD]: 'test',
    [LicenseFindParameters.DATA_KEYWORDS]: {
      license: {
        [LicenseFields.COLUMN_CATEGORY]: {
          [LicenseFindParameters.KEYWORDS_VALUES]: ['test'],
          [LicenseFindParameters.KEYWORDS_OPERATOR]:
            LicenseFindParameters.OPERATOR_OR,
        },
      },

      offer: {
        [LicenseOfferFields.COLUMN_CURRENCY]: {
          [LicenseFindParameters.KEYWORDS_VALUES]: ['EUR'],
          [LicenseFindParameters.KEYWORDS_OPERATOR]:
            LicenseFindParameters.OPERATOR_AND,
        },
      },
    },
    [LicenseFindParameters.DATA_FILTERS]: {
      license: {
        [LicenseFields.COLUMN_ACCEPT_EULA]: true,
      },
      offer: {
        [LicenseOfferFields.COLUMN_CAN_BE_CANCELLED]: true,
      },
    },
    [LicenseFindParameters.DATA_SORT]: {
      [LicenseFields.COLUMN_CUSTOMER_NAME]:
        LicenseFindParameters.SORT_DESCENDING,
    },
    [LicenseFindParameters.DATA_HIGHLIGHT]: true,
  }

  const standardRawPayload: LicenseFindRawPayload = {
    ...standardPayload,
    [LicenseFindParameters.DATA_KEYWORDS]: {
      [`license.${LicenseFields.COLUMN_CATEGORY}`]: {
        [LicenseFindParameters.KEYWORDS_VALUES]: ['test'],
        [LicenseFindParameters.KEYWORDS_OPERATOR]:
          LicenseFindParameters.OPERATOR_OR,
      },
    },
    [LicenseFindParameters.DATA_FILTERS]: {
      [`license.${LicenseFields.COLUMN_ACCEPT_EULA}`]: true,
      [`offer.${LicenseOfferFields.COLUMN_CAN_BE_CANCELLED}`]: true,
    },
  }

  describe('findRaw', () => {
    it('calls the post method with the right payload', (done) => {
      nock(LICENSES_MOCK_URL)
        .post(LICENSES_FIND_ENDPOINT)
        .reply((_uri, body) => {
          try {
            expect(() => Joi.assert(body, PAYLOAD_SCHEMA)).not.to.throw()
          } catch (error) {
            done(error)
            return [500]
          }
          done()
          return [204]
        })

      client.findRaw(standardRawPayload)
    })

    it('calls the post method and returns its result', async () => {
      const expectedData = { expected: true }
      nock(LICENSES_MOCK_URL)
        .post(LICENSES_FIND_ENDPOINT)
        .reply(200, expectedData)

      const result = await client.findRaw()
      expect(result).to.eqls(expectedData)
    })
  })

  describe('find', () => {
    it('sets the specified page number', (done) => {
      nock(LICENSES_MOCK_URL)
        .post(LICENSES_FIND_ENDPOINT)
        .reply((uri) => {
          const urlParams = new URL(uri, LICENSES_MOCK_URL)
          try {
            expect(urlParams.searchParams.get('page')).to.equal('10')
          } catch (error) {
            done(error)
            return [500]
          }
          done()
          return [204]
        })
      client.find(standardPayload, undefined, 10)
    })

    it('sets the specified per page number', (done) => {
      nock(LICENSES_MOCK_URL)
        .post(LICENSES_FIND_ENDPOINT)
        .reply((uri) => {
          const urlParams = new URL(uri, LICENSES_MOCK_URL)
          try {
            expect(urlParams.searchParams.get('per_page')).to.equal('10')
          } catch (error) {
            done(error)
            return [500]
          }
          done()
          return [204]
        })
      client.find(undefined, 10)
    })

    it('sets the default per page number if required', (done) => {
      nock(LICENSES_MOCK_URL)
        .post(LICENSES_FIND_ENDPOINT)
        .reply((uri) => {
          const urlParams = new URL(uri, LICENSES_MOCK_URL)
          try {
            expect(urlParams.searchParams.get('per_page')).to.exist
          } catch (error) {
            done(error)
            return [500]
          }
          done()
          return [204]
        })
      client.find()
    })

    it('works without offer keywords', () => {
      nock(LICENSES_MOCK_URL)
        .post(LICENSES_FIND_ENDPOINT)
        .reply(() => {
          return [204]
        })
      expect(
        client.find({
          ...standardPayload,
          [LicenseFindParameters.DATA_KEYWORDS]: {
            license:
              standardPayload[LicenseFindParameters.DATA_KEYWORDS]?.license,
          },
        }),
      ).not.to.be.rejected
    })

    it('works without license keywords', () => {
      nock(LICENSES_MOCK_URL)
        .post(LICENSES_FIND_ENDPOINT)
        .reply(() => {
          return [204]
        })
      expect(
        client.find({
          ...standardPayload,
          [LicenseFindParameters.DATA_KEYWORDS]: {
            offer: standardPayload[LicenseFindParameters.DATA_KEYWORDS]?.offer,
          },
        }),
      ).not.to.be.rejected
    })

    it('works without license filters', () => {
      nock(LICENSES_MOCK_URL)
        .post(LICENSES_FIND_ENDPOINT)
        .reply(() => {
          return [204]
        })
      expect(
        client.find({
          ...standardPayload,
          [LicenseFindParameters.DATA_FILTERS]: {
            license:
              standardPayload[LicenseFindParameters.DATA_FILTERS]?.license,
          },
        }),
      ).not.to.be.rejected
    })

    it('works without license filters', () => {
      nock(LICENSES_MOCK_URL)
        .post(LICENSES_FIND_ENDPOINT)
        .reply(() => {
          return [204]
        })
      expect(
        client.find({
          ...standardPayload,
          [LicenseFindParameters.DATA_FILTERS]: {
            offer: standardPayload[LicenseFindParameters.DATA_FILTERS]?.offer,
          },
        }),
      ).not.to.be.rejected
    })

    it('calls findRaw and feeds the response returns the FindResult entity', async () => {
      nock(LICENSES_MOCK_URL)
        .post(LICENSES_FIND_ENDPOINT)
        .reply(200, (): FindData => MOCK_FIND_RESPONSE)
      const result = await client.find()
      expect(result).to.be.instanceOf(FindResult)
    })
  })
})
