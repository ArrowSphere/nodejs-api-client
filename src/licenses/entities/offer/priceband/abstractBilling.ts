import { AbstractEntity } from '../../../../abstractEntity';
import { Rules } from 'validatorjs';
import {
  DataKeywords,
  FiltersParameters,
  SortParameters,
} from '../../../licensesClient';

export enum BillingFields {
  COLUMN_CYCLE = 'cycle',
  COLUMN_TERM = 'term',
  COLUMN_TYPE = 'type',
}

export type BillingData = {
  [BillingFields.COLUMN_CYCLE]: number;
  [BillingFields.COLUMN_TERM]: number;
  [BillingFields.COLUMN_TYPE]: string;
};

export type BillingDataKeywords = {
  [BillingFields.COLUMN_CYCLE]?: DataKeywords;
  [BillingFields.COLUMN_TERM]?: DataKeywords;
  [BillingFields.COLUMN_TYPE]?: DataKeywords;
};

export type BillingDataSortParameters = {
  [BillingFields.COLUMN_CYCLE]?: SortParameters;
  [BillingFields.COLUMN_TERM]?: SortParameters;
  [BillingFields.COLUMN_TYPE]?: SortParameters;
};

export type BillingDataFiltersParameters = {
  [BillingFields.COLUMN_CYCLE]?: FiltersParameters;
  [BillingFields.COLUMN_TERM]?: FiltersParameters;
  [BillingFields.COLUMN_TYPE]?: FiltersParameters;
};

export abstract class AbstractBilling extends AbstractEntity<BillingData> {
  protected VALIDATION_RULES: Rules = {
    [BillingFields.COLUMN_CYCLE]: 'required|numeric',
    [BillingFields.COLUMN_TERM]: 'required|numeric',
    [BillingFields.COLUMN_TYPE]: 'required|string',
  };

  readonly #cycle: number;
  readonly #term: number;
  readonly #type: string;

  protected constructor(data: BillingData) {
    super(data);

    this.#cycle = data[BillingFields.COLUMN_CYCLE];
    this.#term = data[BillingFields.COLUMN_TERM];
    this.#type = data[BillingFields.COLUMN_TYPE];
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

  public toJSON(): BillingData {
    return {
      [BillingFields.COLUMN_CYCLE]: this.cycle,
      [BillingFields.COLUMN_TERM]: this.term,
      [BillingFields.COLUMN_TYPE]: this.type,
    };
  }
}
