import { AbstractEntity } from '../../../abstractEntity';

export enum ConsumptionFields {
  COLUMN_HEADERS = 'headers',
  COLUMN_LINES = 'lines',
}

export type ConsumptionType = {
  [ConsumptionFields.COLUMN_HEADERS]: Array<string>;
  [ConsumptionFields.COLUMN_LINES]: Array<string | number>;
};

export class Consumption extends AbstractEntity<ConsumptionType> {
  readonly #headers: Array<string>;
  readonly #lines: Array<string | number>;

  public constructor(consumptionResponse: ConsumptionType) {
    super(consumptionResponse);

    this.#headers = consumptionResponse[ConsumptionFields.COLUMN_HEADERS];
    this.#lines = consumptionResponse[ConsumptionFields.COLUMN_LINES];
  }

  get headers(): Array<string> {
    return this.#headers;
  }

  get lines(): Array<string | number> {
    return this.#lines;
  }

  public toJSON(): ConsumptionType {
    return {
      [ConsumptionFields.COLUMN_HEADERS]: this.headers,
      [ConsumptionFields.COLUMN_LINES]: this.lines,
    };
  }
}
