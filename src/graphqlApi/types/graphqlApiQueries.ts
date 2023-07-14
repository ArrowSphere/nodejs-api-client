import {
  ArrowCompanyType,
  EndCustomerType,
  PartnerType,
} from './entities/company';
import { ContinentType, CountryType } from './entities/country';
import { PartnertagType } from './entities/partnertag';
import { WorkgroupType } from './entities/workgroup';
import {
  ArrowCompanySchema,
  ContinentSchema,
  CountrySchema,
  EndCustomerSchema,
  ErrorsSchema,
  PaginationSchema,
  PartnerSchema,
  PartnertagSchema,
  WorkgroupSchema,
} from './graphqlApiSchemas';

/**
 * For field __args
 */
export enum ComparisonOperator {
  BETWEEN = 'BETWEEN',
  CONTAINS = 'CONTAINS',
  ENDS_WITH = 'ENDS_WITH',
  EQUALS = 'EQUALS',
  GREAT_THAN = 'GREAT_THAN',
  GREAT_THAN_OR_EQUALS = 'GREAT_THAN_OR_EQUALS',
  IS_NULL = 'IS_NULL',
  LESS_THAN = 'LESS_THAN',
  LESS_THAN_OR_EQUALS = 'LESS_THAN_OR_EQUALS',
  STARTS_WITH = 'STARTS_WITH',
  DIFFERENT = 'DIFFERENT',
}

export enum LogicalOperator {
  AND = 'AND',
  OR = 'OR',
}

export enum QueryModifier {
  ALL = 'ALL',
  DISTINCT = 'DISTINCT',
  DISTINCTROW = 'DISTINCTROW',
  HIGH_PRIORITY = 'HIGH_PRIORITY',
  SQL_BIG_RESULT = 'SQL_BIG_RESULT',
  SQL_BUFFER_RESULT = 'SQL_BUFFER_RESULT',
  SQL_CALC_FOUND_ROWS = 'SQL_CALC_FOUND_ROWS',
  SQL_NO_CACHE = 'SQL_NO_CACHE',
  SQL_SMALL_RESULT = 'SQL_SMALL_RESULT',
  STRAIGHT_JOIN = 'STRAIGHT_JOIN',
}

export enum Direction {
  ASC = 'ASC',
  DESC = 'DESC',
  asc = 'asc',
  desc = 'desc',
}

export enum InputPaginationFields {
  PAGE = 'page',
  PER_PAGE = 'perPage',
}

export type InputPaginationType = {
  [InputPaginationFields.PAGE]?: number;
  [InputPaginationFields.PER_PAGE]?: number;
};

export enum InputSortFilterFields {
  DIRECTION = 'direction',
  NAME = 'name',
}

export type InputSortFilterType = {
  [InputSortFilterFields.DIRECTION]?: Direction;
  [InputSortFilterFields.NAME]?: string;
};

export enum InputSearchFilterFields {
  GROUPS = 'groups',
  LOGICAL_OPERATOR = 'logicalOperator',
}

export type InputSearchFilterType = {
  [InputSearchFilterFields.GROUPS]?: InputFiltersType[];
  [InputSearchFilterFields.LOGICAL_OPERATOR]?: LogicalOperator;
};

export enum InputFiltersFields {
  ITEMS = 'items',
  LOGICAL_OPERATOR = 'logicalOperator',
}

export type InputFiltersType = {
  [InputFiltersFields.ITEMS]?: InputFilterValueType[];
  [InputFiltersFields.LOGICAL_OPERATOR]?: LogicalOperator;
};

export enum InputFilterValueFields {
  NAME = 'name',
  OPERATOR = 'operator',
  VALUE = 'value',
}

export type InputFilterValueType = {
  [InputFilterValueFields.NAME]?: string;
  [InputFilterValueFields.OPERATOR]?: ComparisonOperator;
  [InputFilterValueFields.VALUE]?: string[];
};

export enum SelectableFields {
  DATA = 'data',
  ERRORS = 'errors',
  PAGINATION = 'pagination',
}

export enum SelectDataFields {
  ARROW_COMPANY = 'arrowCompany',
  CONTINENT = 'continent',
  COUNTRY = 'country',
  END_CUSTOMER = 'endCustomer',
  PARTNER = 'partner',
  PARTNERTAG = 'partnertag',
  WORKGROUP = 'workgroup',
}

export type SelectAllResultType = {
  [Queries.SELECT_ALL]: {
    [SelectableFields.DATA]?: SelectAllResponseDataType;
    [SelectableFields.ERRORS]?: ErrorsType;
    [SelectableFields.PAGINATION]?: PaginationType;
  };
};

export type SelectAllResponseDataType = {
  [SelectDataFields.ARROW_COMPANY]?: ArrowCompanyType[];
  [SelectDataFields.CONTINENT]?: ContinentType[];
  [SelectDataFields.COUNTRY]?: CountryType[];
  [SelectDataFields.END_CUSTOMER]?: EndCustomerType[];
  [SelectDataFields.PARTNER]?: PartnerType[];
  [SelectDataFields.PARTNERTAG]?: PartnertagType[];
  [SelectDataFields.WORKGROUP]?: WorkgroupType[];
};

export enum ErrorsFields {
  CODE = 'code',
  MESSAGE = 'message',
}

export type ErrorsType = {
  [ErrorsFields.CODE]?: string;
  [ErrorsFields.MESSAGE]?: string;
};

export enum PaginationFields {
  CURRENT_PAGE = 'currentPage',
  NEXT = 'next',
  PER_PAGE = 'perPage',
  PREVIOUS = 'previous',
  TOTAL = 'total',
  TOTAL_PAGE = 'totalPage',
  TOTAL_PAGES = 'totalPages',
}

export type PaginationType = {
  [PaginationFields.CURRENT_PAGE]?: number;
  [PaginationFields.NEXT]?: number;
  [PaginationFields.PER_PAGE]?: number;
  [PaginationFields.PREVIOUS]?: number;
  [PaginationFields.TOTAL]?: number;
  [PaginationFields.TOTAL_PAGE]?: number;
  [PaginationFields.TOTAL_PAGES]?: number;
};

export type SelectOneResultType = {
  [Queries.SELECT_ONE]: {
    [SelectableFields.DATA]?: SelectOneResponseDataType;
    [SelectableFields.ERRORS]?: ErrorsType;
  };
};

export type SelectOneResponseDataType = {
  [SelectDataFields.ARROW_COMPANY]?: ArrowCompanyType;
  [SelectDataFields.CONTINENT]?: ContinentType;
  [SelectDataFields.COUNTRY]?: CountryType;
  [SelectDataFields.END_CUSTOMER]?: EndCustomerType;
  [SelectDataFields.PARTNER]?: PartnerType;
  [SelectDataFields.PARTNERTAG]?: PartnertagType;
  [SelectDataFields.WORKGROUP]?: WorkgroupType;
};

export enum QueryVariablesFields {
  AGGREGATOR_FILTER = 'aggregatorFilter',
  EXCLUSION_FILTERS = 'exclusionFilters',
  FILTERS = 'filters',
  PAGINATION = 'pagination',
  QUERY_MODIFIER = 'queryModifier',
  SORT = 'sort',
}

export type QueryVariablesType = {
  [QueryVariablesFields.AGGREGATOR_FILTER]?: string[];
  [QueryVariablesFields.EXCLUSION_FILTERS]?: InputSearchFilterType;
  [QueryVariablesFields.FILTERS]?: InputSearchFilterType;
  [QueryVariablesFields.PAGINATION]?: InputPaginationType;
  [QueryVariablesFields.QUERY_MODIFIER]?: QueryModifier;
  [QueryVariablesFields.SORT]?: InputSortFilterType[];
};

export enum Queries {
  SELECT_ALL = 'selectAll',
  SELECT_ONE = 'selectOne',
}

export type SelectOneQueryType = {
  [Queries.SELECT_ONE]: {
    __args?: Omit<QueryVariablesType, QueryVariablesFields.PAGINATION>;
    [SelectableFields.DATA]: {
      [SelectDataFields.ARROW_COMPANY]?: ArrowCompanySchema;
      [SelectDataFields.CONTINENT]?: ContinentSchema;
      [SelectDataFields.COUNTRY]?: CountrySchema;
      [SelectDataFields.END_CUSTOMER]?: EndCustomerSchema;
      [SelectDataFields.PARTNER]?: PartnerSchema;
      [SelectDataFields.PARTNERTAG]?: PartnertagSchema;
      [SelectDataFields.WORKGROUP]?: WorkgroupSchema;
    };
    [SelectableFields.ERRORS]?: ErrorsSchema;
  };
};

export type SelectAllQueryType = {
  [Queries.SELECT_ALL]: {
    __args?: QueryVariablesType;
    [SelectableFields.DATA]: {
      [SelectDataFields.ARROW_COMPANY]?: ArrowCompanySchema;
      [SelectDataFields.CONTINENT]?: ContinentSchema;
      [SelectDataFields.COUNTRY]?: CountrySchema;
      [SelectDataFields.END_CUSTOMER]?: EndCustomerSchema;
      [SelectDataFields.PARTNER]?: PartnerSchema;
      [SelectDataFields.PARTNERTAG]?: PartnertagSchema;
      [SelectDataFields.WORKGROUP]?: WorkgroupSchema;
    };
    [SelectableFields.ERRORS]?: ErrorsSchema;
    [SelectableFields.PAGINATION]?: PaginationSchema;
  };
};
