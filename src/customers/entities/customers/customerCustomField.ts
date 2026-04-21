import { AbstractEntity } from '../../../abstractEntity';

export enum CustomerCustomFieldFields {
  COLUMN_LABEL = 'label',
  COLUMN_VALUE = 'value',
}

export type CustomerCustomFieldType = {
  [CustomerCustomFieldFields.COLUMN_LABEL]: string;
  [CustomerCustomFieldFields.COLUMN_VALUE]: string;
};

export class CustomerCustomField extends AbstractEntity<CustomerCustomFieldType> {
  readonly #label: string;
  readonly #value: string;

  public constructor(input: CustomerCustomFieldType) {
    super(input);

    this.#label = input[CustomerCustomFieldFields.COLUMN_LABEL];
    this.#value = input[CustomerCustomFieldFields.COLUMN_VALUE];
  }

  get label(): string {
    return this.#label;
  }

  get value(): string {
    return this.#value;
  }

  public toJSON(): CustomerCustomFieldType {
    return {
      [CustomerCustomFieldFields.COLUMN_LABEL]: this.label,
      [CustomerCustomFieldFields.COLUMN_VALUE]: this.value,
    };
  }
}
