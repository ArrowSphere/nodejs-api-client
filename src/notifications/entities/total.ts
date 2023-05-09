import { AbstractEntity } from '../../abstractEntity';

export enum TotalFields {
  COLUMN_TOTAL = 'total',
}

export type TotalType = {
  [TotalFields.COLUMN_TOTAL]: number;
};

export class Total extends AbstractEntity<TotalType> {
  readonly #total: number;

  public constructor(total: TotalType) {
    super(total);

    this.#total = total[TotalFields.COLUMN_TOTAL];
  }

  get total(): number {
    return this.#total;
  }

  public toJSON(): TotalType {
    return {
      [TotalFields.COLUMN_TOTAL]: this.total,
    };
  }
}
