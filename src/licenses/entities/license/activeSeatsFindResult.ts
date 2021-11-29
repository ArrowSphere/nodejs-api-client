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

export type ActiveSeatsFindresultData = {
  [ActiveSeatsFindResultFields.COLUMN_LAST_UPDATE]?: string | null;
  [ActiveSeatsFindResultFields.COLUMN_NUMBER]?: number | null;
};

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

export class ActiveSeatsFindResult extends AbstractEntity<ActiveSeatsFindresultData> {
  readonly #lastUpdate: string | null | undefined;
  readonly #number: number | null | undefined;

  public constructor(data: ActiveSeatsFindresultData) {
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

  public toJSON(): ActiveSeatsFindresultData {
    return {
      [ActiveSeatsFindResultFields.COLUMN_LAST_UPDATE]: this.lastUpdate,
      [ActiveSeatsFindResultFields.COLUMN_NUMBER]: this.number,
    };
  }
}
