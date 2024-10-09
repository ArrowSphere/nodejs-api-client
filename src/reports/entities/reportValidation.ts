import { AbstractEntity } from '../../abstractEntity';

export enum ReportValidationFields {
  COLUMN_REFERENCE = 'reference',
  COLUMN_STATUS = 'status',
  COLUMN_link = 'link',
}
export type ReportValidationType = {
  [ReportValidationFields.COLUMN_REFERENCE]: string;
  [ReportValidationFields.COLUMN_STATUS]: string;
  [ReportValidationFields.COLUMN_link]: string;
};

export class ReportValidation extends AbstractEntity<ReportValidationType> {
  readonly #reference;
  readonly #status;
  readonly #link;

  public constructor(reportValidationData: ReportValidationType) {
    super(reportValidationData);
    this.#reference =
      reportValidationData[ReportValidationFields.COLUMN_REFERENCE];
    this.#status = reportValidationData[ReportValidationFields.COLUMN_STATUS];
    this.#link = reportValidationData[ReportValidationFields.COLUMN_link];
  }

  get reference() {
    return this.#reference;
  }

  get status() {
    return this.#status;
  }

  get link() {
    return this.#link;
  }

  toJSON(): ReportValidationType {
    return {
      [ReportValidationFields.COLUMN_REFERENCE]: this.reference,
      [ReportValidationFields.COLUMN_STATUS]: this.status,
      [ReportValidationFields.COLUMN_link]: this.link,
    };
  }
}
