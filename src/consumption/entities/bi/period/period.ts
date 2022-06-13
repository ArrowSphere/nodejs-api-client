import { AbstractEntity } from '../../../../abstractEntity';

export enum PeriodFields {
  COLUMN_FROM = 'from',
  COLUMN_TO = 'to',
}

export type PeriodType = {
  [PeriodFields.COLUMN_FROM]: string;
  [PeriodFields.COLUMN_TO]: string;
};

export class Period extends AbstractEntity<PeriodType> {
  readonly #from: string;
  readonly #to: string;

  public constructor(periodResponse: PeriodType) {
    super(periodResponse);

    this.#from = periodResponse[PeriodFields.COLUMN_FROM];
    this.#to = periodResponse[PeriodFields.COLUMN_TO];
  }

  get from(): string {
    return this.#from;
  }

  get to(): string {
    return this.#to;
  }

  public toJSON(): PeriodType {
    return {
      [PeriodFields.COLUMN_FROM]: this.from,
      [PeriodFields.COLUMN_TO]: this.to,
    };
  }
}
