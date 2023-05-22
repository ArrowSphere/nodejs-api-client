import { AbstractRestfulClient, Parameters } from '../abstractRestfulClient';
import { CompleteWhoAmI } from './types';
import { GetResult } from '../getResult';

export class UserClient extends AbstractRestfulClient {
  protected basePath = '/partners/users/rights';

  /**
   * To get the infos and rights about a user.
   */
  public async getInfos(
    parameters: Parameters = {},
  ): Promise<GetResult<CompleteWhoAmI>> {
    return new GetResult(CompleteWhoAmI, await this.get(parameters));
  }
}
