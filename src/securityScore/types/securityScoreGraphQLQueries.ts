import { SearchBodyArgument, PaginateArgument } from './queryArguments';

import {
  AccountsAggSchema,
  CheckSchema,
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

export type GetPartnerDataQuery = {
  getPartnerData: {
    __args?: {
      searchBody?: SearchBodyArgument;
      paginate?: PaginateArgument;
    };
    filters?: FilterSchema;
    results?: ScoreResultSchema;
    avgCurrentScore?: boolean;
    monthlyTrendAgg?: MonthlyTrendAggSchema;
    endCustomersAgg?: EndCustomersAggSchema;
    issueAgg?: IssuesAggSchema;
    severityAgg?: SeveritiesAggSchema;
    period?: PeriodsSchema;
  };
};

export type GetCustomerDataQuery = {
  getCustomerData: {
    __args?: {
      searchBody?: SearchBodyArgument;
    };
    filters?: FilterSchema;
    accountsAgg?: AccountsAggSchema;
    severityAgg?: SeveritiesAggSchema;
    period?: PeriodsSchema;
    avgCurrentScore?: boolean;
    monthlyTrendAgg?: MonthlyTrendAggSchema;
    results?: ScoreResultSchema;
    standards?: StandardSchema;
    subscriptionReferences?: boolean;
  };
};

export type GetCustomerAccountDataQuery = {
  getCustomerAccountData: {
    __args?: {
      searchBody?: SearchBodyArgument;
    };
    filters?: [FilterSchema];
    avgCurrentScore?: boolean;
    standardsAgg?: StandardsAggSchema;
    severityAgg?: SeveritiesAggSchema;
    period?: PeriodsSchema;
    checks?: CheckSchema;
    monthlyTrendAgg?: MonthlyTrendAggSchema;
    result?: ScoreResultSchema;
    standards?: StandardSchema;
  };
};
