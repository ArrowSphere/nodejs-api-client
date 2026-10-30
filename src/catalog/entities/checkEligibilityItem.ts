import { AbstractEntity } from '../../abstractEntity';

export enum CheckEligibilityItemFields {
  GROWTH_MARGIN = 'growthMargin',
  IS_ELIGIBLE = 'isEligible',
  PRICEBAND_ARROWSPHERE_SKU = 'pricebandArrowsphereSku',
  PRICES = 'prices',
  PRICES_WITHOUT_PROMOTION = 'pricesWithoutPromotion',
  PRICING_RULES = 'pricingRules',
  QUANTITY = 'quantity',
}

export type CheckEligibilityPricesType = {
  arrow?: number;
  endCustomer?: number;
  partner?: number;
  retail?: number;
};

export type CheckEligibilityPricingRuleType = {
  rateType?: string;
  tier?: number;
  type?: string;
  value?: number;
};

export type CheckEligibilityGrowthMarginType = {
  discountType?: string;
  growthMarginId?: string;
  incrementalMarginRate?: number;
};

export type CheckEligibilityItemType = {
  [CheckEligibilityItemFields.GROWTH_MARGIN]?: CheckEligibilityGrowthMarginType;
  [CheckEligibilityItemFields.IS_ELIGIBLE]: boolean;
  [CheckEligibilityItemFields.PRICEBAND_ARROWSPHERE_SKU]: string;
  [CheckEligibilityItemFields.PRICES]?: CheckEligibilityPricesType;
  [CheckEligibilityItemFields.PRICES_WITHOUT_PROMOTION]?: CheckEligibilityPricesType;
  [CheckEligibilityItemFields.PRICING_RULES]?: CheckEligibilityPricingRuleType[];
  [CheckEligibilityItemFields.QUANTITY]: number;
};

export class CheckEligibilityItem extends AbstractEntity<CheckEligibilityItemType> {
  readonly #growthMargin?: CheckEligibilityGrowthMarginType;
  readonly #isEligible: boolean;
  readonly #pricebandArrowsphereSku: string;
  readonly #prices?: CheckEligibilityPricesType;
  readonly #pricesWithoutPromotion?: CheckEligibilityPricesType;
  readonly #pricingRules?: CheckEligibilityPricingRuleType[];
  readonly #quantity: number;

  constructor(input: CheckEligibilityItemType) {
    super(input);

    this.#growthMargin = input[CheckEligibilityItemFields.GROWTH_MARGIN];
    this.#isEligible = input[CheckEligibilityItemFields.IS_ELIGIBLE];
    this.#pricebandArrowsphereSku =
      input[CheckEligibilityItemFields.PRICEBAND_ARROWSPHERE_SKU];
    this.#prices = input[CheckEligibilityItemFields.PRICES];
    this.#pricesWithoutPromotion =
      input[CheckEligibilityItemFields.PRICES_WITHOUT_PROMOTION];
    this.#pricingRules = input[CheckEligibilityItemFields.PRICING_RULES];
    this.#quantity = input[CheckEligibilityItemFields.QUANTITY];
  }

  get growthMargin(): CheckEligibilityGrowthMarginType | undefined {
    return this.#growthMargin;
  }

  get isEligible(): boolean {
    return this.#isEligible;
  }

  get pricebandArrowsphereSku(): string {
    return this.#pricebandArrowsphereSku;
  }

  get prices(): CheckEligibilityPricesType | undefined {
    return this.#prices;
  }

  get pricesWithoutPromotion(): CheckEligibilityPricesType | undefined {
    return this.#pricesWithoutPromotion;
  }

  get pricingRules(): CheckEligibilityPricingRuleType[] | undefined {
    return this.#pricingRules;
  }

  get quantity(): number {
    return this.#quantity;
  }

  public toJSON(): CheckEligibilityItemType {
    return {
      [CheckEligibilityItemFields.GROWTH_MARGIN]: this.growthMargin,
      [CheckEligibilityItemFields.IS_ELIGIBLE]: this.isEligible,
      [CheckEligibilityItemFields.PRICEBAND_ARROWSPHERE_SKU]: this
        .pricebandArrowsphereSku,
      [CheckEligibilityItemFields.PRICES]: this.prices,
      [CheckEligibilityItemFields.PRICES_WITHOUT_PROMOTION]: this
        .pricesWithoutPromotion,
      [CheckEligibilityItemFields.PRICING_RULES]: this.pricingRules,
      [CheckEligibilityItemFields.QUANTITY]: this.quantity,
    };
  }
}
