import { AbstractEntity } from '../../../abstractEntity';

export enum RelationGetDataFields {
  COLUMN_PARTNER_REF = 'partnerRef',
  COLUMN_QUANTITY = 'quantity',
  COLUMN_TYPE = 'type',
}

export type RelationGetData = {
  [RelationGetDataFields.COLUMN_PARTNER_REF]: string;
  [RelationGetDataFields.COLUMN_QUANTITY]: number;
  [RelationGetDataFields.COLUMN_TYPE]: string;
};

export class RelationGetResult extends AbstractEntity<RelationGetData> {
  readonly #quantity: number;
  readonly #rate: string;
  readonly #type: string;

  public constructor(data: RelationGetData) {
    super(data);

    this.#quantity = data[RelationGetDataFields.COLUMN_QUANTITY];
    this.#rate = data[RelationGetDataFields.COLUMN_PARTNER_REF];
    this.#type = data[RelationGetDataFields.COLUMN_TYPE];
  }

  get quantity(): number {
    return this.#quantity;
  }

  get rate(): string {
    return this.#rate;
  }

  get type(): string {
    return this.#type;
  }

  public toJSON(): RelationGetData {
    return {
      [RelationGetDataFields.COLUMN_PARTNER_REF]: this.rate,
      [RelationGetDataFields.COLUMN_QUANTITY]: this.quantity,
      [RelationGetDataFields.COLUMN_TYPE]: this.type,
    };
  }
}
