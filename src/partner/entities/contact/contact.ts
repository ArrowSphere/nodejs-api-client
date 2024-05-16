import { AbstractEntity } from "../../../abstractEntity";

export enum ContactFields {
  COLUMN_REFERENCE = 'reference',
  COLUMN_FIRSTNAME = 'firstname',
  COLUMN_LASTNAME = 'lastname',
  COLUMN_PHONE = 'phone',
  COLUMN_EMAIL = 'email',
  COLUMN_TYPE = 'type',
}

export type ContactType = {
  [ContactFields.COLUMN_REFERENCE]: string;
  [ContactFields.COLUMN_FIRSTNAME]: string;
  [ContactFields.COLUMN_LASTNAME]: string;
  [ContactFields.COLUMN_PHONE]: string;
  [ContactFields.COLUMN_EMAIL]: string;
  [ContactFields.COLUMN_TYPE]: string;
};

export class Contact extends AbstractEntity<ContactType> {
  readonly #reference: string;
  readonly #firstname: string;
  readonly #lastname: string;
  readonly #phone: string;
  readonly #email: string;
  readonly #type: string;

  public constructor(contactInput: ContactType) {
    super(contactInput);

    this.#reference = contactInput[ContactFields.COLUMN_REFERENCE];
    this.#firstname = contactInput[ContactFields.COLUMN_FIRSTNAME];
    this.#lastname = contactInput[ContactFields.COLUMN_LASTNAME];
    this.#phone = contactInput[ContactFields.COLUMN_PHONE];
    this.#email = contactInput[ContactFields.COLUMN_EMAIL];
    this.#type = contactInput[ContactFields.COLUMN_TYPE];
  }

  get reference(): string {
    return this.#reference;
  }

  get firstname(): string {
    return this.#firstname;
  }

  get lastname(): string {
    return this.#lastname;
  }

  get phone(): string {
    return this.#phone;
  }

  get email(): string {
    return this.#email;
  }

  get type(): string {
    return this.#type;
  }

  public toJSON(): ContactType {
    return {
      [ContactFields.COLUMN_REFERENCE]: this.reference,
      [ContactFields.COLUMN_FIRSTNAME]: this.firstname,
      [ContactFields.COLUMN_LASTNAME]: this.lastname,
      [ContactFields.COLUMN_PHONE]: this.phone,
      [ContactFields.COLUMN_EMAIL]: this.email,
      [ContactFields.COLUMN_TYPE]: this.type,
    };
  }
}
