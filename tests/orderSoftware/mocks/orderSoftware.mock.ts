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
            discountRatio: 0,
            sellingPrice: {
              currency: 'currency',
              totalPrice: 1.35,
              unitPrice: 1.17,
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
          ratio: 0.0652,
        },
      },
    ],
  },
};
