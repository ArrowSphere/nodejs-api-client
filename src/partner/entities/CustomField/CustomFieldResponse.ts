import { AbstractEntity } from '../../../abstractEntity';

export enum CustomFieldFields {
  COLUMN_ID = 'id',
  COLUMN_LABEL = 'label',
  COLUMN_IS_ACTIVE = 'isActive',
  COLUMN_IS_USED = 'isUsed',
  COLUMN_ENTITY = 'entity',
  COLUMN_CREATED_AT = 'createdAt',
  COLUMN_CREATED_BY = 'createdBy',
}
export type CustomFieldType = {
  [CustomFieldFields.COLUMN_ID]: number;
  [CustomFieldFields.COLUMN_LABEL]: string;
  [CustomFieldFields.COLUMN_IS_ACTIVE]: boolean;
  [CustomFieldFields.COLUMN_IS_USED]: boolean;
  [CustomFieldFields.COLUMN_ENTITY]: string;
  [CustomFieldFields.COLUMN_CREATED_AT]: string;
  [CustomFieldFields.COLUMN_CREATED_BY]: string;
};

export class CustomFieldResponse extends AbstractEntity<CustomFieldType> {
  readonly #id;
  readonly #label;
  readonly #entity;
  readonly #isActive;
  readonly #isUsed;
  readonly #createdAt;
  readonly #createdBy;

  public constructor(customFieldInput: CustomFieldType) {
    super(customFieldInput);
    this.#id = customFieldInput[CustomFieldFields.COLUMN_ID];
    this.#label = customFieldInput[CustomFieldFields.COLUMN_LABEL];
    this.#entity = customFieldInput[CustomFieldFields.COLUMN_ENTITY];
    this.#isActive = customFieldInput[CustomFieldFields.COLUMN_IS_ACTIVE];
    this.#isUsed = customFieldInput[CustomFieldFields.COLUMN_IS_USED];
    this.#createdAt = customFieldInput[CustomFieldFields.COLUMN_CREATED_AT];
    this.#createdBy = customFieldInput[CustomFieldFields.COLUMN_CREATED_BY];
  }

  get id(): number {
    return this.#id;
  }

  get label(): string {
    return this.#label;
  }

  get isActive(): boolean {
    return this.#isActive;
  }

  get isUsed(): boolean {
    return this.#isUsed;
  }

  get createdAt(): string {
    return this.#createdAt;
  }

  get createdBy(): string {
    return this.#createdBy;
  }

  get entity(): string {
    return this.#entity;
  }

  public toJSON(): CustomFieldType {
    return {
      [CustomFieldFields.COLUMN_ID]: this.id,
      [CustomFieldFields.COLUMN_LABEL]: this.label,
      [CustomFieldFields.COLUMN_ENTITY]: this.entity,
      [CustomFieldFields.COLUMN_IS_ACTIVE]: this.isActive,
      [CustomFieldFields.COLUMN_IS_USED]: this.isUsed,
      [CustomFieldFields.COLUMN_CREATED_AT]: this.createdAt,
      [CustomFieldFields.COLUMN_CREATED_BY]: this.createdBy,
    };
  }
}
