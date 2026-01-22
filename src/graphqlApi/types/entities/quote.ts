import { ArrowCompanyType, EndCustomerType, PartnerType } from './company';
import { ContactsType } from './contact';
import { GraphqlApiProgramType } from './program';
import { QuoteVersion } from './quoteVersion';
import { Comment } from './comment';

export type EavType = {
  value?: string;
};

export type QuoteType = {
  id?: number;
  arrowCompany?: ArrowCompanyType;
  commitmentAmountTotal?: number;
  createdAt?: string;
  comments?: Comment[];
  dateBegin?: string;
  dateEnd?: string;
  endCustomer?: EndCustomerType;
  endCustomerContact?: ContactsType;
  items?: QuoteItemType[];
  name?: string;
  partner?: PartnerType;
  versions?: QuoteVersion[];
  promotionCode?: string;
  promotionType?: string;
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
  version?: QuoteVersion;
};

export type ItemData = {
  id?: string;
  attributes?: NameValueType[];
  isAddon?: boolean;
  isTrial?: boolean;
  arrowSubCategories?: string[];
  offerName?: string;
  customTermEndDate?: string;
  publicPrice?: number;
  buyCurrency?: string;
  buyPrice?: number;
  exchangeRateBuySell?: number;
  exchangeRateBuyCountry?: number;
  sellPrice?: number;
  currency?: string;
  arrowRateType?: string;
  partnerRateType?: string;
  arrowBuyPrice?: number;
  arrowCotermBuyPrice?: number;
  /**
   * this field will be delete shortly
   * Use 'partnerBuyPrice' instead.
   * @deprecated
   */
  resellerBuyPrice?: number;
  /**
   * this field will be delete shortly
   * Use 'partnerCotermBuyPrice' instead.
   * @deprecated
   */
  resellerCotermBuyPrice?: number;
  retailCotermBuyPrice?: number;
  endCustomerBuyPrice?: number;
  partnerCotermBuyPrice?: number;
  partnerBuyPriceWithoutPromotion?: number;
  partnerBuyPrice?: number;
  endCustomerCotermBuyPrice?: number;
  partnerCotermBuyPriceWithoutPromotion?: number;
  billingTerm?: number;
  billingCycle?: number;
  billingType?: string;
  arrowRateValue?: number;
  partnerRateValue?: number;
  vendorRateType?: string;
  vendorRateValue?: number;
  arrowSpherePriceBandSku?: string;
  licenseAgreementType?: string;
  classification?: string;
  mainLogoUrl?: string;
  squareLogoUrl?: string;
  marketplace?: string;
  creationDate?: string;
  quantity?: number;
  orderingType?: string;
  vendorName?: string;
  initialBuyPrice?: number;
  initialSellPrice?: number;
  isPromotion?: boolean;
  vendorPriceBandSku?: string;
  identifiersVendorName?: string;
  identifiersVendorNamesSerialized?: string;
};

export type NameValueType = {
  name?: string;
  value?: string;
};
