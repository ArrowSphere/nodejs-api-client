import { AbstractEntity } from '../../../abstractEntity';

export enum BuySellFields {
  COLUMN_BUY = 'buy',
  COLUMN_SELL = 'sell',
  COLUMN_LIST = 'list',
  COLUMN_INIT = 'init',
}

export type BuySellData = {
  [BuySellFields.COLUMN_BUY]?: number;
  [BuySellFields.COLUMN_SELL]?: number;
  [BuySellFields.COLUMN_LIST]?: number;
  [BuySellFields.COLUMN_INIT]?: number;
};

export class BuySellFindResult extends AbstractEntity<BuySellData> {
  readonly #buy?: number;
  readonly #sell?: number;
  readonly #list?: number;
  readonly #init?: number;

  public constructor(data: BuySellData) {
    super(data);

    this.#buy = data[BuySellFields.COLUMN_BUY];
    this.#sell = data[BuySellFields.COLUMN_SELL];
    this.#list = data[BuySellFields.COLUMN_LIST];
    this.#init = data[BuySellFields.COLUMN_INIT];
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

  public get init(): number | undefined {
    return this.#init;
  }

  public toJSON(): BuySellData {
    return {
      [BuySellFields.COLUMN_BUY]: this.buy,
      [BuySellFields.COLUMN_SELL]: this.sell,
      [BuySellFields.COLUMN_LIST]: this.list,
      [BuySellFields.COLUMN_INIT]: this.init,
    };
  }
}
