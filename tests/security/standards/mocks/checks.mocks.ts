import {
  ChecksFields,
  ChecksType,
  GetData,
  GetResultFields,
  PaginationFields,
  SecurityChecksFields,
} from '../../../../src';

export const PAYLOAD_CHECKS_RESPONSE: GetData<ChecksType> = {
  [GetResultFields.COLUMN_STATUS]: 200,
  [GetResultFields.COLUMN_DATA]: {
    [ChecksFields.COLUMN_CHECKS]: [
      {
        [SecurityChecksFields.COLUMN_DESCRIPTION]:
          'Checks buckets in Amazon Simple Storage Service (Amazon S3) that have open access permissions or allow access to any authenticated AWS user. ...',
        [SecurityChecksFields.COLUMN_FLAGGED]: 1,
        [SecurityChecksFields.COLUMN_IS_FAILED]: true,
        [SecurityChecksFields.COLUMN_METADATA]: [
          'Region Name',
          'Region API Parameter',
          'Bucket Name',
          'ACL Allows List',
          'ACL Allows Upload/Delete',
          'Status',
          'Policy Allows Access',
          'Ignored Bucket Name',
        ],
        [SecurityChecksFields.COLUMN_NAME]: 'Amazon S3 Bucket Permissions',
        [SecurityChecksFields.COLUMN_PROCESSED]: 375,
        [SecurityChecksFields.COLUMN_REFERENCE]:
          'a2cb10a4-3c97-4927-a56a-a70c6266033b',
        [SecurityChecksFields.COLUMN_SCORE]: 0.9973333333333333,
        [SecurityChecksFields.COLUMN_SEVERITY]: 'CRITICAL',
      },
    ],
    [ChecksFields.COLUMN_UPDATED_AT]: '2021-12-06T18:00:00Z',
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
