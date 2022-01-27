import { BuySellData, BuySellFindResult } from './buySellFindResult';
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

    this.#unit = new BuySellFindResult(data[LicensePriceGetFields.COLUMN_UNIT]);
    this.#total = new BuySellFindResult(
      data[LicensePriceGetFields.COLUMN_TOTAL],
    );
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
