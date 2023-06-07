import {
  AbstractRestfulClient,
  ConfigurationsClient,
} from './abstractRestfulClient';
import { CheckDomainClient, WhoAmIClient } from './general';
import { LicensesClient } from './licenses';
import { SubscriptionsClient } from './subscriptions';
import { CustomersClient } from './customers';
import { OrdersClient } from './orders';
import { ContactClient } from './contact';
import { CampaignClient } from './campaign';
import { ConsumptionClient } from './consumption';
import { StandardsClient } from './security/standards/standardsClient';
import { RegisterClient } from './security';
import { CartClient } from './cart/cartClient';
import { SupportCenterClient } from './supportCenter';
import { CatalogClient } from './catalog';
import { UserClient } from './user';
import { NotificationsClient } from './notifications';

/**
 * Public API Client class, should be the main entry point for your calls
 */
export class PublicApiClient extends AbstractRestfulClient {
  constructor() {
    super();
  }

  /**
   * Creates a new {@link CustomersClient} instance and returns it
   * @returns {@link CustomersClient}
   */
  public getCustomersClient(
    configuration?: ConfigurationsClient,
  ): CustomersClient {
    return new CustomersClient(configuration)
      .setUrl(this.url)
      .setApiKey(this.apiKey)
      .setHeaders(this.headers)
      .setHttpExceptionHandlers(this.httpExceptionHandlers);
  }

  /**
   * Creates a new {@link WhoAmIClient} instance and returns it
   * @returns {@link WhoAmIClient}
   */
  public getWhoamiClient(configuration?: ConfigurationsClient): WhoAmIClient {
    return new WhoAmIClient(configuration)
      .setUrl(this.url)
      .setApiKey(this.apiKey)
      .setHeaders(this.headers)
      .setHttpExceptionHandlers(this.httpExceptionHandlers);
  }

  /**
   * Creates a new {@link LicensesClient} instance and returns it
   * @returns {@link LicensesClient}
   */
  public getLicensesClient(
    configuration?: ConfigurationsClient,
  ): LicensesClient {
    return new LicensesClient(configuration)
      .setUrl(this.url)
      .setApiKey(this.apiKey)
      .setHeaders(this.headers)
      .setHttpExceptionHandlers(this.httpExceptionHandlers);
  }

  /**
   * Creates a new {@link CheckDomainClient} instance and returns it
   * @returns {@link CheckDomainClient}
   */
  public getCheckDomainClient(
    configuration?: ConfigurationsClient,
  ): CheckDomainClient {
    return new CheckDomainClient(configuration)
      .setUrl(this.url)
      .setApiKey(this.apiKey)
      .setHeaders(this.headers)
      .setHttpExceptionHandlers(this.httpExceptionHandlers);
  }

  /**
   * Creates a new {@link SubscriptionsClient} instance and returns it
   * @returns {@link SubscriptionsClient}
   */
  public getSubscriptionsClient(
    configuration?: ConfigurationsClient,
  ): SubscriptionsClient {
    return new SubscriptionsClient(configuration)
      .setUrl(this.url)
      .setApiKey(this.apiKey)
      .setHeaders(this.headers)
      .setHttpExceptionHandlers(this.httpExceptionHandlers);
  }

  /**
   * Creates a new {@link OrdersClient} instance and returns it
   * @returns {@link OrdersClient}
   */
  public getOrdersClient(configuration?: ConfigurationsClient): OrdersClient {
    return new OrdersClient(configuration)
      .setUrl(this.url)
      .setApiKey(this.apiKey)
      .setHeaders(this.headers)
      .setHttpExceptionHandlers(this.httpExceptionHandlers);
  }

  /**
   * Creates a new {@link ContactClient} instance and returns it
   * @returns {@link ContactClient}
   */
  public getContactClient(configuration?: ConfigurationsClient): ContactClient {
    return new ContactClient(configuration)
      .setUrl(this.url)
      .setApiKey(this.apiKey)
      .setHeaders(this.headers)
      .setHttpExceptionHandlers(this.httpExceptionHandlers);
  }

  /**
   * Creates a new {@link ContactClient} instance and returns it
   * @returns {@link ContactClient}
   */
  public getCampaignClient(
    configuration?: ConfigurationsClient,
  ): CampaignClient {
    return new CampaignClient(configuration)
      .setUrl(this.url)
      .setApiKey(this.apiKey)
      .setHeaders(this.headers)
      .setHttpExceptionHandlers(this.httpExceptionHandlers);
  }

  public getConsumptionClient(
    configuration?: ConfigurationsClient,
  ): ConsumptionClient {
    return new ConsumptionClient(configuration)
      .setUrl(this.url)
      .setApiKey(this.apiKey)
      .setHeaders(this.headers)
      .setHttpExceptionHandlers(this.httpExceptionHandlers);
  }

  public getSecurityStandardsClient(
    configuration?: ConfigurationsClient,
  ): StandardsClient {
    return new StandardsClient(configuration)
      .setUrl(this.url)
      .setApiKey(this.apiKey)
      .setHeaders(this.headers)
      .setHttpExceptionHandlers(this.httpExceptionHandlers);
  }

  public getSecurityRegisterClient(
    configuration?: ConfigurationsClient,
  ): RegisterClient {
    return new RegisterClient(configuration)
      .setUrl(this.url)
      .setApiKey(this.apiKey)
      .setHeaders(this.headers)
      .setHttpExceptionHandlers(this.httpExceptionHandlers);
  }

  public getCartClient(configuration?: ConfigurationsClient): CartClient {
    return new CartClient(configuration)
      .setUrl(this.url)
      .setApiKey(this.apiKey)
      .setHeaders(this.headers)
      .setHttpExceptionHandlers(this.httpExceptionHandlers);
  }
  public getSupportCenterClient(
    configuration?: ConfigurationsClient,
  ): SupportCenterClient {
    return new SupportCenterClient(configuration)
      .setUrl(this.url)
      .setApiKey(this.apiKey)
      .setHeaders(this.headers)
      .setHttpExceptionHandlers(this.httpExceptionHandlers);
  }

  public getCatalogClient(configuration?: ConfigurationsClient): CatalogClient {
    return new CatalogClient(configuration)
      .setUrl(this.url)
      .setApiKey(this.apiKey)
      .setHeaders(this.headers)
      .setHttpExceptionHandlers(this.httpExceptionHandlers);
  }

  public getUserClient(configuration?: ConfigurationsClient): UserClient {
    return new UserClient(configuration)
      .setUrl(this.url)
      .setApiKey(this.apiKey)
      .setHeaders(this.headers)
      .setHttpExceptionHandlers(this.httpExceptionHandlers);
  }

  public getNotificationsClient(
    configuration?: ConfigurationsClient,
  ): NotificationsClient {
    return new NotificationsClient(configuration)
      .setUrl(this.url)
      .setToken(this.token)
      .setHeaders(this.headers)
      .setHttpExceptionHandlers(this.httpExceptionHandlers);
  }
}

export default PublicApiClient;
