import { AbstractRestfulClient, Parameters } from '../abstractRestfulClient';
import { GetResult } from '../getResult';
import { Item, ItemList } from './entities';
import { GetPromotionCartListResult } from './entities/promotionList';
import { GetPrerequisitesListResult } from './entities/prerequisiteList';

export enum ItemRequestFields {
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
  USERNAME = 'userName',
}

export enum ItemAdditionalDataRequestFields {
  NAME = 'name',
  VALUE = 'value',
}

export type ItemAdditionalDataRequestType = {
  [ItemAdditionalDataRequestFields.NAME]: string;
  [ItemAdditionalDataRequestFields.VALUE]: string;
};

/**
 * Deprecated type, kept for backward compatibility. Use ItemAddRequestType instead which has the same structure
 */
export type ItemRequestType = {
  [ItemRequestFields.OFFER_NAME]: string;
  [ItemRequestFields.PRICE_BAND_ARROWSPHERE_SKU]: string;
  [ItemRequestFields.QUANTITY]: number;
  [ItemRequestFields.ADDITIONAL_DATA]?: ItemAdditionalDataRequestType[];
  [ItemRequestFields.USERNAME]?: string;
};

export type ItemAddRequestType = ItemRequestType;
export type ItemUpdateRequestType = {
  [ItemRequestFields.PRICE_BAND_ARROWSPHERE_SKU]: string;
  [ItemRequestFields.QUANTITY]: number;
  [ItemRequestFields.ADDITIONAL_DATA]?: ItemAdditionalDataRequestType[];
};

export class CartClient extends AbstractRestfulClient {
  protected basePath = '/cart';
  public async addItem(
    postData: ItemAddRequestType,
    parameters: Parameters = {},
  ): Promise<GetResult<Item>> {
    return new GetResult(Item, await this.post(postData, parameters));
  }

  public async checkPromotion(
    parameters: Parameters = {},
  ): Promise<GetResult<GetPromotionCartListResult>> {
    this.path = '/check-promotion';

    return new GetResult(
      GetPromotionCartListResult,
      await this.get(parameters),
    );
  }

  public async checkPrerequisites(
    itemId: string,
    parameters: Parameters = {},
  ): Promise<GetResult<GetPrerequisitesListResult>> {
    this.path = `/${itemId}/prerequisites`;

    return new GetResult(
      GetPrerequisitesListResult,
      await this.get(parameters),
    );
  }

  public async updateItem(
    itemId: string,
    postData: ItemUpdateRequestType,
    parameters: Parameters = {},
  ): Promise<GetResult<Item>> {
    this.path = `/${itemId}`;

    return new GetResult(Item, await this.patch(postData, parameters));
  }

  public async removeItem(
    itemId: string,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${itemId}`;

    return this.delete(parameters);
  }

  public async removeItems(parameters: Parameters = {}): Promise<void> {
    return this.delete(parameters);
  }

  public async listItems(
    perPage = 25,
    page = 1,
    parameters: Parameters = {},
  ): Promise<GetResult<ItemList>> {
    this.setPerPage(perPage);
    this.setPage(page);

    return new GetResult(ItemList, await this.get(parameters));
  }
}
