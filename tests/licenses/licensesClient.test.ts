// Test tools
import Joi from 'joi';
import { URL } from 'url';
import { expect } from 'chai';
import nock from 'nock';

// Sources
import { LicenseFindResultFields, PublicApiClient } from '../../src';
import {
  FindData,
  LicenseFindParameters,
  LicenseFindPayload,
  FilterFindFields,
  LicenseFindResultData,
  FindResult,
  LicenseFindRawPayload,
  ConfigFindResultFields,
  ConfigFindResult,
  FindConfig,
  ConfigFindResultData,
  ActiveSeatsFindResultFields,
  PriceFindResultFields,
  WarningFindResultFields,
  OfferFindResultFields,
  OfferFindResultData,
  ActionFlagsFindResultFields,
  PriceBandFindResultFields,
  PriceBandActionFlagsFindResultFields,
  BillingFindResultFields,
  PriceBandPriceFindResultFields,
  SaleConstraintsFindResultFields,
  IdentifiersFindResultFields,
  ArrowsphereFindResultFields,
} from '../../src';

export const LICENSES_MOCK_URL = 'https://licenses.localhost';
export const LICENSES_FIND_ENDPOINT = new RegExp('/licenses/v2/find.*');
export const LICENSES_CONFIG_FIND_ENDPOINT = new RegExp(
  '/licenses/XSP1234/configs',
);

/**
 * Mock license data to be used in tests and returned by mocks
 */
export const MOCK_RESULT_DATA: {
  license: LicenseFindResultData;
  offer: OfferFindResultData;
} = {
  license: {
    [LicenseFindResultFields.COLUMN_HIGHLIGHT]: {},
    [LicenseFindResultFields.COLUMN_ACCEPT_EULA]: true,
    [LicenseFindResultFields.COLUMN_ACTIVE_SEATS]: {
      [ActiveSeatsFindResultFields.COLUMN_LAST_UPDATE]: new Date().toISOString(),
      [ActiveSeatsFindResultFields.COLUMN_NUMBER]: 1,
    },
    [LicenseFindResultFields.COLUMN_AUTO_RENEW]: true,
    [LicenseFindResultFields.COLUMN_BASE_SEAT]: 1,
    [LicenseFindResultFields.COLUMN_CATEGORY]: 'category',
    [LicenseFindResultFields.COLUMN_CLOUD_TYPE]: 'cloud_type',
    [LicenseFindResultFields.COLUMN_CONFIGS]: [
      {
        [ConfigFindResultFields.COLUMN_NAME]: 'name',
        [ConfigFindResultFields.COLUMN_SCOPE]: 'scope',
        [ConfigFindResultFields.COLUMN_STATE]: 'state',
      },
    ],
    [LicenseFindResultFields.COLUMN_WARNINGS]: [
      {
        [WarningFindResultFields.COLUMN_KEY]: 'key',
        [WarningFindResultFields.COLUMN_MESSAGE]: 'message',
      },
    ],
    [LicenseFindResultFields.COLUMN_CUSTOMER_NAME]: 'customer_name',
    [LicenseFindResultFields.COLUMN_CUSTOMER_REF]: 'ref',
    [LicenseFindResultFields.COLUMN_END_DATE]: new Date().toISOString(),
    [LicenseFindResultFields.COLUMN_FRIENDLY_NAME]: 'friendly_name',
    [LicenseFindResultFields.COLUMN_ID]: 1,
    [LicenseFindResultFields.COLUMN_IS_ENABLED]: true,
    [LicenseFindResultFields.COLUMN_LAST_UPDATE]: new Date().toISOString(),
    [LicenseFindResultFields.COLUMN_MARKETPLACE]: 'marketplace',
    [LicenseFindResultFields.COLUMN_MESSAGE]: 'message',
    [LicenseFindResultFields.COLUMN_OFFER]: 'offer',
    [LicenseFindResultFields.COLUMN_PARENT_LINE_ID]: 2,
    [LicenseFindResultFields.COLUMN_PARENT_ORDER_REF]: 'parent_order_ref',
    [LicenseFindResultFields.COLUMN_PARTNER_REF]: 'partner_ref',
    [LicenseFindResultFields.COLUMN_PERIODICITY]: 1,
    [LicenseFindResultFields.COLUMN_PRICE]: {
      [PriceFindResultFields.COLUMN_PRICE_BAND_ARROWSPHERE_SKU]:
        'priceBandArrowsphereSku',
      [PriceFindResultFields.COLUMN_BUY_PRICE]: 1000,
      [PriceFindResultFields.COLUMN_SELL_PRICE]: 1000,
      [PriceFindResultFields.COLUMN_LIST_PRICE]: 1000,
      [PriceFindResultFields.COLUMN_CURRENCY]: 'CURRENCY',
    },
    [LicenseFindResultFields.COLUMN_RESELLER_NAME]: 'reseller_name',
    [LicenseFindResultFields.COLUMN_RESELLER_REF]: 'reseller_ref',
    [LicenseFindResultFields.COLUMN_SEAT]: 1,
    [LicenseFindResultFields.COLUMN_SERVICE_REF]: 'service_ref',
    [LicenseFindResultFields.COLUMN_SKU]: 'SKU',
    [LicenseFindResultFields.COLUMN_START_DATE]: new Date().toISOString(),
    [LicenseFindResultFields.COLUMN_STATUS_CODE]: 200,
    [LicenseFindResultFields.COLUMN_STATUS_LABEL]: 'Success',
    [LicenseFindResultFields.COLUMN_SUBSCRIPTION_ID]: 'subscription_id',
    [LicenseFindResultFields.COLUMN_SUBSIDIARY_NAME]: 'subsidiary_name',
    [LicenseFindResultFields.COLUMN_TERM]: 1,
    [LicenseFindResultFields.COLUMN_TRIAL]: false,
    [LicenseFindResultFields.COLUMN_TYPE]: 'string',
    [LicenseFindResultFields.COLUMN_UOM]: 'uom',
    [LicenseFindResultFields.COLUMN_VENDOR_CODE]: 'vendor_code',
    [LicenseFindResultFields.COLUMN_VENDOR_NAME]: 'vendor_name',
    [LicenseFindResultFields.COLUMN_VENDOR_SUBSCRIPTION_ID]:
      'vendor_subscription_id',
  },
  offer: {
    [OfferFindResultFields.COLUMN_ACTION_FLAGS]: {
      [ActionFlagsFindResultFields.COLUMN_IS_AUTO_RENEW]: true,
      [ActionFlagsFindResultFields.COLUMN_MANUAL_PROVISIONING]: true,
      [ActionFlagsFindResultFields.COLUMN_RENEWAL_SKU]: true,
    },
    [OfferFindResultFields.COLUMN_CLASSIFICATION]: 'classification',
    [OfferFindResultFields.COLUMN_IS_ENABLED]: true,
    [OfferFindResultFields.COLUMN_LAST_UPDATE]: new Date().toISOString(),
    [OfferFindResultFields.COLUMN_NAME]: 'name',
    [OfferFindResultFields.COLUMN_PRICE_BAND]: {
      [PriceBandFindResultFields.COLUMN_ACTION_FLAGS]: {
        [PriceBandActionFlagsFindResultFields.COLUMN_CAN_BE_CANCELLED]: true,
        [PriceBandActionFlagsFindResultFields.COLUMN_CAN_BE_REACTIVATED]: true,
        [PriceBandActionFlagsFindResultFields.COLUMN_CAN_BE_SUSPENDED]: true,
        [PriceBandActionFlagsFindResultFields.COLUMN_CAN_DECREASE_SEATS]: true,
        [PriceBandActionFlagsFindResultFields.COLUMN_CAN_INCREASE_SEATS]: true,
      },
      [PriceBandFindResultFields.COLUMN_BILLING]: {
        [BillingFindResultFields.COLUMN_CYCLE]: 1,
        [BillingFindResultFields.COLUMN_TERM]: 1,
        [BillingFindResultFields.COLUMN_TYPE]: 'type',
      },
      [PriceBandFindResultFields.COLUMN_CURRENCY]: 'currency',
      [PriceBandFindResultFields.COLUMN_IS_ENABLED]: true,
      [PriceBandFindResultFields.COLUMN_MARKETPLACE]: 'marketplace',
      [PriceBandFindResultFields.COLUMN_PRICES]: {
        [PriceBandPriceFindResultFields.COLUMN_BUY]: 1,
        [PriceBandPriceFindResultFields.COLUMN_SELL]: 1,
        [PriceBandPriceFindResultFields.COLUMN_PUBLIC]: 1,
      },
      [PriceBandFindResultFields.COLUMN_SALE_CONSTRAINTS]: {
        [SaleConstraintsFindResultFields.COLUMN_MIN_QUANTITY]: 1,
        [SaleConstraintsFindResultFields.COLUMN_MAX_QUANTITY]: 1,
      },
      [PriceBandFindResultFields.COLUMN_IDENTIFIERS]: {
        [IdentifiersFindResultFields.COLUMN_ARROWSPHERE]: {
          [ArrowsphereFindResultFields.COLUMN_SKU]: 'sku',
        },
      },
    },
    [OfferFindResultFields.COLUMN_ARROW_SUB_CATEGORIES]: ['NCE'],
  },
};

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
      [FilterFindFields.COLUMN_NAME]:
        LicenseFindResultFields.COLUMN_ACCEPT_EULA,
      [FilterFindFields.COLUMN_VALUES]: {
        [LicenseFindResultFields.COLUMN_ACCEPT_EULA]: true,
      },
    },
  ],
  results: [MOCK_RESULT_DATA],
};

/**
 * Joi representation of the payload schema to be sent to the find payload
 * This allows us to insure the payload integrity throughout the updates.
 */
const PAYLOAD_SCHEMA = Joi.object({
  [LicenseFindParameters.DATA_KEYWORD]: Joi.string(),
  [LicenseFindParameters.DATA_KEYWORDS]: Joi.object().pattern(
    Joi.string().valid(
      ...Object.values(LicenseFindResultFields).map(
        (field) => `license.${field}`,
      ),
      ...Object.values(PriceBandActionFlagsFindResultFields).map(
        (field) => `offer.priceBand.actionFlags.${field}`,
      ),
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
      ...Object.values(LicenseFindResultFields).map(
        (field) => `license.${field}`,
      ),
      ...Object.values(PriceBandActionFlagsFindResultFields).map(
        (field) => `offer.priceBand.actionFlags.${field}`,
      ),
    ),
    Joi.any(),
  ),
  [LicenseFindParameters.DATA_SORT]: Joi.object().pattern(
    Joi.string().valid(
      ...Object.values(LicenseFindResultFields).map(
        (field) => `license.${field}`,
      ),
      ...Object.values(PriceBandFindResultFields).map(
        (field) => `offer.priceBand.${field}`,
      ),
    ),
    Joi.string().valid(
      LicenseFindParameters.SORT_ASCENDING,
      LicenseFindParameters.SORT_DESCENDING,
    ),
  ),
  [LicenseFindParameters.DATA_HIGHLIGHT]: Joi.alternatives(
    Joi.object(),
    Joi.boolean(),
  ),
});

describe('LicensesClient', () => {
  const client = new PublicApiClient()
    .getLicensesClient()
    .setUrl(LICENSES_MOCK_URL);
  // Standard payload as per described by types
  const standardPayload: LicenseFindPayload = {
    [LicenseFindParameters.DATA_KEYWORD]: 'test',
    [LicenseFindParameters.DATA_KEYWORDS]: {
      license: {
        [LicenseFindResultFields.COLUMN_CATEGORY]: {
          [LicenseFindParameters.KEYWORDS_VALUES]: ['test'],
          [LicenseFindParameters.KEYWORDS_OPERATOR]:
            LicenseFindParameters.OPERATOR_OR,
        },
      },
      offer: {
        [OfferFindResultFields.COLUMN_PRICE_BAND]: {
          [PriceBandFindResultFields.COLUMN_CURRENCY]: {
            [LicenseFindParameters.KEYWORDS_VALUES]: ['EUR'],
            [LicenseFindParameters.KEYWORDS_OPERATOR]:
              LicenseFindParameters.OPERATOR_AND,
          },
        },
      },
    },
    [LicenseFindParameters.DATA_FILTERS]: {
      license: {
        [LicenseFindResultFields.COLUMN_ACCEPT_EULA]: {
          [LicenseFindParameters.DATA_FILTERS]: true,
        },
      },
      offer: {
        [OfferFindResultFields.COLUMN_PRICE_BAND]: {
          [PriceBandFindResultFields.COLUMN_ACTION_FLAGS]: {
            [PriceBandActionFlagsFindResultFields.COLUMN_CAN_BE_CANCELLED]: {
              [LicenseFindParameters.DATA_FILTERS]: true,
            },
          },
        },
      },
    },
    [LicenseFindParameters.DATA_SORT]: {
      license: {
        [LicenseFindResultFields.COLUMN_CUSTOMER_NAME]: {
          [LicenseFindParameters.DATA_SORT]:
            LicenseFindParameters.SORT_DESCENDING,
        },
      },
      offer: {
        [OfferFindResultFields.COLUMN_PRICE_BAND]: {
          [PriceBandFindResultFields.COLUMN_CURRENCY]: {
            [LicenseFindParameters.DATA_SORT]:
              LicenseFindParameters.SORT_ASCENDING,
          },
        },
      },
    },
    [LicenseFindParameters.DATA_HIGHLIGHT]: true,
  };

  const standardRawPayload: LicenseFindRawPayload = {
    ...standardPayload,
    [LicenseFindParameters.DATA_KEYWORDS]: {
      [`license.${LicenseFindResultFields.COLUMN_CATEGORY}`]: {
        [LicenseFindParameters.KEYWORDS_VALUES]: ['test'],
        [LicenseFindParameters.KEYWORDS_OPERATOR]:
          LicenseFindParameters.OPERATOR_OR,
      },
    },
    [LicenseFindParameters.DATA_FILTERS]: {
      [`license.${LicenseFindResultFields.COLUMN_ACCEPT_EULA}`]: true,
      [`offer.${OfferFindResultFields.COLUMN_PRICE_BAND}.${PriceBandFindResultFields.COLUMN_ACTION_FLAGS}.${PriceBandActionFlagsFindResultFields.COLUMN_CAN_BE_CANCELLED}`]: true,
    },
    [LicenseFindParameters.DATA_SORT]: {
      [`license.${LicenseFindResultFields.COLUMN_CUSTOMER_NAME}`]: LicenseFindParameters.SORT_DESCENDING,
      [`offer.${OfferFindResultFields.COLUMN_PRICE_BAND}.${PriceBandFindResultFields.COLUMN_CURRENCY}`]: LicenseFindParameters.SORT_ASCENDING,
    },
  };

  describe('findRaw', () => {
    it('calls the post method with the right payload', (done) => {
      nock(LICENSES_MOCK_URL)
        .post(LICENSES_FIND_ENDPOINT)
        .reply((_uri, body) => {
          try {
            expect(() => Joi.assert(body, PAYLOAD_SCHEMA)).not.to.throw();
          } catch (error) {
            done(error);
            return [500];
          }
          done();
          return [204];
        });

      client.findRaw(standardRawPayload);
    });

    it('calls the post method and returns its result', async () => {
      const expectedData = { expected: true };
      nock(LICENSES_MOCK_URL)
        .post(LICENSES_FIND_ENDPOINT)
        .reply(200, expectedData);

      const result = await client.findRaw();
      expect(result).to.eqls(expectedData);
    });
  });

  describe('find', () => {
    it('sets the specified page number', (done) => {
      nock(LICENSES_MOCK_URL)
        .post(LICENSES_FIND_ENDPOINT)
        .reply((uri) => {
          const urlParams = new URL(uri, LICENSES_MOCK_URL);
          try {
            expect(urlParams.searchParams.get('page')).to.equal('10');
          } catch (error) {
            done(error);
            return [500];
          }
          done();
          return [204];
        });
      client.find(standardPayload, undefined, 10);
    });

    it('sets the specified per page number', (done) => {
      nock(LICENSES_MOCK_URL)
        .post(LICENSES_FIND_ENDPOINT)
        .reply((uri) => {
          const urlParams = new URL(uri, LICENSES_MOCK_URL);
          try {
            expect(urlParams.searchParams.get('per_page')).to.equal('10');
          } catch (error) {
            done(error);
            return [500];
          }
          done();
          return [204];
        });
      client.find(undefined, 10);
    });

    it('sets the default per page number if required', (done) => {
      nock(LICENSES_MOCK_URL)
        .post(LICENSES_FIND_ENDPOINT)
        .reply((uri) => {
          const urlParams = new URL(uri, LICENSES_MOCK_URL);
          try {
            expect(urlParams.searchParams.get('per_page')).to.exist;
          } catch (error) {
            done(error);
            return [500];
          }
          done();
          return [204];
        });
      client.find();
    });

    it('works without offer keywords', () => {
      nock(LICENSES_MOCK_URL)
        .post(LICENSES_FIND_ENDPOINT)
        .reply(() => {
          return [204];
        });
      expect(
        client.find({
          ...standardPayload,
          [LicenseFindParameters.DATA_KEYWORDS]: {
            license:
              standardPayload[LicenseFindParameters.DATA_KEYWORDS]?.license,
          },
        }),
      ).not.to.be.rejected;
    });

    it('works without license keywords', () => {
      nock(LICENSES_MOCK_URL)
        .post(LICENSES_FIND_ENDPOINT)
        .reply(() => {
          return [204];
        });
      expect(
        client.find({
          ...standardPayload,
          [LicenseFindParameters.DATA_KEYWORDS]: {
            offer: standardPayload[LicenseFindParameters.DATA_KEYWORDS]?.offer,
          },
        }),
      ).not.to.be.rejected;
    });

    it('works without license filters', () => {
      nock(LICENSES_MOCK_URL)
        .post(LICENSES_FIND_ENDPOINT)
        .reply(() => {
          return [204];
        });
      expect(
        client.find({
          ...standardPayload,
          [LicenseFindParameters.DATA_FILTERS]: {
            license:
              standardPayload[LicenseFindParameters.DATA_FILTERS]?.license,
          },
        }),
      ).not.to.be.rejected;
    });

    it('works without license filters', () => {
      nock(LICENSES_MOCK_URL)
        .post(LICENSES_FIND_ENDPOINT)
        .reply(() => {
          return [204];
        });
      expect(
        client.find({
          ...standardPayload,
          [LicenseFindParameters.DATA_FILTERS]: {
            offer: standardPayload[LicenseFindParameters.DATA_FILTERS]?.offer,
          },
        }),
      ).not.to.be.rejected;
    });

    it('works without license sort', () => {
      nock(LICENSES_MOCK_URL)
        .post(LICENSES_FIND_ENDPOINT)
        .reply(() => {
          return [204];
        });
      expect(
        client.find({
          ...standardPayload,
          [LicenseFindParameters.DATA_SORT]: {
            license: standardPayload[LicenseFindParameters.DATA_SORT]?.license,
          },
        }),
      ).not.to.be.rejected;
    });

    it('works without license sort', () => {
      nock(LICENSES_MOCK_URL)
        .post(LICENSES_FIND_ENDPOINT)
        .reply(() => {
          return [204];
        });
      expect(
        client.find({
          ...standardPayload,
          [LicenseFindParameters.DATA_SORT]: {
            offer: standardPayload[LicenseFindParameters.DATA_SORT]?.offer,
          },
        }),
      ).not.to.be.rejected;
    });

    it('calls findRaw and feeds the response returns the FindResult entity', async () => {
      nock(LICENSES_MOCK_URL)
        .post(LICENSES_FIND_ENDPOINT)
        .reply(200, (): FindData => MOCK_FIND_RESPONSE);
      const result = await client.find();
      expect(result).to.be.instanceOf(FindResult);
    });
  });

  describe('findConfigsRaw', () => {
    it('calls the get method with the right reference', async () => {
      nock(LICENSES_MOCK_URL).get(LICENSES_CONFIG_FIND_ENDPOINT).reply(200);
      await client.getConfigsRaw('XSP1234');
      expect(nock.isDone()).to.be.true;
    });
  });

  describe('findConfigs', () => {
    it('calls the get method with multiple data config', async () => {
      const configs: FindConfig = {
        status: 200,
        data: [
          {
            scope: 'role',
            name: 'purchase something',
            state: 'enabled',
          },
          {
            scope: 'role',
            name: 'verify something',
            state: 'disabled',
          },
          {
            scope: 'authorization',
            name: 'allow something',
            state: 'pending',
          },
        ],
      };

      nock(LICENSES_MOCK_URL)
        .get(LICENSES_CONFIG_FIND_ENDPOINT)
        .reply(200, () => configs);

      let count = 0;
      for await (const result of client.getConfigs('XSP1234')) {
        expect(result.scope).to.be.equal(configs.data[count].scope);
        expect(result.name).to.be.equal(configs.data[count].name);
        expect(result.state).to.be.equal(configs.data[count].state);
        count++;
      }
      expect(count).to.equal(3);
    });
  });

  describe('findUpdateConfigRaw', () => {
    it('calls the post method with the updated configs', async () => {
      const postData: ConfigFindResultData = {
        [ConfigFindResultFields.COLUMN_NAME]: 'purchaseReservations',
        [ConfigFindResultFields.COLUMN_SCOPE]: 'role',
        [ConfigFindResultFields.COLUMN_STATE]: 'enabled',
      };
      const config = new ConfigFindResult(postData);

      nock(LICENSES_MOCK_URL)
        .post(LICENSES_CONFIG_FIND_ENDPOINT)
        .reply(200, config);

      const result = await client.updateConfigRaw('XSP1234', config);
      expect(result).to.eqls(postData);
    });
  });

  describe('findUpdateConfig', () => {
    it('calls the post method with the update config', async () => {
      const postData: ConfigFindResultData = {
        [ConfigFindResultFields.COLUMN_NAME]: 'purchaseReservations',
        [ConfigFindResultFields.COLUMN_SCOPE]: 'role',
        [ConfigFindResultFields.COLUMN_STATE]: 'enabled',
      };

      const config = new ConfigFindResult(postData);

      const response: ConfigFindResultData = {
        [ConfigFindResultFields.COLUMN_NAME]: 'purchaseReservations',
        [ConfigFindResultFields.COLUMN_SCOPE]: 'role',
        [ConfigFindResultFields.COLUMN_STATE]: 'enabled',
      };

      nock(LICENSES_MOCK_URL)
        .post(LICENSES_CONFIG_FIND_ENDPOINT)
        .reply(200, response);

      const result = await client.updateConfig('XSP1234', config);
      expect(result).to.be.instanceOf(ConfigFindResult);
      expect(result.name).to.be.equal(config.name);
      expect(result.scope).to.be.equal(config.scope);
      expect(result.state).to.be.equal(config.state);
    });
  });
});
