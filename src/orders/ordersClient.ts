import { AbstractRestfulClient, Parameters } from '../abstractRestfulClient';
import { GetResult } from '../getResult';
import { DataListOrders } from './entities/dataListOrders';
import { ReferenceLink } from './entities/referenceLink';
import { UpdateOrderResult } from './entities/orders/updateOrderResult';
import {
  AttachmentOrder,
  AttachmentsListOrder,
} from './entities/orders/attachment';

export enum CreateOrderInputFields {
  COLUMN_CUSTOMER = 'customer',
  COLUMN_REFERENCE = 'reference',
  COLUMN_PO_NUMBER = 'ponumber',
  COLUMN_END_CUSTOMER_PO_NUMBER = 'endCustomerPONumber',
  COLUMN_PRODUCTS = 'products',
  COLUMN_ARROW_SPHERE_PRICE_BAND_SKU = 'arrowSpherePriceBandSku',
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
  COLUMN_PRICE_VENDOR = 'vendor',
  COLUMN_PRICE_BUY = 'buy',
  COLUMN_PRICE_LIST = 'list',
  COLUMN_PRICE_RESELLER = 'reseller',
  COLUMN_PRICE_END_CUSTOMER = 'endCustomer',
  COLUMN_PRICE_CURRENCY = 'currency',
  COLUMN_PRICE_UNIT = 'unitPrice',
  COLUMN_PRICE_EXCHANGE_RATE = 'exchangeRate',
  COLUMN_EXTRA_INFORMATION = 'extraInformation',
  COLUMN_COTERMINOSITY_DATE = 'coterminosityDate',
  COLUMN_COTERMINOSITY_SUBSCRIPTION_REF = 'coterminositySubscriptionRef',
  COLUMN_PROMOTION_ID = 'promotionId',
  COLUMN_ORGANIZATION_UNIT_REF = 'organizationUnitRef',
  COLUMN_EAVS = 'eavs',
}

export enum scenarioType {
  INJECTION = 'injection',
  RECONCILIATION = 'reconciliation',
  PROVISION = 'provision',
}

export enum StaffTypeEnum {
  ICST = 'icst',
  ISR = 'isr',
  FCST = 'fcst',
  FSR = 'fsr',
  SOR = 'sor',
}

export declare type OrderProgramsType = {
  [key: string]: {
    [name: string]: string;
  };
};

export type CreateOrderInputType = {
  [CreateOrderInputFields.COLUMN_CUSTOMER]: {
    [CreateOrderInputFields.COLUMN_REFERENCE]: string;
    [CreateOrderInputFields.COLUMN_PO_NUMBER]?: string;
    [CreateOrderInputFields.COLUMN_END_CUSTOMER_PO_NUMBER]?: string;
  };
  [CreateOrderInputFields.COLUMN_SCENARIO]?: scenarioType;
  [CreateOrderInputFields.COLUMN_SCHEDULE_DATE]?: string;
  [CreateOrderInputFields.COLUMN_PRODUCTS]: Array<CreateOrderProductType>;
  [CreateOrderInputFields.COLUMN_EXTRA_INFORMATION]?: {
    programs: OrderProgramsType;
  };
  [CreateOrderInputFields.COLUMN_ORGANIZATION_UNIT_REF]?: string;
};

export type CreateOrderProductType = {
  [CreateOrderInputFields.COLUMN_ARROW_SPHERE_PRICE_BAND_SKU]?: string;
  [CreateOrderInputFields.COLUMN_SKU]?: string;
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
  [CreateOrderInputFields.COLUMN_COTERMINOSITY_DATE]?: string;
  [CreateOrderInputFields.COLUMN_COTERMINOSITY_SUBSCRIPTION_REF]?: string;
  [CreateOrderInputFields.COLUMN_PROMOTION_ID]?: string;
  [CreateOrderInputFields.COLUMN_PRICE]?: {
    [CreateOrderInputFields.COLUMN_PRICE_VENDOR]?: {
      [CreateOrderInputFields.COLUMN_PRICE_CURRENCY]?: string;
      [CreateOrderInputFields.COLUMN_PRICE_EXCHANGE_RATE]?: number;
    };
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
  [CreateOrderInputFields.COLUMN_EAVS]?: Record<string, string>;
};

export enum UpdateOrderInputFields {
  COLUMN_PO_NUMBER = 'PO_number',
  COLUMN_END_CUSTOMER_PO_NUMBER = 'end_customer_PO_number',
}

export type UpdateOrderInputType = {
  [UpdateOrderInputFields.COLUMN_PO_NUMBER]?: string;
  [UpdateOrderInputFields.COLUMN_END_CUSTOMER_PO_NUMBER]?: string;
};

export enum UpdateContributorItemOrderInputFields {
  COLUMN_TYPE = 'type',
  COLUMN_STAFF_ID = 'staffId',
}

export type UpdateContributorItemOrderInputType = {
  [UpdateContributorItemOrderInputFields.COLUMN_TYPE]: StaffTypeEnum;
  [UpdateContributorItemOrderInputFields.COLUMN_STAFF_ID]: number | null;
};

export enum UpdateContributorOrderInputFields {
  COLUMN_CONTRIBUTOR = 'contributor',
}

export type UpdateContributorOrderInputType = {
  [UpdateContributorOrderInputFields.COLUMN_CONTRIBUTOR]: UpdateContributorItemOrderInputType[];
};

export enum UpdateAdditionalInformationItemOrderInputFields {
  COLUMN_NAME = 'name',
  COLUMN_VALUE = 'value',
}

export type UpdateAdditionalInformationItemOrderInputType = {
  [UpdateAdditionalInformationItemOrderInputFields.COLUMN_NAME]: string;
  [UpdateAdditionalInformationItemOrderInputFields.COLUMN_VALUE]: string;
};

export enum UpdateAdditionalInformationOrderInputFields {
  COLUMN_DATA = 'data',
}

export type UpdateAdditionalInformationOrderInputType = {
  [UpdateAdditionalInformationOrderInputFields.COLUMN_DATA]: UpdateAdditionalInformationItemOrderInputType[];
};

export enum UploadAttachmentOrderInputFields {
  COLUMN_NAME = 'name',
  COLUMN_FILE_ENCODED = 'fileEncoded',
}

export type UploadAttachmentOrderInputType = {
  [UploadAttachmentOrderInputFields.COLUMN_NAME]: string;
  [UploadAttachmentOrderInputFields.COLUMN_FILE_ENCODED]: string;
};

export type InjectionScenarioOrderInputType = {
  [UploadAttachmentOrderInputFields.COLUMN_FILE_ENCODED]: string;
};

export class OrdersClient extends AbstractRestfulClient {
  /**
   * The base path of the API
   */
  protected basePath = '/orders';

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

  public async updateOrder(
    orderReference: string,
    payload: UpdateOrderInputType,
    parameters: Parameters = {},
  ): Promise<GetResult<UpdateOrderResult>> {
    this.path = `/${orderReference}`;

    return new GetResult(
      UpdateOrderResult,
      await this.patch(payload, parameters),
    );
  }

  public async archiveOrder(
    orderReference: string,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${orderReference}/archive`;

    await this.patch(undefined, parameters);
  }

  public async cancelOrder(
    orderReference: string,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${orderReference}/cancel`;

    await this.patch(undefined, parameters);
  }

  public async rejectGradedOrder(
    orderReference: string,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${orderReference}/rejectGraded`;

    await this.patch(undefined, parameters);
  }

  public async resubmitOrder(
    orderReference: string,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${orderReference}/resubmit`;

    await this.patch(undefined, parameters);
  }

  public async validateOrder(
    orderReference: string,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${orderReference}/validate`;

    await this.patch(undefined, parameters);
  }

  public async updateStaffContributorsOrder(
    orderReference: string,
    payload: UpdateContributorOrderInputType,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${orderReference}/contributor`;

    await this.patch(payload, parameters);
  }

  public async updateAdditionalInformationOrder(
    orderReference: string,
    payload: UpdateAdditionalInformationOrderInputType,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${orderReference}/additionalInformation`;

    await this.patch(payload, parameters);
  }

  public async getAttachmentsOrder(
    orderReference: string,
    perPage?: number,
    page?: number,
    parameters: Parameters = {},
  ): Promise<GetResult<AttachmentsListOrder>> {
    this.path = `/${orderReference}/attachment`;
    if (perPage) {
      this.setPerPage(perPage);
    }
    if (page) {
      this.setPage(page);
    }

    return new GetResult(AttachmentsListOrder, await this.get(parameters));
  }

  public async deleteAttachmentOrder(
    orderReference: string,
    name: string,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${orderReference}/attachment/${name}`;

    await this.delete(parameters);
  }

  public async uploadAttachmentOrder(
    orderReference: string,
    payload: UploadAttachmentOrderInputType,
    parameters: Parameters = {},
  ): Promise<GetResult<AttachmentOrder>> {
    this.path = `/${orderReference}/attachment`;

    return new GetResult(AttachmentOrder, await this.post(payload, parameters));
  }

  public async injectionScenarioOrder(
    payload: InjectionScenarioOrderInputType,
    parameters: Parameters = {},
  ): Promise<GetResult<AttachmentOrder>> {
    this.path = `/injectionScenario`;

    return new GetResult(AttachmentOrder, await this.post(payload, parameters));
  }
}
