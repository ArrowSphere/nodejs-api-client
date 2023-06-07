import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { cloneDeep } from 'lodash';

export type AxiosSingletonConfiguration = {
  isLogging?: boolean;
};

export class AxiosSingleton {
  private static _axiosInstance: AxiosInstance;
  private static _isLogging: boolean;

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
    this._axiosInstance.interceptors.request.use(this._handleRequest);
  }

  private static _initializedResponseInterceptor(): void {
    this._axiosInstance.interceptors.response.use(this._handleResponse);
  }

  /**
   * @param request - Axios Request
   */
  private static _handleRequest(
    request: AxiosRequestConfig,
  ): AxiosRequestConfig {
    if (this._isLogging) {
      console.info(
        'AXIOS - Request : ',
        AxiosSingleton.cleanRequestLog(request),
      );
    }

    return request;
  }

  /**
   * @param response - Axios Response
   */
  private static _handleResponse(response: AxiosResponse): AxiosResponse {
    if (this._isLogging) {
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
    const tempRequest = cloneDeep(request);

    // coverage bug delete undefined element
    /* istanbul ignore next */
    delete tempRequest.headers?.apiKey;

    return tempRequest;
  }

  /**
   * @param response - Axios Response
   */
  private static cleanResponseLog(response: AxiosResponse): AxiosResponse {
    const tempResponse = cloneDeep(response);

    // coverage bug delete undefined element
    /* istanbul ignore next */
    delete tempResponse.config.headers?.apiKey;
    delete tempResponse.request;

    return tempResponse;
  }
}
