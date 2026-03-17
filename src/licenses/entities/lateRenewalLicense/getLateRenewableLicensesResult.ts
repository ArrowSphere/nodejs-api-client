import { AbstractEntity } from '../../../abstractEntity';
import { GetLateRenewableLicenseData } from './LicenseRenewableLicenseData';
import { GetLateRenewableLicenseResult } from './getLateRenewableLicenseResult';

export class GetLateRenewableLicensesResult extends AbstractEntity<
  GetLateRenewableLicenseData[]
> {
  readonly #lateRenewableLicenses: GetLateRenewableLicenseResult[];

  public constructor(input: GetLateRenewableLicenseData[]) {
    super(input);

    this.#lateRenewableLicenses = input.map(
      (result: GetLateRenewableLicenseData) =>
        new GetLateRenewableLicenseResult(result),
    );
  }

  get lateRenewableLicenses(): GetLateRenewableLicenseResult[] {
    return this.#lateRenewableLicenses;
  }

  public toJSON(): GetLateRenewableLicenseData[] {
    return this.lateRenewableLicenses.map(
      (result: GetLateRenewableLicenseResult) => result.toJSON(),
    );
  }
}
