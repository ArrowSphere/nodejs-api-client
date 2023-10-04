import { AbstractRestfulClient, Parameters } from '../../abstractRestfulClient';
import { Standards } from './entities/standards/standards';
import { GetResult } from '../../getResult';
import { Checks } from './entities/checks/checks';
import { Resources } from './entities/resources/resources';

export class WellArchitectedStandardsClient extends AbstractRestfulClient {
  /**
   * The base path of the API
   */
  protected basePath = '/wellArchitected';

  public async listSecurityStandardsWithAccountReference(
    subscriptionReference: string,
    parameters: Parameters = {},
    accountReference: string,
  ): Promise<GetResult<Standards>> {
    this.path = `/${subscriptionReference}/accounts/${accountReference}/standards`;

    return new GetResult(Standards, await this.get(parameters));
  }

  public async listSecurityChecksWithAccountReference(
    subscriptionReference: string,
    standardReference: string,
    accountReference: string,
    parameters: Parameters = {},
  ): Promise<GetResult<Checks>> {
    this.path = `/${subscriptionReference}/accounts/${accountReference}/standards/${standardReference}/checks`;

    return new GetResult(Checks, await this.get(parameters));
  }

  public async listSecurityResourcesWithAccountReference(
    subscriptionReference: string,
    standardReference: string,
    checkReference: string,
    accountReference: string,
    parameters: Parameters = {},
  ): Promise<GetResult<Resources>> {
    this.path = `/${subscriptionReference}/accounts/${accountReference}/standards/${standardReference}/checks/${checkReference}/resources`;

    return new GetResult(Resources, await this.get(parameters));
  }
}
