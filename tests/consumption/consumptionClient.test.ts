import { PublicApiClient } from '../../src/publicApiClient';
import nock from 'nock';
import { constants } from 'http2';
import { expect } from 'chai';
import {
  GET_BUDGET_SETTINGS_RESPONSE,
  GET_CONSUMPTION_BI_PARAMETERS,
  GET_CONSUMPTION_BI_RESPONSE,
  GET_CONSUMPTION_BI_RESPONSE_WITHOUT_DATA,
  GET_CONSUMPTION_DAILY_PARAMETERS,
  GET_CONSUMPTION_MONTHLY_PARAMETERS,
  GET_CONSUMPTION_RESPONSE,
  CONSUMPTION_REQUEST_DOWNLOAD_PAYLOAD,
  CONSUMPTION_REQUEST_DOWNLOAD_RESPONSE,
  GET_LICENSE_DAILY_PREDICTIONS_RESPONSE,
} from './mocks/consumption.mocks';
import {
  ConsumptionBI,
  Consumption,
  GetResult,
  ConsumptionDownloadRequest,
  ConsumptionBudget,
  GetResultFields,
} from '../../src';
import { ConsumptionDailyPrediction } from '../../src/consumption/entities/consumption/consumptionDailyPrediction';

export const CONSUMPTION_MOCK_URL = 'https://consumption.localhost';
export const GET_CONSUMPTION_MONTHLY_URL = new RegExp(
  '/consumption/monthly/license/.*',
);
export const GET_CONSUMPTION_DAILY_URL = new RegExp(
  '/consumption/daily/license/.*',
);
export const GET_CONSUMPTION_BI_URL = new RegExp(
  '/consumption/bi/top/monthly.*',
);

export const CONSUMPTION_DOWNLOAD_REQUEST_URL = new RegExp(
  '/consumption/v2/downloadRequest.*',
);

describe('ConsumptionClient', () => {
  const client = new PublicApiClient()
    .getConsumptionClient()
    .setUrl(CONSUMPTION_MOCK_URL);

  describe('getMonthlyConsumption', () => {
    it('call the get method', async () => {
      nock(CONSUMPTION_MOCK_URL)
        .get(GET_CONSUMPTION_MONTHLY_URL)
        .reply(constants.HTTP_STATUS_OK, GET_CONSUMPTION_RESPONSE);

      const response: GetResult<Consumption> = await client.getMonthlyConsumption(
        'XSP123456',
        GET_CONSUMPTION_MONTHLY_PARAMETERS,
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.data).to.be.instanceof(Consumption);
      expect(response.toJSON()).to.be.deep.equals(GET_CONSUMPTION_RESPONSE);
    });
  });

  describe('getDailyConsumption', () => {
    it('call the get method', async () => {
      nock(CONSUMPTION_MOCK_URL)
        .get(GET_CONSUMPTION_DAILY_URL)
        .reply(constants.HTTP_STATUS_OK, GET_CONSUMPTION_RESPONSE);

      const response: GetResult<Consumption> = await client.getDailyConsumption(
        'XSP123456',
        GET_CONSUMPTION_DAILY_PARAMETERS,
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.data).to.be.instanceof(Consumption);
      expect(response.toJSON()).to.be.deep.equals(GET_CONSUMPTION_RESPONSE);
    });
  });

  describe('consumptionDownloadRequest', () => {
    it('call the post method', async () => {
      nock(CONSUMPTION_MOCK_URL)
        .post(CONSUMPTION_DOWNLOAD_REQUEST_URL)
        .reply(constants.HTTP_STATUS_OK, CONSUMPTION_REQUEST_DOWNLOAD_RESPONSE);

      const response: ConsumptionDownloadRequest = await client.consumptionDownloadRequest(
        CONSUMPTION_REQUEST_DOWNLOAD_PAYLOAD,
      );

      expect(response).to.be.instanceof(ConsumptionDownloadRequest);
      expect(response.toJSON()).to.be.deep.equals(
        CONSUMPTION_REQUEST_DOWNLOAD_RESPONSE,
      );
    });
  });

  describe('getBIConsumption', () => {
    it('call the get method', async () => {
      nock(CONSUMPTION_MOCK_URL)
        .get(GET_CONSUMPTION_BI_URL)
        .reply(constants.HTTP_STATUS_OK, GET_CONSUMPTION_BI_RESPONSE);

      const response: GetResult<ConsumptionBI> = await client.getBIConsumption(
        GET_CONSUMPTION_BI_PARAMETERS,
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.data).to.be.instanceof(ConsumptionBI);
      expect(response.toJSON()).to.be.deep.equals(GET_CONSUMPTION_BI_RESPONSE);
    });

    it('call the get method without data response', async () => {
      nock(CONSUMPTION_MOCK_URL)
        .get(GET_CONSUMPTION_BI_URL)
        .reply(
          constants.HTTP_STATUS_OK,
          GET_CONSUMPTION_BI_RESPONSE_WITHOUT_DATA,
        );

      const response: GetResult<ConsumptionBI> = await client.getBIConsumption(
        GET_CONSUMPTION_BI_PARAMETERS,
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.data).to.be.instanceof(ConsumptionBI);
      expect(response.toJSON()).to.be.deep.equals(
        GET_CONSUMPTION_BI_RESPONSE_WITHOUT_DATA,
      );
    });
  });

  describe('getBudgetSettings', () => {
    it('call the get method getBudgetSettings', async () => {
      const licenseReference = 'XSP123456';

      nock(CONSUMPTION_MOCK_URL)
        .get(`/consumption/license/${licenseReference}/budget`)
        .reply(constants.HTTP_STATUS_OK, GET_BUDGET_SETTINGS_RESPONSE);

      const response: GetResult<ConsumptionBudget> = await client.getBudgetSettings(
        licenseReference,
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.data).to.be.instanceof(ConsumptionBudget);
      expect(response.toJSON()).to.be.deep.equals(GET_BUDGET_SETTINGS_RESPONSE);
    });
  });

  describe('updateBudgetSettings', () => {
    it('call the get method getBudgetSettings', async () => {
      const licenseReference = 'XSP123456';

      nock(CONSUMPTION_MOCK_URL)
        .patch(`/consumption/license/${licenseReference}/budget`)
        .reply(constants.HTTP_STATUS_OK, GET_BUDGET_SETTINGS_RESPONSE);

      const payload = GET_BUDGET_SETTINGS_RESPONSE[GetResultFields.COLUMN_DATA];
      const response: GetResult<ConsumptionBudget> = await client.updateBudgetSettings(
        licenseReference,
        payload,
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.data).to.be.instanceof(ConsumptionBudget);
      expect(response.toJSON()).to.be.deep.equals(GET_BUDGET_SETTINGS_RESPONSE);
    });
  });

  describe('getLicenseDailyPredictions', () => {
    it('call the get method getLicenseDailyPredictions', async () => {
      const licenseReference = 'XSP123456';

      nock(CONSUMPTION_MOCK_URL)
        .get(`/licenses/${licenseReference}/predictions/daily`)
        .reply(
          constants.HTTP_STATUS_OK,
          GET_LICENSE_DAILY_PREDICTIONS_RESPONSE,
        );

      const response: GetResult<ConsumptionDailyPrediction> = await client.getLicenseDailyPredictions(
        licenseReference,
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.data).to.be.instanceof(ConsumptionDailyPrediction);
      expect(response.toJSON()).to.be.deep.equals(
        GET_LICENSE_DAILY_PREDICTIONS_RESPONSE,
      );
    });
  });
});
