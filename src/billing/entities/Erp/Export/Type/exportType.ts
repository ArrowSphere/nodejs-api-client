import { AbstractEntity } from '../../../../../abstractEntity';

export enum ExportTypeFields {
  COLUMN_NAME = 'name',
  COLUMN_REFERENCE = 'reference',
}

export type ExportTypeType = {
  [ExportTypeFields.COLUMN_NAME]: string;
  [ExportTypeFields.COLUMN_REFERENCE]: string;
};

export class ExportType extends AbstractEntity<ExportTypeType> {
  readonly #name: string;
  readonly #reference: string;

  public constructor(getExportTypesDataInput: ExportTypeType) {
    super(getExportTypesDataInput);

    this.#name = getExportTypesDataInput[ExportTypeFields.COLUMN_NAME];
    this.#reference =
      getExportTypesDataInput[ExportTypeFields.COLUMN_REFERENCE];
  }

  get Name(): string {
    return this.#name;
  }

  get Reference(): string {
    return this.#reference;
  }

  public toJSON(): ExportTypeType {
    return {
      [ExportTypeFields.COLUMN_NAME]: this.Name,
      [ExportTypeFields.COLUMN_REFERENCE]: this.Reference,
    };
  }
}
