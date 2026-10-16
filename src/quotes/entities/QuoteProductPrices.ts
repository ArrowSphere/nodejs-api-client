import { AbstractEntity } from '../../abstractEntity';

export enum QuoteProductPricesFields {
  BUY = 'buy',
  CURRENCY = 'currency',
  PERIODICITY = 'periodicity',
  PERIODICITY_CODE = 'periodicityCode',
  SELL = 'sell',
  TERM = 'term',
  TERM_CODE = 'termCode',
}

export type QuoteProductPricesData = {
  [QuoteProductPricesFields.BUY]: number;
  [QuoteProductPricesFields.CURRENCY]: string;
  [QuoteProductPricesFields.PERIODICITY]: string;
  [QuoteProductPricesFields.PERIODICITY_CODE]: number;
  [QuoteProductPricesFields.SELL]: number;
  [QuoteProductPricesFields.TERM]: string;
  [QuoteProductPricesFields.TERM_CODE]: number;
};

export class QuoteProductPrices extends AbstractEntity<QuoteProductPricesData> {
  readonly #buy: number;
  readonly #currency: string;
  readonly #periodicity: string;
  readonly #periodicityCode: number;
  readonly #sell: number;
  readonly #term: string;
  readonly #termCode: number;

  public constructor(data: QuoteProductPricesData) {
    super(data);

    this.#buy = data[QuoteProductPricesFields.BUY];
    this.#currency = data[QuoteProductPricesFields.CURRENCY];
    this.#periodicity = data[QuoteProductPricesFields.PERIODICITY];
    this.#periodicityCode = data[QuoteProductPricesFields.PERIODICITY_CODE];
    this.#sell = data[QuoteProductPricesFields.SELL];
    this.#term = data[QuoteProductPricesFields.TERM];
    this.#termCode = data[QuoteProductPricesFields.TERM_CODE];
  }

  get buy(): number {
    return this.#buy;
  }

  get currency(): string {
    return this.#currency;
  }

  get periodicity(): string {
    return this.#periodicity;
  }

  get periodicityCode(): number {
    return this.#periodicityCode;
  }

  get sell(): number {
    return this.#sell;
  }

  get term(): string {
    return this.#term;
  }

  get termCode(): number {
    return this.#termCode;
  }

  public toJSON(): QuoteProductPricesData {
    return {
      [QuoteProductPricesFields.BUY]: this.buy,
      [QuoteProductPricesFields.CURRENCY]: this.currency,
      [QuoteProductPricesFields.PERIODICITY]: this.periodicity,
      [QuoteProductPricesFields.PERIODICITY_CODE]: this.periodicityCode,
      [QuoteProductPricesFields.SELL]: this.sell,
      [QuoteProductPricesFields.TERM]: this.term,
      [QuoteProductPricesFields.TERM_CODE]: this.termCode,
    };
  }
}
