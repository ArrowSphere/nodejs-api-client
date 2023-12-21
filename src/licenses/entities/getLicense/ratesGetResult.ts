import { AbstractEntity } from '../../../abstractEntity';
import { RateTypeEnum } from '../pricingRate/getPricingRateResult';

export enum RateFields {
  COLUMN_RATE = 'rate',
  COLUMN_TYPE = 'type',
  COLUMN_LAST_UPDATE = 'lastUpdate',
}

export type RateData = {
  [RateFields.COLUMN_RATE]: number;
  [RateFields.COLUMN_TYPE]: RateTypeEnum;
  [RateFields.COLUMN_LAST_UPDATE]: string;
};

export class RateResult extends AbstractEntity<RateData> {
  readonly #rate: number;
  readonly #type: RateTypeEnum;
  readonly #lastUpdate: string;

  public constructor(data: RateData) {
    super(data);

    this.#rate = data[RateFields.COLUMN_RATE];
    this.#type = data[RateFields.COLUMN_TYPE];
    this.#lastUpdate = data[RateFields.COLUMN_LAST_UPDATE];
  }

  get rate(): number {
    return this.#rate;
  }

  get type(): RateTypeEnum {
    return this.#type;
  }

  get lastUpdate(): string {
    return this.#lastUpdate;
  }

  public toJSON(): RateData {
    return {
      [RateFields.COLUMN_RATE]: this.rate,
      [RateFields.COLUMN_TYPE]: this.type,
      [RateFields.COLUMN_LAST_UPDATE]: this.lastUpdate,
    };
  }
}

export enum RatesGetDataFields {
  COLUMN_ARROW_SELL_RATE = 'arrowSellRate',
  COLUMN_MSP_SELL_RATE = 'mspSellRate',
}

export type RatesGetData = {
  [RatesGetDataFields.COLUMN_ARROW_SELL_RATE]?: RateData | null;
  [RatesGetDataFields.COLUMN_MSP_SELL_RATE]?: RateData | null;
};

export class RatesGetResult extends AbstractEntity<RatesGetData> {
  readonly #arrowSellRate?: RateResult | null;
  readonly #mspSellRate?: RateResult | null;

  public constructor(data: RatesGetData) {
    super(data);

    this.#arrowSellRate = data[RatesGetDataFields.COLUMN_ARROW_SELL_RATE]
      ? new RateResult(
          data[RatesGetDataFields.COLUMN_ARROW_SELL_RATE] as RateData,
        )
      : null;
    this.#mspSellRate = data[RatesGetDataFields.COLUMN_MSP_SELL_RATE]
      ? new RateResult(
          data[RatesGetDataFields.COLUMN_MSP_SELL_RATE] as RateData,
        )
      : null;
  }

  get arrowSellRate(): RateResult | null | undefined {
    return this.#arrowSellRate;
  }

  get mspSellRate(): RateResult | null | undefined {
    return this.#mspSellRate;
  }

  public toJSON(): RatesGetData {
    return {
      [RatesGetDataFields.COLUMN_ARROW_SELL_RATE]: this.arrowSellRate?.toJSON(),
      [RatesGetDataFields.COLUMN_MSP_SELL_RATE]: this.mspSellRate,
    };
  }
}
