import { AbstractEntity } from '../../abstractEntity';

export enum OrderSoftwareReferenceFields {
  COLUMN_REFERENCE = 'reference',
  COLUMN_LINK = 'link',
}

export type OrderSoftwareReferenceType = {
  [OrderSoftwareReferenceFields.COLUMN_REFERENCE]: string;
  [OrderSoftwareReferenceFields.COLUMN_LINK]: string;
};

export class OrderSoftwareReference extends AbstractEntity<OrderSoftwareReferenceType> {
  readonly #reference: string;
  readonly #link: string;

  public constructor(reference: OrderSoftwareReferenceType) {
    super(reference);
    this.#reference = reference[OrderSoftwareReferenceFields.COLUMN_REFERENCE];
    this.#link = reference[OrderSoftwareReferenceFields.COLUMN_LINK];
  }

  get reference() {
    return this.#reference;
  }

  get link() {
    return this.#link;
  }

  public toJSON(): OrderSoftwareReferenceType {
    return {
      [OrderSoftwareReferenceFields.COLUMN_REFERENCE]: this.reference,
      [OrderSoftwareReferenceFields.COLUMN_LINK]: this.link,
    };
  }
}
