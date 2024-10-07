import { ContactsType } from './contact';
import { PartnertagType } from './partnertag';

export type UserType = {
  id?: number;
  allowDirectLogin?: boolean;
  contact?: ContactsType;
  role?: UserRole;
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

export type UserRole = {
  id?: number;
  name?: string;
};
