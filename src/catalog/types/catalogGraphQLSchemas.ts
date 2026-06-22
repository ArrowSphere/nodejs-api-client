// Here are the schemas, they are useful to build the graphql requests

import {
  AttributesParameters,
  AttributeType,
  BundleBillingRuleType,
  ExchangeRateType,
  ExchangeRateValueType,
  FiltersType,
  IdentifiersType,
  PaginationType,
  PriceBandType,
  PricesType,
  ProductType,
  PromotionPricesFull,
  PromotionType,
  RelatedOfferType,
} from './catalogGraphQLTypes';
import { Merge, Schema } from 'type-fest';

export type PaginationSchema = Schema<PaginationType, boolean>;

export type FiltersSchema = Schema<FiltersType, boolean>;

type AttributesParametersSchema = Schema<AttributesParameters, boolean>;
type BundleBillingRuleSchema = Schema<BundleBillingRuleType, boolean>;
type IdentifiersSchema = Schema<IdentifiersType, boolean>;
type RelatedOfferSchema = Schema<RelatedOfferType, boolean>;
type PromotionSchema = Schema<PromotionType, boolean>;

/**
 * Field of type array are not handled by Schema, they must be overwritten
 */
type MissingFieldsOfProductSchema = {
  addonPrimaries?: IdentifiersSchema;
  attributesParameters?: AttributesParametersSchema;
  baseOfferPrimaries?: IdentifiersSchema;
  conversionOfferPrimaries?: IdentifiersSchema;
  defaultPriceBand?: PriceBandSchema;
  relatedOffers?: RelatedOfferSchema;
  promotions?: PromotionSchema;
};

export type MissingFieldsOfBundleProductSchema = {
  bundleBaseProducts?: ProductSchemaBundleItem;
  bundleBillingRules?: BundleBillingRuleSchema;
  bundledOfferPrimaries?: IdentifiersSchema;
};

export type ProductSchemaBundleItem = Merge<
  Schema<ProductType, boolean>,
  MissingFieldsOfProductSchema
>;
export type ProductSchema = Merge<
  Schema<ProductType, boolean>,
  MissingFieldsOfProductSchema &
    MissingFieldsOfBundleProductSchema & { priceBand?: PriceBandSchema }
>;

type AttributeSchema = Schema<AttributeType, boolean>;

type PromotionPricesFullSchema = Merge<
  Schema<PromotionPricesFull, boolean>,
  { attributes?: AttributeSchema }
>;

/**
 * Field of type array are not handled by Schema, they must be overwritten
 */
type MissingFieldsOfPriceBandSchema = {
  attributes?: AttributeSchema;
  promotionsPrices?: PromotionPricesFullSchema;
};
/**
 * No type corresponding
 */
export type PriceBandSchema = Merge<
  Schema<PriceBandType, boolean>,
  MissingFieldsOfPriceBandSchema
>;

export type PriceBandPriceSchema = Schema<PricesType, boolean>;

export type ExchangeRateSchema = Schema<ExchangeRateType, boolean>;

export type ExchangeRateValueSchema = Schema<ExchangeRateValueType, boolean>;
