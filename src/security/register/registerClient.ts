import { AbstractRestfulClient, Parameters } from '../../abstractRestfulClient';
import { GetResult } from '../../getResult';
import { RegistrationLink } from './entity/registrationLink';

export class RegisterClient extends AbstractRestfulClient {
  /**
   * The base path of the API
   */
  protected basePath = '/security';

  /**
   * @deprecated
   * Prefer using the wellArchitected version
   */
  public async register(
    subscriptionReference: string,
    parameters: Parameters = {},
  ): Promise<GetResult<RegistrationLink>> {
    this.path = `/${subscriptionReference}/register`;

    return new GetResult(RegistrationLink, await this.post(parameters));
  }

  /**
   * @deprecated
   * Prefer using the wellArchitected version
   */
  public async deregister(
    subscriptionReference: string,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${subscriptionReference}/deregister`;

    return await this.post(parameters);
  }

  /**
   * @deprecated
   * Prefer using the wellArchitected version
   */
  public async checkRegister(
    subscriptionReference: string,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${subscriptionReference}/register/check`;

    return await this.get(parameters);
  }

  /**
   * @deprecated
   * Prefer using the wellArchitected version
   */
  public async triggerAsynchronousUpdate(
    subscriptionReference: string,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${subscriptionReference}/update`;

    return await this.post(parameters);
  }
}
