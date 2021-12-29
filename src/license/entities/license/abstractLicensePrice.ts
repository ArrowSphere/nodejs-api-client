import { AbstractEntity } from '../../../abstractEntity';
import { BuySellData, BuySellFields } from './abstractBuySell';
import { BuySellFindResult } from './buySellFindResult';

export enum LicensePriceFields {
  COLUMN_UNIT = 'unit',
  COLUMN_TOTAL = 'total',
}

export type LicensePriceData = {
  [LicensePriceFields.COLUMN_UNIT]: BuySellData;
  [LicensePriceFields.COLUMN_TOTAL]: BuySellData;
};

export class AbstractLicensePrice extends AbstractEntity<LicensePriceData> {
  readonly #unit: BuySellFindResult;
  readonly #total: BuySellFindResult;

  public constructor(data: LicensePriceData) {
    super(data);

    const unit: BuySellData = {
      [BuySellFields.COLUMN_BUY]:
        data[LicensePriceFields.COLUMN_UNIT][BuySellFields.COLUMN_BUY],
      [BuySellFields.COLUMN_SELL]:
        data[LicensePriceFields.COLUMN_UNIT][BuySellFields.COLUMN_SELL],
    };
    this.#unit = new BuySellFindResult(unit);
    const total: BuySellData = {
      [BuySellFields.COLUMN_BUY]:
        data[LicensePriceFields.COLUMN_TOTAL][BuySellFields.COLUMN_BUY],
      [BuySellFields.COLUMN_SELL]:
        data[LicensePriceFields.COLUMN_TOTAL][BuySellFields.COLUMN_SELL],
    };
    this.#total = new BuySellFindResult(total);
  }

  public get unit(): BuySellFindResult {
    return this.#unit;
  }

  public get total(): BuySellFindResult {
    return this.#total;
  }

  public toJSON(): LicensePriceData {
    return {
      [LicensePriceFields.COLUMN_UNIT]: this.unit.toJSON(),
      [LicensePriceFields.COLUMN_TOTAL]: this.total.toJSON(),
    };
  }
}
