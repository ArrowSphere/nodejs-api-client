import {
  Alert,
  AlertList,
  CreateAlert,
  GetResult,
  PublicApiClient,
} from '../../src';
import nock from 'nock';
import { expect } from 'chai';
import { constants } from 'http2';
import {
  ALERT_ID,
  CREATE_ALERT_PAYLOAD,
  CREATE_ALERT_RESPONSE,
  GET_ALERT_RESPONSE,
  LIST_ALERTS_RESPONSE,
  UPDATE_ALERT_PAYLOAD,
  UPDATE_ALERT_RESPONSE,
} from './mocks/alert.mocks';

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

  describe('listAlerts', (): void => {
    it('lists alerts without parameters', async (): Promise<void> => {
      nock(MONITORING_MOCK_URL)
        .get('/monitoring/alerts')
        .reply(constants.HTTP_STATUS_OK, LIST_ALERTS_RESPONSE);

      const response: GetResult<AlertList> = await client.listAlerts();

      expect(response).to.deep.equal(LIST_ALERTS_RESPONSE);
    });
  });

  describe('getAlert', (): void => {
    it('gets a single alert', async (): Promise<void> => {
      nock(MONITORING_MOCK_URL)
        .get(`/monitoring/alerts/${ALERT_ID}`)
        .reply(constants.HTTP_STATUS_OK, GET_ALERT_RESPONSE);

      const response: GetResult<Alert> = await client.getAlert(ALERT_ID);

      expect(response).to.deep.equal(GET_ALERT_RESPONSE);
    });
  });

  describe('createAlert', (): void => {
    it('creates a alert', async (): Promise<void> => {
      nock(MONITORING_MOCK_URL)
        .post('/monitoring/alerts', CREATE_ALERT_PAYLOAD)
        .reply(constants.HTTP_STATUS_CREATED, CREATE_ALERT_RESPONSE);

      const response: GetResult<CreateAlert> = await client.createAlert(
        CREATE_ALERT_PAYLOAD,
      );

      expect(response).to.deep.equal(CREATE_ALERT_RESPONSE);
    });
  });

  describe('updateAlert', (): void => {
    it('updates a alert', async (): Promise<void> => {
      nock(MONITORING_MOCK_URL)
        .patch(`/monitoring/alerts/${ALERT_ID}`, UPDATE_ALERT_PAYLOAD)
        .reply(constants.HTTP_STATUS_OK, UPDATE_ALERT_RESPONSE);

      const response: GetResult<Alert> = await client.updateAlert(
        ALERT_ID,
        UPDATE_ALERT_PAYLOAD,
      );

      expect(response).to.deep.equal(UPDATE_ALERT_RESPONSE);
    });
  });

  describe('deleteAlert', (): void => {
    it('deletes a alert', async (): Promise<void> => {
      nock(MONITORING_MOCK_URL)
        .delete(`/monitoring/alerts/${ALERT_ID}`)
        .reply(constants.HTTP_STATUS_NO_CONTENT);

      await client.deleteAlert(ALERT_ID);
    });
  });
});
