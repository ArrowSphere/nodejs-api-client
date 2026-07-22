import { AbstractEntity } from '../../../../abstractEntity';
import {
  BuySellData,
  BuySellFindResult,
} from '../../getLicense/buySellFindResult';

export enum LicensePreferredCurrencyValuesFields {
  COLUMN_UNIT = 'unit',
  COLUMN_TOTAL = 'total',
}

export type LicensePreferredCurrencyValuesType = {
  [LicensePreferredCurrencyValuesFields.COLUMN_UNIT]: BuySellData;
  [LicensePreferredCurrencyValuesFields.COLUMN_TOTAL]: BuySellData;
};

export class LicensePreferredCurrencyValues extends AbstractEntity<LicensePreferredCurrencyValuesType> {
  readonly #unit: BuySellFindResult;
  readonly #total: BuySellFindResult;

  public constructor(input: LicensePreferredCurrencyValuesType) {
    super(input);
    this.#unit = new BuySellFindResult(
      input[LicensePreferredCurrencyValuesFields.COLUMN_UNIT],
    );
    this.#total = new BuySellFindResult(
      input[LicensePreferredCurrencyValuesFields.COLUMN_TOTAL],
    );
  }

  get unit(): BuySellFindResult {
    return this.#unit;
  }
  get total(): BuySellFindResult {
    return this.#total;
  }

  public toJSON(): LicensePreferredCurrencyValuesType {
    return {
      [LicensePreferredCurrencyValuesFields.COLUMN_UNIT]: this.unit.toJSON(),
      [LicensePreferredCurrencyValuesFields.COLUMN_TOTAL]: this.total.toJSON(),
    };
  }
}
