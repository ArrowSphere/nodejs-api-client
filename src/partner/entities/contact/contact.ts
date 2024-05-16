import { AbstractEntity } from '../../../abstractEntity';

export enum PartnerContactFields {
  COLUMN_TITLE = 'title',
  COLUMN_FIRSTNAME = 'firstname',
  COLUMN_LASTNAME = 'lastname',
  COLUMN_PHONE = 'phone',
  COLUMN_EMAIL = 'email',
  COLUMN_TYPE = 'type',
  COLUMN_COUNTRY = 'country',
}

export type PartnerContactType = {
  [PartnerContactFields.COLUMN_TITLE]: string;
  [PartnerContactFields.COLUMN_FIRSTNAME]: string;
  [PartnerContactFields.COLUMN_LASTNAME]: string;
  [PartnerContactFields.COLUMN_PHONE]: string;
  [PartnerContactFields.COLUMN_EMAIL]: string;
  [PartnerContactFields.COLUMN_TYPE]: string;
  [PartnerContactFields.COLUMN_COUNTRY]: string;
};

export class PartnerContact extends AbstractEntity<PartnerContactType> {
  readonly #title: string;
  readonly #firstname: string;
  readonly #lastname: string;
  readonly #phone: string;
  readonly #email: string;
  readonly #type: string;
  readonly #country: string;

  public constructor(contactInput: PartnerContactType) {
    super(contactInput);

    this.#title = contactInput[PartnerContactFields.COLUMN_TITLE];
    this.#firstname = contactInput[PartnerContactFields.COLUMN_FIRSTNAME];
    this.#lastname = contactInput[PartnerContactFields.COLUMN_LASTNAME];
    this.#phone = contactInput[PartnerContactFields.COLUMN_PHONE];
    this.#email = contactInput[PartnerContactFields.COLUMN_EMAIL];
    this.#type = contactInput[PartnerContactFields.COLUMN_TYPE];
    this.#country = contactInput[PartnerContactFields.COLUMN_COUNTRY];
  }

  get title(): string {
    return this.#title;
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

  get country(): string {
    return this.#country;
  }

  public toJSON(): PartnerContactType {
    return {
      [PartnerContactFields.COLUMN_TITLE]: this.title,
      [PartnerContactFields.COLUMN_FIRSTNAME]: this.firstname,
      [PartnerContactFields.COLUMN_LASTNAME]: this.lastname,
      [PartnerContactFields.COLUMN_PHONE]: this.phone,
      [PartnerContactFields.COLUMN_EMAIL]: this.email,
      [PartnerContactFields.COLUMN_TYPE]: this.type,
      [PartnerContactFields.COLUMN_COUNTRY]: this.country,
    };
  }
}
