import { AbstractEntity } from '../../abstractEntity';
import {
  PartnerCompany as Company,
  PartnerCompanyType as CompanyType,
} from './company/company';
import {
  PartnerContact as Contact,
  PartnerContactType as ContactType,
} from './contact/contact';
import { PartnerUser as User, PartnerUserType as UserType } from './user/user';

export enum DataPartnerFields {
  COLUMN_USER = 'user',
  COLUMN_CONTACT = 'contact',
  COLUMN_COMPANY = 'company',
}

export type DataPartnerType = {
  [DataPartnerFields.COLUMN_USER]: UserType;
  [DataPartnerFields.COLUMN_CONTACT]: ContactType;
  [DataPartnerFields.COLUMN_COMPANY]?: CompanyType;
};

export class DataPartner extends AbstractEntity<DataPartnerType> {
  readonly #user: User;
  readonly #contact: Contact;
  readonly #company?: Company;

  public constructor(dataPartnerInput: DataPartnerType) {
    super(dataPartnerInput);
    this.#user = new User(dataPartnerInput[DataPartnerFields.COLUMN_USER]);
    this.#contact = new Contact(
      dataPartnerInput[DataPartnerFields.COLUMN_CONTACT],
    );
    this.#company =
      dataPartnerInput[DataPartnerFields.COLUMN_COMPANY] !== undefined
        ? new Company(
            dataPartnerInput[DataPartnerFields.COLUMN_COMPANY] as Company,
          )
        : undefined;
  }

  get user(): User {
    return this.#user;
  }

  get contact(): Contact {
    return this.#contact;
  }

  get company(): Company | undefined {
    return this.#company;
  }

  public toJSON(): DataPartnerType {
    return {
      [DataPartnerFields.COLUMN_USER]: this.user.toJSON(),
      [DataPartnerFields.COLUMN_CONTACT]: this.contact.toJSON(),
      [DataPartnerFields.COLUMN_COMPANY]: this.company?.toJSON(),
    };
  }
}
