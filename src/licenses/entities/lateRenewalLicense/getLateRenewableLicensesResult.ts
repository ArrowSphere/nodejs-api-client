import { AbstractEntity } from '../../../abstractEntity';
import {
  GetLateRenewableLicensesData,
  GetLateRenewableLicenseData,
} from './LicenseRenewableLicenseData';
import { GetLateRenewableLicenseResult } from './getLateRenewableLicenseResult';

export enum GetLateRenewableLicensesResultFields {
  COLUMN_LATE_RENEWABLE_LICENSES = 'lateRenewableLicenses',
}

export class GetLateRenewableLicensesResult extends AbstractEntity<GetLateRenewableLicensesData> {
  readonly #lateRenewableLicenses: GetLateRenewableLicenseResult[];

  public constructor(
    input: GetLateRenewableLicensesData | GetLateRenewableLicenseData[],
  ) {
    const normalizedInput: GetLateRenewableLicensesData = Array.isArray(input)
      ? {
          [GetLateRenewableLicensesResultFields.COLUMN_LATE_RENEWABLE_LICENSES]: input,
        }
      : input;

    super(normalizedInput);

    this.#lateRenewableLicenses = normalizedInput[
      GetLateRenewableLicensesResultFields.COLUMN_LATE_RENEWABLE_LICENSES
    ].map(
      (result: GetLateRenewableLicenseData) =>
        new GetLateRenewableLicenseResult(result),
    );
  }

  getLateRenewableLicenses(): GetLateRenewableLicenseResult[] {
    return this.#lateRenewableLicenses;
  }

  public toJSON(): GetLateRenewableLicensesData {
    return {
      [GetLateRenewableLicensesResultFields.COLUMN_LATE_RENEWABLE_LICENSES]: this.#lateRenewableLicenses.map(
        (result: GetLateRenewableLicenseResult) => result.toJSON(),
      ),
    };
  }
}
