import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { Options } from './abstractRestfulClient';
import * as path from 'path';
import { GetProductsType } from './catalog';
import { jsonToGraphQLQuery } from 'json-to-graphql-query';
import { AbstractHttpClient } from './AbstractHttpClient';

export type GraphQLResponseTypes = GetProductsType;

export abstract class AbstractGraphQLClient extends AbstractHttpClient {
  protected client!: GraphQLClient;

  protected optionsHeader?: Dom.RequestInit['headers'];

  protected options: Options = {};

  private getClient() {
    this.client = new GraphQLClient(this.generateUrl());

    return this;
  }

  public setOptionsHeader(options: Dom.RequestInit['headers']): this {
    this.optionsHeader = options;

    return this;
  }

  public setOptions(options: Options): this {
    this.options = options;

    return this;
  }

  protected async post<GraphQLResponseTypes>(
    query: string,
  ): Promise<GraphQLResponseTypes> {
    this.getClient().client.setHeaders({
      authorization: this.token,
      ...this.optionsHeader,
    });

    return await this.client.request<GraphQLResponseTypes>(query);
  }

  protected generateUrl(): string {
    const url = new URL(
      `${
        this.options.isAdmin ? path.join('admin', this.basePath) : this.basePath
      }${this.path}`,
      this.url,
    );
    return url.toString();
  }

  protected stringifyQuery(query: any): string {
    const graphqlQuery: string = jsonToGraphQLQuery(query);

    return `{${graphqlQuery}}`;
  }
}
