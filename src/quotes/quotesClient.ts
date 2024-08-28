import { AbstractRestfulClient, Parameters } from '../abstractRestfulClient';
import { GetResult } from '../getResult';
import { QuoteRequest } from './entities/QuoteRequest';
import { PutQuoteResult } from './entities/PutQuoteResult';

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

type QuoteCustomerType = {
  reference: string;
};
type QuoteRateType = {
  rateType: 'discount' | 'uplift';
  value: number;
};

type QuoteCustomerPricesType = {
  rate: QuoteRateType;
  value: number;
};

type QuoteArrowPricesType = {
  value: number;
};

type QuotePricesType = {
  customer: QuoteCustomerPricesType;
  partner?: QuoteCustomerPricesType;
  arrow?: QuoteArrowPricesType;
};

type QuoteItemType = {
  arrowSpherePriceBandSku: string;
  quantity: number;
  prices?: QuotePricesType;
};

export type PublishQuoteRequestType = {
  customer?: QuoteCustomerType;
  items: QuoteItemType[];
};

export type CreateQuoteRequestType = {
  customer?: QuoteCustomerType;
  items: QuoteItemType[];
  promotionCode?: string;
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
  ): Promise<GetResult<PutQuoteResult>> {
    this.path = `/request/${quoteReference}/validate`;

    return new GetResult(PutQuoteResult, await this.get(parameters));
  }

  public async createQuote(
    postData: CreateQuoteRequestType,
    parameters: Parameters = {},
  ): Promise<GetResult<PutQuoteResult>> {
    this.path = '';

    return new GetResult(PutQuoteResult, await this.post(postData, parameters));
  }

  public async publishQuote(
    quoteReference: string,
    postData: PublishQuoteRequestType,
    parameters: Parameters = {},
  ): Promise<GetResult<PutQuoteResult>> {
    this.path = `/request/${quoteReference}/publish`;

    return new GetResult(PutQuoteResult, await this.post(postData, parameters));
  }
}
