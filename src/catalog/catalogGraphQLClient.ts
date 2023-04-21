import { AbstractGraphQLClient } from '../abstractGraphQLClient';
import { GetProductsType } from './types/catalogGraphQLTypes';
import { jsonToGraphQLQuery } from 'json-to-graphql-query';
import { addSlashes } from 'slashes';
import { CatalogQuery } from './types/catalogGraphQLQueries';

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

  public async findByQuery(query: CatalogQuery): Promise<GetProductsType> {
    const graphqlQuery: string =
      '{"query":"{' + addSlashes(jsonToGraphQLQuery(query)) + '}"}';
    console.log('graphqlQuery', graphqlQuery);

    return (this.find(graphqlQuery) as unknown) as GetProductsType;
  }
}
