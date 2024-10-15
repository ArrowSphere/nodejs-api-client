import { AbstractRestfulClient, Parameters } from '../abstractRestfulClient';
import { GetResult } from '../getResult';
import { QuoteRequest } from './entities/QuoteRequest';
import { PutQuoteResult } from './entities/PutQuoteResult';
import { QuoteComments } from './entities/QuoteComments';

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
  fixedPrice: number;
};

type QuoteCustomerPricesType = {
  rate: QuoteRateType;
  value: number;
};

type QuoteArrowPricesType = {
  value: number;
};

type QuotePricesType = {
  customer?: QuoteCustomerPricesType;
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
  startDate?: string;
  endDate?: string;
  name?: string;
};

export type CreateQuoteRequestType = {
  customer?: QuoteCustomerType;
  items?: QuoteItemType[];
  promotionCode?: string;
};

export type CreateCommentType = {
  body: string;
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
    this.path = `/${quoteReference}/validate`;

    return new GetResult(PutQuoteResult, await this.get(parameters));
  }

  public async reopenQuote(
    quoteReference: string,
    parameters: Parameters = {},
  ): Promise<GetResult<PutQuoteResult>> {
    this.path = `/${quoteReference}/reopen`;

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
    this.path = `/${quoteReference}/publish`;

    return new GetResult(PutQuoteResult, await this.post(postData, parameters));
  }

  public async addCommentToQuote(
    quoteReference: string,
    postData: CreateCommentType,
    parameters: Parameters = {},
  ): Promise<GetResult<QuoteComments>> {
    this.path = `/${quoteReference}/comments`;

    return new GetResult(QuoteComments, await this.post(postData, parameters));
  }

  public async deleteQuoteComment(
    quoteReference: string,
    commentId: string,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${quoteReference}/comments/${commentId}`;

    return await this.delete(parameters);
  }
}
