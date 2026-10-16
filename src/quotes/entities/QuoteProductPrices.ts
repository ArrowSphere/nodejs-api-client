import { AbstractEntity } from '../../abstractEntity';

export enum QuoteProductPricesFields {
  BUY = 'buy',
  SELL = 'sell',
  CURRENCY = 'currency',
  PERIODICITY = 'periodicity',
  TERM = 'term',
}

export type QuoteProductPricesData = {
  [QuoteProductPricesFields.BUY]: number;
  [QuoteProductPricesFields.SELL]: number;
  [QuoteProductPricesFields.CURRENCY]: string;
  [QuoteProductPricesFields.PERIODICITY]: string;
  [QuoteProductPricesFields.TERM]: string;
};

export class QuoteProductPrices extends AbstractEntity<QuoteProductPricesData> {
  readonly #buy: number;
  readonly #sell: number;
  readonly #currency: string;
  readonly #periodicity: string;
  readonly #term: string;

  public constructor(data: QuoteProductPricesData) {
    super(data);

    this.#buy = data[QuoteProductPricesFields.BUY];
    this.#sell = data[QuoteProductPricesFields.SELL];
    this.#currency = data[QuoteProductPricesFields.CURRENCY];
    this.#periodicity = data[QuoteProductPricesFields.PERIODICITY];
    this.#term = data[QuoteProductPricesFields.TERM];
  }

  get buy(): number {
    return this.#buy;
  }

  get sell(): number {
    return this.#sell;
  }

  get currency(): string {
    return this.#currency;
  }

  get periodicity(): string {
    return this.#periodicity;
  }

  get term(): string {
    return this.#term;
  }

  public toJSON(): QuoteProductPricesData {
    return {
      [QuoteProductPricesFields.BUY]: this.buy,
      [QuoteProductPricesFields.SELL]: this.sell,
      [QuoteProductPricesFields.CURRENCY]: this.currency,
      [QuoteProductPricesFields.PERIODICITY]: this.periodicity,
      [QuoteProductPricesFields.TERM]: this.term,
    };
  }
}
