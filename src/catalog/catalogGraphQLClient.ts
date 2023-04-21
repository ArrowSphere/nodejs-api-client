import { AbstractGraphQLClient } from '../abstractGraphQLClient';
import { GetProductsType } from './types/catalogGraphQLTypes';
import { CatalogQuery } from './types/catalogGraphQLQueries';
import { PublicApiClientException } from '../exception';

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

  public async findByQuery(
    query: CatalogQuery,
  ): Promise<GetProductsType | null> {
    console.log('entering find by query');
    const queryStr: string = this.stringifyQuery(query);

    try {
      return await this.find(queryStr);
    } catch (error: any) {
      console.log('entering in catch');
      const exception: PublicApiClientException = new PublicApiClientException(
        error?.message,
        error?.response?.config,
        error?.response?.status,
      );
      console.log(exception);

      const { mustRetry } = await this.handleError(exception);
      if (mustRetry) {
        return await this.find(queryStr);
      }
    }
    return null;
  }
}
