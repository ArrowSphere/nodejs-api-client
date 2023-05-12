export type FilterType = {
  name?: string;
  values?: [FilterValuesType];
};

export type FilterValuesType = {
  value?: string;
  count?: number;
};

export type SubscriptionRegistrationType = {
  reference: string;
};

export type CustomerRegistrationType = {
  reference?: string;
  name?: string;
};

export type ResellerRegistrationType = {
  reference?: string;
  name?: string;
};

export type RegistrationType = {
  accountReference?: string;
  subscription?: SubscriptionRegistrationType;
  customer?: CustomerRegistrationType;
  reseller?: ResellerRegistrationType;
  vendorCode?: string;
  marketplace?: string;
};

export type CheckType = {
  name?: string;
  description?: string;
  processed?: number;
  isFailed?: boolean;
  flagged?: number;
  reference?: string;
  score?: number;
  severity?: string;
};

export type StandardType = {
  name?: string;
  checks?: [CheckType];
  failed?: number;
  passed?: number;
  score?: number;
  total?: number;
};

export type AccountType = {
  reference?: string;
  name?: string;
  standards?: [StandardType];
  failed?: number;
  passed?: number;
  score?: number;
  total?: number;
};

export type ScoreResultType = {
  account?: AccountType;
  registration?: RegistrationType;
};

export type NameCountByDateType = {
  count?: number;
  date?: string;
};

export type NameAggType = {
  name?: string;
  data?: [NameCountByDateType];
  progression?: number;
};

export type IssueDataAggType = {
  name?: string;
  reference?: string;
  vendorCode?: string;
  data?: [NameCountByDateType];
  progression?: number;
};

export type SeveritiesAggType = {
  severities: [NameAggType];
};

export type IssuesAggType = {
  issues: [IssueDataAggType];
};

export type CompareEndCustomerAggType = {
  date?: string;
  accounts?: number;
  avgCurrentScore?: number;
  failed?: number;
  passed?: number;
  subscriptionReferences?: number;
};

export type EndCustomerAggType = {
  reference?: string;
  name?: string;
  data?: [CompareEndCustomerAggType];
  progression?: number;
};

export type EndCustomersAggType = {
  customers: [EndCustomerAggType];
};

export type ScoreByMonthType = {
  date?: string;
  avgCurrentScore?: number;
};

export type PeriodsType = {
  from?: string;
  to?: string;
};

export type MonthlyTrendAggType = {
  period?: PeriodsType;
  avgCurrentScore?: number;
  scores?: [ScoreByMonthType];
};

export type GetPartnerDataType = {
  filters?: [FilterType];
  results?: [ScoreResultType];
  avgCurrentScore?: number;
  monthlyTrendAgg?: MonthlyTrendAggType;
  endCustomersAgg?: EndCustomersAggType;
  issueAgg?: IssuesAggType;
  severityAgg?: SeveritiesAggType;
  period?: PeriodsType;
};

export type CompareAccountAggType = {
  date?: string;
  avgCurrentScore?: number;
  failed?: number;
  passed?: number;
};

export type AccountAggType = {
  accountRef?: string;
  data?: [CompareAccountAggType];
  progression?: number;
};

export type AccountsAggType = {
  accounts: [AccountAggType];
};

export type GetCustomerDataType = {
  accountsAgg?: AccountsAggType;
  avgCurrentScore?: number;
  filters?: [FilterType];
  monthlyTrendAgg?: MonthlyTrendAggType;
  period?: PeriodsType;
  results?: [ScoreResultType];
  issueAgg?: IssuesAggType;
  severityAgg?: SeveritiesAggType;
  standards?: [StandardType];
  subscriptionReferences?: number;
};

export type CompareStandardAggType = {
  date?: string;
  score?: number;
  failed?: number;
  passed?: number;
};

export type StandardAggType = {
  name?: string;
  reference?: string;
  data?: [CompareStandardAggType];
  progression?: number;
};

export type StandardsAggType = {
  standards: [StandardAggType];
};

export type GetCustomerAccountDataType = {
  avgCurrentScore?: number;
  checks?: [CheckType];
  filters?: [FilterType];
  issueAgg?: IssuesAggType;
  monthlyTrendAgg?: MonthlyTrendAggType;
  period?: PeriodsType;
  result?: ScoreResultType;
  severityAgg?: SeveritiesAggType;
  standardsAgg?: StandardsAggType;
  standards?: [StandardType];
};
