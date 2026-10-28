import { PartnertagCategoryType } from './partnertagCategory';

export type PartnertagType = {
  id?: number;
  createdAt?: string;
  description?: string;
  label?: string;
  labelsSerialized?: string;
  partnertagCategory?: PartnertagCategoryType;
  partnerCompanyCount?: string;
  endCustomerCompanyCount?: string;
};
