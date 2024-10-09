import {
  DataListReportsType,
  ReportReferenceLinkType,
  ReportValidationReferenceType,
} from '../../../src/reports';
import { GetData } from '../../../src';

export const PAYLOAD_CREATE: GetData<ReportReferenceLinkType> = {
  status: 200,
  data: {
    report: {
      reference: 'XSPR255502',
    },
  },
};

export const PAYLOAD_LIST: GetData<DataListReportsType> = {
  status: 200,
  data: {
    reports: [
      {
        reference: 'XSPRO000',
        status: 'In progress',
        month: '2020-01',
        program: 'SPLA-CORPORATE - PARTNER',
        products: [
          {
            sku: 'SPLA-0000-C',
            productName: 'Dynamics NAV Hosted',
            productVersion: 'DynNAVHstd ALNG LicSAPk MVL Std SAL',
            quantity: '1',
            price: {
              unitPrice: 10,
              totalPrice: 10,
              currency: 'DKK',
            },
            customer: {
              reference: 'XSP0000',
            },
          },
        ],
        subscription: {
          reference: 'XSPS123',
        },
      },
    ],
  },
};

export const PAYLOAD_VALIDATE: GetData<ReportValidationReferenceType> = {
  status: 200,
  data: {
    orders: [
      {
        reference: 'XSPO123',
        link: '/api/orderSoftware/XSPO1234',
        status: 'In progress',
      },
    ],
  },
};
