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
  COLUMN_DISCOUNT = 'discount',
  COLUMN_UPLIFT = 'uplift',
}

export type CreateOrderInputType = {
  [CreateOrderInputFields.COLUMN_CUSTOMER]: {
    [CreateOrderInputFields.COLUMN_REFERENCE]: string;
    [CreateOrderInputFields.COLUMN_PO_NUMBER]?: string;
  };
  [CreateOrderInputFields.COLUMN_PRODUCTS]: Array<{
    [CreateOrderInputFields.COLUMN_SKU]: string;
    [CreateOrderInputFields.COLUMN_QUANTITY]: number;
    [CreateOrderInputFields.COLUMN_SUBSCRIPTION]?: {
      [CreateOrderInputFields.COLUMN_REFERENCE]: string;
    };
    [CreateOrderInputFields.COLUMN_PARENT_LICENSE_ID]?: string;
    [CreateOrderInputFields.COLUMN_PARENT_SKU]?: string;
    [CreateOrderInputFields.COLUMN_PERIODICITY]?: string;
    [CreateOrderInputFields.COLUMN_TERM]?: string;
    [CreateOrderInputFields.COLUMN_DISCOUNT]?: number;
    [CreateOrderInputFields.COLUMN_UPLIFT]?: number;
  }>;
};

export class OrdersClient extends AbstractClient {
  /**
   * The base path of the API
   */
  protected basePath = '/index.php/api/orders';

  public async create(
    postData: CreateOrderInputType,
    parameters: Parameters = {},
  ): Promise<GetResult<ReferenceLink>> {
    return new GetResult(ReferenceLink, await this.post(postData, parameters));
  }

  public async getListOrders(
    perPage = 25,
    page = 1,
    parameters: Parameters = {},
  ): Promise<GetResult<DataListOrders>> {
    this.setPerPage(perPage);
    this.setPage(page);

    return new GetResult(DataListOrders, await this.get(parameters));
  }

  public async getOrder(
    orderReference: string,
    parameters: Parameters = {},
  ): Promise<GetResult<DataListOrders>> {
    this.path = `/${orderReference}`;

    return new GetResult(DataListOrders, await this.get(parameters));
  }
}
