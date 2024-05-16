import { AbstractRestfulClient, Parameters } from '../abstractRestfulClient';
import { GetResult } from '../getResult';
import { GetUserImpersonationsResult } from './types/getUserImpersonationsResult';
import {
  UpdateScopeUserPayload,
  UpdateUserActionEnum,
} from './types/updateUserTypes';
import { DataPartner } from './entities/dataPartner';

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

export enum PartnerFields {
  REGISTRATION_TYPE = 'registrationType',
  USER = 'user',
  CONTACT = 'contact',
  COMPANY = 'company',
  RECAPTCHA_TOKEN = 'recaptchaToken',
}

export enum PartnerUserPayloadFields {
  LOGIN = 'login',
  PASSWORD = 'password',
  GLOBAL_ID = 'globalID',
}

export enum PartnerContactPayloadFields {
  TITLE = 'title',
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  PHONE = 'phone',
  EMAIL = 'email',
  TYPE = 'type',
  COUNTRY = 'country',
}

export enum PartnerAddressFields {
  LINE1 = 'line1',
  LINE2 = 'line2',
  CITY = 'city',
  STATE = 'state',
  ZIP = 'zip',
  COUNTRY_CODE = 'countryCode',
}

export enum PartnerCompanyPayloadFields {
  ACRONYM = 'acronym',
  INTERNAL_REFERENCE = 'internalReference',
  NAME = 'name',
  PHONE = 'phone',
  NUMBER_OF_EMPLOYEE = 'numberOfEmployee',
  CORPORATE_EMAIL = 'corporateEmail',
  CORPORATE_WEBSITE = 'corporateWebsite',
  ADDRESS = 'address',
  BILLING_ADDRESS = 'billingAddress',
  REGISTRATION_NUMBER = 'registrationNumber',
  VAT_NUMBER = 'vatNumber',
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

export type PartnerUserPayload = {
  [PartnerUserPayloadFields.LOGIN]?: string;
  [PartnerUserPayloadFields.PASSWORD]: string;
  [PartnerUserPayloadFields.GLOBAL_ID]?: string;
};

export type PartnerContactPayload = {
  [PartnerContactPayloadFields.TITLE]?: string;
  [PartnerContactPayloadFields.FIRST_NAME]: string;
  [PartnerContactPayloadFields.LAST_NAME]: string;
  [PartnerContactPayloadFields.PHONE]: string;
  [PartnerContactPayloadFields.EMAIL]: string;
  [PartnerContactPayloadFields.TYPE]?: string;
  [PartnerContactPayloadFields.COUNTRY]?: string;
};

export type PartnerAddress = {
  [PartnerAddressFields.LINE1]: string;
  [PartnerAddressFields.LINE2]: string;
  [PartnerAddressFields.CITY]: string;
  [PartnerAddressFields.STATE]: string;
  [PartnerAddressFields.ZIP]: string;
  [PartnerAddressFields.COUNTRY_CODE]: string;
};

export type PartnerCompanyPayload = {
  [PartnerCompanyPayloadFields.ACRONYM]: string;
  [PartnerCompanyPayloadFields.INTERNAL_REFERENCE]: string;
  [PartnerCompanyPayloadFields.NAME]: string;
  [PartnerCompanyPayloadFields.PHONE]: string;
  [PartnerCompanyPayloadFields.NUMBER_OF_EMPLOYEE]?: number;
  [PartnerCompanyPayloadFields.CORPORATE_EMAIL]: string;
  [PartnerCompanyPayloadFields.CORPORATE_WEBSITE]: string;
  [PartnerCompanyPayloadFields.ADDRESS]: PartnerAddress;
  [PartnerCompanyPayloadFields.BILLING_ADDRESS]?: PartnerAddress;
  [PartnerCompanyPayloadFields.REGISTRATION_NUMBER]: string;
  [PartnerCompanyPayloadFields.VAT_NUMBER]: string;
};

export type PostPartnerPayload = {
  [PartnerFields.REGISTRATION_TYPE]: string;
  [PartnerFields.USER]: PartnerUserPayload;
  [PartnerFields.CONTACT]: PartnerContactPayload;
  [PartnerFields.COMPANY]?: PartnerCompanyPayload;
  [PartnerFields.RECAPTCHA_TOKEN]: string;
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

  public async getUserImpersonations(
    partnerReference: string,
    userReference: string,
    parameters: Parameters = {},
  ): Promise<GetResult<GetUserImpersonationsResult>> {
    this.path = `/${partnerReference}/users/${userReference}/impersonations`;

    return new GetResult(
      GetUserImpersonationsResult,
      await this.get(parameters),
    );
  }

  public async postPartner(
    payload: PostPartnerPayload,
    parameters: Parameters = {},
  ): Promise<GetResult<DataPartner>> {
    this.path = `/v1/register`;

    return new GetResult(DataPartner, await this.post(payload, parameters));
  }
}
