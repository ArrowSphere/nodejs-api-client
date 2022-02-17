import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { URL } from 'url';
import { Options } from './abstractClient';
import path from 'path';
import { GetProductsType } from './catalog';

export type GraphQLResponseTypes = GetProductsType;

export abstract class AbstractGraphQLClient {
  /**
   * Base path for HTTP calls
   */
  protected basePath = '';

  /**
   * Current path for HTTP calls
   */
  protected path = '';

  protected client!: GraphQLClient;

  protected url = '';

  protected token = '';

  protected optionsHeader?: Dom.RequestInit['headers'];

  protected options: Options = {};

  private getClient() {
    this.client = new GraphQLClient(this.generateUrl());

    return this;
  }

  public setToken(apiKey: string): this {
    this.token = apiKey;

    return this;
  }

  public setUrl(url: string): this {
    this.url = url;

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

  protected async post(query: string): Promise<GraphQLResponseTypes> {
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
}
