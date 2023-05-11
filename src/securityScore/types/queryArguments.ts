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
  ACCOUNT = 'account',
  ACCOUNT_ID = 'account.id',
  ACCOUNT_REFERENCE = 'account.reference',
  ACCOUNT_NAME = 'account.name',
  ACCOUNT_STANDARDS = 'account.standards',
  ACCOUNT_STANDARDS_REFERENCE = 'account.standards.reference',
  ACCOUNT_STANDARDS_NAME = 'account.standards.name',
  ACCOUNT_STANDARDS_TOTAL = 'account.standards.total',
  ACCOUNT_STANDARDS_PASSED = 'account.standards.passed',
  ACCOUNT_STANDARDS_FAILED = 'account.standards.failed',
  ACCOUNT_STANDARDS_SCORE = 'account.standards.score',
  ACCOUNT_STANDARDS_MAX_SCORE = 'account.standards.maxScore',
  ACCOUNT_STANDARDS_CHECKS = 'account.standards.checks',
  ACCOUNT_STANDARDS_CHECKS_ID = 'account.standards.checks.id',
  ACCOUNT_STANDARDS_CHECKS_REFERENCE = 'account.standards.checks.reference',
  ACCOUNT_STANDARDS_CHECKS_NAME = 'account.standards.checks.name',
  ACCOUNT_STANDARDS_CHECKS_DESCRIPTION = 'account.standards.checks.description',
  ACCOUNT_STANDARDS_CHECKS_SEVERITY = 'account.standards.checks.severity',
  ACCOUNT_STANDARDS_CHECKS_PROCESSED = 'account.standards.checks.processed',
  ACCOUNT_STANDARDS_CHECKS_FLAGGED = 'account.standards.checks.flagged',
  ACCOUNT_STANDARDS_CHECKS_IS_FAILED = 'account.standards.checks.isFailed',
  ACCOUNT_STANDARDS_CHECKS_SCORE = 'account.standards.checks.score',
  ACCOUNT_FAILED = 'account.failed',
  ACCOUNT_PASSED = 'account.passed',
  ACCOUNT_SCORE = 'account.score',
  ACCOUNT_TOTAL = 'account.total',
  REGISTRATION = 'registration',
  REGISTRATION_ACCOUNT_REFERENCE = 'registration.accountReference',
  REGISTRATION_SUBSCRIPTION_REFERENCE = 'registration.subscription.reference',
  REGISTRATION_CUSTOMER_ID = 'registration.customer.id',
  REGISTRATION_CUSTOMER_NAME = 'registration.customer.name',
  REGISTRATION_CUSTOMER_REFERENCE = 'registration.customer.reference',
  REGISTRATION_RESELLER_ID = 'registration.reseller.id',
  REGISTRATION_RESELLER_NAME = 'registration.reseller.name',
  REGISTRATION_RESELLER_REFERENCE = 'registration.reseller.reference',
  REGISTRATION_VENDOR_CODE = 'registration.vendorCode',
  REGISTRATION_MARKETPLACE = 'registration.marketplace',
  UPDATED_AT = 'updatedAt',
  UPDATED_BY = 'updatedBy',
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
