import { AbstractClient } from '../abstractClient'
import { AxiosResponse } from 'axios'
import { WhoAmI, WhoAmIResponseData } from './entities/whoAmI'

export class WhoAmIClient extends AbstractClient {
  /**
   * Gets and returns the raw whoami call response data
   * @returns string
   */
  public async getWhoamiRaw(): Promise<AxiosResponse<WhoAmIResponseData>> {
    this.path = '/whoami'

    return this.get()
  }

  /**
   * Returns the formatted WhoAmI entity data from the whoami call
   * @returns WhoAmI
   */
  public async getWhoami(): Promise<WhoAmIResponseData> {
    const response = await this.getWhoamiRaw()

    return new WhoAmI(response.data).toJSON()
  }
}
