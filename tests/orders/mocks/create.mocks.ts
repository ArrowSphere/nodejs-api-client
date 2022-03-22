import {
  CreateOrderInputFields,
  ReferenceLinkFields,
} from '../../../src/orders';

export const CreateOrderResponsePayload = {
  status: 200,
  data: {
    [ReferenceLinkFields.COLUMN_REFERENCE]: 'XSPO123456',
    [ReferenceLinkFields.COLUMN_LINK]: '/api/orders/XSPO123456',
  },
};

export const CreateOrderPartialInputPayload = {
  [CreateOrderInputFields.COLUMN_CUSTOMER]: {
    [CreateOrderInputFields.COLUMN_REFERENCE]: 'XSP4533',
  },
  [CreateOrderInputFields.COLUMN_PRODUCTS]: [
    {
      [CreateOrderInputFields.COLUMN_SKU]:
        'SAAS||Microsoft||MS-0A-O365-BUSINESS||BD938F12-058F-4927-BBA3-AE36B1D2501C',
      [CreateOrderInputFields.COLUMN_QUANTITY]: 2,
      [CreateOrderInputFields.COLUMN_SUBSCRIPTION]: {
        [CreateOrderInputFields.COLUMN_REFERENCE]: 'XSPS12348',
      },
    },
  ],
};

export const CreateOrderFullInputPayload = {
  [CreateOrderInputFields.COLUMN_CUSTOMER]: {
    [CreateOrderInputFields.COLUMN_REFERENCE]: 'XSP4533',
    [CreateOrderInputFields.COLUMN_PO_NUMBER]: '456789',
  },
  [CreateOrderInputFields.COLUMN_PRODUCTS]: [
    {
      [CreateOrderInputFields.COLUMN_SKU]:
        'SAAS||Microsoft||MS-0A-O365-BUSINESS||BD938F12-058F-4927-BBA3-AE36B1D2501C',
      [CreateOrderInputFields.COLUMN_QUANTITY]: 2,
      [CreateOrderInputFields.COLUMN_SUBSCRIPTION]: {
        [CreateOrderInputFields.COLUMN_REFERENCE]: 'XSPS12348',
      },
      [CreateOrderInputFields.COLUMN_PARENT_LICENSE_ID]: 'XSP0007',
      [CreateOrderInputFields.COLUMN_PARENT_SKU]: 'XXXXXXX-XXXXX-XXXXXXXXXX',
      [CreateOrderInputFields.COLUMN_PERIODICITY]: 'per Month',
      [CreateOrderInputFields.COLUMN_TERM]: '1 Year',
    },
  ],
};
