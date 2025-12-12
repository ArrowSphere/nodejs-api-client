import { AbstractEntity } from '../../../../../abstractEntity';

export enum PricingRulesFields {
  COLUMN_TIER = 'tier',
  COLUMN_TYPE = 'type',
  COLUMN_RATE_TYPE = 'rateType',
  COLUMN_VALUE = 'value',
}

export type Tier = 1 | 2 | 3;
export type RuleType = 'rate' | 'linkToDefault';
export type RateType = 'uplift' | 'discount' | 'discountOnSelf' | 'upliftOnSelf';
export type BusinessRuleEffectType = {
  [PricingRulesFields.COLUMN_TIER]: Tier;
  [PricingRulesFields.COLUMN_TYPE]: RuleType;
  [PricingRulesFields.COLUMN_RATE_TYPE]?: RateType;
  [PricingRulesFields.COLUMN_VALUE]?: number;
};

export class PricingRules extends AbstractEntity<BusinessRuleEffectType> {
  readonly #tier: Tier;
  readonly #type: RuleType;
  readonly #rateType?: RateType;
  readonly #value?: number;

  public constructor(businessRuleEffect: BusinessRuleEffectType) {
    super(businessRuleEffect);

    this.#tier = businessRuleEffect[PricingRulesFields.COLUMN_TIER];
    this.#type = businessRuleEffect[PricingRulesFields.COLUMN_TYPE];
    this.#rateType = businessRuleEffect[PricingRulesFields.COLUMN_RATE_TYPE];
    this.#value = businessRuleEffect[PricingRulesFields.COLUMN_VALUE];
  }

  get tier(): Tier {
    return this.#tier;
  }

  get type(): RuleType {
    return this.#type;
  }

  get rateType(): RateType | undefined {
    return this.#rateType;
  }

  get value(): number | undefined {
    return this.#value;
  }

  public toJSON(): BusinessRuleEffectType {
    return {
      [PricingRulesFields.COLUMN_TIER]: this.tier,
      [PricingRulesFields.COLUMN_TYPE]: this.type,
      [PricingRulesFields.COLUMN_RATE_TYPE]: this.rateType,
      [PricingRulesFields.COLUMN_VALUE]: this.value,
    };
  }
}
