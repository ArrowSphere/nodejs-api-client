import { ContactsType } from './contact';

export type UserType = {
  id?: number;
  allowDirectLogin?: boolean;
  validatedAt?: string;
  contact?: ContactsType;
};

export type UserHistoryType = {
  id?: number;
  action?: string;
  createdAt?: string;
  description?: string;
  impactedUser?: UserType;
  originatorUser?: UserType;
};
