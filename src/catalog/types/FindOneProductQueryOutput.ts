import { PriceBandType, ProductType } from './catalogGraphQLTypes';

export type FindOneProductQueryOutput = {
  product: ProductType;
};

export type FindOnePriceBandQueryOutput = {
  priceBand: PriceBandType;
};
