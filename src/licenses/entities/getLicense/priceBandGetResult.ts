import { AbstractEntity } from '../../../abstractEntity';
import {
  SaleConstraintsFindResult,
  SaleConstraintsFindResultData,
} from '../offer/priceband/saleConstraintsFindResult';
import { AttributesParameterType } from '../../../catalog';

export enum PriceBandDataFields {
  COLUMN_ATTRIBUTES = 'attributes',
  COLUMN_BILLING = 'billing',
  COLUMN_SALE_CONSTRAINTS = 'saleConstraints',
}

export type Billing = {
  type: string;
};

export type PriceBandAttribute = {
  name: string;
  value: string;
  type?: AttributesParameterType;
};

export type PriceBandData = {
  [PriceBandDataFields.COLUMN_ATTRIBUTES]?: PriceBandAttribute[];
  [PriceBandDataFields.COLUMN_BILLING]?: Billing;
  [PriceBandDataFields.COLUMN_SALE_CONSTRAINTS]?: SaleConstraintsFindResultData;
};

export class PriceBandGetResult extends AbstractEntity<PriceBandData> {
  readonly #attributes?: PriceBandAttribute[];
  readonly #billing?: Billing;
  readonly #saleConstraints?: SaleConstraintsFindResult;

  public constructor(data: PriceBandData) {
    super(data);

    this.#attributes = data[PriceBandDataFields.COLUMN_ATTRIBUTES];
    this.#billing = data[PriceBandDataFields.COLUMN_BILLING];
    this.#saleConstraints =
      data[PriceBandDataFields.COLUMN_SALE_CONSTRAINTS] !== undefined
        ? new SaleConstraintsFindResult(
            data[
              PriceBandDataFields.COLUMN_SALE_CONSTRAINTS
            ] as SaleConstraintsFindResultData,
          )
        : undefined;
  }

  get attributes(): PriceBandAttribute[] | undefined {
    return this.#attributes;
  }

  get billing(): Billing | undefined {
    return this.#billing;
  }

  get saleConstraints(): SaleConstraintsFindResult | undefined {
    return this.#saleConstraints;
  }

  public toJSON(): PriceBandData {
    return {
      [PriceBandDataFields.COLUMN_ATTRIBUTES]: this.attributes,
      [PriceBandDataFields.COLUMN_BILLING]: this.billing,
      [PriceBandDataFields.COLUMN_SALE_CONSTRAINTS]: this.saleConstraints?.toJSON(),
    };
  }
}
