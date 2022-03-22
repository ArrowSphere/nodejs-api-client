import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { NotFoundException, PublicApiClientException } from './exception';
import querystring from 'querystring';
import { URL } from 'url';
import path from 'path';

/**
 * Lists of available query parameters for the API call
 */
export enum ParameterKeys {
  API_KEY = 'apiKey',
  PAGE = 'page',
  PER_PAGE = 'per_page',
  SORT_BY = 'sort_by',
  ORDER_BY = 'order_by',
  PER_PAGE_CAMEL = 'perPage',
}

export type Parameters = Record<string, string | string[] | undefined>;

export type Headers = Record<string, string>;

export type Payload = Record<string, unknown>;

export type Options = {
  isAdmin?: boolean;
};

export abstract class AbstractClient {
  /**
   * Base path for HTTP calls
   */
  protected basePath = '';

  /**
   * Current path for HTTP calls
   */
  protected path = '';

  /**
   * Axios instance for client
   */
  protected client: AxiosInstance;

  /**
   * ArrowSphere API URL
   */
  protected url = '';

  /**
   * ArrowSphere API key
   */
  protected apiKey = '';

  /**
   * Current pagination page number
   */
  protected page = 1;

  /**
   * Pagination's per page result limit
   */
  protected perPage = 0;

  /**
   * Defines whether the pagination options are camel cased or not
   */
  protected isCamelPagination = false;

  /**
   * AbstractClient constructor.
   * @param client - Pre-existing Axios instance that will be used for calls
   * @returns AbstractClient
   */
  protected constructor(client: AxiosInstance | null = null) {
    this.client = client ?? axios.create();

    // Prevent axios from throwing its own errors, let us do that
    this.client.defaults.validateStatus = null;
  }

  /**
   * Sets the Client ArrowSphere API key
   * @param key - ArrowSphere API key
   * @returns this
   */
  public setApiKey(key: string): this {
    this.apiKey = key;

    return this;
  }

  /**
   * Sets the client ArrowSphere API url
   * @param url - API url
   * @returns this
   */
  public setUrl(url: string): this {
    this.url = url;

    return this;
  }

  /**
   * Returns the API url.
   * @returns string
   */
  public getUrl(): string {
    return this.url;
  }

  /**
   * Sets number of results per page
   * @param perPage - Number of results per page
   * @returns this
   */
  public setPerPage(perPage: number): this {
    this.perPage = perPage;

    return this;
  }

  /**
   * Sets the page number
   * @param page - Page number
   * @returns AbstractClient
   */
  public setPage(page: number): this {
    this.page = page;

    return this;
  }

  /**
   * Sends a GET request and returns the response
   * @param parameters - Query parameters to send
   * @param headers - Headers to send
   * @returns Promise\<AxiosResponse['data']\>
   */
  protected async get<T = AxiosResponse['data']>(
    parameters: Parameters = {},
    headers: Headers = {},
    options: Options = {},
  ): Promise<T> {
    const response = await this.client.get<T>(
      this.generateUrl(parameters, options),
      {
        headers: this.prepareHeaders(headers),
      },
    );

    return this.getResponse<T>(response);
  }

  /**
   * Processes and returns the Axios response data
   * @param response - The AxiosResponse
   * @returns T
   */
  private getResponse<T = AxiosResponse['data']>(response: AxiosResponse): T {
    const statusCode = response.status;
    if (statusCode === 404) {
      throw new NotFoundException(
        `Resource not found on URL ${this.getUrl()}`,
        response.data.error,
        statusCode,
      );
    }

    if (statusCode >= 400 && statusCode <= 599) {
      throw new PublicApiClientException(
        `Error: status code: ${statusCode}. URL: ${this.getUrl()}`,
        response.data.error,
        statusCode,
      );
    }

    return response.data;
  }

  /**
   * Prepare headers before sending
   * @param headers - Headers to include
   * @returns {@link Headers}
   */
  private prepareHeaders(headers: Headers): Headers {
    return { ...headers, [ParameterKeys.API_KEY]: this.apiKey };
  }

  /**
   * Sends a POST request and returns the response
   * @returns Promise\<AxiosResponse['data']\>
   * @param payload - Payload to be sent in the POST body
   * @param parameters - Query parameters to be sent in the request
   * @param headers - Headers to be sent in the request
   */
  protected async post(
    payload: Payload = {},
    parameters: Parameters = {},
    headers: Headers = {},
    options: Options = {},
  ): Promise<AxiosResponse['data']> {
    const response = await this.client.post(
      this.generateUrl(parameters, options),
      payload,
      {
        headers: this.prepareHeaders(headers),
      },
    );

    return this.getResponse(response);
  }

  protected async put(
    payload: Payload = {},
    parameters: Parameters = {},
    headers: Headers = {},
    options: Options = {},
  ): Promise<void> {
    const response = await this.client.put(
      this.generateUrl(parameters, options),
      payload,
      {
        headers: this.prepareHeaders(headers),
      },
    );

    return this.getResponse(response);
  }

  /**
   * Generates the full url for request
   * @param parameters - Parameters to serialize
   * @returns string
   */
  protected generateUrl(parameters: Parameters, options: Options): string {
    const params = { ...parameters, ...this.generatePagination() };
    const url = new URL(
      `${options.isAdmin ? path.join('admin', this.basePath) : this.basePath}${
        this.path
      }`,
      this.url,
    );
    if (Object.values(params).length) {
      url.search = querystring.stringify(params);
    }
    return url.toString();
  }

  /**
   * Generates the pagination part of the url
   * @returns {@link Parameters}
   */
  private generatePagination(): Parameters {
    if (this.page === 1 && !this.perPage) {
      return {};
    }

    const params: { [key in ParameterKeys]?: string } = {};

    if (this.page > 1) {
      params[ParameterKeys.PAGE] = `${this.page}`;
    }

    if (this.perPage > 0) {
      params[
        this.isCamelPagination
          ? ParameterKeys.PER_PAGE_CAMEL
          : ParameterKeys.PER_PAGE
      ] = `${this.perPage}`;
    }

    return params;
  }
}
