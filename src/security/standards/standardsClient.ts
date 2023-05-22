import { AbstractRestfulClient, Parameters } from '../../abstractRestfulClient';
import { Standards } from './entities/standards/standards';
import { GetResult } from '../../getResult';
import { Checks } from './entities/checks/checks';
import { Resources } from './entities/resources/resources';

export class StandardsClient extends AbstractRestfulClient {
  /**
   * The base path of the API
   */
  protected basePath = '/security';

  public async listSecurityStandards(
    subscriptionReference: string,
    parameters: Parameters = {},
  ): Promise<GetResult<Standards>> {
    this.path = `/${subscriptionReference}/standards`;

    return new GetResult(Standards, await this.get(parameters));
  }

  public async listSecurityChecks(
    subscriptionReference: string,
    standardReference: string,
    parameters: Parameters = {},
  ): Promise<GetResult<Checks>> {
    this.path = `/${subscriptionReference}/standards/${standardReference}/checks`;

    return new GetResult(Checks, await this.get(parameters));
  }

  public async listSecurityResources(
    subscriptionReference: string,
    standardReference: string,
    checkReference: string,
    parameters: Parameters = {},
  ): Promise<GetResult<Resources>> {
    this.path = `/${subscriptionReference}/standards/${standardReference}/checks/${checkReference}/resources`;

    return new GetResult(Resources, await this.get(parameters));
  }
}
