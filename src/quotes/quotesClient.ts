import { AbstractRestfulClient, Parameters } from '../abstractRestfulClient';
import { GetResult } from '../getResult';
import { QuoteRequest } from './entities/QuoteRequest';
import { ValidateQuoteResult } from './entities/ValidateQuoteResult';

export type RequestQuoteRequestType = {
  agreeToReceiveCommunications: boolean;
  agreeSharingInformation: boolean;
  comments?: string;
  company: string;
  country: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  sku: string;
  vendor: string;
};

export type RequestQuoteIbmRequestType = {
  endCustomerRef?: string;
  reference?: string;
};

export class QuotesClient extends AbstractRestfulClient {
  protected basePath = '/quotes';

  public async requestQuote(
    postData: RequestQuoteRequestType,
    parameters: Parameters = {},
  ): Promise<GetResult<QuoteRequest>> {
    this.path = '/request';

    return new GetResult(QuoteRequest, await this.post(postData, parameters));
  }

  public async requestQuoteForVendor(
    vendor: string,
    postData: RequestQuoteIbmRequestType,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/request/${vendor}`;

    await this.post(postData, parameters);
  }

  public async deleteQuote(
    quoteReference: string,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${quoteReference}`;

    return await this.delete(parameters);
  }

  public async validateQuote(
    quoteReference: string,
    parameters: Parameters = {},
  ): Promise<GetResult<ValidateQuoteResult>> {
    this.path = `/request/${quoteReference}/validate`;

    return new GetResult(ValidateQuoteResult, await this.get(parameters));
  }
}
