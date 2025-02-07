import { PartnerType } from './company';
import { ContactsType } from './contact';
import { GraphqlApiProgramLevelType, GraphqlApiProgramType } from './program';

export type SubscriptionType = {
  id?: number;
  company?: PartnerType;
  level?: GraphqlApiProgramLevelType;
  localContact?: ContactsType;
  partnerContact?: ContactsType;
  partnerId?: string;
  program?: GraphqlApiProgramType;
};
