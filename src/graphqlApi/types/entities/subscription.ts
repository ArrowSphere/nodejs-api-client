import { PartnerType } from './company';
import { ContactsType } from './contact';
import { PartnertagType } from './partnertag';
import { GraphqlApiProgramLevelType, GraphqlApiProgramType } from './program';

export type SubscriptionType = {
  id?: number;
  agreement?: GraphqlApiSubscriptionAgreementType;
  autoReporting?: boolean;
  clicktoAccept?: boolean;
  company?: PartnerType;
  demandedAt?: string;
  enabled?: boolean;
  endedAt?: string;
  level?: GraphqlApiProgramLevelType;
  localContact?: ContactsType;
  orderId?: string;
  partnerContact?: ContactsType;
  partnerId?: string;
  partnerTags?: PartnertagType[];
  program?: GraphqlApiProgramType;
  startedAt?: string;
  status?: GraphqlApiSubscriptionStatusType;
  updatedAt?: string;
  userNote?: string;
  validatedAt?: string;
};

export type GraphqlApiSubscriptionStatusType = {
  id?: number;
  name?: string;
};

export type GraphqlApiSubscriptionAgreementType = {
  id?: number;
  lastVersion?: number;
  total?: number;
};
