import { CatalogGraphQLClient } from './catalog/catalogGraphQLClient';
import { AbstractGraphQLClient } from './abstractGraphQLClient';
import { SecurityScoreGraphQLClient } from './securityScore';
import { GraphqlApiClient } from './graphqlApi';

export class PublicGraphQLClient extends AbstractGraphQLClient {
  public getCatalogGraphQLClient(): CatalogGraphQLClient {
    const client = new CatalogGraphQLClient();
    this.applyConfig(client);

    return client;
  }

  public getSecurityScoreGraphQLClient(): SecurityScoreGraphQLClient {
    const client = new SecurityScoreGraphQLClient();
    this.applyConfig(client);

    return client;
  }

  public getGraphqlApiClient(): GraphqlApiClient {
    const client = new GraphqlApiClient();
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
