import { DataListOrdersSoftwareType, GetData } from '../../../src';

export const GET_ORDER_SOFTWARE_DATA: GetData<DataListOrdersSoftwareType> = {
  status: 200,
  data: {
    orders: [
      {
        program: 'program',
        products: [],
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
