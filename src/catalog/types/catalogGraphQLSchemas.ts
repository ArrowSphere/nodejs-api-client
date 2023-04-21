// Here are the schemas, they are useful to build the graphql requests

import {
  AttributeType,
  FiltersType,
  IdentifiersType,
  PaginationType,
  PriceBandType,
  PricesType,
  ProductType,
  RelatedOfferType,
} from './catalogGraphQLTypes';
import { Merge, Schema } from 'type-fest';

export type PaginationSchema = Schema<PaginationType, boolean>;

export type FiltersSchema = Schema<FiltersType, boolean>;

type IdentifiersSchema = Schema<IdentifiersType, boolean>;
type RelatedOfferSchema = Schema<RelatedOfferType, boolean>;

/**
 * Field of type array are not handled by Schema<>, they must be overwritten
 */
type MissingFieldsOfProductSchema = {
  addonPrimaries?: IdentifiersSchema;
  baseOfferPrimaries?: IdentifiersSchema;
  conversionOfferPrimaries?: IdentifiersSchema;
  relatedOffers?: RelatedOfferSchema;
  priceBand?: PriceBandSchema;
};

export type ProductSchema = Merge<
  Schema<ProductType, boolean>,
  MissingFieldsOfProductSchema
>;

type AttributeSchema = Schema<AttributeType, boolean>;
/**
 * Field of type array are not handled by Schema, they must be overwritten
 */
type MissingFieldsOfPriceBandSchema = {
  attributes?: Array<AttributeSchema>;
};
/**
 * No type corresponding
 */
export type PriceBandSchema = Merge<
  Schema<PriceBandType, boolean>,
  MissingFieldsOfPriceBandSchema
>;

export type PriceBandPriceSchema = Schema<PricesType, boolean>;
