import { CountryType } from './country';
import { PartnertagType } from './partnertag';
import { WorkgroupType } from './workgroup';

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
  state?: string;
  vatNumber?: string;
  zip?: string;
};

export type EndCustomerType = BaseCompanyType & {
  partner?: PartnerType;
};

export type PartnerType = BaseCompanyType & {
  country?: CountryType;
  workgroup?: WorkgroupType;
};

export type ArrowCompanyType = Omit<BaseCompanyType, 'partnerTags'>;
