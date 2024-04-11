import { AbstractGraphQLClient } from '../abstractGraphQLClient';

export class UserGraphqlClient extends AbstractGraphQLClient {
  /**
   * The Path of graphql catalog API
   */
  private GRAPHQL = '/v2/graphql';

  public async findRaw<GraphQLResponseTypes>(
    request: string,
  ): Promise<GraphQLResponseTypes | null> {
    this.path = this.GRAPHQL;

    try {
      return await this.post<GraphQLResponseTypes>(request);
    } catch (error: unknown) {
      return null;
    }
  }

  public async find(): Promise<unknown | null> {
    const queryStr =
      '{ getUsers { updatedBy isEnabled extraData { name value} } }';

    const result: unknown = await this.findRaw<unknown>(queryStr);

    console.log(result);

    return result;
  }
}
