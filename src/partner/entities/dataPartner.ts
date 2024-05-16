import { AbstractEntity } from "../../abstractEntity";
import { Company, CompanyType } from "./company/company";
import { Contact, ContactType } from "./contact/contact";
import { User, UserType } from "./user/user";

export enum DataPartnerFields {
  COLUMN_USER = 'user',
  COLUMN_CONTACT = 'contact',
  COLUMN_COMPANY = 'company'
}

export type DataPartnerType = {
  [DataPartnerFields.COLUMN_USER]: UserType;
  [DataPartnerFields.COLUMN_CONTACT]: ContactType;
  [DataPartnerFields.COLUMN_COMPANY]: CompanyType;
}

export class DataPartner extends AbstractEntity<DataPartnerType> {
  readonly #user: User;
  readonly #contact: Contact;
  readonly #company: Company;

  public constructor(dataPartnerInput: DataPartnerType) {
    super(dataPartnerInput);
    this.#user = new User(dataPartnerInput[DataPartnerFields.COLUMN_USER]);
    this.#contact = new Contact(dataPartnerInput[DataPartnerFields.COLUMN_CONTACT]);
    this.#company = new Company(dataPartnerInput[DataPartnerFields.COLUMN_COMPANY]);
  }

  get user(): User {
    return this.#user;
  }

  get contact(): Contact {
    return this.#contact;
  }

  get company(): Company {
    return this.#company;
  }

  public toJSON(): DataPartnerType {
    return {
      [DataPartnerFields.COLUMN_USER]: this.user.toJSON(),
      [DataPartnerFields.COLUMN_CONTACT]: this.contact.toJSON(),
      [DataPartnerFields.COLUMN_COMPANY]: this.company.toJSON(),
    };
  }
}
