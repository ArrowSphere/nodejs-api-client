/**
 * Filter Types
 */
export type FilterType = {
  name?: string;
  values?: FilterValuesType[];
};

export type FilterValuesType = {
  count?: number;
  value?: string;
};

export type WellArchitectedPaginationType = {
  currentPage?: number;
  next?: string;
  perPage?: number;
  previous?: string;
  total?: number;
  totalPage?: number;
};

/**
 * ElasticSearch Types
 */
export type SubscriptionRegistrationType = {
  reference: string;
};

export type CustomerRegistrationType = {
  name?: string;
  reference?: string;
};

export type ResellerRegistrationType = {
  name?: string;
  reference?: string;
};

export type RegistrationType = {
  accountReference?: string;
  customer?: CustomerRegistrationType;
  marketplace?: string;
  reseller?: ResellerRegistrationType;
  subscription?: SubscriptionRegistrationType;
  vendorCode?: string;
};

export type ExtraDataType = {
  name?: string;
  numberValue?: number;
  value?: string;
};

export type StatusType = {
  code: number;
  message: string;
};

export type CheckType = {
  description?: string;
  extraData?: ExtraDataType[];
  flagged?: number;
  group?: string;
  hasResources?: boolean;
  isFailed?: boolean;
  name?: string;
  processed?: number;
  reference?: string;
  score?: number;
  severity?: string;
};

export type StandardType = {
  currentScore?: number;
  checks?: CheckType[];
  failed?: number;
  maxScore?: number;
  name?: string;
  passed?: number;
  reference?: string;
  score?: number;
  status?: StatusType;
  total?: number;
};

export type AccountType = {
  failed?: number;
  name?: string;
  passed?: number;
  reference?: string;
  score?: number;
  standards?: StandardType[];
  total?: number;
};

export type ScoreResultType = {
  account?: AccountType;
  registration?: RegistrationType;
};

enum ReportName {
  SUSTAINABILITY_BEGESV4,
  SUSTAINABILITY_GHG,
}

export type ReportsAggType = {
  name: ReportName;
  statusCode: number;
};

/**
 * Generic Types
 */
export type WellArchitectedPeriodType = {
  from?: string;
  to?: string;
};

/**
 * Severity Aggregation Types
 */
export type SeverityByDateAggType = {
  date: string;
  value: number;
};

export type SeverityAggType = {
  data: SeverityByDateAggType[];
  last: SeverityByDateAggType;
  name: string;
  progression: number;
};

export type SeveritiesAggType = {
  severities: SeverityAggType[];
};

/**
 * Check Aggregation Types
 */
export type CheckByGroupType = {
  groupName: string;
  score: string;
};

export type CheckCountByDateAggType = {
  accounts?: number;
  byGroup?: CheckByGroupType[];
  customers?: number;
  date?: string;
  partners?: number;
  score?: number;
  scoreUnit?: string;
};

export type CheckAggType = {
  data?: CheckCountByDateAggType[];
  last?: CheckCountByDateAggType;
  name?: string;
  progression?: number;
  reference?: string;
  vendorCode?: string;
};

export type ChecksAggType = {
  checks: CheckAggType[];
};

/**
 * Subscription Aggregation Types
 */
export type SubscriptionAggType = {
  reference: string;
  updatedAt: string;
};

export type SubscriptionsAggType = {
  count: number;
  subscriptions: SubscriptionAggType[];
};

/**
 * EndCustomer Aggregation Types
 */
export type EndCustomerByDateAggType = {
  accounts?: number;
  date?: string;
  failed?: number;
  name?: string;
  passed?: number;
  score?: number;
  scoreUnit?: string;
  subscriptionReferences?: number;
  total?: number;
};

export type EndCustomerAggType = {
  data?: EndCustomerByDateAggType[];
  last?: EndCustomerByDateAggType;
  name?: string;
  progression?: number;
  reference?: string;
};

export type UnregisteredOfferIaasSubscriptionType = {
  partnerRef?: string;
  friendlyName?: string;
  vendorSubscriptionId?: string;
};

export type UnregisteredOfferIaasType = {
  sku?: string;
  name?: string;
  subscriptions?: UnregisteredOfferIaasSubscriptionType[];
};

export type UnregisteredOfferSaasType = {
  name?: string;
  subscription?: string;
};

export type UnregisteredOffersType = {
  iaas?: UnregisteredOfferIaasType[];
  saas?: UnregisteredOfferSaasType[];
};

export type UnregisteredEndCustomerAggType = {
  name?: string;
  reference?: string;
  offers?: UnregisteredOffersType;
};

export type EndCustomersAggType = {
  customers?: EndCustomerAggType[];
  unregisteredCustomers?: UnregisteredEndCustomerAggType[];
};

/**
 * Partners Aggregation Types
 */
export type PartnerByDateAggType = {
  date?: string;
  failed?: number;
  name?: string;
  passed?: number;
  score?: number;
  scoreUnit?: string;
  total?: number;
};

export type PartnerAggType = {
  data?: PartnerByDateAggType[];
  last?: PartnerByDateAggType;
  name?: string;
  progression?: number;
  reference?: string;
};

export type PartnersAggType = {
  partners?: PartnerAggType[];
};

/**
 * Monthly Aggregation Types
 */
export type ScoreByMonthSeverityType = {
  name: string;
  value: number;
};

export type ScoreByMonthAggType = {
  date: string;
  score?: number;
  scoreUnit?: string;
  severities?: ScoreByMonthSeverityType[];
};

export type MonthlyTrendAggType = {
  period?: WellArchitectedPeriodType;
  score?: number;
  scores?: ScoreByMonthAggType[];
  scoreUnit?: string;
};

/**
 * Score Aggregation Types
 */
export type ScoreByDateAggType = {
  date?: string;
  failed?: number;
  passed?: number;
  score?: number;
  scoreUnit?: string;
  total?: number;
};

export type ScoresAggType = {
  last?: ScoreByDateAggType;
  progression?: number;
  scores?: ScoreByDateAggType[];
};

/**
 * Account Aggregation Types
 */
export type AccountByDateAggType = {
  date?: string;
  failed?: number;
  name?: string;
  passed?: number;
  score?: number;
  scoreUnit?: string;
  total?: number;
};

export type AccountAggType = {
  data?: AccountByDateAggType[];
  last?: AccountByDateAggType;
  name?: string;
  progression?: number;
  reference?: string;
};

export type AccountsAggType = {
  accounts?: AccountAggType[];
  unregisteredAccounts?: UnregisteredOffersType;
};

/**
 * Standard Aggregation Types
 */
export type StandardByDateAggType = {
  date?: string;
  failed?: number;
  passed?: number;
  score?: number;
  scoreUnit?: string;
  total?: number;
};

export type StandardAggType = {
  data?: StandardByDateAggType[];
  last?: StandardByDateAggType;
  name?: string;
  progression?: number;
  reference?: string;
};

export type StandardsAggType = {
  standards: StandardAggType[];
};

/**
 * Marketplace Aggregation Types
 */
export type MarketplacePartnerAggByDateAggType = {
  date?: string;
  failed?: number;
  passed?: number;
  score?: number;
  scoreUnit?: string;
  total?: number;
};

export type MarketplaceByDateAggType = {
  date?: string;
  score?: number;
  scoreUnit?: string;
};

export type MarketplacePartnerAggType = {
  data?: MarketplacePartnerAggByDateAggType[];
  last?: MarketplacePartnerAggByDateAggType;
  name?: string;
  reference?: string;
  progression?: number;
};

export type MarketplaceAggType = {
  data?: MarketplaceByDateAggType[];
  last?: MarketplaceByDateAggType;
  name?: string;
  partners?: MarketplacePartnerAggType[];
  progression?: number;
};

export type MarketplacesAggType = {
  marketplaces: MarketplaceAggType[];
};

/**
 * Standard with Check Types
 */
export type CheckByDateType = {
  date?: string;
  extraData?: ExtraDataType[];
  flagged?: number;
  group?: string;
  hasResources?: boolean;
  isFailed?: boolean;
  name?: string;
  processed?: number;
  score?: number;
  scoreUnit?: string;
};

export type ChecksByStandardType = {
  data?: CheckByDateType[];
  description?: string;
  last?: CheckByDateType;
  name?: string;
  progression?: number;
  reference?: string;
  severity?: string;
};

export type StandardWithCheckType = {
  checks: ChecksByStandardType[];
  name?: string;
  reference?: string;
};
