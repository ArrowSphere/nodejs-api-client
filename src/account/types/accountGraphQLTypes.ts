export type GetAccountType = {
  getUsers?: AccountAttributeType;
};

export type AccountAttributeType = {
  pagination?: AccountPagination;
  users?: Account[];
  filters?: AccountFilter[];
};

export type Account = {
  updatedBy?: string;
  updatedAt?: string;
  version?: number;
  isEnabled?: boolean;
  cognitoUsername?: string;
  authMethods?: string[];
  canSecureAccountUntil?: string;
  extraData?: AccountExtraData[];
  applications?: AccountApplication[];
  aliases?: AccountAliasInfo[];
};

export type AccountExtraData = {
  name?: string;
  value?: string;
};

export type AccountApplication = {
  updatedBy?: string;
  updatedAt?: string;
  version?: number;
  isEnabled?: boolean;
  extraData?: AccountExtraData[];
  applicationName?: string;
  rights?: string[];
  scopes?: string[];
  policies?: AccountPolicy[];
};

export type AccountPolicy = {
  policyName?: string;
  description?: string;
  updatedBy?: string;
  updatedAt?: string;
  version?: number;
  isEnabled?: boolean;
  scopes?: string[];
  rights?: string[];
};

export type AccountAliasInfo = {
  username?: string;
  providerName?: string;
  email?: string;
};

export type AccountPagination = {
  perPage?: number;
  currentPage?: number;
  totalPage?: number;
  total?: number;
  next?: string;
  previous?: string;
};

export type AccountFilter = {
  name?: string;
  value?: AccountFilterValues[];
};

export type AccountFilterValues = {
  value?: string;
  count?: number;
};
