export enum ReferenceFields {
  COLUMN_REFERENCE = 'reference',
}

export type ReferenceType = {
  [ReferenceFields.COLUMN_REFERENCE]: string;
};

export class Reference {
  readonly #reference;

  public constructor(reference: ReferenceType) {
    this.#reference = reference[ReferenceFields.COLUMN_REFERENCE];
  }

  get reference() {
    return this.#reference;
  }

  public toJSON(): ReferenceType {
    return {
      [ReferenceFields.COLUMN_REFERENCE]: this.reference,
    };
  }
}
