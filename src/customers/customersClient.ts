import { AbstractRestfulClient, Parameters } from '../abstractRestfulClient';
import { GetResult } from '../getResult';
import { DataCustomers } from './entities/dataCustomers';
import { DataInvitation } from './entities/dataInvitation';
import { DataListOrders } from '../orders';
import { CustomerContactList } from './entities/customers/customerContact/customerContactList';
import {
  CustomerContact,
  CustomerContactRoleType,
  CustomerContactTypeType,
} from './entities/customers/customerContact/customerContact';

// type APIGatewayProxyResult = {
//   statusCode: number;
//   headers?:
//       | {
//             [header: string]: boolean | number | string;
//         }
//       | undefined;
//   multiValueHeaders?:
//       | {
//             [header: string]: Array<boolean | number | string>;
//         }
//       | undefined;
//   body: string;
//   isBase64Encoded?: boolean | undefined;
// };

export enum CustomerContactPayloadFields {
  COLUMN_FIRST_NAME = 'firstName',
  COLUMN_LAST_NAME = 'lastName',
  COLUMN_EMAIL = 'email',
  COLUMN_PHONE = 'phone',
  COLUMN_USERNAME = 'username',
  COLUMN_TYPE = 'type',
  COLUMN_ROLE = 'role',
}

export type PostCustomerContactPayload = {
  [CustomerContactPayloadFields.COLUMN_FIRST_NAME]: string;
  [CustomerContactPayloadFields.COLUMN_LAST_NAME]: string;
  [CustomerContactPayloadFields.COLUMN_EMAIL]: string;
  [CustomerContactPayloadFields.COLUMN_USERNAME]: string;
  [CustomerContactPayloadFields.COLUMN_PHONE]: string;
  [CustomerContactPayloadFields.COLUMN_TYPE]: CustomerContactTypeType;
  [CustomerContactPayloadFields.COLUMN_ROLE]: CustomerContactRoleType;
};

export enum CustomerPayloadFields {
  COLUMN_COMPANY_NAME = 'companyName',
  COLUMN_PARTNER_COMPANY_ID = 'partnerCompanyId',
  COLUMN_ADDRESS_LINE1 = 'addressLine1',
  COLUMN_ADDRESS_LINE2 = 'addressLine2',
  COLUMN_ADDRESS_ZIP = 'zip',
  COLUMN_CITY = 'city',
  COLUMN_COUNTRY_CODE = 'countryCode',
  COLUMN_STATE = 'state',
  COLUMN_RECEPTION_PHONE = 'receptionPhone',
  COLUMN_WEBSITE_URL = 'websiteUrl',
  COLUMN_EMAIL_CONTACT = 'emailContact',
  COLUMN_HEAD_COUNT = 'headcount',
  COLUMN_TAX_NUMBER = 'taxNumber',
  COLUMN_REF = 'ref',
  COLUMN_BILLING_ID = 'billingId',
  COLUMN_INTERNAL_REFERENCE = 'internalReference',
  COLUMN_TSE_ACCOUNT_STATUS = 'tseAccountStatus',
  COLUMN_ACTIVE_WITH_ARROW = 'activeWithArrow',
  COLUMN_CONTACT = 'contact',
}

export type PostCustomerPayload = {
  [CustomerPayloadFields.COLUMN_COMPANY_NAME]: string;
  [CustomerPayloadFields.COLUMN_PARTNER_COMPANY_ID]?: string;
  [CustomerPayloadFields.COLUMN_ADDRESS_LINE1]: string;
  [CustomerPayloadFields.COLUMN_ADDRESS_LINE2]?: string;
  [CustomerPayloadFields.COLUMN_ADDRESS_ZIP]: string;
  [CustomerPayloadFields.COLUMN_CITY]: string;
  [CustomerPayloadFields.COLUMN_COUNTRY_CODE]: string;
  [CustomerPayloadFields.COLUMN_STATE]?: string;
  [CustomerPayloadFields.COLUMN_RECEPTION_PHONE]: string;
  [CustomerPayloadFields.COLUMN_WEBSITE_URL]?: string;
  [CustomerPayloadFields.COLUMN_EMAIL_CONTACT]?: string;
  [CustomerPayloadFields.COLUMN_HEAD_COUNT]?: number;
  [CustomerPayloadFields.COLUMN_TAX_NUMBER]?: string;
  [CustomerPayloadFields.COLUMN_REF]?: string;
  [CustomerPayloadFields.COLUMN_BILLING_ID]?: string;
  [CustomerPayloadFields.COLUMN_INTERNAL_REFERENCE]?: string;
  [CustomerPayloadFields.COLUMN_TSE_ACCOUNT_STATUS]?: string;
  [CustomerPayloadFields.COLUMN_ACTIVE_WITH_ARROW]?: boolean;
  [CustomerPayloadFields.COLUMN_CONTACT]?: PostCustomerContactPayload;
};

export type PatchCustomerPayload = {
  [CustomerPayloadFields.COLUMN_COMPANY_NAME]?: string;
  [CustomerPayloadFields.COLUMN_PARTNER_COMPANY_ID]?: string;
  [CustomerPayloadFields.COLUMN_ADDRESS_LINE1]: string;
  [CustomerPayloadFields.COLUMN_ADDRESS_LINE2]?: string;
  [CustomerPayloadFields.COLUMN_ADDRESS_ZIP]?: string;
  [CustomerPayloadFields.COLUMN_CITY]?: string;
  [CustomerPayloadFields.COLUMN_COUNTRY_CODE]?: string;
  [CustomerPayloadFields.COLUMN_STATE]?: string;
  [CustomerPayloadFields.COLUMN_RECEPTION_PHONE]?: string;
  [CustomerPayloadFields.COLUMN_WEBSITE_URL]?: string;
  [CustomerPayloadFields.COLUMN_EMAIL_CONTACT]?: string;
  [CustomerPayloadFields.COLUMN_HEAD_COUNT]?: number;
  [CustomerPayloadFields.COLUMN_TAX_NUMBER]?: string;
  [CustomerPayloadFields.COLUMN_REF]?: string;
  [CustomerPayloadFields.COLUMN_BILLING_ID]?: string;
  [CustomerPayloadFields.COLUMN_INTERNAL_REFERENCE]?: string;
  [CustomerPayloadFields.COLUMN_TSE_ACCOUNT_STATUS]?: string;
  [CustomerPayloadFields.COLUMN_ACTIVE_WITH_ARROW]?: boolean;
  [CustomerPayloadFields.COLUMN_CONTACT]?: PostCustomerContactPayload;
};

export type PatchCustomerContactPayload = {
  [Property in keyof PostCustomerContactPayload]?: PostCustomerContactPayload[Property];
};

export class CustomersClient extends AbstractRestfulClient {
  /**
   * The base path of the API
   */
  protected basePath = '/customers';

  public async getCustomers(
    parameters: Parameters = {},
  ): Promise<GetResult<DataCustomers>> {
    return new GetResult(DataCustomers, await this.get(parameters));
  }

  public async getCustomerOrders(
    customerRef: string,
    perPage = 25,
    page = 1,
    parameters: Parameters = {},
  ): Promise<GetResult<DataListOrders>> {
    this.setPerPage(perPage);
    this.setPage(page);

    this.path = `/${customerRef}/orders`;

    return new GetResult(DataListOrders, await this.get(parameters));
  }

  public async getCustomerInvitation(
    codeInvitation: string,
    parameters: Parameters = {},
  ): Promise<GetResult<DataInvitation>> {
    this.path = `/invitations/${codeInvitation}`;

    return new GetResult(DataInvitation, await this.get(parameters));
  }

  public async getCustomerContactList(
    customerReference: string,
    parameters: Parameters = {},
  ): Promise<GetResult<CustomerContactList>> {
    this.path = `/${customerReference}/contacts`;
    return new GetResult(CustomerContactList, await this.get(parameters));
  }

  public async postCustomerContact(
    customerReference: string,
    payload: PostCustomerContactPayload,
    parameters: Parameters = {},
  ): Promise<GetResult<CustomerContact>> {
    this.path = `/${customerReference}/contacts`;

    return new GetResult(CustomerContact, await this.post(payload, parameters));
  }

  public async getCustomerContact(
    customerReference: string,
    contactReference: string,
    parameters: Parameters = {},
  ): Promise<GetResult<CustomerContact>> {
    this.path = `/${customerReference}/contacts/${contactReference}`;
    return new GetResult(CustomerContact, await this.get(parameters));
  }

  public async deleteCustomerContact(
    customerReference: string,
    contactReference: string,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${customerReference}/contacts/${contactReference}`;
    return await this.delete(parameters);
  }

  public async patchCustomerContact(
    customerReference: string,
    contactReference: string,
    payload: PatchCustomerContactPayload,
    parameters: Parameters = {},
  ): Promise<GetResult<CustomerContact>> {
    this.path = `/${customerReference}/contacts/${contactReference}`;

    return new GetResult(
      CustomerContact,
      await this.patch(payload, parameters),
    );
  }

  public async createCustomer(
    payload: PostCustomerPayload,
    parameters: Parameters = {},
  ): Promise<any> {
    this.path = '';

    return await this.post(payload, parameters);
    // try {
    //   const result = await this.post(payload, parameters);
    // } catch (error) {

    // }
  }

  public async updateCustomer(
    customerReference: string,
    payload: PatchCustomerPayload,
    parameters: Parameters = {},
  ): Promise<any> {
    this.path = `/${customerReference}`;

    return await this.patch(payload, parameters);
    // try {
    //   const result = await this.post(payload, parameters);
    // } catch (error) {

    // }
  }
}
