import { CheckDomainClient, WhoAmIClient } from './general';
import { LicensesClient } from './licenses';
import { SubscriptionsClient } from './subscriptions';
import { CustomersClient } from './customers';
import { OrdersClient } from './orders';
import { ContactClient } from './contact';
import { CampaignClient } from './campaign';
import { ConsumptionClient } from './consumption';
import { StandardsClient } from './security';
import { RegisterClient } from './security';
import { CartClient } from './cart';
import { SupportCenterClient } from './supportCenter';
import { CatalogClient, CatalogGraphQLClient } from './catalog';
import { UserClient } from './user';
import PublicApiClient from './publicApiClient';
import { PublicGraphQLClient } from './publicGraphQLClient';

/**
 * Allow to have single instance of each client.
 */
export class ClientsRegistry {
  // common properties
  private headers: Record<string, string> = {};
  private legacyHeaders: Record<string, string> = {};

  // rest instances
  private customerClientInstance: CustomersClient | undefined;
  private whoAmIClientInstance: WhoAmIClient | undefined;
  private licensesClientInstance: LicensesClient | undefined;
  private checkDomainClientInstance: CheckDomainClient | undefined;
  private subscriptionsClientInstance: SubscriptionsClient | undefined;
  private ordersClientInstance: OrdersClient | undefined;
  private contactClientInstance: ContactClient | undefined;
  private campaignClientInstance: CampaignClient | undefined;
  private consumptionClientInstance: ConsumptionClient | undefined;
  private securityStandardsClientInstance: StandardsClient | undefined;
  private securityRegisterClientInstance: RegisterClient | undefined;
  private cartClientInstance: CartClient | undefined;
  private supportCenterClientInstance: SupportCenterClient | undefined;
  private catalogClientInstance: CatalogClient | undefined;
  private userClientInstance: UserClient | undefined;

  // gql instances
  private gqlCatalogClientInstance: CatalogGraphQLClient | undefined;

  constructor(
    private readonly publicApiClient: PublicApiClient,
    private readonly gqlPublicApiClient: PublicGraphQLClient,
  ) {}

  public static create(
    publicApiClient: PublicApiClient,
    gqlPublicApiClient: PublicGraphQLClient,
  ): ClientsRegistry {
    return new ClientsRegistry(publicApiClient, gqlPublicApiClient);
  }

  public getCustomersClientInstance(): CustomersClient {
    if (!this.customerClientInstance) {
      this.customerClientInstance = this.publicApiClient
        .getCustomersClient()
        .mergeHeaders(this.headers);
    }

    return this.customerClientInstance;
  }

  /**
   * Creates a new {@link WhoAmIClient} instance and returns it
   * @returns {@link WhoAmIClient}
   */
  public getWhoamiClientInstance(): WhoAmIClient {
    if (!this.whoAmIClientInstance) {
      this.whoAmIClientInstance = this.publicApiClient
        .getWhoamiClient()
        .mergeHeaders(this.headers);
    }

    return this.whoAmIClientInstance;
  }

  /**
   * Creates a new {@link LicensesClient} instance and returns it
   * @returns {@link LicensesClient}
   */
  public getLicensesClientInstance(): LicensesClient {
    if (!this.licensesClientInstance) {
      this.licensesClientInstance = this.publicApiClient
        .getLicensesClient()
        .mergeHeaders(this.legacyHeaders);
    }

    return this.licensesClientInstance;
  }

  /**
   * Creates a new {@link CheckDomainClient} instance and returns it
   * @returns {@link CheckDomainClient}
   */
  public getCheckDomainClientInstance(): CheckDomainClient {
    if (!this.checkDomainClientInstance) {
      this.checkDomainClientInstance = this.publicApiClient
        .getCheckDomainClient()
        .mergeHeaders(this.headers);
    }

    return this.checkDomainClientInstance;
  }

  /**
   * Creates a new {@link SubscriptionsClient} instance and returns it
   * @returns {@link SubscriptionsClient}
   */
  public getSubscriptionsClientInstance(): SubscriptionsClient {
    if (!this.subscriptionsClientInstance) {
      this.subscriptionsClientInstance = this.publicApiClient
        .getSubscriptionsClient()
        .mergeHeaders(this.headers);
    }

    return this.subscriptionsClientInstance;
  }

  /**
   * Creates a new {@link OrdersClient} instance and returns it
   * @returns {@link OrdersClient}
   */
  public getOrdersClientInstance(): OrdersClient {
    if (!this.ordersClientInstance) {
      this.ordersClientInstance = this.publicApiClient
        .getOrdersClient()
        .mergeHeaders(this.headers);
    }

    return this.ordersClientInstance;
  }

  /**
   * Creates a new {@link ContactClient} instance and returns it
   * @returns {@link ContactClient}
   */
  public getContactClientInstance(): ContactClient {
    if (!this.contactClientInstance) {
      this.contactClientInstance = this.publicApiClient
        .getContactClient()
        .mergeHeaders(this.headers);
    }

    return this.contactClientInstance;
  }

  /**
   * Creates a new {@link ContactClient} instance and returns it
   * @returns {@link ContactClient}
   */
  public getCampaignClientInstance(): CampaignClient {
    if (!this.campaignClientInstance) {
      this.campaignClientInstance = this.publicApiClient
        .getCampaignClient()
        .mergeHeaders(this.headers);
    }

    return this.campaignClientInstance;
  }

  public getConsumptionClientInstance(): ConsumptionClient {
    if (!this.consumptionClientInstance) {
      this.consumptionClientInstance = this.publicApiClient
        .getConsumptionClient()
        .mergeHeaders(this.headers);
    }

    return this.consumptionClientInstance;
  }

  public getSecurityStandardsClientInstance(): StandardsClient {
    if (!this.securityStandardsClientInstance) {
      this.securityStandardsClientInstance = this.publicApiClient
        .getSecurityStandardsClient()
        .mergeHeaders(this.headers);
    }

    return this.securityStandardsClientInstance;
  }

  public getSecurityRegisterClientInstance(): RegisterClient {
    if (!this.securityRegisterClientInstance) {
      this.securityRegisterClientInstance = this.publicApiClient
        .getSecurityRegisterClient()
        .mergeHeaders(this.headers);
    }

    return this.securityRegisterClientInstance;
  }

  public getCartClientInstance(): CartClient {
    if (!this.cartClientInstance) {
      this.cartClientInstance = this.publicApiClient
        .getCartClient()
        .mergeHeaders(this.headers);
    }

    return this.cartClientInstance;
  }
  public getSupportCenterClientInstance(): SupportCenterClient {
    if (!this.supportCenterClientInstance) {
      this.supportCenterClientInstance = this.publicApiClient
        .getSupportCenterClient()
        .mergeHeaders(this.headers);
    }

    return this.supportCenterClientInstance;
  }

  public getCatalogClientInstance(): CatalogClient {
    if (!this.catalogClientInstance) {
      this.catalogClientInstance = this.publicApiClient
        .getCatalogClient()
        .mergeHeaders(this.legacyHeaders);
    }

    return this.catalogClientInstance;
  }

  public getGQLCatalogClientInstance(): CatalogGraphQLClient {
    if (!this.gqlCatalogClientInstance) {
      this.gqlCatalogClientInstance = this.gqlPublicApiClient
        .getCatalogGraphQLClient()
        .mergeHeaders(this.headers);
    }

    return this.gqlCatalogClientInstance;
  }

  public getUserClientInstance(): UserClient {
    if (!this.userClientInstance) {
      this.userClientInstance = this.publicApiClient
        .getUserClient()
        .mergeHeaders(this.headers);
    }

    return this.userClientInstance;
  }

  /**
   * Allow to set all instances headers.
   * @param headers
   */
  public mergeInstancesHeaders(headers: Record<string, string>): void {
    this.headers = headers;

    // Add here each client that need headers refresh
    this.customerClientInstance?.mergeHeaders(headers);
    this.whoAmIClientInstance?.mergeHeaders(headers);
    this.checkDomainClientInstance?.mergeHeaders(headers);
    this.subscriptionsClientInstance?.mergeHeaders(headers);
    this.campaignClientInstance?.mergeHeaders(headers);
    this.consumptionClientInstance?.mergeHeaders(headers);
    this.securityStandardsClientInstance?.mergeHeaders(headers);
    this.securityRegisterClientInstance?.mergeHeaders(headers);
    this.cartClientInstance?.mergeHeaders(headers);
    this.supportCenterClientInstance?.mergeHeaders(headers);
    this.userClientInstance?.mergeHeaders(headers);
  }

  /**
   * @deprecated
   * @param legacyHeaders
   */
  public setLegacyInstancesHeaders(
    legacyHeaders: Record<string, string>,
  ): void {
    this.legacyHeaders = legacyHeaders;

    this.licensesClientInstance?.mergeHeaders(legacyHeaders);
    this.catalogClientInstance?.mergeHeaders(legacyHeaders);
  }
}

export default ClientsRegistry;
