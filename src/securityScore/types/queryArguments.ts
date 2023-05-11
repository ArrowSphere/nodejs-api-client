/**
 * For field __args
 */
export enum OperatorArgument {
  OR = 'OR',
  AND = 'AND',
  BETWEEN = 'BETWEEN',
}

export enum PeriodInputFields {
  FROM = 'from',
  TO = 'to',
}

export enum PaginateFields {
  PAGE = 'page',
  PER_PAGE = 'perPage',
}

export enum SearchBodyFields {
  FILTERS = 'filters',
  EXCLUSION_FILTERS = 'exclusionFilters',
  SORT = 'sort',
  SUBSCRIPTION_REFERENCE = 'subscriptionReference',
  MARKETPLACE = 'marketplace',
  MONTHLY_TREND_PERIOD = 'monthlyTrendPeriod',
  PERIOD = 'period',
}

export enum SearchFilterFields {
  NAMES = 'names',
  VALUES = 'values',
  OPERATOR = 'operator',
  FILTERS = 'filters',
}

export enum SearchFilterValues {
  ACCOUNT_REFERENCE = 'account.reference',
  REGISTRATION_CUSTOMER_REFERENCE = 'registration.customer.reference',
  REGISTRATION_RESELLER_REFERENCE = 'registration.reseller.reference',
}

export enum SortFields {
  NAME = 'name',
  ORDER = 'order',
}

export enum SecurityScoreQueries {
  GET_PARTNER_DATA = 'getPartnerData',
  GET_CUSTOMER_DATA = 'getCustomerData',
  GET_CUSTOMER_ACCOUNT_DATA = 'getCustomerAccountData',
}

export type PaginateArgument = {
  [PaginateFields.PAGE]?: number;
  [PaginateFields.PER_PAGE]?: number;
};

export type SearchBodyArgument = {
  [SearchBodyFields.FILTERS]?: [SearchFilterArgument];
  [SearchBodyFields.EXCLUSION_FILTERS]?: [SearchFilterArgument];
  [SearchBodyFields.SORT]?: [SortArgument];
  [SearchBodyFields.SUBSCRIPTION_REFERENCE]?: [[string]];
  [SearchBodyFields.MARKETPLACE]?: [[string]];
  [SearchBodyFields.MONTHLY_TREND_PERIOD]?: PeriodInputArgument;
  [SearchBodyFields.PERIOD]?: PeriodInputArgument;
};

export type PeriodInputArgument = {
  [PeriodInputFields.FROM]: string;
  [PeriodInputFields.TO]: string;
};

export type SearchFilterArgument = {
  [SearchFilterFields.NAMES]?: [string];
  [SearchFilterFields.VALUES]?: [[string]];
  [SearchFilterFields.OPERATOR]?: OperatorArgument;
  [SearchFilterFields.FILTERS]?: [SearchFilterArgument];
};

export type SortArgument = {
  [SortFields.NAME]?: string;
  [SortFields.ORDER]?: string;
};
