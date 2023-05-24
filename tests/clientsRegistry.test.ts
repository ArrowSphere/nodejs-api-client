import {
  CampaignClient,
  CartClient,
  CatalogClient,
  CatalogGraphQLClient,
  CatalogQuery,
  CheckDomainClient,
  ConsumptionClient,
  CustomersClient,
  LicensesClient,
  OrdersClient,
  PublicApiClient,
  RegisterClient,
  StandardsClient,
  SubscriptionsClient,
  SupportCenterClient,
  UserClient,
  WhoAmIClient,
} from '../src';
import { expect } from 'chai';
import { PublicGraphQLClient } from '../src';
import ClientsRegistry from '../src/clientsRegistry';
import nock from 'nock';
import { ContactClient } from '../src/contact';

describe('ClientRegistry', () => {
  describe('Check it builds correctly each instance', () => {
    const publicApiClient: PublicApiClient = new PublicApiClient();
    const gqlPublicApiClient: PublicGraphQLClient = new PublicGraphQLClient();
    const registry: ClientsRegistry = ClientsRegistry.create(
      publicApiClient,
      gqlPublicApiClient,
    );

    it('returns a CustomersClient', () => {
      expect(registry.getCustomersClientInstance).to.exist;
      const customersClient: CustomersClient = registry.getCustomersClientInstance();
      expect(customersClient).to.be.instanceOf(CustomersClient);
    });

    it('returns a WhoAmIClient', () => {
      expect(registry.getWhoamiClientInstance).to.exist;
      const whoAmIClient: WhoAmIClient = registry.getWhoamiClientInstance();
      expect(whoAmIClient).to.be.instanceOf(WhoAmIClient);
    });

    it('returns a LicensesClient', () => {
      expect(registry.getLicensesClientInstance).to.exist;
      const licensesClient: LicensesClient = registry.getLicensesClientInstance();
      expect(licensesClient).to.be.instanceOf(LicensesClient);
    });

    it('returns a CheckDomainClient', () => {
      expect(registry.getCheckDomainClientInstance).to.exist;
      const checkDomainClient: CheckDomainClient = registry.getCheckDomainClientInstance();
      expect(checkDomainClient).to.be.instanceOf(CheckDomainClient);
    });

    it('returns a SubscriptionsClient', () => {
      expect(registry.getSubscriptionsClientInstance).to.exist;
      const subscriptionsClient: SubscriptionsClient = registry.getSubscriptionsClientInstance();
      expect(subscriptionsClient).to.be.instanceOf(SubscriptionsClient);
    });

    it('returns a OrdersClient', () => {
      expect(registry.getOrdersClientInstance).to.exist;
      const ordersClient: OrdersClient = registry.getOrdersClientInstance();
      expect(ordersClient).to.be.instanceOf(OrdersClient);
    });

    it('returns a ContactClient', () => {
      expect(registry.getContactClientInstance).to.exist;
      const contactClient: ContactClient = registry.getContactClientInstance();
      expect(contactClient).to.be.instanceOf(ContactClient);
    });

    it('returns a CampaignClient', () => {
      expect(registry.getCampaignClientInstance).to.exist;
      const campaignClient: CampaignClient = registry.getCampaignClientInstance();
      expect(campaignClient).to.be.instanceOf(CampaignClient);
    });

    it('returns a ConsumptionClient', () => {
      expect(registry.getConsumptionClientInstance).to.exist;
      const campaignClient: ConsumptionClient = registry.getConsumptionClientInstance();
      expect(campaignClient).to.be.instanceOf(ConsumptionClient);
    });

    it('returns a StandardsClient', () => {
      expect(registry.getSecurityStandardsClientInstance).to.exist;
      const standardsClient: StandardsClient = registry.getSecurityStandardsClientInstance();
      expect(standardsClient).to.be.instanceOf(StandardsClient);
    });

    it('returns a RegisterClient', () => {
      expect(registry.getSecurityStandardsClientInstance).to.exist;
      const registerClient: RegisterClient = registry.getSecurityRegisterClientInstance();
      expect(registerClient).to.be.instanceOf(RegisterClient);
    });

    it('returns a CartClient', () => {
      expect(registry.getCartClientInstance).to.exist;
      const cartClient: CartClient = registry.getCartClientInstance();
      expect(cartClient).to.be.instanceOf(CartClient);
    });

    it('returns a SupportCenterClient', () => {
      expect(registry.getSupportCenterClientInstance).to.exist;
      const supportCenterClient: SupportCenterClient = registry.getSupportCenterClientInstance();
      expect(supportCenterClient).to.be.instanceOf(SupportCenterClient);
    });

    it('returns a CatalogClient', () => {
      expect(registry.getCatalogClientInstance).to.exist;
      const catalogClient: CatalogClient = registry.getCatalogClientInstance();
      expect(catalogClient).to.be.instanceOf(CatalogClient);
    });

    it('returns a CatalogGraphQLClient', () => {
      expect(registry.getGQLCatalogClientInstance).to.exist;
      const gqlCatalogClient: CatalogGraphQLClient = registry.getGQLCatalogClientInstance();
      expect(gqlCatalogClient).to.be.instanceOf(CatalogGraphQLClient);
    });

    it('returns a UserClient', () => {
      expect(registry.getUserClientInstance).to.exist;
      const userClient: UserClient = registry.getUserClientInstance();
      expect(userClient).to.be.instanceOf(UserClient);
    });
  });

  describe('Check the headers are correctly merged', () => {
    it('returns a CatalogGraphQLClient with merged headers', async () => {
      const baseUrl = 'https://arrow.com';
      const baseHeaders: Record<string, string> = {
        message: 'we love potatoes',
      };

      const publicApiClient: PublicApiClient = new PublicApiClient();
      const gqlPublicApiClient: PublicGraphQLClient = new PublicGraphQLClient()
        .setUrl(baseUrl)
        .setHeaders(baseHeaders);
      const registry: ClientsRegistry = new ClientsRegistry(
        publicApiClient,
        gqlPublicApiClient,
      );
      expect(registry.getGQLCatalogClientInstance).to.exist;

      const additionalHeaders: Record<string, string> = {
        candy: 'carambar',
      };
      registry.mergeInstancesHeaders(additionalHeaders);

      const gqlCatalogClient: CatalogGraphQLClient = registry.getGQLCatalogClientInstance();
      expect(gqlCatalogClient).to.be.instanceOf(CatalogGraphQLClient);

      const scope = nock(baseUrl)
        .matchHeader('message', 'we love potatoes')
        .matchHeader('candy', 'carambar')
        .post('/catalog/graphql')
        .reply(200, '{}');

      const preparedQuery: CatalogQuery = {
        getProducts: {
          products: {
            name: true,
          },
          __args: {
            paginate: {
              page: 1,
              perPage: 12,
            },
            searchBody: {
              sort: {
                name: 'test',
              },
            },
          },
        },
      };

      await gqlCatalogClient.findByQuery(preparedQuery);
      scope.done();
    });

    it('returns a CatalogGraphQLClient where baseHeaders has not been erased', async () => {
      const baseUrl = 'https://arrow.com';
      const baseHeaders: Record<string, string> = {
        message: 'we love potatoes',
      };

      const publicApiClient: PublicApiClient = new PublicApiClient();
      const gqlPublicApiClient: PublicGraphQLClient = new PublicGraphQLClient()
        .setUrl(baseUrl)
        .setHeaders(baseHeaders);
      const registry: ClientsRegistry = new ClientsRegistry(
        publicApiClient,
        gqlPublicApiClient,
      );
      expect(registry.getGQLCatalogClientInstance).to.exist;

      const gqlCatalogClient: CatalogGraphQLClient = registry.getGQLCatalogClientInstance();
      expect(gqlCatalogClient).to.be.instanceOf(CatalogGraphQLClient);

      const scope = nock(baseUrl)
        .matchHeader('message', 'we love potatoes')
        .post('/catalog/graphql')
        .reply(200, '{}');

      const preparedQuery: CatalogQuery = {
        getProducts: {
          products: {
            name: true,
          },
          __args: {
            paginate: {
              page: 1,
              perPage: 12,
            },
            searchBody: {
              sort: {
                name: 'test',
              },
            },
          },
        },
      };

      await gqlCatalogClient.findByQuery(preparedQuery);
      scope.done();
    });

    it('returns a CatalogGraphQLClient without baseHeaders', async () => {
      const baseUrl = 'https://arrow.com';

      const publicApiClient: PublicApiClient = new PublicApiClient();
      const gqlPublicApiClient: PublicGraphQLClient = new PublicGraphQLClient().setUrl(
        baseUrl,
      );
      const registry: ClientsRegistry = new ClientsRegistry(
        publicApiClient,
        gqlPublicApiClient,
      );
      expect(registry.getGQLCatalogClientInstance).to.exist;

      const additionalHeaders: Record<string, string> = {
        candy: 'carambar',
      };
      registry.mergeInstancesHeaders(additionalHeaders);

      const gqlCatalogClient: CatalogGraphQLClient = registry.getGQLCatalogClientInstance();
      expect(gqlCatalogClient).to.be.instanceOf(CatalogGraphQLClient);

      const scope = nock(baseUrl)
        .matchHeader('candy', 'carambar')
        .post('/catalog/graphql')
        .reply(200, '{}');

      const preparedQuery: CatalogQuery = {
        getProducts: {
          products: {
            name: true,
          },
          __args: {
            paginate: {
              page: 1,
              perPage: 12,
            },
            searchBody: {
              sort: {
                name: 'test',
              },
            },
          },
        },
      };

      await gqlCatalogClient.findByQuery(preparedQuery);
      scope.done();
    });
  });
});
