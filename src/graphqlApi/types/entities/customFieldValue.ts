import type { CustomFieldKeyType } from './customFieldKey';

export type CustomFieldValueType = {
  id?: number;
  value?: string;
  entity?: string;
  entityId?: number;
  customerFieldKey?: CustomFieldKeyType;
  createdAt?: string;
  createdBy?: string;
};
