import {
  PriceBandAttribute,
  PriceBandDataFields,
} from '../../../../../licenses';
import { AbstractEntity } from '../../../../../abstractEntity';

/**
 * @deprecated Use PriceBandDataFields instead
 */
export enum PriceBandFields {
  COLUMN_ATTRIBUTES = 'attributes',
}

/**
 * @deprecated Use PriceBandData instead
 */
export type PriceBandType = {
  [PriceBandFields.COLUMN_ATTRIBUTES]?: PriceBandAttribute[];
};

/**
 * @deprecated Use PriceBandGetResult instead
 */
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
