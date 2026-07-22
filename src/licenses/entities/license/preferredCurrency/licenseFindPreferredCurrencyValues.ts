import { AbstractEntity } from '../../../../abstractEntity';

export enum LicenseFindPreferredCurrencyValuesFields {
  COLUMN_BUY_PRICE = 'buy_price',
  COLUMN_SELL_PRICE = 'sell_price',
  COLUMN_LIST_PRICE = 'list_price',
}

export type LicenseFindPreferredCurrencyValuesType = {
  [LicenseFindPreferredCurrencyValuesFields.COLUMN_BUY_PRICE]: number;
  [LicenseFindPreferredCurrencyValuesFields.COLUMN_SELL_PRICE]: number;
  [LicenseFindPreferredCurrencyValuesFields.COLUMN_LIST_PRICE]: number;
};

export class LicenseFindPreferredCurrencyValues extends AbstractEntity<LicenseFindPreferredCurrencyValuesType> {
  readonly #buy_price: number;
  readonly #sell_price: number;
  readonly #list_price: number;

  public constructor(input: LicenseFindPreferredCurrencyValuesType) {
    super(input);
    this.#buy_price =
      input[LicenseFindPreferredCurrencyValuesFields.COLUMN_BUY_PRICE];
    this.#sell_price =
      input[LicenseFindPreferredCurrencyValuesFields.COLUMN_SELL_PRICE];
    this.#list_price =
      input[LicenseFindPreferredCurrencyValuesFields.COLUMN_LIST_PRICE];
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

  public toJSON(): LicenseFindPreferredCurrencyValuesType {
    return {
      [LicenseFindPreferredCurrencyValuesFields.COLUMN_BUY_PRICE]: this
        .buyPrice,
      [LicenseFindPreferredCurrencyValuesFields.COLUMN_SELL_PRICE]: this
        .sellPrice,
      [LicenseFindPreferredCurrencyValuesFields.COLUMN_LIST_PRICE]: this
        .listPrice,
    };
  }
}
