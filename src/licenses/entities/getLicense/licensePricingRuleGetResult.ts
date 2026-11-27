import { AbstractEntity } from '../../../abstractEntity';
import { RateTypeEnum } from '../pricingRate/getPricingRateResult';

export enum LicensePricingRuleFields {
  COLUMN_TIER = 'tier',
  COLUMN_TYPE = 'type',
  COLUMN_RATE_TYPE = 'rateType',
  COLUMN_VALUE = 'value',
}

export enum LicensePricingRuleTierEnum {
  ARROW = 1,
  PARTNER = 2,
  END_CUSTOMER = 3,
}

export type LicensePricingRuleData = {
  [LicensePricingRuleFields.COLUMN_TIER]?: LicensePricingRuleTierEnum;
  [LicensePricingRuleFields.COLUMN_TYPE]?: string;
  [LicensePricingRuleFields.COLUMN_RATE_TYPE]?: RateTypeEnum;
  [LicensePricingRuleFields.COLUMN_VALUE]?: number;
};

export class LicensePricingRuleGetResult extends AbstractEntity<LicensePricingRuleData> {
  readonly #tier?: LicensePricingRuleTierEnum;
  readonly #type?: string;
  readonly #rateType?: RateTypeEnum;
  readonly #value?: number;

  public constructor(data: LicensePricingRuleData) {
    super(data);

    this.#tier = data[LicensePricingRuleFields.COLUMN_TIER];
    this.#type = data[LicensePricingRuleFields.COLUMN_TYPE];
    this.#rateType = data[LicensePricingRuleFields.COLUMN_RATE_TYPE];
    this.#value = data[LicensePricingRuleFields.COLUMN_VALUE];
  }

  get tier(): LicensePricingRuleTierEnum | undefined {
    return this.#tier;
  }

  get type(): string | undefined {
    return this.#type;
  }

  get rateType(): RateTypeEnum | undefined {
    return this.#rateType;
  }

  get value(): number | undefined {
    return this.#value;
  }

  public toJSON(): LicensePricingRuleData {
    return {
      [LicensePricingRuleFields.COLUMN_TIER]: this.tier,
      [LicensePricingRuleFields.COLUMN_TYPE]: this.type,
      [LicensePricingRuleFields.COLUMN_RATE_TYPE]: this.rateType,
      [LicensePricingRuleFields.COLUMN_VALUE]: this.value,
    };
  }
}
