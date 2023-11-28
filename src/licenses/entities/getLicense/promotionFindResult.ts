import { AbstractEntity } from '../../../abstractEntity';

export type PromotionData = {
  promotionId?: string;
  promotionType?: string;
  pricingType?: string;
  pricingValue?: string;
};

export class PromotionFindResult extends AbstractEntity<PromotionData> {
  readonly #promotionId?: string;
  readonly #promotionType?: string;
  readonly #pricingType?: string;
  readonly #pricingValue?: string;

  public constructor(data: PromotionData) {
    super(data);

    this.#promotionId = data.promotionId;
    this.#promotionType = data.promotionType;
    this.#pricingType = data.pricingType;
    this.#pricingValue = data.pricingValue;
  }

  public toJSON(): PromotionData {
    return {
      promotionId: this.#promotionId,
      promotionType: this.#promotionType,
      pricingType: this.#pricingType,
      pricingValue: this.#pricingValue,
    };
  }
}
