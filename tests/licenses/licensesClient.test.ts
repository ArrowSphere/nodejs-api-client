// Test tools
import Joi from 'joi';
import { URL } from 'url';
import { expect } from 'chai';
import nock from 'nock';

// Sources
import {
  ActionFlagsFindResultFields,
  ActiveSeatsFindResultFields,
  ArrowsphereFindResultFields,
  AutoRenewStatuses,
  BillingFindResultFields,
  BulkSetRateBody,
  ConfigFindResult,
  ConfigFindResultData,
  ConfigFindResultFields,
  FindConfig,
  FindData,
  FindResult,
  GetResult,
  IdentifiersFindResultFields,
  LicenseFindParameters,
  LicenseFindPayload,
  LicenseFindRawPayload,
  LicenseFindResultData,
  LicenseFindResultFields,
  LicenseGetFields,
  LicensesClient,
  OfferFindResultData,
  OfferFindResultFields,
  PostUpgrade,
  PriceBandActionFlagsFindResultFields,
  PriceBandFindResultFields,
  PriceBandPriceFindResultFields,
  PriceFindResultFields,
  PublicApiClient,
  RateTypeEnum,
  SaleConstraintsFindResultFields,
  SaveBillingCommentsInputType,
  SecurityFindResultFields,
  SpecialPriceRateTypes,
  SpecialRateEffectiveApplicationDate,
  WarningFindResultFields,
  UpgradeResult,
  UpgradeResultFields,
  UpgradeResultType,
  PartialResponse,
  PartialResponseFields,
  GetData,
  ConsumptionDailyPrediction,
  SaveSpecialBidInputType,
  RewriteRateHistoryInputType,
  CompanyTypeEnum,
  GetScheduledTasksResult,
  GetScheduleTaskResult,
  BulkUploadChangesBody,
} from '../../src';
import {
  PAYLOAD_GET_SCHEDULED_TASKS,
  LICENSE_SCHEDULED_TASK_GET_RESPONSE,
  PAYLOAD_LICENSE_CONVERSION_SKU,
  PAYLOAD_LICENSE_EXISTING_CONVERSION_SKU,
  PAYLOAD_LICENSE_GET_CREDENTIALS,
  PAYLOAD_LICENSE_HISTORY,
  PAYLOAD_LICENSE_PATCH_SCHEDULED_TASK,
  PAYLOAD_LICENSE_POST_SCHEDULE_TASKS,
  PAYLOAD_SCHEMA_LICENSE,
  PAYLOAD_SCHEMA_LICENSE_WITHOUT_OPTIONAL_FIELDS,
  PAYLOAD_LICENSE_COUPON_CODE_HISTORY,
  GET_ATTACHMENTS_RESPONSE,
  POST_ATTACHMENT_RESPONSE,
  POST_ATTACHMENT_PAYLOAD,
} from './licenses.mocks';
import { Axios } from 'axios';
import sinon from 'sinon';
import {
  ActionTypes,
  BulkAutoRenewBody,
  BulkBodyFields,
} from '../../src/licenses/types/bulkArguments';
import { constants } from 'http2';
import {
  EndCustomerOrganizationUnitFindResultFields,
  EndCustomerOrganizationUnitFindResultType,
} from '../../src/licenses/entities/endCustomerOrganizationUnit/endCustomerOrganizationUnitFindResult';
import { GET_LICENSE_DAILY_PREDICTIONS_RESPONSE } from '../consumption/mocks/consumption.mocks';
import {
  AttachmentLicense,
  AttachmentsLicense,
} from '../../src/licenses/entities/license/attachment';

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
export const LICENSE_MOCK_URL_GET_COUPON_CODE_HISTORY =
  '/licenses/12343/couponCodeHistory';
export const LICENSE_MOCK_URL_CANCEL_AUTO_RENEW_LICENSE =
  '/licenses/XSP123456/autorenew/cancel';
export const LICENSE_MOCK_URL_REACTIVATE_AUTO_RENEW_LICENSE =
  '/licenses/XSP123456/autorenew/reactivate';
export const LICENSE_MOCK_URL_UPGRADE_LICENSE = '/licenses/XSP123456/upgrade';
export const LICENSE_MOCK_URL_CONVERSION_SKU_LICENSE =
  '/licenses/XSP123456/conversion/sku';
export const LICENSE_MOCK_URL_EXISTING_CONVERSION_SKU_LICENSE =
  '/licenses/XSP123456/conversion/existing';
export const LICENSE_MOCK_URL_GET_CREDENTIALS = '/licenses/12343/credentials';
export const LICENSE_MOCK_URL_PRICING_RATE = '/licenses/XSP12343/pricing-rate';
export const LICENSE_MOCK_URL_SCHEDULE_TASKS =
  '/licenses/XSP12343/scheduledTasks';
export const LICENSE_MOCK_URL_SCHEDULED_TASKS =
  '/licenses/XSP12343/scheduledTasks/12345';
export const LICENSE_MOCK_URL_ATTACHMENT = '/licenses/XSP12343/attachment';
export const LICENSE_MOCK_URL_ATTACHMENT_NAME =
  '/licenses/XSP12343/attachment/name';
export const LICENSE_MOCK_URL_BULK = '/licenses/bulk-action';

/**
 * Mock license data to be used in tests and returned by mocks
 */
export const MOCK_RESULT_DATA: {
  license: LicenseFindResultData;
  offer: OfferFindResultData;
  endCustomerOrganizationUnit: EndCustomerOrganizationUnitFindResultType;
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
    [LicenseFindResultFields.COLUMN_OFFER_ARROWSPHERE_SKU]: 'offer_sku',
    [LicenseFindResultFields.COLUMN_NEXT_RENEWAL_DATE]: new Date().toISOString(),
    [LicenseFindResultFields.COLUMN_ORDER_REF]: 'order_ref',
    [LicenseFindResultFields.COLUMN_PRICEBAND_VENDOR_SKU]:
      'priceband_vendor_sku',
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
  endCustomerOrganizationUnit: {
    [EndCustomerOrganizationUnitFindResultFields.COLUMN_NAME]: 'name',
    [EndCustomerOrganizationUnitFindResultFields.COLUMN_ORGANIZATION_UNIT_REF]:
      '123456',
    [EndCustomerOrganizationUnitFindResultFields.COLUMN_LAST_UPDATE]:
      '10-10-10',
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
      name: LicenseFindResultFields.COLUMN_ACCEPT_EULA,
      values: [{ value: 'true', count: 1 }],
    },
  ],
  results: [MOCK_RESULT_DATA],
};

/**
 * Joi representation of the payload schema to be sent to the find payload
 * This allows us to insure the payload integrity throughout the updates.
 */
const PAYLOAD_SCHEMA = Joi.object({
  [LicenseFindParameters.DATA_AGGREGATION]: [Joi.string()],
  [LicenseFindParameters.DATA_COMPARE]: Joi.object().pattern(
    Joi.string().valid(
      ...Object.values(PriceFindResultFields).map(
        (field) => `license.price.${field}`,
      ),
      ...Object.values(PriceBandPriceFindResultFields).map(
        (field) => `offer.priceBand.prices.${field}`,
      ),
    ),
    Joi.object({
      field: Joi.string().required(),
      operator: Joi.string().valid('EQ', 'NEQ'), // adapte si besoin
    }),
  ),
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

const PAYLOAD_UPDATE_LICENSE = {
  [LicenseGetFields.COLUMN_FRIENDLY_NAME]: 'My customer License',
  [LicenseGetFields.COLUMN_SEATS]: 3,
  [LicenseGetFields.COLUMN_ORGANIZATION_UNIT_ID]: 28,
};

const PAYLOAD_UPDATE_SEATS = {
  [LicenseGetFields.COLUMN_SEATS]: 3,
};

const PAYLOAD_UPDATE_SEATS_JOI = Joi.object({
  [LicenseGetFields.COLUMN_SEATS]: Joi.number(),
});

const PARTIAL_RESPONSE_UPDATE_LICENSE = {
  [PartialResponseFields.COLUMN_STATUS]: constants.HTTP_STATUS_PARTIAL_CONTENT,
  [PartialResponseFields.COLUMN_ERROR]: 'Accepted',
  [PartialResponseFields.COLUMN_MESSAGES]: [
    'Warning: The desired seat count 10 exceeded the maximum seat count allowed per License 5',
  ],
};

describe('LicensesClient', () => {
  const client = new PublicApiClient()
    .getLicensesClient()
    .setUrl(LICENSES_MOCK_URL);
  // Standard payload as per described by types
  const standardPayload: LicenseFindPayload = {
    [LicenseFindParameters.DATA_COMPARE]: {
      'license.price.buy_price': {
        field: 'offer.priceBand.prices.buy',
        operator: 'NEQ',
      },
    },
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
      endCustomerOrganizationUnit: {
        [EndCustomerOrganizationUnitFindResultFields.COLUMN_NAME]: 'test',
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
      endCustomerOrganizationUnit: {
        [EndCustomerOrganizationUnitFindResultFields.COLUMN_NAME]: 'test',
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
      endCustomerOrganizationUnit: {
        [EndCustomerOrganizationUnitFindResultFields.COLUMN_NAME]:
          LicenseFindParameters.SORT_ASCENDING,
      },
    },
    [LicenseFindParameters.DATA_HIGHLIGHT]: true,
  };

  const standardRawPayload: LicenseFindRawPayload = {
    ...standardPayload,
    [LicenseFindParameters.DATA_COMPARE]: {
      [`license.${LicenseFindResultFields.COLUMN_PRICE}.${PriceFindResultFields.COLUMN_BUY_PRICE}`]: {
        field: `offer.${OfferFindResultFields.COLUMN_PRICE_BAND}.${PriceBandFindResultFields.COLUMN_PRICES}.${PriceBandPriceFindResultFields.COLUMN_BUY}`,
        operator: LicenseFindParameters.OPERATOR_NEQ,
      },
    },
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

    it('works without endCustomerOrganizationUnit filters', () => {
      nock(LICENSES_MOCK_URL)
        .post(LICENSES_FIND_ENDPOINT)
        .reply(() => {
          return [204];
        });
      expect(
        client.find({
          ...standardPayload,
          [LicenseFindParameters.DATA_FILTERS]: {
            endCustomerOrganizationUnit:
              standardPayload[LicenseFindParameters.DATA_FILTERS]
                ?.endCustomerOrganizationUnit,
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

    it('works without endCustomerOrganizationUnit exclusion filters', () => {
      nock(LICENSES_MOCK_URL)
        .post(LICENSES_FIND_ENDPOINT)
        .reply(() => {
          return [204];
        });
      expect(
        client.find({
          ...standardPayload,
          [LicenseFindParameters.DATA_EXCLUSION_FILTERS]: {
            endCustomerOrganizationUnit:
              standardPayload[LicenseFindParameters.DATA_EXCLUSION_FILTERS]
                ?.endCustomerOrganizationUnit,
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

    it('works without endCustomerOrganizationUnit sort', () => {
      nock(LICENSES_MOCK_URL)
        .post(LICENSES_FIND_ENDPOINT)
        .reply(() => {
          return [204];
        });
      expect(
        client.find({
          ...standardPayload,
          [LicenseFindParameters.DATA_SORT]: {
            endCustomerOrganizationUnit:
              standardPayload[LicenseFindParameters.DATA_SORT]
                ?.endCustomerOrganizationUnit,
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

  describe('updateConfig', () => {
    it('calls the post method with the update config', async () => {
      const postData: ConfigFindResultData = {
        [ConfigFindResultFields.COLUMN_NAME]: 'purchaseReservations',
        [ConfigFindResultFields.COLUMN_SCOPE]: 'role',
        [ConfigFindResultFields.COLUMN_STATE]: 'enabled',
      };

      const config: ConfigFindResult = new ConfigFindResult(postData);

      const response: GetData<ConfigFindResultData> = {
        data: {
          [ConfigFindResultFields.COLUMN_NAME]: 'purchaseReservations',
          [ConfigFindResultFields.COLUMN_SCOPE]: 'role',
          [ConfigFindResultFields.COLUMN_STATE]: 'enabled',
        },
        status: 200,
      };

      nock(LICENSES_MOCK_URL)
        .post(LICENSES_CONFIG_FIND_ENDPOINT)
        .reply(200, response);

      const result: GetResult<ConfigFindResult> = await client.updateConfig(
        'XSP1234',
        config,
      );

      const resultData: GetData<ConfigFindResultData> = result.toJSON();
      expect(result).to.be.instanceOf(GetResult);
      expect(resultData.data).to.be.deep.equals(config.toJSON());
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

  describe('updateLicense', () => {
    const getLicenseClient = new PublicApiClient()
      .getLicensesClient()
      .setUrl(LICENSES_MOCK_URL);

    it('calls the get method and returns its result', async () => {
      nock(LICENSES_MOCK_URL)
        .patch(LICENSE_MOCK_URL_LICENSE)
        .reply(constants.HTTP_STATUS_PARTIAL_CONTENT);

      const response = await getLicenseClient.updateLicense(
        '123456',
        PAYLOAD_UPDATE_LICENSE,
      );

      expect(response).to.not.instanceOf(PartialResponse);
      expect(nock.isDone()).to.be.true;
    });

    it('calls the get method and returns its result with partial success', async () => {
      nock(LICENSES_MOCK_URL)
        .patch(LICENSE_MOCK_URL_LICENSE)
        .reply(
          constants.HTTP_STATUS_PARTIAL_CONTENT,
          PARTIAL_RESPONSE_UPDATE_LICENSE,
        );

      const response = await getLicenseClient.updateLicense(
        '123456',
        PAYLOAD_UPDATE_LICENSE,
      );

      expect(response).to.instanceOf(PartialResponse);
      expect((response as PartialResponse).toJSON()).to.be.deep.equals(
        PARTIAL_RESPONSE_UPDATE_LICENSE,
      );
      expect(nock.isDone()).to.be.true;
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

  describe('saveBillingComments', () => {
    it('calls the saveBillingComments method', async () => {
      const licenseReference = 'XSP12345';
      const payload: SaveBillingCommentsInputType = {
        comment1: 'The comment 1',
        comment2: 'The comment 2',
      };

      nock(LICENSES_MOCK_URL)
        .post(`/licenses/${licenseReference}/billingComments`)
        .reply(201);

      client.setPerPage(0);
      await client.saveBillingComments(licenseReference, payload);

      expect(nock.isDone()).to.be.true;
    });
  });

  describe('getConversionSku', () => {
    const licensesClient = new PublicApiClient()
      .getLicensesClient()
      .setUrl(LICENSES_MOCK_URL);

    it('call getConversionSku method', async () => {
      nock(LICENSES_MOCK_URL)
        .get(LICENSE_MOCK_URL_CONVERSION_SKU_LICENSE)
        .reply(200, PAYLOAD_LICENSE_CONVERSION_SKU);

      await licensesClient.getConversionSku('XSP123456');
      expect(nock.isDone()).to.be.true;
    });
  });

  describe('getExistingConversionSku', () => {
    const licensesClient = new PublicApiClient()
      .getLicensesClient()
      .setUrl(LICENSES_MOCK_URL);

    it('call getExistingConversionSku method', async () => {
      nock(LICENSES_MOCK_URL)
        .get(LICENSE_MOCK_URL_EXISTING_CONVERSION_SKU_LICENSE)
        .reply(200, PAYLOAD_LICENSE_EXISTING_CONVERSION_SKU);

      await licensesClient.getExistingConversionSku('XSP123456');
      expect(nock.isDone()).to.be.true;
    });
  });

  describe('getCredentials', () => {
    const licensesClient = new PublicApiClient()
      .getLicensesClient()
      .setUrl(LICENSES_MOCK_URL);
    it('call get method', async () => {
      nock(LICENSES_MOCK_URL)
        .get(LICENSE_MOCK_URL_GET_CREDENTIALS)
        .reply(200, PAYLOAD_LICENSE_GET_CREDENTIALS);

      await licensesClient.getCredentials('12343');
      expect(nock.isDone()).to.be.true;
    });
  });

  describe('setPricingRate', () => {
    const licensesClient = new PublicApiClient()
      .getLicensesClient()
      .setUrl(LICENSES_MOCK_URL);
    it('should call setPricingRate', async () => {
      nock(LICENSES_MOCK_URL).post(LICENSE_MOCK_URL_PRICING_RATE).reply(204);

      await licensesClient.setPricingRate('XSP12343', {
        rateType: RateTypeEnum.DISCOUNT,
        rateValue: 10,
        applyOnNextBillingPeriod: true,
      });

      expect(nock.isDone()).to.be.true;
    });
  });

  describe('scheduleTasks', () => {
    const licensesClient = new PublicApiClient()
      .getLicensesClient()
      .setUrl(LICENSES_MOCK_URL);
    it('should call scheduleTasks method', async () => {
      nock(LICENSES_MOCK_URL)
        .post(LICENSE_MOCK_URL_SCHEDULE_TASKS)
        .reply(200, PAYLOAD_LICENSE_POST_SCHEDULE_TASKS);

      const result = await licensesClient.scheduleTasks('XSP12343', {
        periodicity: 720,
        term: 720,
        seats: 10,
        executionDate: '2023-01-01',
      });

      expect(nock.isDone()).to.be.true;
      expect(result.data.toJSON()).to.be.eqls(
        PAYLOAD_LICENSE_POST_SCHEDULE_TASKS.data,
      );
    });
  });

  describe('getScheduledTasks', () => {
    const licensesClient = new PublicApiClient()
      .getLicensesClient()
      .setUrl(LICENSES_MOCK_URL);

    it('should call getScheduledTasks method', async () => {
      const licenseReference = 'XSP123456';

      nock(LICENSES_MOCK_URL)
        .get(`/licenses/${licenseReference}/scheduledTasks`)
        .reply(constants.HTTP_STATUS_OK, {
          status: 200,
          data: PAYLOAD_GET_SCHEDULED_TASKS,
        });

      const response: GetResult<GetScheduledTasksResult> = await licensesClient.getScheduledTasks(
        licenseReference,
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON().data).to.be.deep.equals(
        PAYLOAD_GET_SCHEDULED_TASKS,
      );
    });
  });

  describe('updateScheduledTask', () => {
    const licensesClient = new PublicApiClient()
      .getLicensesClient()
      .setUrl(LICENSES_MOCK_URL);
    it('call the patch method', async function () {
      nock(LICENSES_MOCK_URL)
        .patch(LICENSE_MOCK_URL_SCHEDULED_TASKS)
        .reply(constants.HTTP_STATUS_NO_CONTENT);

      await licensesClient.updateScheduledTask(
        'XSP12343',
        12345,
        PAYLOAD_LICENSE_PATCH_SCHEDULED_TASK,
      );
      expect(nock.isDone()).to.be.true;
    });
  });

  describe('getScheduledTask', () => {
    const licensesClient = new PublicApiClient()
      .getLicensesClient()
      .setUrl(LICENSES_MOCK_URL);
    it('call the get method', async function () {
      nock(LICENSES_MOCK_URL)
        .get(LICENSE_MOCK_URL_SCHEDULED_TASKS)
        .reply(constants.HTTP_STATUS_OK, LICENSE_SCHEDULED_TASK_GET_RESPONSE);

      const response: GetResult<GetScheduleTaskResult> = await licensesClient.getScheduledTask(
        'XSP12343',
        12345,
      );
      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equal(
        LICENSE_SCHEDULED_TASK_GET_RESPONSE,
      );
    });
  });

  describe('deleteScheduledTask', () => {
    const licensesClient = new PublicApiClient()
      .getLicensesClient()
      .setUrl(LICENSES_MOCK_URL);
    it('call the delete method', async function () {
      nock(LICENSES_MOCK_URL)
        .delete(LICENSE_MOCK_URL_SCHEDULED_TASKS)
        .reply(constants.HTTP_STATUS_NO_CONTENT);

      await licensesClient.deleteScheduledTask('XSP12343', 12345);
      expect(nock.isDone()).to.be.true;
    });
  });

  describe('getAttachmentsLicense', () => {
    const licensesClient = new PublicApiClient()
      .getLicensesClient()
      .setUrl(LICENSES_MOCK_URL);

    it('should call getAttachmentsLicense method', async () => {
      const licenseReference = 'XSP12343';

      nock(LICENSES_MOCK_URL)
        .get(LICENSE_MOCK_URL_ATTACHMENT)
        .reply(constants.HTTP_STATUS_OK, GET_ATTACHMENTS_RESPONSE);

      const result: GetResult<AttachmentsLicense> = await licensesClient.getAttachmentsLicense(
        licenseReference,
      );

      expect(result).to.be.instanceof(GetResult);
      expect(result.toJSON().data).to.be.deep.equals(
        GET_ATTACHMENTS_RESPONSE.data,
      );
    });
  });

  describe('deleteAttachmentLicense', () => {
    const licensesClient = new PublicApiClient()
      .getLicensesClient()
      .setUrl(LICENSES_MOCK_URL);
    it('call the delete method', async function () {
      nock(LICENSES_MOCK_URL)
        .delete(LICENSE_MOCK_URL_ATTACHMENT_NAME)
        .reply(constants.HTTP_STATUS_NO_CONTENT);

      await licensesClient.deleteAttachmentLicense('XSP12343', 'name');
      expect(nock.isDone()).to.be.true;
    });
  });

  describe('uploadAttachmentLicense', () => {
    const licensesClient = new PublicApiClient()
      .getLicensesClient()
      .setUrl(LICENSES_MOCK_URL);
    it('should call scheduleTasks method', async () => {
      nock(LICENSES_MOCK_URL)
        .post(LICENSE_MOCK_URL_ATTACHMENT)
        .reply(constants.HTTP_STATUS_OK, POST_ATTACHMENT_RESPONSE);

      const result: GetResult<AttachmentLicense> = await licensesClient.uploadAttachmentLicense(
        'XSP12343',
        POST_ATTACHMENT_PAYLOAD,
      );

      expect(nock.isDone()).to.be.true;
      expect(result.toJSON().data).to.be.deep.equals(
        POST_ATTACHMENT_RESPONSE.data,
      );
    });
  });

  describe('bulkAction', () => {
    it('calls the bulk action method with the autoRenew type', async () => {
      const postData: BulkAutoRenewBody = {
        [BulkBodyFields.ACTION_TYPE]: ActionTypes.AUTO_RENEW,
        [BulkBodyFields.LICENSES]: ['XSP56T5434', 'XSP56T5435'],
        [BulkBodyFields.AUTO_RENEW_STATUS]: AutoRenewStatuses.ON,
      };

      nock(LICENSES_MOCK_URL).post(LICENSE_MOCK_URL_BULK).reply(200, postData);

      const result = await client.bulkAction(postData);
      expect(result).to.eqls(postData);
    });

    it('calls the bulk action method with the setRate type', async () => {
      const postData: BulkSetRateBody = {
        [BulkBodyFields.ACTION_TYPE]: ActionTypes.SET_RATE,
        [BulkBodyFields.LICENSES]: ['XSP56T5454', 'XSP56T5425'],
        [BulkBodyFields.SPECIAL_PRICE_RATE_TYPE]:
          SpecialPriceRateTypes.DISCOUNT,
        [BulkBodyFields.SPECIAL_PRICE_RATE_VALUE]: '5',
        [BulkBodyFields.SPECIAL_RATE_EFFECTIVE_APPLICATION_DATE]:
          SpecialRateEffectiveApplicationDate.APPLY_IMMEDIATELY,
      };

      nock(LICENSES_MOCK_URL).post(LICENSE_MOCK_URL_BULK).reply(200, postData);

      const result = await client.bulkAction(postData);
      expect(result).to.eqls(postData);
    });

    it('calls the bulk action method with the uploadChanges type', async () => {
      const postData: BulkUploadChangesBody = {
        [BulkBodyFields.ACTION_TYPE]: ActionTypes.UPLOAD_CHANGES,
        [BulkBodyFields.FILE_NAME]:
          'MyCustomersServices_XSP_Mon Jun 10 2024 12_03_47 GMT+0200 (Central European Summer Time).xlsx',
        [BulkBodyFields.FILE_BASE64]:
          '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',
      };

      nock(LICENSES_MOCK_URL).post(LICENSE_MOCK_URL_BULK).reply(200, postData);

      const result = await client.bulkAction(postData);
      expect(result).to.eqls(postData);
    });
  });

  describe('getLicenseDailyPredictions', () => {
    it('call the get method getLicenseDailyPredictions', async () => {
      const licenseReference = 'XSP123456';

      nock(LICENSES_MOCK_URL)
        .get(`/licenses/${licenseReference}/predictions/daily`)
        .reply(
          constants.HTTP_STATUS_OK,
          GET_LICENSE_DAILY_PREDICTIONS_RESPONSE,
        );

      const response: GetResult<ConsumptionDailyPrediction> = await client.getLicenseDailyPredictions(
        licenseReference,
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.data).to.be.instanceof(ConsumptionDailyPrediction);
      expect(response.toJSON()).to.be.deep.equals(
        GET_LICENSE_DAILY_PREDICTIONS_RESPONSE,
      );
    });
  });

  describe('saveSpecialBid', () => {
    it('calls the saveSpecialBid method', async () => {
      const licenseReference = 'XSP12345';
      const payload: SaveSpecialBidInputType = {
        arwRateValue: 10,
        mspRateValue: 2,
      };

      nock(LICENSES_MOCK_URL)
        .post(`/licenses/${licenseReference}/special-bid`)
        .reply(201);

      client.setPerPage(0);
      await client.saveSpecialdBid(licenseReference, payload);

      expect(nock.isDone()).to.be.true;
    });
  });

  describe('rewriteRateHistory', () => {
    it('calls the rewriteRateHistory method', async () => {
      const licenseReference = 'XSP12345';
      const payload: RewriteRateHistoryInputType = {
        companyType: CompanyTypeEnum.ARROW,
        dateEnd: '2023-12-31',
        dateStart: '2023-02-01',
        rateType: 'discount',
        rate: 10,
      };

      nock(LICENSES_MOCK_URL)
        .post(`/licenses/${licenseReference}/rewrite-rate-history`)
        .reply(201);

      client.setPerPage(0);
      await client.rewriteRateHistory(licenseReference, payload);

      expect(nock.isDone()).to.be.true;
    });
  });

  describe('getLicenseCouponCodeHistory', () => {
    const getLicenseCouponCodeHistory = new PublicApiClient()
      .getLicensesClient()
      .setUrl(LICENSES_MOCK_URL);
    it('call get method', async () => {
      nock(LICENSES_MOCK_URL)
        .get(LICENSE_MOCK_URL_GET_COUPON_CODE_HISTORY)
        .reply(200, PAYLOAD_LICENSE_COUPON_CODE_HISTORY);

      await getLicenseCouponCodeHistory.getCouponCodeHistory('12343');
      expect(nock.isDone()).to.be.true;
    });
  });
});
