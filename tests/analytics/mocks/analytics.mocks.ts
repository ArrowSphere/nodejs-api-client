import { DataAnalyticsType } from '../../../src/analytics';
import { GetData } from '../../../src';
export const PAYLOAD_ANALYTICS: GetData<DataAnalyticsType> = {
  status: 200,
  data: [
    {
      vendor: 'Microsoft',
      marketplace: 'FR',
      classification: 'SAAS',
      tag: 'Pax8',
      month: '2020-05',
      usdPrice: {
        arrowBuyPrice: 22,
        resellerBuyPrice: 1234.5,
        endCustomerBuyPrice: 600,
        listBuyPrice: 700,
        currency: 'USD',
      },
      localPrice: {
        arrowBuyPrice: 22,
        resellerBuyPrice: 1234.5,
        endCustomerBuyPrice: 600,
        listBuyPrice: 700,
        currency: 'USD',
      },
    },
  ],
};
