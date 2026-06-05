import { BaseCompanyType } from './company';
import type { CustomFieldValueType } from './customFieldValue';

export type CustomFieldKeyType = {
  id?: number;
  label?: string;
  company?: BaseCompanyType;
  entity?: string;
  customerFieldValue?: CustomFieldValueType[];
  isActive?: boolean;
  createdAt?: string;
  createdBy?: string;
};
