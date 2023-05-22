import { AbstractEntity } from '../../abstractEntity';
import {
  ChecksAggType,
  EndCustomersAggType,
  FilterType,
  MarketplacesAggType,
  MonthlyTrendAggType,
  PaginationsType,
  PeriodsType,
  ScoreResultType,
  ScoresAggType,
  SeveritiesAggType,
} from '../types/securityScoreGraphQLTypes';
import { SecurityScoreQueries } from '../types/queryArguments';

export enum GetPartnerDataFields {
  COLUMN_AVG_CURRENT_SCORE = 'avgCurrentScore',
  COLUMN_CHECKS_AGG = 'checksAgg',
  COLUMN_END_CUSTOMERS_AGG = 'endCustomersAgg',
  COLUMN_FILTERS = 'filters',
  COLUMN_MARKETPLACES_AGG = 'marketplacesAgg',
  COLUMN_MONTHLY_TREND_AGG = 'monthlyTrendAgg',
  COLUMN_PAGINATION = 'pagination',
  COLUMN_PERIOD = 'period',
  COLUMN_RESULTS = 'results',
  COLUMN_SCORES_AGG = 'scoresAgg',
  COLUMN_SEVERITIES_AGG = 'severitiesAgg',
}

export type GetPartnerDataType = {
  [GetPartnerDataFields.COLUMN_AVG_CURRENT_SCORE]?: number;
  [GetPartnerDataFields.COLUMN_CHECKS_AGG]?: ChecksAggType;
  [GetPartnerDataFields.COLUMN_END_CUSTOMERS_AGG]?: EndCustomersAggType;
  [GetPartnerDataFields.COLUMN_FILTERS]?: [FilterType];
  [GetPartnerDataFields.COLUMN_MARKETPLACES_AGG]?: MarketplacesAggType;
  [GetPartnerDataFields.COLUMN_MONTHLY_TREND_AGG]?: MonthlyTrendAggType;
  [GetPartnerDataFields.COLUMN_PAGINATION]?: PaginationsType;
  [GetPartnerDataFields.COLUMN_PERIOD]?: PeriodsType;
  [GetPartnerDataFields.COLUMN_RESULTS]?: [ScoreResultType];
  [GetPartnerDataFields.COLUMN_SCORES_AGG]?: ScoresAggType;
  [GetPartnerDataFields.COLUMN_SEVERITIES_AGG]?: SeveritiesAggType;
};

export type GetPartnerDataGraphQLResultType = {
  [SecurityScoreQueries.GET_PARTNER_DATA]: GetPartnerDataType;
};

export class GetPartnerData extends AbstractEntity<GetPartnerDataType> {
  readonly #avgCurrentScore?: number;
  readonly #checksAgg?: ChecksAggType;
  readonly #endCustomersAgg?: EndCustomersAggType;
  readonly #filters?: [FilterType];
  readonly #marketplacesAgg?: MarketplacesAggType;
  readonly #monthlyTrendAgg?: MonthlyTrendAggType;
  readonly #period?: PeriodsType;
  readonly #pagination?: PaginationsType;
  readonly #results?: [ScoreResultType];
  readonly #scoresAgg?: ScoresAggType;
  readonly #severitiesAgg?: SeveritiesAggType;

  public constructor(getPartnerDataInput: GetPartnerDataType) {
    super(getPartnerDataInput);

    this.#avgCurrentScore =
      getPartnerDataInput[GetPartnerDataFields.COLUMN_AVG_CURRENT_SCORE];
    this.#checksAgg =
      getPartnerDataInput[GetPartnerDataFields.COLUMN_CHECKS_AGG];
    this.#endCustomersAgg =
      getPartnerDataInput[GetPartnerDataFields.COLUMN_END_CUSTOMERS_AGG];
    this.#filters = getPartnerDataInput[GetPartnerDataFields.COLUMN_FILTERS];
    this.#marketplacesAgg =
      getPartnerDataInput[GetPartnerDataFields.COLUMN_MARKETPLACES_AGG];
    this.#monthlyTrendAgg =
      getPartnerDataInput[GetPartnerDataFields.COLUMN_MONTHLY_TREND_AGG];
    this.#period = getPartnerDataInput[GetPartnerDataFields.COLUMN_PERIOD];
    this.#pagination =
      getPartnerDataInput[GetPartnerDataFields.COLUMN_PAGINATION];
    this.#results = getPartnerDataInput[GetPartnerDataFields.COLUMN_RESULTS];
    this.#scoresAgg =
      getPartnerDataInput[GetPartnerDataFields.COLUMN_SCORES_AGG];
    this.#severitiesAgg =
      getPartnerDataInput[GetPartnerDataFields.COLUMN_SEVERITIES_AGG];
  }

  get avgCurrentScore(): number | undefined {
    return this.#avgCurrentScore;
  }

  get checksAgg(): ChecksAggType | undefined {
    return this.#checksAgg;
  }

  get endCustomersAgg(): EndCustomersAggType | undefined {
    return this.#endCustomersAgg;
  }

  get filters(): [FilterType] | undefined {
    return this.#filters;
  }

  get monthlyTrendAgg(): MonthlyTrendAggType | undefined {
    return this.#monthlyTrendAgg;
  }

  get marketplacesAgg(): MarketplacesAggType | undefined {
    return this.#marketplacesAgg;
  }

  get period(): PeriodsType | undefined {
    return this.#period;
  }

  get pagination(): PaginationsType | undefined {
    return this.#pagination;
  }

  get results(): [ScoreResultType] | undefined {
    return this.#results;
  }

  get scoresAgg(): ScoresAggType | undefined {
    return this.#scoresAgg;
  }

  get severitiesAgg(): SeveritiesAggType | undefined {
    return this.#severitiesAgg;
  }

  public toJSON(): GetPartnerDataType {
    return {
      [GetPartnerDataFields.COLUMN_AVG_CURRENT_SCORE]: this.avgCurrentScore,
      [GetPartnerDataFields.COLUMN_CHECKS_AGG]: this.checksAgg,
      [GetPartnerDataFields.COLUMN_END_CUSTOMERS_AGG]: this.endCustomersAgg,
      [GetPartnerDataFields.COLUMN_FILTERS]: this.filters,
      [GetPartnerDataFields.COLUMN_MARKETPLACES_AGG]: this.marketplacesAgg,
      [GetPartnerDataFields.COLUMN_MONTHLY_TREND_AGG]: this.monthlyTrendAgg,
      [GetPartnerDataFields.COLUMN_PERIOD]: this.period,
      [GetPartnerDataFields.COLUMN_PAGINATION]: this.pagination,
      [GetPartnerDataFields.COLUMN_RESULTS]: this.results,
      [GetPartnerDataFields.COLUMN_SCORES_AGG]: this.scoresAgg,
      [GetPartnerDataFields.COLUMN_SEVERITIES_AGG]: this.severitiesAgg,
    };
  }
}
