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
    const queryStr: string = this.stringifyQuery(query);

    try {
      return await this.find(queryStr);
    } catch (error: any) {
      const exception: PublicApiClientException = this.mapToPublicApiException(
        error,
      );

      const { mustRetry } = await this.handleError(exception);
      if (mustRetry) {
        return await this.find(queryStr);
      }
    }

    return null;
  }
}
