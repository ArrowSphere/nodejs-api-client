import { AbstractEntity } from '../../abstractEntity';
import { Company, CompanyType } from './invitations/company/company';
import {
  InvitationContact,
  InvitationContactType,
} from './invitations/contact/invitationContact';

export enum DataInvitationFields {
  COLUMN_CODE = 'code',
  COLUMN_CREATED_AT = 'createdAt',
  COLUMN_UPDATED_AT = 'updatedAt',
  COLUMN_COMPANY = 'company',
  COLUMN_CONTACT = 'contact',
  COLUMN_POLICY = 'policy',
}

export type DataInvitationType = {
  [DataInvitationFields.COLUMN_CODE]: string;
  [DataInvitationFields.COLUMN_CREATED_AT]: string;
  [DataInvitationFields.COLUMN_UPDATED_AT]: string;
  [DataInvitationFields.COLUMN_COMPANY]: CompanyType;
  [DataInvitationFields.COLUMN_CONTACT]: InvitationContactType;
  [DataInvitationFields.COLUMN_POLICY]: string;
};

export class DataInvitation extends AbstractEntity<DataInvitationType> {
  readonly #code: string;
  readonly #createdAt: string;
  readonly #updatedAt: string;
  readonly #company: Company;
  readonly #contact: InvitationContact;
  readonly #policy: string;

  public constructor(getCustomerInvitationDataInput: DataInvitationType) {
    super(getCustomerInvitationDataInput);

    this.#code =
      getCustomerInvitationDataInput[DataInvitationFields.COLUMN_CODE];
    this.#createdAt =
      getCustomerInvitationDataInput[DataInvitationFields.COLUMN_CREATED_AT];
    this.#updatedAt =
      getCustomerInvitationDataInput[DataInvitationFields.COLUMN_UPDATED_AT];
    this.#company = new Company(
      getCustomerInvitationDataInput[DataInvitationFields.COLUMN_COMPANY],
    );
    this.#contact = new InvitationContact(
      getCustomerInvitationDataInput[DataInvitationFields.COLUMN_CONTACT],
    );
    this.#policy =
      getCustomerInvitationDataInput[DataInvitationFields.COLUMN_POLICY];
  }

  get code(): string {
    return this.#code;
  }

  get createdAt(): string {
    return this.#createdAt;
  }

  get updatedAt(): string {
    return this.#updatedAt;
  }

  get company(): Company {
    return this.#company;
  }

  get contact(): InvitationContact {
    return this.#contact;
  }

  get policy(): string {
    return this.#policy;
  }

  public toJSON(): DataInvitationType {
    return {
      [DataInvitationFields.COLUMN_CODE]: this.code,
      [DataInvitationFields.COLUMN_CREATED_AT]: this.createdAt,
      [DataInvitationFields.COLUMN_UPDATED_AT]: this.updatedAt,
      [DataInvitationFields.COLUMN_COMPANY]: this.company.toJSON(),
      [DataInvitationFields.COLUMN_CONTACT]: this.contact.toJSON(),
      [DataInvitationFields.COLUMN_POLICY]: this.policy,
    };
  }
}
