import { AbstractGraphQLClient } from '../abstractGraphQLClient';
import {
  LicensesEventGetEventsQueryType,
  LicensesEventGetEventsResponseType,
} from './entities/event/licensesEventQueries';

export class LicensesEventClient extends AbstractGraphQLClient {
  /**
   * The Path of graphql catalog API
   */
  private GRAPHQL = '/licenses/event/graphql';

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

  public async getEvents(
    query: LicensesEventGetEventsQueryType,
  ): Promise<LicensesEventGetEventsResponseType | null> {
    const queryStr: string = this.stringifyQuery(query);

    const result: LicensesEventGetEventsResponseType | null = await this.find<LicensesEventGetEventsResponseType>(
      queryStr,
    );

    return result;
  }
}
