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
  itemData?: ItemData;
};

export type ItemData = {
  id: string;
  offerName: string;
  publicPrice: number;
  currency: string;
  arrowRateType: string;
  partnerRateType: string;
  billingTerm: number;
  billingCycle: number;
  arrowRateValue: number;
  partnerRateValue: number;
  arrowSpherePriceBandSku: number;
  licenseAgreementType: string;
  mainLogoUrl: string;
  squareLogoUrl: string;
  marketplace: string;
  creationDate: string;
  quantity: number;
  orderingType: string;
};
