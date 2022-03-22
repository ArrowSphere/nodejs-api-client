import { AbstractClient, Parameters } from '../abstractClient';
import { GetResult } from '../getResult';
import { DataListOrders } from './entities/dataListOrders';

export class OrdersClient extends AbstractClient {
  /**
   * The base path of the Orders API
   */
  private ROOT_PATH = '/orders';

  /**
   * The base path of the API
   */
  protected basePath = this.ROOT_PATH;

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
