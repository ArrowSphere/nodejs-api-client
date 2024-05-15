import { PartnerType } from './company';
import { SubscriptionType } from './subscription';
import { VendorsType } from './vendor';

export type ProgramType = {
  id?: number;
  internalName?: string;
  name?: string;
  vendor?: VendorsType;
};

export type SubscribedProgramType = {
  id?: number;
  availabilityEndedAt?: string;
  availabilityStartedAt?: string;
  companyId?: number;
  internalName?: string;
  subscriptionEndedAt?: string;
  partner?: PartnerType;
  program?: ProgramType;
  subscription?: SubscriptionType;
  vendor?: VendorsType;
  vendorCode?: string;
  vendorName?: string;
  workgroupCode?: string;
};
