import { Price, PriceType } from './price';
import { AbstractEntity } from '../../abstractEntity';

export enum AnalyticsFields {
  COLUMN_VENDOR = 'vendor',
  COLUMN_MARKETPLACE = 'marketplace',
  COLUMN_CLASSIFICATION = 'classification',
  COLUMN_TAG = 'tag',
  COLUMN_MONTH = 'month',
  COLUMN_USD_PRICE = 'usdPrice',
  COLUMN_LOCAL_PRICE = 'localPrice',
}

export type AnalyticsType = {
  [AnalyticsFields.COLUMN_VENDOR]: string;
  [AnalyticsFields.COLUMN_MARKETPLACE]: string;
  [AnalyticsFields.COLUMN_CLASSIFICATION]: string;
  [AnalyticsFields.COLUMN_TAG]: string;
  [AnalyticsFields.COLUMN_MONTH]: string;
  [AnalyticsFields.COLUMN_USD_PRICE]: PriceType;
  [AnalyticsFields.COLUMN_LOCAL_PRICE]: PriceType;
};

export class Analytics extends AbstractEntity<AnalyticsType> {
  readonly #vendor: string;
  readonly #marketplace: string;
  readonly #classification: string;
  readonly #tag: string;
  readonly #month: string;
  readonly #usdPrice: Price;
  readonly #localPrice: Price;

  public constructor(analyticsInput: AnalyticsType) {
    super(analyticsInput);

    this.#vendor = analyticsInput[AnalyticsFields.COLUMN_VENDOR];
    this.#marketplace = analyticsInput[AnalyticsFields.COLUMN_MARKETPLACE];
    this.#classification =
      analyticsInput[AnalyticsFields.COLUMN_CLASSIFICATION];
    this.#tag = analyticsInput[AnalyticsFields.COLUMN_TAG];
    this.#month = analyticsInput[AnalyticsFields.COLUMN_MONTH];
    this.#usdPrice = new Price(
      analyticsInput[AnalyticsFields.COLUMN_USD_PRICE],
    );
    this.#localPrice = new Price(
      analyticsInput[AnalyticsFields.COLUMN_LOCAL_PRICE],
    );
  }

  get vendor(): string {
    return this.#vendor;
  }

  get marketplace(): string {
    return this.#marketplace;
  }

  get classification(): string {
    return this.#classification;
  }

  get tag(): string {
    return this.#tag;
  }

  get month(): string {
    return this.#month;
  }

  get usdPrice(): Price {
    return this.#usdPrice;
  }

  get localPrice(): Price {
    return this.#localPrice;
  }

  public toJSON(): AnalyticsType {
    return {
      [AnalyticsFields.COLUMN_VENDOR]: this.vendor,
      [AnalyticsFields.COLUMN_MARKETPLACE]: this.marketplace,
      [AnalyticsFields.COLUMN_CLASSIFICATION]: this.classification,
      [AnalyticsFields.COLUMN_TAG]: this.tag,
      [AnalyticsFields.COLUMN_MONTH]: this.month,
      [AnalyticsFields.COLUMN_USD_PRICE]: this.usdPrice.toJSON(),
      [AnalyticsFields.COLUMN_LOCAL_PRICE]: this.localPrice.toJSON(),
    };
  }
}
