import { AbstractRestfulClient, Parameters } from '../abstractRestfulClient';
import { GetResult } from '../getResult';
import { DataListReports } from './entities/dataListReports';
import { ReportReferenceLink } from './entities/reportReferenceLink';
import { ReferenceType } from './entities/reference';
import { ReportValidationReference } from './entities/reportValidationReference';

export enum CreateReportInputFields {
  COLUMN_PRODUCTS = 'products',
  COLUMN_SUBSCRIPTION = 'subscription',
  COLUMN_MONTH = 'month',
}

export enum CreateReportProductFields {
  COLUMN_SKU = 'sku',
  COLUMN_QUANTITY = 'quantity',
  COLUMN_CUSTOMER = 'customer',
}

export type CreateReportInputType = {
  [CreateReportInputFields.COLUMN_PRODUCTS]: Array<CreateReportProductType>;
  [CreateReportInputFields.COLUMN_SUBSCRIPTION]: ReferenceType;
  [CreateReportInputFields.COLUMN_MONTH]: string;
};

export type CreateReportProductType = {
  [CreateReportProductFields.COLUMN_SKU]: string;
  [CreateReportProductFields.COLUMN_QUANTITY]: number;
  [CreateReportProductFields.COLUMN_CUSTOMER]: ReferenceType;
};

export class ReportsClient extends AbstractRestfulClient {
  /**
   * The base path of the API
   */
  protected basePath = '/reports';

  public async create(
    postData: CreateReportInputType,
    parameters: Parameters = {},
  ): Promise<GetResult<ReportReferenceLink>> {
    return new GetResult(
      ReportReferenceLink,
      await this.post(postData, parameters),
    );
  }

  public async getListReports(
    perPage = 25,
    page = 1,
    month?: string,
    parameters: Parameters = {},
  ): Promise<GetResult<DataListReports>> {
    this.setPerPage(perPage);
    this.setPage(page);

    return new GetResult(
      DataListReports,
      await this.get({
        ...parameters,
        month,
      }),
    );
  }

  public async getReport(
    reportReference: string,
    parameters: Parameters = {},
  ): Promise<GetResult<DataListReports>> {
    this.path = `/${reportReference}`;

    return new GetResult(DataListReports, await this.get(parameters));
  }

  public async validateReport(
    reportReference: string,
    parameters: Parameters = {},
  ): Promise<GetResult<ReportValidationReference>> {
    this.path = `/${reportReference}`;

    return new GetResult(
      ReportValidationReference,
      await this.patch(parameters),
    );
  }
}
