import {
  DataKeywords,
  FiltersParameters,
  SortParameters,
} from '../../../licensesClient';
import { AbstractEntity } from '../../../../abstractEntity';
import { Rules } from 'validatorjs';

export enum BillingFindResultFields {
  COLUMN_CYCLE = 'cycle',
  COLUMN_TERM = 'term',
  COLUMN_TYPE = 'type',
}

export type BillingFindResultData = {
  [BillingFindResultFields.COLUMN_CYCLE]: number;
  [BillingFindResultFields.COLUMN_TERM]: number;
  [BillingFindResultFields.COLUMN_TYPE]: string;
};

export type BillingFindResultDataKeywords = {
  [BillingFindResultFields.COLUMN_CYCLE]?: DataKeywords;
  [BillingFindResultFields.COLUMN_TERM]?: DataKeywords;
  [BillingFindResultFields.COLUMN_TYPE]?: DataKeywords;
};

export type BillingFindResultDataSortParameters = {
  [BillingFindResultFields.COLUMN_CYCLE]?: SortParameters;
  [BillingFindResultFields.COLUMN_TERM]?: SortParameters;
  [BillingFindResultFields.COLUMN_TYPE]?: SortParameters;
};

export type BillingFindResultDataFiltersParameters = {
  [BillingFindResultFields.COLUMN_CYCLE]?: FiltersParameters;
  [BillingFindResultFields.COLUMN_TERM]?: FiltersParameters;
  [BillingFindResultFields.COLUMN_TYPE]?: FiltersParameters;
};

export class BillingFindResult extends AbstractEntity<BillingFindResultData> {
  protected VALIDATION_RULES: Rules = {
    [BillingFindResultFields.COLUMN_CYCLE]: 'required|numeric',
    [BillingFindResultFields.COLUMN_TERM]: 'required|numeric',
    [BillingFindResultFields.COLUMN_TYPE]: 'required|string',
  };

  readonly #cycle: number;
  readonly #term: number;
  readonly #type: string;

  public constructor(data: BillingFindResultData) {
    super(data);

    this.#cycle = data[BillingFindResultFields.COLUMN_CYCLE];
    this.#term = data[BillingFindResultFields.COLUMN_TERM];
    this.#type = data[BillingFindResultFields.COLUMN_TYPE];
  }

  public get cycle(): number {
    return this.#cycle;
  }

  public get term(): number {
    return this.#term;
  }

  public get type(): string {
    return this.#type;
  }

  public toJSON(): BillingFindResultData {
    return {
      [BillingFindResultFields.COLUMN_CYCLE]: this.cycle,
      [BillingFindResultFields.COLUMN_TERM]: this.term,
      [BillingFindResultFields.COLUMN_TYPE]: this.type,
    };
  }
}
