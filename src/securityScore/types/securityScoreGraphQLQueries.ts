import {
  SearchBodyArgument,
  PaginateArgument,
  SecurityScoreQueries,
} from './queryArguments';

import {
  AccountsAggSchema,
  CheckByStandardSchema,
  EndCustomersAggSchema,
  FilterSchema,
  IssuesAggSchema,
  MonthlyTrendAggSchema,
  PeriodsSchema,
  ScoreResultSchema,
  SeveritiesAggSchema,
  StandardsAggSchema,
  StandardSchema,
} from './securityScoreGraphQLSchemas';
import { GetPartnerDataFields } from '../entities/getPartnerData';
import { GetCustomerDataFields } from '../entities/getCustomerData';
import { GetCustomerAccountDataFields } from '../entities/getCustomerAccountData';

export type GetPartnerDataQuery = {
  [SecurityScoreQueries.GET_PARTNER_DATA]: {
    __args?: {
      searchBody?: SearchBodyArgument;
      paginate?: PaginateArgument;
    };
    [GetPartnerDataFields.COLUMN_FILTERS]?: FilterSchema;
    [GetPartnerDataFields.COLUMN_RESULTS]?: ScoreResultSchema;
    [GetPartnerDataFields.COLUMN_AVG_CURRENT_SCORE]?: boolean;
    [GetPartnerDataFields.COLUMN_MONTHLY_TREND_AGG]?: MonthlyTrendAggSchema;
    [GetPartnerDataFields.COLUMN_END_CUSTOMERS_AGG]?: EndCustomersAggSchema;
    [GetPartnerDataFields.COLUMN_ISSUE_AGG]?: IssuesAggSchema;
    [GetPartnerDataFields.COLUMN_SEVERITY_AGG]?: SeveritiesAggSchema;
    [GetPartnerDataFields.COLUMN_PERIOD]?: PeriodsSchema;
  };
};

export type GetCustomerDataQuery = {
  [SecurityScoreQueries.GET_CUSTOMER_DATA]: {
    __args?: {
      searchBody?: SearchBodyArgument;
    };
    [GetCustomerDataFields.COLUMN_FILTERS]?: FilterSchema;
    [GetCustomerDataFields.COLUMN_ACCOUNTS_AGG]?: AccountsAggSchema;
    [GetCustomerDataFields.COLUMN_SEVERITY_AGG]?: SeveritiesAggSchema;
    [GetCustomerDataFields.COLUMN_PERIOD]?: PeriodsSchema;
    [GetCustomerDataFields.COLUMN_AVG_CURRENT_SCORE]?: boolean;
    [GetCustomerDataFields.COLUMN_MONTHLY_TREND_AGG]?: MonthlyTrendAggSchema;
    [GetCustomerDataFields.COLUMN_ISSUE_AGG]?: IssuesAggSchema;
    [GetCustomerDataFields.COLUMN_RESULTS]?: ScoreResultSchema;
    [GetCustomerDataFields.COLUMN_STANDARDS]?: StandardSchema;
    [GetCustomerDataFields.COLUMN_SUBSCRIPTION_REFERENCES]?: boolean;
  };
};

export type GetCustomerAccountDataQuery = {
  [SecurityScoreQueries.GET_CUSTOMER_ACCOUNT_DATA]: {
    __args?: {
      searchBody?: SearchBodyArgument;
    };
    [GetCustomerAccountDataFields.COLUMN_FILTERS]?: [FilterSchema];
    [GetCustomerAccountDataFields.COLUMN_ISSUE_AGG]?: IssuesAggSchema;
    [GetCustomerAccountDataFields.COLUMN_AVG_CURRENT_SCORE]?: boolean;
    [GetCustomerAccountDataFields.COLUMN_STANDARDS_AGG]?: StandardsAggSchema;
    [GetCustomerAccountDataFields.COLUMN_SEVERITY_AGG]?: SeveritiesAggSchema;
    [GetCustomerAccountDataFields.COLUMN_PERIOD]?: PeriodsSchema;
    [GetCustomerAccountDataFields.COLUMN_CHECKS]?: CheckByStandardSchema;
    [GetCustomerAccountDataFields.COLUMN_MONTHLY_TREND_AGG]?: MonthlyTrendAggSchema;
    [GetCustomerAccountDataFields.COLUMN_RESULT]?: ScoreResultSchema;
    [GetCustomerAccountDataFields.COLUMN_STANDARDS]?: StandardSchema;
  };
};
