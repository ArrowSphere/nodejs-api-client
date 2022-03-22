import {
  CreateOrderInputPayloadFields,
  ReferenceLinkFields,
} from '../../../src/orders';

export const CreateOrderResponsePayload = {
  status: 200,
  data: {
    [ReferenceLinkFields.COLUMN_REFERENCE]: 'XSPO123456',
    [ReferenceLinkFields.COLUMN_LINK]: '/api/orders/XSPO123456',
  },
};

export const CreateOrderInputPayload = {
  [CreateOrderInputPayloadFields.COLUMN_CUSTOMERS]: {
    [CreateOrderInputPayloadFields.COLUMN_REFERENCE]: 'XSP4533',
    [CreateOrderInputPayloadFields.COLUMN_PO_NUMBER]: '456789',
  },
  [CreateOrderInputPayloadFields.COLUMN_PRODUCTS]: [
    {
      [CreateOrderInputPayloadFields.COLUMN_SKU]:
        'SAAS||Microsoft||MS-0A-O365-BUSINESS||BD938F12-058F-4927-BBA3-AE36B1D2501C',
      [CreateOrderInputPayloadFields.COLUMN_QUANTITY]: 2,
      [CreateOrderInputPayloadFields.COLUMN_SUBSCRIPTION]: {
        [CreateOrderInputPayloadFields.COLUMN_REFERENCE]: 'XSPS12348',
      },
      [CreateOrderInputPayloadFields.COLUMN_PARENT_LICENSE_ID]: 'XSP0007',
      [CreateOrderInputPayloadFields.COLUMN_PARENT_SKU]:
        'XXXXXXX-XXXXX-XXXXXXXXXX',
      [CreateOrderInputPayloadFields.COLUMN_PERIODICITY]: 'per Month',
      [CreateOrderInputPayloadFields.COLUMN_TERM]: '1 Year',
    },
  ],
};
