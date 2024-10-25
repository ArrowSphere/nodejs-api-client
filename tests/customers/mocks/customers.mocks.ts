import {
  AdditionalExtraInformationFields,
  CompanyFields,
  ContactFields,
  CustomerContactFields,
  CustomerContactPayloadFields,
  CustomerContactType,
  CustomerFields,
  DataCustomersFields,
  DataInvitationFields,
  DetailsFields,
  GetData,
  GetResultFields,
  InvitationContactFields,
  PaginationFields,
  PostCustomerContactPayload,
  PostCustomerInvitation,
  PostCustomerInvitationFields,
} from '../../../src';
import { CustomerContactXcpInvitationFields } from '../../../src/customers/entities/customers/customerContact/customerContactXcpInvitation';
import { CustomerContactOrganizationUnitFields } from '../../../src/customers/entities/customers/customerContact/customerContactOrganizationUnit';

export const PAYLOAD_GET_CUSTOMERS = {
  [GetResultFields.COLUMN_STATUS]: 200,
  [GetResultFields.COLUMN_DATA]: {
    [DataCustomersFields.COLUMN_CUSTOMERS]: [
      {
        [CustomerFields.COLUMN_REFERENCE]: 'reference',
        [CustomerFields.COLUMN_COMPANY_NAME]: 'company_name',
        [CustomerFields.COLUMN_PARTNER_COMPANY_ID]: 'partner_company_id',
        [CustomerFields.COLUMN_ADDRESS_LINE_1]: 'address_line_1',
        [CustomerFields.COLUMN_ADDRESS_LINE_2]: 'address_line_2',
        [CustomerFields.COLUMN_ZIP]: '12345',
        [CustomerFields.COLUMN_CITY]: 'city',
        [CustomerFields.COLUMN_COUNTRY_CODE]: 'country_code',
        [CustomerFields.COLUMN_STATE]: 'state',
        [CustomerFields.COLUMN_RECEPTION_PHONE]: 'reception_phone',
        [CustomerFields.COLUMN_WEBSITE_URL]: 'website_url',
        [CustomerFields.COLUMN_EMAIL_CONTACT]: 'email_contact',
        [CustomerFields.COLUMN_HEADCOUNT]: 12345,
        [CustomerFields.COLUMN_TAX_NUMBER]: 'tax_number',
        [CustomerFields.COLUMN_REF]: 'ref',
        [CustomerFields.COLUMN_BILLING_ID]: 12345,
        [CustomerFields.COLUMN_INTERNAL_REFERENCE]: 'internal_reference',
        [CustomerFields.COLUMN_CONTACT]: {
          [ContactFields.COLUMN_FIRSTNAME]: 'firstname',
          [ContactFields.COLUMN_LASTNAME]: 'lastname',
          [ContactFields.COLUMN_EMAIL]: 'email',
          [ContactFields.COLUMN_PHONE]: 'phone',
          [ContactFields.COLUMN_SYNC_PARTNER_CONTACT_REF_ID]:
            'sync_partner_contact_ref_id',
          [ContactFields.COLUMN_CONTACT_PERSON_ID]: 'contact_person_id',
        },
        [CustomerFields.COLUMN_DETAILS]: {
          [DetailsFields.COLUMN_MIGRATION]: true,
          [DetailsFields.COLUMN_DOMAIN_NAME]: 'domain_name',
          [DetailsFields.COLUMN_ORACLE_ONLINE_KEY]: 'oracle_online_key',
          [DetailsFields.COLUMN_IBM_CE_ID]: 'ibm_ce_id',
          [DetailsFields.COLUMN_MASS_360_RESELLER_ID]: 'mass_360_reseller_id',
          [DetailsFields.COLUMN_TENANT_ID]: 'tenant_id',
        },
        [CustomerFields.COLUMN_DELETED_AT]: 'deleted_at',
        [CustomerFields.COLUMN_EXTRA_INFORMATION]: {
          [AdditionalExtraInformationFields.COLUMN_PROGRAMS]: {
            test: 'test',
          },
        },
      },
    ],
  },
  [GetResultFields.COLUMN_PAGINATION]: {
    [PaginationFields.COLUMN_PER_PAGE]: 15,
    [PaginationFields.COLUMN_CURRENT_PAGE]: 1,
    [PaginationFields.COLUMN_TOTAL_PAGE]: 10,
    [PaginationFields.COLUMN_TOTAL]: 155,
    [PaginationFields.COLUMN_NEXT]: '/customers?per_page=15&page=3',
    [PaginationFields.COLUMN_PREVIOUS]: '/customers?per_page=15&page=1',
  },
};

export const PAYLOAD_GET_CUSTOMERS_WITHOUT_OPTIONAL_FIELDS = {
  [GetResultFields.COLUMN_STATUS]: 200,
  [GetResultFields.COLUMN_DATA]: {
    [DataCustomersFields.COLUMN_CUSTOMERS]: [
      {
        [CustomerFields.COLUMN_REFERENCE]: 'reference',
        [CustomerFields.COLUMN_COMPANY_NAME]: 'company_name',
        [CustomerFields.COLUMN_PARTNER_COMPANY_ID]: 'partner_company_id',
        [CustomerFields.COLUMN_ZIP]: '12345',
        [CustomerFields.COLUMN_CITY]: 'city',
        [CustomerFields.COLUMN_COUNTRY_CODE]: 'country_code',
        [CustomerFields.COLUMN_STATE]: 'state',
        [CustomerFields.COLUMN_RECEPTION_PHONE]: 'reception_phone',
        [CustomerFields.COLUMN_WEBSITE_URL]: 'website_url',
        [CustomerFields.COLUMN_EMAIL_CONTACT]: 'email_contact',
        [CustomerFields.COLUMN_HEADCOUNT]: 12345,
        [CustomerFields.COLUMN_TAX_NUMBER]: 'tax_number',
        [CustomerFields.COLUMN_REF]: 'ref',
        [CustomerFields.COLUMN_BILLING_ID]: 12345,
        [CustomerFields.COLUMN_INTERNAL_REFERENCE]: 'internal_reference',
        [CustomerFields.COLUMN_CONTACT]: {
          [ContactFields.COLUMN_FIRSTNAME]: 'firstname',
          [ContactFields.COLUMN_LASTNAME]: 'lastname',
          [ContactFields.COLUMN_EMAIL]: 'email',
          [ContactFields.COLUMN_PHONE]: 'phone',
          [ContactFields.COLUMN_CONTACT_PERSON_ID]: 'contact_person_id',
        },
        [CustomerFields.COLUMN_DETAILS]: {},
      },
    ],
  },
  [GetResultFields.COLUMN_PAGINATION]: {
    [PaginationFields.COLUMN_PER_PAGE]: 15,
    [PaginationFields.COLUMN_CURRENT_PAGE]: 1,
    [PaginationFields.COLUMN_TOTAL_PAGE]: 10,
    [PaginationFields.COLUMN_TOTAL]: 155,
    [PaginationFields.COLUMN_NEXT]: '/customers?per_page=15&page=3',
    [PaginationFields.COLUMN_PREVIOUS]: '/customers?per_page=15&page=1',
  },
};

export const PAYLOAD_POST_CUSTOMER_INVITATION: PostCustomerInvitation = {
  [PostCustomerInvitationFields.COLUMN_CONTACT_ID]: 123456,
  [PostCustomerInvitationFields.COLUMN_POLICY]: 'policy',
};

export const PAYLOAD_GET_CUSTOMER_INVITATION = {
  [GetResultFields.COLUMN_STATUS]: 200,
  [GetResultFields.COLUMN_DATA]: {
    [DataInvitationFields.COLUMN_CODE]: 'CODE_999',
    [DataInvitationFields.COLUMN_CREATED_AT]: '01-01-2021',
    [DataInvitationFields.COLUMN_UPDATED_AT]: '09-09-2022',
    [DataInvitationFields.COLUMN_COMPANY]: {
      [CompanyFields.COLUMN_REFERENCE]: 'REFERENCE_0123456789',
    },
    [DataInvitationFields.COLUMN_CONTACT]: {
      [InvitationContactFields.COLUMN_REFERENCE]: 'XS1234',
      [InvitationContactFields.COLUMN_FIRSTNAME]: 'firstname',
      [InvitationContactFields.COLUMN_USERNAME]: 'username',
      [InvitationContactFields.COLUMN_LASTNAME]: 'lastname',
      [InvitationContactFields.COLUMN_EMAIL]: 'email',
    },
    [DataInvitationFields.COLUMN_POLICY]: 'admin',
    [DataInvitationFields.COLUMN_EXPIRED_AT]: '2025-10-28T15:10:00.000Z',
  },
};

export const PAYLOAD_GET_CUSTOMER_CONTACT_LIST = {
  [GetResultFields.COLUMN_STATUS]: 200,
  [GetResultFields.COLUMN_DATA]: [
    {
      [CustomerContactFields.COLUMN_REFERENCE]: 'REF',
      [CustomerContactFields.COLUMN_FIRST_NAME]: 'firstName',
      [CustomerContactFields.COLUMN_LAST_NAME]: 'lastName',
      [CustomerContactFields.COLUMN_EMAIL]: 'email',
      [CustomerContactFields.COLUMN_PHONE]: 'phone',
      [CustomerContactFields.COLUMN_USERNAME]: 'username',
      [CustomerContactFields.COLUMN_TYPE]: 'type',
      [CustomerContactFields.COLUMN_ROLE]: 'role',
      [CustomerContactFields.COLUMN_IS_ACTIVE]: true,
      [CustomerContactFields.COLUMN_XCP_INVITATION]: {
        [CustomerContactXcpInvitationFields.COLUMN_POLICY]: 'policy_admin',
        [CustomerContactXcpInvitationFields.COLUMN_CREATED_AT]:
          '2025-10-25T15:10:00.000Z',
        [CustomerContactXcpInvitationFields.COLUMN_EXPIRED_AT]:
          '2025-10-28T15:10:00.000Z',
      },
      [CustomerContactFields.COLUMN_ORGANIZATION_UNIT_ID]: 42,
      [CustomerContactFields.COLUMN_ORGANIZATION_UNITS]: [
        {
          [CustomerContactOrganizationUnitFields.COLUMN_ID]: 1,
          [CustomerContactOrganizationUnitFields.COLUMN_NAME]: 'OU nama 1',
        },
        {
          [CustomerContactOrganizationUnitFields.COLUMN_ID]: 2,
          [CustomerContactOrganizationUnitFields.COLUMN_NAME]: 'OU name 2',
        },
      ],
    },
  ],
};

export const PAYLOAD_CUSTOMER_CONTACT: PostCustomerContactPayload = {
  [CustomerContactPayloadFields.COLUMN_FIRST_NAME]: 'firstName',
  [CustomerContactPayloadFields.COLUMN_LAST_NAME]: 'lastName',
  [CustomerContactPayloadFields.COLUMN_EMAIL]: 'email',
  [CustomerContactPayloadFields.COLUMN_PHONE]: 'phone',
  [CustomerContactPayloadFields.COLUMN_USERNAME]: 'username',
  [CustomerContactPayloadFields.COLUMN_TYPE]: 'type',
  [CustomerContactPayloadFields.COLUMN_ROLE]: 'role',
  [CustomerContactPayloadFields.COLUMN_ORGANIZATION_UNIT_ID]: 1,
  [CustomerContactPayloadFields.COLUMN_ORGANIZATION_UNIT_IDS]: [123456, 789101],
};

export const RESPONSE_CUSTOMER_CONTACT: GetData<CustomerContactType> = {
  [GetResultFields.COLUMN_STATUS]: 200,
  [GetResultFields.COLUMN_DATA]: {
    [CustomerContactFields.COLUMN_REFERENCE]: 'REF123456',
    [CustomerContactFields.COLUMN_FIRST_NAME]: 'firstName',
    [CustomerContactFields.COLUMN_LAST_NAME]: 'lastName',
    [CustomerContactFields.COLUMN_EMAIL]: 'email',
    [CustomerContactFields.COLUMN_PHONE]: 'phone',
    [CustomerContactFields.COLUMN_USERNAME]: 'username',
    [CustomerContactFields.COLUMN_TYPE]: 'type',
    [CustomerContactFields.COLUMN_ROLE]: 'role',
    [CustomerContactFields.COLUMN_IS_ACTIVE]: true,
    [CustomerContactFields.COLUMN_XCP_INVITATION]: {
      [CustomerContactXcpInvitationFields.COLUMN_POLICY]: 'policy_admin',
      [CustomerContactXcpInvitationFields.COLUMN_CREATED_AT]:
        '2025-10-25T15:10:00.000Z',
      [CustomerContactXcpInvitationFields.COLUMN_EXPIRED_AT]:
        '2025-10-28T15:10:00.000Z',
    },
    [CustomerContactFields.COLUMN_ORGANIZATION_UNIT_ID]: 1,
    [CustomerContactFields.COLUMN_ORGANIZATION_UNITS]: [
      {
        [CustomerContactOrganizationUnitFields.COLUMN_ID]: 1,
        [CustomerContactOrganizationUnitFields.COLUMN_NAME]: 'OU name 1',
      },
      {
        [CustomerContactOrganizationUnitFields.COLUMN_ID]: 2,
        [CustomerContactOrganizationUnitFields.COLUMN_NAME]: 'OU name 2',
      },
    ],
  },
};
