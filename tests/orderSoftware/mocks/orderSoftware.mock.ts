import { DataListOrdersSoftwareType, GetData } from '../../../src';

export const GET_ORDER_SOFTWARE_DATA: GetData<DataListOrdersSoftwareType> = {
  status: 200,
  data: {
    orders: [
      {
        program: 'program',
        products: [
          {
            sku: 'sku',
            productName: 'productName',
            productVersion: 'productVersion',
            quantity: 1,
            price: {
              currency: 'currency',
              totalPrice: 1.5,
              unitPrice: 1.3,
            },
          },
        ],
        reference: 'XSPO123',
        report: {
          reference: 'ref',
          link: 'link',
        },
        status: 'active',
        subscription: {
          reference: 'ref',
          link: 'link',
        },
      },
    ],
  },
};
