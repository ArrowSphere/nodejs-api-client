import { AbstractRestfulClient, Parameters } from '../abstractRestfulClient';
import { GetResult } from '../getResult';
import { Item, ItemList } from './entities';

export enum ItemRequestFields {
  ADDITIONAL_DATA = 'additionalData',

  OFFER_NAME = 'offerName',

  PRICE_BAND_ARROWSPHERE_SKU = 'priceBandArrowsphereSku',

  QUANTITY = 'quantity',
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
  [ItemRequestFields.ADDITIONAL_DATA]?: ItemAdditionalDataRequestType[];

  [ItemRequestFields.OFFER_NAME]: string;

  [ItemRequestFields.PRICE_BAND_ARROWSPHERE_SKU]: string;

  [ItemRequestFields.QUANTITY]: number;
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
