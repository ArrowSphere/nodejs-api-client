import { AbstractEntity } from '../../../../abstractEntity';

export enum ContactFields {
  COLUMN_FIRSTNAME = 'FirstName',
  COLUMN_LASTNAME = 'LastName',
  COLUMN_EMAIL = 'Email',
  COLUMN_PHONE = 'Phone',
  COLUMN_SYNC_PARTNER_CONTACT_REF_ID = 'SyncPartnerContactRefId',
  COLUMN_CONTACT_PERSON_ID = 'ContactPersonID',
}

export type ContactType = {
  [ContactFields.COLUMN_FIRSTNAME]: string;
  [ContactFields.COLUMN_LASTNAME]: string;
  [ContactFields.COLUMN_EMAIL]: string;
  [ContactFields.COLUMN_PHONE]: string;
  [ContactFields.COLUMN_SYNC_PARTNER_CONTACT_REF_ID]?: number;
  [ContactFields.COLUMN_CONTACT_PERSON_ID]: string;
};

export class Contact extends AbstractEntity<ContactType> {
  readonly #firstname: string;
  readonly #lastname: string;
  readonly #email: string;
  readonly #phone: string;
  readonly #syncPartnerContactRefId?: number;
  readonly #contactPersonId: string;

  public constructor(getCustomersContactDataInput: ContactType) {
    super(getCustomersContactDataInput);

    this.#firstname =
      getCustomersContactDataInput[ContactFields.COLUMN_FIRSTNAME];
    this.#lastname =
      getCustomersContactDataInput[ContactFields.COLUMN_LASTNAME];
    this.#email = getCustomersContactDataInput[ContactFields.COLUMN_EMAIL];
    this.#phone = getCustomersContactDataInput[ContactFields.COLUMN_PHONE];
    this.#syncPartnerContactRefId =
      getCustomersContactDataInput[
        ContactFields.COLUMN_SYNC_PARTNER_CONTACT_REF_ID
      ] ?? undefined;
    this.#contactPersonId =
      getCustomersContactDataInput[ContactFields.COLUMN_CONTACT_PERSON_ID];
  }

  get FirstName(): string {
    return this.#firstname;
  }

  get LastName(): string {
    return this.#lastname;
  }

  get Email(): string {
    return this.#email;
  }

  get Phone(): string {
    return this.#phone;
  }

  get SyncPartnerContactRefId(): number | undefined {
    return this.#syncPartnerContactRefId;
  }

  get ContactPersonID(): string {
    return this.#contactPersonId;
  }

  public toJSON(): ContactType {
    return {
      [ContactFields.COLUMN_FIRSTNAME]: this.FirstName,
      [ContactFields.COLUMN_LASTNAME]: this.LastName,
      [ContactFields.COLUMN_EMAIL]: this.Email,
      [ContactFields.COLUMN_PHONE]: this.Phone,
      [ContactFields.COLUMN_SYNC_PARTNER_CONTACT_REF_ID]: this
        .SyncPartnerContactRefId,
      [ContactFields.COLUMN_CONTACT_PERSON_ID]: this.ContactPersonID,
    };
  }
}
