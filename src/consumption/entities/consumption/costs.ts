import { AbstractEntity } from '../../../abstractEntity';

export enum CostsFields {
  COLUMN_COSTS = 'costs',
}

export type CostsType = {
  [CostsFields.COLUMN_COSTS]: Record<string, Cost>;
};

export type Cost = {
  resellerTotalPrice: number;
  currency: string;
  vendor?: string;
};

export class Costs extends AbstractEntity<CostsType> {
  readonly #costs: Record<string, Cost>;

  public constructor(costsResponse: CostsType) {
    super(costsResponse);

    this.#costs = costsResponse[CostsFields.COLUMN_COSTS];
  }

  get costs(): Record<string, Cost> {
    return this.#costs;
  }

  public toJSON(): CostsType {
    return {
      [CostsFields.COLUMN_COSTS]: this.costs,
    };
  }
}
