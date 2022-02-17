import { CatalogGraphQLClient } from './catalog/catalogGraphQLClient';
import { AbstractGraphQLClient } from './abstractGraphQLClient';

export class PublicGraphQLClient extends AbstractGraphQLClient {
  public getCatalogGraphQLClient(): CatalogGraphQLClient {
    return new CatalogGraphQLClient().setUrl(this.url).setToken(this.token);
  }
}
