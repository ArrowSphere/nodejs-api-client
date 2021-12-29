import { AbstractEntity } from '../../../abstractEntity';

export enum OrderFields {
  COLUMN_REFRENCE = 'refrence',
  COLUMN_LINK = 'link',
}

export type OrderData = {
  [OrderFields.COLUMN_REFRENCE]: string;
  [OrderFields.COLUMN_LINK]: string;
};

export class AbstractOrder extends AbstractEntity<OrderData> {
  readonly #refrence: string;
  readonly #link: string;

  public constructor(data: OrderData) {
    super(data);

    this.#refrence = data[OrderFields.COLUMN_REFRENCE];
    this.#link = data[OrderFields.COLUMN_LINK];
  }

  public get refrence(): string {
    return this.#refrence;
  }

  public get link(): string {
    return this.#link;
  }

  public toJSON(): OrderData {
    return {
      [OrderFields.COLUMN_REFRENCE]: this.refrence,
      [OrderFields.COLUMN_LINK]: this.link,
    };
  }
}
