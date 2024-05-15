import { AbstractRestfulClient, Parameters } from '../abstractRestfulClient';
import {
  UpdateScopeUserPayload,
  UpdateUserActionEnum,
} from './types/updateUserTypes';

export enum PatchUserPayloadFields {
  COLUMN_FIRSTNAME = 'firstname',
  COLUMN_LASTNAME = 'lastname',
  COLUMN_PHONE = 'phone',
  COLUMN_TITLE = 'title',
  COLUMN_IS_LOCKED = 'isLocked',
  COLUMN_ORGANIZATION_UNIT_REF = 'organizationUnitRef',
  COLUMN_ACTION = 'action',
  COLUMN_ALIAS_USERNAME = 'aliasUsername',
}

export type PatchUserPayload = {
  [PatchUserPayloadFields.COLUMN_FIRSTNAME]?: string;
  [PatchUserPayloadFields.COLUMN_LASTNAME]?: string;
  [PatchUserPayloadFields.COLUMN_PHONE]?: string;
  [PatchUserPayloadFields.COLUMN_TITLE]?: string;
  [PatchUserPayloadFields.COLUMN_ORGANIZATION_UNIT_REF]?: string;
  [PatchUserPayloadFields.COLUMN_ACTION]?: string;
  [PatchUserPayloadFields.COLUMN_ALIAS_USERNAME]?: string;
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
    aliasUsername: string,
    parameters: Parameters = {},
  ): Promise<void> {
    return await this.patchUser(
      partnerReference,
      userReference,
      {
        action: UpdateUserActionEnum.DISABLE_ALIAS,
        aliasUsername,
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

  public async validateUser(
    partnerReference: string,
    userReference: string,
    parameters: Parameters = {},
  ): Promise<void> {
    return await this.patchUser(
      partnerReference,
      userReference,
      { action: UpdateUserActionEnum.VALIDATE },
      parameters,
    );
  }

  public async updateScopeUser(
    partnerReference: string,
    userReference: string,
    payload: UpdateScopeUserPayload,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${partnerReference}/users/${userReference}/scope`;

    await this.patch(payload, parameters);
  }
}
