/**
 * Class LicenseRequestClient
 */
import { AbstractRestfulClient } from '../abstractRestfulClient';
import { GetResult, GetResultFields } from '../getResult';
import {
  LicenseRequestResult,
  LicenseRequestResultFields,
} from './entities/request/licenseRequest';

export class LicenseRequestClient extends AbstractRestfulClient {
  protected basePath = '/licenses';

  public async getLastRequests(
    licenseReference: string,
  ): Promise<GetResult<LicenseRequestResult>> {
    this.path = `/${licenseReference}/request`;

    const response = await this.get();

    //A workaround, the public api endpoint is not returning "data" in the payload
    response[GetResultFields.COLUMN_DATA] = {
      [LicenseRequestResultFields.COLUMN_LICENSE_REQUEST]:
        LicenseRequestResultFields.COLUMN_LICENSE_REQUEST in response
          ? response[LicenseRequestResultFields.COLUMN_LICENSE_REQUEST]
          : [],
    };

    return new GetResult(LicenseRequestResult, response);
  }
}
