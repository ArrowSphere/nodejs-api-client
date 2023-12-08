// Test tools
import Joi from 'joi';
import { URL } from 'url';
import { expect } from 'chai';
import nock from 'nock';

// Sources
import {
  GetResult,
  LicensesClient,
  PostUpgrade,
  PublicApiClient,
  SaveOrderEavsInputType,
} from '../../src';
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
  LicenseFindResultFields,
  LicenseGetFields,
  ActiveSeatsFindResultFields,
  SecurityFindResultFields,
} from '../../src';
import {
  PAYLOAD_LICENSE_CONVERSION_SKU,
  PAYLOAD_LICENSE_EXISTING_CONVERSION_SKU,
  PAYLOAD_LICENSE_HISTORY,
  PAYLOAD_SCHEMA_LICENSE,
  PAYLOAD_SCHEMA_LICENSE_WITHOUT_OPTIONAL_FIELDS,
} from './licenses.mocks';
import {
  UpgradeResult,
  UpgradeResultFields,
  UpgradeResultType,
} from '../../src/licenses/entities/license/upgradeResult';
import { Axios } from 'axios';
import sinon from 'sinon';

export const LICENSES_MOCK_URL = 'https://licenses.localhost';
export const LICENSES_FIND_ENDPOINT = new RegExp('/licenses/v2/find.*');
export const LICENSES_CONFIG_FIND_ENDPOINT = new RegExp(
  '/licenses/XSP1234/configs',
);
export const LICENSE_MOCK_URL_LICENSE = '/licenses/123456';
export const LICENSE_MOCK_URL_UPDATE_SEATS = '/licenses/XSP123456/seats';
export const LICENSE_MOCK_URL_SUSPEND_LICENSE = '/licenses/XSP123456/suspend';
export const LICENSE_MOCK_URL_REACTIVATE_LICENSE =
  '/licenses/XSP123456/reactivate';
export const LICENSE_MOCK_URL_CANCEL_LICENSE = '/licenses/XSP123456/cancel';
export const LICENSE_MOCK_URL_UPDATE_FRIENDLYNAME =
  '/licenses/123456/friendlyName';
export const LICENSE_MOCK_URL_GET_HISTORY = '/licenses/12343/history';
export const LICENSE_MOCK_URL_CANCEL_AUTO_RENEW_LICENSE =
  '/licenses/XSP123456/autorenew/cancel';
export const LICENSE_MOCK_URL_REACTIVATE_AUTO_RENEW_LICENSE =
  '/licenses/XSP123456/autorenew/reactivate';
export const LICENSE_MOCK_URL_UPGRADE_LICENSE = '/licenses/XSP123456/upgrade';
export const LICENSE_MOCK_URL_CONVERSION_SKU_LICENSE =
  '/licenses/XSP123456/conversion/sku';
export const LICENSE_MOCK_URL_EXISTING_CONVERSION_SKU_LICENSE =
  '/licenses/XSP123456/conversion/existing';

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
    [LicenseFindResultFields.COLUMN_SECURITY]: {
      [SecurityFindResultFields.COLUMN_ACTIVE_FRAUD_EVENTS]: 0,
    },
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
  [LicenseFindParameters.DATA_EXCLUSION_FILTERS]: Joi.object().pattern(
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

const PAYLOAD_UPDATE_SEATS = {
  [LicenseGetFields.COLUMN_SEATS]: 3,
};

const PAYLOAD_UPDATE_SEATS_JOI = Joi.object({
  [LicenseGetFields.COLUMN_SEATS]: Joi.number(),
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
        [LicenseFindResultFields.COLUMN_ACCEPT_EULA]: true,
        [LicenseFindResultFields.COLUMN_SEAT]: {
          [LicenseFindParameters.FILTERS_GT]: 2,
          [LicenseFindParameters.FILTERS_LT]: 10,
        },
      },
      offer: {
        [OfferFindResultFields.COLUMN_PRICE_BAND]: {
          [PriceBandFindResultFields.COLUMN_ACTION_FLAGS]: {
            [PriceBandActionFlagsFindResultFields.COLUMN_CAN_BE_CANCELLED]: true,
          },
        },
      },
    },
    [LicenseFindParameters.DATA_EXCLUSION_FILTERS]: {
      license: {
        [LicenseFindResultFields.COLUMN_ACCEPT_EULA]: true,
        [LicenseFindResultFields.COLUMN_SEAT]: {
          [LicenseFindParameters.FILTERS_GT]: 2,
          [LicenseFindParameters.FILTERS_LT]: 10,
        },
      },
      offer: {
        [OfferFindResultFields.COLUMN_PRICE_BAND]: {
          [PriceBandFindResultFields.COLUMN_ACTION_FLAGS]: {
            [PriceBandActionFlagsFindResultFields.COLUMN_CAN_BE_CANCELLED]: true,
          },
        },
      },
    },
    [LicenseFindParameters.DATA_SORT]: {
      license: {
        [LicenseFindResultFields.COLUMN_CUSTOMER_NAME]:
          LicenseFindParameters.SORT_DESCENDING,
      },
      offer: {
        [OfferFindResultFields.COLUMN_PRICE_BAND]: {
          [PriceBandFindResultFields.COLUMN_CURRENCY]:
            LicenseFindParameters.SORT_ASCENDING,
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
    [LicenseFindParameters.DATA_EXCLUSION_FILTERS]: {
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

    it('works without offer filters', () => {
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

    it('works without offer exclusion filters', () => {
      nock(LICENSES_MOCK_URL)
        .post(LICENSES_FIND_ENDPOINT)
        .reply(() => {
          return [204];
        });
      expect(
        client.find({
          ...standardPayload,
          [LicenseFindParameters.DATA_EXCLUSION_FILTERS]: {
            license:
              standardPayload[LicenseFindParameters.DATA_EXCLUSION_FILTERS]
                ?.license,
          },
        }),
      ).not.to.be.rejected;
    });

    it('works without license exclusion filters', () => {
      nock(LICENSES_MOCK_URL)
        .post(LICENSES_FIND_ENDPOINT)
        .reply(() => {
          return [204];
        });
      expect(
        client.find({
          ...standardPayload,
          [LicenseFindParameters.DATA_EXCLUSION_FILTERS]: {
            offer:
              standardPayload[LicenseFindParameters.DATA_EXCLUSION_FILTERS]
                ?.offer,
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

  describe('getLicense', () => {
    const getLicenseClient = new PublicApiClient()
      .getLicensesClient()
      .setUrl(LICENSES_MOCK_URL);

    it('calls the get method and returns its result', async () => {
      nock(LICENSES_MOCK_URL)
        .get(LICENSE_MOCK_URL_LICENSE)
        .reply(200, PAYLOAD_SCHEMA_LICENSE);

      const result = await getLicenseClient.getLicense('123456');
      expect(result).to.be.instanceof(GetResult);
      expect(result.toJSON()).to.eql(PAYLOAD_SCHEMA_LICENSE);
    });

    it('calls the get method and returns its result without optional fields', async () => {
      nock(LICENSES_MOCK_URL)
        .get(LICENSE_MOCK_URL_LICENSE)
        .reply(200, PAYLOAD_SCHEMA_LICENSE_WITHOUT_OPTIONAL_FIELDS);

      const result = await getLicenseClient.getLicense('123456');
      expect(result).to.be.instanceof(GetResult);
      expect(result.toJSON()).to.eql(
        PAYLOAD_SCHEMA_LICENSE_WITHOUT_OPTIONAL_FIELDS,
      );
    });
  });

  describe('updateSeats', () => {
    const getLicenseClient = new PublicApiClient()
      .getLicensesClient()
      .setUrl(LICENSES_MOCK_URL);
    it('calls the put method with the right payload', async () => {
      nock(LICENSES_MOCK_URL)
        .put(LICENSE_MOCK_URL_UPDATE_SEATS)
        .reply((_uri, body) => {
          try {
            expect(() =>
              Joi.assert(body, PAYLOAD_UPDATE_SEATS_JOI),
            ).not.to.throw();
          } catch (error) {
            return [500];
          }

          return [204];
        });

      await getLicenseClient.updateSeats('XSP123456', PAYLOAD_UPDATE_SEATS);
    });
  });

  describe('suspendLicense', () => {
    const getLicenseClient = new PublicApiClient()
      .getLicensesClient()
      .setUrl(LICENSES_MOCK_URL);
    it('calls the put method', async () => {
      nock(LICENSES_MOCK_URL).put(LICENSE_MOCK_URL_SUSPEND_LICENSE).reply(204);

      await getLicenseClient.suspendLicense('XSP123456');
      expect(nock.isDone()).to.be.true;
    });
  });

  describe('reactivateLicense', () => {
    const getLicenseClient = new PublicApiClient()
      .getLicensesClient()
      .setUrl(LICENSES_MOCK_URL);
    it('calls the put method', async () => {
      nock(LICENSES_MOCK_URL)
        .put(LICENSE_MOCK_URL_REACTIVATE_LICENSE)
        .reply(204);

      await getLicenseClient.reactivateLicense('XSP123456');
      expect(nock.isDone()).to.be.true;
    });
  });

  describe('cancelLicense', () => {
    const getLicenseClient = new PublicApiClient()
      .getLicensesClient()
      .setUrl(LICENSES_MOCK_URL);
    it('calls the put method', async () => {
      nock(LICENSES_MOCK_URL).put(LICENSE_MOCK_URL_CANCEL_LICENSE).reply(204);

      await getLicenseClient.cancelLicense('XSP123456');
      expect(nock.isDone()).to.be.true;
    });
  });

  describe('updateFriendlyName', () => {
    const patchLicenseClient = new PublicApiClient()
      .getLicensesClient()
      .setUrl(LICENSES_MOCK_URL);
    it('call put method', async () => {
      nock(LICENSES_MOCK_URL)
        .put(LICENSE_MOCK_URL_UPDATE_FRIENDLYNAME)
        .reply(204);

      await patchLicenseClient.updateFriendlyName('123456', {
        [LicenseGetFields.COLUMN_FRIENDLY_NAME]: 'friendlyName',
      });
      expect(nock.isDone()).to.be.true;
    });
  });

  describe('getLicenseHistory', () => {
    const getLicenseHistory = new PublicApiClient()
      .getLicensesClient()
      .setUrl(LICENSES_MOCK_URL);
    it('call get method', async () => {
      nock(LICENSES_MOCK_URL)
        .get(LICENSE_MOCK_URL_GET_HISTORY)
        .reply(200, PAYLOAD_LICENSE_HISTORY);

      await getLicenseHistory.getHistory('12343');
      expect(nock.isDone()).to.be.true;
    });
  });

  describe('cancelAutoRenew', () => {
    const getLicenseClient = new PublicApiClient()
      .getLicensesClient()
      .setUrl(LICENSES_MOCK_URL);
    it('calls the put method', async () => {
      nock(LICENSES_MOCK_URL)
        .put(LICENSE_MOCK_URL_CANCEL_AUTO_RENEW_LICENSE)
        .reply(204);

      await getLicenseClient.cancelAutoRenew('XSP123456');
      expect(nock.isDone()).to.be.true;
    });
  });

  describe('reactivateAutoRenew', () => {
    const getLicenseClient = new PublicApiClient()
      .getLicensesClient()
      .setUrl(LICENSES_MOCK_URL);
    it('calls the put method', async () => {
      nock(LICENSES_MOCK_URL)
        .put(LICENSE_MOCK_URL_REACTIVATE_AUTO_RENEW_LICENSE)
        .reply(204);

      await getLicenseClient.reactivateAutoRenew('XSP123456');
      expect(nock.isDone()).to.be.true;
    });
  });

  describe('upgrade license', () => {
    const licensesClient: LicensesClient = new PublicApiClient()
      .getLicensesClient()
      .setUrl(LICENSES_MOCK_URL);

    let axiosClient: sinon.SinonStubbedInstance<Axios>;

    beforeEach(() => {
      axiosClient = sinon.stub(Axios.prototype);
    });

    afterEach(() => {
      sinon.restore();
    });

    it('calls the post method with the upgrade payload', async () => {
      const upgradeResult: UpgradeResultType = {
        [UpgradeResultFields.COLUMN_QUANTITY]: 3,
        [UpgradeResultFields.COLUMN_NAME]: 'Microsoft 365',
        [UpgradeResultFields.COLUMN_ORDER]: {
          reference: 'XSP34',
          link: 'order/123',
        },
        [UpgradeResultFields.COLUMN_PERIODICITY]: 'Monthly',
        [UpgradeResultFields.COLUMN_SKU]: 'MSCSP:123',
        [UpgradeResultFields.COLUMN_TERM]: '1 year',
      };

      const expectedResult = {
        status: 200,
        data: {
          data: upgradeResult,
          status: 200,
        },
      };

      const payload: PostUpgrade = {
        sku: 'MSCAP:123',
        billingCycle: 720,
        term: 86000,
        quantity: 2,
      };

      axiosClient.post.resolves(expectedResult);
      axiosClient.request.resolves(expectedResult);

      const result: GetResult<UpgradeResult> = await licensesClient.upgrade(
        'XSP123456',
        payload,
      );

      expect(result.data.toJSON()).to.be.eqls(upgradeResult);
    });
  });

  describe('upgradeToExisting', () => {
    const getLicenseClient = new PublicApiClient()
      .getLicensesClient()
      .setUrl(LICENSES_MOCK_URL);

    it('calls the upgradeToExisting method', async () => {
      nock(LICENSES_MOCK_URL)
        .post('/licenses/XSP123/conversion/XSP456')
        .reply(201);

      await getLicenseClient.upgradeToExisting('XSP123', 'XSP456', 2);
      expect(nock.isDone()).to.be.true;
    });
  });

  describe('saveOrderEavs', () => {
    it('calls the saveOrderEavs method', async () => {
      const licenseReference = 'XSP12345';
      const saveOrderEavsData: SaveOrderEavsInputType = {
        eavs: [
          {
            eavkeyName: 'order_comment_1',
            tableName: 'ORDER_INFO',
            value: 'The comment one',
          },
        ],
      };

      nock(LICENSES_MOCK_URL)
        .post(`/licenses/${licenseReference}/saveOrderEavs`)
        .reply(201);

      client.setPerPage(0);
      await client.saveOrderEavs(licenseReference, saveOrderEavsData);

      expect(nock.isDone()).to.be.true;
    });
  });

  describe('getConversionSku', () => {
    const getLicenseHistory = new PublicApiClient()
      .getLicensesClient()
      .setUrl(LICENSES_MOCK_URL);

    it('call getConversionSku method', async () => {
      nock(LICENSES_MOCK_URL)
        .get(LICENSE_MOCK_URL_CONVERSION_SKU_LICENSE)
        .reply(200, PAYLOAD_LICENSE_CONVERSION_SKU);

      await getLicenseHistory.getConversionSku('XSP123456');
      expect(nock.isDone()).to.be.true;
    });
  });

  describe('getExistingConversionSku', () => {
    const getLicenseHistory = new PublicApiClient()
      .getLicensesClient()
      .setUrl(LICENSES_MOCK_URL);

    it('call getExistingConversionSku method', async () => {
      nock(LICENSES_MOCK_URL)
        .get(LICENSE_MOCK_URL_EXISTING_CONVERSION_SKU_LICENSE)
        .reply(200, PAYLOAD_LICENSE_EXISTING_CONVERSION_SKU);

      await getLicenseHistory.getExistingConversionSku('XSP123456');
      expect(nock.isDone()).to.be.true;
    });
  });
});
