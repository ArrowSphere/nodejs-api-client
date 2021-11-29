import { AbstractEntity } from '../../../../../abstractEntity';
import { Rules } from 'validatorjs';
import {
  DataKeywords,
  FiltersParameters,
  SortParameters,
} from '../../../../licensesClient';

export enum ArrowsphereFindResultFields {
  COLUMN_SKU = 'sku',
}

export type ArrowsphereFindResultData = {
  [ArrowsphereFindResultFields.COLUMN_SKU]: string;
};

export type ArrowsphereFindResultDataKeywords = {
  [ArrowsphereFindResultFields.COLUMN_SKU]?: DataKeywords;
};

export type ArrowsphereFindResultDataSortParameters = {
  [ArrowsphereFindResultFields.COLUMN_SKU]?: SortParameters;
};

export type ArrowsphereFindResultDataFiltersParameters = {
  [ArrowsphereFindResultFields.COLUMN_SKU]?: FiltersParameters;
};

export class ArrowsphereFindResult extends AbstractEntity<ArrowsphereFindResultData> {
  protected VALIDATION_RULES: Rules = {
    [ArrowsphereFindResultFields.COLUMN_SKU]: 'present|string',
  };

  readonly #arrowsphereSku: string;

  public constructor(data: ArrowsphereFindResultData) {
    super(data);

    this.#arrowsphereSku = data[ArrowsphereFindResultFields.COLUMN_SKU];
  }

  public get arrowsphereSku(): string {
    return this.#arrowsphereSku;
  }

  public toJSON(): ArrowsphereFindResultData {
    return {
      [ArrowsphereFindResultFields.COLUMN_SKU]: this.arrowsphereSku,
    };
  }
}
