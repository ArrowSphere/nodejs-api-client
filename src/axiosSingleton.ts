import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  RawAxiosRequestHeaders,
} from 'axios';
import { cloneDeep } from 'lodash';

export class AxiosSingleton {
  private static _axiosInstance: AxiosInstance;

  public static getInstance(): AxiosInstance {
    if (!AxiosSingleton._axiosInstance) {
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
    return request;
  }

  /**
   * @param response - Axios Response
   */
  private static _handleResponse(response: AxiosResponse): AxiosResponse {
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
