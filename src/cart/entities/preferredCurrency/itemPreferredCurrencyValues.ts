import { AbstractEntity } from '../../../abstractEntity';

export enum ItemPreferredCurrencyValuesFields {
  COTERM_PRICES = 'cotermPrices',
  COTERM_PRICES_WITHOUT_PROMOTION = 'cotermPricesWithoutPromotion',
  PRICES = 'prices',
  PRICES_WITHOUT_PROMOTION = 'pricesWithoutPromotion',
}

export type ItemPreferredCurrencyValuesType = {
  [ItemPreferredCurrencyValuesFields.COTERM_PRICES]?: Record<
    'arrow' | 'partner' | 'endCustomer' | 'retail',
    number
  >;
  [ItemPreferredCurrencyValuesFields.COTERM_PRICES_WITHOUT_PROMOTION]?: Record<
    'arrow' | 'partner' | 'endCustomer' | 'retail',
    number
  >;
  [ItemPreferredCurrencyValuesFields.PRICES]?: Record<
    'arrow' | 'partner' | 'endCustomer' | 'retail',
    number
  >;
  [ItemPreferredCurrencyValuesFields.PRICES_WITHOUT_PROMOTION]?: Record<
    'arrow' | 'partner' | 'endCustomer' | 'retail',
    number
  >;
};

export class ItemPreferredCurrencyValues extends AbstractEntity<ItemPreferredCurrencyValuesType> {
  readonly #cotermPrices?: Record<
    'arrow' | 'partner' | 'endCustomer' | 'retail',
    number
  >;
  readonly #cotermPricesWithoutPromotion?: Record<
    'arrow' | 'partner' | 'endCustomer' | 'retail',
    number
  >;
  readonly #prices?: Record<
    'arrow' | 'partner' | 'endCustomer' | 'retail',
    number
  >;
  readonly #pricesWithoutPromotion?: Record<
    'arrow' | 'partner' | 'endCustomer' | 'retail',
    number
  >;

  public constructor(input: ItemPreferredCurrencyValuesType) {
    super(input);

    this.#cotermPrices = input[ItemPreferredCurrencyValuesFields.COTERM_PRICES];
    this.#cotermPricesWithoutPromotion =
      input[ItemPreferredCurrencyValuesFields.COTERM_PRICES_WITHOUT_PROMOTION];
    this.#prices = input[ItemPreferredCurrencyValuesFields.PRICES];
    this.#pricesWithoutPromotion =
      input[ItemPreferredCurrencyValuesFields.PRICES_WITHOUT_PROMOTION];
  }

  get cotermPrices():
    | Record<'arrow' | 'partner' | 'endCustomer' | 'retail', number>
    | undefined {
    return this.#cotermPrices;
  }

  get cotermPricesWithoutPromotion():
    | Record<'arrow' | 'partner' | 'endCustomer' | 'retail', number>
    | undefined {
    return this.#cotermPricesWithoutPromotion;
  }

  get prices():
    | Record<'arrow' | 'partner' | 'endCustomer' | 'retail', number>
    | undefined {
    return this.#prices;
  }

  get pricesWithoutPromotion():
    | Record<'arrow' | 'partner' | 'endCustomer' | 'retail', number>
    | undefined {
    return this.#pricesWithoutPromotion;
  }

  public toJSON(): ItemPreferredCurrencyValuesType {
    return {
      [ItemPreferredCurrencyValuesFields.COTERM_PRICES]: this.cotermPrices,
      [ItemPreferredCurrencyValuesFields.COTERM_PRICES_WITHOUT_PROMOTION]: this
        .cotermPricesWithoutPromotion,
      [ItemPreferredCurrencyValuesFields.PRICES]: this.prices,
      [ItemPreferredCurrencyValuesFields.PRICES_WITHOUT_PROMOTION]: this
        .pricesWithoutPromotion,
    };
  }
}
