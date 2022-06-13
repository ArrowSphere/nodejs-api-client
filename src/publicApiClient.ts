import { AbstractClient } from './abstractClient';
import { CheckDomainClient, WhoAmIClient } from './general';
import { LicensesClient } from './licenses/licensesClient';
import { SubscriptionsClient } from './subscriptions/subscriptionsClient';
import { CustomersClient } from './customers/customersClient';
import { OrdersClient } from './orders';
import { ContactClient } from './contact/contactClient';
import { CampaignClient } from './campaign';
import { ConsumptionClient } from './consumption/consumptionClient';

/**
 * Public API Client class, should be the main entry point for your calls
 */
export class PublicApiClient extends AbstractClient {
  constructor() {
    super();
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
   * Creates a new {@link OrdersClient} instance and returns it
   * @returns {@link OrdersClient}
   */
  public getOrdersClient(): OrdersClient {
    return new OrdersClient(this.client)
      .setUrl(this.url)
      .setApiKey(this.apiKey);
  }

  /**
   * Creates a new {@link ContactClient} instance and returns it
   * @returns {@link ContactClient}
   */
  public getContactClient(): ContactClient {
    return new ContactClient(this.client)
      .setUrl(this.url)
      .setApiKey(this.apiKey);
  }

  /**
   * Creates a new {@link ContactClient} instance and returns it
   * @returns {@link ContactClient}
   */
  public getCampaignClient(): CampaignClient {
    return new CampaignClient(this.client)
      .setUrl(this.url)
      .setApiKey(this.apiKey);
  }

  public getConsumptionClient(): ConsumptionClient {
    return new ConsumptionClient(this.client)
      .setUrl(this.url)
      .setApiKey(this.apiKey);
  }
}

export default PublicApiClient;
