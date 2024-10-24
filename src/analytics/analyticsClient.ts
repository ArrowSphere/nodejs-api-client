import { AbstractRestfulClient, Parameters } from '../abstractRestfulClient';
import { GetData, GetResult } from '../getResult';
import { DataAnalytics, DataAnalyticsType } from './entities/dataAnalytics';

export enum ListReportParametersFields {
  COLUMN_VENDOR = 'vendor',
  COLUMN_MARKETPLACE = 'marketplace',
  COLUMN_CLASSIFICATION = 'classification',
  COLUMN_LICENSE = 'license',
  COLUMN_MONTH = 'month',
  COLUMN_TAG = 'tag',
}

export type ListReportParametersType = Parameters & {
  [ListReportParametersFields.COLUMN_VENDOR]?: Array<string>;
  [ListReportParametersFields.COLUMN_MARKETPLACE]?: Array<string>;
  [ListReportParametersFields.COLUMN_CLASSIFICATION]?: Array<string>;
  [ListReportParametersFields.COLUMN_LICENSE]?: Array<string>;
  [ListReportParametersFields.COLUMN_MONTH]: string;
  [ListReportParametersFields.COLUMN_TAG]?: Array<string>;
};

export class AnalyticsClient extends AbstractRestfulClient {
  /**
   * The base path of the API
   */
  protected basePath = '/consumption';

  public async getMonthly(
    parameters: ListReportParametersType,
  ): Promise<GetResult<DataAnalytics>> {
    this.path = '/analytics/monthly';

    return new GetResult(
      DataAnalytics,
      await this.get<GetData<DataAnalyticsType>>(parameters),
    );
  }
}
