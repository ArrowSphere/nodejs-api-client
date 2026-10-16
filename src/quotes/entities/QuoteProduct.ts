import { AbstractEntity } from '../../abstractEntity';
import {
  ReferenceLink,
  ReferenceLinkType,
} from '../../orders/entities/referenceLink';
import {
  QuoteProductPrices,
  QuoteProductPricesData,
} from './QuoteProductPrices';

export enum QuoteProductFields {
  SKU = 'sku',
  QUANTITY = 'quantity',
  PRICES = 'prices',
  LICENSE = 'license',
  NAME = 'name',
}

export type QuoteProductData = {
  [QuoteProductFields.SKU]: string;
  [QuoteProductFields.QUANTITY]: number;
  [QuoteProductFields.PRICES]: QuoteProductPricesData;
  [QuoteProductFields.LICENSE]: ReferenceLinkType;
  [QuoteProductFields.NAME]: string;
};

export class QuoteProduct extends AbstractEntity<QuoteProductData> {
  readonly #sku: string;
  readonly #quantity: number;
  readonly #prices: QuoteProductPrices;
  readonly #license: ReferenceLink;
  readonly #name: string;

  public constructor(data: QuoteProductData) {
    super(data);

    this.#sku = data[QuoteProductFields.SKU];
    this.#quantity = data[QuoteProductFields.QUANTITY];
    this.#prices = new QuoteProductPrices(data[QuoteProductFields.PRICES]);
    this.#license = new ReferenceLink(data[QuoteProductFields.LICENSE]);
    this.#name = data[QuoteProductFields.NAME];
  }

  get sku(): string {
    return this.#sku;
  }

  get quantity(): number {
    return this.#quantity;
  }

  get prices(): QuoteProductPrices {
    return this.#prices;
  }

  get license(): ReferenceLink {
    return this.#license;
  }

  get name(): string {
    return this.#name;
  }

  public toJSON(): QuoteProductData {
    return {
      [QuoteProductFields.SKU]: this.sku,
      [QuoteProductFields.QUANTITY]: this.quantity,
      [QuoteProductFields.PRICES]: this.prices.toJSON(),
      [QuoteProductFields.LICENSE]: this.license.toJSON(),
      [QuoteProductFields.NAME]: this.name,
    };
  }
}
