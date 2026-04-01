import { AbstractEntity } from '../../abstractEntity';

export enum PromotionCartResultField {
  CART_ITEM_ID = 'cartItemId',
  MESSAGE = 'message',
  PRICE_BAND_ARROWSPHERE_SKU = 'priceBandArrowsphereSku',
  PROMOTION_ID = 'promotionId',
  STATUS = 'status',
}

export type PromotionCartResultData = {
  [PromotionCartResultField.CART_ITEM_ID]: string;
  [PromotionCartResultField.MESSAGE]?: string | undefined;
  [PromotionCartResultField.PRICE_BAND_ARROWSPHERE_SKU]: string;
  [PromotionCartResultField.PROMOTION_ID]: string;
  [PromotionCartResultField.STATUS]: string;
};

export class PromotionCartResult extends AbstractEntity<PromotionCartResultData> {
  readonly #cartItemId: string;
  readonly #message?: string | undefined;
  readonly #priceBandArrowsphereSku: string;
  readonly #promotionId: string;
  readonly #status: string;

  public constructor(promotionResponse: PromotionCartResultData) {
    super(promotionResponse);

    this.#cartItemId = promotionResponse[PromotionCartResultField.CART_ITEM_ID];
    this.#message = promotionResponse[PromotionCartResultField.MESSAGE];
    this.#priceBandArrowsphereSku =
      promotionResponse[PromotionCartResultField.PRICE_BAND_ARROWSPHERE_SKU];
    this.#promotionId =
      promotionResponse[PromotionCartResultField.PROMOTION_ID];
    this.#status = promotionResponse[PromotionCartResultField.STATUS];
  }

  get cartItemId(): string {
    return this.#cartItemId;
  }

  get message(): string | undefined {
    return this.#message;
  }

  get priceBandArrowsphereSku(): string {
    return this.#priceBandArrowsphereSku;
  }

  get promotionId(): string {
    return this.#promotionId;
  }

  get status(): string {
    return this.#status;
  }

  public toJSON(): PromotionCartResultData {
    return {
      [PromotionCartResultField.CART_ITEM_ID]: this.cartItemId,
      [PromotionCartResultField.MESSAGE]: this.message,
      [PromotionCartResultField.PRICE_BAND_ARROWSPHERE_SKU]: this
        .priceBandArrowsphereSku,
      [PromotionCartResultField.PROMOTION_ID]: this.promotionId,
      [PromotionCartResultField.STATUS]: this.status,
    };
  }
}
