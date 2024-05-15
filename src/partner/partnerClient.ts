import { AbstractRestfulClient, Parameters } from '../abstractRestfulClient';

export enum UpdateUserActionEnum {
  ALLOW_DIRECT_LOGIN = 'allow-direct-login',
  BLOCK_DIRECT_LOGIN = 'block-direct-login',
  DISABLE_ALIAS = 'disable-alias',
  LOCK = 'lock',
  DISABLE_MFA = 'remove-mfa',
  UNLOCK = 'unlock',
  UNLOCK_INSECURE_LOGIN = 'unlock-insecure-login',
  //VALIDATE = 'validate'
}

export enum PatchUserPayloadFields {
  COLUMN_FIRSTNAME = 'firstname',
  COLUMN_LASTNAME = 'lastname',
  COLUMN_PHONE = 'phone',
  COLUMN_TITLE = 'title',
  COLUMN_IS_LOCKED = 'isLocked',
  COLUMN_ORGANIZATION_UNIT_REF = 'organizationUnitRef',
  COLUMN_ACTION = 'action',
  COLUMN_PROVIDER_NAME = 'providerName',
}

export type PatchUserPayload = {
  [PatchUserPayloadFields.COLUMN_FIRSTNAME]?: string;
  [PatchUserPayloadFields.COLUMN_LASTNAME]?: string;
  [PatchUserPayloadFields.COLUMN_PHONE]?: string;
  [PatchUserPayloadFields.COLUMN_TITLE]?: string;
  [PatchUserPayloadFields.COLUMN_ORGANIZATION_UNIT_REF]?: string;
  [PatchUserPayloadFields.COLUMN_ACTION]?: string;
  [PatchUserPayloadFields.COLUMN_PROVIDER_NAME]?: string;
};

export class PartnerClient extends AbstractRestfulClient {
  protected basePath = '/partners';

  public async deletePartner(
    partnerReference: string,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${partnerReference}`;

    return this.delete(parameters);
  }

  public async patchUser(
    partnerReference: string,
    userReference: string,
    payload: PatchUserPayload,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${partnerReference}/users/${userReference}`;

    return await this.patch(payload, parameters);
  }

  public async lockUser(
    partnerReference: string,
    userReference: string,
    parameters: Parameters = {},
  ): Promise<void> {
    return await this.patchUser(
      partnerReference,
      userReference,
      { action: UpdateUserActionEnum.LOCK },
      parameters,
    );
  }

  public async unlockUser(
    partnerReference: string,
    userReference: string,
    parameters: Parameters = {},
  ): Promise<void> {
    return await this.patchUser(
      partnerReference,
      userReference,
      { action: UpdateUserActionEnum.UNLOCK },
      parameters,
    );
  }

  public async allowDirectLoginUser(
    partnerReference: string,
    userReference: string,
    parameters: Parameters = {},
  ): Promise<void> {
    return await this.patchUser(
      partnerReference,
      userReference,
      { action: UpdateUserActionEnum.ALLOW_DIRECT_LOGIN },
      parameters,
    );
  }

  public async blockDirectLoginUser(
    partnerReference: string,
    userReference: string,
    parameters: Parameters = {},
  ): Promise<void> {
    return await this.patchUser(
      partnerReference,
      userReference,
      { action: UpdateUserActionEnum.BLOCK_DIRECT_LOGIN },
      parameters,
    );
  }

  public async disableMfaUser(
    partnerReference: string,
    userReference: string,
    parameters: Parameters = {},
  ): Promise<void> {
    return await this.patchUser(
      partnerReference,
      userReference,
      { action: UpdateUserActionEnum.DISABLE_MFA },
      parameters,
    );
  }

  public async disableAliasUser(
    partnerReference: string,
    userReference: string,
    providerName: string,
    parameters: Parameters = {},
  ): Promise<void> {
    return await this.patchUser(
      partnerReference,
      userReference,
      {
        action: UpdateUserActionEnum.DISABLE_ALIAS,
        providerName,
      },
      parameters,
    );
  }

  public async unlockInsecureLoginUser(
    partnerReference: string,
    userReference: string,
    parameters: Parameters = {},
  ): Promise<void> {
    return await this.patchUser(
      partnerReference,
      userReference,
      { action: UpdateUserActionEnum.UNLOCK_INSECURE_LOGIN },
      parameters,
    );
  }
}
