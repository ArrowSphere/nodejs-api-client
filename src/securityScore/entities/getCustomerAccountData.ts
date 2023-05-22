import { AbstractEntity } from '../../abstractEntity';
import {
  ChecksAggType,
  FilterType,
  MonthlyTrendAggType,
  PaginationsType,
  PeriodsType,
  ScoreResultType,
  ScoresAggType,
  SeveritiesAggType,
  StandardsAggType,
  StandardWithCheckType,
} from '../types/securityScoreGraphQLTypes';
import { SecurityScoreQueries } from '../types/queryArguments';

export enum GetCustomerAccountDataFields {
  COLUMN_AVG_CURRENT_SCORE = 'avgCurrentScore',
  COLUMN_CHECKS_AGG = 'checksAgg',
  COLUMN_FILTERS = 'filters',
  COLUMN_MONTHLY_TREND_AGG = 'monthlyTrendAgg',
  COLUMN_PAGINATION = 'pagination',
  COLUMN_PERIOD = 'period',
  COLUMN_RESULTS = 'results',
  COLUMN_SCORES_AGG = 'scoresAgg',
  COLUMN_SEVERITIES_AGG = 'severitiesAgg',
  COLUMN_STANDARDS_AGG = 'standardsAgg',
  COLUMN_STANDARDS = 'standards',
}

export type GetCustomerAccountDataType = {
  [GetCustomerAccountDataFields.COLUMN_AVG_CURRENT_SCORE]?: number;
  [GetCustomerAccountDataFields.COLUMN_CHECKS_AGG]?: ChecksAggType;
  [GetCustomerAccountDataFields.COLUMN_FILTERS]?: FilterType[];
  [GetCustomerAccountDataFields.COLUMN_MONTHLY_TREND_AGG]?: MonthlyTrendAggType;
  [GetCustomerAccountDataFields.COLUMN_PAGINATION]?: PaginationsType;
  [GetCustomerAccountDataFields.COLUMN_PERIOD]?: PeriodsType;
  [GetCustomerAccountDataFields.COLUMN_RESULTS]?: ScoreResultType[];
  [GetCustomerAccountDataFields.COLUMN_SCORES_AGG]?: ScoresAggType;
  [GetCustomerAccountDataFields.COLUMN_SEVERITIES_AGG]?: SeveritiesAggType;
  [GetCustomerAccountDataFields.COLUMN_STANDARDS_AGG]?: StandardsAggType;
  [GetCustomerAccountDataFields.COLUMN_STANDARDS]?: StandardWithCheckType[];
};

export type GetCustomerAccountDataGraphQLResultType = {
  [SecurityScoreQueries.GET_CUSTOMER_ACCOUNT_DATA]: GetCustomerAccountDataType;
};

export class GetCustomerAccountData extends AbstractEntity<GetCustomerAccountDataType> {
  readonly #avgCurrentScore?: number;
  readonly #checksAgg?: ChecksAggType;
  readonly #filters?: FilterType[];
  readonly #monthlyTrendAgg?: MonthlyTrendAggType;
  readonly #pagination?: PaginationsType;
  readonly #period?: PeriodsType;
  readonly #results?: ScoreResultType[];
  readonly #scoresAgg?: ScoresAggType;
  readonly #severitiesAgg?: SeveritiesAggType;
  readonly #standardsAgg?: StandardsAggType;
  readonly #standards?: StandardWithCheckType[];

  public constructor(getCustomerAccountDataInput: GetCustomerAccountDataType) {
    super(getCustomerAccountDataInput);

    this.#avgCurrentScore =
      getCustomerAccountDataInput[
        GetCustomerAccountDataFields.COLUMN_AVG_CURRENT_SCORE
      ];
    this.#checksAgg =
      getCustomerAccountDataInput[
        GetCustomerAccountDataFields.COLUMN_CHECKS_AGG
      ];
    this.#filters =
      getCustomerAccountDataInput[GetCustomerAccountDataFields.COLUMN_FILTERS];
    this.#monthlyTrendAgg =
      getCustomerAccountDataInput[
        GetCustomerAccountDataFields.COLUMN_MONTHLY_TREND_AGG
      ];
    this.#pagination =
      getCustomerAccountDataInput[
        GetCustomerAccountDataFields.COLUMN_PAGINATION
      ];
    this.#period =
      getCustomerAccountDataInput[GetCustomerAccountDataFields.COLUMN_PERIOD];
    this.#results =
      getCustomerAccountDataInput[GetCustomerAccountDataFields.COLUMN_RESULTS];
    this.#scoresAgg =
      getCustomerAccountDataInput[
        GetCustomerAccountDataFields.COLUMN_SCORES_AGG
      ];
    this.#severitiesAgg =
      getCustomerAccountDataInput[
        GetCustomerAccountDataFields.COLUMN_SEVERITIES_AGG
      ];
    this.#standardsAgg =
      getCustomerAccountDataInput[
        GetCustomerAccountDataFields.COLUMN_STANDARDS_AGG
      ];
    this.#standards =
      getCustomerAccountDataInput[
        GetCustomerAccountDataFields.COLUMN_STANDARDS
      ];
  }

  get avgCurrentScore(): number | undefined {
    return this.#avgCurrentScore;
  }

  get checksAgg(): ChecksAggType | undefined {
    return this.#checksAgg;
  }

  get filters(): FilterType[] | undefined {
    return this.#filters;
  }

  get monthlyTrendAgg(): MonthlyTrendAggType | undefined {
    return this.#monthlyTrendAgg;
  }

  get pagination(): PaginationsType | undefined {
    return this.#pagination;
  }

  get period(): PeriodsType | undefined {
    return this.#period;
  }

  get scoresAgg(): ScoresAggType | undefined {
    return this.#scoresAgg;
  }

  get results(): ScoreResultType[] | undefined {
    return this.#results;
  }

  get severitiesAgg(): SeveritiesAggType | undefined {
    return this.#severitiesAgg;
  }

  get standardsAgg(): StandardsAggType | undefined {
    return this.#standardsAgg;
  }

  get standards(): StandardWithCheckType[] | undefined {
    return this.#standards;
  }

  public toJSON(): GetCustomerAccountDataType {
    return {
      [GetCustomerAccountDataFields.COLUMN_AVG_CURRENT_SCORE]: this
        .avgCurrentScore,
      [GetCustomerAccountDataFields.COLUMN_CHECKS_AGG]: this.checksAgg,
      [GetCustomerAccountDataFields.COLUMN_FILTERS]: this.filters,
      [GetCustomerAccountDataFields.COLUMN_MONTHLY_TREND_AGG]: this
        .monthlyTrendAgg,
      [GetCustomerAccountDataFields.COLUMN_PAGINATION]: this.pagination,
      [GetCustomerAccountDataFields.COLUMN_PERIOD]: this.period,
      [GetCustomerAccountDataFields.COLUMN_SCORES_AGG]: this.scoresAgg,
      [GetCustomerAccountDataFields.COLUMN_RESULTS]: this.results,
      [GetCustomerAccountDataFields.COLUMN_SEVERITIES_AGG]: this.severitiesAgg,
      [GetCustomerAccountDataFields.COLUMN_STANDARDS_AGG]: this.standardsAgg,
      [GetCustomerAccountDataFields.COLUMN_STANDARDS]: this.standards,
    };
  }
}
