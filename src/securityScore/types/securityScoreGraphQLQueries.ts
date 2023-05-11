import { SearchBodyArgument, PaginateArgument } from './queryArguments';

import {
  AccountsAggType,
  CheckType,
  EndCustomersAggType,
  FilterType,
  IssuesAggType,
  MonthlyTrendAggType,
  PeriodsType,
  ScoreResultType,
  SeveritiesAggType,
  StandardsAggType,
  StandardType,
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
    accountsAgg?: AccountsAggType;
    avgCurrentScore?: number;
    filters?: [FilterType];
    monthlyTrendAgg?: MonthlyTrendAggType;
    period?: PeriodsType;
    results?: [ScoreResultType];
    severityAgg?: SeveritiesAggType;
    standards?: [StandardType];
    subscriptionReferences?: number;
  };
};

export type GetCustomerAccountDataQuery = {
  getCustomerAccountData: {
    __args?: {
      searchBody?: SearchBodyArgument;
    };
    avgCurrentScore?: boolean;
    checks?: [CheckType];
    filters?: [FilterType];
    monthlyTrendAgg?: MonthlyTrendAggType;
    period?: PeriodsType;
    result?: ScoreResultType;
    severityAgg?: SeveritiesAggType;
    standardsAgg?: StandardsAggType;
    standards?: [StandardType];
  };
};
