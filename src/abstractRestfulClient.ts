import { NotFoundException, PublicApiClientException } from './exception';
import querystring from 'querystring';
import path from 'path';
import { AxiosSingleton } from './axiosSingleton';
import { AxiosInstance, AxiosResponse } from 'axios';
import { AbstractHttpClient, HttpClientSecurity } from './AbstractHttpClient';

/**
 * Lists of available query parameters for the API call
 */
export enum ParameterKeys {
  API_KEY = 'apiKey',
  AUTHORIZATION = 'Authorization',
  HEADERS = 'headers',
  ORDER_BY = 'order_by',
  PAGE = 'page',
  PER_PAGE = 'per_page',
  PER_PAGE_CAMEL = 'perPage',
  SORT_BY = 'sort_by',
  URL = 'url',
}

export enum ExtraInformationFields {
  COLUMN_EXTRA_INFORMATION = 'extraInformation',
}

export type ParametersWithPaginationType =
  | (Parameters & {
      [ParameterKeys.PAGE]?: number;
      [ParameterKeys.PER_PAGE]?: number;
    })
  | (Parameters & {
      [ParameterKeys.PAGE]?: number;
      [ParameterKeys.PER_PAGE_CAMEL]?: number;
    });

export type Parameters = Record<
  string,
  string | string[] | number | number[] | boolean | null | undefined
>;

export type Headers = Record<string, string>;

export type Payload = Record<string, unknown> | Array<Payload>;

export type Options = {
  isAdmin?: boolean;
};

export type ConfigurationsClient = {
  [ParameterKeys.API_KEY]?: string;
  [ParameterKeys.URL]?: string;
  [ParameterKeys.HEADERS]?: Headers;
};

export type ExtraInformationType = {
  [ExtraInformationFields.COLUMN_EXTRA_INFORMATION]?: Record<string, unknown>;
};

export abstract class AbstractRestfulClient extends AbstractHttpClient {
  /**
   * Axios instance for client
   */
  protected client: AxiosInstance;

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
   * Defines header information for axios call
   */
  protected headers: Headers = {};

  /**
   * AbstractClient constructor.
   * @returns AbstractRestfulClient
   */
  protected constructor(configuration?: ConfigurationsClient) {
    super();
    this.client = AxiosSingleton.getInstance();

    this.setApiKey(configuration?.[ParameterKeys.API_KEY] ?? '');
    this.setUrl(configuration?.[ParameterKeys.URL] ?? '');
    this.setHeaders(configuration?.[ParameterKeys.HEADERS] ?? {});
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
   * @returns AbstractRestfulClient
   */
  public setPage(page: number): this {
    this.page = page;

    return this;
  }

  /**
   * Sets Header Information
   * @param headers - Header axios information
   * @returns AbstractRestfulClient
   */
  public setHeaders(headers: Record<string, string>): this {
    this.headers = headers;

    return this;
  }

  /**
   * Sends a GET request and returns the response
   * @param parameters - Query parameters to send
   * @param headers - Headers to send
   * @param options - Options to send
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
    const securityHeader: { [headerName: string]: string } =
      this.security === HttpClientSecurity.API_KEY
        ? { [ParameterKeys.API_KEY]: this.apiKey }
        : { [ParameterKeys.AUTHORIZATION]: this.token };

    return {
      ...headers,
      ...securityHeader,
      ...this.headers,
    };
  }

  /**
   * Sends a POST request and returns the response
   * @returns Promise\<AxiosResponse['data']\>
   * @param payload - Payload to be sent in the POST body
   * @param parameters - Query parameters to be sent in the request
   * @param headers - Headers to be sent in the request
   * @param options - Options to send
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

  /**
   * Sends a PUT request
   * @param payload - Payload to be sent in the POST body
   * @param parameters - Query parameters to be sent in the request
   * @param headers - Headers to be sent in the request
   * @param options - Options to send
   * @returns Promise\<void\>
   */
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
   * Sends a PATCH request
   * @param payload - Payload to be sent in the POST body
   * @param parameters - Query parameters to be sent in the request
   * @param headers - Headers to be sent in the request
   * @param options - Options to send
   * @returns Promise\<T\>
   */
  protected async patch<T>(
    payload: Payload = {},
    parameters: Parameters = {},
    headers: Headers = {},
    options: Options = {},
  ): Promise<T> {
    const response = await this.client.patch(
      this.generateUrl(parameters, options),
      payload,
      {
        headers: this.prepareHeaders(headers),
      },
    );

    return this.getResponse(response);
  }

  /**
   * Sends a DELETE request
   * @param payload - Payload to be sent in the POST body
   * @param parameters - Query parameters to be sent in the request
   * @param headers - Headers to be sent in the request
   * @param options - Options to send
   * @returns Promise\<T\>
   */
  protected async delete(
    parameters: Parameters = {},
    headers: Headers = {},
    options: Options = {},
  ): Promise<void> {
    const response = await this.client.delete(
      this.generateUrl(parameters, options),
      {
        headers: this.prepareHeaders(headers),
      },
    );

    return this.getResponse(response);
  }

  /**
   * Generates the full url for request
   * @param parameters - Parameters to serialize
   * @param options - Options to send
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
