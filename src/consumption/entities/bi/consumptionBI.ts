import { AbstractEntity } from '../../../abstractEntity';
import { Period, PeriodType } from './period/period';
import { Top, TopType } from './top/top';

export enum ConsumptionBIFields {
  COLUMN_CURRENCY = 'currency',
  COLUMN_PERIOD = 'period',
  COLUMN_AGGREGATE = 'aggregate',
  COLUMN_METRIC = 'metric',
  COLUMN_TOP = 'top',
}

export type ConsumptionBIType = {
  [ConsumptionBIFields.COLUMN_CURRENCY]: string;
  [ConsumptionBIFields.COLUMN_PERIOD]: PeriodType;
  [ConsumptionBIFields.COLUMN_AGGREGATE]: string;
  [ConsumptionBIFields.COLUMN_METRIC]: string;
  [ConsumptionBIFields.COLUMN_TOP]: Array<TopType>;
};

export class ConsumptionBI extends AbstractEntity<ConsumptionBIType> {
  readonly #currency: string;
  readonly #period: Period;
  readonly #aggregate: string;
  readonly #metric: string;
  readonly #top: Array<Top>;

  public constructor(consumptionResponse: ConsumptionBIType) {
    super(consumptionResponse);

    this.#currency = consumptionResponse[ConsumptionBIFields.COLUMN_CURRENCY];
    this.#period = new Period(
      consumptionResponse[ConsumptionBIFields.COLUMN_PERIOD],
    );
    this.#aggregate = consumptionResponse[ConsumptionBIFields.COLUMN_AGGREGATE];
    this.#metric = consumptionResponse[ConsumptionBIFields.COLUMN_METRIC];
    this.#top = consumptionResponse[ConsumptionBIFields.COLUMN_TOP].map(
      (top: TopType) => new Top(top),
    );
  }

  get currency(): string {
    return this.#currency;
  }

  get period(): Period {
    return this.#period;
  }

  get aggregate(): string {
    return this.#aggregate;
  }

  get metric(): string {
    return this.#metric;
  }

  get top(): Array<Top> {
    return this.#top;
  }

  public toJSON(): ConsumptionBIType {
    return {
      [ConsumptionBIFields.COLUMN_CURRENCY]: this.currency,
      [ConsumptionBIFields.COLUMN_PERIOD]: this.period.toJSON(),
      [ConsumptionBIFields.COLUMN_AGGREGATE]: this.aggregate,
      [ConsumptionBIFields.COLUMN_METRIC]: this.metric,
      [ConsumptionBIFields.COLUMN_TOP]: this.top.map((top: Top) =>
        top.toJSON(),
      ),
    };
  }
}
