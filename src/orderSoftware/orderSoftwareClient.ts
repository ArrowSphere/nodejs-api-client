import { AbstractRestfulClient, Parameters } from '../abstractRestfulClient';
import { GetResult } from '../getResult';
import { DataListOrdersSoftware } from './entities/dataListOrderSoftware';

export class OrderSoftwareClient extends AbstractRestfulClient {
  /**
   * The base path of the API
   */
  protected basePath = '/orderSoftware';

  public async getOrdersList(
    dateBegin?: string,
  ): Promise<GetResult<DataListOrdersSoftware>> {
    this.path = '/';
    return new GetResult(
      DataListOrdersSoftware,
      await this.get(dateBegin ? { dateBegin } : {}),
    );
  }

  public async getOrder(
    orderReference: string,
  ): Promise<GetResult<DataListOrdersSoftware>> {
    this.path = `/${orderReference}`;
    return new GetResult(DataListOrdersSoftware, await this.get());
  }

  public async deleteOrder(
    orderReference: string,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${orderReference}`;

    return await this.delete(parameters);
  }
}
