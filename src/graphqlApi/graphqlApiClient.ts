import { AbstractGraphQLClient } from '../abstractGraphQLClient';

import {
  SelectAllQueryType,
  SelectAllResultType,
  SelectOneQueryType,
  SelectOneResultType,
} from './types/graphqlApiQueries';

export class GraphqlApiClient extends AbstractGraphQLClient {
  /**
   * The Path of graphql catalog API
   */
  private GRAPHQL = '/graphql';

  public async find<GraphQLResponseTypes>(
    request: string,
  ): Promise<GraphQLResponseTypes | null> {
    this.path = this.GRAPHQL;

    try {
      return await this.post<GraphQLResponseTypes>(request);
    } catch (error: unknown) {
      return null;
    }
  }

  public async selectAll(
    query: SelectAllQueryType,
  ): Promise<SelectAllResultType | null> {
    const queryStr: string = this.stringifyQuery(query);

    const result: SelectAllResultType | null = await this.find<SelectAllResultType>(
      queryStr,
    );

    return result;
  }

  public async selectOne(
    query: SelectOneQueryType,
  ): Promise<SelectOneResultType | null> {
    const queryStr: string = this.stringifyQuery(query);

    const result: SelectOneResultType | null = await this.find<SelectOneResultType>(
      queryStr,
    );

    return result;
  }
}
