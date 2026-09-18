import { AbstractEntity } from '../../abstractEntity';

export enum OrderSoftwareReferenceFields {
  COLUMN_REFERENCE = 'reference',
  COLUMN_LINK = 'link',
  COLUMN_RATIO = 'ratio',
}

export type OrderSoftwareReferenceType = {
  [OrderSoftwareReferenceFields.COLUMN_REFERENCE]: string;
  [OrderSoftwareReferenceFields.COLUMN_LINK]: string;
  [OrderSoftwareReferenceFields.COLUMN_RATIO]?: number;
};

export class OrderSoftwareReference extends AbstractEntity<OrderSoftwareReferenceType> {
  readonly #reference: string;
  readonly #link: string;
  readonly #ratio?: number;

  public constructor(reference: OrderSoftwareReferenceType) {
    super(reference);
    this.#reference = reference[OrderSoftwareReferenceFields.COLUMN_REFERENCE];
    this.#link = reference[OrderSoftwareReferenceFields.COLUMN_LINK];
    this.#ratio = reference[OrderSoftwareReferenceFields.COLUMN_RATIO];
  }

  get reference() {
    return this.#reference;
  }

  get link() {
    return this.#link;
  }

  get ratio(): number | undefined {
    return this.#ratio;
  }

  public toJSON(): OrderSoftwareReferenceType {
    return {
      [OrderSoftwareReferenceFields.COLUMN_REFERENCE]: this.reference,
      [OrderSoftwareReferenceFields.COLUMN_LINK]: this.link,
      [OrderSoftwareReferenceFields.COLUMN_RATIO]: this.ratio,
    };
  }
}
