import { AbstractEntity } from '../../../../abstractEntity';
import { ReferenceLink, ReferenceLinkType } from '../../referenceLink';

export enum ProductPricesFields {
  COLUMN_BUY = 'buy',
  COLUMN_SELL = 'sell',
  COLUMN_CURRENCY = 'currency',
  COLUMN_PERIODICITY = 'periodicity',
}

export type ProductPricesType = {
  [ProductPricesFields.COLUMN_BUY]: number;
  [ProductPricesFields.COLUMN_SELL]: number;
  [ProductPricesFields.COLUMN_CURRENCY]: string;
  [ProductPricesFields.COLUMN_PERIODICITY]: string;
};
export enum OrderProductsFields {
  COLUMN_SKU = 'sku',
  COLUMN_QUANTITY = 'quantity',
  COLUMN_STATUS = 'status',
  COLUMN_DATESTATUS = 'dateStatus',
  COLUMN_DETAILEDSTATUS = 'detailedStatus',
  COLUMN_PRICES = 'prices',
  COLUMN_SUBSCRIPTION = 'subscription',
  COLUMN_LICENSE = 'license',
}

export type OrderProductsType = {
  [OrderProductsFields.COLUMN_SKU]: string;
  [OrderProductsFields.COLUMN_QUANTITY]: number;
  [OrderProductsFields.COLUMN_STATUS]: string;
  [OrderProductsFields.COLUMN_DATESTATUS]: string;
  [OrderProductsFields.COLUMN_DETAILEDSTATUS]: string;
  [OrderProductsFields.COLUMN_PRICES]: ProductPricesType;
  [OrderProductsFields.COLUMN_SUBSCRIPTION]: ReferenceLinkType;
  [OrderProductsFields.COLUMN_LICENSE]: ReferenceLinkType;
};

export class OrderProduct extends AbstractEntity<OrderProductsType> {
  readonly #sku: string;
  readonly #quantity: number;
  readonly #status: string;
  readonly #dateStatus: string;
  readonly #detailedStatus: string;
  readonly #prices: ProductPricesType;
  readonly #subscription: ReferenceLink;
  readonly #license: ReferenceLink;

  public constructor(getOrderProducts: OrderProductsType) {
    super(getOrderProducts);

    this.#sku = getOrderProducts[OrderProductsFields.COLUMN_SKU];
    this.#quantity = getOrderProducts[OrderProductsFields.COLUMN_QUANTITY];
    this.#status = getOrderProducts[OrderProductsFields.COLUMN_STATUS];
    this.#dateStatus = getOrderProducts[OrderProductsFields.COLUMN_DATESTATUS];
    this.#detailedStatus =
      getOrderProducts[OrderProductsFields.COLUMN_DETAILEDSTATUS];
    this.#prices = getOrderProducts[OrderProductsFields.COLUMN_PRICES];
    this.#subscription = new ReferenceLink(
      getOrderProducts[OrderProductsFields.COLUMN_SUBSCRIPTION],
    );
    this.#license = new ReferenceLink(
      getOrderProducts[OrderProductsFields.COLUMN_LICENSE],
    );
  }

  get sku(): string {
    return this.#sku;
  }
  get quantity(): number {
    return this.#quantity;
  }
  get status(): string {
    return this.#status;
  }
  get dateStatus(): string {
    return this.#dateStatus;
  }
  get detailedStatus(): string {
    return this.#detailedStatus;
  }
  get prices(): ProductPricesType {
    return this.#prices;
  }
  get subscription(): ReferenceLink {
    return this.#subscription;
  }
  get license(): ReferenceLink {
    return this.#license;
  }

  public toJSON(): OrderProductsType {
    return {
      [OrderProductsFields.COLUMN_SKU]: this.sku,
      [OrderProductsFields.COLUMN_QUANTITY]: this.quantity,
      [OrderProductsFields.COLUMN_STATUS]: this.status,
      [OrderProductsFields.COLUMN_DATESTATUS]: this.dateStatus,
      [OrderProductsFields.COLUMN_DETAILEDSTATUS]: this.detailedStatus,
      [OrderProductsFields.COLUMN_PRICES]: this.prices,
      [OrderProductsFields.COLUMN_SUBSCRIPTION]: this.subscription.toJSON(),
      [OrderProductsFields.COLUMN_LICENSE]: this.license.toJSON(),
    };
  }
}
