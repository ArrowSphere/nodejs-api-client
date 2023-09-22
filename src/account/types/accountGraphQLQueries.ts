import { Merge, Schema } from 'type-fest';
import { AccountAttributeType } from './accountGraphQLTypes';
import { AccountAttributeSchema } from './accountGraphQLSchemas';

export type GetAccountQuery = {
  getUsers?: GetAccountQueryRequest;
};

export type GetAccountQueryRequest = Merge<
  { __args: QueryAccountArgument },
  AccountAttributeSchema
>;

export type QueryAccountArgument = {
  paginate?: PaginateAccountArgument;
  searchBody?: SearchBodyAccountArgument;
};

export type PaginateAccountArgument = {
  page: number;
  perPage: number;
};

export type SearchBodyAccountArgument = {
  keywords?: string;
  keywordsByField?: KeywordsByFieldsAccountArgument[];
  filters?: FiltersAccountArgument[];
  exclusionFilters?: FiltersAccountArgument[];
  sort?: SortAccountArgument[];
  highlight?: boolean;
  aggregatorFilter?: string[];
  scopes?: string | string[] | string[][];
  rights?: string[];
};

export type SortAccountArgument = {
  name?: string;
  order?: string;
};

export type KeywordsByFieldsAccountArgument = {
  name?: string;
  values?: string[];
  operator?: string;
  type?: string;
};

export type FiltersAccountArgument = {
  name?: string;
  value?: string | string[];
};

export type AccountSchema = Schema<AccountAttributeType, boolean>;
