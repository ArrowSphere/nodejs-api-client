import {
  GetLateRenewableLicensesData,
  GetLateRenewableLicenseData,
} from './LicenseRenewableLicenseData';

export enum GetLateRenewableLicensesResultFields {
  COLUMN_LATE_RENEWABLE_LICENSES = 'lateRenewableLicenses',
}

export class GetLateRenewableLicensesResult {
  readonly #lateRenewableLicenses: GetLateRenewableLicenseData[];

  public constructor(data: GetLateRenewableLicenseData[]) {
    this.#lateRenewableLicenses = data;
  }

  get lateRenewableLicenses(): GetLateRenewableLicenseData[] {
    return this.#lateRenewableLicenses;
  }

  public toJSON(): GetLateRenewableLicensesData {
    return {
      [GetLateRenewableLicensesResultFields.COLUMN_LATE_RENEWABLE_LICENSES]: this
        .lateRenewableLicenses,
    };
  }
}
