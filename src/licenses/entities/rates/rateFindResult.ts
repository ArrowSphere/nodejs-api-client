import {
  DataKeywords,
  FiltersParameters,
  SortParameters,
} from '../../licensesClient';

export enum RateFindResultFields {
  COLUMN_TYPE = 'type',
  COLUMN_RATE = 'rate',
  COLUMN_LAST_UPDATE = 'lastUpdate',
}

export type RateFindResultDataFiltersParameters = {
  [RateFindResultFields.COLUMN_TYPE]?: FiltersParameters;
  [RateFindResultFields.COLUMN_RATE]?: FiltersParameters;
  [RateFindResultFields.COLUMN_LAST_UPDATE]?: FiltersParameters;
};

export type RateFindResultDataKeywords = {
  [RateFindResultFields.COLUMN_TYPE]?: DataKeywords;
  [RateFindResultFields.COLUMN_RATE]?: DataKeywords;
  [RateFindResultFields.COLUMN_LAST_UPDATE]?: DataKeywords;
};

export enum RatesFindResultFields {
  COLUMN_ARROW_BUY_RATE = 'arrowBuyRate',
  COLUMN_ARROW_SELL_RATE = 'arrowSellRate',
  COLUMN_MSP_SELL_RATE = 'mspSellRate',
  COLUMN_MSP_OFFER_RATE = 'mspOfferRate',
}

export type RatesFiltersParameters = {
  [RatesFindResultFields.COLUMN_ARROW_BUY_RATE]?: RateFindResultDataFiltersParameters;
  [RatesFindResultFields.COLUMN_ARROW_SELL_RATE]?: RateFindResultDataFiltersParameters;
  [RatesFindResultFields.COLUMN_MSP_SELL_RATE]?: RateFindResultDataFiltersParameters;
  [RatesFindResultFields.COLUMN_MSP_OFFER_RATE]?: RateFindResultDataFiltersParameters;
};

export type RatesDataKeywords = {
  [RatesFindResultFields.COLUMN_ARROW_BUY_RATE]?: RateFindResultDataKeywords;
  [RatesFindResultFields.COLUMN_ARROW_SELL_RATE]?: RateFindResultDataKeywords;
  [RatesFindResultFields.COLUMN_MSP_SELL_RATE]?: RateFindResultDataKeywords;
  [RatesFindResultFields.COLUMN_MSP_OFFER_RATE]?: RateFindResultDataKeywords;
};

export type RateFindResultDataSortParameters = {
  [RateFindResultFields.COLUMN_TYPE]?: SortParameters;
  [RateFindResultFields.COLUMN_RATE]?: SortParameters;
  [RateFindResultFields.COLUMN_LAST_UPDATE]?: SortParameters;
};

export type RatesSortParameters = {
  [RatesFindResultFields.COLUMN_MSP_SELL_RATE]?: RateFindResultDataSortParameters;
  [RatesFindResultFields.COLUMN_MSP_OFFER_RATE]?: RateFindResultDataSortParameters;
  [RatesFindResultFields.COLUMN_ARROW_BUY_RATE]?: RateFindResultDataSortParameters;
  [RatesFindResultFields.COLUMN_ARROW_SELL_RATE]?: RateFindResultDataSortParameters;
};
