import {
  DataKeywords,
  FiltersParameters,
  SortParameters,
} from '../../../licensesClient';
import { AbstractEntity } from '../../../../abstractEntity';

export enum SaleConstraintsFindResultFields {
  COLUMN_MIN_QUANTITY = 'minQuantity',
  COLUMN_MAX_QUANTITY = 'maxQuantity',
}

export type SaleConstraintsFindResultData = {
  [SaleConstraintsFindResultFields.COLUMN_MIN_QUANTITY]: number | null;
  [SaleConstraintsFindResultFields.COLUMN_MAX_QUANTITY]: number | null;
};

export type SaleConstraintsFindResultDataKeywords = {
  [SaleConstraintsFindResultFields.COLUMN_MIN_QUANTITY]?: DataKeywords;
  [SaleConstraintsFindResultFields.COLUMN_MAX_QUANTITY]?: DataKeywords;
};

export type SaleConstraintsFindResultDataSortParameters = {
  [SaleConstraintsFindResultFields.COLUMN_MIN_QUANTITY]?: SortParameters;
  [SaleConstraintsFindResultFields.COLUMN_MAX_QUANTITY]?: SortParameters;
};

export type SaleConstraintsFindResultDataFiltersParameters = {
  [SaleConstraintsFindResultFields.COLUMN_MIN_QUANTITY]?: FiltersParameters;
  [SaleConstraintsFindResultFields.COLUMN_MAX_QUANTITY]?: FiltersParameters;
};

export class SaleConstraintsFindResult extends AbstractEntity<SaleConstraintsFindResultData> {
  readonly #minQuantity: number | null;
  readonly #maxQuantity: number | null;

  public constructor(data: SaleConstraintsFindResultData) {
    super(data);

    this.#minQuantity =
      data[SaleConstraintsFindResultFields.COLUMN_MIN_QUANTITY];
    this.#maxQuantity =
      data[SaleConstraintsFindResultFields.COLUMN_MAX_QUANTITY];
  }

  public get minQuantity(): number | null {
    return this.#minQuantity;
  }

  public get maxQuantity(): number | null {
    return this.#maxQuantity;
  }

  public toJSON(): SaleConstraintsFindResultData {
    return {
      [SaleConstraintsFindResultFields.COLUMN_MIN_QUANTITY]: this.minQuantity,
      [SaleConstraintsFindResultFields.COLUMN_MAX_QUANTITY]: this.maxQuantity,
    };
  }
}
