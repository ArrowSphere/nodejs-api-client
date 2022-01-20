import { AbstractEntity } from '../../../abstractEntity';

export enum BuySellFields {
  COLUMN_BUY = 'buy',
  COLUMN_SELL = 'sell',
}

export type BuySellData = {
  [BuySellFields.COLUMN_BUY]: number;
  [BuySellFields.COLUMN_SELL]: number;
};

export class BuySellFindResult extends AbstractEntity<BuySellData> {
  readonly #buy: number;
  readonly #sell: number;

  public constructor(data: BuySellData) {
    super(data);

    this.#buy = data[BuySellFields.COLUMN_BUY];
    this.#sell = data[BuySellFields.COLUMN_SELL];
  }

  public get buy(): number {
    return this.#buy;
  }

  public get sell(): number {
    return this.#sell;
  }

  public toJSON(): BuySellData {
    return {
      [BuySellFields.COLUMN_BUY]: this.buy,
      [BuySellFields.COLUMN_SELL]: this.sell,
    };
  }
}
