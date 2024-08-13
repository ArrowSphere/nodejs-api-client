import { AbstractEntity } from '../../abstractEntity';

export enum ValidateQuoteResultFields {
  COLUMN_LINK = 'link',
  COLUMN_REFERENCE = 'reference',
  COLUMN_STATUS = 'status',
}

export type ValidateQuoteResultType = {
  [ValidateQuoteResultFields.COLUMN_LINK]: string;
  [ValidateQuoteResultFields.COLUMN_REFERENCE]: string;
  [ValidateQuoteResultFields.COLUMN_STATUS]: string;
};

export class ValidateQuoteResult extends AbstractEntity<ValidateQuoteResultType> {
  readonly #link: string;
  readonly #reference: string;
  readonly #status: string;

  public constructor(quoteRequestResponse: ValidateQuoteResultType) {
    super(quoteRequestResponse);

    this.#link = quoteRequestResponse[ValidateQuoteResultFields.COLUMN_LINK];
    this.#status =
      quoteRequestResponse[ValidateQuoteResultFields.COLUMN_STATUS];
    this.#reference =
      quoteRequestResponse[ValidateQuoteResultFields.COLUMN_REFERENCE];
  }

  get link(): string {
    return this.#link;
  }
  get reference(): string {
    return this.#reference;
  }
  get status(): string {
    return this.#status;
  }

  public toJSON(): ValidateQuoteResultType {
    return {
      [ValidateQuoteResultFields.COLUMN_LINK]: this.link,
      [ValidateQuoteResultFields.COLUMN_REFERENCE]: this.reference,
      [ValidateQuoteResultFields.COLUMN_STATUS]: this.status,
    };
  }
}
