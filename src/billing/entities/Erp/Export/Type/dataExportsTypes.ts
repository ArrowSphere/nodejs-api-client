import { AbstractEntity } from '../../../../../abstractEntity';
import { ExportType } from './exportType';

export enum DataExportsTypesFields {
  COLUMN_EXPORTS_TYPES = 'exportTypes',
}

export type DataExportsTypesType = {
  [DataExportsTypesFields.COLUMN_EXPORTS_TYPES]: Array<{ [k: string]: string }>;
};

export class DataExportsTypes extends AbstractEntity<DataExportsTypesType> {
  readonly #ExportsTypes: Array<ExportType>;

  public constructor(ExportsTypesDataInput: DataExportsTypesType) {
    super(ExportsTypesDataInput);

    this.#ExportsTypes = ExportsTypesDataInput[
      DataExportsTypesFields.COLUMN_EXPORTS_TYPES
    ].map(
      (result) =>
        new ExportType({
          name: Object.values(result)[0],
          reference: Object.keys(result)[0],
        }),
    );
  }

  get ExportsTypes(): Array<ExportType> {
    return this.#ExportsTypes;
  }

  public toJSON(): DataExportsTypesType {
    return {
      [DataExportsTypesFields.COLUMN_EXPORTS_TYPES]: this.ExportsTypes.map(
        (result) => result.toJSON(),
      ),
    };
  }
}
