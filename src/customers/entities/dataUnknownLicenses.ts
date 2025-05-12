import { AbstractEntity } from '../../abstractEntity';
import {
  UnknownLicense,
  UnknownLicenseType,
} from './unknownLicenses/unknownLicense';

export enum DataUnknownLicensesFields {
  COLUMN_UNKNOWN_LICENSES = 'unknownLicenses',
}

export type DataUnknownLicenseType = {
  [DataUnknownLicensesFields.COLUMN_UNKNOWN_LICENSES]: UnknownLicenseType[];
};

export class DataUnknownLicenses extends AbstractEntity<DataUnknownLicenseType> {
  readonly #unknownLicenses: UnknownLicense[];

  public constructor(dataUnknownLicenseDataInput: DataUnknownLicenseType) {
    super(dataUnknownLicenseDataInput);

    this.#unknownLicenses = dataUnknownLicenseDataInput[
      DataUnknownLicensesFields.COLUMN_UNKNOWN_LICENSES
    ].map((result) => new UnknownLicense(result));
  }

  get unknownLicenses(): UnknownLicense[] {
    return this.#unknownLicenses;
  }

  public toJSON(): DataUnknownLicenseType {
    return {
      [DataUnknownLicensesFields.COLUMN_UNKNOWN_LICENSES]: this.unknownLicenses.map(
        (result) => result.toJSON(),
      ),
    };
  }
}
