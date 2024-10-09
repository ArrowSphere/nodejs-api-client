export enum AnalyticsPriceFields {
  COLUMN_ARROW_BUY_PRICE = 'arrowBuyPrice',
  COLUMN_RESELLER_BUY_PRICE = 'resellerBuyPrice',
  COLUMN_END_CUSTOMER_BUY_PRICE = 'endCustomerBuyPrice',
  COLUMN_LIST_BUY_PRICE = 'listBuyPrice',
  COLUMN_CURRENCY = 'currency',
}

export type PriceType = {
  [AnalyticsPriceFields.COLUMN_ARROW_BUY_PRICE]: number;
  [AnalyticsPriceFields.COLUMN_RESELLER_BUY_PRICE]: number;
  [AnalyticsPriceFields.COLUMN_END_CUSTOMER_BUY_PRICE]: number;
  [AnalyticsPriceFields.COLUMN_LIST_BUY_PRICE]: number;
  [AnalyticsPriceFields.COLUMN_CURRENCY]: string;
};

export class Price {
  readonly #arrowBuyPrice: number;
  readonly #resellerBuyPrice: number;
  readonly #endCustomerBuyPrice: number;
  readonly #listBuyPrice: number;
  readonly #currency: string;

  public constructor(priceInput: PriceType) {
    this.#arrowBuyPrice =
      priceInput[AnalyticsPriceFields.COLUMN_ARROW_BUY_PRICE];
    this.#resellerBuyPrice =
      priceInput[AnalyticsPriceFields.COLUMN_RESELLER_BUY_PRICE];
    this.#endCustomerBuyPrice =
      priceInput[AnalyticsPriceFields.COLUMN_END_CUSTOMER_BUY_PRICE];
    this.#listBuyPrice = priceInput[AnalyticsPriceFields.COLUMN_LIST_BUY_PRICE];
    this.#currency = priceInput[AnalyticsPriceFields.COLUMN_CURRENCY];
  }

  get arrowBuyPrice(): number {
    return this.#arrowBuyPrice;
  }

  get resellerBuyPrice(): number {
    return this.#resellerBuyPrice;
  }

  get endCustomerBuyPrice(): number {
    return this.#endCustomerBuyPrice;
  }

  get listBuyPrice(): number {
    return this.#listBuyPrice;
  }

  get currency(): string {
    return this.#currency;
  }

  public toJSON(): PriceType {
    return {
      [AnalyticsPriceFields.COLUMN_ARROW_BUY_PRICE]: this.arrowBuyPrice,
      [AnalyticsPriceFields.COLUMN_RESELLER_BUY_PRICE]: this.resellerBuyPrice,
      [AnalyticsPriceFields.COLUMN_END_CUSTOMER_BUY_PRICE]: this
        .endCustomerBuyPrice,
      [AnalyticsPriceFields.COLUMN_LIST_BUY_PRICE]: this.listBuyPrice,
      [AnalyticsPriceFields.COLUMN_CURRENCY]: this.currency,
    };
  }
}
