import { AbstractRestfulClient, Parameters } from '../abstractRestfulClient';

export enum PatchUserPayloadFields {
  COLUMN_FIRSTNAME = 'firstname',
  COLUMN_LASTNAME = 'lastname',
  COLUMN_PHONE = 'phone',
  COLUMN_TITLE = 'title',
  COLUMN_IS_LOCKED = 'isLocked',
  COLUMN_ORGANIZATION_UNIT_REF = 'organizationUnitRef',
}

export type PatchUserPayload = {
  [PatchUserPayloadFields.COLUMN_FIRSTNAME]?: string;
  [PatchUserPayloadFields.COLUMN_LASTNAME]?: string;
  [PatchUserPayloadFields.COLUMN_PHONE]?: string;
  [PatchUserPayloadFields.COLUMN_TITLE]?: string;
  [PatchUserPayloadFields.COLUMN_ORGANIZATION_UNIT_REF]?: string;
};

export type LockUserPayload = {
  [PatchUserPayloadFields.COLUMN_IS_LOCKED]?: boolean;
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
    this.path = `/${partnerReference}/users/${userReference}/lock`;

    const payload: LockUserPayload = {
      [PatchUserPayloadFields.COLUMN_IS_LOCKED]: true,
    };

    return await this.patch(payload, parameters);
  }

  public async unlockUser(
    partnerReference: string,
    userReference: string,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${partnerReference}/users/${userReference}/lock`;

    const payload: LockUserPayload = {
      [PatchUserPayloadFields.COLUMN_IS_LOCKED]: false,
    };

    return await this.patch(payload, parameters);
  }
}
