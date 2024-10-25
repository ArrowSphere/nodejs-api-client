import {
  ActionHistoryResultData,
  ActionHistoryResultFields,
  ActionMessagesGetResultFields,
  ActionsGetFields,
  ActiveSeatsFindResultFields,
  BuySellFields,
  ConversionSkuResultData,
  GetData,
  GetLicenseResultData,
  HistoryNoteFields,
  LicenceHistoryResultData,
  LicenceHistoryResultFields,
  LicenseConversionSkuFields,
  LicenseConversionSkuResultData,
  LicenseGetFields,
  LicensePriceGetFields,
  OrderGetFields,
  SecurityFindResultFields,
  CompanyTypeEnum,
  GetPricingRateData,
  RateTypeEnum,
  ScheduleTaskData,
  RelationGetDataFields,
  ConfigFindResultFields,
  WarningFindResultFields,
  GetScheduleTaskResultData,
  GetScheduledTasksResultData,
  GetScheduleTaskResultFields,
  GetResultFields,
  UpdateScheduledTaskRequestType,
  LicenceCouponCodeHistoryResultData,
  LicenceCouponCodeHistoryResultFields,
  SaleConstraintsFindResultFields,
  GetScheduledTasksResultFields,
} from '../../src';
import { ExtraDataFields } from '../../src/licenses/entities/getLicense/extraDataGetResult';
import { CredentialsResultType } from '../../src/licenses/entities/license/credentialsResult';
import { RatesGetDataFields } from '../../src/licenses/entities/getLicense/ratesGetResult';
import { constants } from 'http2';
import { PriceBandDataFields } from '../../src/licenses/entities/getLicense/priceBandGetResult';

export const PAYLOAD_SCHEMA_LICENSE: GetData<GetLicenseResultData> = {
  status: 200,
  data: {
    license: {
      [LicenseGetFields.COLUMN_CLASSIFICATION]: 'SaaS',
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
      [LicenseGetFields.COLUMN_SECURITY]: {
        [SecurityFindResultFields.COLUMN_ACTIVE_FRAUD_EVENTS]: 0,
      },
      [LicenseGetFields.COLUMN_ACTIVATION_DATETIME]: 'activation_datetime',
      [LicenseGetFields.COLUMN_EXPIRY_DATETIME]: 'expiry_datetime',
      [LicenseGetFields.COLUMN_AUTO_RENEW]: true,
      [LicenseGetFields.COLUMN_MARKETPLACE]: 'FR',
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
        [LicensePriceGetFields.COLUMN_PRICEBAND_ARROWSPHERE_SKU]:
          'MSCSP_CFQ7TTC0LH16-0001_FR_EUR_1_720_8640',
        [LicensePriceGetFields.COLUMN_UNIT]: {
          [BuySellFields.COLUMN_BUY]: 2,
          [BuySellFields.COLUMN_SELL]: 3,
          [BuySellFields.COLUMN_LIST]: 3.5,
          [BuySellFields.COLUMN_INIT]: 2.1,
        },
        [LicensePriceGetFields.COLUMN_TOTAL]: {
          [BuySellFields.COLUMN_BUY]: 2,
          [BuySellFields.COLUMN_SELL]: 3,
          [BuySellFields.COLUMN_LIST]: 3.5,
          [BuySellFields.COLUMN_INIT]: 2.1,
        },
      },
      [LicenseGetFields.COLUMN_ARROW_SUB_CATEGORIES]: ['string'],
      [LicenseGetFields.COLUMN_ASSETS]: {
        eula: 'eula',
      },
      [LicenseGetFields.COLUMN_PROMOTION]: {},
      [LicenseGetFields.COLUMN_EXTRA_DATA]: [
        {
          [ExtraDataFields.COLUMN_NAME]: 'order_comment_1',
          [ExtraDataFields.COLUMN_VALUE]: 'Comment one',
        },
        {
          [ExtraDataFields.COLUMN_NAME]: 'DOMAIN_NAME',
          [ExtraDataFields.COLUMN_VALUE]: 'thecompany.microsoft.com',
        },
      ],
      [LicenseGetFields.COLUMN_VENDOR_CODE]: 'Microsoft',
      [LicenseGetFields.COLUMN_VENDOR_CODE_2]: 'Microsoft',
      [LicenseGetFields.COLUMN_RATES]: {
        [RatesGetDataFields.COLUMN_RATE]: 0.1,
        [RatesGetDataFields.COLUMN_TYPE]: RateTypeEnum.DISCOUNT,
        [RatesGetDataFields.COLUMN_LAST_UPDATE]: '2021-01-01',
      },
      [LicenseGetFields.COLUMN_RELATION]: [
        {
          [RelationGetDataFields.COLUMN_PARTNER_REF]: 'XSP12345',
          [RelationGetDataFields.COLUMN_TYPE]: 'sibling',
        },
        {
          [RelationGetDataFields.COLUMN_PARTNER_REF]: 'XSP234',
          [RelationGetDataFields.COLUMN_TYPE]: 'sibling',
        },
      ],
      [LicenseGetFields.COLUMN_MARKET_SEGMENT]: 'Corporate',
      [LicenseGetFields.COLUMN_CONFIGS]: [
        {
          [ConfigFindResultFields.COLUMN_NAME]: 'purchaseReservations',
          [ConfigFindResultFields.COLUMN_SCOPE]: 'role',
          [ConfigFindResultFields.COLUMN_STATE]: 'enabled',
        },
      ],
      [LicenseGetFields.COLUMN_WARNINGS]: [
        {
          [WarningFindResultFields.COLUMN_KEY]: 'PEC ratio issue',
          [WarningFindResultFields.COLUMN_MESSAGE]:
            'current value is 0 instead of 0.15',
        },
      ],
      [LicenseGetFields.COLUMN_PRICE_BAND]: {
        [PriceBandDataFields.COLUMN_SALE_CONSTRAINTS]: {
          [SaleConstraintsFindResultFields.COLUMN_MIN_QUANTITY]: 1,
          [SaleConstraintsFindResultFields.COLUMN_MAX_QUANTITY]: 9999,
        },
        [PriceBandDataFields.COLUMN_ATTRIBUTES]: [
          {
            name: 'attribute_1',
            value: '2',
          },
        ],
      },
    },
  },
};

export const PAYLOAD_SCHEMA_LICENSE_WITHOUT_OPTIONAL_FIELDS: GetData<GetLicenseResultData> = {
  status: 200,
  data: {
    license: {
      [LicenseGetFields.COLUMN_CLASSIFICATION]: 'SaaS',
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
      [LicenseGetFields.COLUMN_SECURITY]: {
        [SecurityFindResultFields.COLUMN_ACTIVE_FRAUD_EVENTS]: 0,
      },
      [LicenseGetFields.COLUMN_ACTIVATION_DATETIME]: 'activation_datetime',
      [LicenseGetFields.COLUMN_EXPIRY_DATETIME]: 'expiry_datetime',
      [LicenseGetFields.COLUMN_MARKETPLACE]: 'FR',
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
        [LicensePriceGetFields.COLUMN_PRICEBAND_ARROWSPHERE_SKU]:
          'MSCSP_CFQ7TTC0LH16-0001_FR_EUR_1_720_8640',
        [LicensePriceGetFields.COLUMN_UNIT]: {
          [BuySellFields.COLUMN_BUY]: 2,
          [BuySellFields.COLUMN_SELL]: 3,
          [BuySellFields.COLUMN_LIST]: 3.5,
        },
        [LicensePriceGetFields.COLUMN_TOTAL]: {
          [BuySellFields.COLUMN_BUY]: 2,
          [BuySellFields.COLUMN_SELL]: 3,
          [BuySellFields.COLUMN_LIST]: 3.5,
        },
      },
      [LicenseGetFields.COLUMN_ASSETS]: {
        eula: 'eula',
      },
      [LicenseGetFields.COLUMN_PROMOTION]: {},
    },
  },
};
export const HISTORY_PAYLOAD: ActionHistoryResultData = {
  [ActionHistoryResultFields.COLUMN_ACTION]: 'created',
  [ActionHistoryResultFields.COLUMN_NOTE]: {
    [HistoryNoteFields.COLUMN_BEFORE]: {
      sku: '031C9E47-4802-4248-838E-778FB1D2CC05',
      state: 'In progress',
      activation_date: '2018-06-08T10:34:28+00:00',
      expiration_date: '2022-06-08T10:34:28+00:00',
      seats: 1,
      baseSeats: 1,
      activeSeats: 1,
      action: 'in_progress',
    },
    [HistoryNoteFields.COLUMN_AFTER]: {
      sku: '031C9E47-4802-4248-838E-778FB1D2CC05',
      state: 'Activated',
      activation_date: '2018-06-08T10:34:28+00:00',
      expiration_date: '2022-06-08T10:34:28+00:00',
      seats: 1,
      baseSeats: 1,
      activeSeats: 1,
      action: 'created',
    },
    [HistoryNoteFields.COLUMN_EXTRA_INFORMATION]: {
      user: {
        name: 'username',
        ref: 'XSP12345',
        email: 'email@company.com',
        role: 'User',
      },
    },
  },
  [ActionHistoryResultFields.COLUMN_CREATED_AT]: '2018-06-08T10:34:14+00:00',
  [ActionHistoryResultFields.COLUMN_UPDATED_AT]: '2018-06-08T10:34:14+00:00',
};

export const PAYLOAD_LICENSE_HISTORY: GetData<LicenceHistoryResultData> = {
  status: 200,
  data: {
    [LicenceHistoryResultFields.COLUMN_ACTIONS]: [HISTORY_PAYLOAD],
  },
};

export const PAYLOAD_LICENSE_COUPON_CODE_HISTORY: GetData<LicenceCouponCodeHistoryResultData> = {
  status: 200,
  data: {
    [LicenceCouponCodeHistoryResultFields.COLUMN_COUPON_CODES]: [
      {
        code: 'AFSDFF12312',
        updated_at: '2024-05-01T00:00:00Z',
      },
      {
        code: 'ZEESDFF19009',
        updated_at: '2024-03-02`T00:00:00Z',
      },
    ],
  },
};

export const CONVERSION_SKU_PAYLOAD: ConversionSkuResultData[] = [
  {
    billingCycle: 720,
    classification: 'SaaS',
    currency: 'EUR',
    offerName: 'Office 365 E3',
    minQuantity: 1,
    priceBandArrowsphereSku: 'XSP30064|MS-0A-O365-BUSINESS|XSP30070|XSP174',
    sellPrice: 410.2,
    sku: 'CFQ7TTC0LF8R:0001',
    term: 8640,
    uom: 'LICENSE',
    vendorCode: 'Microsoft',
  },
];

export const PAYLOAD_LICENSE_CONVERSION_SKU: GetData<LicenseConversionSkuResultData> = {
  status: 200,
  data: {
    [LicenseConversionSkuFields.COLUMN_OFFERS]: CONVERSION_SKU_PAYLOAD,
  },
};

export const EXISTING_CONVERSION_SKU_PAYLOAD: ConversionSkuResultData[] = [
  {
    buyPrice: 400.2,
    classification: 'SaaS',
    currency: 'EUR',
    endDate: '2023-06-08T10:34:28+00:00',
    friendlyName: 'XSP30064|MS-0A-O365-BUSINESS|XSP30070|XSP174',
    offerName: 'Office 365 E3',
    partnerRef: 'XSP5046568',
    priceBandArrowsphereSku: 'XSP30064|MS-0A-O365-BUSINESS|XSP30070|XSP174',
    seats: 1,
    sku: 'CFQ7TTC0LF8R:0001',
    uom: 'LICENSE',
    vendorCode: 'Microsoft',
  },
];

export const PAYLOAD_LICENSE_EXISTING_CONVERSION_SKU: GetData<LicenseConversionSkuResultData> = {
  status: 200,
  data: {
    [LicenseConversionSkuFields.COLUMN_OFFERS]: EXISTING_CONVERSION_SKU_PAYLOAD,
  },
};

export const PAYLOAD_LICENSE_GET_CREDENTIALS: GetData<CredentialsResultType> = {
  status: 200,
  data: {
    username: 'admin',
    passwordResetUrl:
      'http://test/CloudManagement.UI/data/InstancePassword/XXXXXXX',
    url: 'http://test/mdm/mdm_XXXXXXX',
  },
};

export const PAYLOAD_LICENSE_GET_PRICING_RATE: GetData<GetPricingRateData> = {
  status: 200,
  data: {
    id: 1234,
    rate: 0.1,
    start_date: '2021-01-01',
    end_date: '2021-12-31',
    created_at: '2021-01-01',
    rateType: {
      id: 1234,
      name: RateTypeEnum.DISCOUNT,
    },
    companyType: {
      id: 1234,
      type: CompanyTypeEnum.MSP_CUSTOMER,
    },
  },
};

export const PAYLOAD_LICENSE_POST_SCHEDULE_TASKS: GetData<ScheduleTaskData> = {
  status: 200,
  data: {
    scheduleTaskId: 123456,
  },
};

const PAYLOAD_SCHEDULES_TASKS: GetScheduleTaskResultData[] = [
  {
    createdAt: '2024-04-07T20:26:08+00:00',
    executionDate: '2025-04-06T20:23:52+00:00',
    periodicity: 720,
    scheduleTaskId: 612386,
    seats: 2,
    status: 'In Progress',
    statusCode: '66',
    term: 8640,
    updatedAt: '2024-04-07T20:27:09+00:00',
    coterminosityDate: '2025-04-06T20:23:52+00:00',
  },
];

export const PAYLOAD_GET_SCHEDULED_TASKS: GetScheduledTasksResultData = {
  [GetScheduledTasksResultFields.COLUMN_SCHEDULED_TASKS]: PAYLOAD_SCHEDULES_TASKS,
};

export const PAYLOAD_LICENSE_PATCH_SCHEDULED_TASK: UpdateScheduledTaskRequestType = {
  [GetScheduleTaskResultFields.COLUMN_PERIODICITY]: 720,
  [GetScheduleTaskResultFields.COLUMN_SEATS]: 2,
  [GetScheduleTaskResultFields.COLUMN_TERM]: 8640,
};

export const LICENSE_SCHEDULED_TASK_GET_RESPONSE: GetData<GetScheduleTaskResultData> = {
  [GetResultFields.COLUMN_STATUS]: constants.HTTP_STATUS_OK,
  [GetResultFields.COLUMN_DATA]: {
    [GetScheduleTaskResultFields.COLUMN_CREATED_AT]:
      '2024-04-07T20:26:08+00:00',
    [GetScheduleTaskResultFields.COLUMN_EXECUTION_DATE]:
      '2025-04-06T20:23:52+00:00',
    [GetScheduleTaskResultFields.COLUMN_PERIODICITY]: 720,
    [GetScheduleTaskResultFields.COLUMN_SCHEDULE_TASK_ID]: 612386,
    [GetScheduleTaskResultFields.COLUMN_SEATS]: 2,
    [GetScheduleTaskResultFields.COLUMN_STATUS]: 'In Progress',
    [GetScheduleTaskResultFields.COLUMN_STATUS_CODE]: '66',
    [GetScheduleTaskResultFields.COLUMN_TERM]: 8640,
    [GetScheduleTaskResultFields.COLUMN_UPDATED_AT]:
      '2024-04-07T20:27:09+00:00',
    [GetScheduleTaskResultFields.COLUMN_COTERMINOSITY_DATE]:
      '2025-04-06T20:23:52+00:00',
  },
};
