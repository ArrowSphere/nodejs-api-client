import { PartnerType } from './company';
import { GraphqlApiDisclaimerType } from './disclaimer';
import { SubscriptionType } from './subscription';
import { VendorsType } from './vendor';

export type GraphqlApiProgramType = {
  id?: number;
  bypassReport?: number;
  description?: string;
  disclaimer?: GraphqlApiDisclaimerType;
  internalName?: string;
  introduction?: string;
  levels?: ProgramLevelType[];
  name?: string;
  subscriptionExtraFields?: SubscriptionExtraFieldType[];
  type?: GraphqlApiProgramTypeType;
  url?: string;
  vendor?: VendorsType;
  vendorReference?: string;
  xacVendorCode?: string;
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

export type SubscriptionExtraFieldType = {
  name?: string;
  key?: string;
  isMandatory?: boolean;
  type?: string;
  rule?: string;
  description?: string;
};

export type ProgramLevelOptionGroupType = {
  name?: string;
  notAvailable?: boolean;
  sku?: string;
  programLevelOptions?: ProgramLevelOptionType[];
};

export type ProgramLevelOptionType = {
  id?: number;
  description?: string;
  typeId?: number;
};

export type ProgramLevelType = {
  internalName?: string;
  level?: number;
  name?: string;
  benefits?: ProgramBenefitType[];
  requirements?: ProgramRequirementType[];
  programLevelOptionGroups?: ProgramLevelOptionGroupType[];
};

export type ProgramBenefitType = {
  id?: number;
  title?: string;
  description?: string;
};

export type ProgramRequirementType = {
  title?: string;
  description?: string;
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
