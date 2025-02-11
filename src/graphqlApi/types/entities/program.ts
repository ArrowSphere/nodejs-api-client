import { PartnerType } from './company';
import { SubscriptionType } from './subscription';
import { VendorsType } from './vendor';

export type GraphqlApiProgramType = {
  id?: number;
  bypassReport?: number;
  internalName?: string;
  name?: string;
  vendor?: VendorsType;
  type?: GraphqlApiProgramTypeType;
};

export type GraphqlApiProgramTypeType = {
  id?: number;
  accronym?: string;
  name?: string;
};

export type GraphqlApiProgramLevelType = {
  id?: number;
  enabled?: boolean;
  internalName?: string;
  name?: string;
};

export type SubscribedProgramType = {
  id?: number;
  availabilityEndedAt?: string;
  availabilityStartedAt?: string;
  companyId?: number;
  internalName?: string;
  subscriptionEndedAt?: string;
  partner?: PartnerType;
  program?: GraphqlApiProgramType;
  subscription?: SubscriptionType;
  vendor?: VendorsType;
  vendorCode?: string;
  vendorName?: string;
  workgroupCode?: string;
};
