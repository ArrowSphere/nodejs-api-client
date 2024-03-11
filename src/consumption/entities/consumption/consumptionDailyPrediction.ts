import { AbstractEntity } from '../../../abstractEntity';

export enum ConsumptionDailyPredictionFields {
  COLUMN_CURRENCY = 'currency',
  COLUMN_UPDATED_AT = 'updatedAt',
  COLUMN_LICENSE_REFERENCE = 'licenseReference',
  COLUMN_PREDICTIONS = 'predictions',
}

export enum DailyPredictionFields {
  COLUMN_DATE = 'date',
  COLUMN_AMOUNT = 'amount',
}

export type DailyPredictionType = {
  [DailyPredictionFields.COLUMN_DATE]: string;
  [DailyPredictionFields.COLUMN_AMOUNT]: number;
};

export type ConsumptionDailyPredictionType = {
  [ConsumptionDailyPredictionFields.COLUMN_CURRENCY]: string;
  [ConsumptionDailyPredictionFields.COLUMN_UPDATED_AT]: string;
  [ConsumptionDailyPredictionFields.COLUMN_LICENSE_REFERENCE]: string;
  [ConsumptionDailyPredictionFields.COLUMN_PREDICTIONS]: DailyPredictionType[];
};

export class DailyPrediction extends AbstractEntity<DailyPredictionType> {
  readonly #date: string;
  readonly #amount: number;

  public constructor(data: DailyPredictionType) {
    super(data);

    this.#date = data[DailyPredictionFields.COLUMN_DATE];
    this.#amount = data[DailyPredictionFields.COLUMN_AMOUNT];
  }

  get date(): string {
    return this.#date;
  }

  get amount(): number {
    return this.#amount;
  }

  public toJSON(): DailyPredictionType {
    return {
      [DailyPredictionFields.COLUMN_DATE]: this.date,
      [DailyPredictionFields.COLUMN_AMOUNT]: this.amount,
    };
  }
}

export class ConsumptionDailyPrediction extends AbstractEntity<ConsumptionDailyPredictionType> {
  readonly #currency: string;
  readonly #updatedAt: string;
  readonly #licenseReference: string;
  readonly #predictions: DailyPrediction[];

  public constructor(data: ConsumptionDailyPredictionType) {
    super(data);

    this.#currency = data[ConsumptionDailyPredictionFields.COLUMN_CURRENCY];
    this.#updatedAt = data[ConsumptionDailyPredictionFields.COLUMN_UPDATED_AT];
    this.#licenseReference =
      data[ConsumptionDailyPredictionFields.COLUMN_LICENSE_REFERENCE];
    this.#predictions = data[
      ConsumptionDailyPredictionFields.COLUMN_PREDICTIONS
    ]
      ? data[ConsumptionDailyPredictionFields.COLUMN_PREDICTIONS]?.map(
          (v: DailyPredictionType): DailyPrediction => new DailyPrediction(v),
        )
      : [];
    data[ConsumptionDailyPredictionFields.COLUMN_PREDICTIONS];
  }

  get currency(): string {
    return this.#currency;
  }

  get updatedAt(): string {
    return this.#updatedAt;
  }

  get licenseReference(): string {
    return this.#licenseReference;
  }

  get predictions(): DailyPrediction[] {
    return this.#predictions;
  }

  public toJSON(): ConsumptionDailyPredictionType {
    return {
      [ConsumptionDailyPredictionFields.COLUMN_CURRENCY]: this.currency,
      [ConsumptionDailyPredictionFields.COLUMN_UPDATED_AT]: this.updatedAt,
      [ConsumptionDailyPredictionFields.COLUMN_LICENSE_REFERENCE]: this
        .licenseReference,
      [ConsumptionDailyPredictionFields.COLUMN_PREDICTIONS]: this.predictions.map(
        (v: DailyPrediction): DailyPredictionType => v.toJSON(),
      ),
    };
  }
}
