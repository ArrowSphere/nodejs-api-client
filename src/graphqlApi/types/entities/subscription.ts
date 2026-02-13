import { PartnerType } from './company';
import { ContactsType } from './contact';
import { GraphqlApiProgramLevelType, GraphqlApiProgramType } from './program';

export type SubscriptionStatusType = {
  id?: number;
  name?: string;
};

export type SubscriptionType = {
  id?: number;
  autoReporting?: boolean;
  company?: PartnerType;
  endedAt?: string;
  level?: GraphqlApiProgramLevelType;
  localContact?: ContactsType;
  orderId?: string;
  partnerContact?: ContactsType;
  partnerId?: string;
  program?: GraphqlApiProgramType;
  startedAt?: string;
  userNote?: string;
  validatedAt?: string;
  status?: SubscriptionStatusType;
};
