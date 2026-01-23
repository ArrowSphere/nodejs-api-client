import { AbstractRestfulClient, Parameters } from '../abstractRestfulClient';
import { GetResult } from '../getResult';
import { Item, ItemFields, ItemList, PricingRuleType } from './entities';

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
}

export enum ItemAdditionalDataRequestFields {
  NAME = 'name',
  VALUE = 'value',
}

export type ItemAdditionalDataRequestType = {
  [ItemAdditionalDataRequestFields.NAME]: string;
  [ItemAdditionalDataRequestFields.VALUE]: string;
};

export type ItemRequestType = {
  [ItemFields.ADDITIONAL_DATA]?: ItemAdditionalDataRequestType[] | undefined;
  [ItemFields.COTERM_PRICES]?:
    | Record<'arrow' | 'partner' | 'endCustomer' | 'retail', number>
    | undefined;
  [ItemFields.COTERM_PRICES_WITHOUT_PROMOTION]?:
    | Record<'arrow' | 'partner' | 'endCustomer' | 'retail', number>
    | undefined;
  [ItemFields.CURRENCY]?: string | undefined;
  [ItemFields.IS_ADDON]?: boolean | undefined;
  [ItemFields.IS_TRIAL]?: boolean | undefined;
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
  [ItemFields.RULES]?: PricingRuleType | undefined;
};

export type ItemAddRequestType = ItemRequestType;
export type ItemUpdateRequestType = ItemRequestType;

export class CartClient extends AbstractRestfulClient {
  protected basePath = '/cart';
  public async addItem(
    postData: ItemAddRequestType,
    parameters: Parameters = {},
  ): Promise<GetResult<Item>> {
    return new GetResult(Item, await this.post(postData, parameters));
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
