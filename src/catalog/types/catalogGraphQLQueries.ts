import { QueryArguments } from './queryArguments';
import {
  FiltersSchema,
  PaginationSchema,
  ProductSchema,
} from './catalogGraphQLSchemas';

export type CatalogQuery = {
  getProducts: GetPaginatedProductsQuery;
};

export declare type GetPaginatedProductsQuery = {
  __args: QueryArguments;
  filters?: FiltersSchema;
  pagination?: PaginationSchema;
  products?: ProductSchema;
  topOffers?: ProductSchema;
};
