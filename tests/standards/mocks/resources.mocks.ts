import { PaginationFields } from '../../../src/pagination';
import {
  GetData,
  GetResultFields,
  ResourcesFields,
  ResourcesType,
  SecurityResourcesFields,
} from '../../../src';

export const PAYLOAD_RESOURCES_RESPONSE: GetData<ResourcesType> = {
  [GetResultFields.COLUMN_STATUS]: 200,
  [GetResultFields.COLUMN_DATA]: {
    [ResourcesFields.COLUMN_DESCRIPTION]:
      'Checks buckets in Amazon Simple Storage Service (Amazon S3) that have open access permissions or allow access to any authenticated AWS user. ...',
    [ResourcesFields.COLUMN_METADATA]: [
      'Region Name',
      'Region API Parameter',
      'Bucket Name',
      'ACL Allows List',
      'ACL Allows Upload/Delete',
      'Status',
      'Policy Allows Access',
      'Ignored Bucket Name',
    ],
    [ResourcesFields.COLUMN_NAME]: 'Amazon S3 Bucket Permissions',
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
    [ResourcesFields.COLUMN_UPDATED_AT]: '2021-12-06T18:00:00Z',
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
