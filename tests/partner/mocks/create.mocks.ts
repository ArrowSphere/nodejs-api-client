import {
  DataPartnerType,
  PartnerAddressFields,
  PartnerCompanyFields,
  PartnerContactFields,
  PartnerContactPayloadFields,
  PartnerFields,
  PartnerUserFields,
  PartnerUserPayloadFields,
  PostPartnerPayload,
  ReferenceLinkFields,
  ReferenceLinkType,
} from '../../../src';
import { GetData } from '../../../src';

export const CreateOrderResponsePayload: GetData<ReferenceLinkType> = {
  status: 200,
  data: {
    [ReferenceLinkFields.COLUMN_REFERENCE]: 'XSPO123456',
    [ReferenceLinkFields.COLUMN_LINK]: '/api/orders/XSPO123456',
  },
};

export const PARTNER_CREATE_RESPONSE: GetData<DataPartnerType> = {
  status: 200,
  data: {
    [PartnerFields.USER]: {
      [PartnerUserFields.COLUMN_LOGIN]: 'UserID',
      [PartnerUserFields.COLUMN_GLOBAL_ID]: 'UserID',
      [PartnerUserPayloadFields.PASSWORD]: 'Password123!',
    },
    [PartnerFields.CONTACT]: {
      [PartnerContactFields.COLUMN_FIRSTNAME]: 'John',
      [PartnerContactFields.COLUMN_LASTNAME]: 'Doe',
      [PartnerContactFields.COLUMN_EMAIL]: 'fakeemail@yopmail.com',
      [PartnerContactFields.COLUMN_PHONE]: '+33123456789',
      [PartnerContactFields.COLUMN_COUNTRY]: 'FR',
      [PartnerContactFields.COLUMN_TITLE]: '',
      [PartnerContactFields.COLUMN_TYPE]: '',
    },
    [PartnerFields.COMPANY]: {
      [PartnerCompanyFields.COLUMN_ACRONYM]: '',
      [PartnerCompanyFields.COLUMN_INTERNAL_REFERENCE]: '',
      [PartnerCompanyFields.COLUMN_NAME]: '',
      [PartnerCompanyFields.COLUMN_PHONE]: '',
      [PartnerCompanyFields.COLUMN_NUMBER_OF_EMPLOYEE]: '',
      [PartnerCompanyFields.COLUMN_CORPORATE_EMAIL]: '',
      [PartnerCompanyFields.COLUMN_WEBSITE]: '',
      [PartnerCompanyFields.COLUMN_ADDRESS]: {
        [PartnerAddressFields.LINE1]: '',
        [PartnerAddressFields.LINE2]: '',
        [PartnerAddressFields.CITY]: '',
        [PartnerAddressFields.STATE]: '',
        [PartnerAddressFields.ZIP]: '',
        [PartnerAddressFields.COUNTRY_CODE]: '',
      },
      [PartnerCompanyFields.COLUMN_BILLING_ADDRESS]: {
        [PartnerAddressFields.LINE1]: '',
        [PartnerAddressFields.LINE2]: '',
        [PartnerAddressFields.CITY]: '',
        [PartnerAddressFields.STATE]: '',
        [PartnerAddressFields.ZIP]: '',
        [PartnerAddressFields.COUNTRY_CODE]: '',
      },
      [PartnerCompanyFields.COLUMN_REGISTRATION_NUMBER]: '',
      [PartnerCompanyFields.COLUMN_VAT_NUMBER]: '',
    },
  },
};

export const PARTNER_CREATE_REQUEST: PostPartnerPayload = {
  [PartnerFields.REGISTRATION_TYPE]: 'internal',
  [PartnerFields.USER]: {
    [PartnerUserPayloadFields.GLOBAL_ID]: 'UserID',
    [PartnerUserPayloadFields.LOGIN]: 'UserID',
    [PartnerUserPayloadFields.PASSWORD]: 'Password123!',
  },
  [PartnerFields.CONTACT]: {
    [PartnerContactPayloadFields.FIRST_NAME]: 'John',
    [PartnerContactPayloadFields.LAST_NAME]: 'Doe',
    [PartnerContactPayloadFields.EMAIL]: 'fakeemail@yopmail.com',
    [PartnerContactPayloadFields.PHONE]: '+33123456789',
    [PartnerContactPayloadFields.COUNTRY]: 'FR',
    [PartnerContactPayloadFields.TITLE]: '',
    [PartnerContactPayloadFields.TYPE]: '',
  },
  [PartnerFields.RECAPTCHA_TOKEN]: 'Recaptcha Token',
};
