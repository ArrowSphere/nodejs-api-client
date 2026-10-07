import {
  CatalogPlanType,
  CreateCatalogPlanResponse,
  GetCatalogPlanResponse,
  ListCatalogPlansResponse,
} from '../../../src';

export const CATALOG_PLAN_MOCK: CatalogPlanType = {
  customersRef: ['XSP11111', 'XSP22222'],
  name: 'Gold Plan',
  offers: ['CFQ7TTC0LF8R:0001'],
  programs: [
    {
      offerSku: ['CFQ7TTC0LF8R:0001'],
      programName: 'mscsp',
      rules: {
        cycles: [{ label: 'per Month', value: 720 }],
        marketSegments: ['corporate'],
        terms: [
          { label: 'Annual', value: 8640 },
          { label: 'Month-to-Month', value: 720 },
        ],
      },
    },
  ],
};

export const LIST_CATALOG_PLANS_RESPONSE: ListCatalogPlansResponse = {
  data: [CATALOG_PLAN_MOCK],
  pagination: {
    current_page: 1,
    next: null,
    per_page: 25,
    previous: null,
    total: 1,
    total_page: 1,
  },
  status: 200,
};

export const GET_CATALOG_PLAN_RESPONSE: GetCatalogPlanResponse = {
  data: CATALOG_PLAN_MOCK,
  status: 200,
};

export const CREATE_CATALOG_PLAN_RESPONSE: CreateCatalogPlanResponse = {
  data: CATALOG_PLAN_MOCK,
  status: 201,
};
