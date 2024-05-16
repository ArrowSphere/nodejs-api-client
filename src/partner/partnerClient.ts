import { AbstractRestfulClient, Parameters } from '../abstractRestfulClient';
import { GetResult } from '../getResult';
import { DataPartner } from './entities/dataPartner';

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

export type PartnerUserPayload = {
  [PartnerUserPayloadFields.LOGIN]?: string;
  [PartnerUserPayloadFields.PASSWORD]: string;
  [PartnerUserPayloadFields.GLOBAL_ID]?: string;
};

export type PartnerContactPayload = {
  [PartnerContactPayloadFields.TITLE]: string;
  [PartnerContactPayloadFields.FIRST_NAME]: string;
  [PartnerContactPayloadFields.LAST_NAME]: string;
  [PartnerContactPayloadFields.PHONE]: string;
  [PartnerContactPayloadFields.EMAIL]: string;
  [PartnerContactPayloadFields.TYPE]: string;
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

  public async postPartner(
    payload: PostPartnerPayload,
    parameters: Parameters = {},
  ): Promise<GetResult<DataPartner>> {
    this.path = `/v1/register`;

    return new GetResult(DataPartner, await this.post(payload, parameters));
  }
}
