import { ArrowCompanyType, EndCustomerType, PartnerType } from './company';
import { ContactsType } from './contact';
import { GraphqlApiProgramType } from './program';
import { ItemData, QuoteType } from './quote';
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
  endCustomerPoNumber?: string;
  fulfilledAt?: string;
  items?: OrderItemsType[];
  partner?: PartnerType;
  partnerContact?: ContactsType;
  partnerPoNumber?: string;
  quote?: QuoteType;
  reference?: string;
  scheludedAt?: string;
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
