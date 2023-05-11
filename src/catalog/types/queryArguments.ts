/**
 * For field __args
 */
export type QueryArguments = {
  paginate?: PaginateArgument;
  searchBody: SearchBodyArgument;
};

export type PaginateArgument = {
  page: number;
  perPage: number;
};

export type SearchBodyArgument = {
  aggregatorFilter?: string[];
  endCustomerRef?: string;
  exclusionFilters?: SearchFilterArgument[];
  filters?: SearchFilterArgument[];
  getFamilies?: boolean;
  highlight?: boolean;
  keywords?: string;
  marketplace?: string;
  quantity?: number;
  resellerRef?: string;
  restricted?: boolean;
  sort?: SortArgument;
  topOffers?: boolean;
};

export type SearchFilterArgument = {
  name: string;
  value: string | string[];
  operator?: OperatorArgument;
  filters?: SearchFilterArgument[];
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
