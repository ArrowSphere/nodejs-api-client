import { AbstractEntity } from '../../../abstractEntity';
import {
  DataKeywords,
  FiltersParameters,
  SortParameters,
} from '../../licensesClient';

export enum SecurityFindResultFields {
  COLUMN_ACTIVE_FRAUD_EVENTS = 'activeFraudEvents',
}

export type SecurityFindResultData = {
  [SecurityFindResultFields.COLUMN_ACTIVE_FRAUD_EVENTS]?: number | null;
};

export type SecurityFindResultDataKeywords = {
  [SecurityFindResultFields.COLUMN_ACTIVE_FRAUD_EVENTS]?: DataKeywords;
};

export type SecurityFindResultDataSortParameters = {
  [SecurityFindResultFields.COLUMN_ACTIVE_FRAUD_EVENTS]?: SortParameters;
};

export type SecurityFindResultDataFiltersParameters = {
  [SecurityFindResultFields.COLUMN_ACTIVE_FRAUD_EVENTS]?: FiltersParameters;
};

export class SecurityFindResult extends AbstractEntity<SecurityFindResultData> {
  readonly #activeFraudEvents: number | null | undefined;

  public constructor(data: SecurityFindResultData) {
    super(data);

    this.#activeFraudEvents =
      data[SecurityFindResultFields.COLUMN_ACTIVE_FRAUD_EVENTS];
  }

  public get activeFraudEvents(): number | null | undefined {
    return this.#activeFraudEvents;
  }

  public toJSON(): SecurityFindResultData {
    return {
      [SecurityFindResultFields.COLUMN_ACTIVE_FRAUD_EVENTS]: this
        .activeFraudEvents,
    };
  }
}
