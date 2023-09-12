import {
  ExchangeRateType,
  ExchangeRateValueType,
  PriceBandType,
  ProductType,
} from './catalogGraphQLTypes';

export type FindOneProductQueryOutput = {
  product: ProductType;
};

export type FindOnePriceBandQueryOutput = {
  priceBand: PriceBandType;
};

export type FindExchangeRatesQueryOutput = {
  exchangeRates: ExchangeRateType[];
};

export type FindExchangeRateValueQueryOutput = {
  exchangeRate: ExchangeRateValueType;
};
