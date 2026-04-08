export enum CustomFieldEntityEnum {
  COMPANY = 'COMPANY',
  ORDER_ITEM = 'ORDER_ITEM',
}

export type createCustomFieldType = {
  label: string;
  entity: CustomFieldEntityEnum;
  isActive: boolean;
};
