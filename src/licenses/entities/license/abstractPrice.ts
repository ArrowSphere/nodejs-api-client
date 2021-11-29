import { AbstractEntity } from '../../../abstractEntity';
import {
  DataKeywords,
  FiltersParameters,
  SortParameters,
} from '../../licensesClient';

export enum PriceFields {
  COLUMN_PRICE_BAND_ARROWSPHERE_SKU = 'priceBandArrowsphereSku',
  COLUMN_BUY_PRICE = 'buy_price',
  COLUMN_SELL_PRICE = 'sell_price',
  COLUMN_LIST_PRICE = 'list_price',
  COLUMN_CURRENCY = 'currency',
}

export type PriceData = {
  [PriceFields.COLUMN_PRICE_BAND_ARROWSPHERE_SKU]: string | null;
  [PriceFields.COLUMN_BUY_PRICE]: number;
  [PriceFields.COLUMN_SELL_PRICE]: number;
  [PriceFields.COLUMN_LIST_PRICE]: number;
  [PriceFields.COLUMN_CURRENCY]?: string | null;
};

export type PriceDataKeywords = {
  [PriceFields.COLUMN_PRICE_BAND_ARROWSPHERE_SKU]?: DataKeywords;
  [PriceFields.COLUMN_BUY_PRICE]?: DataKeywords;
  [PriceFields.COLUMN_SELL_PRICE]?: DataKeywords;
  [PriceFields.COLUMN_LIST_PRICE]?: DataKeywords;
  [PriceFields.COLUMN_CURRENCY]?: DataKeywords;
};

export type PriceDataSortParameters = {
  [PriceFields.COLUMN_PRICE_BAND_ARROWSPHERE_SKU]?: SortParameters;
  [PriceFields.COLUMN_BUY_PRICE]?: SortParameters;
  [PriceFields.COLUMN_SELL_PRICE]?: SortParameters;
  [PriceFields.COLUMN_LIST_PRICE]?: SortParameters;
  [PriceFields.COLUMN_CURRENCY]?: SortParameters;
};

export type PriceDataFiltersParameters = {
  [PriceFields.COLUMN_PRICE_BAND_ARROWSPHERE_SKU]?: FiltersParameters;
  [PriceFields.COLUMN_BUY_PRICE]?: FiltersParameters;
  [PriceFields.COLUMN_SELL_PRICE]?: FiltersParameters;
  [PriceFields.COLUMN_LIST_PRICE]?: FiltersParameters;
  [PriceFields.COLUMN_CURRENCY]?: FiltersParameters;
};

export abstract class AbstractPrice extends AbstractEntity<PriceData> {
  protected VALIDATION_RULES = {
    [PriceFields.COLUMN_PRICE_BAND_ARROWSPHERE_SKU]: 'present',
    [PriceFields.COLUMN_BUY_PRICE]: 'present|numeric',
    [PriceFields.COLUMN_SELL_PRICE]: 'present|numeric',
    [PriceFields.COLUMN_LIST_PRICE]: 'present|numeric',
    [PriceFields.COLUMN_CURRENCY]: 'present',
  };

  readonly #price_band_arrowsphere_sku: string | null;
  readonly #buy_price: number;
  readonly #sell_price: number;
  readonly #list_price: number;
  readonly #currency: string | null | undefined;

  protected constructor(data: PriceData) {
    super(data);

    this.#price_band_arrowsphere_sku =
      data[PriceFields.COLUMN_PRICE_BAND_ARROWSPHERE_SKU];
    this.#buy_price = data[PriceFields.COLUMN_BUY_PRICE];
    this.#sell_price = data[PriceFields.COLUMN_SELL_PRICE];
    this.#list_price = data[PriceFields.COLUMN_LIST_PRICE];
    this.#currency = data[PriceFields.COLUMN_CURRENCY];
  }

  public get priceBandArrowsphereSku(): string | null {
    return this.#price_band_arrowsphere_sku;
  }

  public get buyPrice(): number {
    return this.#buy_price;
  }

  public get sellPrice(): number {
    return this.#sell_price;
  }

  public get listPrice(): number {
    return this.#list_price;
  }

  public get currency(): string | null | undefined {
    return this.#currency;
  }

  public toJSON(): PriceData {
    return {
      [PriceFields.COLUMN_PRICE_BAND_ARROWSPHERE_SKU]: this
        .priceBandArrowsphereSku,
      [PriceFields.COLUMN_BUY_PRICE]: this.buyPrice,
      [PriceFields.COLUMN_SELL_PRICE]: this.sellPrice,
      [PriceFields.COLUMN_LIST_PRICE]: this.listPrice,
      [PriceFields.COLUMN_CURRENCY]: this.currency,
    };
  }
}
