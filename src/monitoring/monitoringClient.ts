import { AbstractRestfulClient, Parameters } from '../abstractRestfulClient';
import {
  Alert,
  AlertFields,
  AlertFormatEnum,
  AlertFrequencyEnum,
} from './entities/alert/alert';
import { CreateAlert } from './entities/alert/createAlert';
import { GetResult } from '../getResult';
import { AlertList } from './entities/alert/listAlert';
import { AlertFiltersType } from './entities/alert/filters/alertFilters';

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
  [AlertFields.COLUMN_FILTERS]: AlertFiltersType;
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

  public async createAlert(
    payload: CreateAlertPayload,
  ): Promise<GetResult<CreateAlert>> {
    this.path = this.ALERT_PATH;

    return new GetResult(CreateAlert, await this.post(payload));
  }

  public async listAlerts(
    parameters: Parameters = {},
  ): Promise<GetResult<AlertList>> {
    this.path = this.ALERT_PATH;

    return new GetResult(AlertList, await this.get(parameters));
  }

  public async getAlert(alertId: number): Promise<GetResult<Alert>> {
    this.path = this.ALERT_PATH + `/${alertId}`;

    return new GetResult(Alert, await this.get());
  }

  public async updateAlert(
    alertId: number,
    payload: UpdateAlertPayload,
  ): Promise<GetResult<Alert>> {
    this.path = this.ALERT_PATH + `/${alertId}`;

    return new GetResult(Alert, await this.patch(payload));
  }

  public async deleteAlert(alertId: number): Promise<void> {
    this.path = this.ALERT_PATH + `/${alertId}`;

    return this.delete();
  }
}
