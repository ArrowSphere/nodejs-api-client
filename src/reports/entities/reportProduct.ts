import { Reference, ReferenceType } from './reference';
import {
  ReportProductPrice,
  ReportProductPriceType,
} from './reportProductPrice';
import { AbstractEntity } from '../../abstractEntity';

export enum ReportProductFields {
  COLUMN_SKU = 'sku',
  COLUMN_QUANTITY = 'quantity',
  COLUMN_CUSTOMER = 'customer',
  COLUMN_PRODUCT_NAME = 'productName',
  COLUMN_PRODUCT_VERSION = 'productVersion',
  COLUMN_PRICE = 'price',
}

export type ReportProductType = {
  [ReportProductFields.COLUMN_SKU]: string;
  [ReportProductFields.COLUMN_QUANTITY]: string;
  [ReportProductFields.COLUMN_CUSTOMER]: ReferenceType;
  [ReportProductFields.COLUMN_PRODUCT_NAME]: string;
  [ReportProductFields.COLUMN_PRODUCT_VERSION]: string;
  [ReportProductFields.COLUMN_PRICE]: ReportProductPriceType;
};

export class ReportProduct extends AbstractEntity<ReportProductType> {
  readonly #sku;
  readonly #quantity;
  readonly #customer;
  readonly #productName;
  readonly #productVersion;
  readonly #price;

  public constructor(reportProductData: ReportProductType) {
    super(reportProductData);
    this.#sku = reportProductData[ReportProductFields.COLUMN_SKU];
    this.#quantity = reportProductData[ReportProductFields.COLUMN_QUANTITY];
    this.#customer = new Reference(
      reportProductData[ReportProductFields.COLUMN_CUSTOMER],
    );
    this.#productName =
      reportProductData[ReportProductFields.COLUMN_PRODUCT_NAME];
    this.#productVersion =
      reportProductData[ReportProductFields.COLUMN_PRODUCT_VERSION];
    this.#price = new ReportProductPrice(
      reportProductData[ReportProductFields.COLUMN_PRICE],
    );
  }

  get sku() {
    return this.#sku;
  }

  get quantity() {
    return this.#quantity;
  }

  get customer() {
    return this.#customer;
  }

  get productName() {
    return this.#productName;
  }

  get productVersion() {
    return this.#productVersion;
  }

  get price() {
    return this.#price;
  }

  public toJSON(): ReportProductType {
    return {
      [ReportProductFields.COLUMN_SKU]: this.sku,
      [ReportProductFields.COLUMN_QUANTITY]: this.quantity,
      [ReportProductFields.COLUMN_CUSTOMER]: this.customer.toJSON(),
      [ReportProductFields.COLUMN_PRODUCT_NAME]: this.productName,
      [ReportProductFields.COLUMN_PRODUCT_VERSION]: this.productVersion,
      [ReportProductFields.COLUMN_PRICE]: this.price.toJSON(),
    };
  }
}
