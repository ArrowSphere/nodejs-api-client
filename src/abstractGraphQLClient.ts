import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { Options } from './abstractRestfulClient';
import * as path from 'path';
import { GetProductsType } from './catalog';
import { jsonToGraphQLQuery } from 'json-to-graphql-query';
import { AbstractHttpClient } from './AbstractHttpClient';

export type GraphQLResponseTypes = GetProductsType;

export abstract class AbstractGraphQLClient extends AbstractHttpClient {
  /**
   * Must not be called directly.
   * Use getClientInstance() to access it.
   */
  protected graphQLClient!: GraphQLClient;

  protected optionsHeader?: Dom.RequestInit['headers'];

  protected options: Options = {};

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
    const headers: Record<string, string> = {
      authorization: this.token,
      ...this.headers,
    };
    this.getClientInstance().setHeaders(headers);

    return await this.getClientInstance().request<GraphQLResponseTypes>(query);
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
