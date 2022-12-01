import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

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

  private static _initializedRequestInterceptor() {
    this._axiosInstance.interceptors.request.use(this._handleRequest);
  }

  private static _initializedResponseInterceptor() {
    this._axiosInstance.interceptors.response.use(this._handleResponse);
  }

  /**
   * @param request - Axios Request
   */
  private static _handleRequest(
    request: AxiosRequestConfig,
  ): AxiosRequestConfig {
    console.log('AXIOS - Request : ', request);

    return request;
  }

  /**
   * @param response - Axios Response
   */
  private static _handleResponse(response: AxiosResponse): AxiosResponse {
    console.log('AXIOS - Response : ', response);

    return response;
  }
}
