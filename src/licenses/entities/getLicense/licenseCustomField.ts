import { AbstractEntity } from '../../../abstractEntity';

export enum LicenseCustomFieldFields {
  COLUMN_LABEL = 'label',
  COLUMN_VALUE = 'value',
}

export type LicenseCustomFieldType = {
  [LicenseCustomFieldFields.COLUMN_LABEL]: string;
  [LicenseCustomFieldFields.COLUMN_VALUE]: string;
};

export class LicenseCustomField extends AbstractEntity<LicenseCustomFieldType> {
  readonly #label: string;
  readonly #value: string;

  public constructor(input: LicenseCustomFieldType) {
    super(input);

    this.#label = input[LicenseCustomFieldFields.COLUMN_LABEL];
    this.#value = input[LicenseCustomFieldFields.COLUMN_VALUE];
  }

  get label(): string {
    return this.#label;
  }

  get value(): string {
    return this.#value;
  }

  public toJSON(): LicenseCustomFieldType {
    return {
      [LicenseCustomFieldFields.COLUMN_LABEL]: this.label,
      [LicenseCustomFieldFields.COLUMN_VALUE]: this.value,
    };
  }
}
