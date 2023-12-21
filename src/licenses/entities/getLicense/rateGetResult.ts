import { AbstractEntity } from '../../../abstractEntity';

export enum RatesDataFields {
  COLUMN_ARROW_SELL_RATE = 'arrowSellRate',
  COLUMN_MSP_SELL_RATE = 'mspSellRate',
}

export type RatesData = {
  [RatesDataFields.COLUMN_ARROW_SELL_RATE]?: number | null;
  [RatesDataFields.COLUMN_MSP_SELL_RATE]?: number | null;
};

export class RatesGetResult extends AbstractEntity<RatesData> {
  readonly #arrowSellRate?: number | null;
  readonly #mspSellRate?: number | null;

  public constructor(data: RatesData) {
    super(data);

    this.#arrowSellRate = data[RatesDataFields.COLUMN_ARROW_SELL_RATE];
    this.#mspSellRate = data[RatesDataFields.COLUMN_ARROW_SELL_RATE];
  }

  get arrowSellRate(): number | null | undefined {
    return this.#arrowSellRate;
  }

  get mspSellRate(): number | null | undefined {
    return this.#mspSellRate;
  }

  public toJSON(): RatesData {
    return {
      [RatesDataFields.COLUMN_ARROW_SELL_RATE]: this.mspSellRate,
      [RatesDataFields.COLUMN_MSP_SELL_RATE]: this.arrowSellRate,
    };
  }
}
