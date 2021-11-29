import { AbstractEntity } from '../../../../abstractEntity';
import {
  DataKeywords,
  FiltersParameters,
  SortParameters,
} from '../../../licensesClient';

export enum SaleConstraintsFields {
  COLUMN_MIN_QUANTITY = 'minQuantity',
  COLUMN_MAX_QUANTITY = 'maxQuantity',
}

export type SaleConstraintsData = {
  [SaleConstraintsFields.COLUMN_MIN_QUANTITY]: number | null;
  [SaleConstraintsFields.COLUMN_MAX_QUANTITY]: number | null;
};

export type SaleConstraintsDataKeywords = {
  [SaleConstraintsFields.COLUMN_MIN_QUANTITY]?: DataKeywords;
  [SaleConstraintsFields.COLUMN_MAX_QUANTITY]?: DataKeywords;
};

export type SaleConstraintsDataSortParameters = {
  [SaleConstraintsFields.COLUMN_MIN_QUANTITY]?: SortParameters;
  [SaleConstraintsFields.COLUMN_MAX_QUANTITY]?: SortParameters;
};

export type SaleConstraintsDataFiltersParameters = {
  [SaleConstraintsFields.COLUMN_MIN_QUANTITY]?: FiltersParameters;
  [SaleConstraintsFields.COLUMN_MAX_QUANTITY]?: FiltersParameters;
};

export abstract class AbstractSaleConstraints extends AbstractEntity<SaleConstraintsData> {
  readonly #minQuantity: number | null;
  readonly #maxQuantity: number | null;

  protected constructor(data: SaleConstraintsData) {
    super(data);

    this.#minQuantity = data[SaleConstraintsFields.COLUMN_MIN_QUANTITY];
    this.#maxQuantity = data[SaleConstraintsFields.COLUMN_MAX_QUANTITY];
  }

  public get minQuantity(): number | null {
    return this.#minQuantity;
  }

  public get maxQuantity(): number | null {
    return this.#maxQuantity;
  }

  public toJSON(): SaleConstraintsData {
    return {
      [SaleConstraintsFields.COLUMN_MIN_QUANTITY]: this.minQuantity,
      [SaleConstraintsFields.COLUMN_MAX_QUANTITY]: this.maxQuantity,
    };
  }
}
