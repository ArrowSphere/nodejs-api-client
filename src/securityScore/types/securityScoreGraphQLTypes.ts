export type FilterType = {
  name?: string;
  values?: FilterValuesType[];
};

export type FilterValuesType = {
  count?: number;
  value?: string;
};

export type PaginationsType = {
  currentPage?: number;
  next?: string;
  perPage?: number;
  previous?: string;
  total?: number;
  totalPage?: number;
};

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

export type CheckType = {
  description?: string;
  flagged?: number;
  isFailed?: boolean;
  name?: string;
  processed?: number;
  reference?: string;
  score?: number;
  severity?: string;
};

export type StandardType = {
  checks?: CheckType[];
  failed?: number;
  name?: string;
  passed?: number;
  reference?: string;
  score?: number;
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

export type NameCountByDateAggType = {
  count?: number;
  date?: string;
};

export type SeverityAggType = {
  data?: NameCountByDateAggType[];
  last?: NameCountByDateAggType;
  name?: string;
  progression?: number;
};

export type SeveritiesAggType = {
  severities: SeverityAggType[];
};

export type CheckAggType = {
  data?: NameCountByDateAggType[];
  last?: NameCountByDateAggType;
  name?: string;
  progression?: number;
  reference?: string;
  vendorCode?: string;
};

export type ChecksAggType = {
  checks: CheckAggType[];
};

export type EndCustomerByDateAggType = {
  accounts?: number;
  avgCurrentScore?: number;
  date?: string;
  failed?: number;
  passed?: number;
  total?: number;
  subscriptionReferences?: number;
};

export type EndCustomerAggType = {
  data?: EndCustomerByDateAggType[];
  last?: EndCustomerByDateAggType;
  name?: string;
  progression?: number;
  reference?: string;
};

export type EndCustomersAggType = {
  customers: EndCustomerAggType[];
};

export type ScoreByMonthAggType = {
  avgCurrentScore?: number;
  date?: string;
};

export type MonthlyTrendAggType = {
  avgCurrentScore: number;
  period: PeriodsType;
  scores: ScoreByMonthAggType[];
};

export type ScoreByDateAggType = {
  avgCurrentScore?: number;
  date?: string;
  failed?: number;
  passed?: number;
  total?: number;
};

export type ScoresAggType = {
  last?: ScoreByDateAggType;
  scores?: ScoreByDateAggType[];
};

export type AccountByDateAggType = {
  avgCurrentScore: number;
  date: string;
  failed: number;
  passed: number;
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
  accounts: AccountAggType[];
};

export type StandardByDateAggType = {
  date?: string;
  score?: number;
  failed?: number;
  passed?: number;
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

export type MarketplaceSubscriptionReferenceAggType = {
  accounts?: number;
  avgCurrentScore?: number;
  name?: string;
};

export type MarketplaceSubscriptionReferencesAggType = {
  subscriptionReferences?: MarketplaceSubscriptionReferenceAggType[];
};

export type MarketplacePartnerAggByDateAggType = {
  accounts?: number;
  avgCurrentScore?: number;
  date?: string;
  subscriptionReferencesAgg?: MarketplaceSubscriptionReferencesAggType;
};

export type MarketplaceByDateAggType = {
  avgCurrentScore?: number;
  date?: string;
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

export type CheckByDateType = {
  date?: string;
  flagged?: number;
  isFailed?: boolean;
  processed?: number;
  score?: number;
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
  checks?: ChecksByStandardType[];
  name?: string;
  reference?: string;
};

export type PeriodsType = {
  from?: string;
  to?: string;
};
