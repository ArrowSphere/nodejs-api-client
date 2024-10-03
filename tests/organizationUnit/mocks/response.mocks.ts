import {
  GetData,
  GetResultFields,
  OrganizationUnitFields,
  OrganizationUnitListType,
  OrganizationUnitType,
  PaginationFields,
} from '../../../src';
import { constants } from 'http2';

export const ORGANIZATION_UNIT_RESPONSE_LIST_MOCK: GetData<OrganizationUnitListType> = {
  [GetResultFields.COLUMN_STATUS]: constants.HTTP_STATUS_OK,
  [GetResultFields.COLUMN_DATA]: [
    {
      [OrganizationUnitFields.COLUMN_ORGANIZATION_UNIT_REF]: 'XSPOU17727',
      [OrganizationUnitFields.COLUMN_COMPANY_REF]: 'XSP17727',
      [OrganizationUnitFields.COLUMN_NAME]: 'MyCompany',
      [OrganizationUnitFields.COLUMN_COUNT_USERS]: 1,
      [OrganizationUnitFields.COLUMN_COUNT_CUSTOMERS]: 3,
      [OrganizationUnitFields.COLUMN_COUNT_LICENSES]: 42,
      [OrganizationUnitFields.COLUMN_COUNT_ORDERS]: 54,
    },
    {
      [OrganizationUnitFields.COLUMN_ORGANIZATION_UNIT_REF]: 'XSPOU17728',
      [OrganizationUnitFields.COLUMN_COMPANY_REF]: 'XSP17830',
      [OrganizationUnitFields.COLUMN_NAME]: 'MyCompany2',
      [OrganizationUnitFields.COLUMN_COUNT_USERS]: 2,
      [OrganizationUnitFields.COLUMN_COUNT_CUSTOMERS]: 4,
      [OrganizationUnitFields.COLUMN_COUNT_LICENSES]: 42,
      [OrganizationUnitFields.COLUMN_COUNT_ORDERS]: 54,
    },
  ],
  [GetResultFields.COLUMN_PAGINATION]: {
    [PaginationFields.COLUMN_PER_PAGE]: 2,
    [PaginationFields.COLUMN_CURRENT_PAGE]: 1,
    [PaginationFields.COLUMN_TOTAL_PAGE]: 1,
    [PaginationFields.COLUMN_TOTAL]: 2,
    [PaginationFields.COLUMN_NEXT]: null,
    [PaginationFields.COLUMN_PREVIOUS]: null,
  },
};

export const ORGANIZATION_UNIT_CREATE_RESPONSE_MOCK: GetData<OrganizationUnitType> = {
  [GetResultFields.COLUMN_STATUS]: constants.HTTP_STATUS_CREATED,
  [GetResultFields.COLUMN_DATA]: {
    [OrganizationUnitFields.COLUMN_ORGANIZATION_UNIT_REF]: 'XSPOU17727',
    [OrganizationUnitFields.COLUMN_COMPANY_REF]: 'XSP17727',
    [OrganizationUnitFields.COLUMN_NAME]: 'MyOrganizationUnit',
  },
};

export const ORGANIZATION_UNIT_GET_RESPONSE_MOCK: GetData<OrganizationUnitType> = {
  [GetResultFields.COLUMN_STATUS]: constants.HTTP_STATUS_OK,
  [GetResultFields.COLUMN_DATA]: {
    [OrganizationUnitFields.COLUMN_ORGANIZATION_UNIT_REF]: 'XSPOU17727',
    [OrganizationUnitFields.COLUMN_COMPANY_REF]: 'XSP17727',
    [OrganizationUnitFields.COLUMN_NAME]: 'MyOrganizationUnit',
    [OrganizationUnitFields.COLUMN_COUNT_USERS]: 1,
    [OrganizationUnitFields.COLUMN_COUNT_CUSTOMERS]: 3,
    [OrganizationUnitFields.COLUMN_COUNT_LICENSES]: 42,
    [OrganizationUnitFields.COLUMN_COUNT_ORDERS]: 54,
  },
};

export const ORGANIZATION_UNIT_PATCH_RESPONSE_MOCK: GetData<OrganizationUnitType> = {
  [GetResultFields.COLUMN_STATUS]: constants.HTTP_STATUS_OK,
  [GetResultFields.COLUMN_DATA]: {
    [OrganizationUnitFields.COLUMN_ORGANIZATION_UNIT_REF]: 'XSPOU17727',
    [OrganizationUnitFields.COLUMN_COMPANY_REF]: 'XSP17727',
    [OrganizationUnitFields.COLUMN_NAME]: 'MyOrganizationUnit2',
  },
};
