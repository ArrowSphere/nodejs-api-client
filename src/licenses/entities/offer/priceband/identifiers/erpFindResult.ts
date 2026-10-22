import { AbstractEntity } from '../../../../../abstractEntity';
import { Rules } from 'validatorjs';
import {
  DataKeywords,
  FiltersParameters,
  SortParameters,
} from '../../../../licensesClient';

export enum ErpFindResultFields {
  COLUMN_SKU = 'sku',
}

export type ErpFindResultData = {
  [ErpFindResultFields.COLUMN_SKU]: string | null;
};

export type ErpFindResultDataKeywords = {
  [ErpFindResultFields.COLUMN_SKU]?: DataKeywords;
};

export type ErpFindResultDataSortParameters = {
  [ErpFindResultFields.COLUMN_SKU]?: SortParameters;
};

export type ErpFindResultDataFiltersParameters = {
  [ErpFindResultFields.COLUMN_SKU]?: FiltersParameters;
};

export class ErpFindResult extends AbstractEntity<ErpFindResultData> {
  protected VALIDATION_RULES: Rules = {
    [ErpFindResultFields.COLUMN_SKU]: 'present',
  };

  readonly #erpSku: string | null;

  public constructor(data: ErpFindResultData) {
    super(data);

    this.#erpSku = data[ErpFindResultFields.COLUMN_SKU];
  }

  public get erpSku(): string | null {
    return this.#erpSku;
  }

  public toJSON(): ErpFindResultData {
    return {
      [ErpFindResultFields.COLUMN_SKU]: this.erpSku,
    };
  }
}
