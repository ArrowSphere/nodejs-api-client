import { AbstractEntity } from '../../../../abstractEntity';
import { DateAgg, DateAggType } from './dateAgg';

export enum CategoryEnumFields {
  COLUMN_DATE_AGG = 'dateAgg',
  COLUMN_NAME = 'name',
}

export type CategoryType = {
  [CategoryEnumFields.COLUMN_DATE_AGG]: DateAggType;
  [CategoryEnumFields.COLUMN_NAME]: string;
};

export class Category extends AbstractEntity<CategoryType> {
  readonly #dateAgg: DateAgg;
  readonly #name: string;

  constructor(data: CategoryType) {
    super(data);
    this.#dateAgg = new DateAgg(data.dateAgg);
    this.#name = data.name;
  }

  get dateAgg(): DateAgg {
    return this.#dateAgg;
  }

  get name(): string {
    return this.#name;
  }

  public toJSON(): CategoryType {
    return {
      [CategoryEnumFields.COLUMN_DATE_AGG]: this.dateAgg.toJSON(),
      [CategoryEnumFields.COLUMN_NAME]: this.name,
    };
  }
}
