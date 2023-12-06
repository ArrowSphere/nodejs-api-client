import { AbstractEntity } from '../../../abstractEntity';
import {
  SaleConstraintsFindResult,
  SaleConstraintsFindResultData,
} from '../offer/priceband/saleConstraintsFindResult';

export enum PriceBandDataFields {
  SALE_CONTRAINSTS = 'saleConstraints',
}

export type PriceBandData = {
  [PriceBandDataFields.SALE_CONTRAINSTS]?: SaleConstraintsFindResultData;
};

export class PriceBandGetResult extends AbstractEntity<PriceBandData> {
  readonly #saleConstraints?: SaleConstraintsFindResult;

  public constructor(data: PriceBandData) {
    super(data);

    this.#saleConstraints =
      data[PriceBandDataFields.SALE_CONTRAINSTS] !== undefined
        ? new SaleConstraintsFindResult(
            data[
              PriceBandDataFields.SALE_CONTRAINSTS
            ] as SaleConstraintsFindResultData,
          )
        : undefined;
  }

  get saleConstraints(): SaleConstraintsFindResult | undefined {
    return this.#saleConstraints;
  }

  public toJSON(): PriceBandData {
    return {
      [PriceBandDataFields.SALE_CONTRAINSTS]: this.saleConstraints
        ? this.saleConstraints.toJSON()
        : undefined,
    };
  }
}
