import { AbstractEntity } from '../../../../../../abstractEntity';

export enum ConversionRulesFields {
  COLUMN_CURRENCY = 'currency',
  COLUMN_EXCHANGE_RATE_DATE = 'exchangeRateDate',
  COLUMN_EXCHANGE_RATE = 'exchangeRate',
}

export type ConversionRulesType = {
  [ConversionRulesFields.COLUMN_CURRENCY]: string;
  [ConversionRulesFields.COLUMN_EXCHANGE_RATE_DATE]: string;
  [ConversionRulesFields.COLUMN_EXCHANGE_RATE]: number;
};

export class ConversionRules extends AbstractEntity<ConversionRulesType> {
  readonly #currency: string;
  readonly #exchangeRateDate: string;
  readonly #exchangeRate: number;

  public constructor(input: ConversionRulesType) {
    super(input);
    this.#currency = input[ConversionRulesFields.COLUMN_CURRENCY];
    this.#exchangeRateDate =
      input[ConversionRulesFields.COLUMN_EXCHANGE_RATE_DATE];
    this.#exchangeRate = input[ConversionRulesFields.COLUMN_EXCHANGE_RATE];
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

  public toJSON(): ConversionRulesType {
    return {
      [ConversionRulesFields.COLUMN_CURRENCY]: this.currency,
      [ConversionRulesFields.COLUMN_EXCHANGE_RATE_DATE]: this.exchangeRateDate,
      [ConversionRulesFields.COLUMN_EXCHANGE_RATE]: this.exchangeRate,
    };
  }
}
