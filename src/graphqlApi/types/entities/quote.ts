import { ArrowCompanyType, EndCustomerType, PartnerType } from './company';
import { ProgramTypeGraphQL } from './program';

export type QuoteStatusType = {
  id?: number;
  name?: string;
};

export type EavType = {
  value?: string;
};

export type QuoteType = {
  id?: number;
  arrowCompany?: ArrowCompanyType;
  createdAt?: string;
  endCustomer?: EndCustomerType;
  items?: QuoteItemType[];
  partner?: PartnerType;
  promotionCode?: string;
  reference?: string;
  status?: QuoteStatusType;
  totalRecurringPrice?: number;
  updatedAt?: string;
};

export type QuoteItemType = {
  id?: number;
  name?: string;
  program?: ProgramTypeGraphQL;
  reference?: string;
  vendorName?: string;
  vendorNamesSerialized?: string;
};
