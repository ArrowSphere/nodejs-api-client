import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

export type AxiosSingletonConfiguration = {
  isLogging?: boolean;
};

enum DefaultObfuscateFields {
  API_KEY = 'apiKey',
  PASSWORD = 'password',
}

export class AxiosSingleton {
  private static _axiosInstance: AxiosInstance;
  private static _isLogging = false;

  public static getInstance(
    configuration: AxiosSingletonConfiguration = {},
  ): AxiosInstance {
    this._isLogging = !!configuration.isLogging;
    if (!AxiosSingleton._axiosInstance) {
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
    request: InternalAxiosRequestConfig,
    isLogging = false,
  ): InternalAxiosRequestConfig {
    if (isLogging) {
      console.info(
        'AXIOS - Request : ',
        AxiosSingleton.sanitizeObject(request),
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
        AxiosSingleton.sanitizeObject(response),
      );
    }

    return response;
  }

  private static sanitizeObject(
    obj: any,
    fieldsToObfuscate: string[] = [
      DefaultObfuscateFields.API_KEY,
      DefaultObfuscateFields.PASSWORD,
    ],
    seen = new WeakMap(),
  ): any {
    if (!obj || typeof obj !== 'object') return obj;

    // Vérifie si l'objet a déjà été traité (évite les boucles infinies)
    if (seen.has(obj)) return seen.get(obj);

    // Crée une copie de l'objet pour éviter de le modifier directement
    const sanitizedCopy = Array.isArray(obj) ? [] : {};

    // Stocke l'objet dans WeakMap avant la récursion
    seen.set(obj, sanitizedCopy);

    for (const [key, value] of Object.entries(obj)) {
      if (
        fieldsToObfuscate
          .map((field) => field.toUpperCase())
          .includes(key.toUpperCase())
      ) {
        switch (key.toUpperCase()) {
          case DefaultObfuscateFields.API_KEY.toUpperCase():
            (sanitizedCopy as any)[key] =
              '****************************' +
              (value as string).substring((value as string).length - 4);
            break;
          default:
            (sanitizedCopy as any)[key] = '***';
            break;
        }
        (sanitizedCopy as any)[key] = '***'; // Masquage des champs sensibles
      } else if (typeof value === 'object' && value !== null) {
        (sanitizedCopy as any)[key] = AxiosSingleton.sanitizeObject(
          value,
          fieldsToObfuscate,
          seen,
        ); // 🔄 Récursion avec WeakMap
      } else {
        (sanitizedCopy as any)[key] = value;
      }
    }

    return sanitizedCopy;
  }
}
