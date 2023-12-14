/**
 * Class LicenseRequestClient
 */
import { AbstractRestfulClient } from '../abstractRestfulClient';
import { GetResult, GetResultFields } from '../getResult';
import {
  LicenseRequestResult,
  LicenseRequestResultFields,
  LicenseRequestType,
} from './entities/request/licenseRequest';

export class LicenseRequestClient extends AbstractRestfulClient {
  protected basePath = '/licenses';

  public async getLastRequests(
    licenseReference: string,
  ): Promise<LicenseRequestType[]> {
    this.path = `/${licenseReference}/request`;

    const response = await this.get();
    //A workaround, the public api endpoint is not returning "data" in the payload
    response[GetResultFields.COLUMN_DATA] = {
      [LicenseRequestResultFields.COLUMN_LICENSE_REQUEST]:
        GetResultFields.COLUMN_DATA in response
          ? response[GetResultFields.COLUMN_DATA]
          : [],
    };

    const result: GetResult<LicenseRequestResult> = new GetResult(
      LicenseRequestResult,
      response,
    );

    return result.toJSON()[GetResultFields.COLUMN_DATA][
      LicenseRequestResultFields.COLUMN_LICENSE_REQUEST
    ] as LicenseRequestType[];
  }
}
