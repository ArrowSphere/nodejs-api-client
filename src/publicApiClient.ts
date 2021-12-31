import { AbstractClient } from './abstractClient';
import { CheckDomainClient, WhoAmIClient } from './general';
import { LicensesClient } from './licenses';
import { SubscriptionsClient } from './subscriptions';
import { CustomersClient } from './customers';

/**
 * Public API Client class, should be the main entry point for your calls
 */
export class PublicApiClient extends AbstractClient {
  constructor() {
    super();
  }

  /**
   * Creates a new {@link WhoAmIClient} instance and returns it
   * @returns {@link WhoAmIClient}
   */
  public getWhoamiClient(): WhoAmIClient {
    return new WhoAmIClient(this.client)
      .setUrl(this.url)
      .setApiKey(this.apiKey);
  }

  /**
   * Creates a new {@link LicensesClient} instance and returns it
   * @returns {@link LicensesClient}
   */
  public getLicensesClient(): LicensesClient {
    return new LicensesClient(this.client)
      .setUrl(this.url)
      .setApiKey(this.apiKey);
  }

  /**
   * Creates a new {@link CheckDomainClient} instance and returns it
   * @returns {@link CheckDomainClient}
   */
  public getCheckDomainClient(): CheckDomainClient {
    return new CheckDomainClient(this.client)
      .setUrl(this.url)
      .setApiKey(this.apiKey);
  }

  /**
   * Creates a new {@link SubscriptionsClient} instance and returns it
   * @returns {@link SubscriptionsClient}
   */
  public getSubscriptionsClient(): SubscriptionsClient {
    return new SubscriptionsClient(this.client)
      .setUrl(this.url)
      .setApiKey(this.apiKey);
  }

  /**
   * Creates a new {@link CustomersClient} instance and returns it
   * @returns {@link CustomersClient}
   */
  public getCustomersClient(): CustomersClient {
    return new CustomersClient(this.client)
      .setUrl(this.url)
      .setApiKey(this.apiKey);
  }
}

export default PublicApiClient;
