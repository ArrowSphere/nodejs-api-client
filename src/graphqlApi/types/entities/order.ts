import { EndCustomerType, PartnerType } from './company';
import { GraphqlApiProgramType } from './program';
import { ItemData } from './quote';
import { SpecialPriceRateType } from './specialPriceRate';
import { GraphqlApiUnitType } from './unit';

export type OrdersType = {
  id?: number;
  endCustomer?: EndCustomerType;
  items?: OrderItemsType[];
  partner?: PartnerType;
};

export type OrderItemsType = {
  id?: number;
  itemData?: ItemData;
  name?: string;
  priceRates?: SpecialPriceRateType[];
  program?: GraphqlApiProgramType;
  reference?: string;
};

export type GraphqlApiOrderSoftwareType = {
  id?: number;
  customerId?: number;
  totalAmount?: number;
  unit?: GraphqlApiUnitType;
};
