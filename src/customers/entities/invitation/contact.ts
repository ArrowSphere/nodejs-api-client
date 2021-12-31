import { AbstractEntity } from '../../../abstractEntity';

export enum ContactFields {
  COLUMN_EMAIL = 'email',
  COLUMN_FIRST_NAME = 'firstName',
  COLUMN_LAST_NAME = 'lastName',
}

export type ContactData = {
  [ContactFields.COLUMN_EMAIL]: string;
  [ContactFields.COLUMN_FIRST_NAME]: string;
  [ContactFields.COLUMN_LAST_NAME]: string;
};

export class Contact extends AbstractEntity<ContactData> {
  readonly #email: string;
  readonly #firstName: string;
  readonly #lastName: string;

  constructor(data: ContactData) {
    super(data);

    this.#email = data[ContactFields.COLUMN_EMAIL];
    this.#firstName = data[ContactFields.COLUMN_FIRST_NAME];
    this.#lastName = data[ContactFields.COLUMN_LAST_NAME];
  }

  public get email(): string {
    return this.#email;
  }

  get firstName(): string {
    return this.#firstName;
  }

  get lastName(): string {
    return this.#lastName;
  }

  public toJSON(): ContactData {
    return {
      [ContactFields.COLUMN_EMAIL]: this.email,
      [ContactFields.COLUMN_FIRST_NAME]: this.firstName,
      [ContactFields.COLUMN_LAST_NAME]: this.lastName,
    };
  }
}
