import { AbstractEntity } from '../../abstractEntity';
import {
  AccountsAggType,
  FilterType,
  ScoreResultType,
  MonthlyTrendAggType,
  SeveritiesAggType,
  PaginationsType,
  PeriodsType,
  StandardType,
  ChecksAggType,
  ScoresAggType,
} from '../types/securityScoreGraphQLTypes';
import { SecurityScoreQueries } from '../types/queryArguments';

export enum GetCustomerDataFields {
  COLUMN_ACCOUNTS_AGG = 'accountsAgg',
  COLUMN_AVG_CURRENT_SCORE = 'avgCurrentScore',
  COLUMN_CHECKS_AGG = 'checksAgg',
  COLUMN_FILTERS = 'filters',
  COLUMN_MONTHLY_TREND_AGG = 'monthlyTrendAgg',
  COLUMN_PAGINATION = 'pagination',
  COLUMN_PERIOD = 'period',
  COLUMN_RESULTS = 'results',
  COLUMN_SCORES_AGG = 'scoresAgg',
  COLUMN_SEVERITIES_AGG = 'severitiesAgg',
  COLUMN_STANDARDS = 'standards',
  COLUMN_SUBSCRIPTION_REFERENCES = 'subscriptionReferences',
}

export type GetCustomerDataType = {
  [GetCustomerDataFields.COLUMN_ACCOUNTS_AGG]?: AccountsAggType;
  [GetCustomerDataFields.COLUMN_AVG_CURRENT_SCORE]?: number;
  [GetCustomerDataFields.COLUMN_CHECKS_AGG]?: ChecksAggType;
  [GetCustomerDataFields.COLUMN_FILTERS]?: FilterType[];
  [GetCustomerDataFields.COLUMN_MONTHLY_TREND_AGG]?: MonthlyTrendAggType;
  [GetCustomerDataFields.COLUMN_PAGINATION]?: PaginationsType;
  [GetCustomerDataFields.COLUMN_PERIOD]?: PeriodsType;
  [GetCustomerDataFields.COLUMN_RESULTS]?: ScoreResultType[];
  [GetCustomerDataFields.COLUMN_SCORES_AGG]?: ScoresAggType;
  [GetCustomerDataFields.COLUMN_SEVERITIES_AGG]?: SeveritiesAggType;
  [GetCustomerDataFields.COLUMN_STANDARDS]?: StandardType[];
  [GetCustomerDataFields.COLUMN_SUBSCRIPTION_REFERENCES]?: number;
};

export type GetCustomerDataGraphQLResultType = {
  [SecurityScoreQueries.GET_CUSTOMER_DATA]: GetCustomerDataType;
};

export class GetCustomerData extends AbstractEntity<GetCustomerDataType> {
  readonly #accountsAgg?: AccountsAggType;
  readonly #avgCurrentScore?: number;
  readonly #checksAgg?: ChecksAggType;
  readonly #filters?: FilterType[];
  readonly #monthlyTrendAgg?: MonthlyTrendAggType;
  readonly #pagination?: PaginationsType;
  readonly #period?: PeriodsType;
  readonly #results?: ScoreResultType[];
  readonly #scoresAgg?: ScoresAggType;
  readonly #severitiesAgg?: SeveritiesAggType;
  readonly #standards?: StandardType[];
  readonly #subscriptionReferences?: number;

  public constructor(getCustomerDataInput: GetCustomerDataType) {
    super(getCustomerDataInput);

    this.#accountsAgg =
      getCustomerDataInput[GetCustomerDataFields.COLUMN_ACCOUNTS_AGG];
    this.#avgCurrentScore =
      getCustomerDataInput[GetCustomerDataFields.COLUMN_AVG_CURRENT_SCORE];
    this.#checksAgg =
      getCustomerDataInput[GetCustomerDataFields.COLUMN_CHECKS_AGG];
    this.#filters = getCustomerDataInput[GetCustomerDataFields.COLUMN_FILTERS];
    this.#monthlyTrendAgg =
      getCustomerDataInput[GetCustomerDataFields.COLUMN_MONTHLY_TREND_AGG];
    this.#pagination =
      getCustomerDataInput[GetCustomerDataFields.COLUMN_PAGINATION];
    this.#period = getCustomerDataInput[GetCustomerDataFields.COLUMN_PERIOD];
    this.#results = getCustomerDataInput[GetCustomerDataFields.COLUMN_RESULTS];
    this.#scoresAgg =
      getCustomerDataInput[GetCustomerDataFields.COLUMN_SCORES_AGG];
    this.#severitiesAgg =
      getCustomerDataInput[GetCustomerDataFields.COLUMN_SEVERITIES_AGG];
    this.#standards =
      getCustomerDataInput[GetCustomerDataFields.COLUMN_STANDARDS];
    this.#subscriptionReferences =
      getCustomerDataInput[
        GetCustomerDataFields.COLUMN_SUBSCRIPTION_REFERENCES
      ];
  }

  get accountsAgg(): AccountsAggType | undefined {
    return this.#accountsAgg;
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

  get results(): ScoreResultType[] | undefined {
    return this.#results;
  }

  get scoresAgg(): ScoresAggType | undefined {
    return this.#scoresAgg;
  }

  get severitiesAgg(): SeveritiesAggType | undefined {
    return this.#severitiesAgg;
  }

  get standards(): StandardType[] | undefined {
    return this.#standards;
  }

  get subscriptionReferences(): number | undefined {
    return this.#subscriptionReferences;
  }

  public toJSON(): GetCustomerDataType {
    return {
      [GetCustomerDataFields.COLUMN_ACCOUNTS_AGG]: this.accountsAgg,
      [GetCustomerDataFields.COLUMN_AVG_CURRENT_SCORE]: this.avgCurrentScore,
      [GetCustomerDataFields.COLUMN_CHECKS_AGG]: this.checksAgg,
      [GetCustomerDataFields.COLUMN_FILTERS]: this.filters,
      [GetCustomerDataFields.COLUMN_MONTHLY_TREND_AGG]: this.monthlyTrendAgg,
      [GetCustomerDataFields.COLUMN_PAGINATION]: this.pagination,
      [GetCustomerDataFields.COLUMN_PERIOD]: this.period,
      [GetCustomerDataFields.COLUMN_RESULTS]: this.results,
      [GetCustomerDataFields.COLUMN_SCORES_AGG]: this.scoresAgg,
      [GetCustomerDataFields.COLUMN_SEVERITIES_AGG]: this.severitiesAgg,
      [GetCustomerDataFields.COLUMN_STANDARDS]: this.standards,
      [GetCustomerDataFields.COLUMN_SUBSCRIPTION_REFERENCES]: this
        .subscriptionReferences,
    };
  }
}
