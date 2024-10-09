import { AbstractEntity } from '../../abstractEntity';

export enum OrderSoftwarePriceFields {
  COLUMN_UNIT_PRICE = 'unitPrice',
  COLUMN_TOTAL_PRICE = 'totalPrice',
  COLUMN_CURRENCY = 'currency',
}

export type OrderSoftwarePriceType = {
  [OrderSoftwarePriceFields.COLUMN_UNIT_PRICE]: number;
  [OrderSoftwarePriceFields.COLUMN_TOTAL_PRICE]: number;
  [OrderSoftwarePriceFields.COLUMN_CURRENCY]: string;
};

export class OrderSoftwarePrice extends AbstractEntity<OrderSoftwarePriceType> {
  readonly #unitPrice: number;
  readonly #totalPrice: number;
  readonly #currency: string;

  public constructor(price: OrderSoftwarePriceType) {
    super(price);
    this.#unitPrice = price[OrderSoftwarePriceFields.COLUMN_UNIT_PRICE];
    this.#totalPrice = price[OrderSoftwarePriceFields.COLUMN_TOTAL_PRICE];
    this.#currency = price[OrderSoftwarePriceFields.COLUMN_CURRENCY];
  }

  get unitPrice(): number {
    return this.#unitPrice;
  }

  get totalPrice(): number {
    return this.#totalPrice;
  }

  get currency(): string {
    return this.#currency;
  }

  public toJSON(): OrderSoftwarePriceType {
    return {
      [OrderSoftwarePriceFields.COLUMN_UNIT_PRICE]: this.unitPrice,
      [OrderSoftwarePriceFields.COLUMN_TOTAL_PRICE]: this.totalPrice,
      [OrderSoftwarePriceFields.COLUMN_CURRENCY]: this.currency,
    };
  }
}
