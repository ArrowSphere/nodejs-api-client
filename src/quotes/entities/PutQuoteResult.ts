import { AbstractEntity } from '../../abstractEntity';

export enum PutQuoteResultFields {
  COLUMN_LINK = 'link',
  COLUMN_REFERENCE = 'reference',
  COLUMN_STATUS = 'status',
}

export type PutQuoteResultType = {
  [PutQuoteResultFields.COLUMN_LINK]: string;
  [PutQuoteResultFields.COLUMN_REFERENCE]: string;
  [PutQuoteResultFields.COLUMN_STATUS]: string;
};

export class PutQuoteResult extends AbstractEntity<PutQuoteResultType> {
  readonly #link: string;
  readonly #reference: string;
  readonly #status: string;

  public constructor(quoteRequestResponse: PutQuoteResultType) {
    super(quoteRequestResponse);

    this.#link = quoteRequestResponse[PutQuoteResultFields.COLUMN_LINK];
    this.#status = quoteRequestResponse[PutQuoteResultFields.COLUMN_STATUS];
    this.#reference =
      quoteRequestResponse[PutQuoteResultFields.COLUMN_REFERENCE];
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

  public toJSON(): PutQuoteResultType {
    return {
      [PutQuoteResultFields.COLUMN_LINK]: this.link,
      [PutQuoteResultFields.COLUMN_REFERENCE]: this.reference,
      [PutQuoteResultFields.COLUMN_STATUS]: this.status,
    };
  }
}
