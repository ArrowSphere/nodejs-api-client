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

  /**
   * @deprecated
   * Prefer using listSecurityStandardsWithAccountReference
   */
  public async listSecurityStandards(
    subscriptionReference: string,
    parameters: Parameters = {},
  ): Promise<GetResult<Standards>> {
    this.path = `/${subscriptionReference}/standards`;

    return new GetResult(Standards, await this.get(parameters));
  }

  /**
   * @deprecated
   * Prefer using the wellArchitected version
   */
  public async listSecurityStandardsWithAccountReference(
    subscriptionReference: string,
    parameters: Parameters = {},
    accountReference: string,
  ): Promise<GetResult<Standards>> {
    this.path = `/${subscriptionReference}/accounts/${accountReference}/standards`;

    return new GetResult(Standards, await this.get(parameters));
  }

  /**
   * @deprecated
   * Prefer using listSecurityChecksWithAccountReference
   */
  public async listSecurityChecks(
    subscriptionReference: string,
    standardReference: string,
    parameters: Parameters = {},
  ): Promise<GetResult<Checks>> {
    this.path = `/${subscriptionReference}/standards/${standardReference}/checks`;

    return new GetResult(Checks, await this.get(parameters));
  }

  /**
   * @deprecated
   * Prefer using the wellArchitected version
   */
  public async listSecurityChecksWithAccountReference(
    subscriptionReference: string,
    standardReference: string,
    accountReference: string,
    parameters: Parameters = {},
  ): Promise<GetResult<Checks>> {
    this.path = `/${subscriptionReference}/accounts/${accountReference}/standards/${standardReference}/checks`;

    return new GetResult(Checks, await this.get(parameters));
  }

  /**
   * @deprecated
   * Prefer using listSecurityResourcesWithAccountReference
   */
  public async listSecurityResources(
    subscriptionReference: string,
    standardReference: string,
    checkReference: string,
    parameters: Parameters = {},
  ): Promise<GetResult<Resources>> {
    this.path = `/${subscriptionReference}/standards/${standardReference}/checks/${checkReference}/resources`;

    return new GetResult(Resources, await this.get(parameters));
  }

  /**
   * @deprecated
   * Prefer using the wellArchitected version
   */
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
