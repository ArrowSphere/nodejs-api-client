import { AbstractEntity } from '../../../../abstractEntity';

export enum InvitationContactFields {
  COLUMN_FIRSTNAME = 'firstName',
  COLUMN_LASTNAME = 'lastName',
  COLUMN_EMAIL = 'email',
  COLUMN_USERNAME = 'username',
}

export type InvitationContactType = {
  [InvitationContactFields.COLUMN_USERNAME]: string;
  [InvitationContactFields.COLUMN_FIRSTNAME]: string;
  [InvitationContactFields.COLUMN_LASTNAME]: string;
  [InvitationContactFields.COLUMN_EMAIL]: string;
};

export class InvitationContact extends AbstractEntity<InvitationContactType> {
  readonly #username: string;
  readonly #firstname: string;
  readonly #lastname: string;
  readonly #email: string;

  public constructor(getCustomersContactDataInput: InvitationContactType) {
    super(getCustomersContactDataInput);

    this.#firstname =
      getCustomersContactDataInput[InvitationContactFields.COLUMN_FIRSTNAME];
    this.#username =
      getCustomersContactDataInput[InvitationContactFields.COLUMN_USERNAME];
    this.#lastname =
      getCustomersContactDataInput[InvitationContactFields.COLUMN_LASTNAME];
    this.#email =
      getCustomersContactDataInput[InvitationContactFields.COLUMN_EMAIL];
  }

  get username(): string {
    return this.#username;
  }

  get firstName(): string {
    return this.#firstname;
  }

  get lastName(): string {
    return this.#lastname;
  }

  get email(): string {
    return this.#email;
  }

  public toJSON(): InvitationContactType {
    return {
      [InvitationContactFields.COLUMN_USERNAME]: this.username,
      [InvitationContactFields.COLUMN_FIRSTNAME]: this.firstName,
      [InvitationContactFields.COLUMN_LASTNAME]: this.lastName,
      [InvitationContactFields.COLUMN_EMAIL]: this.email,
    };
  }
}
