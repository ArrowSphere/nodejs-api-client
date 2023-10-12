import { AbstractRestfulClient, Parameters } from '../abstractRestfulClient';
import { DataExportsTypes } from './entities/Erp/Export/Type/dataExportsTypes';
import { GetResult } from '../getResult';

export class BillingClient extends AbstractRestfulClient {
  protected basePath = '/billing';

  /**
   * To get all the erp exports types
   */
  public async getExportsTypes(
    parameters: Parameters = {},
  ): Promise<GetResult<DataExportsTypes>> {
    this.path = `/erp/exports/types`;

    return new GetResult(DataExportsTypes, await this.get(parameters));
  }
}
