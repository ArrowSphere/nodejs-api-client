import {
  AttachScopesResponse,
  BusinessRuleEffectType,
  CreateBusinessRulesResponse,
  CreatePricingPlanResponse,
  GetBusinessRulesHistoryResponse,
  GetBusinessRulesResponse,
  GetClientsHistoryResponse,
  GetPricingPlanResponse,
  GetScopesResponse,
  ListPricingPlansResponse,
} from '../../../src';

export const PRICING_PLAN_MOCK = {
  effectiveDate: '2026-01-15T10:00:00Z',
  name: 'My Pricing Plan',
  reference: 'PP-REF-001',
  scope: {
    marketplace: 'FR',
    program: 'MSCSP',
  },
};

export const LIST_PRICING_PLANS_RESPONSE: ListPricingPlansResponse = {
  data: { pricingPlans: [PRICING_PLAN_MOCK] },
  pagination: {
    continuationToken: 'token-123',
    perPage: 25,
  },
  status: 200,
};

export const GET_PRICING_PLAN_RESPONSE: GetPricingPlanResponse = {
  data: { pricingPlan: PRICING_PLAN_MOCK },
  status: 200,
};

export const CREATE_PRICING_PLAN_RESPONSE: CreatePricingPlanResponse = {
  data: { pricingPlan: PRICING_PLAN_MOCK },
  status: 201,
};

export const BUSINESS_RULE_MOCK = {
  effect: {
    rateType: 'discount',
    type: BusinessRuleEffectType.RATE,
    value: 5,
  },
  effectiveDate: '2026-01-15T10:00:00Z',
  label: 'Default discount',
  reference: 'BR-REF-001',
  scope: {
    classification: 'SaaS',
    default: true,
  },
};

export const GET_BUSINESS_RULES_RESPONSE: GetBusinessRulesResponse = {
  data: { businessRules: [BUSINESS_RULE_MOCK] },
  pagination: {
    continuationToken: 'token-456',
    perPage: 25,
  },
  status: 200,
};

export const CREATE_BUSINESS_RULES_RESPONSE: CreateBusinessRulesResponse = {
  data: { businessRules: [BUSINESS_RULE_MOCK] },
  status: 201,
};

export const GET_BUSINESS_RULES_HISTORY_RESPONSE: GetBusinessRulesHistoryResponse = {
  data: {
    businessRules: [
      {
        effect: {
          rateType: 'discount',
          tier: 3,
          type: BusinessRuleEffectType.RATE,
          value: 5,
        },
        effectiveDate: '2026-01-15T10:00:00Z',
        label: 'Default discount',
        metadata: {
          updatedAt: '2026-01-15T10:00:00Z',
          updatedBy: {
            contactName: 'John Doe',
            xapUsername: 'john.doe@arrow.com',
          },
        },
        reference: 'BR-REF-001',
        scope: {
          classification: 'SaaS',
          default: true,
        },
      },
    ],
  },
  pagination: {
    continuationToken: 'token-789',
    perPage: 25,
  },
  status: 200,
};

export const GET_SCOPES_RESPONSE: GetScopesResponse = {
  data: { scopes: ['XSP001', 'XSP002', 'XSP003'] },
  pagination: {
    continuationToken: 'token-scopes',
    perPage: 25,
  },
  status: 200,
};

export const ATTACH_SCOPES_RESPONSE: AttachScopesResponse = {
  data: { scopes: ['XSP001', 'XSP002'] },
  status: 200,
};

export const GET_CLIENTS_HISTORY_RESPONSE: GetClientsHistoryResponse = {
  data: {
    actions: [
      {
        action: 'attach',
        company: { name: 'Acme Corp', xspRef: 'XSP001' },
        effectiveDate: '2026-01-15T10:00:00Z',
        updatedBy: {
          contactName: 'Jane Smith',
          xapUsername: 'jane.smith@arrow.com',
        },
      },
    ],
  },
  pagination: {
    continuationToken: 'token-history',
    perPage: 25,
  },
  status: 200,
};
