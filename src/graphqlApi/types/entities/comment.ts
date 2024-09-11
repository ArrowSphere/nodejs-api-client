import { UserType } from './user';

export type Comment = {
  id?: number;
  body?: string;
  createdAt?: string;
  user?: UserType;
};
