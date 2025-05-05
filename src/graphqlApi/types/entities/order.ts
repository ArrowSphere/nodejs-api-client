import { ArrowCompanyType, EndCustomerType, PartnerType } from './company';
import { ContactsType } from './contact';
import { GraphqlApiContributorType } from './contributor';
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
  contributor?: GraphqlApiContributorType;
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
  poNumber?: string;
  quote?: QuoteType;
  reference?: string;
  scheduledAt?: string;
  status?: GraphqlApiOrderStatusType;
  totalRecurringPrice?: number;
  updatedAt?: string;
  uuid?: number;
};

export type OrderItemsType = {
  id?: number;
  isAddon?: boolean;
  itemData?: ItemData;
  migratedFrom?: GraphqlApiOrderLinkType[];
  migratedTo?: GraphqlApiOrderLinkType[];
  name?: string;
  order?: OrdersType;
  priceRates?: SpecialPriceRateType[];
  program?: GraphqlApiProgramType;
  provisionError?: string;
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

export type GraphqlApiOrderListType = {
  id?: number;
  country?: string;
  createdAt?: string;
  createdBy?: string;
  createdByImpersonate?: string;
  endCustomerName?: string;
  orderType?: string;
  partnerName?: string;
  programName?: string;
  partnerId?: number;
  partnerTags?: string;
  programId?: number;
  reference?: string;
  scheduledAt?: string;
  status?: string;
  statusId?: number;
  totalCommitment?: number;
  totalPrice?: number;
  unitSymbol?: string;
  updatedAt?: string;
  uuid?: number;
  vendorName?: string;
};
