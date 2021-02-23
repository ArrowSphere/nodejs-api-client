import { AbstractClient } from './abstractClient'
import { WhoAmIClient } from './general'
import { LicensesClient } from './licenses/licensesClient'

/**
 * Public API Client class, should be the main entry point for your calls
 */
export class PublicApiClient extends AbstractClient {
  constructor() {
    super()
  }

  /**
   * Creates a new {@link WhoAmIClient} instance and returns it
   * @returns {@link WhoAmIClient}
   */
  public getWhoamiClient(): WhoAmIClient {
    return new WhoAmIClient(this.client).setUrl(this.url).setApiKey(this.apiKey)
  }

  /**
   * Creates a new {@link LicensesClient} instance and returns it
   * @returns {@link LicensesClient}
   */
  public getLicensesClient(): LicensesClient {
    return new LicensesClient(this.client)
      .setUrl(this.url)
      .setApiKey(this.apiKey)
  }
}

export default PublicApiClient
