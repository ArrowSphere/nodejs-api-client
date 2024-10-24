import { ReportProduct, ReportProductType } from './reportProduct';
import { Reference, ReferenceType } from './reference';
import { AbstractEntity } from '../../abstractEntity';

export enum ReportFields {
  COLUMN_REFERENCE = 'reference',
  COLUMN_STATUS = 'status',
  COLUMN_MONTH = 'month',
  COLUMN_PROGRAM = 'program',
  COLUMN_PRODUCTS = 'products',
  COLUMN_SUBSCRIPTION = 'subscription',
}

export type ReportType = {
  [ReportFields.COLUMN_REFERENCE]: string;
  [ReportFields.COLUMN_STATUS]: string;
  [ReportFields.COLUMN_MONTH]: string;
  [ReportFields.COLUMN_PROGRAM]: string;
  [ReportFields.COLUMN_PRODUCTS]: Array<ReportProductType>;
  [ReportFields.COLUMN_SUBSCRIPTION]: ReferenceType;
};

export class Report extends AbstractEntity<ReportType> {
  readonly #reference;
  readonly #status;
  readonly #month;
  readonly #program;
  readonly #products;
  readonly #subscription;

  public constructor(reportData: ReportType) {
    super(reportData);
    this.#reference = reportData[ReportFields.COLUMN_REFERENCE];
    this.#status = reportData[ReportFields.COLUMN_STATUS];
    this.#month = reportData[ReportFields.COLUMN_MONTH];
    this.#program = reportData[ReportFields.COLUMN_PROGRAM];
    this.#products = reportData[ReportFields.COLUMN_PRODUCTS].map(
      (product: ReportProductType) => new ReportProduct(product),
    );
    this.#subscription = new Reference(
      reportData[ReportFields.COLUMN_SUBSCRIPTION],
    );
  }

  get reference() {
    return this.#reference;
  }

  get status() {
    return this.#status;
  }

  get month() {
    return this.#month;
  }

  get program() {
    return this.#program;
  }

  get products() {
    return this.#products;
  }

  get subscription() {
    return this.#subscription;
  }

  public toJSON(): ReportType {
    return {
      [ReportFields.COLUMN_REFERENCE]: this.reference,
      [ReportFields.COLUMN_STATUS]: this.status,
      [ReportFields.COLUMN_MONTH]: this.month,
      [ReportFields.COLUMN_PROGRAM]: this.program,
      [ReportFields.COLUMN_PRODUCTS]: this.products.map(
        (product: ReportProduct) => product.toJSON(),
      ),
      [ReportFields.COLUMN_SUBSCRIPTION]: this.subscription.toJSON(),
    };
  }
}
