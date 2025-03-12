import { ArrowCompanyType, EndCustomerType, PartnerType } from './company';
import { ContactsType } from './contact';
import { GraphqlApiProgramType } from './program';
import { ItemData } from './quote';
import { SpecialPriceRateType } from './specialPriceRate';
import { GraphqlApiUnitType } from './unit';

export type OrdersType = {
  id?: number;
  arrowCompany?: ArrowCompanyType;
  arrowContact?: ContactsType;
  commitmentAmountTotal?: number;
  createdAt?: string;
  endCustomer?: EndCustomerType;
  endCustomerContact?: ContactsType;
  items?: OrderItemsType[];
  partner?: PartnerType;
  partnerContact?: ContactsType;
  poNumber?: string;
  reference?: string;
  status?: GraphqlApiOrderStatusType;
  totalRecurringPrice?: number;
  updatedAt?: string;
};

export type OrderItemsType = {
  id?: number;
  itemData?: ItemData;
  name?: string;
  priceRates?: SpecialPriceRateType[];
  program?: GraphqlApiProgramType;
  reference?: string;
  status?: GraphqlApiOrderStatusType;
};

export type GraphqlApiOrderSoftwareType = {
  id?: number;
  customerId?: number;
  totalAmount?: number;
  unit?: GraphqlApiUnitType;
};

export type GraphqlApiOrderStatusType = {
  id?: number;
  name?: string;
};
