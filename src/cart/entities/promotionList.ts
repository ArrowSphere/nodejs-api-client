import { AbstractEntity } from '../../abstractEntity';
import { PromotionCartResult, PromotionCartResultData } from './promotion';

export enum GetPromotionCartListResultFields {
  PROMOTIONS = 'promotions',
}

export type GetPromotionCartListResultData = {
  [GetPromotionCartListResultFields.PROMOTIONS]: PromotionCartResultData[];
};

export class GetPromotionCartListResult extends AbstractEntity<GetPromotionCartListResultData> {
  readonly #promotions: PromotionCartResult[];

  public constructor(input: GetPromotionCartListResultData) {
    super(input);

    this.#promotions = input[GetPromotionCartListResultFields.PROMOTIONS].map(
      (promotion: PromotionCartResultData) =>
        new PromotionCartResult(promotion),
    );
  }

  getPromotions(): PromotionCartResult[] {
    return this.#promotions;
  }

  public toJSON(): GetPromotionCartListResultData {
    return {
      [GetPromotionCartListResultFields.PROMOTIONS]: this.#promotions.map(
        (promotion: PromotionCartResult) => promotion.toJSON(),
      ),
    };
  }
}
