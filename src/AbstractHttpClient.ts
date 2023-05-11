import {
  HttpExceptionHandler,
  HandleHttpExceptionOutput,
} from './exception/exception-handlers';
import { PublicApiClientException } from './exception';

export abstract class AbstractHttpClient {
  /**
   * Base path for HTTP calls
   */
  protected basePath = '';
  /**
   * Current path for HTTP calls
   */
  protected path = '';
  /**
   * Token to authenticate the user
   */
  protected token = '';
  /**
   * ArrowSphere API URL
   */
  protected url = '';
  /**
   * Http Exceptions Handlers
   */
  protected httpExceptionHandlers: HttpExceptionHandler[] = [];

  public setToken(token: string): this {
    this.token = token;

    return this;
  }

  public setUrl(url: string): this {
    this.url = url;

    return this;
  }

  /**
   * Allow to register error/exception handler.
   * Handlers can be developed in another projects as long as they respect the interface HttpExceptionHandler.
   */
  public registerHttpExceptionHandler(handler: HttpExceptionHandler): this {
    this.httpExceptionHandlers.push(handler);

    return this;
  }

  /**
   * Will find appropriate ErrorHandlers and apply them to the error in order of registering.
   */
  protected async handleError(
    error: PublicApiClientException,
  ): Promise<HandleHttpExceptionOutput> {
    const appropriateHandlers: HttpExceptionHandler[] = this.httpExceptionHandlers.filter(
      (handler) => {
        console.log('httpStatus', error.httpCode);
        const res = handler.getHandledHttpStatuses().includes(error.httpCode);
        return res;
      },
    );

    // handle retry
    const output: HandleHttpExceptionOutput = { mustRetry: false };

    for (const handler of appropriateHandlers) {
      const res: HandleHttpExceptionOutput = await handler.handle(error, {
        setToken: this.setToken,
      });
      output.mustRetry = res.mustRetry;
    }

    return output;
  }
}
