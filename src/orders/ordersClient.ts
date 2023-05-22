import { AbstractRestfulClient, Parameters } from '../abstractRestfulClient';
import { GetResult } from '../getResult';
import { DataListOrders } from './entities/dataListOrders';
import { ReferenceLink } from './entities/referenceLink';

export enum CreateOrderInputFields {
  COLUMN_CUSTOMER = 'customer',
  COLUMN_REFERENCE = 'reference',
  COLUMN_PO_NUMBER = 'ponumber',
  COLUMN_PRODUCTS = 'products',
  COLUMN_SKU = 'sku',
  COLUMN_QUANTITY = 'quantity',
  COLUMN_SUBSCRIPTION = 'subscription',
  COLUMN_PARENT_LICENSE_ID = 'parentLicenseId',
  COLUMN_PARENT_SKU = 'parentSku',
  COLUMN_PERIODICITY = 'periodicity',
  COLUMN_TERM = 'term',
  COLUMN_DISCOUNT = 'discount',
  COLUMN_UPLIFT = 'uplift',
  COLUMN_AUTO_RENEW = 'autoRenew',
  COLUMN_EFFECTIVE_START_DATE = 'effectiveStartDate',
  COLUMN_EFFECTIVE_END_DATE = 'effectiveEndDate',
  COLUMN_VENDOR_REFERENCE_ID = 'vendorReferenceId',
  COLUMN_PARENT_VENDOR_REFERENCE_ID = 'parentVendorReferenceId',
  COLUMN_FRIENDLY_NAME = 'friendlyName',
  COLUMN_COMMENT1 = 'comment1',
  COLUMN_COMMENT2 = 'comment2',
  COLUMN_SCENARIO = 'scenario',
  COLUMN_SCHEDULE_DATE = 'scheduledDate',
  COLUMN_PRICE = 'price',
  COLUMN_PRICE_BUY = 'buy',
  COLUMN_PRICE_LIST = 'list',
  COLUMN_PRICE_RESELLER = 'reseller',
  COLUMN_PRICE_END_CUSTOMER = 'endCustomer',
  COLUMN_PRICE_CURRENCY = 'currency',
  COLUMN_PRICE_UNIT = 'unitPrice',
  COLUMN_PRICE_EXCHANGE_RATE = 'exchangeRate',
}

export enum scenarioType {
  INJECTION = 'injection',
  RECONCILIATION = 'reconciliation',
  PROVISION = 'provision',
}

export type CreateOrderInputType = {
  [CreateOrderInputFields.COLUMN_CUSTOMER]: {
    [CreateOrderInputFields.COLUMN_REFERENCE]: string;
    [CreateOrderInputFields.COLUMN_PO_NUMBER]?: string;
  };
  [CreateOrderInputFields.COLUMN_SCENARIO]?: scenarioType;
  [CreateOrderInputFields.COLUMN_SCHEDULE_DATE]?: string;
  [CreateOrderInputFields.COLUMN_PRODUCTS]: Array<{
    [CreateOrderInputFields.COLUMN_SKU]: string;
    [CreateOrderInputFields.COLUMN_QUANTITY]: number;
    [CreateOrderInputFields.COLUMN_SUBSCRIPTION]?: {
      [CreateOrderInputFields.COLUMN_REFERENCE]: string;
    };
    [CreateOrderInputFields.COLUMN_PARENT_LICENSE_ID]?: string;
    [CreateOrderInputFields.COLUMN_PARENT_SKU]?: string;
    [CreateOrderInputFields.COLUMN_PERIODICITY]?: string | number;
    [CreateOrderInputFields.COLUMN_TERM]?: string | number;
    [CreateOrderInputFields.COLUMN_DISCOUNT]?: number;
    [CreateOrderInputFields.COLUMN_UPLIFT]?: number;
    [CreateOrderInputFields.COLUMN_AUTO_RENEW]?: boolean;
    [CreateOrderInputFields.COLUMN_EFFECTIVE_START_DATE]?: string;
    [CreateOrderInputFields.COLUMN_EFFECTIVE_END_DATE]?: string;
    [CreateOrderInputFields.COLUMN_VENDOR_REFERENCE_ID]?: string;
    [CreateOrderInputFields.COLUMN_PARENT_VENDOR_REFERENCE_ID]?: string;
    [CreateOrderInputFields.COLUMN_FRIENDLY_NAME]?: string;
    [CreateOrderInputFields.COLUMN_COMMENT1]?: string;
    [CreateOrderInputFields.COLUMN_COMMENT2]?: string;
    [CreateOrderInputFields.COLUMN_PRICE]?: {
      [CreateOrderInputFields.COLUMN_PRICE_BUY]?: {
        [CreateOrderInputFields.COLUMN_PRICE_CURRENCY]?: string;
        [CreateOrderInputFields.COLUMN_PRICE_UNIT]?: number;
        [CreateOrderInputFields.COLUMN_PRICE_EXCHANGE_RATE]?: number;
      };
      [CreateOrderInputFields.COLUMN_PRICE_LIST]?: {
        [CreateOrderInputFields.COLUMN_PRICE_CURRENCY]?: string;
        [CreateOrderInputFields.COLUMN_PRICE_UNIT]?: number;
        [CreateOrderInputFields.COLUMN_PRICE_EXCHANGE_RATE]?: number;
      };
      [CreateOrderInputFields.COLUMN_PRICE_RESELLER]?: {
        [CreateOrderInputFields.COLUMN_PRICE_CURRENCY]?: string;
        [CreateOrderInputFields.COLUMN_PRICE_UNIT]?: number;
        [CreateOrderInputFields.COLUMN_PRICE_EXCHANGE_RATE]?: number;
      };
      [CreateOrderInputFields.COLUMN_PRICE_END_CUSTOMER]?: {
        [CreateOrderInputFields.COLUMN_PRICE_CURRENCY]?: string;
        [CreateOrderInputFields.COLUMN_PRICE_UNIT]?: number;
        [CreateOrderInputFields.COLUMN_PRICE_EXCHANGE_RATE]?: number;
      };
    };
  }>;
};

export class OrdersClient extends AbstractRestfulClient {
  /**
   * The base path of the API
   */
  protected basePath = '/index.php/api/orders';

  public async create(
    postData: CreateOrderInputType,
    parameters: Parameters = {},
  ): Promise<GetResult<ReferenceLink>> {
    return new GetResult(ReferenceLink, await this.post(postData, parameters));
  }

  public async getListOrders(
    perPage = 25,
    page = 1,
    parameters: Parameters = {},
  ): Promise<GetResult<DataListOrders>> {
    this.setPerPage(perPage);
    this.setPage(page);

    return new GetResult(DataListOrders, await this.get(parameters));
  }

  public async getOrder(
    orderReference: string,
    parameters: Parameters = {},
  ): Promise<GetResult<DataListOrders>> {
    this.path = `/${orderReference}`;

    return new GetResult(DataListOrders, await this.get(parameters));
  }
}
