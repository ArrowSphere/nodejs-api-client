import { PartnerType } from './company';
import { ContactsType } from './contact';
import { ProgramType } from './program';

export type SubscriptionType = {
  id?: number;
  company?: PartnerType;
  localContact?: ContactsType;
  program?: ProgramType;
};
