import { NotFoundException, PublicApiClientException } from './exception';
import querystring from 'querystring';
import path from 'path';
import { AxiosSingleton } from './axiosSingleton';
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import {
  AbstractHttpClient,
  Headers,
  HttpClientSecurity,
} from './AbstractHttpClient';
import { File } from 'node:buffer';

/**
 * Lists of available query parameters for the API call
 */
export enum ParameterKeys {
  API_KEY = 'apiKey',
  AUTHORIZATION = 'Authorization',
  HEADERS = 'headers',
  IS_LOGGING = 'is_logging',
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

export enum FileUploadKeys {
  Fields = 'fields',
  File = 'file',
}

export type Payload = Record<string, unknown> | Array<Payload>;
export interface PayloadWithFile {
  [FileUploadKeys.Fields]?: Record<string, File>;
  [FileUploadKeys.File]?: File;
}

export type Options = {
  isAdmin?: boolean;
  returnAxiosData?: boolean;
};

export type RegisterCheckReturnSyncStatusError = {
  statusCode?: number;
  message?: string;
};

export type RegisterCheckReturnVendorStatus = {
  code?: number;
  message?: string;
};

export type RegisterCheckReturnSyncStatus = {
  syncData?: string;
  cost?: RegisterCheckReturnSyncStatusError;
  security?: RegisterCheckReturnSyncStatusError;
  sustainability?: RegisterCheckReturnSyncStatusError;
};

export type RegisterCheckReturnData = {
  accountReference?: string;
  classification?: string;
  creationDate?: string;
  customerName?: string;
  customerReference?: string;
  isLocked?: boolean;
  marketplace?: string;
  resellerName?: string;
  resellerReference?: string;
  subscriptionReference?: string;
  syncStatus?: RegisterCheckReturnSyncStatus;
  vendorCode?: string;
  vendorStatus?: RegisterCheckReturnVendorStatus;
  vendorSubscriptionId?: string;
};

export type CheckStatusReturn = {
  status?: number;
  data?: RegisterCheckReturnData;
};

export type ConfigurationsClient = {
  [ParameterKeys.API_KEY]?: string;
  [ParameterKeys.URL]?: string;
  [ParameterKeys.IS_LOGGING]?: boolean;
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
   * AbstractClient constructor.
   * @returns AbstractRestfulClient
   */
  protected constructor(configuration?: ConfigurationsClient) {
    super();
    this.client = AxiosSingleton.getInstance({
      isLogging: configuration
        ? !!configuration[ParameterKeys.IS_LOGGING]
        : false,
    });

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
    const url: string = this.generateUrl(parameters, options);
    const config: AxiosRequestConfig = {
      headers: this.prepareHeaders(headers),
    };

    try {
      const response = await this.client.get<T>(url, config);
      return this.getResponse<T>(response, options);
    } catch (error) {
      if (error instanceof PublicApiClientException) {
        const { mustRetry } = await this.handleError(error);

        if (mustRetry) {
          const config: AxiosRequestConfig = {
            headers: this.prepareHeaders(headers),
          };
          const response = await this.client.get<T>(url, config);
          return this.getResponse<T>(response, options);
        }
      }
      throw error;
    }
  }

  /**
   * Processes and returns the Axios response data
   * @param response - The AxiosResponse
   * @param options - options
   * @returns T
   */
  private getResponse<T = AxiosResponse['data']>(
    response: AxiosResponse,
    options: Options = {},
  ): T {
    if (options.returnAxiosData) {
      return response.data;
    }

    const statusCode = response.status;
    if (statusCode === 404) {
      throw new NotFoundException(
        response.data.messages,
        response.data.error,
        statusCode,
        {
          origin: `Resource not found on URL ${this.getUrl()}${this.basePath}${
            this.path
          }`,
        },
      );
    }

    if (statusCode >= 400 && statusCode <= 599) {
      throw new PublicApiClientException(
        response.data.messages,
        response.data.error,
        statusCode,
        {
          origin: `Error: status code: ${statusCode}. URL: ${this.getUrl()}${
            this.basePath
          }${this.path}`,
        },
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
   * Sends a POST request including file with header form/multipart and returns the response
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
    const url: string = this.generateUrl(parameters, options);
    const config: AxiosRequestConfig = {
      headers: this.prepareHeaders(headers),
    };

    try {
      const response = await this.client.post(url, payload, config);
      return this.getResponse(response, options);
    } catch (error) {
      if (error instanceof PublicApiClientException) {
        const { mustRetry } = await this.handleError(error);

        if (mustRetry) {
          const config: AxiosRequestConfig = {
            headers: this.prepareHeaders(headers),
          };
          const response = await this.client.post(url, payload, config);
          return this.getResponse(response, options);
        }
      }
      throw error;
    }
  }
  /**
   * Sends a POST request and returns the response
   * @returns Promise\<AxiosResponse['data']\>
   * @param payload - Payload to be sent in the POST body
   * @param parameters - Query parameters to be sent in the request
   * @param headers - Headers to be sent in the request
   * @param options - Options to send
   */
  protected async postFile(
    payload: PayloadWithFile,
    parameters: Parameters = {},
    headers: Headers = {},
    options: Options = {},
  ): Promise<AxiosResponse['data']> {
    if (!payload[FileUploadKeys.File]) {
      throw new Error('File upload required');
    }

    // will force axios to append header 'multipart/form-data' and will attach a boundary automatically
    headers['Content-Type'] = (undefined as unknown) as string;

    const url: string = this.generateUrl(parameters, options);
    const config: AxiosRequestConfig = {
      headers: this.prepareHeaders(headers),
    };

    const formData: FormData = new FormData();
    formData.append(FileUploadKeys.File, payload[FileUploadKeys.File] ?? '');
    for (const [key, value] of Object.entries(
      payload[FileUploadKeys.Fields] ?? {},
    )) {
      console.log(`${key}: ${value}`);
      formData.set(key, value);
    }

    try {
      const response = await this.client.post(url, formData, config);
      return this.getResponse(response, options);
    } catch (error) {
      if (error instanceof PublicApiClientException) {
        const { mustRetry } = await this.handleError(error);

        if (mustRetry) {
          const config: AxiosRequestConfig = {
            headers: this.prepareHeaders(headers),
          };
          const response = await this.client.post(url, payload, config);
          return this.getResponse(response, options);
        }
      }
      throw error;
    }
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
    const url: string = this.generateUrl(parameters, options);
    const config: AxiosRequestConfig = {
      headers: this.prepareHeaders(headers),
    };

    try {
      const response = await this.client.put(url, payload, config);
      return this.getResponse(response, options);
    } catch (error) {
      if (error instanceof PublicApiClientException) {
        const { mustRetry } = await this.handleError(error);

        if (mustRetry) {
          const config: AxiosRequestConfig = {
            headers: this.prepareHeaders(headers),
          };
          const response = await this.client.put(url, payload, config);
          return this.getResponse(response, options);
        }
      }
      throw error;
    }
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
    const url: string = this.generateUrl(parameters, options);
    const config: AxiosRequestConfig = {
      headers: this.prepareHeaders(headers),
    };

    try {
      const response = await this.client.patch(url, payload, config);
      return this.getResponse(response, options);
    } catch (error) {
      if (error instanceof PublicApiClientException) {
        const { mustRetry } = await this.handleError(error);

        if (mustRetry) {
          const config: AxiosRequestConfig = {
            headers: this.prepareHeaders(headers),
          };
          const response = await this.client.patch(url, payload, config);
          return this.getResponse(response, options);
        }
      }
      throw error;
    }
  }

  /**
   * Sends a DELETE request
   * @param parameters - Query parameters to be sent in the request
   * @param headers - Headers to be sent in the request
   * @param options - Options to send
   * @param payload - Payload to be sent in the POST body
   * @returns Promise\<T\>
   */
  protected async delete(
    parameters: Parameters = {},
    headers: Headers = {},
    options: Options = {},
    payload: Payload = {},
  ): Promise<void> {
    const url: string = this.generateUrl(parameters, options);
    const config: AxiosRequestConfig = {
      data: payload,
      headers: this.prepareHeaders(headers),
    };

    try {
      const response = await this.client.delete(url, config);
      return this.getResponse(response, options);
    } catch (error) {
      if (error instanceof PublicApiClientException) {
        const { mustRetry } = await this.handleError(error);

        if (mustRetry) {
          const config: AxiosRequestConfig = {
            data: payload,
            headers: this.prepareHeaders(headers),
          };
          const response = await this.client.delete(url, config);
          return this.getResponse(response, options);
        }
      }
      throw error;
    }
  }

  /**
   * Generates the full url for request
   * @param parameters - Parameters to serialize
   * @param options - Options to send
   * @returns string
   */
  protected generateUrl(parameters: Parameters, options: Options): string {
    const params = { ...parameters, ...this.generatePagination() };
    const baseUrl: string = this.url.replace(new RegExp('/$'), '');
    const basePath: string = options.isAdmin
      ? path.join('/admin', this.basePath)
      : this.basePath;
    const url = new URL(`${baseUrl}${basePath}${this.path}`);
    if (Object.values(params).length) {
      url.search = querystring.stringify(params);
    }

    // We need to set the value back to empty in case we have a new call with the same instance.
    this.path = '';

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

    // to keep client stateless
    this.page = 1;
    this.perPage = 0;

    return params;
  }
}
