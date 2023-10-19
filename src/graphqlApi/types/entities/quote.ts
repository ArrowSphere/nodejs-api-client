import { ArrowCompanyType, EndCustomerType, PartnerType } from './company';

export type QuoteType = {
  id?: number;
  arrowCompany?: ArrowCompanyType;
  createdAt?: string;
  endCustomer?: EndCustomerType;
  partner?: PartnerType;
  reference?: string;
  updatedAt?: string;
};
