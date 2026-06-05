// --- Enums ---

export enum PricingPlanScopeType {
  END_CUSTOMER_XSP_REF = 'end-customer-xsp-ref',
  RESELLER_XSP_REF = 'reseller-xsp-ref',
}

export enum BusinessRuleEffectType {
  RATE = 'rate',
  LINK_TO_DEFAULT = 'linkToDefault',
}

// --- Core types ---

export type PricingPlanScopeData = {
  marketplace: string;
  program: string;
};

export type PricingPlanType = {
  effectiveDate: string;
  name: string;
  reference: string;
  scope: PricingPlanScopeData;
};

export type BusinessRuleScopeData = {
  billingCycle?: number;
  billingTerm?: number;
  classification?: string;
  default?: boolean;
  marketSegment?: string;
  offerArrowSphereSku?: string;
  offerFamily?: string;
  priceBandArrowSphereSku?: string;
};

export type BusinessRuleEffectData = {
  rateType?: string;
  type: BusinessRuleEffectType;
  value?: number;
};

export type BusinessRuleType = {
  effect: BusinessRuleEffectData;
  effectiveDate?: string;
  label?: string;
  metadata?: { updatedAt: string };
  reference?: string;
  scope: BusinessRuleScopeData;
};

// --- Request params/payloads ---

export type ListPricingPlansParameters = {
  continuationToken?: string;
  endCustomerXspRef?: string;
  marketplace?: string;
  perPage?: number;
  program?: string;
};

export type CreatePricingPlanPayload = {
  name: string;
  scope: { marketplace?: string; program: string };
};

export type UpdatePricingPlanPayload = {
  name: string;
};

export type GetBusinessRulesParameters = {
  continuationToken?: string;
  offerFamily?: string;
  perPage?: number;
};

export type CreateBusinessRulesPayload = {
  businessRules: BusinessRuleType[];
};

export type GetBusinessRulesHistoryParameters = {
  billingCycle?: string;
  billingTerm?: string;
  classification: string;
  effectiveDateFrom?: string;
  effectiveDateTo?: string;
  marketSegment?: string;
  offerArrowSphereSku?: string;
  offerFamily?: string;
  priceBandArrowSphereSku?: string;
};

export type GetScopesParameters = {
  continuationToken?: string;
  perPage?: number;
};

export type AttachScopesPayload = {
  scopes: string[];
};

export type DetachScopesPayload = {
  scopes: string[];
};

export type GetClientsHistoryParameters = {
  continuationToken?: string;
  perPage?: number;
};

// --- Response types ---

export type ContinuationPagination = {
  continuationToken: string;
  next?: string;
  perPage: number;
  previous?: string;
};

export type ListPricingPlansResponse = {
  data: { pricingPlans: PricingPlanType[] };
  pagination: ContinuationPagination;
  status: number;
};

export type GetPricingPlanResponse = {
  data: { pricingPlan: PricingPlanType };
  status: number;
};

export type CreatePricingPlanResponse = {
  data: { pricingPlan: PricingPlanType };
  status: number;
};

export type GetBusinessRulesResponse = {
  data: { businessRules: BusinessRuleType[] };
  pagination: ContinuationPagination;
  status: number;
};

export type CreateBusinessRulesResponse = {
  data: { businessRules: BusinessRuleType[] };
  status: number;
};

export type BusinessRulesHistoryEntry = {
  effect: BusinessRuleEffectData & { tier: number };
  effectiveDate: string;
  label: string;
  metadata: {
    updatedAt: string;
    updatedBy: { contactName: string; xapUsername: string };
  };
  reference: string;
  scope: BusinessRuleScopeData;
};

export type GetBusinessRulesHistoryResponse = {
  data: { businessRules: BusinessRulesHistoryEntry[] };
  pagination: ContinuationPagination;
  status: number;
};

export type GetScopesResponse = {
  data: { scopes: string[] };
  pagination?: ContinuationPagination;
  status: number;
};

export type AttachScopesResponse = {
  data: {
    errors?: { conflictWithExistingPricingPlan?: Record<string, string> };
    scopes: string[];
  };
  status: number;
};

export type ClientsHistoryAction = {
  action: string;
  company: { name: string; xspRef: string };
  effectiveDate: string;
  updatedBy: { contactName: string; xapUsername: string };
};

export type GetClientsHistoryResponse = {
  data: { actions: ClientsHistoryAction[] };
  pagination: ContinuationPagination;
  status: number;
};
