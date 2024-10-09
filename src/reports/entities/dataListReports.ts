import { AbstractEntity } from '../../abstractEntity';
import { Report, ReportType } from './report';

export enum DataListReportsFields {
  COLUMN_REPORTS = 'reports',
}

export type DataListReportsType = {
  [DataListReportsFields.COLUMN_REPORTS]: Array<ReportType>;
};

export class DataListReports extends AbstractEntity<DataListReportsType> {
  readonly #reports: Array<Report>;

  public constructor(listReportDataInput: DataListReportsType) {
    super(listReportDataInput);

    this.#reports = listReportDataInput[
      DataListReportsFields.COLUMN_REPORTS
    ].map((report: ReportType) => new Report(report));
  }

  get reports(): Array<Report> {
    return this.#reports;
  }

  public toJSON(): DataListReportsType {
    return {
      [DataListReportsFields.COLUMN_REPORTS]: this.reports.map(
        (report: Report) => report.toJSON(),
      ),
    };
  }
}
