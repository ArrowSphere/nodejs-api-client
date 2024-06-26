import { AbstractEntity } from '../../abstractEntity';

export enum QuoteRequestFields {
  MESSAGE = 'message',
}

export type QuoteRequestType = {
  [QuoteRequestFields.MESSAGE]: string;
};

export class QuoteRequest extends AbstractEntity<QuoteRequestType> {
  readonly #message: string;

  public constructor(quoteRequestResponse: QuoteRequestType) {
    super(quoteRequestResponse);

    this.#message = quoteRequestResponse[QuoteRequestFields.MESSAGE];
  }

  get message(): string {
    return this.#message;
  }

  public toJSON(): QuoteRequestType {
    return {
      [QuoteRequestFields.MESSAGE]: this.message,
    };
  }
}
