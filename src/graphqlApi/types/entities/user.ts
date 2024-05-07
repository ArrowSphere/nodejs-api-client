import { ContactsType } from './contact';

export type UserType = {
  id?: number;
  allowDirectLogin?: boolean;
  contact?: ContactsType;
  extraData?: UserExtraDataType;
  validatedAt?: string;
};

export type UserExtraDataType = {
  id?: number;
  canBeDeleted?: boolean;
};

export type UserHistoryType = {
  id?: number;
  action?: string;
  createdAt?: string;
  description?: string;
  impactedUser?: UserType;
  originatorUser?: UserType;
};
