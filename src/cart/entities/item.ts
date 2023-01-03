import { AbstractEntity } from '../../abstractEntity';

export enum ItemAdditionalDataFields {
  NAME = 'name',
  VALUE = 'value',
}

export type ItemAdditionalDataType = {
  [ItemAdditionalDataFields.NAME]: string;
  [ItemAdditionalDataFields.VALUE]: string;
};

export enum ItemFields {
  ITEM_ID = 'itemId',
  ADDITIONAL_DATA = 'additionalData',
  OFFER_NAME = 'offerName',
  PRICE_BAND_ARROWSPHERE_SKU = 'priceBandArrowsphereSku',
  QUANTITY = 'quantity',
}

export type ItemType = {
  [ItemFields.ADDITIONAL_DATA]?: ItemAdditionalDataType[] | undefined;
  [ItemFields.ITEM_ID]: string;
  [ItemFields.OFFER_NAME]: string;
  [ItemFields.PRICE_BAND_ARROWSPHERE_SKU]: string;
  [ItemFields.QUANTITY]: number;
};

export class Item extends AbstractEntity<ItemType> {
  readonly #additionalData?: ItemAdditionalDataType[];
  readonly #itemId: string;
  readonly #offerName: string;
  readonly #priceBandArrowsphereSku: string;
  readonly #quantity: number;

  public constructor(itemResponse: ItemType) {
    super(itemResponse);

    this.#additionalData = itemResponse[ItemFields.ADDITIONAL_DATA];
    this.#itemId = itemResponse[ItemFields.ITEM_ID];
    this.#offerName = itemResponse[ItemFields.OFFER_NAME];
    this.#priceBandArrowsphereSku =
      itemResponse[ItemFields.PRICE_BAND_ARROWSPHERE_SKU];
    this.#quantity = itemResponse[ItemFields.QUANTITY];
  }

  get itemId(): string {
    return this.#itemId;
  }

  get additionalData(): ItemAdditionalDataType[] | undefined {
    return this.#additionalData;
  }

  get offerName(): string {
    return this.#offerName;
  }

  get priceBandArrowsphereSku(): string {
    return this.#priceBandArrowsphereSku;
  }

  get quantity(): number {
    return this.#quantity;
  }
  public toJSON(): ItemType {
    return {
      [ItemFields.ADDITIONAL_DATA]: this.additionalData,
      [ItemFields.ITEM_ID]: this.itemId,
      [ItemFields.OFFER_NAME]: this.offerName,
      [ItemFields.PRICE_BAND_ARROWSPHERE_SKU]: this.priceBandArrowsphereSku,
      [ItemFields.QUANTITY]: this.quantity,
    };
  }
}
