import { AbstractEntity } from '../../abstractEntity';
import {
  OrderSoftwarePrice,
  OrderSoftwarePriceType,
} from './orderSoftwarePrice';

export enum OrderSoftwareProductFields {
  COLUMN_SKU = 'sku',
  COLUMN_PRODUCT_NAME = 'productName',
  COLUMN_PRODUCT_VERSION = 'productVersion',
  COLUMN_QUANTITY = 'quantity',
  COLUMN_PRICE = 'price',
}

export type OrderSoftwareProductType = {
  [OrderSoftwareProductFields.COLUMN_SKU]: string;
  [OrderSoftwareProductFields.COLUMN_PRODUCT_NAME]: string;
  [OrderSoftwareProductFields.COLUMN_PRODUCT_VERSION]: string;
  [OrderSoftwareProductFields.COLUMN_QUANTITY]: number;
  [OrderSoftwareProductFields.COLUMN_PRICE]: OrderSoftwarePriceType;
};

export class OrderSoftwareProduct extends AbstractEntity<OrderSoftwareProductType> {
  readonly #sku: string;
  readonly #productName: string;
  readonly #productVersion: string;
  readonly #quantity: number;
  readonly #price: OrderSoftwarePrice;

  public constructor(product: OrderSoftwareProductType) {
    super(product);
    this.#sku = product[OrderSoftwareProductFields.COLUMN_SKU];
    this.#productName = product[OrderSoftwareProductFields.COLUMN_PRODUCT_NAME];
    this.#productVersion =
      product[OrderSoftwareProductFields.COLUMN_PRODUCT_VERSION];
    this.#quantity = product[OrderSoftwareProductFields.COLUMN_QUANTITY];
    this.#price = new OrderSoftwarePrice(
      product[OrderSoftwareProductFields.COLUMN_PRICE],
    );
  }

  get sku(): string {
    return this.#sku;
  }

  get productName(): string {
    return this.#productName;
  }

  get productVersion(): string {
    return this.#productVersion;
  }

  get quantity(): number {
    return this.#quantity;
  }

  get price(): OrderSoftwarePrice {
    return this.#price;
  }

  public toJSON(): OrderSoftwareProductType {
    return {
      [OrderSoftwareProductFields.COLUMN_SKU]: this.sku,
      [OrderSoftwareProductFields.COLUMN_PRODUCT_NAME]: this.productName,
      [OrderSoftwareProductFields.COLUMN_PRODUCT_VERSION]: this.productVersion,
      [OrderSoftwareProductFields.COLUMN_QUANTITY]: this.quantity,
      [OrderSoftwareProductFields.COLUMN_PRICE]: this.price.toJSON(),
    };
  }
}
