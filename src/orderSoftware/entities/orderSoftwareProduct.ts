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
  COLUMN_DISCOUNT_RATIO = 'discountRatio',
  COLUMN_SELLING_PRICE = 'sellingPrice',
}

export type OrderSoftwareProductType = {
  [OrderSoftwareProductFields.COLUMN_SKU]: string;
  [OrderSoftwareProductFields.COLUMN_PRODUCT_NAME]: string;
  [OrderSoftwareProductFields.COLUMN_PRODUCT_VERSION]: string;
  [OrderSoftwareProductFields.COLUMN_QUANTITY]: number;
  [OrderSoftwareProductFields.COLUMN_PRICE]: OrderSoftwarePriceType;
  [OrderSoftwareProductFields.COLUMN_DISCOUNT_RATIO]?: number;
  [OrderSoftwareProductFields.COLUMN_SELLING_PRICE]?: OrderSoftwarePriceType;
};

export class OrderSoftwareProduct extends AbstractEntity<OrderSoftwareProductType> {
  readonly #sku: string;
  readonly #productName: string;
  readonly #productVersion: string;
  readonly #quantity: number;
  readonly #price: OrderSoftwarePrice;
  readonly #discountRatio?: number;
  readonly #sellingPrice?: OrderSoftwarePrice;

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
    this.#discountRatio = product[OrderSoftwareProductFields.COLUMN_DISCOUNT_RATIO];
    const sellingPriceData = product[OrderSoftwareProductFields.COLUMN_SELLING_PRICE];
    this.#sellingPrice = sellingPriceData
      ? new OrderSoftwarePrice(sellingPriceData)
      : undefined;
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

  get discountRatio(): number | undefined {
    return this.#discountRatio;
  }

  get sellingPrice(): OrderSoftwarePrice | undefined {
    return this.#sellingPrice;
  }

  public toJSON(): OrderSoftwareProductType {
    return {
      [OrderSoftwareProductFields.COLUMN_SKU]: this.sku,
      [OrderSoftwareProductFields.COLUMN_PRODUCT_NAME]: this.productName,
      [OrderSoftwareProductFields.COLUMN_PRODUCT_VERSION]: this.productVersion,
      [OrderSoftwareProductFields.COLUMN_QUANTITY]: this.quantity,
      [OrderSoftwareProductFields.COLUMN_PRICE]: this.price.toJSON(),
      [OrderSoftwareProductFields.COLUMN_DISCOUNT_RATIO]: this.discountRatio,
      [OrderSoftwareProductFields.COLUMN_SELLING_PRICE]: this.sellingPrice
        ? this.sellingPrice.toJSON()
        : undefined,
    };
  }
}
