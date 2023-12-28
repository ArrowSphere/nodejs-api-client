import { SpecialPriceRateType } from './specialPriceRate';

export type OrdersType = {
  id?: number;
  items?: OrderItemsType[];
};

export type OrderItemsType = {
  id?: number;
  priceRates?: SpecialPriceRateType[];
};
