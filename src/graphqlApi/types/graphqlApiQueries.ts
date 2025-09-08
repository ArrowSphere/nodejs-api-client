import {
  ArrowCompanyType,
  EndCustomerType,
  PartnerType,
} from './entities/company';
import { ContactsType } from './entities/contact';
import { GraphqlApiStaffType } from './entities/contributor';
import { ContinentType, CountryType } from './entities/country';
import { LicenseBudgetType } from './entities/licenseBudget';
import {
  GraphqlApiOrderHistoryType,
  GraphqlApiOrderListType,
  OrdersType,
} from './entities/order';
import { OrganizationUnitsType } from './entities/organizationUnit';
import { PartnertagType } from './entities/partnertag';
import {
  GraphqlApiProgramType,
  ProgramLevelOptionGroupType,
  ProgramLevelType,
  SubscribedProgramType,
} from './entities/program';
import { QuoteType } from './entities/quote';
import {
  GraphqlApiReportStatusType,
  GraphqlApiReportType,
} from './entities/report';
import { SpecialPriceRateType } from './entities/specialPriceRate';
import { SubscriptionType } from './entities/subscription';
import { UserHistoryType, UserType } from './entities/user';
import { WorkgroupType } from './entities/workgroup';
import { GraphqlApiSupportLevel } from './entities/supportLevel';
import {
  ContactsSchema,
  ErrorsSchema,
  PageSchema,
  SelectAllResponseDataSchema,
  SelectOneResponseDataSchema,
  SpecialPriceRateSchema,
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
  IN = 'IN',
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

export enum InputPaginationField {
  PAGE = 'page',
  PER_PAGE = 'perPage',
}

export enum ValueType {
  FIELD = 'FIELD',
}

export type InputPaginationType = {
  [InputPaginationField.PAGE]?: number;
  [InputPaginationField.PER_PAGE]?: number;
};

export enum InputSortFilterField {
  DIRECTION = 'direction',
  NAME = 'name',
}

export type InputSortFilterType = {
  [InputSortFilterField.DIRECTION]?: Direction;
  [InputSortFilterField.NAME]?: string;
};

export enum InputSearchFilterField {
  GROUPS = 'groups',
  LOGICAL_OPERATOR = 'logicalOperator',
}

export type InputSearchFilterType = {
  [InputSearchFilterField.GROUPS]?: InputFiltersType[];
  [InputSearchFilterField.LOGICAL_OPERATOR]?: LogicalOperator;
};

export enum InputFiltersField {
  ITEMS = 'items',
  LOGICAL_OPERATOR = 'logicalOperator',
}

export type InputFiltersType = {
  [InputFiltersField.ITEMS]?: InputFilterValueType[];
  [InputFiltersField.LOGICAL_OPERATOR]?: LogicalOperator;
};

export enum InputFilterValueField {
  NAME = 'name',
  OPERATOR = 'operator',
  VALUE = 'value',
  EXCLUSION = 'exclusion',
  HAVING = 'having',
  VALUE_TYPE = 'valueType',
  IFNULL_VALUE = 'ifNullValue',
}

export type InputFilterValueType = {
  [InputFilterValueField.NAME]?: string;
  [InputFilterValueField.OPERATOR]?: ComparisonOperator;
  [InputFilterValueField.VALUE]?: string[];
  [InputFilterValueField.EXCLUSION]?: boolean;
  [InputFilterValueField.HAVING]?: boolean;
  [InputFilterValueField.VALUE_TYPE]?: ValueType;
  [InputFilterValueField.IFNULL_VALUE]?: string;
};

export enum InputQueryOptionsField {
  SKIP_PARTITION = 'skipPartition',
}

export type InputQueryOptionsType = {
  [InputQueryOptionsField.SKIP_PARTITION]?: boolean;
};

export enum SelectableField {
  DATA = 'data',
  ERRORS = 'errors',
  PAGINATION = 'pagination',
  EXCEL_FIELDS = 'excelFields',
  EXPORT_TITLE = 'exportTitle',
}

export enum SelectDataField {
  ARROW_COMPANY = 'arrowCompany',
  CONTACT = 'contact',
  CONTINENT = 'continent',
  COUNTRY = 'country',
  END_CUSTOMER = 'endCustomer',
  LICENSE_BUDGET = 'licenseBudget',
  ORGANIZATION_UNIT = 'organizationUnit',
  ORDER = 'order',
  ORDER_HISTORY = 'orderHistory',
  ORDER_LIST = 'orderList',
  PARTNER = 'partner',
  PARTNERTAG = 'partnertag',
  PROGRAM = 'program',
  PROGRAM_LEVEL = 'programLevel',
  PROGRAM_LEVEL_OPTION_GROUP = 'programLevelOptionGroup',
  QUOTE = 'quote',
  REPORT = 'report',
  REPORT_STATUS = 'reportStatus',
  SPECIAL_PRICE_RATE = 'specialPriceRate',
  STAFF = 'staff',
  SUBSCRIBED_PROGRAM = 'subscribedProgram',
  SUBSCRIPTION = 'subscription',
  USER = 'user',
  USER_HISTORY = 'userHistory',
  WORKGROUP = 'workgroup',
  SUPPORT_LEVEL = 'supportLevel',
}

export type SelectAllResultType = {
  [Queries.SELECT_ALL]: {
    [SelectableField.DATA]?: SelectAllResponseDataType;
    [SelectableField.ERRORS]?: ErrorsType;
    [SelectableField.PAGINATION]?: PageType;
  };
};

export type ExportResultType = {
  [Queries.EXPORT]: {
    [SelectableField.DATA]?: null;
    [SelectableField.ERRORS]?: ErrorsType;
  };
};

export type SelectAllResponseDataType = {
  [SelectDataField.ARROW_COMPANY]?: ArrowCompanyType[];
  [SelectDataField.CONTACT]?: ContactsType[];
  [SelectDataField.CONTINENT]?: ContinentType[];
  [SelectDataField.COUNTRY]?: CountryType[];
  [SelectDataField.END_CUSTOMER]?: EndCustomerType[];
  [SelectDataField.LICENSE_BUDGET]?: LicenseBudgetType[];
  [SelectDataField.ORGANIZATION_UNIT]?: OrganizationUnitsType[];
  [SelectDataField.ORDER]?: OrdersType[];
  [SelectDataField.ORDER_HISTORY]?: GraphqlApiOrderHistoryType[];
  [SelectDataField.ORDER_LIST]?: GraphqlApiOrderListType[];
  [SelectDataField.PARTNER]?: PartnerType[];
  [SelectDataField.PARTNERTAG]?: PartnertagType[];
  [SelectDataField.PROGRAM]?: GraphqlApiProgramType[];
  [SelectDataField.PROGRAM_LEVEL]?: ProgramLevelType[];
  [SelectDataField.PROGRAM_LEVEL_OPTION_GROUP]?: ProgramLevelOptionGroupType[];
  [SelectDataField.QUOTE]?: QuoteType[];
  [SelectDataField.REPORT]?: GraphqlApiReportType[];
  [SelectDataField.REPORT_STATUS]?: GraphqlApiReportStatusType[];
  [SelectDataField.STAFF]?: GraphqlApiStaffType[];
  [SelectDataField.SUBSCRIBED_PROGRAM]?: SubscribedProgramType[];
  [SelectDataField.SUBSCRIPTION]?: SubscriptionType[];
  [SelectDataField.USER]?: UserType[];
  [SelectDataField.USER_HISTORY]?: UserHistoryType[];
  [SelectDataField.WORKGROUP]?: WorkgroupType[];
  [SelectDataField.SUPPORT_LEVEL]?: GraphqlApiSupportLevel[];
};

export enum ErrorsField {
  CODE = 'code',
  MESSAGE = 'message',
}

export type ErrorsType = {
  [ErrorsField.CODE]?: string;
  [ErrorsField.MESSAGE]?: string;
};

export enum PaginationField {
  CURRENT_PAGE = 'currentPage',
  NEXT = 'next',
  PER_PAGE = 'perPage',
  PREVIOUS = 'previous',
  TOTAL = 'total',
  TOTAL_PAGE = 'totalPage',
  TOTAL_PAGES = 'totalPages',
}

export type PageType = {
  [PaginationField.CURRENT_PAGE]?: number;
  [PaginationField.NEXT]?: number;
  [PaginationField.PER_PAGE]?: number;
  [PaginationField.PREVIOUS]?: number;
  [PaginationField.TOTAL]?: number;
  [PaginationField.TOTAL_PAGE]?: number;
  [PaginationField.TOTAL_PAGES]?: number;
};

export type SelectOneResultType = {
  [Queries.SELECT_ONE]: {
    [SelectableField.DATA]?: SelectOneResponseDataType;
    [SelectableField.ERRORS]?: ErrorsType;
    [SelectableField.PAGINATION]?: PageType;
  };
};

export type SelectOneByIdResultType = {
  [Queries.SELECT_ONE_BY_ID]: {
    [SelectableField.DATA]?: SelectOneResponseDataType;
    [SelectableField.ERRORS]?: ErrorsType;
    [SelectableField.PAGINATION]?: PageType;
  };
};

export type GetLocalContactResultType = {
  [Queries.GET_LOCAL_CONTACT]: {
    [SelectableField.DATA]?: {
      [SelectDataField.CONTACT]: ContactsType;
    };
    [SelectableField.ERRORS]?: ErrorsType;
  };
};

export type GetSpecialPriceRatesHistoryResultType = {
  [Queries.GET_SPECIAL_PRICE_RATES_HISTORY]: {
    [SelectableField.DATA]?: {
      [SelectDataField.SPECIAL_PRICE_RATE]: SpecialPriceRateType[];
    };
    [SelectableField.ERRORS]?: ErrorsType;
    [SelectableField.PAGINATION]?: PageType;
  };
};

export type SelectOneResponseDataType = {
  [SelectDataField.ARROW_COMPANY]?: ArrowCompanyType;
  [SelectDataField.CONTACT]?: ContactsType;
  [SelectDataField.CONTINENT]?: ContinentType;
  [SelectDataField.COUNTRY]?: CountryType;
  [SelectDataField.END_CUSTOMER]?: EndCustomerType;
  [SelectDataField.LICENSE_BUDGET]?: LicenseBudgetType;
  [SelectDataField.ORGANIZATION_UNIT]?: OrganizationUnitsType;
  [SelectDataField.ORDER]?: OrdersType;
  [SelectDataField.ORDER_HISTORY]?: GraphqlApiOrderHistoryType;
  [SelectDataField.PARTNER]?: PartnerType;
  [SelectDataField.PARTNERTAG]?: PartnertagType;
  [SelectDataField.PROGRAM]?: GraphqlApiProgramType;
  [SelectDataField.PROGRAM_LEVEL]?: ProgramLevelType;
  [SelectDataField.PROGRAM_LEVEL_OPTION_GROUP]?: ProgramLevelOptionGroupType;
  [SelectDataField.QUOTE]?: QuoteType;
  [SelectDataField.REPORT]?: GraphqlApiReportType;
  [SelectDataField.REPORT_STATUS]?: GraphqlApiReportStatusType;
  [SelectDataField.STAFF]?: GraphqlApiStaffType;
  [SelectDataField.SUBSCRIBED_PROGRAM]?: SubscribedProgramType;
  [SelectDataField.SUBSCRIPTION]?: SubscriptionType;
  [SelectDataField.USER]?: UserType;
  [SelectDataField.USER_HISTORY]?: UserHistoryType;
  [SelectDataField.WORKGROUP]?: WorkgroupType;
  [SelectDataField.SUPPORT_LEVEL]?: GraphqlApiSupportLevel;
};

export enum QueryVariablesField {
  AGGREGATOR_FILTER = 'aggregatorFilter',
  EXCLUSION_FILTERS = 'exclusionFilters',
  FILTERS = 'filters',
  PAGINATION = 'pagination',
  QUERY_MODIFIER = 'queryModifier',
  SORT = 'sort',
  OPTIONS = 'options',
}

export type QueryVariablesType = {
  [QueryVariablesField.AGGREGATOR_FILTER]?: string[];
  [QueryVariablesField.EXCLUSION_FILTERS]?: InputSearchFilterType;
  [QueryVariablesField.FILTERS]?: InputSearchFilterType;
  [QueryVariablesField.PAGINATION]?: InputPaginationType;
  [QueryVariablesField.QUERY_MODIFIER]?: QueryModifier;
  [QueryVariablesField.SORT]?: InputSortFilterType[];
  [QueryVariablesField.OPTIONS]?: InputQueryOptionsType;
};

export type QueryVariablesExportType = QueryVariablesType & {
  [SelectableField.EXCEL_FIELDS]?: {
    label: string;
    field: string;
  }[];
  [SelectableField.EXPORT_TITLE]?: string;
};

export type SelectOneByIdQueryVariablesType = {
  id: number;
  [QueryVariablesField.EXCLUSION_FILTERS]?: InputSearchFilterType;
  [QueryVariablesField.FILTERS]?: InputSearchFilterType;
  [QueryVariablesField.PAGINATION]?: InputPaginationType;
};

export enum Queries {
  SELECT_ALL = 'selectAll',
  SELECT_ONE = 'selectOne',
  SELECT_ONE_BY_ID = 'selectOneById',
  GET_LOCAL_CONTACT = 'getLocalContact',
  GET_SPECIAL_PRICE_RATES_HISTORY = 'getSpecialPriceRatesHistory',
  EXPORT = 'export',
}

export type ExportQueryType = {
  [Queries.EXPORT]: {
    __args?: QueryVariablesExportType;
    [SelectableField.DATA]: SelectAllResponseDataSchema;
    [SelectableField.ERRORS]?: ErrorsSchema;
  };
};

export type SelectAllQueryType = {
  [Queries.SELECT_ALL]: {
    __args?: QueryVariablesType;
    [SelectableField.DATA]: SelectAllResponseDataSchema;
    [SelectableField.ERRORS]?: ErrorsSchema;
    [SelectableField.PAGINATION]?: PageSchema;
  };
};

export type SelectOneQueryType = {
  [Queries.SELECT_ONE]: {
    __args?: QueryVariablesType;
    [SelectableField.DATA]: SelectOneResponseDataSchema;
    [SelectableField.ERRORS]?: ErrorsSchema;
    [SelectableField.PAGINATION]?: PageSchema;
  };
};

export type SelectOneByIdQueryType = {
  [Queries.SELECT_ONE_BY_ID]: {
    __args: SelectOneByIdQueryVariablesType;
    [SelectableField.DATA]: SelectOneResponseDataSchema;
    [SelectableField.ERRORS]?: ErrorsSchema;
    [SelectableField.PAGINATION]?: PageSchema;
  };
};

export type GetLocalContactQueryType = {
  [Queries.GET_LOCAL_CONTACT]: {
    __args: {
      programInternalName: string;
      partnerId: number;
    };
    [SelectableField.DATA]: {
      [SelectDataField.CONTACT]: ContactsSchema;
    };
    [SelectableField.ERRORS]?: ErrorsSchema;
  };
};

export type GetSpecialPriceRatesHistoryQueryType = {
  [Queries.GET_SPECIAL_PRICE_RATES_HISTORY]: {
    __args: {
      licenseId: number;
    } & QueryVariablesType;
    [SelectableField.DATA]: {
      [SelectDataField.SPECIAL_PRICE_RATE]: SpecialPriceRateSchema;
    };
    [SelectableField.ERRORS]?: ErrorsSchema;
    [SelectableField.PAGINATION]?: PageSchema;
  };
};
