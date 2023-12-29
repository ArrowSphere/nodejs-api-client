import { AbstractEntity } from '../../../abstractEntity';

export enum RelationGetDataFields {
  COLUMN_PARTNER_REF = 'partnerRef',
  COLUMN_TYPE = 'type',
}

export type RelationGetData = {
  [RelationGetDataFields.COLUMN_PARTNER_REF]: string;
  [RelationGetDataFields.COLUMN_TYPE]: string;
};

export class RelationGetResult extends AbstractEntity<RelationGetData> {
  readonly #rate: string;
  readonly #type: string;

  public constructor(data: RelationGetData) {
    super(data);

    this.#rate = data[RelationGetDataFields.COLUMN_PARTNER_REF];
    this.#type = data[RelationGetDataFields.COLUMN_TYPE];
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
      [RelationGetDataFields.COLUMN_TYPE]: this.type,
    };
  }
}
