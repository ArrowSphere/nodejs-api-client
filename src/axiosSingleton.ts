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
  AUTHORIZATION = 'Authorization',
  NEW_PASSWORD = 'newPassword',
  OLD_PASSWORD = 'oldPassword',
}

export class AxiosSingleton {
  private static _axiosInstance: AxiosInstance;
  private static _isLogging = false;

  /**
   * Get the singleton instance of Axios.
   * @param configuration - Configuration object for AxiosSingleton.
   *
   * @returns The Axios instance.
   */
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

  /**
   * Initialize the request interceptor.
   */
  private static _initializedRequestInterceptor(): void {
    this._axiosInstance.interceptors.request.use((req) =>
      this._handleRequest(req, this._isLogging),
    );
  }

  /**
   * Initialize the response interceptor.
   */
  private static _initializedResponseInterceptor(): void {
    this._axiosInstance.interceptors.response.use((req) =>
      this._handleResponse(req, this._isLogging),
    );
  }

  /**
   * Handle the request before it is sent.
   *
   * @param request - The Axios request configuration.
   * @param isLogging - Whether logging is enabled.
   *
   * @returns The modified request configuration.
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
   * Handle the response after it is received.
   *
   * @param response - The Axios response.
   * @param isLogging - Whether logging is enabled.
   *
   * @returns The modified response.
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
   * Clean the response log by removing sensitive information.
   *
   * @param response - The Axios response.
   *
   * @returns The sanitized response.
   */
  private static cleanResponseLog(response: AxiosResponse): AxiosResponse {
    delete response.request;

    return AxiosSingleton.sanitizeObject(response) as AxiosResponse;
  }

  /**
   * Sanitize an object by obfuscating sensitive fields.
   * This function is recursive and supports circular references using WeakMap.
   *
   * @param obj - The object to sanitize.
   * @param fieldsToObfuscate - List of keys whose values should be replaced with '***'. Defaults to ["authorization", "x-api-key", "password", "token"].
   * @param seen - Internal map to track processed objects and prevent infinite loops. Defaults to new WeakMap().
   *
   * @returns A new sanitized object with sensitive data obfuscated or removed.
   */
  private static sanitizeObject<T extends object>(
    obj: T,
    fieldsToObfuscate: string[] = [
      DefaultObfuscateFields.API_KEY,
      DefaultObfuscateFields.PASSWORD,
      DefaultObfuscateFields.AUTHORIZATION,
      DefaultObfuscateFields.NEW_PASSWORD,
      DefaultObfuscateFields.OLD_PASSWORD,
    ],
    seen: WeakMap<object, Record<string, unknown>> = new WeakMap(),
  ): T {
    if (!obj || typeof obj !== 'object') return obj;

    // Vérifie si l'objet a déjà été traité (évite les boucles infinies)
    if (seen.has(obj)) return seen.get(obj) as T;

    // Crée une copie de l'objet pour éviter de le modifier directement
    const sanitizedCopy: Record<string, unknown> = Array.isArray(obj)
      ? (([] as unknown) as Record<string, unknown>)
      : {};

    // Stocke l'objet dans WeakMap avant la récursion
    seen.set(obj, sanitizedCopy);

    for (const [key, value] of Object.entries(obj)) {
      if (
        fieldsToObfuscate
          .map((field) => field.toUpperCase())
          .includes(key.toUpperCase())
      ) {
        let obfuscatedFields = '';
        switch (key.toUpperCase()) {
          case DefaultObfuscateFields.API_KEY.toUpperCase():
          case DefaultObfuscateFields.AUTHORIZATION.toUpperCase():
            obfuscatedFields =
              '****************************' +
              (value as string).substring((value as string).length - 4);
            break;
          default:
            obfuscatedFields = '***';
            break;
        }
        sanitizedCopy[key] = obfuscatedFields;
      } else if (typeof value === 'object' && value !== null) {
        sanitizedCopy[key] = AxiosSingleton.sanitizeObject(
          value,
          fieldsToObfuscate,
          seen,
        ); // 🔄 Récursion avec WeakMap
      } else if (typeof value === 'string') {
        try {
          const parsed: unknown = JSON.parse(value);
          if (parsed && typeof parsed === 'object') {
            sanitizedCopy[key] = JSON.stringify(
              AxiosSingleton.sanitizeObject(parsed, fieldsToObfuscate, seen),
            );
          } else {
            sanitizedCopy[key] = value;
          }
        } catch {
          sanitizedCopy[key] = value;
        }
      } else {
        sanitizedCopy[key] = value;
      }
    }

    return sanitizedCopy as T;
  }
}
