import { AbstractEntity } from '../../abstractEntity';

export enum QuoteCommentsFields {
  BODY = 'body',
}

export type QuoteCommentsType = {
  [QuoteCommentsFields.BODY]: string;
};

export class QuoteComments extends AbstractEntity<QuoteCommentsType> {
  readonly #body: string;

  public constructor(quoteCommentsResponse: QuoteCommentsType) {
    super(quoteCommentsResponse);

    this.#body = quoteCommentsResponse[QuoteCommentsFields.BODY];
  }

  get body(): string {
    return this.#body;
  }

  public toJSON(): QuoteCommentsType {
    return {
      [QuoteCommentsFields.BODY]: this.#body,
    };
  }
}
