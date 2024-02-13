import { AbstractRestfulClient } from '../abstractRestfulClient';
import { GetResult } from '../getResult';
import { BillingExportAsyncRequest } from './entities/export/exportAsyncRequest';

export type BillingGenerateExportAsyncRequestPayload = {
  outputFormat?: {
    file: 'csv' | 'xlsx';
    date: string;
  };
  exportTypeReference: string;
  filters: {
    issueDate?: {
      from: string;
      to: string;
    };
    validationDate?: {
      from: string;
      to: string;
    };
    reportPeriod?: {
      from: string;
      to: string;
    };
    subscriptionDate?: {
      from: string;
      to: string;
    };
    createdAt?: {
      from: string;
      to: string;
    };
    classifications?: string[];
    vendors?: string[];
    programs?: string[];
    marketplaces?: string[];
    sequences?: string[];
    references?: string[];
    resellerXspRefs?: string[];
    resellerCompanyTags?: string[];
    customerXspRefs?: string[];
    vendorSubscriptionIds?: string[];
    friendlyNames?: string[];
    arrowSku?: string;
  };
  callbackUrl: string;
};

export class BillingClient extends AbstractRestfulClient {
  /**
   * The base path of the API
   */
  protected basePath = '/billing/erp';

  /**
   * Generates a billing export asynchronously.
   *
   * @param {BillingGenerateExportAsyncRequestPayload} payload - The request payload for generating the export.
   *
   * @return {Promise<GetResult<BillingExportAsyncRequest>>} - A promise that resolves to the result of the export request.
   */
  public async generateExportAsync(
    payload: BillingGenerateExportAsyncRequestPayload,
  ): Promise<GetResult<BillingExportAsyncRequest>> {
    this.path = `/exports/async`;

    return new GetResult(BillingExportAsyncRequest, await this.post(payload));
  }
}
