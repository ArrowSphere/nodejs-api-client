import { AbstractEntity } from '../../abstractEntity';
import { Reference, ReferenceType } from './reference';

export enum ReportReferenceLinkFields {
  COLUMN_REPORT = 'report',
}

export type ReportReferenceLinkType = {
  [ReportReferenceLinkFields.COLUMN_REPORT]: ReferenceType;
};

export class ReportReferenceLink extends AbstractEntity<ReportReferenceLinkType> {
  readonly #report;

  public constructor(reportReferenceLinkData: ReportReferenceLinkType) {
    super(reportReferenceLinkData);
    this.#report = new Reference(
      reportReferenceLinkData[ReportReferenceLinkFields.COLUMN_REPORT],
    );
  }

  get report() {
    return this.#report;
  }

  public toJSON(): ReportReferenceLinkType {
    return {
      [ReportReferenceLinkFields.COLUMN_REPORT]: this.report.toJSON(),
    };
  }
}
