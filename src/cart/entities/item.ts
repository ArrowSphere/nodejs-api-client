import { AbstractEntity } from '../../abstractEntity';

export enum ItemAdditionalDataFields {
  NAME = 'name',
  VALUE = 'value',
}

export type ItemAdditionalDataType = {
  [ItemAdditionalDataFields.NAME]: string;
  [ItemAdditionalDataFields.VALUE]: string;
};

export type PricingRuleType = {
  rateType: 'discount' | 'uplift' | 'fixedPrice';
  value: number;
};

export enum ItemFields {
  ADDITIONAL_DATA = 'additionalData',
  COTERM_PRICES = 'cotermPrices',
  COTERM_PRICES_WITHOUT_PROMOTION = 'cotermPricesWithoutPromotion',
  CURRENCY = 'currency',
  IS_ADDON = 'isAddon',
  IS_TRIAL = 'isTrial',
  ITEM_ID = 'itemId',
  OFFER_NAME = 'offerName',
  PRICE_BAND_ARROWSPHERE_SKU = 'priceBandArrowsphereSku',
  PRICES = 'prices',
  PRICES_WITHOUT_PROMOTION = 'pricesWithoutPromotion',
  QUANTITY = 'quantity',
  RULES = 'rules',
}

export type ItemType = {
  [ItemFields.ADDITIONAL_DATA]?: ItemAdditionalDataType[] | undefined;
  [ItemFields.COTERM_PRICES]?:
    | Record<'arrow' | 'partner' | 'endCustomer' | 'retail', number>
    | undefined;
  [ItemFields.COTERM_PRICES_WITHOUT_PROMOTION]?:
    | Record<'arrow' | 'partner' | 'endCustomer' | 'retail', number>
    | undefined;
  [ItemFields.CURRENCY]?: string;
  [ItemFields.IS_ADDON]?: boolean;
  [ItemFields.IS_TRIAL]?: boolean;
  [ItemFields.ITEM_ID]: string;
  [ItemFields.OFFER_NAME]: string;
  [ItemFields.PRICE_BAND_ARROWSPHERE_SKU]: string;
  [ItemFields.PRICES]?:
    | Record<'arrow' | 'partner' | 'endCustomer' | 'retail', number>
    | undefined;
  [ItemFields.PRICES_WITHOUT_PROMOTION]?:
    | Record<'arrow' | 'partner' | 'endCustomer' | 'retail', number>
    | undefined;
  [ItemFields.QUANTITY]: number;
  [ItemFields.RULES]?: Record<string, PricingRuleType> | undefined;
};

export class Item extends AbstractEntity<ItemType> {
  readonly #additionalData?: ItemAdditionalDataType[];
  readonly #cotermPrices?:
    | Record<'arrow' | 'partner' | 'endCustomer' | 'retail', number>
    | undefined;
  readonly #cotermPricesWithoutPromotion?:
    | Record<'arrow' | 'partner' | 'endCustomer' | 'retail', number>
    | undefined;
  readonly #currency?: string | undefined;
  readonly #isAddon?: boolean | undefined;
  readonly #isTrial?: boolean | undefined;
  readonly #itemId: string;
  readonly #offerName: string;
  readonly #priceBandArrowsphereSku: string;
  readonly #prices?:
    | Record<'arrow' | 'partner' | 'endCustomer' | 'retail', number>
    | undefined;
  readonly #pricesWithoutPromotion?:
    | Record<'arrow' | 'partner' | 'endCustomer' | 'retail', number>
    | undefined;
  readonly #quantity: number;
  readonly #rules?: Record<string, PricingRuleType> | undefined;

  public constructor(itemResponse: ItemType) {
    super(itemResponse);

    this.#additionalData = itemResponse[ItemFields.ADDITIONAL_DATA];
    this.#cotermPrices = itemResponse[ItemFields.COTERM_PRICES];
    this.#cotermPricesWithoutPromotion =
      itemResponse[ItemFields.COTERM_PRICES_WITHOUT_PROMOTION];
    this.#currency = itemResponse[ItemFields.CURRENCY];
    this.#isAddon = itemResponse[ItemFields.IS_ADDON];
    this.#isTrial = itemResponse[ItemFields.IS_TRIAL];
    this.#itemId = itemResponse[ItemFields.ITEM_ID];
    this.#offerName = itemResponse[ItemFields.OFFER_NAME];
    this.#priceBandArrowsphereSku =
      itemResponse[ItemFields.PRICE_BAND_ARROWSPHERE_SKU];
    this.#prices = itemResponse[ItemFields.PRICES];
    this.#pricesWithoutPromotion =
      itemResponse[ItemFields.PRICES_WITHOUT_PROMOTION];
    this.#quantity = itemResponse[ItemFields.QUANTITY];
    this.#rules = itemResponse[ItemFields.RULES];
  }

  get additionalData(): ItemAdditionalDataType[] | undefined {
    return this.#additionalData;
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

  get currency(): string | undefined {
    return this.#currency;
  }

  get isAddon(): boolean | undefined {
    return this.#isAddon;
  }

  get isTrial(): boolean | undefined {
    return this.#isTrial;
  }

  get itemId(): string {
    return this.#itemId;
  }

  get offerName(): string {
    return this.#offerName;
  }

  get priceBandArrowsphereSku(): string {
    return this.#priceBandArrowsphereSku;
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

  get quantity(): number {
    return this.#quantity;
  }

  get rules(): Record<string, PricingRuleType> | undefined {
    return this.#rules;
  }

  public toJSON(): ItemType {
    return {
      [ItemFields.ADDITIONAL_DATA]: this.additionalData,
      [ItemFields.COTERM_PRICES]: this.cotermPrices,
      [ItemFields.COTERM_PRICES_WITHOUT_PROMOTION]: this
        .cotermPricesWithoutPromotion,
      [ItemFields.CURRENCY]: this.currency,
      [ItemFields.IS_ADDON]: this.isAddon,
      [ItemFields.IS_TRIAL]: this.isTrial,
      [ItemFields.ITEM_ID]: this.itemId,
      [ItemFields.OFFER_NAME]: this.offerName,
      [ItemFields.PRICE_BAND_ARROWSPHERE_SKU]: this.priceBandArrowsphereSku,
      [ItemFields.PRICES]: this.prices,
      [ItemFields.PRICES_WITHOUT_PROMOTION]: this.pricesWithoutPromotion,
      [ItemFields.QUANTITY]: this.quantity,
      [ItemFields.RULES]: this.rules,
    };
  }
}
