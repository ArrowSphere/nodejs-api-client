import { AbstractEntity } from '../../../../abstractEntity';
import { Rules } from 'validatorjs';
import {
  DataKeywords,
  FiltersParameters,
  SortParameters,
} from '../../../licensesClient';

export enum PriceBandPriceFindResultFields {
  COLUMN_BUY = 'buy',
  COLUMN_SELL = 'sell',
  COLUMN_PUBLIC = 'public',
}

export type PriceBandPriceFindResultData = {
  [PriceBandPriceFindResultFields.COLUMN_BUY]: number;
  [PriceBandPriceFindResultFields.COLUMN_SELL]: number;
  [PriceBandPriceFindResultFields.COLUMN_PUBLIC]: number;
};

export type PriceBandPriceFindResultDataKeywords = {
  [PriceBandPriceFindResultFields.COLUMN_BUY]?: DataKeywords;
  [PriceBandPriceFindResultFields.COLUMN_SELL]?: DataKeywords;
  [PriceBandPriceFindResultFields.COLUMN_PUBLIC]?: DataKeywords;
};

export type PriceBandPriceFindResultDataSortParameters = {
  [PriceBandPriceFindResultFields.COLUMN_BUY]?: SortParameters;
  [PriceBandPriceFindResultFields.COLUMN_SELL]?: SortParameters;
  [PriceBandPriceFindResultFields.COLUMN_PUBLIC]?: SortParameters;
};

export type PriceBandPriceFindResultDataFiltersParameters = {
  [PriceBandPriceFindResultFields.COLUMN_BUY]?: FiltersParameters;
  [PriceBandPriceFindResultFields.COLUMN_SELL]?: FiltersParameters;
  [PriceBandPriceFindResultFields.COLUMN_PUBLIC]?: FiltersParameters;
};

export class PriceBandPriceFindResult extends AbstractEntity<PriceBandPriceFindResultData> {
  protected VALIDATION_RULES: Rules = {
    [PriceBandPriceFindResultFields.COLUMN_BUY]: 'required|numeric',
    [PriceBandPriceFindResultFields.COLUMN_SELL]: 'required|numeric',
    [PriceBandPriceFindResultFields.COLUMN_PUBLIC]: 'required|numeric',
  };

  readonly #buy: number;
  readonly #sell: number;
  readonly #public: number;

  public constructor(data: PriceBandPriceFindResultData) {
    super(data);

    this.#buy = data[PriceBandPriceFindResultFields.COLUMN_BUY];
    this.#sell = data[PriceBandPriceFindResultFields.COLUMN_SELL];
    this.#public = data[PriceBandPriceFindResultFields.COLUMN_PUBLIC];
  }

  public get buy(): number {
    return this.#buy;
  }

  public get sell(): number {
    return this.#sell;
  }

  public get public(): number {
    return this.#public;
  }

  public toJSON(): PriceBandPriceFindResultData {
    return {
      [PriceBandPriceFindResultFields.COLUMN_BUY]: this.buy,
      [PriceBandPriceFindResultFields.COLUMN_SELL]: this.sell,
      [PriceBandPriceFindResultFields.COLUMN_PUBLIC]: this.public,
    };
  }
}
