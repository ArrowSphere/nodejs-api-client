import {
  DataKeywords,
  FiltersParameters,
  SortParameters,
} from '../../licensesClient';
import { AbstractEntity } from '../../../abstractEntity';
import {
  LicenseFindPreferredCurrency,
  LicenseFindPreferredCurrencyType,
} from './licenseFindPreferredCurrency';

export enum PriceFindResultFields {
  COLUMN_PRICE_BAND_ARROWSPHERE_SKU = 'priceBandArrowsphereSku',
  COLUMN_BUY_PRICE = 'buy_price',
  COLUMN_SELL_PRICE = 'sell_price',
  COLUMN_LIST_PRICE = 'list_price',
  COLUMN_CURRENCY = 'currency',
  COLUMN_PREFERRED_CURRENCY = 'preferredCurrency',
}

export type PriceFindResultData = {
  [PriceFindResultFields.COLUMN_PRICE_BAND_ARROWSPHERE_SKU]: string | null;
  [PriceFindResultFields.COLUMN_BUY_PRICE]: number;
  [PriceFindResultFields.COLUMN_SELL_PRICE]: number;
  [PriceFindResultFields.COLUMN_LIST_PRICE]: number;
  [PriceFindResultFields.COLUMN_CURRENCY]?: string | null;
  [PriceFindResultFields.COLUMN_PREFERRED_CURRENCY]?: LicenseFindPreferredCurrencyType;
};

export type PriceFindResultDataKeywords = {
  [PriceFindResultFields.COLUMN_PRICE_BAND_ARROWSPHERE_SKU]?: DataKeywords;
  [PriceFindResultFields.COLUMN_BUY_PRICE]?: DataKeywords;
  [PriceFindResultFields.COLUMN_SELL_PRICE]?: DataKeywords;
  [PriceFindResultFields.COLUMN_LIST_PRICE]?: DataKeywords;
  [PriceFindResultFields.COLUMN_CURRENCY]?: DataKeywords;
};

export type PriceFindResutDataSortParameters = {
  [PriceFindResultFields.COLUMN_PRICE_BAND_ARROWSPHERE_SKU]?: SortParameters;
  [PriceFindResultFields.COLUMN_BUY_PRICE]?: SortParameters;
  [PriceFindResultFields.COLUMN_SELL_PRICE]?: SortParameters;
  [PriceFindResultFields.COLUMN_LIST_PRICE]?: SortParameters;
  [PriceFindResultFields.COLUMN_CURRENCY]?: SortParameters;
};

export type PriceFindResultDataFiltersParameters = {
  [PriceFindResultFields.COLUMN_PRICE_BAND_ARROWSPHERE_SKU]?: FiltersParameters;
  [PriceFindResultFields.COLUMN_BUY_PRICE]?: FiltersParameters;
  [PriceFindResultFields.COLUMN_SELL_PRICE]?: FiltersParameters;
  [PriceFindResultFields.COLUMN_LIST_PRICE]?: FiltersParameters;
  [PriceFindResultFields.COLUMN_CURRENCY]?: FiltersParameters;
};

export class PriceFindResult extends AbstractEntity<PriceFindResultData> {
  protected VALIDATION_RULES = {
    [PriceFindResultFields.COLUMN_PRICE_BAND_ARROWSPHERE_SKU]: 'present',
    [PriceFindResultFields.COLUMN_BUY_PRICE]: 'present|numeric',
    [PriceFindResultFields.COLUMN_SELL_PRICE]: 'present|numeric',
    [PriceFindResultFields.COLUMN_LIST_PRICE]: 'present|numeric',
    [PriceFindResultFields.COLUMN_CURRENCY]: 'present',
  };

  readonly #price_band_arrowsphere_sku: string | null;
  readonly #buy_price: number;
  readonly #sell_price: number;
  readonly #list_price: number;
  readonly #currency: string | null | undefined;
  readonly #preferredCurrency?: LicenseFindPreferredCurrency;

  public constructor(data: PriceFindResultData) {
    super(data);

    this.#price_band_arrowsphere_sku =
      data[PriceFindResultFields.COLUMN_PRICE_BAND_ARROWSPHERE_SKU];
    this.#buy_price = data[PriceFindResultFields.COLUMN_BUY_PRICE];
    this.#sell_price = data[PriceFindResultFields.COLUMN_SELL_PRICE];
    this.#list_price = data[PriceFindResultFields.COLUMN_LIST_PRICE];
    this.#currency = data[PriceFindResultFields.COLUMN_CURRENCY];
    this.#preferredCurrency = data[
      PriceFindResultFields.COLUMN_PREFERRED_CURRENCY
    ]
      ? new LicenseFindPreferredCurrency(
          data[
            PriceFindResultFields.COLUMN_PREFERRED_CURRENCY
          ] as LicenseFindPreferredCurrencyType,
        )
      : undefined;
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

  public get preferredCurrency(): LicenseFindPreferredCurrency | undefined {
    return this.#preferredCurrency;
  }

  public toJSON(): PriceFindResultData {
    return {
      [PriceFindResultFields.COLUMN_PRICE_BAND_ARROWSPHERE_SKU]: this
        .priceBandArrowsphereSku,
      [PriceFindResultFields.COLUMN_BUY_PRICE]: this.buyPrice,
      [PriceFindResultFields.COLUMN_SELL_PRICE]: this.sellPrice,
      [PriceFindResultFields.COLUMN_LIST_PRICE]: this.listPrice,
      [PriceFindResultFields.COLUMN_CURRENCY]: this.currency,
      [PriceFindResultFields.COLUMN_PREFERRED_CURRENCY]: this.preferredCurrency?.toJSON(),
    };
  }
}
