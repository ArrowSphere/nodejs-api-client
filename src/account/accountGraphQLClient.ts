import { AbstractGraphQLClient } from '../abstractGraphQLClient';
import { GetAccountQuery } from './types/accountGraphQLQueries';
import { GetAccountType } from './types/accountGraphQLTypes';

export class AccountGraphQLClient extends AbstractGraphQLClient {
  /**
   * The base path of the API
   */
  protected basePath = '/v2';

  public async findByQuery(
    query: GetAccountQuery,
  ): Promise<GetAccountType | null> {
    this.path = '/graphql';

    console.info('GRAPHQL Query brut :', query);

    const queryStr: string = this.stringifyQuery(query);

    console.info('GRAPHQL Query after stringify :', query);

    try {
      return await this.post<GetAccountType>(queryStr);
    } catch (error: unknown) {
      return null;
    }
  }
}
