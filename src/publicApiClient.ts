import {
  AbstractRestfulClient,
  ConfigurationsClient,
} from './abstractRestfulClient';
import { CheckDomainClient, WhoAmIClient } from './general';
import { LicenseRequestClient, LicensesClient } from './licenses';
import { SubscriptionsClient } from './subscriptions';
import { CustomersClient } from './customers';
import { OrdersClient } from './orders';
import { ContactClient } from './contact';
import { CampaignClient } from './campaign';
import { ConsumptionClient } from './consumption';
import {
  WellArchitectedRegisterClient,
  WellArchitectedStandardsClient,
} from './wellArchitected';
import { CartClient } from './cart/cartClient';
import { SupportCenterClient } from './supportCenter';
import { CatalogClient } from './catalog';
import { UserClient } from './user';
import { NotificationsClient } from './notifications';
import { RegisterClient, StandardsClient } from './security';
import { PartnerClient } from './partner';

/**
 * Public API Client class, should be the main entry point for your calls
 */
export class PublicApiClient extends AbstractRestfulClient {
  constructor() {
    super();
  }

  private applyConfig(client: AbstractRestfulClient): AbstractRestfulClient {
    return client
      .setUrl(this.url)
      .setSecurity(this.security)
      .setApiKey(this.apiKey)
      .setHeaders(this.headers)
      .setHttpExceptionHandlers(this.httpExceptionHandlers);
  }

  /**
   * Creates a new {@link CustomersClient} instance and returns it
   * @returns {@link CustomersClient}
   */
  public getCustomersClient(
    configuration?: ConfigurationsClient,
  ): CustomersClient {
    const client: CustomersClient = new CustomersClient(configuration);
    this.applyConfig(client);

    return client;
  }

  /**
   * Creates a new {@link PartnerClient} instance and returns it
   * @returns {@link PartnerClient}
   */
  public getPartnerClient(configuration?: ConfigurationsClient): PartnerClient {
    const client: PartnerClient = new PartnerClient(configuration);
    this.applyConfig(client);

    return client;
  }

  /**
   * Creates a new {@link WhoAmIClient} instance and returns it
   * @returns {@link WhoAmIClient}
   */
  public getWhoamiClient(configuration?: ConfigurationsClient): WhoAmIClient {
    const client: WhoAmIClient = new WhoAmIClient(configuration);
    this.applyConfig(client);

    return client;
  }

  /**
   * Creates a new {@link LicensesClient} instance and returns it
   * @returns {@link LicensesClient}
   */
  public getLicensesClient(
    configuration?: ConfigurationsClient,
  ): LicensesClient {
    const client: LicensesClient = new LicensesClient(configuration);
    this.applyConfig(client);

    return client;
  }

  /**
   * Creates a new {@link LicenseRequestClient} instance and returns it
   * @returns {@link LicenseRequestClient}
   */
  public getLicenseRequestClient(
    configuration?: ConfigurationsClient,
  ): LicenseRequestClient {
    const client: LicenseRequestClient = new LicenseRequestClient(
      configuration,
    );
    this.applyConfig(client);

    return client;
  }

  /**
   * Creates a new {@link CheckDomainClient} instance and returns it
   * @returns {@link CheckDomainClient}
   */
  public getCheckDomainClient(
    configuration?: ConfigurationsClient,
  ): CheckDomainClient {
    const client: CheckDomainClient = new CheckDomainClient(configuration);
    this.applyConfig(client);

    return client;
  }

  /**
   * Creates a new {@link SubscriptionsClient} instance and returns it
   * @returns {@link SubscriptionsClient}
   */
  public getSubscriptionsClient(
    configuration?: ConfigurationsClient,
  ): SubscriptionsClient {
    const client: SubscriptionsClient = new SubscriptionsClient(configuration);
    this.applyConfig(client);

    return client;
  }

  /**
   * Creates a new {@link OrdersClient} instance and returns it
   * @returns {@link OrdersClient}
   */
  public getOrdersClient(configuration?: ConfigurationsClient): OrdersClient {
    const client: OrdersClient = new OrdersClient(configuration);
    this.applyConfig(client);

    return client;
  }

  /**
   * Creates a new {@link ContactClient} instance and returns it
   * @returns {@link ContactClient}
   */
  public getContactClient(configuration?: ConfigurationsClient): ContactClient {
    const client: ContactClient = new ContactClient(configuration);
    this.applyConfig(client);

    return client;
  }

  /**
   * Creates a new {@link ContactClient} instance and returns it
   * @returns {@link ContactClient}
   */
  public getCampaignClient(
    configuration?: ConfigurationsClient,
  ): CampaignClient {
    const client: CampaignClient = new CampaignClient(configuration);
    this.applyConfig(client);

    return client;
  }

  public getConsumptionClient(
    configuration?: ConfigurationsClient,
  ): ConsumptionClient {
    const client: ConsumptionClient = new ConsumptionClient(configuration);
    this.applyConfig(client);

    return client;
  }

  /**
   * @deprecated
   * Prefer using getWellArchitectedStandardsClient
   */
  public getSecurityStandardsClient(
    configuration?: ConfigurationsClient,
  ): StandardsClient {
    const client: StandardsClient = new StandardsClient(configuration);
    this.applyConfig(client);

    return client;
  }

  /**
   * @deprecated
   * Prefer using getWellArchitectedRegisterClient
   */
  public getSecurityRegisterClient(
    configuration?: ConfigurationsClient,
  ): RegisterClient {
    const client: RegisterClient = new RegisterClient(configuration);
    this.applyConfig(client);

    return client;
  }

  public getWellArchitectedStandardsClient(
    configuration?: ConfigurationsClient,
  ): WellArchitectedStandardsClient {
    const client: WellArchitectedStandardsClient = new WellArchitectedStandardsClient(
      configuration,
    );
    this.applyConfig(client);

    return client;
  }

  public getWellArchitectedRegisterClient(
    configuration?: ConfigurationsClient,
  ): WellArchitectedRegisterClient {
    const client: WellArchitectedRegisterClient = new WellArchitectedRegisterClient(
      configuration,
    );
    this.applyConfig(client);

    return client;
  }

  public getCartClient(configuration?: ConfigurationsClient): CartClient {
    const client: CartClient = new CartClient(configuration);
    this.applyConfig(client);

    return client;
  }
  public getSupportCenterClient(
    configuration?: ConfigurationsClient,
  ): SupportCenterClient {
    const client: SupportCenterClient = new SupportCenterClient(configuration);
    this.applyConfig(client);

    return client;
  }

  public getCatalogClient(configuration?: ConfigurationsClient): CatalogClient {
    const client: CatalogClient = new CatalogClient(configuration);
    this.applyConfig(client);

    return client;
  }

  public getUserClient(configuration?: ConfigurationsClient): UserClient {
    const client: UserClient = new UserClient(configuration);
    this.applyConfig(client);

    return client;
  }

  public getNotificationsClient(
    configuration?: ConfigurationsClient,
  ): NotificationsClient {
    const client: NotificationsClient = new NotificationsClient(configuration);
    this.applyConfig(client);

    return client;
  }
}

export default PublicApiClient;
