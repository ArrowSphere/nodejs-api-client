import {
  DataPartnerType,
  GetData,
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
    [PartnerFields.COLUMN_USER]: {
      [PartnerUserFields.COLUMN_LOGIN]: 'UserID',
    },
    [PartnerFields.COLUMN_CONTACT]: {
      [PartnerContactFields.COLUMN_FIRSTNAME]: 'John',
      [PartnerContactFields.COLUMN_LASTNAME]: 'Doe',
      [PartnerContactFields.COLUMN_EMAIL]: 'fakeemail@yopmail.com',
      [PartnerContactFields.COLUMN_PHONE]: '+33123456789',
      [PartnerContactFields.COLUMN_TYPE]: '',
    },
    [PartnerFields.COLUMN_COMPANY]: {
      [PartnerCompanyFields.COLUMN_ACRONYM]: '',
      [PartnerCompanyFields.COLUMN_INTERNAL_REFERENCE]: '',
      [PartnerCompanyFields.COLUMN_NAME]: '',
      [PartnerCompanyFields.COLUMN_PHONE]: '',
      [PartnerCompanyFields.COLUMN_NUMBER_OF_EMPLOYEE]: '',
      [PartnerCompanyFields.COLUMN_CORPORATE_EMAIL]: '',
      [PartnerCompanyFields.COLUMN_WEBSITE]: '',
      [PartnerCompanyFields.COLUMN_ADDRESS]: {
        [PartnerAddressFields.COLUMN_LINE1]: '',
        [PartnerAddressFields.COLUMN_LINE2]: '',
        [PartnerAddressFields.COLUMN_CITY]: '',
        [PartnerAddressFields.COLUMN_STATE]: '',
        [PartnerAddressFields.COLUMN_ZIP]: '',
        [PartnerAddressFields.COLUMN_COUNTRY_CODE]: '',
      },
      [PartnerCompanyFields.COLUMN_BILLING_ADDRESS]: {
        [PartnerAddressFields.COLUMN_LINE1]: '',
        [PartnerAddressFields.COLUMN_LINE2]: '',
        [PartnerAddressFields.COLUMN_CITY]: '',
        [PartnerAddressFields.COLUMN_STATE]: '',
        [PartnerAddressFields.COLUMN_ZIP]: '',
        [PartnerAddressFields.COLUMN_COUNTRY_CODE]: '',
      },
      [PartnerCompanyFields.COLUMN_REGISTRATION_NUMBER]: '',
      [PartnerCompanyFields.COLUMN_VAT_NUMBER]: '',
    },
  },
};

export const PARTNER_CREATE_REQUEST: PostPartnerPayload = {
  [PartnerFields.COLUMN_REGISTRATION_TYPE]: 'internal',
  [PartnerFields.COLUMN_USER]: {
    [PartnerUserPayloadFields.COLUMN_GLOBAL_ID]: 'UserID',
    [PartnerUserPayloadFields.COLUMN_LOGIN]: 'UserID',
    [PartnerUserPayloadFields.COLUMN_PASSWORD]: 'Password123!',
  },
  [PartnerFields.COLUMN_CONTACT]: {
    [PartnerContactPayloadFields.COLUMN_FIRST_NAME]: 'John',
    [PartnerContactPayloadFields.COLUMN_LAST_NAME]: 'Doe',
    [PartnerContactPayloadFields.COLUMN_EMAIL]: 'fakeemail@yopmail.com',
    [PartnerContactPayloadFields.COLUMN_PHONE]: '+33123456789',
    [PartnerContactPayloadFields.COLUMN_COUNTRY]: 'FR',
    [PartnerContactPayloadFields.COLUMN_TITLE]: '',
    [PartnerContactPayloadFields.COLUMN_TYPE]: '',
  },
  [PartnerFields.COLUMN_RECAPTCHA_TOKEN]: 'Recaptcha Token',
};
