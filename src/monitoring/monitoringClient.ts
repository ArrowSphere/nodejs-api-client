import { AbstractRestfulClient } from '../abstractRestfulClient';

export type ReportMonitoringType = {
  body: { [keys in string]: string | number | null };
  url: string;
  userAgent: string;
  type: string;
};

export class MonitoringClient extends AbstractRestfulClient {
  /**
   * The base path of the API
   */
  protected basePath = '/monitoring';

  /**
   * The path of the report endpoint
   */
  private REPORT_PATH = '/report';

  public sendReport(reports: ReportMonitoringType[]): Promise<void> {
    this.path = this.REPORT_PATH;

    return this.post(reports);
  }
}
