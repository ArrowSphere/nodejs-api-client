import { AbstractEntity } from '../../abstractEntity';

export enum ReferenceLinkFields {
  COLUMN_REFERENCE = 'reference',
  COLUMN_LINK = 'link',
}

export type ReferenceLinkType = {
  [ReferenceLinkFields.COLUMN_REFERENCE]: string;
  [ReferenceLinkFields.COLUMN_LINK]: string;
};

export class ReferenceLink extends AbstractEntity<ReferenceLinkType> {
  readonly #reference: string;
  readonly #link: string;

  public constructor(referenceLinkInput: ReferenceLinkType) {
    super(referenceLinkInput);

    this.#reference = referenceLinkInput[ReferenceLinkFields.COLUMN_REFERENCE];
    this.#link = referenceLinkInput[ReferenceLinkFields.COLUMN_LINK];
  }

  get reference(): string {
    return this.#reference;
  }

  get link(): string {
    return this.#link;
  }

  public toJSON(): ReferenceLinkType {
    return {
      [ReferenceLinkFields.COLUMN_REFERENCE]: this.reference,
      [ReferenceLinkFields.COLUMN_LINK]: this.link,
    };
  }
}
