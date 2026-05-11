import { AbstractEntity } from '../../../abstractEntity';
import {
  SaleConstraintsFindResult,
  SaleConstraintsFindResultData,
} from '../offer/priceband/saleConstraintsFindResult';
import { AttributesParameters } from '../../../catalog';

export enum PriceBandDataFields {
  COLUMN_BASE_ATTRIBUTES = 'baseAttributes',
  COLUMN_ATTRIBUTES = 'attributes',
  COLUMN_ATTRIBUTES_PARAMETERS = 'attributesParameters',
  COLUMN_BILLING = 'billing',
  COLUMN_SALE_CONSTRAINTS = 'saleConstraints',
}

export type Billing = {
  type: string;
};

export type PriceBandAttribute = {
  name: string;
  value: string;
};

export type PriceBandData = {
  [PriceBandDataFields.COLUMN_BASE_ATTRIBUTES]?: PriceBandAttribute[];
  [PriceBandDataFields.COLUMN_ATTRIBUTES]?: PriceBandAttribute[];
  [PriceBandDataFields.COLUMN_ATTRIBUTES_PARAMETERS]?: AttributesParameters[];
  [PriceBandDataFields.COLUMN_BILLING]?: Billing;
  [PriceBandDataFields.COLUMN_SALE_CONSTRAINTS]?: SaleConstraintsFindResultData;
};

export class PriceBandGetResult extends AbstractEntity<PriceBandData> {
  readonly #baseAttributes?: PriceBandAttribute[];
  readonly #attributes?: PriceBandAttribute[];
  readonly #attributesParameters?: AttributesParameters[];
  readonly #billing?: Billing;
  readonly #saleConstraints?: SaleConstraintsFindResult;

  public constructor(data: PriceBandData) {
    super(data);

    this.#baseAttributes = data[PriceBandDataFields.COLUMN_BASE_ATTRIBUTES];
    this.#attributes = data[PriceBandDataFields.COLUMN_ATTRIBUTES];
    this.#attributesParameters =
      data[PriceBandDataFields.COLUMN_ATTRIBUTES_PARAMETERS];
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

  get baseAttributes(): PriceBandAttribute[] | undefined {
    return this.#baseAttributes;
  }

  get attributes(): PriceBandAttribute[] | undefined {
    return this.#attributes;
  }

  get attributesParameters(): AttributesParameters[] | undefined {
    return this.#attributesParameters;
  }

  get billing(): Billing | undefined {
    return this.#billing;
  }

  get saleConstraints(): SaleConstraintsFindResult | undefined {
    return this.#saleConstraints;
  }

  public toJSON(): PriceBandData {
    return {
      [PriceBandDataFields.COLUMN_BASE_ATTRIBUTES]: this.baseAttributes,
      [PriceBandDataFields.COLUMN_ATTRIBUTES]: this.attributes,
      [PriceBandDataFields.COLUMN_ATTRIBUTES_PARAMETERS]: this
        .attributesParameters,
      [PriceBandDataFields.COLUMN_BILLING]: this.billing,
      [PriceBandDataFields.COLUMN_SALE_CONSTRAINTS]: this.saleConstraints?.toJSON(),
    };
  }
}
