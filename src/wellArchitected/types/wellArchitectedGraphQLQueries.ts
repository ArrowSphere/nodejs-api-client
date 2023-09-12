import {
  SearchBodyArgument,
  PaginateArgument,
  WellArchitectedQueries,
} from './queryArguments';

import {
  AccountsAggSchema,
  ChecksAggSchema,
  EndCustomersAggSchema,
  MonthlyTrendAggSchema,
  PaginationSchema,
  PeriodsSchema,
  ScoreResultSchema,
  ScoresAggSchema,
  SeveritiesAggSchema,
  StandardsAggSchema,
  StandardWithCheckSchema,
  MarketplacesAggSchema,
  PartnersAggSchema,
} from './wellArchitectedGraphQLSchemas';
import { GetPartnerDataFields } from '../entities/getPartnerData';
import { GetCustomerDataFields } from '../entities/getCustomerData';
import { GetCustomerAccountDataFields } from '../entities/getCustomerAccountData';
import { GetAdminDataFields } from '../entities/getAdminData';

export type GetPartnerDataQuery = {
  [WellArchitectedQueries.GET_PARTNER_DATA]: {
    __args?: {
      searchBody?: SearchBodyArgument;
      paginate?: PaginateArgument;
    };
    [GetPartnerDataFields.COLUMN_CHECKS_AGG]?: ChecksAggSchema;
    [GetPartnerDataFields.COLUMN_END_CUSTOMERS_AGG]?: EndCustomersAggSchema;
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
  [WellArchitectedQueries.GET_CUSTOMER_DATA]: {
    __args?: {
      searchBody?: SearchBodyArgument;
      paginate?: PaginateArgument;
    };
    [GetCustomerDataFields.COLUMN_ACCOUNTS_AGG]?: AccountsAggSchema;
    [GetCustomerDataFields.COLUMN_CHECKS_AGG]?: ChecksAggSchema;
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
  [WellArchitectedQueries.GET_CUSTOMER_ACCOUNT_DATA]: {
    __args?: {
      searchBody?: SearchBodyArgument;
      paginate?: PaginateArgument;
    };
    [GetCustomerAccountDataFields.COLUMN_CHECKS_AGG]?: ChecksAggSchema;
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

export type GetAdminDataQuery = {
  [WellArchitectedQueries.GET_ADMIN_DATA]: {
    __args?: {
      searchBody?: SearchBodyArgument;
      paginate?: PaginateArgument;
    };
    [GetAdminDataFields.COLUMN_CHECKS_AGG]?: ChecksAggSchema;
    [GetAdminDataFields.COLUMN_MARKETPLACES_AGG]?: MarketplacesAggSchema;
    [GetAdminDataFields.COLUMN_MONTHLY_TREND_AGG]?: MonthlyTrendAggSchema;
    [GetAdminDataFields.COLUMN_PARTNERS_AGG]?: PartnersAggSchema;
    [GetAdminDataFields.COLUMN_PAGINATION]?: PaginationSchema;
    [GetAdminDataFields.COLUMN_PERIOD]?: PeriodsSchema;
    [GetAdminDataFields.COLUMN_RESULTS]?: ScoreResultSchema;
    [GetAdminDataFields.COLUMN_SCORES_AGG]?: ScoresAggSchema;
    [GetAdminDataFields.COLUMN_SEVERITIES_AGG]?: SeveritiesAggSchema;
  };
};
