import { SpecialPriceRateType } from './specialPriceRate';
import { GraphqlApiUnitType } from './unit';

export type OrdersType = {
  id?: number;
  items?: OrderItemsType[];
};

export type OrderItemsType = {
  id?: number;
  priceRates?: SpecialPriceRateType[];
};

export type GraphqlApiOrderSoftwareType = {
  id?: number;
  customerId?: number;
  totalAmount?: number;
  unit?: GraphqlApiUnitType;
};
