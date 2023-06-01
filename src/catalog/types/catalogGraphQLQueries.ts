import { QueryArguments } from './queryArguments';
import {
  FiltersSchema,
  PaginationSchema,
  ProductSchema,
} from './catalogGraphQLSchemas';
import { Merge } from 'type-fest';

/**
 * Represent the Catalog Schema of Public API
 */
export type CatalogQuery = {
  getProducts?: GetPaginatedProductsQuery;
  product?: GetProductQuery;
};

export type GetPaginatedProductsQuery = {
  __args: QueryArguments;
  filters?: FiltersSchema;
  pagination?: PaginationSchema;
  products?: ProductSchema;
  topOffers?: ProductSchema;
};

export type GetProductQuery = Merge<{ __args: QueryArguments }, ProductSchema>;
