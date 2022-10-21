import { AbstractEntity } from '../../../abstractEntity';
import {
  ActionHistoryResult,
  ActionHistoryResultData,
} from './actionHistoryResult';

export enum LicenceHistoryResultFields {
  COLUMN_ACTIONS = 'actions',
}

export type LicenceHistoryResultData = {
  [LicenceHistoryResultFields.COLUMN_ACTIONS]: ActionHistoryResultData[];
};

export class LicenceHistoryResult extends AbstractEntity<LicenceHistoryResultData> {
  readonly #licenseHistory: ActionHistoryResult[];

  public constructor(
    getLicenseHistoryResultDataInput: LicenceHistoryResultData,
  ) {
    super(getLicenseHistoryResultDataInput);

    this.#licenseHistory = getLicenseHistoryResultDataInput[
      LicenceHistoryResultFields.COLUMN_ACTIONS
    ].map((result: ActionHistoryResultData) => new ActionHistoryResult(result));
  }

  get licenseHistory(): ActionHistoryResult[] {
    return this.#licenseHistory;
  }

  public toJSON(): LicenceHistoryResultData {
    return {
      [LicenceHistoryResultFields.COLUMN_ACTIONS]: this.licenseHistory.map(
        (result: ActionHistoryResult) => result.toJSON(),
      ),
    };
  }
}
