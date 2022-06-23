import { AbstractClient, Parameters } from '../abstractClient';
import { GetResult } from '../getResult';
import { DataCustomers } from './entities/dataCustomers';
import { DataInvitation } from './entities/dataInvitation';
import { DataListOrders } from '../orders';

export class CustomersClient extends AbstractClient {
  /**
   * The base path of the API
   */
  protected basePath = '/customers';

  public async getCustomers(
    parameters: Parameters = {},
  ): Promise<GetResult<DataCustomers>> {
    return new GetResult(DataCustomers, await this.get(parameters));
  }

  public async getCustomerOrders(
    customerRef: string,
    perPage = 25,
    page = 1,
    parameters: Parameters = {},
  ): Promise<GetResult<DataListOrders>> {
    this.setPerPage(perPage);
    this.setPage(page);

    this.path = `/${customerRef}/orders`;

    return new GetResult(DataListOrders, await this.get(parameters));
  }

  public async getCustomerInvitation(
    codeInvitation: string,
    parameters: Parameters = {},
  ): Promise<GetResult<DataInvitation>> {
    this.path = `/invitations/${codeInvitation}`;

    return new GetResult(DataInvitation, await this.get(parameters));
  }
}
