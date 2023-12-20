import { AbstractEntity } from '../../../abstractEntity';

export enum BuySellFields {
  COLUMN_BUY = 'buy',
  COLUMN_SELL = 'sell',
  COLUMN_LIST = 'list',
}

export type BuySellData = {
  [BuySellFields.COLUMN_BUY]?: number;
  [BuySellFields.COLUMN_SELL]?: number;
  [BuySellFields.COLUMN_LIST]?: number;
};

export class BuySellFindResult extends AbstractEntity<BuySellData> {
  readonly #buy?: number;
  readonly #sell?: number;
  readonly #list?: number;

  public constructor(data: BuySellData) {
    super(data);

    this.#buy = data[BuySellFields.COLUMN_BUY];
    this.#sell = data[BuySellFields.COLUMN_SELL];
    this.#list = data[BuySellFields.COLUMN_LIST];
  }

  public get buy(): number | undefined {
    return this.#buy;
  }

  public get sell(): number | undefined {
    return this.#sell;
  }

  public get list(): number | undefined {
    return this.#list;
  }

  public toJSON(): BuySellData {
    return {
      [BuySellFields.COLUMN_BUY]: this.buy,
      [BuySellFields.COLUMN_SELL]: this.sell,
      [BuySellFields.COLUMN_LIST]: this.list,
    };
  }
}
