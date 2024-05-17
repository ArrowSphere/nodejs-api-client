import { AbstractEntity } from '../../../abstractEntity';

export enum PartnerContactFields {
  COLUMN_REFERENCE = 'reference',
  COLUMN_FIRSTNAME = 'firstname',
  COLUMN_LASTNAME = 'lastname',
  COLUMN_PHONE = 'phone',
  COLUMN_EMAIL = 'email',
  COLUMN_TYPE = 'type',
}

export type PartnerContactType = {
  [PartnerContactFields.COLUMN_REFERENCE]: string;
  [PartnerContactFields.COLUMN_FIRSTNAME]: string;
  [PartnerContactFields.COLUMN_LASTNAME]: string;
  [PartnerContactFields.COLUMN_PHONE]: string;
  [PartnerContactFields.COLUMN_EMAIL]: string;
  [PartnerContactFields.COLUMN_TYPE]: string;
};

export class PartnerContact extends AbstractEntity<PartnerContactType> {
  readonly #reference: string;
  readonly #firstname: string;
  readonly #lastname: string;
  readonly #phone: string;
  readonly #email: string;
  readonly #type: string;

  public constructor(contactInput: PartnerContactType) {
    super(contactInput);

    this.#reference = contactInput[PartnerContactFields.COLUMN_REFERENCE];
    this.#firstname = contactInput[PartnerContactFields.COLUMN_FIRSTNAME];
    this.#lastname = contactInput[PartnerContactFields.COLUMN_LASTNAME];
    this.#phone = contactInput[PartnerContactFields.COLUMN_PHONE];
    this.#email = contactInput[PartnerContactFields.COLUMN_EMAIL];
    this.#type = contactInput[PartnerContactFields.COLUMN_TYPE];
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

  public toJSON(): PartnerContactType {
    return {
      [PartnerContactFields.COLUMN_REFERENCE]: this.reference,
      [PartnerContactFields.COLUMN_FIRSTNAME]: this.firstname,
      [PartnerContactFields.COLUMN_LASTNAME]: this.lastname,
      [PartnerContactFields.COLUMN_PHONE]: this.phone,
      [PartnerContactFields.COLUMN_EMAIL]: this.email,
      [PartnerContactFields.COLUMN_TYPE]: this.type,
    };
  }
}
