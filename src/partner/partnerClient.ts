import { AbstractRestfulClient, Parameters } from '../abstractRestfulClient';
import { CreateUserApiKeyResult } from './types/createUserApiKeyResult';
import { CreateUserApiKeyPayload } from './types/userApiKey';
import { GetResult } from '../getResult';
import { GetUserApiKeysResult } from './types/getUserApiKeysResult';
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
  COLUMN_REGISTRATION_TYPE = 'registrationType',
  COLUMN_USER = 'user',
  COLUMN_CONTACT = 'contact',
  COLUMN_COMPANY = 'company',
  COLUMN_RECAPTCHA_TOKEN = 'recaptchaToken',
}

export enum PartnerUserPayloadFields {
  COLUMN_LOGIN = 'login',
  COLUMN_PASSWORD = 'password',
  COLUMN_GLOBAL_ID = 'globalID',
}

export enum PartnerContactPayloadFields {
  COLUMN_TITLE = 'title',
  COLUMN_FIRST_NAME = 'firstName',
  COLUMN_LAST_NAME = 'lastName',
  COLUMN_PHONE = 'phone',
  COLUMN_EMAIL = 'email',
  COLUMN_TYPE = 'type',
  COLUMN_COUNTRY = 'country',
}

export enum PartnerAddressFields {
  COLUMN_LINE1 = 'line1',
  COLUMN_LINE2 = 'line2',
  COLUMN_CITY = 'city',
  COLUMN_STATE = 'state',
  COLUMN_ZIP = 'zip',
  COLUMN_COUNTRY_CODE = 'countryCode',
}

export enum PartnerCompanyPayloadFields {
  COLUMN_ACRONYM = 'acronym',
  COLUMN_INTERNAL_REFERENCE = 'internalReference',
  COLUMN_NAME = 'name',
  COLUMN_PHONE = 'phone',
  COLUMN_NUMBER_OF_EMPLOYEE = 'numberOfEmployee',
  COLUMN_CORPORATE_EMAIL = 'corporateEmail',
  COLUMN_CORPORATE_WEBSITE = 'corporateWebsite',
  COLUMN_ADDRESS = 'address',
  COLUMN_BILLING_ADDRESS = 'billingAddress',
  COLUMN_REGISTRATION_NUMBER = 'registrationNumber',
  COLUMN_VAT_NUMBER = 'vatNumber',
}

export enum GetUserApiKeysFiltersFields {
  COLUMN_PARTNER_REFERENCE = 'partnerReference',
  COLUMN_USER_REFERENCE = 'userReference',
  COLUMN_USER_LOGIN = 'userLogin',
  COLUMN_NAME = 'name',
  COLUMN_IS_ACTIVE = 'isActive',
  COLUMN_EXPIRATION_DATE = 'expirationDate',
  COLUMN_CREATION_DATE = 'creationDate',
  COLUMN_LAST_ACCESS = 'lastAccess',
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
  [PartnerUserPayloadFields.COLUMN_LOGIN]?: string;
  [PartnerUserPayloadFields.COLUMN_PASSWORD]: string;
  [PartnerUserPayloadFields.COLUMN_GLOBAL_ID]?: string;
};

export type PartnerContactPayload = {
  [PartnerContactPayloadFields.COLUMN_TITLE]?: string;
  [PartnerContactPayloadFields.COLUMN_FIRST_NAME]: string;
  [PartnerContactPayloadFields.COLUMN_LAST_NAME]: string;
  [PartnerContactPayloadFields.COLUMN_PHONE]: string;
  [PartnerContactPayloadFields.COLUMN_EMAIL]: string;
  [PartnerContactPayloadFields.COLUMN_TYPE]?: string;
  [PartnerContactPayloadFields.COLUMN_COUNTRY]?: string;
};

export type PartnerAddress = {
  [PartnerAddressFields.COLUMN_LINE1]: string;
  [PartnerAddressFields.COLUMN_LINE2]: string;
  [PartnerAddressFields.COLUMN_CITY]: string;
  [PartnerAddressFields.COLUMN_STATE]: string;
  [PartnerAddressFields.COLUMN_ZIP]: string;
  [PartnerAddressFields.COLUMN_COUNTRY_CODE]: string;
};

export type PartnerCompanyPayload = {
  [PartnerCompanyPayloadFields.COLUMN_ACRONYM]: string;
  [PartnerCompanyPayloadFields.COLUMN_INTERNAL_REFERENCE]: string;
  [PartnerCompanyPayloadFields.COLUMN_NAME]: string;
  [PartnerCompanyPayloadFields.COLUMN_PHONE]: string;
  [PartnerCompanyPayloadFields.COLUMN_NUMBER_OF_EMPLOYEE]?: number;
  [PartnerCompanyPayloadFields.COLUMN_CORPORATE_EMAIL]: string;
  [PartnerCompanyPayloadFields.COLUMN_CORPORATE_WEBSITE]: string;
  [PartnerCompanyPayloadFields.COLUMN_ADDRESS]: PartnerAddress;
  [PartnerCompanyPayloadFields.COLUMN_BILLING_ADDRESS]?: PartnerAddress;
  [PartnerCompanyPayloadFields.COLUMN_REGISTRATION_NUMBER]: string;
  [PartnerCompanyPayloadFields.COLUMN_VAT_NUMBER]: string;
};

export type PostPartnerPayload = {
  [PartnerFields.COLUMN_REGISTRATION_TYPE]: string;
  [PartnerFields.COLUMN_USER]: PartnerUserPayload;
  [PartnerFields.COLUMN_CONTACT]: PartnerContactPayload;
  [PartnerFields.COLUMN_COMPANY]?: PartnerCompanyPayload;
  [PartnerFields.COLUMN_RECAPTCHA_TOKEN]: string;
};

export type GetUserApiKeysFilters = {
  [GetUserApiKeysFiltersFields.COLUMN_PARTNER_REFERENCE]?: string;
  [GetUserApiKeysFiltersFields.COLUMN_USER_REFERENCE]?: string;
  [GetUserApiKeysFiltersFields.COLUMN_USER_LOGIN]?: string;
  [GetUserApiKeysFiltersFields.COLUMN_NAME]?: string;
  [GetUserApiKeysFiltersFields.COLUMN_IS_ACTIVE]?: string;
  [GetUserApiKeysFiltersFields.COLUMN_EXPIRATION_DATE]?: string;
  [GetUserApiKeysFiltersFields.COLUMN_CREATION_DATE]?: string;
  [GetUserApiKeysFiltersFields.COLUMN_LAST_ACCESS]?: string;
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

  public async getUserApiKeys(
    filters: GetUserApiKeysFilters = {},
    parameters: Parameters = {},
  ): Promise<GetResult<GetUserApiKeysResult>> {
    this.path = `/apikeys`;

    const queryParameters: Parameters = {
      ...parameters,
      ...filters,
    };

    return new GetResult(GetUserApiKeysResult, await this.get(queryParameters));
  }

  public async deleteUserApiKey(
    partnerReference: string,
    userReference: string,
    apikeyReference: string,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${partnerReference}/users/${userReference}/apikeys/${apikeyReference}`;

    return this.delete(parameters);
  }

  public async createUserApiKey(
    partnerReference: string,
    userReference: string,
    payload: CreateUserApiKeyPayload,
    parameters: Parameters = {},
  ): Promise<GetResult<CreateUserApiKeyResult>> {
    this.path = `/${partnerReference}/users/${userReference}/apikeys`;

    return new GetResult(
      CreateUserApiKeyResult,
      await this.post(payload, parameters),
    );
  }
}
