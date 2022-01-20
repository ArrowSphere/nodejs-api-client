import Joi from 'joi';
import { expect } from 'chai';
import nock from 'nock';
import querystring from 'querystring';
import { URL } from 'url';

import { PublicApiClient } from '../../src';
import {
  LicenseGetFields,
  ActionsGetFields,
  ActionMessagesGetResultFields,
  OrderGetFields,
  LicensePriceGetFields,
  BuySellFields,
  ActiveSeatsFields,
} from '../../src';

const LICENSE_MOCK_URL = 'https://license.localhost';
const LICENSE_MOCK_URL_GET_LICENSE = '/licenses/123456';

export const PAYLOAD_SCHEMA_LICENSE = {
  status: 200,
  data: {
    license: {
      [LicenseGetFields.COLUMN_LICENSE_ID]: '123456',
      [LicenseGetFields.COLUMN_PARENT_LICENSE_ID]: 'parent_license_id',
      [LicenseGetFields.COLUMN_FRIENDLY_NAME]: 'friendly_name',
      [LicenseGetFields.COLUMN_CUSTOMER_REF]: 'customer_name',
      [LicenseGetFields.COLUMN_STATE]: 'state',
      [LicenseGetFields.COLUMN_SERVICE_REF]: 'service_ref',
      [LicenseGetFields.COLUMN_SKU]: 'sku',
      [LicenseGetFields.COLUMN_NAME]: 'name',
      [LicenseGetFields.COLUMN_SEATS]: 10,
      [LicenseGetFields.COLUMN_ACTIVE_SEATS]: {
        [ActiveSeatsFields.COLUMN_NUMBER]: 3,
        [ActiveSeatsFields.COLUMN_LAST_UPDATE]: new Date().toISOString(),
      },
      [LicenseGetFields.COLUMN_ACTIVATION_DATETIME]: 'activation_datetime',
      [LicenseGetFields.COLUMN_EXPIRY_DATETIME]: 'expery_datetime',
      [LicenseGetFields.COLUMN_AUTO_RENEW]: true,
      [LicenseGetFields.COLUMN_MESSAGE]: 'message',
      [LicenseGetFields.COLUMN_ACTIONS]: {
        [ActionsGetFields.COLUMN_HISTORY]: 'history',
        [ActionsGetFields.COLUMN_UPDATE]: 'update',
        [ActionsGetFields.COLUMN_INCREASE_SEATS]: 'increase_seats',
        [ActionsGetFields.COLUMN_DECREASE_SEATS]: 'decrease_seats',
        [ActionsGetFields.COLUMN_ADDONS_CATALOG]: 'addon_catalog',
        [ActionsGetFields.COLUMN_SUSPEND]: 'suspend',
        [ActionsGetFields.COLUMN_REACTIVATE]: 'reactivate',
        [ActionsGetFields.COLUMN_AUTO_RENEW_OFF]: 'auto_renew_off',
        [ActionsGetFields.COLUMN_AUTO_RENEW_ON]: 'auto_renew_on',
        [ActionsGetFields.COLUMN_CANCEL]: 'cancel',
      },
      [LicenseGetFields.COLUMN_ACTION_MESSAGES]: [
        {
          [ActionMessagesGetResultFields.COLUMN_ACTION]: 'action',
          [ActionMessagesGetResultFields.COLUMN_MESSAGE]: 'message',
          [ActionMessagesGetResultFields.COLUMN_MAX_DECREASE]: 5,
          [ActionMessagesGetResultFields.COLUMN_SUPPORTED_UNTIL]:
            'supported_until',
          [ActionMessagesGetResultFields.COLUMN_SUSPEND_DATE]: 'suspend_date',
        },
      ],
      [LicenseGetFields.COLUMN_ORDER_REFERENCE]: 'reference',
      [LicenseGetFields.COLUMN_ORDER]: {
        [OrderGetFields.COLUMN_LINK]: 'link',
        [OrderGetFields.COLUMN_REFERENCE]: 'reference',
      },
      [LicenseGetFields.COLUMN_VENDOR_LICENSE_ID]: 'vendor_license_id',
      [LicenseGetFields.COLUMN_PERIODICITY]: 'periodicity',
      [LicenseGetFields.COLUMN_TERM]: 'term',
      [LicenseGetFields.COLUMN_CATEGORY]: 'category',
      [LicenseGetFields.COLUMN_PROGRAM]: 'program',
      [LicenseGetFields.COLUMN_ASSOCIATED_SUBSCRIPTION_PROGRAM]:
        'associated_subscription_program',
      [LicenseGetFields.COLUMN_PRICE]: {
        [LicensePriceGetFields.COLUMN_UNIT]: {
          [BuySellFields.COLUMN_BUY]: 2,
          [BuySellFields.COLUMN_SELL]: 3,
        },
        [LicensePriceGetFields.COLUMN_TOTAL]: {
          [BuySellFields.COLUMN_BUY]: 2,
          [BuySellFields.COLUMN_SELL]: 3,
        },
      },
      [LicenseGetFields.COLUMN_ARROW_SUB_CATEGORIES]: ['string'],
    },
  },
};

const PAYLOAD_SCHEMA_LICENSE_JOI = Joi.object({
  status: Joi.number(),
  data: Joi.object({
    license: Joi.object({
      [LicenseGetFields.COLUMN_LICENSE_ID]: Joi.string(),
      [LicenseGetFields.COLUMN_PARENT_LICENSE_ID]: Joi.string(),
      [LicenseGetFields.COLUMN_FRIENDLY_NAME]: Joi.string(),
      [LicenseGetFields.COLUMN_CUSTOMER_REF]: Joi.string(),
      [LicenseGetFields.COLUMN_STATE]: Joi.string(),
      [LicenseGetFields.COLUMN_SERVICE_REF]: Joi.string(),
      [LicenseGetFields.COLUMN_SKU]: Joi.string(),
      [LicenseGetFields.COLUMN_NAME]: Joi.string(),
      [LicenseGetFields.COLUMN_SEATS]: Joi.string(),
      [LicenseGetFields.COLUMN_ACTIVE_SEATS]: Joi.object({
        [ActiveSeatsFields.COLUMN_NUMBER]: Joi.number(),
        [ActiveSeatsFields.COLUMN_LAST_UPDATE]: Joi.string(),
      }),
      [LicenseGetFields.COLUMN_ACTIVATION_DATETIME]: Joi.string(),
      [LicenseGetFields.COLUMN_EXPIRY_DATETIME]: Joi.string(),
      [LicenseGetFields.COLUMN_AUTO_RENEW]: Joi.boolean(),
      [LicenseGetFields.COLUMN_MESSAGE]: Joi.string(),
      [LicenseGetFields.COLUMN_ACTIONS]: Joi.object({
        [ActionsGetFields.COLUMN_HISTORY]: Joi.string(),
        [ActionsGetFields.COLUMN_UPDATE]: Joi.string(),
        [ActionsGetFields.COLUMN_INCREASE_SEATS]: Joi.string(),
        [ActionsGetFields.COLUMN_DECREASE_SEATS]: Joi.string(),
        [ActionsGetFields.COLUMN_ADDONS_CATALOG]: Joi.string(),
        [ActionsGetFields.COLUMN_SUSPEND]: Joi.string(),
        [ActionsGetFields.COLUMN_REACTIVATE]: Joi.string(),
        [ActionsGetFields.COLUMN_AUTO_RENEW_OFF]: Joi.string(),
        [ActionsGetFields.COLUMN_AUTO_RENEW_ON]: Joi.string(),
        [ActionsGetFields.COLUMN_CANCEL]: Joi.string(),
      }),
      [LicenseGetFields.COLUMN_ACTION_MESSAGES]: Joi.array().items(
        Joi.object({
          [ActionMessagesGetResultFields.COLUMN_ACTION]: Joi.string(),
          [ActionMessagesGetResultFields.COLUMN_MESSAGE]: Joi.string(),
          [ActionMessagesGetResultFields.COLUMN_MAX_DECREASE]: Joi.string(),
          [ActionMessagesGetResultFields.COLUMN_SUPPORTED_UNTIL]: Joi.string(),
          [ActionMessagesGetResultFields.COLUMN_SUSPEND_DATE]: Joi.string(),
        }),
      ),
      [LicenseGetFields.COLUMN_ORDER_REFERENCE]: Joi.string(),
      [LicenseGetFields.COLUMN_ORDER]: Joi.object({
        [OrderGetFields.COLUMN_LINK]: Joi.string(),
        [OrderGetFields.COLUMN_REFERENCE]: Joi.string(),
      }),
      [LicenseGetFields.COLUMN_VENDOR_LICENSE_ID]: Joi.string(),
      [LicenseGetFields.COLUMN_PERIODICITY]: Joi.string(),
      [LicenseGetFields.COLUMN_TERM]: Joi.string(),
      [LicenseGetFields.COLUMN_CATEGORY]: Joi.string(),
      [LicenseGetFields.COLUMN_PROGRAM]: Joi.string(),
      [LicenseGetFields.COLUMN_ASSOCIATED_SUBSCRIPTION_PROGRAM]: Joi.string(),
      [LicenseGetFields.COLUMN_PRICE]: Joi.object({
        [LicensePriceGetFields.COLUMN_UNIT]: Joi.object({
          [BuySellFields.COLUMN_BUY]: Joi.number(),
          [BuySellFields.COLUMN_SELL]: Joi.number(),
        }),
        [LicensePriceGetFields.COLUMN_TOTAL]: Joi.object({
          [BuySellFields.COLUMN_BUY]: Joi.number(),
          [BuySellFields.COLUMN_SELL]: Joi.number(),
        }),
      }),
      [LicenseGetFields.COLUMN_ARROW_SUB_CATEGORIES]: Joi.array().items(
        Joi.string(),
      ),
    }),
  }),
});

describe('LicenseClient', () => {
  const client = new PublicApiClient()
    .setUrl(LICENSE_MOCK_URL)
    .getLicenseClient();

  describe('findLicense', () => {
    it('calls the get method with the right payload', async () => {
      nock(LICENSE_MOCK_URL)
        .get(LICENSE_MOCK_URL_GET_LICENSE)
        .reply((_uri) => {
          try {
            const query = querystring.decode(
              new URL(_uri, LICENSE_MOCK_URL).search.replace('?', ''),
            );
            expect(() =>
              Joi.assert(query, PAYLOAD_SCHEMA_LICENSE_JOI),
            ).not.to.throw();
          } catch (error) {
            return [500];
          }
          return [204];
        });

      await client.getLicense('123456');
    });

    it('calls the get method and returns its result', async () => {
      nock(LICENSE_MOCK_URL)
        .get(LICENSE_MOCK_URL_GET_LICENSE)
        .reply(200, PAYLOAD_SCHEMA_LICENSE);

      const result = await client.getLicense('123456');
      expect(result).to.eql(PAYLOAD_SCHEMA_LICENSE);
    });
  });
});
