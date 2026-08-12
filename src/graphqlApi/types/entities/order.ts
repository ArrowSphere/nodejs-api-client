import { Comment } from './comment';
import { ArrowCompanyType, EndCustomerType, PartnerType } from './company';
import { ContactsType } from './contact';
import { GraphqlApiContributorType } from './contributor';
import { CurrencyType } from './currency';
import { GraphqlApiEavType } from './eav';
import { GraphqlApiProgramType } from './program';
import { ItemData, QuoteType } from './quote';
import { GraphqlApiReportType } from './report';
import { SpecialPriceRateType } from './specialPriceRate';
import { SubscriptionType } from './subscription';
import { GraphqlApiTaxType } from './tax';
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
  totalAmountEnded?: number;
  totalAmountUnit?: CurrencyType;
  unit?: GraphqlApiUnitType;
  createdDate?: string;
  customName?: string;
  dateBegin?: string;
  dateEnd?: string;
  dateLastModified?: string;
  dateSent?: string;
  dateValidation?: string;
  totalQuantity?: number;
  totalUnit?: CurrencyType;
  sumTotalUnit?: CurrencyType;
  discountRatio?: number;
  comments?: Comment[];
  aggregatorErpNo?: string;
  customerPo?: string;
  endUserCompany?: PartnerType;
  status?: GraphqlApiOrderSoftwareStatusType;
  taxes?: GraphqlApiTaxType[];
  report?: GraphqlApiReportType;
  subscription?: SubscriptionType;
};

export type GraphqlApiOrderSoftwareStatusType = {
  id?: number;
  name?: string;
};

export type GraphqlApiOrderStatusType = {
  id?: number;
  name?: string;
};

export type GraphqlApiOrderLinkType = {
  from?: OrderItemsType;
  migratedAt?: string;
  to?: OrderItemsType;
  fromId: number;
  toId: number;
};

export type GraphqlApiOrderHistoryType = {
  id?: number;
  action?: string;
  createdAt?: string;
  description?: string;
  order?: OrdersType;
  user?: UserType;
};

export type GraphqlApiOrderSoftwareHistoryType = {
  id?: number;
  action?: string;
  createdAt?: string;
  description?: string;
  orderSoftware?: GraphqlApiOrderSoftwareType;
  user?: UserType;
};

export type GraphqlApiOrderListType = {
  id?: number;
  country?: string;
  createdAt?: string;
  createdBy?: string;
  createdByImpersonate?: string;
  currency?: string;
  customerPo?: string;
  endCustomerName?: string;
  orderType?: string;
  partnerId?: string;
  partnerName?: string;
  partnerPo?: string;
  partnerTags?: string;
  programId?: number;
  programName?: string;
  reference?: string;
  scheduledAt?: string;
  status?: string;
  statusId?: number;
  totalCommitment?: number;
  totalPrice?: number;
  updatedAt?: string;
  uuid?: number;
  vendorName?: string;
};
