import {
  DataKeywords,
  FiltersParameters,
  SortParameters,
} from '../../licensesClient';
import { AbstractEntity } from '../../../abstractEntity';

export enum ActiveSeatsFindResultFields {
  COLUMN_LAST_UPDATE = 'lastUpdate',
  COLUMN_NUMBER = 'number',
}

export type ActiveSeatsFindResultData = {
  [ActiveSeatsFindResultFields.COLUMN_LAST_UPDATE]?: string | null;
  [ActiveSeatsFindResultFields.COLUMN_NUMBER]?: number | null;
};

/**
 * @deprecated type, please use ActiveSeatsFindResultData instead
 */
export type ActiveSeatsFindresultData = ActiveSeatsFindResultData;

export type ActiveSeatsFindResultDataKeywords = {
  [ActiveSeatsFindResultFields.COLUMN_LAST_UPDATE]?: DataKeywords;
  [ActiveSeatsFindResultFields.COLUMN_NUMBER]?: DataKeywords;
};

export type ActiveSeatsFindResultDataSortParameters = {
  [ActiveSeatsFindResultFields.COLUMN_LAST_UPDATE]?: SortParameters;
  [ActiveSeatsFindResultFields.COLUMN_NUMBER]?: SortParameters;
};

export type ActiveSeatsFindResultDataFiltersParameters = {
  [ActiveSeatsFindResultFields.COLUMN_LAST_UPDATE]?: FiltersParameters;
  [ActiveSeatsFindResultFields.COLUMN_NUMBER]?: FiltersParameters;
};

export class ActiveSeatsFindResult extends AbstractEntity<ActiveSeatsFindResultData> {
  readonly #lastUpdate: string | null | undefined;
  readonly #number: number | null | undefined;

  public constructor(data: ActiveSeatsFindResultData) {
    super(data);

    this.#lastUpdate = data[ActiveSeatsFindResultFields.COLUMN_LAST_UPDATE];
    this.#number = data[ActiveSeatsFindResultFields.COLUMN_NUMBER];
  }

  public get lastUpdate(): string | null | undefined {
    return this.#lastUpdate;
  }

  public get number(): number | null | undefined {
    return this.#number;
  }

  public toJSON(): ActiveSeatsFindResultData {
    return {
      [ActiveSeatsFindResultFields.COLUMN_LAST_UPDATE]: this.lastUpdate,
      [ActiveSeatsFindResultFields.COLUMN_NUMBER]: this.number,
    };
  }
}
