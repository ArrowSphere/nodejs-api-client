import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  RawAxiosRequestHeaders,
} from 'axios';
import { cloneDeep } from 'lodash';

export type AxiosSingletonConfiguration = {
  isLogging?: boolean;
};

export class AxiosSingleton {
  private static _axiosInstance: AxiosInstance;
  private static _isLogging = false;

  public static getInstance(
    configuration: AxiosSingletonConfiguration = {},
  ): AxiosInstance {
    if (!AxiosSingleton._axiosInstance) {
      this._isLogging = !!configuration.isLogging;
      AxiosSingleton._axiosInstance = axios.create();
      AxiosSingleton._initializedRequestInterceptor();
      AxiosSingleton._initializedResponseInterceptor();
      AxiosSingleton._axiosInstance.defaults.validateStatus = null;
    }

    return AxiosSingleton._axiosInstance;
  }

  private static _initializedRequestInterceptor(): void {
    this._axiosInstance.interceptors.request.use((req) =>
      this._handleRequest(req, this._isLogging),
    );
  }

  private static _initializedResponseInterceptor(): void {
    this._axiosInstance.interceptors.response.use((req) =>
      this._handleResponse(req, this._isLogging),
    );
  }

  /**
   * @param request - Axios Request
   * @param isLogging - Must log
   */
  private static _handleRequest(
    request: AxiosRequestConfig,
    isLogging = false,
  ): AxiosRequestConfig {
    if (isLogging) {
      console.info(
        'AXIOS - Request : ',
        AxiosSingleton.cleanRequestLog(request),
      );
    }

    return request;
  }

  /**
   * @param response - Axios Response
   * @param isLogging - Must log
   */
  private static _handleResponse(
    response: AxiosResponse,
    isLogging = false,
  ): AxiosResponse {
    if (isLogging) {
      console.info(
        'AXIOS - Response : ',
        AxiosSingleton.cleanResponseLog(response),
      );
    }

    return response;
  }

  /**
   * @param request - Axios Request
   */
  private static cleanRequestLog(
    request: AxiosRequestConfig,
  ): AxiosRequestConfig {
    const tempRequest: AxiosRequestConfig = cloneDeep(request);

    if (tempRequest.headers?.apiKey) {
      const apiKey = tempRequest.headers?.apiKey as string;
      (tempRequest.headers as RawAxiosRequestHeaders).apiKey =
        '****************************' + apiKey.substring(apiKey.length - 4);
    }

    return tempRequest;
  }

  /**
   * @param response - Axios Response
   */
  private static cleanResponseLog(response: AxiosResponse): AxiosResponse {
    const tempResponse: AxiosResponse = cloneDeep(response);

    if (tempResponse.config.headers?.apiKey) {
      const apiKey = tempResponse.config.headers?.apiKey as string;
      (tempResponse.config.headers as RawAxiosRequestHeaders).apiKey =
        '****************************' + apiKey.substring(apiKey.length - 4);
    }
    delete tempResponse.request;

    return tempResponse;
  }
}
