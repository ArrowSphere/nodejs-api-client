import { BuySellData, BuySellFindResult } from './buySellFindResult';
import { AbstractEntity } from '../../../abstractEntity';
import {
  LicenseGetPreferredCurrency,
  LicenseGetPreferredCurrencyType,
} from './licenseGetPreferredCurrency';
import { PriceFindResultFields } from '../license/priceFindResult';

export enum LicensePriceGetFields {
  COLUMN_CURRENCY = 'currency',
  COLUMN_PRICEBAND_ARROWSPHERE_SKU = 'priceBandArrowsphereSku',
  COLUMN_UNIT = 'unit',
  COLUMN_TOTAL = 'total',
  COLUMN_PREFERRED_CURRENCY = 'preferredCurrency',
}

export type LicensePriceGetData = {
  [LicensePriceGetFields.COLUMN_CURRENCY]: string;
  [LicensePriceGetFields.COLUMN_PRICEBAND_ARROWSPHERE_SKU]: string;
  [LicensePriceGetFields.COLUMN_UNIT]: BuySellData;
  [LicensePriceGetFields.COLUMN_TOTAL]: BuySellData;
  [LicensePriceGetFields.COLUMN_PREFERRED_CURRENCY]?: LicenseGetPreferredCurrencyType;
};

export class LicensePriceGetResult extends AbstractEntity<LicensePriceGetData> {
  readonly #currency: string;
  readonly #priceBandArrowsphereSku: string;
  readonly #unit: BuySellFindResult;
  readonly #total: BuySellFindResult;
  readonly #preferredCurrency?: LicenseGetPreferredCurrency;

  public constructor(data: LicensePriceGetData) {
    super(data);

    this.#currency = data[LicensePriceGetFields.COLUMN_CURRENCY];
    this.#priceBandArrowsphereSku =
      data[LicensePriceGetFields.COLUMN_PRICEBAND_ARROWSPHERE_SKU];
    this.#unit = new BuySellFindResult(data[LicensePriceGetFields.COLUMN_UNIT]);
    this.#total = new BuySellFindResult(
      data[LicensePriceGetFields.COLUMN_TOTAL],
    );
    this.#preferredCurrency = data[
      PriceFindResultFields.COLUMN_PREFERRED_CURRENCY
    ]
      ? new LicenseGetPreferredCurrency(
          data[
            PriceFindResultFields.COLUMN_PREFERRED_CURRENCY
          ] as LicenseGetPreferredCurrencyType,
        )
      : undefined;
  }

  public get currency(): string {
    return this.#currency;
  }

  public get priceBandArrowsphereSku(): string {
    return this.#priceBandArrowsphereSku;
  }

  public get unit(): BuySellFindResult {
    return this.#unit;
  }

  public get total(): BuySellFindResult {
    return this.#total;
  }

  public get preferredCurrency(): LicenseGetPreferredCurrency | undefined {
    return this.#preferredCurrency;
  }

  public toJSON(): LicensePriceGetData {
    return {
      [LicensePriceGetFields.COLUMN_CURRENCY]: this.currency,
      [LicensePriceGetFields.COLUMN_PRICEBAND_ARROWSPHERE_SKU]: this
        .#priceBandArrowsphereSku,
      [LicensePriceGetFields.COLUMN_UNIT]: this.unit.toJSON(),
      [LicensePriceGetFields.COLUMN_TOTAL]: this.total.toJSON(),
      [PriceFindResultFields.COLUMN_PREFERRED_CURRENCY]: this.preferredCurrency?.toJSON(),
    };
  }
}
