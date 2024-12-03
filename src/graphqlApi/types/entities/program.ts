import { PartnerType } from './company';
import { SubscriptionType } from './subscription';
import { VendorsType } from './vendor';

export type GraphqlApiProgramType = {
  id?: number;
  clickToAccept?: number;
  description?: string;
  expire?: number;
  internalName?: string;
  introduction?: string;
  levels?: ProgramLevelType[];
  name?: string;
  subscriptionDetailKeys?: SubscriptionDetailKeyType[];
  url?: string;
  vendor?: VendorsType;
};

export type SubscriptionDetailKeyType = {
  id?: number;
  name?: string;
  key?: string;
  specificProgramId?: number;
  isMandatory?: boolean;
  isSendXac?: boolean;
  type?: string;
  rule?: string;
  description?: string;
};

export type ProgramSkuPackAvailabilityType = {
  id?: number;
  programId?: number;
  levelId?: number;
  skuPackId?: number;
  countryGroupId?: number;
  startDate?: Date;
  endDate?: Date;
  programSkuPack?: ProgramSkuPackType;
};

export type ProgramSkuPackType = {
  id?: number;
  name?: string;
  description?: string;
  note?: string;
  packSku?: string;
  notAvailableToUser?: boolean;
  isCustom?: boolean;
  companyId?: number;
  programSkus?: ProgramSkuType[];
};

export type ProgramSkuType = {
  id?: number;
  description?: string;
  typeId?: number;
};

export type ProgramLevelType = {
  id?: number;
  uuid?: string;
  programId?: number;
  internalName?: string;
  name?: string;
  description?: string;
  imageLogo?: string;
  monthLength?: string;
  agreementId?: number;
  level?: number;
  enabled?: boolean;
  benefits?: ProgramBenefitType[];
  requirements?: ProgramRequirementType[];
  programSkuPackAvailabilities?: ProgramSkuPackAvailabilityType[];
};

export type ProgramBenefitType = {
  id?: number;
  uuid?: string;
  programId?: number;
  title?: string;
  description?: string;
};

export type ProgramRequirementType = {
  id?: number;
  uuid?: string;
  programId?: number;
  levelId?: number;
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
