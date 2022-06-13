import {
  PeriodFields,
  TopFields,
  ConsumptionBIFields,
  ConsumptionBIType,
  GetResultFields,
  GetData,
  ConsumptionType,
  ConsumptionFields,
} from '../../../src';

export const GET_CONSUMPTION_MONTHLY_PARAMETERS = {
  billingMonthStart: '2020-10',
  billingMonthEnd: '2021-10',
};

export const GET_CONSUMPTION_DAILY_PARAMETERS = {
  dayStart: '2020-10-01',
  dayEnd: '2021-10-31',
};

export const GET_CONSUMPTION_RESPONSE: GetData<ConsumptionType> = {
  [GetResultFields.COLUMN_STATUS]: 200,
  [GetResultFields.COLUMN_DATA]: {
    [ConsumptionFields.COLUMN_HEADERS]: [
      'Report Period',
      'Usage Start date',
      'Subscription Start Date',
      'Subscription End Date',
      'Vendor Name',
      'Vendor Billing Start Date',
      'Vendor Billing End Date',
      'Vendor Product Name',
      'Vendor Meter Category',
      'Vendor Meter Sub-Category',
      'UOM',
      'Level Chargeable Quantity',
      'Catalog Billing Periodicity',
      'Country currency code',
      'Country reseller unit',
      'Country reseller total',
      'Country customer unit',
      'Country customer total',
    ],
    [ConsumptionFields.COLUMN_LINES]: [
      '2021-10',
      '2021-10-30 00:00:00',
      '2021-10-31 00:00:00',
      '2021-03-29 15:38:22',
      '2021-11-29 15:38:22',
      'westeurope',
      '',
      'Microsoft',
      '2021-10-01 00:00:00',
      '2021-10-31 00:00:00',
      '7756-ADEF-84F4',
      'Tiered Block Blob',
      'Storage',
      '',
      '',
      '',
      '149824396873',
      '',
      '',
      '',
      '',
      'production',
      '',
      'Month',
      0.0177867,
      '',
      '',
      'USD',
      0,
      0,
      0,
      0,
    ],
  },
};

export const GET_CONSUMPTION_BI_PARAMETERS = {
  periodStart: '2020-12',
  periodEnd: '2021-09',
  topCount: '10',
  aggregate: 'marketplace',
  metric: 'revenue',
  marketplace: 'FR',
  vendor: 'vendor',
  classification: 'classification',
  customerRef: 'customerRef',
  arsSubscriptionId: 'subscriptionId',
  date: 'date',
  ignoreTrials: '10',
};

export const GET_CONSUMPTION_BI_RESPONSE: ConsumptionBIType = {
  [ConsumptionBIFields.COLUMN_CURRENCY]: 'USD',
  [ConsumptionBIFields.COLUMN_PERIOD]: {
    [PeriodFields.COLUMN_FROM]: '2019-12',
    [PeriodFields.COLUMN_TO]: '2020-05',
  },
  [ConsumptionBIFields.COLUMN_AGGREGATE]: 'marketPlace',
  [ConsumptionBIFields.COLUMN_METRIC]: 'revenue',
  [ConsumptionBIFields.COLUMN_TOP]: [
    {
      [TopFields.COLUMN_RANK]: '1',
      [TopFields.COLUMN_METRIC]: 420.42,
      [TopFields.COLUMN_NAME]: 'L33T Reseller',
      [TopFields.COLUMN_REF]: 'XSP1337',
    },
  ],
};
