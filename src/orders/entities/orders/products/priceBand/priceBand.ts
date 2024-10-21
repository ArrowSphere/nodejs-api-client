import {
  PriceBandAttribute,
  PriceBandDataFields,
} from '../../../../../licenses';
import { AbstractEntity } from '../../../../../abstractEntity';

export enum PriceBandFields {
  COLUMN_ATTRIBUTES = 'attributes',
}

export type PriceBandType = {
  [PriceBandFields.COLUMN_ATTRIBUTES]?: PriceBandAttribute[];
};

export class PriceBand extends AbstractEntity<PriceBandType> {
  readonly #attributes?: PriceBandAttribute[];

  public constructor(data: PriceBand) {
    super(data);

    this.#attributes = data[PriceBandDataFields.COLUMN_ATTRIBUTES];
  }

  get attributes(): PriceBandAttribute[] | undefined {
    return this.#attributes;
  }

  public toJSON(): PriceBandType {
    return {
      [PriceBandDataFields.COLUMN_ATTRIBUTES]: this.attributes,
    };
  }
}
