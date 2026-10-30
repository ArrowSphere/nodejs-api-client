import { ContactsType } from './contact';
import { PartnertagType } from './partnertag';
import { SecurityRoleType } from './securityRole';

export type UserType = {
  id?: number;
  allowDirectLogin?: boolean;
  contact?: ContactsType;
  login?: string;
  userTags?: PartnertagType[];
  validatedAt?: string;
  lastLoginAt?: string;
  locked?: boolean;
  canBeDeleted?: boolean;
  role?: SecurityRoleType;
};

export type UserHistoryType = {
  id?: number;
  action?: string;
  createdAt?: string;
  description?: string;
  impactedUser?: UserType;
  originatorUser?: UserType;
};
