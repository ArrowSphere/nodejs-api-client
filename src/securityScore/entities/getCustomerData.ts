import { AbstractEntity } from '../../abstractEntity';
import {
  AccountsAggType,
  FilterType,
  ScoreResultType,
  MonthlyTrendAggType,
  IssuesAggType,
  SeveritiesAggType,
  PeriodsType,
  StandardType,
} from '../types/securityScoreGraphQLTypes';
import { SecurityScoreQueries } from '../types/queryArguments';

export enum GetCustomerDataFields {
  COLUMN_ACCOUNTS_AGG = 'accountsAgg',
  COLUMN_AVG_CURRENT_SCORE = 'avgCurrentScore',
  COLUMN_FILTERS = 'filters',
  COLUMN_MONTHLY_TREND_AGG = 'monthlyTrendAgg',
  COLUMN_PERIOD = 'period',
  COLUMN_RESULTS = 'results',
  COLUMN_ISSUE_AGG = 'issueAgg',
  COLUMN_SEVERITY_AGG = 'severityAgg',
  COLUMN_STANDARDS = 'standards',
  COLUMN_SUBSCRIPTION_REFERENCES = 'subscriptionReferences',
}

export type GetCustomerDataType = {
  [GetCustomerDataFields.COLUMN_ACCOUNTS_AGG]?: AccountsAggType;
  [GetCustomerDataFields.COLUMN_AVG_CURRENT_SCORE]?: number;
  [GetCustomerDataFields.COLUMN_FILTERS]?: [FilterType];
  [GetCustomerDataFields.COLUMN_MONTHLY_TREND_AGG]?: MonthlyTrendAggType;
  [GetCustomerDataFields.COLUMN_PERIOD]?: PeriodsType;
  [GetCustomerDataFields.COLUMN_RESULTS]?: [ScoreResultType];
  [GetCustomerDataFields.COLUMN_ISSUE_AGG]?: IssuesAggType;
  [GetCustomerDataFields.COLUMN_SEVERITY_AGG]?: SeveritiesAggType;
  [GetCustomerDataFields.COLUMN_STANDARDS]?: [StandardType];
  [GetCustomerDataFields.COLUMN_SUBSCRIPTION_REFERENCES]?: number;
};

export type GetCustomerDataGraphQLResultType = {
  [SecurityScoreQueries.GET_CUSTOMER_DATA]: GetCustomerDataType;
};

export class GetCustomerData extends AbstractEntity<GetCustomerDataType> {
  readonly #accountsAgg?: AccountsAggType;
  readonly #avgCurrentScore?: number;
  readonly #filters?: [FilterType];
  readonly #monthlyTrendAgg?: MonthlyTrendAggType;
  readonly #period?: PeriodsType;
  readonly #results?: [ScoreResultType];
  readonly #issueAgg?: IssuesAggType;
  readonly #severityAgg?: SeveritiesAggType;
  readonly #standards?: [StandardType];
  readonly #subscriptionReferences?: number;

  public constructor(getCustomerDataInput: GetCustomerDataType) {
    super(getCustomerDataInput);

    this.#accountsAgg =
      getCustomerDataInput[GetCustomerDataFields.COLUMN_ACCOUNTS_AGG];
    this.#avgCurrentScore =
      getCustomerDataInput[GetCustomerDataFields.COLUMN_AVG_CURRENT_SCORE];
    this.#filters = getCustomerDataInput[GetCustomerDataFields.COLUMN_FILTERS];
    this.#monthlyTrendAgg =
      getCustomerDataInput[GetCustomerDataFields.COLUMN_MONTHLY_TREND_AGG];
    this.#period = getCustomerDataInput[GetCustomerDataFields.COLUMN_PERIOD];
    this.#results = getCustomerDataInput[GetCustomerDataFields.COLUMN_RESULTS];
    this.#issueAgg =
      getCustomerDataInput[GetCustomerDataFields.COLUMN_ISSUE_AGG];
    this.#severityAgg =
      getCustomerDataInput[GetCustomerDataFields.COLUMN_SEVERITY_AGG];
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

  get filters(): [FilterType] | undefined {
    return this.#filters;
  }

  get monthlyTrendAgg(): MonthlyTrendAggType | undefined {
    return this.#monthlyTrendAgg;
  }

  get period(): PeriodsType | undefined {
    return this.#period;
  }

  get results(): [ScoreResultType] | undefined {
    return this.#results;
  }

  get issueAgg(): IssuesAggType | undefined {
    return this.#issueAgg;
  }

  get standards(): [StandardType] | undefined {
    return this.#standards;
  }

  get subscriptionReferences(): number | undefined {
    return this.#subscriptionReferences;
  }

  public toJSON(): GetCustomerDataType {
    return {
      [GetCustomerDataFields.COLUMN_ACCOUNTS_AGG]: this.#accountsAgg,
      [GetCustomerDataFields.COLUMN_AVG_CURRENT_SCORE]: this.#avgCurrentScore,
      [GetCustomerDataFields.COLUMN_FILTERS]: this.#filters,
      [GetCustomerDataFields.COLUMN_MONTHLY_TREND_AGG]: this.#monthlyTrendAgg,
      [GetCustomerDataFields.COLUMN_PERIOD]: this.#period,
      [GetCustomerDataFields.COLUMN_RESULTS]: this.#results,
      [GetCustomerDataFields.COLUMN_ISSUE_AGG]: this.#issueAgg,
      [GetCustomerDataFields.COLUMN_SEVERITY_AGG]: this.#severityAgg,
      [GetCustomerDataFields.COLUMN_STANDARDS]: this.#standards,
      [GetCustomerDataFields.COLUMN_SUBSCRIPTION_REFERENCES]: this
        .#subscriptionReferences,
    };
  }
}
