import { HandleHttpExceptionOutput } from './HandleHttpExceptionOutput';
import { Hooks } from './Hooks';
import { PublicApiClientException } from '../publicApiClientException';

/**
 * Implementations can be outside of this project to inject other dependencies.
 */
export interface HttpExceptionHandler {
  handle(
    error: PublicApiClientException,
    hooks: Hooks,
  ): Promise<HandleHttpExceptionOutput>;
  getHandledHttpStatuses(): number[];
}
