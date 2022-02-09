import { AbstractEntity } from '../../../abstractEntity';
import {
  LicenseGetData,
  LicenseGetResult,
} from '../getLicense/licenseGetResult';

export enum GetLicenseResultFields {
  COLUMN_LICENSE = 'license',
}

export type GetLicenseResultData = {
  [GetLicenseResultFields.COLUMN_LICENSE]: LicenseGetData;
};

export class GetLicenseResult extends AbstractEntity<GetLicenseResultData> {
  readonly #license: LicenseGetResult;

  public constructor(getLicenseResultDataInput: GetLicenseResultData) {
    super(getLicenseResultDataInput);

    this.#license = new LicenseGetResult(
      getLicenseResultDataInput[GetLicenseResultFields.COLUMN_LICENSE],
    );
  }

  get license(): LicenseGetResult {
    return this.#license;
  }

  public toJSON(): GetLicenseResultData {
    return {
      [GetLicenseResultFields.COLUMN_LICENSE]: this.license.toJSON(),
    };
  }
}
