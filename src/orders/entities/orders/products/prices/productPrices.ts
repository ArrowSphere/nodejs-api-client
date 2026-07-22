import { AbstractEntity } from '../../../../../abstractEntity';
import { PreferredCurrency, PreferredCurrencyType } from './preferredCurrency';

export enum ProductPricesFields {
  COLUMN_BUY = 'buy',
  COLUMN_SELL = 'sell',
  COLUMN_CURRENCY = 'currency',
  COLUMN_PERIODICITY = 'periodicity',
  COLUMN_TERM = 'term',
  COLUMN_PERIODICITY_CODE = 'periodicityCode',
  COLUMN_TERM_CODE = 'termCode',
  COLUMN_PREFERRED_CURRENCY = 'preferredCurrency',
}

export type ProductPricesType = {
  [ProductPricesFields.COLUMN_BUY]: number;
  [ProductPricesFields.COLUMN_SELL]: number;
  [ProductPricesFields.COLUMN_CURRENCY]: string;
  [ProductPricesFields.COLUMN_PERIODICITY]: string;
  [ProductPricesFields.COLUMN_TERM]: string;
  [ProductPricesFields.COLUMN_PERIODICITY_CODE]: number;
  [ProductPricesFields.COLUMN_TERM_CODE]: number;
  [ProductPricesFields.COLUMN_PREFERRED_CURRENCY]?: PreferredCurrencyType;
};

export class ProductPrices extends AbstractEntity<ProductPricesType> {
  readonly #buy: number;
  readonly #sell: number;
  readonly #currency: string;
  readonly #periodicity: string;
  readonly #term: string;
  readonly #periodicityCode: number;
  readonly #termCode: number;
  readonly #preferredCurrency?: PreferredCurrency;

  public constructor(productPricesInput: ProductPricesType) {
    super(productPricesInput);

    this.#buy = productPricesInput[ProductPricesFields.COLUMN_BUY];
    this.#sell = productPricesInput[ProductPricesFields.COLUMN_SELL];
    this.#currency = productPricesInput[ProductPricesFields.COLUMN_CURRENCY];
    this.#periodicity =
      productPricesInput[ProductPricesFields.COLUMN_PERIODICITY];
    this.#term = productPricesInput[ProductPricesFields.COLUMN_TERM];
    this.#periodicityCode =
      productPricesInput[ProductPricesFields.COLUMN_PERIODICITY_CODE];
    this.#termCode = productPricesInput[ProductPricesFields.COLUMN_TERM_CODE];
    this.#preferredCurrency = productPricesInput[
      ProductPricesFields.COLUMN_PREFERRED_CURRENCY
    ]
      ? new PreferredCurrency(
          productPricesInput[
            ProductPricesFields.COLUMN_PREFERRED_CURRENCY
          ] as PreferredCurrencyType,
        )
      : undefined;
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
  get periodicityCode(): number {
    return this.#periodicityCode;
  }
  get termCode(): number {
    return this.#termCode;
  }
  get preferredCurrency(): PreferredCurrency | undefined {
    return this.#preferredCurrency;
  }

  public toJSON(): ProductPricesType {
    return {
      [ProductPricesFields.COLUMN_BUY]: this.buy,
      [ProductPricesFields.COLUMN_SELL]: this.sell,
      [ProductPricesFields.COLUMN_CURRENCY]: this.currency,
      [ProductPricesFields.COLUMN_PERIODICITY]: this.periodicity,
      [ProductPricesFields.COLUMN_TERM]: this.term,
      [ProductPricesFields.COLUMN_PERIODICITY_CODE]: this.periodicityCode,
      [ProductPricesFields.COLUMN_TERM_CODE]: this.termCode,
      [ProductPricesFields.COLUMN_PREFERRED_CURRENCY]: this.preferredCurrency?.toJSON(),
    };
  }
}
