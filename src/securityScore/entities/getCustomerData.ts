import { AbstractEntity } from '../../abstractEntity';
import {
  AccountsAggType,
  ScoreResultType,
  MonthlyTrendAggType,
  SeveritiesAggType,
  PaginationsType,
  PeriodsType,
  ChecksAggType,
  ScoresAggType,
  StandardWithCheckType,
} from '../types/securityScoreGraphQLTypes';
import { SecurityScoreQueries } from '../types/queryArguments';

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export enum GetCustomerDataFields {
  COLUMN_ACCOUNTS_AGG = 'accountsAgg',
  COLUMN_CHECKS_AGG = 'checksAgg',
  COLUMN_MONTHLY_TREND_AGG = 'monthlyTrendAgg',
  COLUMN_PAGINATION = 'pagination',
  COLUMN_PERIOD = 'period',
  COLUMN_RESULTS = 'results',
  COLUMN_SCORES_AGG = 'scoresAgg',
  COLUMN_SEVERITIES_AGG = 'severitiesAgg',
  COLUMN_STANDARDS = 'standards',
  COLUMN_SUBSCRIPTION_REFERENCES = 'subscriptionReferences',
}

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type GetCustomerDataType = {
  [GetCustomerDataFields.COLUMN_ACCOUNTS_AGG]?: AccountsAggType;
  [GetCustomerDataFields.COLUMN_CHECKS_AGG]?: ChecksAggType;
  [GetCustomerDataFields.COLUMN_MONTHLY_TREND_AGG]?: MonthlyTrendAggType;
  [GetCustomerDataFields.COLUMN_PAGINATION]?: PaginationsType;
  [GetCustomerDataFields.COLUMN_PERIOD]?: PeriodsType;
  [GetCustomerDataFields.COLUMN_RESULTS]?: ScoreResultType[];
  [GetCustomerDataFields.COLUMN_SCORES_AGG]?: ScoresAggType;
  [GetCustomerDataFields.COLUMN_SEVERITIES_AGG]?: SeveritiesAggType;
  [GetCustomerDataFields.COLUMN_STANDARDS]?: StandardWithCheckType[];
  [GetCustomerDataFields.COLUMN_SUBSCRIPTION_REFERENCES]?: number;
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type GetCustomerDataGraphQLResultType = {
  [SecurityScoreQueries.GET_CUSTOMER_DATA]: GetCustomerDataType;
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export class GetCustomerData extends AbstractEntity<GetCustomerDataType> {
  readonly #accountsAgg?: AccountsAggType;
  readonly #checksAgg?: ChecksAggType;
  readonly #monthlyTrendAgg?: MonthlyTrendAggType;
  readonly #pagination?: PaginationsType;
  readonly #period?: PeriodsType;
  readonly #results?: ScoreResultType[];
  readonly #scoresAgg?: ScoresAggType;
  readonly #severitiesAgg?: SeveritiesAggType;
  readonly #standards?: StandardWithCheckType[];
  readonly #subscriptionReferences?: number;

  public constructor(getCustomerDataInput: GetCustomerDataType) {
    super(getCustomerDataInput);

    this.#accountsAgg =
      getCustomerDataInput[GetCustomerDataFields.COLUMN_ACCOUNTS_AGG];
    this.#checksAgg =
      getCustomerDataInput[GetCustomerDataFields.COLUMN_CHECKS_AGG];
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

  get checksAgg(): ChecksAggType | undefined {
    return this.#checksAgg;
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

  get standards(): StandardWithCheckType[] | undefined {
    return this.#standards;
  }

  get subscriptionReferences(): number | undefined {
    return this.#subscriptionReferences;
  }

  public toJSON(): GetCustomerDataType {
    return {
      [GetCustomerDataFields.COLUMN_ACCOUNTS_AGG]: this.accountsAgg,
      [GetCustomerDataFields.COLUMN_CHECKS_AGG]: this.checksAgg,
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
