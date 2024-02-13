import {
  GetResultFields,
  GetData,
  BillingExportAsyncRequestFields,
  BillingExportAsyncRequestType,
} from '../../../src';
export const BILLING_EXPORT_ASYNC_REQUEST_RESPONSE: GetData<BillingExportAsyncRequestType> = {
  [GetResultFields.COLUMN_STATUS]: 200,
  [GetResultFields.COLUMN_DATA]: {
    [BillingExportAsyncRequestFields.COLUMN_REQUEST_REF]: 'requestRef',
  },
};
