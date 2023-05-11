import { AbstractGraphQLClient } from '../abstractGraphQLClient';
import {
  GetPartnerDataType,
  GetCustomerDataType,
  GetCustomerAccountDataType,
} from './types/securityScoreGraphQLTypes';
import {
  GetPartnerDataQuery,
  GetCustomerDataQuery,
  GetCustomerAccountDataQuery,
} from './types/securityScoreGraphQLQueries';

export class SecurityScoreGraphQLClient extends AbstractGraphQLClient {
  /**
   * The base path of the API
   */
  protected basePath = 'security/';

  /**
   * The Path of graphql catalog API
   */
  private GRAPHQL = 'graphql/score';

  public async find<GraphQLResponseTypes>(
    request: string,
  ): Promise<GraphQLResponseTypes> {
    this.path = this.GRAPHQL;

    return await this.post<GraphQLResponseTypes>(request);
  }

  public async getPartnerData(
    getPartnerDataQuery: GetPartnerDataQuery,
  ): Promise<GetPartnerDataType> {
    const queryStr: string = this.stringifyQuery(getPartnerDataQuery);

    return this.find<GetPartnerDataType>(queryStr);
  }

  public async getCustomerData(
    getCustomerDataQuery: GetCustomerDataQuery,
  ): Promise<GetCustomerDataType> {
    const queryStr: string = this.stringifyQuery(getCustomerDataQuery);

    return this.find<GetCustomerDataType>(queryStr);
  }

  public async getCustomerAccountData(
    getCustomerAccountDataQuery: GetCustomerAccountDataQuery,
  ): Promise<GetCustomerAccountDataType> {
    const queryStr: string = this.stringifyQuery(getCustomerAccountDataQuery);

    return this.find<GetCustomerAccountDataType>(queryStr);
  }
}
