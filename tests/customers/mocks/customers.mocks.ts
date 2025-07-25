import {
  AdditionalExtraInformationFields,
  CompanyFields,
  ContactFields,
  CustomerContactFields,
  CustomerContactPayloadFields,
  CustomerContactType,
  CustomerCredentialsFields,
  CustomerCredentialsType,
  CustomerFields,
  DataCustomersFields,
  DataInvitationFields,
  DataUnknownLicensesFields,
  DataUnknownLicenseType,
  DetailsFields,
  GetData,
  GetResultFields,
  InvitationContactFields,
  PaginationFields,
  PostCustomerContactPayload,
  PostCustomerInvitation,
  PostCustomerInvitationFields,
  RelationFields,
  UnknownLicenseFields,
} from '../../../src';
import { CustomerContactXcpInvitationFields } from '../../../src/customers/entities/customers/customerContact/customerContactXcpInvitation';
import { CustomerContactOrganizationUnitFields } from '../../../src/customers/entities/customers/customerContact/customerContactOrganizationUnit';
import {
  CustomerProvisionFields,
  CustomerProvisionType,
} from '../../../src/customers/entities/customerProvision';

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

export const RESPONSE_CUSTOMER_PROVISION: GetData<CustomerProvisionType> = {
  [GetResultFields.COLUMN_STATUS]: 200,
  [GetResultFields.COLUMN_DATA]: {
    [CustomerProvisionFields.COLUMN_STATUS]: 'fulfilled',
    [CustomerProvisionFields.COLUMN_MESSAGE]: 'fulfilled',
    [CustomerProvisionFields.COLUMN_ATTRIBUTES]: {
      test: 'test',
    },
  },
};

export const PAYLOAD_GET_UNKNOWN_LICENSES: GetData<DataUnknownLicenseType> = {
  [GetResultFields.COLUMN_STATUS]: 200,
  [GetResultFields.COLUMN_DATA]: {
    [DataUnknownLicensesFields.COLUMN_UNKNOWN_LICENSES]: [
      {
        [UnknownLicenseFields.COLUMN_VENDOR_REFERENCE_ID]:
          'AAAAAAAA-BBBB-CCCC-DDDD-EEEEEEEEEEEE',
        [UnknownLicenseFields.COLUMN_OFFER_NAME]:
          'Microsoft Azure Account (Legacy)',
        [UnknownLicenseFields.COLUMN_OFFER_SKU]: 'MS-AZR-0146P',
        [UnknownLicenseFields.COLUMN_PRICEBAND_ARROWSPHERE_SKU]:
          'var_MS-AZR-0146P_17857',
        [UnknownLicenseFields.COLUMN_QUANTITY]: 1,
        [UnknownLicenseFields.COLUMN_SUBSCRIPTION_START_DATE]:
          '2021-05-07T00:00:00Z',
        [UnknownLicenseFields.COLUMN_FRIENDLY_NAME]: 'Microsoft Azure',
        [UnknownLicenseFields.COLUMN_IS_RECONCILABLE]: true,
        [UnknownLicenseFields.COLUMN_RECONCILABLE_MESSAGE]: '',
        [UnknownLicenseFields.COLUMN_IS_ADDON]: false,
        [UnknownLicenseFields.COLUMN_PARENT_SUBSCRIPTION_VENDOR_REFERENCE_ID]:
          '',
        [UnknownLicenseFields.COLUMN_PARENT_PARTNER_REF]: '',
        [UnknownLicenseFields.COLUMN_STATUS]: 'active',
        [UnknownLicenseFields.COLUMN_GROUP]: 'group1',
        [UnknownLicenseFields.COLUMN_RELATIONS]: [],
      },
      {
        [UnknownLicenseFields.COLUMN_VENDOR_REFERENCE_ID]:
          '00000000-AAAA-BBBB-CCCC-DDDDEEEEFFFF',
        [UnknownLicenseFields.COLUMN_OFFER_NAME]: '',
        [UnknownLicenseFields.COLUMN_OFFER_SKU]:
          'CFQ7TTC0LF8S:0001:CFQ7TTC0K195',
        [UnknownLicenseFields.COLUMN_PRICEBAND_ARROWSPHERE_SKU]: null,
        [UnknownLicenseFields.COLUMN_QUANTITY]: 2,
        [UnknownLicenseFields.COLUMN_SUBSCRIPTION_START_DATE]:
          '2021-03-15T16:40:14.504682Z',
        [UnknownLicenseFields.COLUMN_FRIENDLY_NAME]:
          'Office 365 E5 without Audio Conferencing',
        [UnknownLicenseFields.COLUMN_IS_RECONCILABLE]: false,
        [UnknownLicenseFields.COLUMN_RECONCILABLE_MESSAGE]:
          "The offer doesn't exist in the xCM",
        [UnknownLicenseFields.COLUMN_IS_ADDON]: false,
        [UnknownLicenseFields.COLUMN_PARENT_SUBSCRIPTION_VENDOR_REFERENCE_ID]:
          '',
        [UnknownLicenseFields.COLUMN_PARENT_PARTNER_REF]: '',
        [UnknownLicenseFields.COLUMN_STATUS]: 'active',
        [UnknownLicenseFields.COLUMN_GROUP]: 'group2',
        [UnknownLicenseFields.COLUMN_RELATIONS]: [],
      },
      {
        [UnknownLicenseFields.COLUMN_VENDOR_REFERENCE_ID]:
          '01234567-0000-1111-2222-333344445555',
        [UnknownLicenseFields.COLUMN_OFFER_NAME]: 'Virtual Machines BS Series',
        [UnknownLicenseFields.COLUMN_OFFER_SKU]: 'DZH318Z0BQ35',
        [UnknownLicenseFields.COLUMN_PRICEBAND_ARROWSPHERE_SKU]:
          'DZH318Z0BQ35_00CQ_8640_720_EUR_21_4Gb_1_CAEast_BSSeries_1',
        [UnknownLicenseFields.COLUMN_QUANTITY]: 1,
        [UnknownLicenseFields.COLUMN_SUBSCRIPTION_START_DATE]: '2021-05-25',
        [UnknownLicenseFields.COLUMN_FRIENDLY_NAME]:
          'Reserved_VM_Instance_Standard_B1s_CA_East_1_Year',
        [UnknownLicenseFields.COLUMN_IS_RECONCILABLE]: true,
        [UnknownLicenseFields.COLUMN_RECONCILABLE_MESSAGE]: '',
        [UnknownLicenseFields.COLUMN_IS_ADDON]: false,
        [UnknownLicenseFields.COLUMN_PARENT_SUBSCRIPTION_VENDOR_REFERENCE_ID]:
          '5924dd50-3dc7-4537-9f5f-7a156de2e4ff',
        [UnknownLicenseFields.COLUMN_PARENT_PARTNER_REF]: 'XSP123456789',
        [UnknownLicenseFields.COLUMN_STATUS]: 'Active',
        [UnknownLicenseFields.COLUMN_GROUP]:
          '74iWsafP-z49nh6_hFQiSYqwoXYHXF1M1',
        [UnknownLicenseFields.COLUMN_RELATIONS]: [
          {
            [RelationFields.COLUMN_TYPE]: 'reservedInstanceOf',
            [RelationFields.COLUMN_PARTNER_REF]: 'XSP123987654',
            [RelationFields.COLUMN_SCOPE]: 'single',
          },
        ],
      },
      {
        [UnknownLicenseFields.COLUMN_VENDOR_REFERENCE_ID]:
          '98765432-aaaa-bbbb-cccc-ddddeeeeffff',
        [UnknownLicenseFields.COLUMN_OFFER_NAME]: 'Virtual Machines BS Series',
        [UnknownLicenseFields.COLUMN_OFFER_SKU]: 'DZH318Z0BQ35',
        [UnknownLicenseFields.COLUMN_PRICEBAND_ARROWSPHERE_SKU]:
          'DZH318Z0BQ35_007T_8640_0_EUR_21_4Gb_1_KRSouth_BSSeries_1',
        [UnknownLicenseFields.COLUMN_QUANTITY]: 1,
        [UnknownLicenseFields.COLUMN_SUBSCRIPTION_START_DATE]: '2021-08-27',
        [UnknownLicenseFields.COLUMN_FRIENDLY_NAME]:
          'Reserved_VM_Instance_Standard_B1s_KR_South_1_Year',
        [UnknownLicenseFields.COLUMN_IS_RECONCILABLE]: false,
        [UnknownLicenseFields.COLUMN_RECONCILABLE_MESSAGE]:
          'No Azure subscription not found. Reconciliate or create one first',
        [UnknownLicenseFields.COLUMN_IS_ADDON]: false,
        [UnknownLicenseFields.COLUMN_PARENT_SUBSCRIPTION_VENDOR_REFERENCE_ID]:
          '',
        [UnknownLicenseFields.COLUMN_PARENT_PARTNER_REF]: '',
        [UnknownLicenseFields.COLUMN_STATUS]: 'Active',
        [UnknownLicenseFields.COLUMN_GROUP]:
          'lWjyllDK0iV27Hm7m9kwSr3g01Qp56BZ1',
        [UnknownLicenseFields.COLUMN_RELATIONS]: [
          {
            [RelationFields.COLUMN_TYPE]: 'reservedInstanceOf',
            [RelationFields.COLUMN_SCOPE]: 'shared',
          },
        ],
      },
      {
        [UnknownLicenseFields.COLUMN_VENDOR_REFERENCE_ID]:
          'c109ed3d-7c9d-4b3b-8b3b-3b3b3b3b3b3b',
        [UnknownLicenseFields.COLUMN_OFFER_NAME]:
          'Azure App Service Premium v3 Plan - Linux',
        [UnknownLicenseFields.COLUMN_OFFER_SKU]: 'DZH318Z0DCR6:003L',
        [UnknownLicenseFields.COLUMN_PRICEBAND_ARROWSPHERE_SKU]:
          'DZH318Z0DCR6_003L_25920_720_DKK',
        [UnknownLicenseFields.COLUMN_QUANTITY]: null,
        [UnknownLicenseFields.COLUMN_SUBSCRIPTION_START_DATE]: null,
        [UnknownLicenseFields.COLUMN_FRIENDLY_NAME]: 'N/A',
        [UnknownLicenseFields.COLUMN_IS_RECONCILABLE]: false,
        [UnknownLicenseFields.COLUMN_RECONCILABLE_MESSAGE]:
          'Unable to fetch RI data on Microsoft side',
        [UnknownLicenseFields.COLUMN_IS_ADDON]: false,
        [UnknownLicenseFields.COLUMN_PARENT_SUBSCRIPTION_VENDOR_REFERENCE_ID]:
          '',
        [UnknownLicenseFields.COLUMN_PARENT_PARTNER_REF]: '',
        [UnknownLicenseFields.COLUMN_STATUS]: 'Active',
        [UnknownLicenseFields.COLUMN_GROUP]:
          'FVEeh1P5tYlxDKEu2RS6aze45crzfr1M1',
        [UnknownLicenseFields.COLUMN_RELATIONS]: [],
      },
    ],
  },
};

export const RESPONSE_CUSTOMER_CREDENTIALS: GetData<CustomerCredentialsType> = {
  [GetResultFields.COLUMN_STATUS]: 200,
  [GetResultFields.COLUMN_DATA]: {
    [CustomerCredentialsFields.COLUMN_PASSWORD]: 'password',
    [CustomerCredentialsFields.COLUMN_URL]: 'https://example.com',
    [CustomerCredentialsFields.COLUMN_USERNAME]: 'username',
    [CustomerCredentialsFields.COLUMN_VENDOR]: 'vendor',
  },
};
