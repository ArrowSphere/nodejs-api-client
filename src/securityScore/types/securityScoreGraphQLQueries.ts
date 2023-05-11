import { SearchBodyArgument, PaginateArgument } from './queryArguments';

import {
  AccountsAggType,
  EndCustomersAggType,
  FilterType,
  IssuesAggType,
  MonthlyTrendAggType,
  PeriodsType,
  ScoreResultType,
  SeveritiesAggType,
  StandardsAggType,
} from './securityScoreGraphQLTypes';

export type GetPartnerDataQuery = {
  getPartnerData: {
    __args?: {
      searchBody?: SearchBodyArgument;
      paginate?: PaginateArgument;
    };
    filters?: [FilterType];
    results?: [ScoreResultType];
    avgCurrentScore?: number;
    monthlyTrendAgg?: MonthlyTrendAggType;
    endCustomersAgg?: EndCustomersAggType;
    issueAgg?: IssuesAggType;
    severityAgg?: SeveritiesAggType;
    period?: PeriodsType;
  };
};

export type GetCustomerDataQuery = {
  getCustomerData: {
    __args?: {
      searchBody?: SearchBodyArgument;
    };
    filters?: [FilterType];
    avgCurrentScore?: number;
    accountsAgg?: AccountsAggType;
    severityAgg?: SeveritiesAggType;
    period?: PeriodsType;
    subscriptionReferences?: number;
  };
};

export type GetCustomerAccountDataQuery = {
  getCustomerAccountData: {
    __args?: {
      searchBody?: SearchBodyArgument;
    };
    filters?: [FilterType];
    avgCurrentScore?: boolean;
    standardsAgg?: StandardsAggType;
    severityAgg?: SeveritiesAggType;
    period?: PeriodsType;
  };
};
