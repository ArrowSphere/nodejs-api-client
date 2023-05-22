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
}
