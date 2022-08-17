import { AbstractGraphQLClient } from '../abstractGraphQLClient';
import { GetProductsType } from './types/catalogGraphQLTypes';
// import { inspect } from 'util';

export class CatalogGraphQLClient extends AbstractGraphQLClient {
  /**
   * The base path of the API
   */
  protected basePath = 'catalog/';

  /**
   * The Path of graphql catalog API
   */
  private GRAPHQL = 'graphql';

  public async find(request: string): Promise<GetProductsType> {
    this.path = this.GRAPHQL;

    return await this.post(request);
  }
}
