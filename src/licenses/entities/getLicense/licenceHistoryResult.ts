import { AbstractEntity } from '../../../abstractEntity';
import {
  LicenseHistoryGetData,
  LicenseHistoryResult,
} from '../history/getLicenseHistoryResult';

export enum GetLicenceHistoryResultFields {
  COLUMN_LICENSE_HISTORY = 'actions',
}

export type GetLicenceHistoryResultData = {
  [GetLicenceHistoryResultFields.COLUMN_LICENSE_HISTORY]: LicenseHistoryGetData[];
};

export class GetLicenceHistoryResult extends AbstractEntity<GetLicenceHistoryResultData> {
  readonly #licenseHistory: LicenseHistoryResult[];

  public constructor(
    getLicenseHistoryResultDataInput: GetLicenceHistoryResultData,
  ) {
    super(getLicenseHistoryResultDataInput);

    this.#licenseHistory = getLicenseHistoryResultDataInput[
      GetLicenceHistoryResultFields.COLUMN_LICENSE_HISTORY
    ].map((result: LicenseHistoryGetData) => new LicenseHistoryResult(result));
  }

  get licenseHistory(): LicenseHistoryResult[] {
    return this.#licenseHistory;
  }

  public toJSON(): GetLicenceHistoryResultData {
    return {
      [GetLicenceHistoryResultFields.COLUMN_LICENSE_HISTORY]: this.licenseHistory.map(
        (result: LicenseHistoryResult) => result.toJSON(),
      ),
    };
  }
}
