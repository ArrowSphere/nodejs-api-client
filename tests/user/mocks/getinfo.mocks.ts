// PAYLOADS
import {
  CompleteWhoAmICompanyFields,
  CompleteWhoAmIResponseData,
  CompleteWhoAmIResponseFields,
  CompleteWhoAmIUserFields,
  GetData,
  GetResultFields,
} from '../../../src';

export const PAYLOAD_USER: GetData<CompleteWhoAmIResponseData> = {
  [GetResultFields.COLUMN_STATUS]: 200,
  [GetResultFields.COLUMN_DATA]: {
    [CompleteWhoAmIResponseFields.COLUMN_COMPANY]: {
      [CompleteWhoAmICompanyFields.COLUMN_COMPANY_RESTRICTED]: false,
      [CompleteWhoAmICompanyFields.COLUMN_COUNTRY_CODE]: 'MyCompany',
      [CompleteWhoAmICompanyFields.COLUMN_ERP_ID]: '42',
      [CompleteWhoAmICompanyFields.COLUMN_HAS_ACCESS_TO_CUSTOM_ASSISTANT]: true,
      [CompleteWhoAmICompanyFields.COLUMN_HAS_ACCESS_TO_XCM]: true,
      [CompleteWhoAmICompanyFields.COLUMN_HAS_ACCESS_TO_XCP]: true,
      [CompleteWhoAmICompanyFields.COLUMN_HAS_ACCESS_TO_XCP_AI]: true,
      [CompleteWhoAmICompanyFields.COLUMN_IS_PROTECTED]: true,
      [CompleteWhoAmICompanyFields.COLUMN_MARKETPLACE]: 'FR',
      [CompleteWhoAmICompanyFields.COLUMN_NAME]: 'test',
      [CompleteWhoAmICompanyFields.COLUMN_REFERENCE]: 'MyCompany',
      [CompleteWhoAmICompanyFields.COLUMN_TAGS]: ['MyCompany'],
      [CompleteWhoAmICompanyFields.COLUMN_UNIT]: {
        name: 'MyCompany',
        symbol: 'test',
      },
    },
    [CompleteWhoAmIResponseFields.COLUMN_USER]: {
      [CompleteWhoAmIUserFields.COLUMN_FIRSTNAME]: 'test',
      [CompleteWhoAmIUserFields.COLUMN_LASTNAME]: 'test',
      [CompleteWhoAmIUserFields.COLUMN_LOGIN]: 'test',
      [CompleteWhoAmIUserFields.COLUMN_PHONE_NUMBER]: 'test',
      [CompleteWhoAmIUserFields.COLUMN_POLICIES]: ['test'],
      [CompleteWhoAmIUserFields.COLUMN_REFERENCE]: 'test',
      [CompleteWhoAmIUserFields.COLUMN_RIGHTS]: ['test'],
      [CompleteWhoAmIUserFields.COLUMN_SCOPES]: ['test'],
      [CompleteWhoAmIUserFields.COLUMN_XAP_USERNAME]: 'test',
      [CompleteWhoAmIUserFields.COLUMN_CAN_IMPERSONATE]: [
        {
          username: 'string',
          firstname: 'string',
          lastname: 'string',
          company: 'string',
        },
      ],
      [CompleteWhoAmIUserFields.COLUMN_HAS_LEGAL_DOCUMENT]: true,
    },
  },
};
