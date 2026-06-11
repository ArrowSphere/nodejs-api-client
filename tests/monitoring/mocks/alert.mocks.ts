import { constants } from 'http2';
import {
  AlertFields,
  AlertFormatEnum,
  AlertFrequencyEnum,
  AlertListType,
  AlertType,
  CreateAlertPayload,
  CreateAlertType,
  GetData,
  GetResultFields,
  UpdateAlertPayload,
} from '../../../src';
import { AlertFiltersFields } from '../../../src/monitoring/entities/alert/filters/alertFilters';
import {
  RenewalAlertClassificationEnum,
  RenewalAlertWhenEnum,
  RenewalFiltersFields,
} from '../../../src/monitoring/entities/alert/filters/renewalFilters';

export const ALERT_ID = 42;

export const ALERT_MOCK: AlertType = {
  [AlertFields.COLUMN_ID]: ALERT_ID,
  [AlertFields.COLUMN_CATEGORY_ID]: 6,
  [AlertFields.COLUMN_NAME]: 'Renewal Alert',
  [AlertFields.COLUMN_FREQUENCY]: AlertFrequencyEnum.WEEKLY,
  [AlertFields.COLUMN_RECIPIENT]: 'renewal@company.com',
  [AlertFields.COLUMN_FORMAT]: AlertFormatEnum.CSV,
  [AlertFields.COLUMN_FILTERS]: {
    [AlertFiltersFields.COLUMN_RENEWAL]: {
      [RenewalFiltersFields.COLUMN_END_CUSTOMERS]: ['XSP123456', 'XSP123459'],
      [RenewalFiltersFields.COLUMN_VENDOR]: 'aws',
      [RenewalFiltersFields.COLUMN_WHEN]: RenewalAlertWhenEnum.END_OF_MONTH,
      [RenewalFiltersFields.COLUMN_CLASSIFICATION]:
        RenewalAlertClassificationEnum.IAAS,
      [RenewalFiltersFields.COLUMN_ONLY_AUTO_RENEWAL]: true,
      [RenewalFiltersFields.COLUMN_ONLY_PRICE_CHANGE]: false,
    },
  },
};

export const CREATE_ALERT_PAYLOAD: CreateAlertPayload = {
  [AlertFields.COLUMN_CATEGORY_ID]: 6,
  [AlertFields.COLUMN_NAME]: 'Renewal Alert',
  [AlertFields.COLUMN_FREQUENCY]: AlertFrequencyEnum.WEEKLY,
  [AlertFields.COLUMN_RECIPIENT]: 'renewal@company.com',
  [AlertFields.COLUMN_FORMAT]: AlertFormatEnum.CSV,
  [AlertFields.COLUMN_FILTERS]: {
    [AlertFiltersFields.COLUMN_RENEWAL]: {
      [RenewalFiltersFields.COLUMN_END_CUSTOMERS]: ['XSP123456', 'XSP123459'],
      [RenewalFiltersFields.COLUMN_VENDOR]: 'aws',
      [RenewalFiltersFields.COLUMN_WHEN]: RenewalAlertWhenEnum.END_OF_MONTH,
      [RenewalFiltersFields.COLUMN_CLASSIFICATION]:
        RenewalAlertClassificationEnum.IAAS,
      [RenewalFiltersFields.COLUMN_ONLY_AUTO_RENEWAL]: true,
      [RenewalFiltersFields.COLUMN_ONLY_PRICE_CHANGE]: false,
    },
  },
};

export const UPDATE_ALERT_PAYLOAD: UpdateAlertPayload = {
  [AlertFields.COLUMN_NAME]: 'Renewal Alert',
  [AlertFields.COLUMN_FREQUENCY]: AlertFrequencyEnum.DAILY,
  [AlertFields.COLUMN_RECIPIENT]: 'renewal@company.com',
  [AlertFields.COLUMN_FORMAT]: AlertFormatEnum.XLSX,
  [AlertFields.COLUMN_FILTERS]: {
    [AlertFiltersFields.COLUMN_RENEWAL]: {},
  },
};

export const LIST_ALERTS_RESPONSE: GetData<AlertListType> = {
  [GetResultFields.COLUMN_STATUS]: constants.HTTP_STATUS_OK,
  [GetResultFields.COLUMN_DATA]: [ALERT_MOCK],
};

export const GET_ALERT_RESPONSE: GetData<AlertType> = {
  [GetResultFields.COLUMN_STATUS]: constants.HTTP_STATUS_OK,
  [GetResultFields.COLUMN_DATA]: ALERT_MOCK,
};

export const CREATE_ALERT_RESPONSE: GetData<CreateAlertType> = {
  [GetResultFields.COLUMN_STATUS]: constants.HTTP_STATUS_OK,
  [GetResultFields.COLUMN_DATA]: { alertId: ALERT_ID },
};

export const UPDATE_ALERT_RESPONSE: GetData<AlertType> = {
  [GetResultFields.COLUMN_STATUS]: constants.HTTP_STATUS_OK,
  [GetResultFields.COLUMN_DATA]: ALERT_MOCK,
};
