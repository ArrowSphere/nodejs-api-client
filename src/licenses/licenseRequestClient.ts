/**
 * Class LicenseRequestClient
 */
import { AbstractRestfulClient } from '../abstractRestfulClient';
import { LicenseRequestType } from './entities/request/licenseRequest';

export class LicenseRequestClient extends AbstractRestfulClient {
  protected basePath = '/licenses';

  public async getLastRequests(
    licenseReference: string,
  ): Promise<LicenseRequestType[]> {
    this.path = `/${licenseReference}/request`;

    return (await this.get()) as LicenseRequestType[];
  }
}
