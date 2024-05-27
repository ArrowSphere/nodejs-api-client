import { AbstractEntity } from '../../../abstractEntity';
import {
  SaleConstraintsFindResult,
  SaleConstraintsFindResultData,
} from '../offer/priceband/saleConstraintsFindResult';

export enum PriceBandDataFields {
  COLUMN_SALE_CONTRAINSTS = 'saleConstraints',
  COLUMN_ATTRIBUTES = 'attributes',
}

export type PriceBandAttribute = {
  name: string;
  value: string;
};

export type PriceBandData = {
  [PriceBandDataFields.COLUMN_SALE_CONTRAINSTS]?: SaleConstraintsFindResultData;
  [PriceBandDataFields.COLUMN_ATTRIBUTES]?: PriceBandAttribute[];
};

export class PriceBandGetResult extends AbstractEntity<PriceBandData> {
  readonly #saleConstraints?: SaleConstraintsFindResult;
  readonly #attributes?: PriceBandAttribute[];

  public constructor(data: PriceBandData) {
    super(data);

    this.#saleConstraints =
      data[PriceBandDataFields.COLUMN_SALE_CONTRAINSTS] !== undefined
        ? new SaleConstraintsFindResult(
            data[
              PriceBandDataFields.COLUMN_SALE_CONTRAINSTS
            ] as SaleConstraintsFindResultData,
          )
        : undefined;
    this.#attributes = data[PriceBandDataFields.COLUMN_ATTRIBUTES];
  }

  get saleConstraints(): SaleConstraintsFindResult | undefined {
    return this.#saleConstraints;
  }

  get attributes(): PriceBandAttribute[] | undefined {
    return this.#attributes;
  }

  public toJSON(): PriceBandData {
    return {
      [PriceBandDataFields.COLUMN_SALE_CONTRAINSTS]: this.saleConstraints?.toJSON(),
      [PriceBandDataFields.COLUMN_ATTRIBUTES]: this.attributes,
    };
  }
}
