import {
  GetData,
  GetResultFields,
  PaginationFields,
  ResourcesFields,
  ResourcesType,
  SecurityResourcesFields,
} from '../../../../src';

export const PAYLOAD_RESOURCES_RESPONSE: GetData<ResourcesType> = {
  [GetResultFields.COLUMN_STATUS]: 200,
  [GetResultFields.COLUMN_DATA]: {
    [ResourcesFields.COLUMN_HEADERS]: [
      'Region Name',
      'Region API Parameter',
      'Bucket Name',
      'ACL Allows List',
      'ACL Allows Upload/Delete',
      'Status',
      'Policy Allows Access',
      'Ignored Bucket Name',
    ],
    [ResourcesFields.COLUMN_RESOURCES]: [
      {
        [SecurityResourcesFields.COLUMN_STATUS]: 'FAILED',
        [SecurityResourcesFields.COLUMN_VALUES]: [
          'eu-west-1',
          'eu-west-1',
          'aws-test-angular4-front',
          'No',
          'No',
          'Yellow',
          'Yes',
        ],
      },
    ],
  },
  [GetResultFields.COLUMN_PAGINATION]: {
    [PaginationFields.COLUMN_PER_PAGE]: 15,
    [PaginationFields.COLUMN_CURRENT_PAGE]: 1,
    [PaginationFields.COLUMN_TOTAL_PAGE]: 10,
    [PaginationFields.COLUMN_TOTAL]: 155,
    [PaginationFields.COLUMN_NEXT]: '/security?per_page=15&page=3',
    [PaginationFields.COLUMN_PREVIOUS]: '/security?per_page=15&page=1',
  },
};
