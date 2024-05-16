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

export enum PartnerUserFields {
  LOGIN = 'login',
  PASSWORD = 'password',
  GLOBAL_ID = 'globalID',
}

export enum PartnerContactFields {
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

export enum PartnerCompanyFields {
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

export type PartnerUser = {
  [PartnerUserFields.LOGIN]: string;
  [PartnerUserFields.PASSWORD]: string;
  [PartnerUserFields.GLOBAL_ID]: string;
};

export type PartnerContact = {
  [PartnerContactFields.TITLE]: string;
  [PartnerContactFields.FIRST_NAME]: string;
  [PartnerContactFields.LAST_NAME]: string;
  [PartnerContactFields.PHONE]: string;
  [PartnerContactFields.EMAIL]: string;
  [PartnerContactFields.TYPE]: string;
  [PartnerContactFields.COUNTRY]: string;
};

export type PartnerAddress = {
  [PartnerAddressFields.LINE1]: string;
  [PartnerAddressFields.LINE2]: string;
  [PartnerAddressFields.CITY]: string;
  [PartnerAddressFields.STATE]: string;
  [PartnerAddressFields.ZIP]: string;
  [PartnerAddressFields.COUNTRY_CODE]: string;
};

export type PartnerCompany = {
  [PartnerCompanyFields.ACRONYM]: string;
  [PartnerCompanyFields.INTERNAL_REFERENCE]: string;
  [PartnerCompanyFields.NAME]: string;
  [PartnerCompanyFields.PHONE]: string;
  [PartnerCompanyFields.NUMBER_OF_EMPLOYEE]: number;
  [PartnerCompanyFields.CORPORATE_EMAIL]: string;
  [PartnerCompanyFields.CORPORATE_WEBSITE]: string;
  [PartnerCompanyFields.ADDRESS]: PartnerAddress;
  [PartnerCompanyFields.BILLING_ADDRESS]: PartnerAddress;
  [PartnerCompanyFields.REGISTRATION_NUMBER]: string;
  [PartnerCompanyFields.VAT_NUMBER]: string;
};

export type PostPartnerPayload = {
  [PartnerFields.REGISTRATION_TYPE]: string;
  [PartnerFields.USER]: PartnerUser;
  [PartnerFields.CONTACT]: PartnerContact;
  [PartnerFields.COMPANY]: PartnerCompany;
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
