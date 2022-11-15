import {
  GetData,
  GetResultFields,
  SecurityStandardsFields,
  StandardsFields,
  StandardsType,
} from '../../../src';
import { PaginationFields } from '../../../src/pagination';

export const PAYLOAD_STANDARDS_RESPONSE: GetData<StandardsType> = {
  [GetResultFields.COLUMN_STATUS]: 200,
  [GetResultFields.COLUMN_DATA]: {
    [StandardsFields.COLUMN_STANDARDS]: [
      {
        [SecurityStandardsFields.COLUMN_FAILED]: 24,
        [SecurityStandardsFields.COLUMN_NAME]: 'Trusted advisor',
        [SecurityStandardsFields.COLUMN_PASSED]: 107,
        [SecurityStandardsFields.COLUMN_REFERENCE]:
          'c1617b95-db6e-40f0-8aa2-ad8c72b53bfb',
        [SecurityStandardsFields.COLUMN_SCORE]: 0.816793893129771,
        [SecurityStandardsFields.COLUMN_TOTAL]: 131,
      },
    ],
    [StandardsFields.COLUMN_UPDATED_AT]: '2021-12-06T18:00:00Z',
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
