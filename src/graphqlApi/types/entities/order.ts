import { PartnerType } from './company';
import { SpecialPriceRateType } from './specialPriceRate';

export type OrdersType = {
  id?: number;
  items?: OrderItemsType[];
  partner?: PartnerType;
};

export type OrderItemsType = {
  id?: number;
  order?: OrdersType;
  priceRates?: SpecialPriceRateType[];
};
