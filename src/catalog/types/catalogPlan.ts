import { PaginationData } from '../../pagination';

export type CatalogPlanBillingLabel = {
  label: string;
  value: number;
};

export type CatalogPlanProgramRulesType = {
  cycles?: CatalogPlanBillingLabel[];
  marketSegments?: string[];
  terms?: CatalogPlanBillingLabel[];
};

export type CatalogPlanProgramType = {
  offerSku?: string[];
  programName: string;
  rules?: CatalogPlanProgramRulesType;
};

export type CatalogPlanType = {
  customersRef: string[];
  name: string;
  offers: string[];
  programs: CatalogPlanProgramType[];
};

export type CatalogPlanProgramRulesPayload = {
  cycles?: number[];
  marketSegments?: string[];
  terms?: number[];
};

export type CatalogPlanProgramPayload = {
  offerSku?: string[];
  programName: string;
  rules?: CatalogPlanProgramRulesPayload;
};

export type CreateCatalogPlanPayload = {
  customersRef?: string[];
  name: string;
  programs?: CatalogPlanProgramPayload[];
};

export type UpdateCatalogPlanPayload = Partial<CreateCatalogPlanPayload>;

export type ListCatalogPlansResponse = {
  data: CatalogPlanType[];
  pagination: PaginationData;
  status: number;
};

export type GetCatalogPlanResponse = {
  data: CatalogPlanType;
  status: number;
};

export type CreateCatalogPlanResponse = {
  data: CatalogPlanType;
  status: number;
};
