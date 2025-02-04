import { AbstractEntity } from '../../../../abstractEntity';
import { CategoryDate, CategoryDateType } from './categoryDate';

export enum DateAggFields {
  COLUMN_COUNT = 'count',
  COLUMN_DATES = 'dates',
  COLUMN_FROM = 'from',
}

export type DateAggType = {
  [DateAggFields.COLUMN_COUNT]: number;
  [DateAggFields.COLUMN_DATES]: CategoryDateType[];
  [DateAggFields.COLUMN_FROM]: string;
};

export class DateAgg extends AbstractEntity<DateAggType> {
  readonly #count: number;
  readonly #dates: CategoryDate[];
  readonly #from: string;

  constructor(data: DateAggType) {
    super(data);
    this.#count = data.count;
    this.#dates = data.dates.map((date) => new CategoryDate(date));
    this.#from = data.from;
  }

  get count(): number {
    return this.#count;
  }

  get dates(): CategoryDate[] {
    return this.#dates;
  }

  get from(): string {
    return this.#from;
  }

  public toJSON(): DateAggType {
    return {
      [DateAggFields.COLUMN_COUNT]: this.count,
      [DateAggFields.COLUMN_DATES]: this.dates.map((date) => date.toJSON()),
      [DateAggFields.COLUMN_FROM]: this.from,
    };
  }
}
