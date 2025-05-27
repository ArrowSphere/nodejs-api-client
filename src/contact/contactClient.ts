import { AbstractRestfulClient, Parameters } from '../abstractRestfulClient';
import { GetData, GetResult } from '../getResult';
import { ContactCreate } from './entities/contactCreate';
import { Contact, ContactType } from './entities/contact';
import { ContactList } from './entities/contactList';

export enum ContactRequestFields {
  COLUMN_FIRSTNAME = 'firstname',
  COLUMN_LASTNAME = 'lastname',
  COLUMN_EMAIL = 'email',
  COLUMN_PHONE = 'phone',
  COLUMN_ERP_ID = 'erpId',
  COLUMN_TYPE = 'type',
  COLUMN_ROLE = 'role',
}

export type ContactRequestType = {
  [ContactRequestFields.COLUMN_FIRSTNAME]: string;
  [ContactRequestFields.COLUMN_LASTNAME]: string;
  [ContactRequestFields.COLUMN_EMAIL]: string;
  [ContactRequestFields.COLUMN_PHONE]: string;
  [ContactRequestFields.COLUMN_ERP_ID]: string;
  [ContactRequestFields.COLUMN_TYPE]: string;
  [ContactRequestFields.COLUMN_ROLE]: string;
};

export enum AnonymizeContactsPayloadFields {
  COLUMN_PARTNER_REF = 'partnerRef',
  COLUMN_CONTACTS = 'contacts',
}

export type AnonymizeContactsPayload = {
  [AnonymizeContactsPayloadFields.COLUMN_PARTNER_REF]?: string;
  [AnonymizeContactsPayloadFields.COLUMN_CONTACTS]: number[];
};

export class ContactClient extends AbstractRestfulClient {
  /**
   * The base path of the API
   */
  protected basePath = '/contacts';

  public async createContact(
    postData: ContactRequestType,
    parameters: Parameters = {},
  ): Promise<GetResult<ContactCreate>> {
    return new GetResult(ContactCreate, await this.post(postData, parameters));
  }

  public async listContact(
    perPage = 25,
    page = 1,
    parameters: Parameters = {},
  ): Promise<GetResult<ContactList>> {
    this.setPerPage(perPage);
    this.setPage(page);

    return new GetResult(ContactList, await this.get(parameters));
  }

  public async getContact(
    contactReference: string,
    parameters: Parameters = {},
  ): Promise<GetResult<Contact>> {
    this.path = `/${contactReference}`;

    return new GetResult(Contact, await this.get(parameters));
  }

  public async updateContact(
    contactReference: string,
    patchData: ContactRequestType,
    parameters: Parameters = {},
  ): Promise<GetResult<Contact>> {
    this.path = `/${contactReference}`;

    return new GetResult(
      Contact,
      await this.patch<GetData<ContactType>>(patchData, parameters),
    );
  }

  public async lockContact(
    contactId: number,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${contactId}/status`;

    return await this.patch({ locked: true }, parameters);
  }

  public async unlockContact(
    contactId: number,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${contactId}/status`;

    return await this.patch({ locked: false }, parameters);
  }

  public async disableMfaContact(
    contactId: number,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${contactId}/disable-mfa`;

    return await this.patch({}, parameters);
  }

  public async disableAliasContact(
    contactId: number,
    aliasUsername: string,
    providerName?: string,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${contactId}/disable-alias`;

    return await this.patch({ aliasUsername, providerName }, parameters);
  }

  public async unlockInsecureLoginContact(
    contactId: number,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${contactId}/unlock-insecure-login`;

    return await this.patch({}, parameters);
  }

  public async anonymizeContacts(
    payload: AnonymizeContactsPayload,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/anonymize`;

    await this.patch(payload, parameters);
  }
}
