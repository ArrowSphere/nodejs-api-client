import { AbstractEntity } from '../../abstractEntity';
import {
  ChecksAggType,
  MarketplacesAggType,
  MonthlyTrendAggType,
  WellArchitectedPaginationType,
  PartnersAggType,
  WellArchitectedPeriodType,
  ScoreResultType,
  ScoresAggType,
  SeveritiesAggType,
} from '../types/wellArchitectedGraphQLTypes';
import { WellArchitectedQueries } from '../types/queryArguments';

export enum GetAdminDataFields {
  COLUMN_CHECKS_AGG = 'checksAgg',
  COLUMN_MARKETPLACES_AGG = 'marketplacesAgg',
  COLUMN_MONTHLY_TREND_AGG = 'monthlyTrendAgg',
  COLUMN_PARTNERS_AGG = 'partnersAgg',
  COLUMN_PAGINATION = 'pagination',
  COLUMN_PERIOD = 'period',
  COLUMN_RESULTS = 'results',
  COLUMN_SCORES_AGG = 'scoresAgg',
  COLUMN_SEVERITIES_AGG = 'severitiesAgg',
}

export type GetAdminDataType = {
  [GetAdminDataFields.COLUMN_CHECKS_AGG]?: ChecksAggType;
  [GetAdminDataFields.COLUMN_MARKETPLACES_AGG]?: MarketplacesAggType;
  [GetAdminDataFields.COLUMN_MONTHLY_TREND_AGG]?: MonthlyTrendAggType;
  [GetAdminDataFields.COLUMN_PARTNERS_AGG]?: PartnersAggType;
  [GetAdminDataFields.COLUMN_PAGINATION]?: WellArchitectedPaginationType;
  [GetAdminDataFields.COLUMN_PERIOD]?: WellArchitectedPeriodType;
  [GetAdminDataFields.COLUMN_RESULTS]?: ScoreResultType[];
  [GetAdminDataFields.COLUMN_SCORES_AGG]?: ScoresAggType;
  [GetAdminDataFields.COLUMN_SEVERITIES_AGG]?: SeveritiesAggType;
};

export type GetAdminDataGraphQLResultType = {
  [WellArchitectedQueries.GET_ADMIN_DATA]: GetAdminDataType;
};

export class GetAdminData extends AbstractEntity<GetAdminDataType> {
  readonly #checksAgg?: ChecksAggType;
  readonly #marketplacesAgg?: MarketplacesAggType;
  readonly #monthlyTrendAgg?: MonthlyTrendAggType;
  readonly #partnersAgg?: PartnersAggType;
  readonly #period?: WellArchitectedPeriodType;
  readonly #pagination?: WellArchitectedPaginationType;
  readonly #results?: ScoreResultType[];
  readonly #scoresAgg?: ScoresAggType;
  readonly #severitiesAgg?: SeveritiesAggType;

  public constructor(getAdminDataInput: GetAdminDataType) {
    super(getAdminDataInput);

    this.#checksAgg = getAdminDataInput[GetAdminDataFields.COLUMN_CHECKS_AGG];
    this.#marketplacesAgg =
      getAdminDataInput[GetAdminDataFields.COLUMN_MARKETPLACES_AGG];
    this.#monthlyTrendAgg =
      getAdminDataInput[GetAdminDataFields.COLUMN_MONTHLY_TREND_AGG];
    this.#partnersAgg =
      getAdminDataInput[GetAdminDataFields.COLUMN_PARTNERS_AGG];
    this.#period = getAdminDataInput[GetAdminDataFields.COLUMN_PERIOD];
    this.#pagination = getAdminDataInput[GetAdminDataFields.COLUMN_PAGINATION];
    this.#results = getAdminDataInput[GetAdminDataFields.COLUMN_RESULTS];
    this.#scoresAgg = getAdminDataInput[GetAdminDataFields.COLUMN_SCORES_AGG];
    this.#severitiesAgg =
      getAdminDataInput[GetAdminDataFields.COLUMN_SEVERITIES_AGG];
  }

  get checksAgg(): ChecksAggType | undefined {
    return this.#checksAgg;
  }

  get monthlyTrendAgg(): MonthlyTrendAggType | undefined {
    return this.#monthlyTrendAgg;
  }

  get marketplacesAgg(): MarketplacesAggType | undefined {
    return this.#marketplacesAgg;
  }

  get partnersAgg(): PartnersAggType | undefined {
    return this.#partnersAgg;
  }

  get period(): WellArchitectedPeriodType | undefined {
    return this.#period;
  }

  get pagination(): WellArchitectedPaginationType | undefined {
    return this.#pagination;
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

  public toJSON(): GetAdminDataType {
    return {
      [GetAdminDataFields.COLUMN_CHECKS_AGG]: this.checksAgg,
      [GetAdminDataFields.COLUMN_MARKETPLACES_AGG]: this.marketplacesAgg,
      [GetAdminDataFields.COLUMN_MONTHLY_TREND_AGG]: this.monthlyTrendAgg,
      [GetAdminDataFields.COLUMN_PARTNERS_AGG]: this.partnersAgg,
      [GetAdminDataFields.COLUMN_PERIOD]: this.period,
      [GetAdminDataFields.COLUMN_PAGINATION]: this.pagination,
      [GetAdminDataFields.COLUMN_RESULTS]: this.results,
      [GetAdminDataFields.COLUMN_SCORES_AGG]: this.scoresAgg,
      [GetAdminDataFields.COLUMN_SEVERITIES_AGG]: this.severitiesAgg,
    };
  }
}
