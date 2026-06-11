import { AbstractRestfulClient, Parameters } from '../abstractRestfulClient';
import {
  Alert,
  AlertFields,
  AlertFilters,
  AlertFormatEnum,
  AlertFrequencyEnum,
} from './entities/alert/alert';
import { CreateAlert } from './entities/alert/createAlert';
import { GetResult } from '../getResult';
import { AlertList } from './entities/alert/listAlert';

export type ReportMonitoringType = {
  body: { [keys in string]: string | number | null };
  url: string;
  userAgent: string;
  type: string;
};

export type CreateAlertPayload = {
  [AlertFields.COLUMN_CATEGORY_ID]: number;
  [AlertFields.COLUMN_NAME]: string;
  [AlertFields.COLUMN_FREQUENCY]: AlertFrequencyEnum;
  [AlertFields.COLUMN_RECIPIENT]: string;
  [AlertFields.COLUMN_FORMAT]: AlertFormatEnum;
  [AlertFields.COLUMN_FILTERS]: AlertFilters;
};

export type UpdateAlertPayload = Partial<
  Omit<CreateAlertPayload, AlertFields.COLUMN_CATEGORY_ID>
>;

export class MonitoringClient extends AbstractRestfulClient {
  /**
   * The base path of the API
   */
  protected basePath = '/monitoring';

  /**
   * The path of the report endpoint
   */
  private REPORT_PATH = '/report';

  /**
   * The path of the alert endpoint
   */
  private ALERT_PATH = '/alerts';

  public sendReport(report: ReportMonitoringType): Promise<void> {
    this.path = this.REPORT_PATH;

    return this.post(report);
  }

  public createAlert(
    payload: CreateAlertPayload,
  ): Promise<GetResult<CreateAlert>> {
    this.path = this.ALERT_PATH;

    return this.post(payload);
  }

  public listAlerts(
    parameters: Parameters = {},
  ): Promise<GetResult<AlertList>> {
    this.path = this.ALERT_PATH;

    return this.get(parameters);
  }

  public getAlert(alertId: number): Promise<GetResult<Alert>> {
    this.path = this.ALERT_PATH + `/${alertId}`;

    return this.get();
  }

  public updateAlert(
    alertId: number,
    payload: UpdateAlertPayload,
  ): Promise<GetResult<Alert>> {
    this.path = this.ALERT_PATH + `/${alertId}`;

    return this.patch(payload);
  }

  public deleteAlert(alertId: number): Promise<void> {
    this.path = this.ALERT_PATH + `/${alertId}`;

    return this.delete();
  }
}
