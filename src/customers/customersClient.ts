import { AbstractRestfulClient, Parameters } from '../abstractRestfulClient';
import { GetResult } from '../getResult';
import { DataCustomers } from './entities/dataCustomers';
import { DataInvitation } from './entities/dataInvitation';
import { DataUnknownLicenses } from './entities/dataUnknownLicenses';
import { DataListOrders } from '../orders';
import { CustomerContactList } from './entities/customers/customerContact/customerContactList';
import {
  CustomerContact,
  CustomerContactRoleType,
  CustomerContactTypeType,
} from './entities/customers/customerContact/customerContact';
import { CustomerFields, CustomerType } from './entities/customers/customer';
import { ContactFields } from './entities/customers/contact/contact';
import { AxiosResponse } from 'axios';
import { CustomerProvision } from './entities/customerProvision';
import { CustomerCredentials } from './entities/customerCredentials';

export enum CustomerMigrationAttributeFields {
  NAME = 'name',
  VALUE = 'value',
}

export enum CustomerMigrationPayloadFields {
  PROGRAM = 'program',
  ATTRIBUTES = 'attributes',
}

export type PostCustomerMigrationAttribute = {
  [CustomerMigrationAttributeFields.NAME]: string;
  [CustomerMigrationAttributeFields.VALUE]: string;
};

export type PostCustomerMigrationPayload = {
  [CustomerMigrationPayloadFields.PROGRAM]: string;
  [CustomerMigrationPayloadFields.ATTRIBUTES]?: PostCustomerMigrationAttribute[];
};

export enum CustomerContactPayloadFields {
  COLUMN_FIRST_NAME = 'firstName',
  COLUMN_LAST_NAME = 'lastName',
  COLUMN_EMAIL = 'email',
  COLUMN_PHONE = 'phone',
  COLUMN_USERNAME = 'username',
  COLUMN_TYPE = 'type',
  COLUMN_ROLE = 'role',
  COLUMN_ORGANIZATION_UNIT_ID = 'organizationUnitId',
  COLUMN_ORGANIZATION_UNIT_IDS = 'organizationUnitIds',
}

export type PostCustomerContactPayload = {
  [CustomerContactPayloadFields.COLUMN_FIRST_NAME]: string;
  [CustomerContactPayloadFields.COLUMN_LAST_NAME]: string;
  [CustomerContactPayloadFields.COLUMN_EMAIL]: string;
  [CustomerContactPayloadFields.COLUMN_USERNAME]?: string;
  [CustomerContactPayloadFields.COLUMN_PHONE]: string;
  [CustomerContactPayloadFields.COLUMN_TYPE]?: CustomerContactTypeType;
  [CustomerContactPayloadFields.COLUMN_ROLE]?: CustomerContactRoleType;
  [CustomerContactPayloadFields.COLUMN_ORGANIZATION_UNIT_ID]?: number;
  [CustomerContactPayloadFields.COLUMN_ORGANIZATION_UNIT_IDS]?: number[];
};

export type PostCustomerContact = {
  [ContactFields.COLUMN_FIRSTNAME]: string;
  [ContactFields.COLUMN_LASTNAME]: string;
  [ContactFields.COLUMN_EMAIL]: string;
  [ContactFields.COLUMN_PHONE]: string;
  [ContactFields.COLUMN_TYPE]: CustomerContactTypeType;
  [ContactFields.COLUMN_ROLE]: CustomerContactRoleType;
};

export type PostCustomerPayload = {
  [CustomerFields.COLUMN_COMPANY_NAME]: string;
  [CustomerFields.COLUMN_PARTNER_COMPANY_ID]?: string;
  [CustomerFields.COLUMN_ADDRESS_LINE_1]: string;
  [CustomerFields.COLUMN_ADDRESS_LINE_2]?: string;
  [CustomerFields.COLUMN_ZIP]: string;
  [CustomerFields.COLUMN_CITY]: string;
  [CustomerFields.COLUMN_COUNTRY_CODE]: string;
  [CustomerFields.COLUMN_STATE]?: string;
  [CustomerFields.COLUMN_RECEPTION_PHONE]: string;
  [CustomerFields.COLUMN_WEBSITE_URL]?: string;
  [CustomerFields.COLUMN_EMAIL_CONTACT]?: string;
  [CustomerFields.COLUMN_HEADCOUNT]?: number;
  [CustomerFields.COLUMN_TAX_NUMBER]?: string;
  [CustomerFields.COLUMN_REF]?: string;
  [CustomerFields.COLUMN_BILLING_ADDRESS_1]?: string;
  [CustomerFields.COLUMN_BILLING_ADDRESS_2]?: string;
  [CustomerFields.COLUMN_BILLING_CITY]?: string;
  [CustomerFields.COLUMN_BILLING_COUNTRY_CODE]?: string;
  [CustomerFields.COLUMN_BILLING_ID]?: string;
  [CustomerFields.COLUMN_BILLING_STATE]?: string;
  [CustomerFields.COLUMN_BILLING_ZIP_CODE]?: string;
  [CustomerFields.COLUMN_INTERNAL_REFERENCE]?: string;
  [CustomerFields.COLUMN_CONTACT]?: PostCustomerContact;
  [CustomerFields.COLUMN_REGISTRATION_NUMBER]?: string;
};

export enum PostCustomerInvitationFields {
  COLUMN_CONTACT_ID = 'contactId',
  COLUMN_POLICY = 'policy',
}

export type PostCustomerInvitation = {
  [PostCustomerInvitationFields.COLUMN_CONTACT_ID]: number;
  [PostCustomerInvitationFields.COLUMN_POLICY]: string;
};

export type APIResponseResourceCreated = {
  status: number;
  data: {
    reference: string;
  };
};

export type APIResponseCustomerUpdated = {
  status: number;
  data: {
    customers: CustomerType[];
  };
};

export type APIResponseCustomerMigration = {
  status: number;
};

export interface APIResponseError {
  status: number;
  error: string;
  messages: string;
}

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

  public async getCustomerByRef(
    customerRef: string,
    parameters: Parameters = {},
  ): Promise<GetResult<DataCustomers>> {
    this.path = `/${customerRef}`;

    return await this.getCustomers(parameters);
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

  public async deleteCustomer(
    customerReference: string,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${customerReference}`;
    return await this.delete(parameters);
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
    returnAxiosData = false,
  ): Promise<APIResponseResourceCreated | APIResponseError> {
    this.path = '';

    return await this.post(payload, parameters, {}, { returnAxiosData });
  }

  public async updateCustomer(
    customerReference: string,
    payload: Partial<PostCustomerPayload>,
    parameters: Parameters = {},
    returnAxiosData = false,
  ): Promise<APIResponseCustomerUpdated | APIResponseError> {
    this.path = `/${customerReference}`;

    return await this.patch<AxiosResponse['data']>(
      payload,
      parameters,
      {},
      { returnAxiosData },
    );
  }

  public async reactivateCustomer(
    customerRef: string,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${customerRef}`;

    return await this.put({}, parameters);
  }

  public async postCustomerInvitation(
    payload: PostCustomerInvitation,
    parameters: Parameters = {},
  ): Promise<GetResult<DataInvitation>> {
    this.path = `/invitations`;

    return new GetResult(DataInvitation, await this.post(payload, parameters));
  }

  public async postCustomerMigration(
    customerReference: string,
    payload: PostCustomerMigrationPayload,
    parameters: Parameters = {},
    returnAxiosData = false,
  ): Promise<APIResponseCustomerMigration | APIResponseError> {
    this.path = `/${customerReference}/migration`;

    return await this.post(payload, parameters, {}, { returnAxiosData });
  }

  public async postReconciliationCustomers(
    program: string,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = '/reconciliation';

    await this.post({ program }, parameters);
  }

  public async cancelCustomerMigration(
    customerReference: string,
    program: string,
  ): Promise<void | APIResponseError> {
    this.path = `/${customerReference}/migration`;

    await this.delete({ program });
  }

  public async postCustomerProvision(
    customerReference: string,
    payload: PostCustomerMigrationPayload,
  ): Promise<void> {
    this.path = `/${customerReference}/provision`;

    return await this.post(payload);
  }

  public async getCustomerProvision(
    customerReference: string,
    program: string,
  ): Promise<GetResult<CustomerProvision>> {
    this.path = `/${customerReference}/provision`;

    return new GetResult(CustomerProvision, await this.get({ program }));
  }

  public async getUnknownLicenses(
    customerReference: string,
    parameters: Parameters = {},
  ): Promise<GetResult<DataUnknownLicenses>> {
    this.path = `/${customerReference}/unknownlicenses`;

    return new GetResult(DataUnknownLicenses, await this.get(parameters));
  }

  public async getCustomerVendorCredentials(
    customerReference: string,
    vendorReference: string,
    parameters: Parameters = {},
  ): Promise<GetResult<CustomerCredentials>> {
    this.path = `/${customerReference}/vendor/${vendorReference}/credentials`;

    return new GetResult(CustomerCredentials, await this.get(parameters));
  }
}
