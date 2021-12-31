import { AbstractEntity } from '../../abstractEntity';
import { Contact, ContactData } from './invitation/contact';
import { Company, CompanyData } from './invitation/company';

export enum InvitationFields {
  COLUMN_KEYCODE = 'keycode',
  COLUMN_CREATED_AT = 'createdAt',
  COLUMN_UPDATED_AT = 'updatedAt',
  COLUMN_CONTACT = 'contact',
  COLUMN_COMPANY = 'company',
}

export type InvitationData = {
  [InvitationFields.COLUMN_KEYCODE]: string;
  [InvitationFields.COLUMN_CREATED_AT]: string;
  [InvitationFields.COLUMN_UPDATED_AT]: string;
  [InvitationFields.COLUMN_CONTACT]: ContactData;
  [InvitationFields.COLUMN_COMPANY]: CompanyData;
};

export class Invitation extends AbstractEntity<InvitationData> {
  readonly #keycode: string;
  readonly #createdAt: string;
  readonly #updatedAt: string;
  readonly #contact: Contact;
  readonly #company: Company;

  constructor(data: InvitationData) {
    super(data);

    this.#keycode = data[InvitationFields.COLUMN_KEYCODE];
    this.#createdAt = data[InvitationFields.COLUMN_CREATED_AT];
    this.#updatedAt = data[InvitationFields.COLUMN_UPDATED_AT];
    this.#contact = new Contact(data[InvitationFields.COLUMN_CONTACT]);
    this.#company = new Company(data[InvitationFields.COLUMN_COMPANY]);
  }

  public get keycode(): string {
    return this.#keycode;
  }

  public get createdAt(): string {
    return this.#createdAt;
  }

  public get updatedAt(): string {
    return this.#updatedAt;
  }

  get contact(): Contact {
    return this.#contact;
  }

  get company(): Company {
    return this.#company;
  }

  public toJSON(): InvitationData {
    return {
      [InvitationFields.COLUMN_KEYCODE]: this.keycode,
      [InvitationFields.COLUMN_CREATED_AT]: this.createdAt,
      [InvitationFields.COLUMN_UPDATED_AT]: this.updatedAt,
      [InvitationFields.COLUMN_CONTACT]: this.contact.toJSON(),
      [InvitationFields.COLUMN_COMPANY]: this.company.toJSON(),
    };
  }
}
