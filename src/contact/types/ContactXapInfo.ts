export type AliasInfo = {
  username?: string;
  providerName?: string;
  email?: string;
};

export type ExtraData = {
  name?: string;
  value?: string;
  application?: string;
};

export type ContactXapInfo = {
  aliases?: AliasInfo[];
  authMethods?: string[];
  canSecureAccountUntil?: string;
  cognitoUsername?: string;
  extraData?: ExtraData[];
  isEnabled?: boolean;
  lastLogin?: { date?: string };
  policies?: string[];
  rights?: string[];
  scopes?: string[];
  updatedAt?: string;
  updatedBy?: string;
};
