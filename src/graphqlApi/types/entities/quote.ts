import { ArrowCompanyType, EndCustomerType, PartnerType } from './company';
import { GraphqlApiProgramType } from './program';
import { QuoteVersion } from './quoteVersion';

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
  versions?: QuoteVersion[];
  promotionCode?: string;
  reference?: string;
  status?: string;
  totalRecurringPrice?: number;
  updatedAt?: string;
  lastVersion?: QuoteVersion;
};

export type QuoteItemType = {
  id?: number;
  itemData?: ItemData;
  name?: string;
  program?: GraphqlApiProgramType;
  reference?: string;
  vendorName?: string;
  vendorNamesSerialized?: string;
};

export type ItemData = {
  id?: string;
  offerName?: string;
  publicPrice?: number;
  buyPrice?: number;
  sellPrice?: number;
  currency?: string;
  arrowRateType?: string;
  partnerRateType?: string;
  arrowBuyPrice?: number;
  arrowCotermBuyPrice?: number;
  resellerBuyPrice?: number;
  resellerCotermBuyPrice?: number;
  endCustomerBuyPrice?: number;
  endCustomerCotermBuyPrice?: number;
  billingTerm?: number;
  billingCycle?: number;
  arrowRateValue?: number;
  partnerRateValue?: number;
  arrowSpherePriceBandSku?: number;
  licenseAgreementType?: string;
  mainLogoUrl?: string;
  squareLogoUrl?: string;
  marketplace?: string;
  creationDate?: string;
  quantity?: number;
  orderingType?: string;
};
