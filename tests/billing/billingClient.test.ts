import { PublicApiClient } from '../../src/publicApiClient';
import nock from 'nock';
import { constants } from 'http2';
import { expect } from 'chai';
import { BILLING_EXPORT_ASYNC_REQUEST_RESPONSE } from './mocks/billing.mocks';
import { GetResult, BillingExportAsyncRequest } from '../../src';

export const BILLING_MOCK_URL = 'https://billing.localhost';
export const GENERATE_BILLING_EXPORT_ASYNC_URL = new RegExp(
  '/billing/erp/exports/async.*',
);

describe('BillingClient', () => {
  const client = new PublicApiClient()
    .getBillingClient()
    .setUrl(BILLING_MOCK_URL);

  describe('generateExportAsync', () => {
    it('call the generateExportAsync method', async () => {
      nock(BILLING_MOCK_URL)
        .post(GENERATE_BILLING_EXPORT_ASYNC_URL)
        .reply(constants.HTTP_STATUS_OK, BILLING_EXPORT_ASYNC_REQUEST_RESPONSE);

      const response: GetResult<BillingExportAsyncRequest> = await client.generateExportAsync(
        {
          callbackUrl: 'https://callback.localhost',
          exportTypeReference: 'exportTypeReference',
          filters: {
            issueDate: {
              from: '2023-12',
              to: '2023-12',
            },
          },
        },
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.data).to.be.instanceof(BillingExportAsyncRequest);
      expect(response.toJSON()).to.be.deep.equals(
        BILLING_EXPORT_ASYNC_REQUEST_RESPONSE,
      );
    });
  });
});
