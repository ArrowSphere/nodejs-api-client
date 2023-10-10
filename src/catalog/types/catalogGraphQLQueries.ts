import {
  QueryExchangeRatesArguments,
  QueryExchangeRateValueArguments,
  QueryPriceBandArguments,
  QueryProductArguments,
} from './queryProductArguments';
import {
  ExchangeRateSchema,
  ExchangeRateValueSchema,
  FiltersSchema,
  PaginationSchema,
  PriceBandSchema,
  ProductSchema,
} from './catalogGraphQLSchemas';
import { Merge } from 'type-fest';

/**
 * @deprecated
 * Prefer using CatalogQueries instead.
 */
export type CatalogQuery = {
  getProducts: GetPaginatedProductsQuery;
};

/**
 * Represent the Catalog Schema of Public API
 */
export type CatalogQueries = {
  getExchangeRates?: GetExchangeRatesQuery;
  exchangeRate?: GetExchangeRateValueQuery;
  getPriceBands?: GetPriceBandsQuery;
  getProducts?: GetPaginatedProductsQuery;
  priceBand?: GetPriceBandQuery;
  product?: GetProductQuery;
};

export type GetPaginatedProductsQuery = {
  __args: QueryProductArguments;
  filters?: FiltersSchema;
  pagination?: PaginationSchema;
  products?: ProductSchema;
  topOffers?: ProductSchema;
};

export type GetProductQuery = Merge<
  { __args: QueryProductArguments },
  ProductSchema
>;

export type GetPriceBandQuery = Merge<
  { __args: QueryPriceBandArguments },
  PriceBandSchema
>;

export type GetPriceBandsQuery = Merge<
  { __args: QueryPriceBandArguments },
  { priceBands: PriceBandSchema }
>;

export type GetExchangeRatesQuery = Merge<
  { __args: QueryExchangeRatesArguments },
  ExchangeRateSchema
>;

export type GetExchangeRateValueQuery = Merge<
  { __args: QueryExchangeRateValueArguments },
  ExchangeRateValueSchema
>;
