import { GetResult, PublicApiClient } from '../../src';
import nock from 'nock';
import { expect } from 'chai';
import { PAYLOAD_ANALYTICS } from './mocks/analytics.mocks';

export const ANALYTICS_MOCK_URL = 'https://consumption.localhost/index.php/api';
export const MONTHLY_CONSUMPTION = new RegExp(
  '/consumption/analytics/monthly.*',
);
describe('AnalyticsClient', () => {
  const client = new PublicApiClient()
    .getAnalyticsClient()
    .setUrl(ANALYTICS_MOCK_URL);

  describe('getMonthly', async () => {
    it('Should get monthly consumption', async () => {
      nock(ANALYTICS_MOCK_URL)
        .get(MONTHLY_CONSUMPTION)
        .reply(200, PAYLOAD_ANALYTICS);

      const result = await client.getMonthly({
        month: '2023-12',
      });
      expect(result).to.be.instanceof(GetResult);
      expect(result.toJSON()).to.eql(PAYLOAD_ANALYTICS);
    });
  });
});
