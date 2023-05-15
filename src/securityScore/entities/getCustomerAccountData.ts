import { AbstractEntity } from '../../abstractEntity';
import {
  CheckByStandardType,
  FilterType,
  ScoreResultType,
  MonthlyTrendAggType,
  IssuesAggType,
  SeveritiesAggType,
  PeriodsType,
  StandardType,
  StandardsAggType,
} from '../types/securityScoreGraphQLTypes';
import { SecurityScoreQueries } from '../types/queryArguments';

export enum GetCustomerAccountDataFields {
  COLUMN_AVG_CURRENT_SCORE = 'avgCurrentScore',
  COLUMN_CHECKS = 'checks',
  COLUMN_FILTERS = 'filters',
  COLUMN_ISSUE_AGG = 'issueAgg',
  COLUMN_MONTHLY_TREND_AGG = 'monthlyTrendAgg',
  COLUMN_PERIOD = 'period',
  COLUMN_RESULT = 'result',
  COLUMN_SEVERITY_AGG = 'severityAgg',
  COLUMN_STANDARDS_AGG = 'standardsAgg',
  COLUMN_STANDARDS = 'standards',
}

export type GetCustomerAccountDataType = {
  [GetCustomerAccountDataFields.COLUMN_AVG_CURRENT_SCORE]?: number;
  [GetCustomerAccountDataFields.COLUMN_CHECKS]?: [CheckByStandardType];
  [GetCustomerAccountDataFields.COLUMN_FILTERS]?: [FilterType];
  [GetCustomerAccountDataFields.COLUMN_ISSUE_AGG]?: IssuesAggType;
  [GetCustomerAccountDataFields.COLUMN_MONTHLY_TREND_AGG]?: MonthlyTrendAggType;
  [GetCustomerAccountDataFields.COLUMN_PERIOD]?: PeriodsType;
  [GetCustomerAccountDataFields.COLUMN_RESULT]?: ScoreResultType;
  [GetCustomerAccountDataFields.COLUMN_SEVERITY_AGG]?: SeveritiesAggType;
  [GetCustomerAccountDataFields.COLUMN_STANDARDS_AGG]?: StandardsAggType;
  [GetCustomerAccountDataFields.COLUMN_STANDARDS]?: [StandardType];
};

export type GetCustomerAccountDataGraphQLResultType = {
  [SecurityScoreQueries.GET_CUSTOMER_ACCOUNT_DATA]: GetCustomerAccountDataType;
};

export class GetCustomerAccountData extends AbstractEntity<GetCustomerAccountDataType> {
  readonly #avgCurrentScore?: number;
  readonly #checks?: [CheckByStandardType];
  readonly #filters?: [FilterType];
  readonly #issueAgg?: IssuesAggType;
  readonly #monthlyTrendAgg?: MonthlyTrendAggType;
  readonly #period?: PeriodsType;
  readonly #result?: ScoreResultType;
  readonly #severityAgg?: SeveritiesAggType;
  readonly #standardsAgg?: StandardsAggType;
  readonly #standards?: [StandardType];

  public constructor(getCustomerAccountDataInput: GetCustomerAccountDataType) {
    super(getCustomerAccountDataInput);

    this.#avgCurrentScore =
      getCustomerAccountDataInput[
        GetCustomerAccountDataFields.COLUMN_AVG_CURRENT_SCORE
      ];
    this.#checks =
      getCustomerAccountDataInput[GetCustomerAccountDataFields.COLUMN_CHECKS];
    this.#filters =
      getCustomerAccountDataInput[GetCustomerAccountDataFields.COLUMN_FILTERS];
    this.#issueAgg =
      getCustomerAccountDataInput[
        GetCustomerAccountDataFields.COLUMN_ISSUE_AGG
      ];
    this.#monthlyTrendAgg =
      getCustomerAccountDataInput[
        GetCustomerAccountDataFields.COLUMN_MONTHLY_TREND_AGG
      ];
    this.#period =
      getCustomerAccountDataInput[GetCustomerAccountDataFields.COLUMN_PERIOD];
    this.#result =
      getCustomerAccountDataInput[GetCustomerAccountDataFields.COLUMN_RESULT];
    this.#severityAgg =
      getCustomerAccountDataInput[
        GetCustomerAccountDataFields.COLUMN_SEVERITY_AGG
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

  get checks(): [CheckByStandardType] | undefined {
    return this.#checks;
  }

  get filters(): [FilterType] | undefined {
    return this.#filters;
  }

  get issueAgg(): IssuesAggType | undefined {
    return this.#issueAgg;
  }

  get monthlyTrendAgg(): MonthlyTrendAggType | undefined {
    return this.#monthlyTrendAgg;
  }

  get period(): PeriodsType | undefined {
    return this.#period;
  }

  get result(): ScoreResultType | undefined {
    return this.#result;
  }

  get standardsAgg(): StandardsAggType | undefined {
    return this.#standardsAgg;
  }

  get standards(): [StandardType] | undefined {
    return this.#standards;
  }

  public toJSON(): GetCustomerAccountDataType {
    return {
      [GetCustomerAccountDataFields.COLUMN_AVG_CURRENT_SCORE]: this
        .#avgCurrentScore,
      [GetCustomerAccountDataFields.COLUMN_CHECKS]: this.#checks,
      [GetCustomerAccountDataFields.COLUMN_FILTERS]: this.#filters,
      [GetCustomerAccountDataFields.COLUMN_ISSUE_AGG]: this.#issueAgg,
      [GetCustomerAccountDataFields.COLUMN_MONTHLY_TREND_AGG]: this
        .#monthlyTrendAgg,
      [GetCustomerAccountDataFields.COLUMN_PERIOD]: this.#period,
      [GetCustomerAccountDataFields.COLUMN_RESULT]: this.#result,
      [GetCustomerAccountDataFields.COLUMN_SEVERITY_AGG]: this.#severityAgg,
      [GetCustomerAccountDataFields.COLUMN_STANDARDS_AGG]: this.#standardsAgg,
      [GetCustomerAccountDataFields.COLUMN_STANDARDS]: this.#standards,
    };
  }
}
