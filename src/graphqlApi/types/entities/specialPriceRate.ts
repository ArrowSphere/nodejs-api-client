import { CompanyTypeType } from './company';
import { OrderItemsType } from './order';

export type SpecialPriceRateType = {
  id?: number;
  createdAt?: string;
  endedAt?: string;
  rate?: number;
  startedAt?: string;
  companyType?: CompanyTypeType;
  orderItem?: OrderItemsType;
  type?: SubscriptionRateType;
};

export type SubscriptionRateType = {
  id?: number;
  name?: string;
};
