import {
  SearchBodyArgument,
  PaginateArgument,
  SecurityScoreQueries,
} from './queryArguments';

import {
  AccountsAggSchema,
  ChecksAggSchema,
  EndCustomersAggSchema,
  FilterSchema,
  MonthlyTrendAggSchema,
  PaginationSchema,
  PeriodsSchema,
  ScoreResultSchema,
  ScoresAggSchema,
  SeveritiesAggSchema,
  StandardsAggSchema,
  StandardWithCheckSchema,
  MarketplacesAggSchema,
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
    [GetPartnerDataFields.COLUMN_AVG_CURRENT_SCORE]?: boolean;
    [GetPartnerDataFields.COLUMN_CHECKS_AGG]?: ChecksAggSchema;
    [GetPartnerDataFields.COLUMN_END_CUSTOMERS_AGG]?: EndCustomersAggSchema;
    [GetPartnerDataFields.COLUMN_FILTERS]?: FilterSchema;
    [GetPartnerDataFields.COLUMN_MARKETPLACES_AGG]?: MarketplacesAggSchema;
    [GetPartnerDataFields.COLUMN_MONTHLY_TREND_AGG]?: MonthlyTrendAggSchema;
    [GetPartnerDataFields.COLUMN_PAGINATION]?: PaginationSchema;
    [GetPartnerDataFields.COLUMN_PERIOD]?: PeriodsSchema;
    [GetPartnerDataFields.COLUMN_RESULTS]?: ScoreResultSchema;
    [GetPartnerDataFields.COLUMN_SCORES_AGG]?: ScoresAggSchema;
    [GetPartnerDataFields.COLUMN_SEVERITIES_AGG]?: SeveritiesAggSchema;
  };
};

export type GetCustomerDataQuery = {
  [SecurityScoreQueries.GET_CUSTOMER_DATA]: {
    __args?: {
      searchBody?: SearchBodyArgument;
      paginate?: PaginateArgument;
    };
    [GetCustomerDataFields.COLUMN_ACCOUNTS_AGG]?: AccountsAggSchema;
    [GetCustomerDataFields.COLUMN_AVG_CURRENT_SCORE]?: boolean;
    [GetCustomerDataFields.COLUMN_CHECKS_AGG]?: ChecksAggSchema;
    [GetCustomerDataFields.COLUMN_FILTERS]?: FilterSchema;
    [GetCustomerDataFields.COLUMN_MONTHLY_TREND_AGG]?: MonthlyTrendAggSchema;
    [GetCustomerDataFields.COLUMN_PAGINATION]?: PaginationSchema;
    [GetCustomerDataFields.COLUMN_PERIOD]?: PeriodsSchema;
    [GetCustomerDataFields.COLUMN_RESULTS]?: ScoreResultSchema;
    [GetCustomerDataFields.COLUMN_SCORES_AGG]?: ScoresAggSchema;
    [GetCustomerDataFields.COLUMN_SEVERITIES_AGG]?: SeveritiesAggSchema;
    [GetCustomerDataFields.COLUMN_STANDARDS]?: StandardWithCheckSchema;
    [GetCustomerDataFields.COLUMN_SUBSCRIPTION_REFERENCES]?: boolean;
  };
};

export type GetCustomerAccountDataQuery = {
  [SecurityScoreQueries.GET_CUSTOMER_ACCOUNT_DATA]: {
    __args?: {
      searchBody?: SearchBodyArgument;
      paginate?: PaginateArgument;
    };
    [GetCustomerAccountDataFields.COLUMN_AVG_CURRENT_SCORE]?: boolean;
    [GetCustomerAccountDataFields.COLUMN_CHECKS_AGG]?: ChecksAggSchema;
    [GetCustomerAccountDataFields.COLUMN_FILTERS]?: FilterSchema;
    [GetCustomerAccountDataFields.COLUMN_MONTHLY_TREND_AGG]?: MonthlyTrendAggSchema;
    [GetCustomerAccountDataFields.COLUMN_PAGINATION]?: PaginationSchema;
    [GetCustomerAccountDataFields.COLUMN_PERIOD]?: PeriodsSchema;
    [GetCustomerAccountDataFields.COLUMN_RESULTS]?: ScoreResultSchema;
    [GetCustomerAccountDataFields.COLUMN_SCORES_AGG]?: ScoresAggSchema;
    [GetCustomerAccountDataFields.COLUMN_SEVERITIES_AGG]?: SeveritiesAggSchema;
    [GetCustomerAccountDataFields.COLUMN_STANDARDS_AGG]?: StandardsAggSchema;
    [GetCustomerAccountDataFields.COLUMN_STANDARDS]?: StandardWithCheckSchema;
  };
};
