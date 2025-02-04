import { AbstractEntity } from '../../../../abstractEntity';

export enum CategoryDateEnumFields {
  COLUMN_COUNT = 'count',
  COLUMN_DATE = 'date',
}

export type CategoryDateType = {
  [CategoryDateEnumFields.COLUMN_COUNT]: number;
  [CategoryDateEnumFields.COLUMN_DATE]: string;
};

export class CategoryDate extends AbstractEntity<CategoryDateType> {
  readonly #count: number;
  readonly #date: string;

  constructor(data: CategoryDateType) {
    super(data);
    this.#count = data.count;
    this.#date = data.date;
  }

  get count(): number {
    return this.#count;
  }

  get date(): string {
    return this.#date;
  }

  public toJSON(): CategoryDateType {
    return {
      [CategoryDateEnumFields.COLUMN_COUNT]: this.count,
      [CategoryDateEnumFields.COLUMN_DATE]: this.date,
    };
  }
}
