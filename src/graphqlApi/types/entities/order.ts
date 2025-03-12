import { ArrowCompanyType, EndCustomerType, PartnerType } from './company';
import { ContactsType } from './contact';
import { GraphqlApiEavType } from './eav';
import { GraphqlApiProgramType } from './program';
import { ItemData, QuoteType } from './quote';
import { SpecialPriceRateType } from './specialPriceRate';
import { GraphqlApiUnitType } from './unit';
import { UserType } from './user';

export type OrdersType = {
  id?: number;
  arrowCompany?: ArrowCompanyType;
  arrowContact?: ContactsType;
  commitmentAmountTotal?: number;
  createdAt?: string;
  eavs?: GraphqlApiEavType[];
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
  scheduledAt?: string;
  status?: GraphqlApiOrderStatusType;
  totalRecurringPrice?: number;
  updatedAt?: string;
};

export type OrderItemsType = {
  id?: number;
  itemData?: ItemData;
  migratedFrom?: GraphqlApiOrderLinkType[];
  migratedTo?: GraphqlApiOrderLinkType[];
  name?: string;
  order?: OrdersType;
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

export type GraphqlApiOrderLinkType = {
  from?: OrderItemsType;
  migratedAt?: string;
  to?: OrderItemsType;
};

export type GraphqlApiOrderHistoryType = {
  id?: number;
  action?: string;
  createdAt?: string;
  description?: string;
  order?: OrdersType;
  user?: UserType;
};
