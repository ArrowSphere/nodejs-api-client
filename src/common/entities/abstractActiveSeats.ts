import { AbstractEntity } from '../../abstractEntity';
import {
  DataKeywords,
  FiltersParameters,
  SortParameters,
} from '../../licenses/licensesClient';

export enum ActiveSeatsFields {
  COLUMN_LAST_UPDATE = 'lastUpdate',
  COLUMN_NUMBER = 'number',
}

export type ActiveSeatsData = {
  [ActiveSeatsFields.COLUMN_LAST_UPDATE]?: string | null;
  [ActiveSeatsFields.COLUMN_NUMBER]?: number | null;
};

export type ActiveSeatsDataKeywords = {
  [ActiveSeatsFields.COLUMN_LAST_UPDATE]?: DataKeywords;
  [ActiveSeatsFields.COLUMN_NUMBER]?: DataKeywords;
};

export type ActiveSeatsDataSortParameters = {
  [ActiveSeatsFields.COLUMN_LAST_UPDATE]?: SortParameters;
  [ActiveSeatsFields.COLUMN_NUMBER]?: SortParameters;
};

export type ActiveSeatsDataFiltersParameters = {
  [ActiveSeatsFields.COLUMN_LAST_UPDATE]?: FiltersParameters;
  [ActiveSeatsFields.COLUMN_NUMBER]?: FiltersParameters;
};

export abstract class AbstractActiveSeats extends AbstractEntity<ActiveSeatsData> {
  readonly #lastUpdate: string | null | undefined;
  readonly #number: number | null | undefined;

  protected constructor(data: ActiveSeatsData) {
    super(data);

    this.#lastUpdate = data[ActiveSeatsFields.COLUMN_LAST_UPDATE];
    this.#number = data[ActiveSeatsFields.COLUMN_NUMBER];
  }

  public get lastUpdate(): string | null | undefined {
    return this.#lastUpdate;
  }

  public get number(): number | null | undefined {
    return this.#number;
  }

  public toJSON(): ActiveSeatsData {
    return {
      [ActiveSeatsFields.COLUMN_LAST_UPDATE]: this.lastUpdate,
      [ActiveSeatsFields.COLUMN_NUMBER]: this.number,
    };
  }
}
