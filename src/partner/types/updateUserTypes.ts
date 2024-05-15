export enum UpdateUserActionEnum {
  ALLOW_DIRECT_LOGIN = 'allow-direct-login',
  BLOCK_DIRECT_LOGIN = 'block-direct-login',
  DISABLE_ALIAS = 'disable-alias',
  LOCK = 'lock',
  DISABLE_MFA = 'remove-mfa',
  UNLOCK = 'unlock',
  UNLOCK_INSECURE_LOGIN = 'unlock-insecure-login',
  VALIDATE = 'validate',
}

export enum UpdateScopeUserPayloadFields {
  COLUMN_ENTITIES = 'entities',
  COLUMN_IMPERSONATIONS = 'impersonations',
  COLUMN_ORGANIZATIONUNIT = 'organizationUnit',
  COLUMN_PROGRAMS = 'programs',
  COLUMN_ROLE = 'role',
  COLUMN_TAGS = 'tags',
}

export type UpdateScopeUserPayload = {
  [UpdateScopeUserPayloadFields.COLUMN_ENTITIES]?: string[];
  [UpdateScopeUserPayloadFields.COLUMN_IMPERSONATIONS]?: string[];
  [UpdateScopeUserPayloadFields.COLUMN_ORGANIZATIONUNIT]?: string;
  [UpdateScopeUserPayloadFields.COLUMN_PROGRAMS]?: string[];
  [UpdateScopeUserPayloadFields.COLUMN_ROLE]?: string;
  [UpdateScopeUserPayloadFields.COLUMN_TAGS]?: string[];
};
