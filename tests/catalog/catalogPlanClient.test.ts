import { PublicApiClient } from '../../src/publicApiClient';
import nock from 'nock';
import { constants } from 'http2';
import { expect } from 'chai';
import {
  CREATE_CATALOG_PLAN_RESPONSE,
  GET_CATALOG_PLAN_RESPONSE,
  LIST_CATALOG_PLANS_RESPONSE,
} from './mocks/catalogPlan.mocks';

const MOCK_URL = 'https://catalog-plan.localhost';
const PLAN_NAME = 'Gold Plan';
const PLAN_PATH = '/catalog/plans/Gold%20Plan';

describe('CatalogPlanClient', () => {
  const client = new PublicApiClient().getCatalogPlanClient().setUrl(MOCK_URL);

  describe('listCatalogPlans', () => {
    it('lists catalog plans without parameters', async () => {
      nock(MOCK_URL)
        .get('/catalog/plans')
        .reply(constants.HTTP_STATUS_OK, LIST_CATALOG_PLANS_RESPONSE);

      const response = await client.listCatalogPlans();

      expect(response).to.deep.equal(LIST_CATALOG_PLANS_RESPONSE);
    });

    it('lists catalog plans with pagination parameters', async () => {
      nock(MOCK_URL)
        .get('/catalog/plans')
        .query({ page: '2', per_page: '10' })
        .reply(constants.HTTP_STATUS_OK, LIST_CATALOG_PLANS_RESPONSE);

      const response = await client.listCatalogPlans({
        page: '2',
        per_page: '10',
      });

      expect(response).to.deep.equal(LIST_CATALOG_PLANS_RESPONSE);
    });
  });

  describe('getCatalogPlan', () => {
    it('gets a single catalog plan, encoding its name in the URL', async () => {
      nock(MOCK_URL)
        .get(PLAN_PATH)
        .reply(constants.HTTP_STATUS_OK, GET_CATALOG_PLAN_RESPONSE);

      const response = await client.getCatalogPlan(PLAN_NAME);

      expect(response).to.deep.equal(GET_CATALOG_PLAN_RESPONSE);
    });

    it('forwards optional query parameters', async () => {
      nock(MOCK_URL)
        .get(PLAN_PATH)
        .query({ foo: 'bar' })
        .reply(constants.HTTP_STATUS_OK, GET_CATALOG_PLAN_RESPONSE);

      const response = await client.getCatalogPlan(PLAN_NAME, { foo: 'bar' });

      expect(response).to.deep.equal(GET_CATALOG_PLAN_RESPONSE);
    });
  });

  describe('createCatalogPlan', () => {
    it('creates a catalog plan', async () => {
      const payload = {
        customersRef: ['XSP11111', 'XSP22222'],
        name: PLAN_NAME,
        programs: [
          {
            offerSku: ['CFQ7TTC0LF8R:0001'],
            programName: 'mscsp',
            rules: {
              cycles: [720],
              marketSegments: ['corporate'],
              terms: [8640, 720],
            },
          },
        ],
      };

      nock(MOCK_URL)
        .post('/catalog/plans', payload)
        .reply(constants.HTTP_STATUS_CREATED, CREATE_CATALOG_PLAN_RESPONSE);

      const response = await client.createCatalogPlan(payload);

      expect(response).to.deep.equal(CREATE_CATALOG_PLAN_RESPONSE);
    });
  });

  describe('updateCatalogPlan', () => {
    it('updates the customers of a catalog plan', async () => {
      nock(MOCK_URL)
        .patch(PLAN_PATH, { customersRef: ['XSP33333'] })
        .reply(constants.HTTP_STATUS_NO_CONTENT);

      await client.updateCatalogPlan(PLAN_NAME, { customersRef: ['XSP33333'] });
    });

    it('renames a catalog plan', async () => {
      nock(MOCK_URL)
        .patch(PLAN_PATH, { name: 'Platinum Plan' })
        .reply(constants.HTTP_STATUS_NO_CONTENT);

      await client.updateCatalogPlan(PLAN_NAME, { name: 'Platinum Plan' });
    });
  });

  describe('deleteCatalogPlan', () => {
    it('deletes a catalog plan', async () => {
      nock(MOCK_URL).delete(PLAN_PATH).reply(constants.HTTP_STATUS_NO_CONTENT);

      await client.deleteCatalogPlan(PLAN_NAME);
    });
  });
});
