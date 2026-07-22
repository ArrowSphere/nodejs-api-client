import { AbstractEntity } from '../../../../abstractEntity';

export enum LicenseConversionRulesFields {
  COLUMN_CURRENCY = 'currency',
  COLUMN_EXCHANGE_RATE_DATE = 'exchangeRateDate',
  COLUMN_EXCHANGE_RATE = 'exchangeRate',
}

export type LicenseConversionRulesType = {
  [LicenseConversionRulesFields.COLUMN_CURRENCY]: string;
  [LicenseConversionRulesFields.COLUMN_EXCHANGE_RATE_DATE]: string;
  [LicenseConversionRulesFields.COLUMN_EXCHANGE_RATE]: number;
};

export class LicenseConversionRules extends AbstractEntity<LicenseConversionRulesType> {
  readonly #currency: string;
  readonly #exchangeRateDate: string;
  readonly #exchangeRate: number;

  public constructor(input: LicenseConversionRulesType) {
    super(input);
    this.#currency = input[LicenseConversionRulesFields.COLUMN_CURRENCY];
    this.#exchangeRateDate =
      input[LicenseConversionRulesFields.COLUMN_EXCHANGE_RATE_DATE];
    this.#exchangeRate =
      input[LicenseConversionRulesFields.COLUMN_EXCHANGE_RATE];
  }

  get currency(): string {
    return this.#currency;
  }
  get exchangeRateDate(): string {
    return this.#exchangeRateDate;
  }
  get exchangeRate(): number {
    return this.#exchangeRate;
  }

  public toJSON(): LicenseConversionRulesType {
    return {
      [LicenseConversionRulesFields.COLUMN_CURRENCY]: this.currency,
      [LicenseConversionRulesFields.COLUMN_EXCHANGE_RATE_DATE]: this
        .exchangeRateDate,
      [LicenseConversionRulesFields.COLUMN_EXCHANGE_RATE]: this.exchangeRate,
    };
  }
}
