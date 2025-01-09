import { ContactsType } from './contact';
import { PartnertagType } from './partnertag';

export type UserType = {
  id?: number;
  allowDirectLogin?: boolean;
  contact?: ContactsType;
  login?: string;
  userTags?: PartnertagType[];
  validatedAt?: string;
};

export type UserHistoryType = {
  id?: number;
  action?: string;
  createdAt?: string;
  description?: string;
  impactedUser?: UserType;
  originatorUser?: UserType;
};
