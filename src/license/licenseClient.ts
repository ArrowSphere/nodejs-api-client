import { AbstractClient, Parameters } from '../abstractClient';
import { LicenseGetData } from './entities/license/licenseGetResult';

export class LicenseClient extends AbstractClient {
  public getLicense(
    licenseReference: string,
    parameters: Parameters = {},
  ): Promise<LicenseGetData> {
    this.path = encodeURI(`/licenses/${licenseReference}`);

    return this.get(parameters);
  }
}
