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
  protected gqlExceptionHandlers: HttpExceptionHandler[] = [];

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
    this.gqlExceptionHandlers.push(handler);

    return this;
  }

  /**
   * Will find appropriate ErrorHandlers and apply them to the error in order of registering.
   */
  protected async handleError(
    error: PublicApiClientException,
  ): Promise<HandleHttpExceptionOutput> {
    console.error(error);

    console.log('registeredHandlers', this.gqlExceptionHandlers);

    const appropriateHandlers: HttpExceptionHandler[] = this.gqlExceptionHandlers.filter(
      (handler) => {
        console.log('httpStatus', error.httpCode);
        const res = handler.getHandledHttpStatuses().includes(error.httpCode);
        return res;
      },
    );
    console.log({ appropriateHandlers });

    // handle retry
    const output: HandleHttpExceptionOutput = { mustRetry: false };

    for (const handler of appropriateHandlers) {
      const res: HandleHttpExceptionOutput = await handler.handle(error, {
        setToken: this.setToken,
      });
      output.mustRetry = res.mustRetry;
    }

    console.log({ output });

    return output;
  }
}
