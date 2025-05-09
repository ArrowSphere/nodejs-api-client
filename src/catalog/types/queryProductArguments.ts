/**
 * For field __args
 */
export type QueryProductArguments = {
  paginate?: PaginateArgument;
  searchBody: SearchBodyArgument;
};

/**
 * For field __args
 */
export type QueryPriceBandArguments = {
  paginate?: PaginateArgument;
  searchBody: SearchBodyPriceBandsArgument;
};

/**
 * For field __args
 */
export type QueryExchangeRatesArguments = {
  paginate?: PaginateArgument;
  searchBody?: SearchBodyArgument;
};

/**
 * For field __args
 */
export type QueryExchangeRateValueArguments = {
  from: string;
  paginate?: PaginateArgument;
  searchBody?: SearchBodyArgument;
  to: string;
};

export type PaginateArgument = {
  page: number;
  perPage: number;
};

export type SearchBodyPriceBandsArgument = {
  keywords?: string;
  filters?: SearchProductFilterArgument[];
  exclusionFilters?: SearchProductFilterArgument[];
  sort?: SortArgument;
  highlight?: boolean;
  aggregatorFilter?: string[];
  marketplace?: string;
  resellerRef?: string;
  endCustomerRef?: string;
  restricted?: boolean;
  getFamilies?: boolean;
  quantity?: number;
};

export type SearchBodyArgument = {
  aggregatorFilter?: string[];
  endCustomerRef?: string;
  exclusionFilters?: SearchProductFilterArgument[];
  filters?: SearchProductFilterArgument[];
  getFamilies?: boolean;
  highlight?: boolean;
  keywords?: string;
  marketplace?: string;
  quantity?: number;
  resellerRef?: string;
  restricted?: boolean;
  sort?: SortArgument | SortArgument[];
  topOffers?: boolean;
};

export type SearchProductFilterArgument = {
  name: string;
  value?: string | string[] | string[][] | null;
  operator?: OperatorArgument;
  filters?: SearchProductFilterArgument[];
};

export enum OperatorArgument {
  OR = 'OR',
  AND = 'AND',
  BETWEEN = 'BETWEEN',
}

export type SortArgument = {
  name?: string;
  order?: string;
};
