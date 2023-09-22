import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { Options, ParameterKeys } from './abstractRestfulClient';
import * as path from 'path';
import { GetProductsType } from './catalog';
import { jsonToGraphQLQuery } from 'json-to-graphql-query';
import { AbstractHttpClient } from './AbstractHttpClient';
import { PublicApiClientException } from './exception';

export type GraphQLResponseTypes = GetProductsType;

export type ConfigurationsGraphQLClient = {
  [ParameterKeys.IS_LOGGING]?: boolean;
};

export abstract class AbstractGraphQLClient extends AbstractHttpClient {
  /**
   * Must not be called directly.
   * Use getClientInstance() to access it.
   */
  protected graphQLClient!: GraphQLClient;

  protected optionsHeader?: Dom.RequestInit['headers'];

  protected options: Options = {};

  protected isLogging: boolean;

  public constructor(configuration?: ConfigurationsGraphQLClient) {
    super();
    this.isLogging = configuration
      ? !!configuration[ParameterKeys.IS_LOGGING]
      : false;
  }

  private getClientInstance(): GraphQLClient {
    return (
      this.graphQLClient ??
      (this.graphQLClient = new GraphQLClient(this.generateUrl()))
    );
  }

  public setOptions(options: Options): this {
    this.options = options;

    return this;
  }

  protected async post<GraphQLResponseTypes>(
    query: string,
  ): Promise<GraphQLResponseTypes> {
    try {
      this.applyHeaders();
      return await this.request<GraphQLResponseTypes>(query);
    } catch (error) {
      const exception: PublicApiClientException = this.mapToPublicApiException(
        error,
      );

      const { mustRetry } = await this.handleError(exception);
      if (mustRetry) {
        this.applyHeaders();
        return await this.getClientInstance().request<GraphQLResponseTypes>(
          query,
        );
      }

      throw error;
    }
  }

  private async request<T = any>(query: string): Promise<T> {
    if (this.isLogging) {
      console.info('GRAPHQL - Query : ', query);
    }
    const response: T = await this.getClientInstance().request<T>(query);

    if (this.isLogging) {
      console.info('GRAPHQL - Response : ', response);
    }

    return response;
  }

  private applyHeaders(): void {
    const headers: Record<string, string> = {
      authorization: this.token,
      ...this.headers,
    };
    this.getClientInstance().setHeaders(headers);
  }

  private generateUrl(): string {
    const baseUrl: string = this.url.replace(new RegExp('/$'), '');
    const basePath: string = this.options.isAdmin
      ? path.join('/admin', this.basePath)
      : this.basePath;
    const url = new URL(`${baseUrl}${basePath}${this.path}`);
    return url.toString();
  }

  protected stringifyQuery(query: any): string {
    const graphqlQuery: string = jsonToGraphQLQuery(query);

    return `{${graphqlQuery}}`;
  }
}
