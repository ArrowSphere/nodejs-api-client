/**
 * Class LicenseRequestClient
 */
import { AbstractRestfulClient } from '../abstractRestfulClient';
import { GetResult } from '../getResult';
import { LicenseRequest } from './entities/request/licenseRequest';

export class LicenseRequestClient extends AbstractRestfulClient {
  protected basePath = '/licenses';

  public async getLastRequests(
    licenseReference: string,
  ): Promise<GetResult<LicenseRequest>> {
    this.path = `/${licenseReference}/request`;

    return new GetResult(LicenseRequest, await this.get());
  }
}
