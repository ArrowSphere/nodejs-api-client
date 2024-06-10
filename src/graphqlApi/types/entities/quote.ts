import { ArrowCompanyType, EndCustomerType, PartnerType } from './company';
import { GraphqlApiProgramType } from './program';

export type EavType = {
  value?: string;
};

export type QuoteType = {
  id?: number;
  arrowCompany?: ArrowCompanyType;
  commitmentAmountTotal?: number;
  createdAt?: string;
  endCustomer?: EndCustomerType;
  items?: QuoteItemType[];
  partner?: PartnerType;
  promotionCode?: string;
  reference?: string;
  status?: string;
  totalRecurringPrice?: number;
  updatedAt?: string;
};

export type QuoteItemType = {
  id?: number;
  name?: string;
  program?: GraphqlApiProgramType;
  reference?: string;
  vendorName?: string;
  vendorNamesSerialized?: string;
};
