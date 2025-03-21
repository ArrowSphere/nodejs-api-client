import { PublicApiClient } from '../../src';
import nock from 'nock';
import { expect } from 'chai';

export const MONITORING_MOCK_URL = 'https://monitoring.localhost';

describe('MonitoringClient', () => {
  const client = new PublicApiClient()
    .getMonitoringClient()
    .setUrl(MONITORING_MOCK_URL);

  it('should send report', async () => {
    const report = {
      body: {
        key: 'value',
      },
      url: 'https://example.com',
      userAgent: 'Mozilla/5.0',
      type: 'type',
    };
    nock(MONITORING_MOCK_URL)
      .post('/monitoring/report', report)
      .reply((_uri, body) => {
        expect(body).to.eqls(report);
        return [200, ''];
      });

    await client.sendReport(report);
  });
});
