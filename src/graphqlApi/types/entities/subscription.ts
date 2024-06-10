import { PartnerType } from './company';
import { ContactsType } from './contact';
import { GraphqlApiProgramType } from './program';

export type SubscriptionType = {
  id?: number;
  company?: PartnerType;
  localContact?: ContactsType;
  program?: GraphqlApiProgramType;
};
