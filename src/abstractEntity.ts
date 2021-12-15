import Validator, { ErrorMessages, Rules } from 'validatorjs';
import { EntityValidationException } from './exception';

/**
 * Class AbstractEntity
 */
export abstract class AbstractEntity<T> {
  protected VALIDATION_RULES: Rules = {};

  protected VALIDATION_MESSAGES: ErrorMessages = {};

  /**
   * Whether the validation is enabled or not.
   */
  public enableValidation = false;

  /**
   * AbstractEntity constructor.
   * @param data - Data that will be used in the Entity
   */
  protected constructor(data: T) {
    this.validate(data);
  }

  /**
   * Checks whether or not the entity data passes the validation rules
   * @param data - Data to validate
   * @returns void
   * @throws
   */
  public validate(data: T): void {
    // If the validation has been disabled, stop
    if (!this.enableValidation) {
      return;
    }

    const messages = {
      required: ':attribute is required',
      present: ':attribute is required',
      array: ':attribute must be an array',
      numeric: ':attribute must be a number',
      string: ':attribute must be a string',
      ...this.VALIDATION_MESSAGES,
    };

    const validator = new Validator(data, this.VALIDATION_RULES, messages);

    if (!validator.passes()) {
      throw new EntityValidationException(
        Object.values(validator.errors.all()).join('; '),
      );
    }
  }
}
