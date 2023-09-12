/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type FilterType = {
  name?: string;
  values?: FilterValuesType[];
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type FilterValuesType = {
  count?: number;
  value?: string;
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type PaginationsType = {
  currentPage?: number;
  next?: string;
  perPage?: number;
  previous?: string;
  total?: number;
  totalPage?: number;
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type SubscriptionRegistrationType = {
  reference: string;
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type CustomerRegistrationType = {
  name?: string;
  reference?: string;
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type ResellerRegistrationType = {
  name?: string;
  reference?: string;
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type RegistrationType = {
  accountReference?: string;
  customer?: CustomerRegistrationType;
  marketplace?: string;
  reseller?: ResellerRegistrationType;
  subscription?: SubscriptionRegistrationType;
  vendorCode?: string;
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type CheckType = {
  description?: string;
  flagged?: number;
  group?: string;
  isFailed?: boolean;
  name?: string;
  processed?: number;
  reference?: string;
  score?: number;
  severity?: string;
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type StandardType = {
  currentScore?: number;
  checks?: CheckType[];
  failed?: number;
  maxScore?: number;
  name?: string;
  passed?: number;
  reference?: string;
  score?: number;
  total?: number;
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type AccountType = {
  failed?: number;
  name?: string;
  passed?: number;
  reference?: string;
  score?: number;
  standards?: StandardType[];
  total?: number;
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type ScoreResultType = {
  account?: AccountType;
  registration?: RegistrationType;
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type NameCountByDateAggType = {
  count?: number;
  date?: string;
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type SeverityAggType = {
  data?: NameCountByDateAggType[];
  last?: NameCountByDateAggType;
  name?: string;
  progression?: number;
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type SeveritiesAggType = {
  severities?: SeverityAggType[];
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type CheckCountByDateAggType = {
  count?: number;
  accounts?: number;
  customers?: number;
  partners?: number;
  date?: string;
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type CheckAggType = {
  data?: CheckCountByDateAggType[];
  last?: CheckCountByDateAggType;
  name?: string;
  progression?: number;
  reference?: string;
  vendorCode?: string;
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type ChecksAggType = {
  checks: CheckAggType[];
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type EndCustomerByDateAggType = {
  accounts?: number;
  avgCurrentScore?: number;
  date?: string;
  failed?: number;
  name?: string;
  passed?: number;
  total?: number;
  subscriptionReferences?: number;
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type EndCustomerAggType = {
  data?: EndCustomerByDateAggType[];
  last?: EndCustomerByDateAggType;
  name?: string;
  progression?: number;
  reference?: string;
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type UnregisteredOfferIaasSubscriptionType = {
  partnerRef?: string;
  friendlyName?: string;
  vendorSubscriptionId?: string;
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type UnregisteredOfferIaasType = {
  sku?: string;
  name?: string;
  subscriptions?: UnregisteredOfferIaasSubscriptionType[];
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type UnregisteredOfferSaasType = {
  name?: string;
  subscription?: string;
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type UnregisteredOffersType = {
  iaas?: UnregisteredOfferIaasType[];
  saas?: UnregisteredOfferSaasType[];
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type UnregisteredEndCustomerAggType = {
  name?: string;
  reference?: string;
  offers?: UnregisteredOffersType;
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type EndCustomersAggType = {
  customers?: EndCustomerAggType[];
  unregisteredCustomers?: UnregisteredEndCustomerAggType[];
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type PartnerByDateAggType = {
  avgCurrentScore?: number;
  date?: string;
  failed?: number;
  name?: string;
  passed?: number;
  total?: number;
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type PartnerAggType = {
  data?: PartnerByDateAggType[];
  last?: PartnerByDateAggType;
  name?: string;
  progression?: number;
  reference?: string;
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type PartnersAggType = {
  partners?: PartnerAggType[];
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type ScoreByMonthAggType = {
  avgCurrentScore?: number;
  date?: string;
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type MonthlyTrendAggType = {
  avgCurrentScore?: number;
  period?: PeriodsType;
  scores?: ScoreByMonthAggType[];
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type ScoreByDateAggType = {
  avgCurrentScore?: number;
  date?: string;
  failed?: number;
  passed?: number;
  total?: number;
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type ScoresAggType = {
  last?: ScoreByDateAggType;
  scores?: ScoreByDateAggType[];
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type AccountByDateAggType = {
  avgCurrentScore?: number;
  date?: string;
  failed?: number;
  name?: string;
  passed?: number;
  total?: number;
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type AccountAggType = {
  data?: AccountByDateAggType[];
  last?: AccountByDateAggType;
  name?: string;
  progression?: number;
  reference?: string;
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type AccountsAggType = {
  accounts?: AccountAggType[];
  unregisteredAccounts?: UnregisteredOffersType;
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type StandardByDateAggType = {
  date?: string;
  score?: number;
  failed?: number;
  passed?: number;
  total?: number;
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type StandardAggType = {
  data?: StandardByDateAggType[];
  last?: StandardByDateAggType;
  name?: string;
  progression?: number;
  reference?: string;
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type StandardsAggType = {
  standards: StandardAggType[];
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type MarketplacePartnerAggByDateAggType = {
  avgCurrentScore?: number;
  date?: string;
  failed?: number;
  passed?: number;
  total?: number;
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type MarketplaceByDateAggType = {
  avgCurrentScore?: number;
  date?: string;
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type MarketplacePartnerAggType = {
  data?: MarketplacePartnerAggByDateAggType[];
  last?: MarketplacePartnerAggByDateAggType;
  name?: string;
  reference?: string;
  progression?: number;
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type MarketplaceAggType = {
  data?: MarketplaceByDateAggType[];
  last?: MarketplaceByDateAggType;
  name?: string;
  partners?: MarketplacePartnerAggType[];
  progression?: number;
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type MarketplacesAggType = {
  marketplaces: MarketplaceAggType[];
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type CheckByDateType = {
  date?: string;
  flagged?: number;
  isFailed?: boolean;
  name?: string;
  processed?: number;
  score?: number;
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type ChecksByStandardType = {
  data?: CheckByDateType[];
  description?: string;
  last?: CheckByDateType;
  name?: string;
  progression?: number;
  reference?: string;
  severity?: string;
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type StandardWithCheckType = {
  checks?: ChecksByStandardType[];
  name?: string;
  reference?: string;
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type PeriodsType = {
  from?: string;
  to?: string;
};
