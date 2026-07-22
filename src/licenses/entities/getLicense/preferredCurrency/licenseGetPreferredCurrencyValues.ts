import { AbstractEntity } from '../../../../abstractEntity';
import { BuySellData, BuySellFindResult } from '../buySellFindResult';

export enum LicenseGetPreferredCurrencyValuesFields {
  COLUMN_UNIT = 'unit',
  COLUMN_TOTAL = 'total',
}

export type LicenseGetPreferredCurrencyValuesType = {
  [LicenseGetPreferredCurrencyValuesFields.COLUMN_UNIT]: BuySellData;
  [LicenseGetPreferredCurrencyValuesFields.COLUMN_TOTAL]: BuySellData;
};

export class LicenseGetPreferredCurrencyValues extends AbstractEntity<LicenseGetPreferredCurrencyValuesType> {
  readonly #unit: BuySellFindResult;
  readonly #total: BuySellFindResult;

  public constructor(input: LicenseGetPreferredCurrencyValuesType) {
    super(input);
    this.#unit = new BuySellFindResult(
      input[LicenseGetPreferredCurrencyValuesFields.COLUMN_UNIT],
    );
    this.#total = new BuySellFindResult(
      input[LicenseGetPreferredCurrencyValuesFields.COLUMN_TOTAL],
    );
  }

  get unit(): BuySellFindResult {
    return this.#unit;
  }
  get total(): BuySellFindResult {
    return this.#total;
  }

  public toJSON(): LicenseGetPreferredCurrencyValuesType {
    return {
      [LicenseGetPreferredCurrencyValuesFields.COLUMN_UNIT]: this.unit.toJSON(),
      [LicenseGetPreferredCurrencyValuesFields.COLUMN_TOTAL]: this.total.toJSON(),
    };
  }
}
