import { CatalogGraphQLClient } from './catalog';
import {
  AbstractGraphQLClient,
  ConfigurationsGraphQLClient,
} from './abstractGraphQLClient';
import { SecurityScoreGraphQLClient } from './securityScore';
import { GraphqlApiClient } from './graphqlApi';
import { WellArchitectedGraphQLClient } from './wellArchitected';
import { AccountGraphQLClient } from './account';

export class PublicGraphQLClient extends AbstractGraphQLClient {
  constructor() {
    super();
  }

  public getCatalogGraphQLClient(
    configuration?: ConfigurationsGraphQLClient,
  ): CatalogGraphQLClient {
    const client = new CatalogGraphQLClient(configuration);
    this.applyConfig(client);

    return client;
  }

  public getSecurityScoreGraphQLClient(
    configuration?: ConfigurationsGraphQLClient,
  ): SecurityScoreGraphQLClient {
    const client = new SecurityScoreGraphQLClient(configuration);
    this.applyConfig(client);

    return client;
  }

  public getWellArchitectedGraphQLClient(
    configuration?: ConfigurationsGraphQLClient,
  ): WellArchitectedGraphQLClient {
    const client = new WellArchitectedGraphQLClient(configuration);
    this.applyConfig(client);

    return client;
  }

  public getGraphqlApiClient(
    configuration?: ConfigurationsGraphQLClient,
  ): GraphqlApiClient {
    const client = new GraphqlApiClient(configuration);
    this.applyConfig(client);

    return client;
  }

  public getGraphqlAccountClient(
    configuration?: ConfigurationsGraphQLClient,
  ): AccountGraphQLClient {
    const client = new AccountGraphQLClient(configuration);
    this.applyConfig(client);

    return client;
  }

  private applyConfig(client: AbstractGraphQLClient): AbstractGraphQLClient {
    return client
      .setUrl(this.url)
      .setSecurity(this.security)
      .setHeaders(this.headers)
      .setHttpExceptionHandlers(this.httpExceptionHandlers);
  }
}
