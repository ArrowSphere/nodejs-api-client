import { AbstractEntity } from '../../../../../abstractEntity';
import { Rules } from 'validatorjs';
import {
  DataKeywords,
  FiltersParameters,
  SortParameters,
} from '../../../../licensesClient';

export enum ArrowsphereFields {
  COLUMN_SKU = 'sku',
}

export type ArrowsphereData = {
  [ArrowsphereFields.COLUMN_SKU]: string;
};

export type ArrowsphereDataKeywords = {
  [ArrowsphereFields.COLUMN_SKU]?: DataKeywords;
};

export type ArrowsphereDataSortParameters = {
  [ArrowsphereFields.COLUMN_SKU]?: SortParameters;
};

export type ArrowsphereDataFiltersParameters = {
  [ArrowsphereFields.COLUMN_SKU]?: FiltersParameters;
};

export abstract class AbstractArrowsphere extends AbstractEntity<ArrowsphereData> {
  protected VALIDATION_RULES: Rules = {
    [ArrowsphereFields.COLUMN_SKU]: 'present|string',
  };

  readonly #arrowsphereSku: string;

  protected constructor(data: ArrowsphereData) {
    super(data);

    this.#arrowsphereSku = data[ArrowsphereFields.COLUMN_SKU];
  }

  public get arrowsphereSku(): string {
    return this.#arrowsphereSku;
  }

  public toJSON(): ArrowsphereData {
    return {
      [ArrowsphereFields.COLUMN_SKU]: this.arrowsphereSku,
    };
  }
}
