import { CatalogGraphQLClient } from './catalog/catalogGraphQLClient';
import { AbstractGraphQLClient } from './abstractGraphQLClient';
import { SecurityScoreGraphQLClient } from './securityScore';
import { GraphqlApiClient } from './graphqlApi';

export class PublicGraphQLClient extends AbstractGraphQLClient {
  public getCatalogGraphQLClient(): CatalogGraphQLClient {
    return new CatalogGraphQLClient()
      .setUrl(this.url)
      .setToken(this.token)
      .setHeaders(this.headers)
      .setToken(this.token)
      .setHttpExceptionHandlers(this.httpExceptionHandlers);
  }

  public getSecurityScoreGraphQLClient(): SecurityScoreGraphQLClient {
    return new SecurityScoreGraphQLClient()
      .setUrl(this.url)
      .setToken(this.token)
      .setHeaders(this.headers)
      .setToken(this.token)
      .setHttpExceptionHandlers(this.httpExceptionHandlers);
  }

  public getGraphqlApiClient(): GraphqlApiClient {
    return new GraphqlApiClient()
      .setUrl(this.url)
      .setToken(this.token)
      .setHeaders(this.headers)
      .setToken(this.token)
      .setHttpExceptionHandlers(this.httpExceptionHandlers);
  }
}
