import { AbstractClient } from '../abstractClient';

export class OrdersClient extends AbstractClient {
  /**
   * The base path of the Orders API
   */
  private ROOT_PATH = '/orders';

  /**
   * The base path of the API
   */
  protected basePath = this.ROOT_PATH;
}
