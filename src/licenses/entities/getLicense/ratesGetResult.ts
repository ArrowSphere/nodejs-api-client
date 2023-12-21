import { AbstractEntity } from '../../../abstractEntity';
import { RateTypeEnum } from '../pricingRate/getPricingRateResult';

export enum RatesGetDataFields {
  COLUMN_RATE = 'rate',
  COLUMN_TYPE = 'type',
  COLUMN_LAST_UPDATE = 'lastUpdate',
}

export type RatesGetData = {
  [RatesGetDataFields.COLUMN_RATE]: number;
  [RatesGetDataFields.COLUMN_TYPE]: RateTypeEnum;
  [RatesGetDataFields.COLUMN_LAST_UPDATE]: string;
};

export class RatesGetResult extends AbstractEntity<RatesGetData> {
  readonly #rate: number;
  readonly #type: RateTypeEnum;
  readonly #lastUpdate: string;

  public constructor(data: RatesGetData) {
    super(data);

    this.#rate = data[RatesGetDataFields.COLUMN_RATE];
    this.#type = data[RatesGetDataFields.COLUMN_TYPE];
    this.#lastUpdate = data[RatesGetDataFields.COLUMN_LAST_UPDATE];
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

  public toJSON(): RatesGetData {
    return {
      [RatesGetDataFields.COLUMN_RATE]: this.rate,
      [RatesGetDataFields.COLUMN_TYPE]: this.type,
      [RatesGetDataFields.COLUMN_LAST_UPDATE]: this.lastUpdate,
    };
  }
}
