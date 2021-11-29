import { AbstractEntity } from '../../../../abstractEntity';
import { Rules } from 'validatorjs';
import {
  DataKeywords,
  FiltersParameters,
  SortParameters,
} from '../../../licensesClient';

export enum PricesFields {
  COLUMN_BUY = 'buy',
  COLUMN_SELL = 'sell',
  COLUMN_PUBLIC = 'public',
}

export type PricesData = {
  [PricesFields.COLUMN_BUY]: number;
  [PricesFields.COLUMN_SELL]: number;
  [PricesFields.COLUMN_PUBLIC]: number;
};

export type PricesDataKeywords = {
  [PricesFields.COLUMN_BUY]?: DataKeywords;
  [PricesFields.COLUMN_SELL]?: DataKeywords;
  [PricesFields.COLUMN_PUBLIC]?: DataKeywords;
};

export type PricesDataSortParameters = {
  [PricesFields.COLUMN_BUY]?: SortParameters;
  [PricesFields.COLUMN_SELL]?: SortParameters;
  [PricesFields.COLUMN_PUBLIC]?: SortParameters;
};

export type PricesDataFiltersParameters = {
  [PricesFields.COLUMN_BUY]?: FiltersParameters;
  [PricesFields.COLUMN_SELL]?: FiltersParameters;
  [PricesFields.COLUMN_PUBLIC]?: FiltersParameters;
};

export abstract class AbstractPrices extends AbstractEntity<PricesData> {
  protected VALIDATION_RULES: Rules = {
    [PricesFields.COLUMN_BUY]: 'required|numeric',
    [PricesFields.COLUMN_SELL]: 'required|numeric',
    [PricesFields.COLUMN_PUBLIC]: 'required|numeric',
  };

  readonly #buy: number;
  readonly #sell: number;
  readonly #public: number;

  protected constructor(data: PricesData) {
    super(data);

    this.#buy = data[PricesFields.COLUMN_BUY];
    this.#sell = data[PricesFields.COLUMN_SELL];
    this.#public = data[PricesFields.COLUMN_PUBLIC];
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

  public toJSON(): PricesData {
    return {
      [PricesFields.COLUMN_BUY]: this.buy,
      [PricesFields.COLUMN_SELL]: this.sell,
      [PricesFields.COLUMN_PUBLIC]: this.public,
    };
  }
}
