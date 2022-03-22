// PAYLOADS
import { GetResultFields } from '../../../src';
import {
  DataListOrdersFields,
  OrderFields,
  OrderPartnerFields,
  OrderProductsFields,
  ProductPricesFields,
} from '../../../src/orders';
import { ReferenceLinkFields } from '../../../src/orders/entities/referenceLink';
import { SharedContactFields } from '../../../src/shared/contact/contact';

export const PAYLOAD_GET_ORDERS = {
  [GetResultFields.COLUMN_STATUS]: 200,
  [GetResultFields.COLUMN_DATA]: {
    [DataListOrdersFields.COLUMN_ORDERS]: [
      {
        [OrderFields.COLUMN_REFERENCE]: 'XSPO123',
        [OrderFields.COLUMN_STATUS]: 'In progress',
        [OrderFields.COLUMN_DATESTATUS]: '2017-05-15 09:39:05',
        [OrderFields.COLUMN_DATECREATION]: '2017-05-15 09:39:05',
        [OrderFields.COLUMN_ORDER_REFERENCE]: 'O_ARWS-V7-2704f97d-656151',
        [OrderFields.COLUMN_PARTNER]: {
          [OrderPartnerFields.COLUMN_COMPANYNAME]: 'MyCompany',
          [OrderPartnerFields.COLUMN_CONTACT]: {
            [SharedContactFields.COLUMN_FIRSTNAME]: 'email@provider.com',
            [SharedContactFields.COLUMN_LASTNAME]: '/api/customers/XSP17727',
            [SharedContactFields.COLUMN_EMAIL]: '/api/customers/XSP17727',
          },
        },
        [OrderFields.COLUMN_CUSTOMER]: {
          [ReferenceLinkFields.COLUMN_REFERENCE]: 'XSP17727',
          [ReferenceLinkFields.COLUMN_LINK]: '/api/customers/XSP17727',
        },
        [OrderFields.COLUMN_PONUMBER]: '123456',
        [OrderFields.COLUMN_PRODUCTS]: [
          {
            [OrderProductsFields.COLUMN_SKU]:
              'Microsoft||MS-0ZH-VISIO||B4D4B7F4-4089-43B6-9C44-DE97B760FB11',
            [OrderProductsFields.COLUMN_QUANTITY]: 2,
            [OrderProductsFields.COLUMN_STATUS]: 'Provisioned',
            [OrderProductsFields.COLUMN_DATESTATUS]: '2017-05-15 09:39:05',
            [OrderProductsFields.COLUMN_DETAILEDSTATUS]: 'Provisioned',
            [OrderProductsFields.COLUMN_PRICES]: {
              [ProductPricesFields.COLUMN_BUY]: 11,
              [ProductPricesFields.COLUMN_SELL]: 11,
              [ProductPricesFields.COLUMN_CURRENCY]: 'EUR',
              [ProductPricesFields.COLUMN_PERIODICITY]: 'per Month',
            },
            [OrderProductsFields.COLUMN_SUBSCRIPTION]: {
              [ReferenceLinkFields.COLUMN_REFERENCE]: 'XSPS7896',
              [ReferenceLinkFields.COLUMN_LINK]: '/api/subscriptions/XSPS7896',
            },
            [OrderProductsFields.COLUMN_LICENSE]: {
              [ReferenceLinkFields.COLUMN_REFERENCE]: 'XSP87708',
              [ReferenceLinkFields.COLUMN_LINK]: '/api/licenses/XSP87708',
            },
          },
        ],
      },
    ],
  },
};
