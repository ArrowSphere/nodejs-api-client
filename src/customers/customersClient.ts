import { AbstractClient, Parameters } from '../abstractClient';
import { GetResult } from '../getResult';
import { DataCustomers } from './entities/dataCustomers';

export class CustomersClient extends AbstractClient {
  /**
   * The base path of the Customers API
   */
  private ROOT_PATH = '/customers';

  public async getCustomers(
    parameters: Parameters = {},
  ): Promise<GetResult<DataCustomers>> {
    this.path = this.ROOT_PATH;

    return new GetResult(DataCustomers, await this.get(parameters));
  }
}
