import { OrganizationUnitsType } from './organizationUnit';
import { ContactsType } from './contact';
import { CountableType } from './counting';
import { CountryType } from './country';
import { CurrencyType } from './currency';
import { OrdersType } from './order';
import { PartnertagType } from './partnertag';
import { SubscribedProgramType } from './program';
import { SubscriptionType } from './subscription';
import { WorkgroupType } from './workgroup';

export type CompanyTypeType = {
  id?: number;
  type?: string;
};

export type BaseCompanyType = {
  acronym?: string;
  address1?: string;
  address2?: string;
  billingId?: string;
  city?: string;
  contacts?: ContactsType[];
  createdAt?: string;
  deletedAt?: string;
  enabled?: boolean;
  erpId?: string;
  extraInformations?: CompanyExtraInformation[];
  id?: number;
  internalReference?: string;
  locked?: boolean;
  name?: string;
  orders?: OrdersType[];
  partnerRef?: string;
  partnerTags?: PartnertagType[];
  phone?: string;
  resellerId?: number;
  state?: string;
  type?: CompanyTypeType;
  vatNumber?: string;
  workgroup?: WorkgroupType;
  zip?: string;
};

export type EndCustomerType = BaseCompanyType & {
  country?: CountryType;
  ordersCount?: number;
  organizationUnit?: OrganizationUnitsType;
  partner?: PartnerType;
  reportsCount?: number;
};

export type CompanyExtraInformation = {
  id?: number;
  companyId?: number;
  code?: string;
  label?: string;
  name?: string;
  type?: string;
  value?: string;
  programName?: string;
};

export type PartnerType = BaseCompanyType & {
  contactsCount?: CountableType;
  country?: CountryType;
  currency?: CurrencyType;
  customersCount?: CountableType;
  ordersCount?: CountableType;
  ordersNeedCount?: CountableType;
  ordersSaasCount?: CountableType;
  organizationUnits?: OrganizationUnitsType[];
  reportsCount?: CountableType;
  subscribedPrograms?: SubscribedProgramType[];
  subscriptions?: SubscriptionType[];
  subscriptionsCount?: CountableType;
  subscriptionsPendingCount?: CountableType;
};

export type ArrowCompanyType = Omit<BaseCompanyType, 'partnerTags'> & {
  subscriptions?: SubscriptionType[];
};
