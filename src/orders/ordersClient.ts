import { AbstractClient, Parameters } from '../abstractClient';
import { GetResult } from '../getResult';
import { DataListOrders } from './entities/dataListOrders';
import { ReferenceLink } from './entities/referenceLink';

export enum CreateOrderInputFields {
  COLUMN_CUSTOMER = 'customer',
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

export type CreateOrderInputType = {
  [CreateOrderInputFields.COLUMN_CUSTOMER]: {
    [CreateOrderInputFields.COLUMN_REFERENCE]: string;
    [CreateOrderInputFields.COLUMN_PO_NUMBER]?: string;
  };
  [CreateOrderInputFields.COLUMN_PRODUCTS]: Array<{
    [CreateOrderInputFields.COLUMN_SKU]: string;
    [CreateOrderInputFields.COLUMN_QUANTITY]: number;
    [CreateOrderInputFields.COLUMN_SUBSCRIPTION]: {
      [CreateOrderInputFields.COLUMN_REFERENCE]: string;
    };
    [CreateOrderInputFields.COLUMN_PARENT_LICENSE_ID]?: string;
    [CreateOrderInputFields.COLUMN_PARENT_SKU]?: string;
    [CreateOrderInputFields.COLUMN_PERIODICITY]?: string;
    [CreateOrderInputFields.COLUMN_TERM]?: string;
  }>;
};

export class OrdersClient extends AbstractClient {
  /**
   * The base path of the Orders API
   *
   * TODO: Actually we use php endpoint and we need to add "/index.php/api" before "/orders" remove "/index.php/api" when endpoint is available in nodejs
   */
  private ROOT_PATH = '/index.php/api/orders';

  /**
   * The base path of the API
   */
  protected basePath = this.ROOT_PATH;

  public async create(
    postData: CreateOrderInputType,
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
