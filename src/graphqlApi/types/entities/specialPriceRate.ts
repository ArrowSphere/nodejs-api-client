import { CompanyTypeType } from './company';

export type SpecialPriceRateType = {
  id?: number;
  createdAt?: string;
  endedAt?: string;
  rate?: number;
  startedAt?: string;
  companyType?: CompanyTypeType;
  type?: SubscriptionRateType;
};

export type SubscriptionRateType = {
  id?: number;
  name?: string;
};
