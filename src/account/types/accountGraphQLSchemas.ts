import {
  AccountAliasInfo,
  AccountExtraData,
  AccountFilterValues,
  AccountPagination,
  AccountPolicy,
} from './accountGraphQLTypes';
import { Schema } from 'type-fest';

export type AccountAttributeSchema = {
  pagination?: Schema<AccountPagination, boolean>;
  users?: AccountSchema;
  filters?: AccountFilterSchema;
};

export type AccountFilterSchema = {
  name?: boolean;
  value?: Schema<AccountFilterValues, boolean>;
};

export type AccountSchema = {
  updatedBy?: boolean;
  updatedAt?: boolean;
  version?: boolean;
  isEnabled?: boolean;
  cognitoUsername?: boolean;
  authMethods?: boolean;
  canSecureAccountUntil?: boolean;
  extraData?: Schema<AccountExtraData, boolean>;
  applications?: AccountApplicationSchema;
  aliases?: Schema<AccountAliasInfo, boolean>;
};

export type AccountApplicationSchema = {
  updatedBy?: boolean;
  updatedAt?: boolean;
  version?: boolean;
  isEnabled?: boolean;
  extraData?: Schema<AccountExtraData, boolean>;
  applicationName?: boolean;
  rights?: boolean;
  scopes?: boolean;
  policies?: Schema<AccountPolicy, boolean>;
};
