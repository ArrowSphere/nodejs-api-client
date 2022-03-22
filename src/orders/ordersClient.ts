import { AbstractClient, Parameters } from '../abstractClient';
import { GetResult } from '../getResult';
import { DataListOrders } from './entities/dataListOrders';
import { ReferenceLink } from './entities/referenceLink';

export enum CreateOrderInputPayloadFields {
  COLUMN_CUSTOMERS = 'customers',
  COLUMN_REFERENCE = 'reference',
  COLUMN_PO_NUMBER = 'ponumber',
  COLUMN_PRODUCTS = 'products',
  COLUMN_SKU = 'sku',
  COLUMN_QUANTITY = 'quantity',
  COLUMN_SUBSCRIPTION = 'subscription',
  COLUMN_PARENT_LICENSE_ID = 'parentLicenseId',
  COLUMN_PARENT_SKU = 'parentSku',
  COLUMN_PERIODICITY = 'periodicity',
  COLUMN_TERM = 'term',
}

export type CreateOrderInputPayloadType = {
  [CreateOrderInputPayloadFields.COLUMN_CUSTOMERS]: {
    [CreateOrderInputPayloadFields.COLUMN_REFERENCE]: string;
    [CreateOrderInputPayloadFields.COLUMN_PO_NUMBER]: string;
  };
  [CreateOrderInputPayloadFields.COLUMN_PRODUCTS]: Array<{
    [CreateOrderInputPayloadFields.COLUMN_SKU]: string;
    [CreateOrderInputPayloadFields.COLUMN_QUANTITY]: number;
    [CreateOrderInputPayloadFields.COLUMN_SUBSCRIPTION]: {
      [CreateOrderInputPayloadFields.COLUMN_REFERENCE]: string;
    };
    [CreateOrderInputPayloadFields.COLUMN_PARENT_LICENSE_ID]: string;
    [CreateOrderInputPayloadFields.COLUMN_PARENT_SKU]: string;
    [CreateOrderInputPayloadFields.COLUMN_PERIODICITY]: string;
    [CreateOrderInputPayloadFields.COLUMN_TERM]: string;
  }>;
};

export class OrdersClient extends AbstractClient {
  /**
   * The base path of the Orders API
   */
  private ROOT_PATH = '/orders';

  /**
   * The base path of the API
   */
  protected basePath = this.ROOT_PATH;

  public async create(
    postData: CreateOrderInputPayloadType,
    parameters: Parameters = {},
  ): Promise<GetResult<ReferenceLink>> {
    return new GetResult(ReferenceLink, await this.post(postData, parameters));
  }

  public async getListOrders(
    parameters: Parameters = {},
  ): Promise<GetResult<DataListOrders>> {
    return new GetResult(DataListOrders, await this.get(parameters));
  }

  public async getOrder(
    orderReference: string,
  ): Promise<GetResult<DataListOrders>> {
    this.path = `${this.ROOT_PATH}/${orderReference}`;

    return new GetResult(DataListOrders, await this.get());
  }
}
