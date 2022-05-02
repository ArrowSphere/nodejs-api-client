import {
  ActionMessagesGetResultFields,
  ActionsGetFields,
  ActiveSeatsFindResultFields,
  BuySellFields,
  GetData,
  LicenseGetFields,
  LicensePriceGetFields,
  OrderGetFields,
} from '../../src';
import { GetLicenseResultData } from '../../src/licenses/entities/getResult/getLicenseResult';

export const PAYLOAD_SCHEMA_LICENSE: GetData<GetLicenseResultData> = {
  status: 200,
  data: {
    license: {
      [LicenseGetFields.COLUMN_LICENSE_ID]: '123456',
      [LicenseGetFields.COLUMN_PARENT_LICENSE_ID]: 'parent_license_id',
      [LicenseGetFields.COLUMN_FRIENDLY_NAME]: 'friendly_name',
      [LicenseGetFields.COLUMN_CUSTOMER_REF]: 'customer_ref',
      [LicenseGetFields.COLUMN_STATE]: 'state',
      [LicenseGetFields.COLUMN_STATUS_CODE]: 86,
      [LicenseGetFields.COLUMN_IS_TRIAL]: true,
      [LicenseGetFields.COLUMN_IS_ADDON]: true,
      [LicenseGetFields.COLUMN_SERVICE_REF]: 'service_ref',
      [LicenseGetFields.COLUMN_SKU]: 'sku',
      [LicenseGetFields.COLUMN_NAME]: 'name',
      [LicenseGetFields.COLUMN_SEATS]: 10,
      [LicenseGetFields.COLUMN_ACTIVE_SEATS]: {
        [ActiveSeatsFindResultFields.COLUMN_NUMBER]: 3,
        [ActiveSeatsFindResultFields.COLUMN_LAST_UPDATE]: new Date().toISOString(),
      },
      [LicenseGetFields.COLUMN_ACTIVATION_DATETIME]: 'activation_datetime',
      [LicenseGetFields.COLUMN_EXPIRY_DATETIME]: 'expiry_datetime',
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
      [LicenseGetFields.COLUMN_PERIODICITY_CODE]: 8640,
      [LicenseGetFields.COLUMN_TERM]: 'term',
      [LicenseGetFields.COLUMN_TERM_CODE]: 8640,
      [LicenseGetFields.COLUMN_CATEGORY]: 'category',
      [LicenseGetFields.COLUMN_PROGRAM]: 'program',
      [LicenseGetFields.COLUMN_ASSOCIATED_SUBSCRIPTION_PROGRAM]:
        'associated_subscription_program',
      [LicenseGetFields.COLUMN_PRICE]: {
        [LicensePriceGetFields.COLUMN_CURRENCY]: 'CURRENCY',
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

export const PAYLOAD_SCHEMA_LICENSE_WITHOUT_OPTIONAL_FIELDS: GetData<GetLicenseResultData> = {
  status: 200,
  data: {
    license: {
      [LicenseGetFields.COLUMN_LICENSE_ID]: '123456',
      [LicenseGetFields.COLUMN_PARENT_LICENSE_ID]: 'parent_license_id',
      [LicenseGetFields.COLUMN_FRIENDLY_NAME]: 'friendly_name',
      [LicenseGetFields.COLUMN_CUSTOMER_REF]: 'customer_ref',
      [LicenseGetFields.COLUMN_STATE]: 'state',
      [LicenseGetFields.COLUMN_STATUS_CODE]: 86,
      [LicenseGetFields.COLUMN_IS_TRIAL]: true,
      [LicenseGetFields.COLUMN_IS_ADDON]: true,
      [LicenseGetFields.COLUMN_SERVICE_REF]: 'service_ref',
      [LicenseGetFields.COLUMN_SKU]: 'sku',
      [LicenseGetFields.COLUMN_NAME]: 'name',
      [LicenseGetFields.COLUMN_SEATS]: 10,
      [LicenseGetFields.COLUMN_ACTIVE_SEATS]: {
        [ActiveSeatsFindResultFields.COLUMN_NUMBER]: 3,
        [ActiveSeatsFindResultFields.COLUMN_LAST_UPDATE]: new Date().toISOString(),
      },
      [LicenseGetFields.COLUMN_ACTIVATION_DATETIME]: 'activation_datetime',
      [LicenseGetFields.COLUMN_EXPIRY_DATETIME]: 'expiry_datetime',
      [LicenseGetFields.COLUMN_MESSAGE]: 'message',
      [LicenseGetFields.COLUMN_ORDER_REFERENCE]: 'reference',
      [LicenseGetFields.COLUMN_ORDER]: {
        [OrderGetFields.COLUMN_LINK]: 'link',
        [OrderGetFields.COLUMN_REFERENCE]: 'reference',
      },
      [LicenseGetFields.COLUMN_VENDOR_LICENSE_ID]: 'vendor_license_id',
      [LicenseGetFields.COLUMN_PERIODICITY]: 'periodicity',
      [LicenseGetFields.COLUMN_PERIODICITY_CODE]: 8640,
      [LicenseGetFields.COLUMN_TERM]: 'term',
      [LicenseGetFields.COLUMN_TERM_CODE]: 8640,
      [LicenseGetFields.COLUMN_CATEGORY]: 'category',
      [LicenseGetFields.COLUMN_PROGRAM]: 'program',
      [LicenseGetFields.COLUMN_ASSOCIATED_SUBSCRIPTION_PROGRAM]:
        'associated_subscription_program',
      [LicenseGetFields.COLUMN_PRICE]: {
        [LicensePriceGetFields.COLUMN_CURRENCY]: 'CURRENCY',
        [LicensePriceGetFields.COLUMN_UNIT]: {
          [BuySellFields.COLUMN_BUY]: 2,
          [BuySellFields.COLUMN_SELL]: 3,
        },
        [LicensePriceGetFields.COLUMN_TOTAL]: {
          [BuySellFields.COLUMN_BUY]: 2,
          [BuySellFields.COLUMN_SELL]: 3,
        },
      },
    },
  },
};
