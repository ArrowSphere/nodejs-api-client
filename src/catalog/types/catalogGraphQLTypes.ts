// Here are the types, they are useful to have exact types of the responses

export type GetProductsType = {
  getProducts?: PaginatedProductsType;
};

export type GetProductType = {
  product?: ProductType;
};

export type GetPriceBandType = {
  priceBand?: PriceBandType;
};

export type GetPriceBandsType = {
  getPriceBands: {
    priceBands: PriceBandType[];
  };
};

export type GetExchangeRatesType = {
  exchangeRates?: ExchangeRateType[];
};

export type GetExchangeRateValueType = {
  exchangeRate?: ExchangeRateValueType;
};

export type PaginatedProductsType = {
  filters?: Array<FiltersType>;
  pagination?: PaginationType;
  products?: Array<ProductType>;
  topOffers?: Array<ProductType>;
};

export type FiltersType = {
  name?: string;
  values?: FiltersValuesType | FiltersValuesType[];
};

export type FiltersValuesType = {
  value?: string;
  count?: number;
};

export type PaginationType = {
  perPage?: number;
  currentPage?: number;
  totalPage?: number;
  total?: number;
  next?: string;
  previous?: string;
};

export type ProductType = {
  id?: string;
  identifiers?: IdentifiersType;
  name?: string;
  classification?: string;
  arrowCategories?: Array<string>;
  arrowSubCategories?: Array<string>;
  attributesParameters?: Array<AttributesParameters>;
  licenseAgreementType?: string;
  family?: FamilyType;
  isAddon?: boolean;
  hasAddons?: boolean;
  actionFlags?: ActionFlagsType;
  addonPrimaries?: Array<IdentifiersType>;
  conversionOfferPrimaries?: Array<IdentifiersType>;
  baseOfferPrimaries?: Array<IdentifiersType>;
  assets?: AssetsType;
  environmentAvailability?: string;
  promotions?: Array<PromotionType>;
  marketplace?: string;
  isEnabled?: boolean;
  isTrial?: boolean;
  isIndirectBusiness?: boolean;
  lastUpdate?: string;
  marketingText?: MarketingTextType;
  vendorOfferUrl?: string;
  serviceDescription?: string;
  eula?: string;
  endCustomerEula?: string;
  endCustomerRequirements?: string;
  endCustomerFeatures?: string;
  xspUrl?: string;
  saleConstraints?: SaleConstraintsType;
  vendor?: VendorType;
  program?: GraphqlProgramType;
  weightTopSales?: number;
  weightForced?: number;
  priceBand?: Array<PriceBandType>;
  defaultPriceBand?: PriceBandType;
  relatedOffers?: Array<RelatedOfferType>;
  resellers?: OfferResellersType;
  scope?: string;
};

export type IdentifiersType = {
  arrowsphere?: ArrowsphereIdentifierType;
  vendor?: VendorIdentifierType;
};

export type ArrowsphereIdentifierType = {
  sku?: string;
  skuXsp?: string;
  skuXac?: string;
  orderableSku?: string;
};

export type VendorIdentifierType = {
  name?: string;
  family?: string;
  offerName?: string;
  sku?: string;
  attributes?: AttributesType;
};

export type AttributesType = {
  cancelSubscription?: boolean;
  canSwitchAutoRenew?: boolean;
  decreaseSeats?: boolean;
  increaseSeats?: boolean;
  partIdentifier?: string;
  periodicity?: number;
  planId?: string;
  productId?: string;
  productSku?: string;
  reactivateSubscription?: boolean;
  suspendSubscription?: boolean;
  term?: number;
  unitType?: string;
};

export type FamilyType = {
  id?: string;
  name?: string;
};

export type ActionFlagsType = {
  isAutoRenew?: boolean;
  isManualProvisioning?: boolean;
  renewalSku?: string;
};

export type AssetsType = {
  featurePictureUrl?: string;
  mainLogoUrl?: string;
  pictureUrl?: string;
  squareLogoUrl?: string;
};

export type MarketingTextType = {
  overviewDescription?: string;
  featuresShort?: string;
  featuresFull?: string;
  features?: string;
};

export type SaleConstraintsType = {
  customerQualifications?: Array<string>;
  resellerQualifications?: Array<string>;
  minQuantity?: number;
  maxQuantity?: number;
  maxSubscriptionConstraint?: string;
  maxSubscriptionPerCustomer?: number;
  saleGroup?: string;
  requiredAttributes?: Array<string>;
};

export type VendorType = {
  name?: string;
};

export type GraphqlProgramType = {
  hasProgramEnrollment?: boolean;
  isEnabled?: boolean;
  legacyCode?: string;
  names?: ProgramNameType;
};

export type ProgramNameType = {
  full?: string;
  short?: string;
};

export type PriceBandType = {
  actionFlags?: PriceBandActionFlagsType;
  attributes?: Array<AttributeType>;
  billing?: BillingType;
  currency?: string;
  dynamicAttributes?: DynamicAttributesType;
  family?: FamilyType;
  identifiers?: PriceBandIdentifiersType;
  isEnabled?: boolean;
  marketplace?: string;
  name?: string;
  orderingType?: string;
  prices?: PricesType;
  saleConstraints?: PriceBandSaleConstraintsType;
  uom?: UomType;
  promotionPrices?: PromotionPricesType;
  vendor?: VendorType;
};

export type PriceBandActionFlagsType = {
  canBeCancelled?: boolean;
  canBeReactivated?: boolean;
  canBeSuspended?: boolean;
  canDecreaseSeats?: boolean;
  canIncreaseSeats?: boolean;
};

export type AttributeType = {
  name?: string;
  value?: string;
};

export type BillingType = {
  cycle?: number;
  term?: number;
  type?: string;
};

export type DynamicAttributesType = {
  region?: string;
  vCpu?: string;
  ram?: string;
  diskSize?: string;
  reservationsAutofitGroup?: string;
  acu?: string;
  marketSegment?: string;
  version?: string;
  metric?: string;
};

export type PriceBandIdentifiersType = {
  arrowsphere?: PriceBandArrowsphereIdentifierType;
  erp?: ErpIdentifierType;
  vendor?: PriceBandVendorIdentifierType;
};

export type PriceBandArrowsphereIdentifierType = {
  sku?: string;
};

export type ErpIdentifierType = {
  sku?: string;
};

export type PriceBandVendorIdentifierType = {
  purchasePlan?: string;
  sku?: string;
};

export enum PricesTypeKeys {
  BUY_KEY = 'buy',
  SELL_KEY = 'sell',
  PUBLIC_KEY = 'public',
  ARROW_PRICE_KEY = 'arrowPrice',
  PARTNER_PRICE_KEY = 'partnerPrice',
  ENDCUSTOMER_PRICE_KEY = 'endCustomPrice',
  RETAIL_KEY = 'public',
  VENDOR_PRICING_SOURCE_KEY = 'vendorPricingSource',
}

export type PricesType = {
  [PricesTypeKeys.BUY_KEY]?: string;
  [PricesTypeKeys.SELL_KEY]?: string;
  [PricesTypeKeys.PUBLIC_KEY]?: string;
  [PricesTypeKeys.ARROW_PRICE_KEY]?: string;
  [PricesTypeKeys.PARTNER_PRICE_KEY]?: string;
  [PricesTypeKeys.ENDCUSTOMER_PRICE_KEY]?: string;
  [PricesTypeKeys.RETAIL_KEY]?: string;
  [PricesTypeKeys.VENDOR_PRICING_SOURCE_KEY]?: VendorPricingSourceType;
};

export type PriceBandSaleConstraintsType = {
  availableDate?: string;
  expiryDate?: string;
  minQuantity?: number;
  maxQuantity?: number;
};

export type UomType = {
  quantity?: number;
  type?: string;
};

export type RelatedOfferType = {
  vendor?: string;
  sku?: string;
};

export type OfferResellersType = {
  owner?: ResellerType;
  viewers?: Array<ResellerType>;
};

export type ResellerType = {
  xspRef?: string;
};

export type PromotionPricesType = {
  promotionId?: string;
  prices?: PricesType;
};

export type VendorPricingSourceType = {
  currency?: string;
  changeRate?: number;
  prices?: PricesType;
};

export type PromotionType = {
  promotionId?: string;
  vendorSku?: string;
  marketplace?: string;
  name?: string;
  description?: string;
  isAutoApplicable?: boolean;
  startDate?: string;
  endDate?: string;
  promotionType?: string;
  pricingType?: string;
  pricingValue?: number;
  billing?: BillingType;
  minQuantity?: number;
  maxQuantity?: number;
  currency?: string;
  applicableUntil?: string;
  applicableFor?: number;
  checkEligibility?: boolean;
};

export type ExchangeRateType = {
  toEur: string;
  unitTextName: string;
  unitTextSymbol: string;
};

export type ExchangeRateValueType = {
  unitTextName: string;
  unitTextSymbol: string;
  value: number;
};

export type AttributesParameters = {
  name?: string;
  label?: string;
  position?: number;
};
