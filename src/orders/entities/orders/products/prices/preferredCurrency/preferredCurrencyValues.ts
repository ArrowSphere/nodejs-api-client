import { AbstractEntity } from '../../../../../../abstractEntity';

export enum PreferredCurrencyValuesFields {
  COLUMN_BUY = 'buy',
  COLUMN_SELL = 'sell',
}

export type PreferredCurrencyValuesType = {
  [PreferredCurrencyValuesFields.COLUMN_BUY]: number;
  [PreferredCurrencyValuesFields.COLUMN_SELL]: number;
};

export class PreferredCurrencyValues extends AbstractEntity<PreferredCurrencyValuesType> {
  readonly #buy: number;
  readonly #sell: number;

  public constructor(input: PreferredCurrencyValuesType) {
    super(input);
    this.#buy = input[PreferredCurrencyValuesFields.COLUMN_BUY];
    this.#sell = input[PreferredCurrencyValuesFields.COLUMN_SELL];
  }

  get buy(): number {
    return this.#buy;
  }
  get sell(): number {
    return this.#sell;
  }

  public toJSON(): PreferredCurrencyValuesType {
    return {
      [PreferredCurrencyValuesFields.COLUMN_BUY]: this.buy,
      [PreferredCurrencyValuesFields.COLUMN_SELL]: this.sell,
    };
  }
}
