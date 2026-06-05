import { PublicApiClient } from '../../src/publicApiClient';
import nock from 'nock';
import { constants } from 'http2';
import { expect } from 'chai';
import { BusinessRuleEffectType, PricingPlanScopeType } from '../../src';
import {
  ATTACH_SCOPES_RESPONSE,
  CREATE_BUSINESS_RULES_RESPONSE,
  CREATE_PRICING_PLAN_RESPONSE,
  GET_BUSINESS_RULES_HISTORY_RESPONSE,
  GET_BUSINESS_RULES_RESPONSE,
  GET_CLIENTS_HISTORY_RESPONSE,
  GET_PRICING_PLAN_RESPONSE,
  GET_SCOPES_RESPONSE,
  LIST_PRICING_PLANS_RESPONSE,
} from './mocks/pricingPlan.mocks';

const MOCK_URL = 'https://pricing-plan.localhost';
const REFERENCE = 'PP-REF-001';

describe('PricingPlanClient', () => {
  const client = new PublicApiClient().getPricingPlanClient().setUrl(MOCK_URL);

  describe('listPricingPlans', () => {
    it('lists pricing plans without parameters', async () => {
      nock(MOCK_URL)
        .get('/billing/pricing-plans')
        .reply(constants.HTTP_STATUS_OK, LIST_PRICING_PLANS_RESPONSE);

      const response = await client.listPricingPlans();

      expect(response).to.deep.equal(LIST_PRICING_PLANS_RESPONSE);
    });

    it('lists pricing plans with parameters', async () => {
      nock(MOCK_URL)
        .get('/billing/pricing-plans')
        .query({
          marketplace: 'FR',
          program: 'MSCSP',
          perPage: '10',
        })
        .reply(constants.HTTP_STATUS_OK, LIST_PRICING_PLANS_RESPONSE);

      const response = await client.listPricingPlans({
        marketplace: 'FR',
        perPage: 10,
        program: 'MSCSP',
      });

      expect(response).to.deep.equal(LIST_PRICING_PLANS_RESPONSE);
    });
  });

  describe('getPricingPlan', () => {
    it('gets a single pricing plan', async () => {
      nock(MOCK_URL)
        .get(`/billing/pricing-plans/${REFERENCE}`)
        .reply(constants.HTTP_STATUS_OK, GET_PRICING_PLAN_RESPONSE);

      const response = await client.getPricingPlan(REFERENCE);

      expect(response).to.deep.equal(GET_PRICING_PLAN_RESPONSE);
    });
  });

  describe('createPricingPlan', () => {
    it('creates a pricing plan', async () => {
      nock(MOCK_URL)
        .post('/billing/pricing-plans', {
          name: 'My Pricing Plan',
          scope: { marketplace: 'FR', program: 'MSCSP' },
        })
        .reply(constants.HTTP_STATUS_CREATED, CREATE_PRICING_PLAN_RESPONSE);

      const response = await client.createPricingPlan({
        name: 'My Pricing Plan',
        scope: { marketplace: 'FR', program: 'MSCSP' },
      });

      expect(response).to.deep.equal(CREATE_PRICING_PLAN_RESPONSE);
    });
  });

  describe('updatePricingPlan', () => {
    it('updates a pricing plan', async () => {
      nock(MOCK_URL)
        .patch(`/billing/pricing-plans/${REFERENCE}`, {
          name: 'Renamed Plan',
        })
        .reply(constants.HTTP_STATUS_NO_CONTENT);

      await client.updatePricingPlan(REFERENCE, { name: 'Renamed Plan' });
    });
  });

  describe('deletePricingPlan', () => {
    it('deletes a pricing plan', async () => {
      nock(MOCK_URL)
        .delete(`/billing/pricing-plans/${REFERENCE}`)
        .reply(constants.HTTP_STATUS_NO_CONTENT);

      await client.deletePricingPlan(REFERENCE);
    });
  });

  describe('getBusinessRules', () => {
    it('gets business rules for a pricing plan', async () => {
      nock(MOCK_URL)
        .get(`/billing/pricing-plans/${REFERENCE}/business-rules`)
        .reply(constants.HTTP_STATUS_OK, GET_BUSINESS_RULES_RESPONSE);

      const response = await client.getBusinessRules(REFERENCE);

      expect(response).to.deep.equal(GET_BUSINESS_RULES_RESPONSE);
    });

    it('gets business rules with parameters', async () => {
      nock(MOCK_URL)
        .get(`/billing/pricing-plans/${REFERENCE}/business-rules`)
        .query({ offerFamily: 'O365', perPage: '50' })
        .reply(constants.HTTP_STATUS_OK, GET_BUSINESS_RULES_RESPONSE);

      const response = await client.getBusinessRules(REFERENCE, {
        offerFamily: 'O365',
        perPage: 50,
      });

      expect(response).to.deep.equal(GET_BUSINESS_RULES_RESPONSE);
    });
  });

  describe('createBusinessRules', () => {
    it('creates business rules', async () => {
      const payload = {
        businessRules: [
          {
            effect: {
              rateType: 'discount',
              type: BusinessRuleEffectType.RATE,
              value: 5,
            },
            scope: { classification: 'SaaS', default: true },
          },
        ],
      };

      nock(MOCK_URL)
        .post(`/billing/pricing-plans/${REFERENCE}/business-rules`, payload)
        .reply(constants.HTTP_STATUS_CREATED, CREATE_BUSINESS_RULES_RESPONSE);

      const response = await client.createBusinessRules(REFERENCE, payload);

      expect(response).to.deep.equal(CREATE_BUSINESS_RULES_RESPONSE);
    });
  });

  describe('getBusinessRulesHistory', () => {
    it('gets business rules history', async () => {
      nock(MOCK_URL)
        .get(`/billing/pricing-plans/${REFERENCE}/business-rules/history`)
        .query({ classification: 'SaaS' })
        .reply(constants.HTTP_STATUS_OK, GET_BUSINESS_RULES_HISTORY_RESPONSE);

      const response = await client.getBusinessRulesHistory(REFERENCE, {
        classification: 'SaaS',
      });

      expect(response).to.deep.equal(GET_BUSINESS_RULES_HISTORY_RESPONSE);
    });
  });

  describe('getScopes', () => {
    it('gets scopes for a pricing plan', async () => {
      nock(MOCK_URL)
        .get(
          `/billing/pricing-plans/${REFERENCE}/scopes/${PricingPlanScopeType.END_CUSTOMER_XSP_REF}`,
        )
        .reply(constants.HTTP_STATUS_OK, GET_SCOPES_RESPONSE);

      const response = await client.getScopes(
        REFERENCE,
        PricingPlanScopeType.END_CUSTOMER_XSP_REF,
      );

      expect(response).to.deep.equal(GET_SCOPES_RESPONSE);
    });
  });

  describe('attachScopes', () => {
    it('attaches scopes to a pricing plan', async () => {
      const payload = { scopes: ['XSP001', 'XSP002'] };

      nock(MOCK_URL)
        .post(
          `/billing/pricing-plans/${REFERENCE}/scopes/${PricingPlanScopeType.END_CUSTOMER_XSP_REF}`,
          payload,
        )
        .reply(constants.HTTP_STATUS_OK, ATTACH_SCOPES_RESPONSE);

      const response = await client.attachScopes(
        REFERENCE,
        PricingPlanScopeType.END_CUSTOMER_XSP_REF,
        payload,
      );

      expect(response).to.deep.equal(ATTACH_SCOPES_RESPONSE);
    });
  });

  describe('detachScopes', () => {
    it('detaches scopes from a pricing plan', async () => {
      const payload = { scopes: ['XSP003'] };

      nock(MOCK_URL)
        .delete(
          `/billing/pricing-plans/${REFERENCE}/scopes/${PricingPlanScopeType.END_CUSTOMER_XSP_REF}`,
          payload,
        )
        .reply(constants.HTTP_STATUS_NO_CONTENT);

      await client.detachScopes(
        REFERENCE,
        PricingPlanScopeType.END_CUSTOMER_XSP_REF,
        payload,
      );
    });
  });

  describe('getClientsHistory', () => {
    it('gets clients history for a pricing plan', async () => {
      nock(MOCK_URL)
        .get(`/billing/pricing-plans/${REFERENCE}/history`)
        .reply(constants.HTTP_STATUS_OK, GET_CLIENTS_HISTORY_RESPONSE);

      const response = await client.getClientsHistory(REFERENCE);

      expect(response).to.deep.equal(GET_CLIENTS_HISTORY_RESPONSE);
    });
  });
});
