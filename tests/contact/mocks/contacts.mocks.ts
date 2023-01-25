import {
  GetData,
  GetResultFields,
  ContactInformation,
  PaginationFields,
} from '../../../src';
import { constants } from 'http2';

export const CONTACT_CREATE_REQUEST: ContactInformation.ContactRequestType = {
  [ContactInformation.ContactRequestFields.COLUMN_FIRSTNAME]: 'John',
  [ContactInformation.ContactRequestFields.COLUMN_LASTNAME]: 'Doe',
  [ContactInformation.ContactRequestFields.COLUMN_EMAIL]:
    'john.doe@company.com',
  [ContactInformation.ContactRequestFields.COLUMN_PHONE]: '+33 (0)123456789',
  [ContactInformation.ContactRequestFields.COLUMN_ERP_ID]: '1',
  [ContactInformation.ContactRequestFields.COLUMN_TYPE]: 'MSP',
  [ContactInformation.ContactRequestFields.COLUMN_ROLE]: 'primary',
};

export const CONTACT_CREATE_WITH_USERNAME_REQUEST: ContactInformation.ContactRequestType = {
  [ContactInformation.ContactRequestFields.COLUMN_USERNAME]:
    '3d701bc6-a087-4354-9134-9234e64cbc7c',
  [ContactInformation.ContactRequestFields.COLUMN_FIRSTNAME]: 'John',
  [ContactInformation.ContactRequestFields.COLUMN_LASTNAME]: 'Doe',
  [ContactInformation.ContactRequestFields.COLUMN_EMAIL]:
    'john.doe@company.com',
  [ContactInformation.ContactRequestFields.COLUMN_PHONE]: '+33 (0)123456789',
  [ContactInformation.ContactRequestFields.COLUMN_ERP_ID]: '1',
  [ContactInformation.ContactRequestFields.COLUMN_TYPE]: 'MSP',
  [ContactInformation.ContactRequestFields.COLUMN_ROLE]: 'primary',
};

export const CONTACT_CREATE_RESPONSE: GetData<ContactInformation.ContactCreateType> = {
  [GetResultFields.COLUMN_STATUS]: constants.HTTP_STATUS_OK,
  [GetResultFields.COLUMN_DATA]: {
    [ContactInformation.ContactCreateFields.COLUMN_ID]: 1234,
  },
};

export const CONTACT_RESPONSE: ContactInformation.ContactType = {
  [ContactInformation.ContactFields.COLUMN_ID]: 1,
  [ContactInformation.ContactFields.COLUMN_USERNAME]: null,
  [ContactInformation.ContactFields.COLUMN_COMPANY_ID]: 1,
  [ContactInformation.ContactFields.COLUMN_RESELLER]: 'XSP4767',
  [ContactInformation.ContactFields.COLUMN_FIRSTNAME]: 'John',
  [ContactInformation.ContactFields.COLUMN_LASTNAME]: 'Doe',
  [ContactInformation.ContactFields.COLUMN_EMAIL]: 'john.doe@company.com',
  [ContactInformation.ContactFields.COLUMN_PHONE]: '+33 (0)123456789',
  [ContactInformation.ContactFields.COLUMN_ERP_ID]: '1',
  [ContactInformation.ContactFields.COLUMN_TYPE]: 'MSP',
  [ContactInformation.ContactFields.COLUMN_ROLE]: 'primary',
  [ContactInformation.ContactFields.COLUMN_STATUS]: 'active',
};

export const CONTACT_WITH_USERNAME_RESPONSE: ContactInformation.ContactType = {
  [ContactInformation.ContactFields.COLUMN_ID]: 1,
  [ContactInformation.ContactFields.COLUMN_USERNAME]:
    '3d701bc6-a087-4354-9134-9234e64cbc7c',
  [ContactInformation.ContactFields.COLUMN_COMPANY_ID]: 1,
  [ContactInformation.ContactFields.COLUMN_RESELLER]: 'XSP4767',
  [ContactInformation.ContactFields.COLUMN_FIRSTNAME]: 'John',
  [ContactInformation.ContactFields.COLUMN_LASTNAME]: 'Doe',
  [ContactInformation.ContactFields.COLUMN_EMAIL]: 'john.doe@company.com',
  [ContactInformation.ContactFields.COLUMN_PHONE]: '+33 (0)123456789',
  [ContactInformation.ContactFields.COLUMN_ERP_ID]: '1',
  [ContactInformation.ContactFields.COLUMN_TYPE]: 'MSP',
  [ContactInformation.ContactFields.COLUMN_ROLE]: 'primary',
  [ContactInformation.ContactFields.COLUMN_STATUS]: 'active',
};

export const CONTACT_LIST_RESPONSE: GetData<ContactInformation.ContactListType> = {
  [GetResultFields.COLUMN_STATUS]: constants.HTTP_STATUS_OK,
  [GetResultFields.COLUMN_DATA]: [CONTACT_RESPONSE],
  [GetResultFields.COLUMN_PAGINATION]: {
    [PaginationFields.COLUMN_PER_PAGE]: 25,
    [PaginationFields.COLUMN_CURRENT_PAGE]: 1,
    [PaginationFields.COLUMN_TOTAL_PAGE]: 10,
    [PaginationFields.COLUMN_TOTAL]: 155,
    [PaginationFields.COLUMN_NEXT]: '/contacts?per_page=15&page=3',
    [PaginationFields.COLUMN_PREVIOUS]: '/contacts?per_page=15&page=1',
  },
};

export const CONTACT_GET_RESPONSE: GetData<ContactInformation.ContactType> = {
  [GetResultFields.COLUMN_STATUS]: constants.HTTP_STATUS_OK,
  [GetResultFields.COLUMN_DATA]: CONTACT_RESPONSE,
};

export const CONTACT_GET_WITH_USERNAME_RESPONSE: GetData<ContactInformation.ContactType> = {
  [GetResultFields.COLUMN_STATUS]: constants.HTTP_STATUS_OK,
  [GetResultFields.COLUMN_DATA]: CONTACT_WITH_USERNAME_RESPONSE,
};

export const CONTACT_PATCH_RESPONSE: GetData<ContactInformation.ContactType> = {
  [GetResultFields.COLUMN_STATUS]: constants.HTTP_STATUS_OK,
  [GetResultFields.COLUMN_DATA]: CONTACT_RESPONSE,
};

export const CONTACT_PATCH_WITH_USERNAME_RESPONSE: GetData<ContactInformation.ContactType> = {
  [GetResultFields.COLUMN_STATUS]: constants.HTTP_STATUS_OK,
  [GetResultFields.COLUMN_DATA]: CONTACT_WITH_USERNAME_RESPONSE,
};

export const CONTACT_PATCH_REQUEST: ContactInformation.ContactRequestType = {
  [ContactInformation.ContactRequestFields.COLUMN_FIRSTNAME]: 'John',
  [ContactInformation.ContactRequestFields.COLUMN_LASTNAME]: 'Doe',
  [ContactInformation.ContactRequestFields.COLUMN_EMAIL]:
    'john.doe@company.com',
  [ContactInformation.ContactRequestFields.COLUMN_PHONE]: '+33 (0)123456789',
  [ContactInformation.ContactRequestFields.COLUMN_ERP_ID]: '1',
  [ContactInformation.ContactRequestFields.COLUMN_TYPE]: 'MSP',
  [ContactInformation.ContactRequestFields.COLUMN_ROLE]: 'primary',
};

export const CONTACT_PATCH_WITH_USERNAME_REQUEST: ContactInformation.ContactRequestType = {
  [ContactInformation.ContactRequestFields.COLUMN_USERNAME]:
    '3d701bc6-a087-4354-9134-9234e64cbc7c',
  [ContactInformation.ContactRequestFields.COLUMN_FIRSTNAME]: 'John',
  [ContactInformation.ContactRequestFields.COLUMN_LASTNAME]: 'Doe',
  [ContactInformation.ContactRequestFields.COLUMN_EMAIL]:
    'john.doe@company.com',
  [ContactInformation.ContactRequestFields.COLUMN_PHONE]: '+33 (0)123456789',
  [ContactInformation.ContactRequestFields.COLUMN_ERP_ID]: '1',
  [ContactInformation.ContactRequestFields.COLUMN_TYPE]: 'MSP',
  [ContactInformation.ContactRequestFields.COLUMN_ROLE]: 'primary',
};
