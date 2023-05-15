import { AbstractEntity } from '../../abstractEntity';
import {
  FilterType,
  ScoreResultType,
  MonthlyTrendAggType,
  EndCustomersAggType,
  IssuesAggType,
  SeveritiesAggType,
  PeriodsType,
} from '../types/securityScoreGraphQLTypes';
import { SecurityScoreQueries } from '../types/queryArguments';

export enum GetPartnerDataFields {
  COLUMN_FILTERS = 'filters',
  COLUMN_RESULTS = 'results',
  COLUMN_AVG_CURRENT_SCORE = 'avgCurrentScore',
  COLUMN_MONTHLY_TREND_AGG = 'monthlyTrendAgg',
  COLUMN_END_CUSTOMERS_AGG = 'endCustomersAgg',
  COLUMN_ISSUE_AGG = 'issueAgg',
  COLUMN_SEVERITY_AGG = 'severityAgg',
  COLUMN_PERIOD = 'period',
}

export type GetPartnerDataType = {
  [GetPartnerDataFields.COLUMN_FILTERS]?: [FilterType];
  [GetPartnerDataFields.COLUMN_RESULTS]?: [ScoreResultType];
  [GetPartnerDataFields.COLUMN_AVG_CURRENT_SCORE]?: number;
  [GetPartnerDataFields.COLUMN_MONTHLY_TREND_AGG]?: MonthlyTrendAggType;
  [GetPartnerDataFields.COLUMN_END_CUSTOMERS_AGG]?: EndCustomersAggType;
  [GetPartnerDataFields.COLUMN_ISSUE_AGG]?: IssuesAggType;
  [GetPartnerDataFields.COLUMN_SEVERITY_AGG]?: SeveritiesAggType;
  [GetPartnerDataFields.COLUMN_PERIOD]?: PeriodsType;
};

export type GetPartnerDataGraphQLResultType = {
  [SecurityScoreQueries.GET_PARTNER_DATA]: GetPartnerDataType;
};

export class GetPartnerData extends AbstractEntity<GetPartnerDataType> {
  readonly #filters?: [FilterType];
  readonly #results?: [ScoreResultType];
  readonly #avgCurrentScore?: number;
  readonly #monthlyTrendAgg?: MonthlyTrendAggType;
  readonly #endCustomersAgg?: EndCustomersAggType;
  readonly #issueAgg?: IssuesAggType;
  readonly #severityAgg?: SeveritiesAggType;
  readonly #period?: PeriodsType;

  public constructor(getPartnerDataInput: GetPartnerDataType) {
    super(getPartnerDataInput);

    this.#filters = getPartnerDataInput[GetPartnerDataFields.COLUMN_FILTERS];
    this.#results = getPartnerDataInput[GetPartnerDataFields.COLUMN_RESULTS];
    this.#avgCurrentScore =
      getPartnerDataInput[GetPartnerDataFields.COLUMN_AVG_CURRENT_SCORE];
    this.#monthlyTrendAgg =
      getPartnerDataInput[GetPartnerDataFields.COLUMN_MONTHLY_TREND_AGG];
    this.#endCustomersAgg =
      getPartnerDataInput[GetPartnerDataFields.COLUMN_END_CUSTOMERS_AGG];
    this.#issueAgg = getPartnerDataInput[GetPartnerDataFields.COLUMN_ISSUE_AGG];
    this.#severityAgg =
      getPartnerDataInput[GetPartnerDataFields.COLUMN_SEVERITY_AGG];
    this.#period = getPartnerDataInput[GetPartnerDataFields.COLUMN_PERIOD];
  }

  get filters(): [FilterType] | undefined {
    return this.#filters;
  }

  get results(): [ScoreResultType] | undefined {
    return this.#results;
  }

  get avgCurrentScore(): number | undefined {
    return this.#avgCurrentScore;
  }

  get monthlyTrendAgg(): MonthlyTrendAggType | undefined {
    return this.#monthlyTrendAgg;
  }

  get endCustomersAgg(): EndCustomersAggType | undefined {
    return this.#endCustomersAgg;
  }

  get issueAgg(): IssuesAggType | undefined {
    return this.#issueAgg;
  }

  get severityAgg(): SeveritiesAggType | undefined {
    return this.#severityAgg;
  }

  get period(): PeriodsType | undefined {
    return this.#period;
  }

  public toJSON(): GetPartnerDataType {
    return {
      [GetPartnerDataFields.COLUMN_FILTERS]: this.#filters,
      [GetPartnerDataFields.COLUMN_RESULTS]: this.#results,
      [GetPartnerDataFields.COLUMN_AVG_CURRENT_SCORE]: this.#avgCurrentScore,
      [GetPartnerDataFields.COLUMN_MONTHLY_TREND_AGG]: this.#monthlyTrendAgg,
      [GetPartnerDataFields.COLUMN_END_CUSTOMERS_AGG]: this.#endCustomersAgg,
      [GetPartnerDataFields.COLUMN_ISSUE_AGG]: this.#issueAgg,
      [GetPartnerDataFields.COLUMN_SEVERITY_AGG]: this.#severityAgg,
      [GetPartnerDataFields.COLUMN_PERIOD]: this.#period,
    };
  }
}
