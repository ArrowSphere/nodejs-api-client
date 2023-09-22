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

    const queryStr: string = this.stringifyQuery(query);

    try {
      return await this.post<GetAccountType>(queryStr);
    } catch (error: unknown) {
      return null;
    }
  }
}
