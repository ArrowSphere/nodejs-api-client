import { AbstractEntity } from '../../../abstractEntity';

export enum OrderGetFields {
  COLUMN_REFERENCE = 'reference',
  COLUMN_LINK = 'link',
}

export type OrderGetData = {
  [OrderGetFields.COLUMN_REFERENCE]: string | null;
  [OrderGetFields.COLUMN_LINK]: string;
};

export class OrderGetResult extends AbstractEntity<OrderGetData> {
  readonly #reference: string | null;
  readonly #link: string;

  public constructor(data: OrderGetData) {
    super(data);

    this.#reference = data[OrderGetFields.COLUMN_REFERENCE];
    this.#link = data[OrderGetFields.COLUMN_LINK];
  }

  public get reference(): string | null {
    return this.#reference;
  }

  public get link(): string {
    return this.#link;
  }

  public toJSON(): OrderGetData {
    return {
      [OrderGetFields.COLUMN_REFERENCE]: this.reference,
      [OrderGetFields.COLUMN_LINK]: this.link,
    };
  }
}
