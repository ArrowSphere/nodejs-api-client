import { CountryType } from './country';
import { Currency } from './currency';
import { PartnertagType } from './partnertag';
import { WorkgroupType } from './workgroup';

export type CompanyTypeType = {
  id?: number;
  type?: string;
};

type BaseCompanyType = {
  acronym?: string;
  address1?: string;
  address2?: string;
  billingId?: string;
  city?: string;
  createdAt?: string;
  deletedAt?: string;
  enabled?: boolean;
  erpId?: string;
  id?: number;
  internalReference?: string;
  locked?: boolean;
  name?: string;
  partnerRef?: string;
  partnerTags?: PartnertagType[];
  phone?: string;
  resellerId?: number;
  state?: string;
  vatNumber?: string;
  zip?: string;
};

export type EndCustomerType = BaseCompanyType & {
  partner?: PartnerType;
};

type CountableType = {
  id?: number;
  total?: number;
};

export type PartnerType = BaseCompanyType & {
  currency?: Currency;
  country?: CountryType;
  type?: CompanyTypeType;
  workgroup?: WorkgroupType;
  subscriptionsPendingCount?: CountableType;
  subscriptionsCount?: CountableType;
  ordersNeedCount?: CountableType;
  reportsCount?: CountableType;
  ordersCount?: CountableType;
  customersCount?: CountableType;
  contactsCount?: CountableType;
};

export type ArrowCompanyType = Omit<BaseCompanyType, 'partnerTags'>;
