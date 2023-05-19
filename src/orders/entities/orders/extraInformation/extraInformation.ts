import { AbstractEntity } from '../../../../abstractEntity';

export enum OrderExtraInformationFields {
  COLUMN_PROGRAMS = 'programs',
}

export type OrderExtraInformationItemType = {
  [key: string]: { [name: string]: string };
};

export type OrderExtraInformationType = {
  [OrderExtraInformationFields.COLUMN_PROGRAMS]: OrderExtraInformationItemType;
};

export class OrderExtraInformation extends AbstractEntity<OrderExtraInformationType> {
  readonly #programs: OrderExtraInformationItemType;

  public constructor(input: OrderExtraInformationType) {
    super(input);

    this.#programs = input[OrderExtraInformationFields.COLUMN_PROGRAMS];
  }

  get programs(): OrderExtraInformationItemType {
    return this.#programs;
  }

  public toJSON(): OrderExtraInformationType {
    return {
      [OrderExtraInformationFields.COLUMN_PROGRAMS]: this.programs,
    };
  }
}
