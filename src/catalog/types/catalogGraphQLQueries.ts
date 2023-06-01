import {
  QueryPriceBandArguments,
  QueryProductArguments,
} from './queryProductArguments';
import {
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
