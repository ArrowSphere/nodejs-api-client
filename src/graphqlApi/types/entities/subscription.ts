import { PartnerType } from './company';
import { ContactsType } from './contact';
import { GraphqlApiProgramLevelType, GraphqlApiProgramType } from './program';

export type SubscriptionType = {
  id?: number;
  auroReporting?: boolean;
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
};
