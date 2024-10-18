import { GetResult, PublicApiClient } from '../../src';
import nock from 'nock';
import { expect } from 'chai';
import {
  PAYLOAD_CREATE,
  PAYLOAD_LIST,
  PAYLOAD_VALIDATE,
} from './mocks/reports.mocks';

export const REPORT_MOCK_URL = 'https://reports.localhost/index.php/api';
export const REPORT_PATH = '/reports';
export const GET_REPORTS_LIST = new RegExp('/reports.*');
describe('ReportsClient', () => {
  const client = new PublicApiClient()
    .getReportsClient()
    .setUrl(REPORT_MOCK_URL);

  describe('create', async () => {
    it('Should create new Report', async () => {
      const payload = {
        products: [],
        subscription: {
          reference: 'XSPS123',
        },
        month: '2023-12',
      };
      nock(REPORT_MOCK_URL)
        .post(REPORT_PATH, payload)
        .reply(200, PAYLOAD_CREATE);

      const result = await client.create(payload);
      expect(result).to.be.instanceof(GetResult);
      expect(result.toJSON()).to.eql(PAYLOAD_CREATE);
    });
  });

  describe('getListReports', async () => {
    it('Should get reports list', async () => {
      nock(REPORT_MOCK_URL).get(GET_REPORTS_LIST).reply(200, PAYLOAD_LIST);

      const result = await client.getListReports();
      expect(result).to.be.instanceof(GetResult);
      expect(result.toJSON()).to.eql(PAYLOAD_LIST);
    });
  });

  describe('getReport', async () => {
    it('Should get report', async () => {
      nock(REPORT_MOCK_URL)
        .get(REPORT_PATH + '/XSPR123')
        .reply(200, PAYLOAD_LIST);

      const result = await client.getReport('XSPR123');
      expect(result).to.be.instanceof(GetResult);
      expect(result.toJSON()).to.eql(PAYLOAD_LIST);
    });
  });

  describe('validateReport', async () => {
    it('Should validate and get report reference', async () => {
      nock(REPORT_MOCK_URL)
        .patch(REPORT_PATH + '/XSPR123')
        .reply(200, PAYLOAD_VALIDATE);

      const result = await client.validateReport('XSPR123');
      expect(result).to.be.instanceof(GetResult);
      expect(result.toJSON()).to.eql(PAYLOAD_VALIDATE);
    });
  });
});
