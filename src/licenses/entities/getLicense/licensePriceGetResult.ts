import {
  BuySellData,
  BuySellFields,
  BuySellFindResult,
} from './buySellFindResult';
import { AbstractEntity } from '../../../abstractEntity';

export enum LicensePriceGetFields {
  COLUMN_UNIT = 'unit',
  COLUMN_TOTAL = 'total',
}

export type LicensePriceGetData = {
  [LicensePriceGetFields.COLUMN_UNIT]: BuySellData;
  [LicensePriceGetFields.COLUMN_TOTAL]: BuySellData;
};

export class LicensePriceGetResult extends AbstractEntity<LicensePriceGetData> {
  readonly #unit: BuySellFindResult;
  readonly #total: BuySellFindResult;

  public constructor(data: LicensePriceGetData) {
    super(data);

    const unit: BuySellData = {
      [BuySellFields.COLUMN_BUY]:
        data[LicensePriceGetFields.COLUMN_UNIT][BuySellFields.COLUMN_BUY],
      [BuySellFields.COLUMN_SELL]:
        data[LicensePriceGetFields.COLUMN_UNIT][BuySellFields.COLUMN_SELL],
    };
    this.#unit = new BuySellFindResult(unit);
    const total: BuySellData = {
      [BuySellFields.COLUMN_BUY]:
        data[LicensePriceGetFields.COLUMN_TOTAL][BuySellFields.COLUMN_BUY],
      [BuySellFields.COLUMN_SELL]:
        data[LicensePriceGetFields.COLUMN_TOTAL][BuySellFields.COLUMN_SELL],
    };
    this.#total = new BuySellFindResult(total);
  }

  public get unit(): BuySellFindResult {
    return this.#unit;
  }

  public get total(): BuySellFindResult {
    return this.#total;
  }

  public toJSON(): LicensePriceGetData {
    return {
      [LicensePriceGetFields.COLUMN_UNIT]: this.unit.toJSON(),
      [LicensePriceGetFields.COLUMN_TOTAL]: this.total.toJSON(),
    };
  }
}
