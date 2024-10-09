import { AbstractEntity } from '../../abstractEntity';

export enum ReportProductPriceFields {
  COLUMN_UNIT_PRICE = 'unitPrice',
  COLUMN_TOTAL_PRICE = 'totalPrice',
  COLUMN_CURRENCY = 'currency',
}

export type ReportProductPriceType = {
  [ReportProductPriceFields.COLUMN_UNIT_PRICE]: number;
  [ReportProductPriceFields.COLUMN_TOTAL_PRICE]: number;
  [ReportProductPriceFields.COLUMN_CURRENCY]: string;
};

export class ReportProductPrice extends AbstractEntity<ReportProductPriceType> {
  readonly #unitPrice;
  readonly #totalPrice;
  readonly #currency;

  public constructor(reportProductPriceData: ReportProductPriceType) {
    super(reportProductPriceData);
    this.#unitPrice =
      reportProductPriceData[ReportProductPriceFields.COLUMN_UNIT_PRICE];
    this.#totalPrice =
      reportProductPriceData[ReportProductPriceFields.COLUMN_TOTAL_PRICE];
    this.#currency =
      reportProductPriceData[ReportProductPriceFields.COLUMN_CURRENCY];
  }

  get unitPrice() {
    return this.#unitPrice;
  }

  get totalPrice() {
    return this.#totalPrice;
  }

  get currency() {
    return this.#currency;
  }

  toJSON(): ReportProductPriceType {
    return {
      [ReportProductPriceFields.COLUMN_UNIT_PRICE]: this.unitPrice,
      [ReportProductPriceFields.COLUMN_TOTAL_PRICE]: this.totalPrice,
      [ReportProductPriceFields.COLUMN_CURRENCY]: this.currency,
    };
  }
}
