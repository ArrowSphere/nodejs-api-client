import { AbstractEntity } from '../../../../abstractEntity';

export enum OrderCustomFieldFields {
  COLUMN_LABEL = 'label',
  COLUMN_VALUE = 'value',
}

export type OrderCustomFieldType = {
  [OrderCustomFieldFields.COLUMN_LABEL]: string;
  [OrderCustomFieldFields.COLUMN_VALUE]: string;
};

export class OrderCustomField extends AbstractEntity<OrderCustomFieldType> {
  readonly #label: string;
  readonly #value: string;

  public constructor(input: OrderCustomFieldType) {
    super(input);

    this.#label = input[OrderCustomFieldFields.COLUMN_LABEL];
    this.#value = input[OrderCustomFieldFields.COLUMN_VALUE];
  }

  get label(): string {
    return this.#label;
  }

  get value(): string {
    return this.#value;
  }

  public toJSON(): OrderCustomFieldType {
    return {
      [OrderCustomFieldFields.COLUMN_LABEL]: this.label,
      [OrderCustomFieldFields.COLUMN_VALUE]: this.value,
    };
  }
}
