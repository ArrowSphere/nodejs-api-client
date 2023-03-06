import { AbstractEntity } from '../../../../abstractEntity';
import {
  SharedContactFields,
  SharedContactInterface,
} from '../../../../shared';

enum InvitationContactEnum {
  COLUMN_USERNAME = 'username',
  COLUMN_REFERENCE = 'reference',
}

export const InvitationContactFields = {
  ...InvitationContactEnum,
  ...SharedContactFields,
};

interface InvitationContactInterface {
  [InvitationContactFields.COLUMN_USERNAME]: string;
  [InvitationContactFields.COLUMN_REFERENCE]: string;
}

export type InvitationContactType = InvitationContactInterface &
  SharedContactInterface;

export class InvitationContact extends AbstractEntity<InvitationContactType> {
  readonly #reference: string;
  readonly #username: string;
  readonly #firstname: string;
  readonly #lastname: string;
  readonly #email: string;

  public constructor(getCustomersContactDataInput: InvitationContactType) {
    super(getCustomersContactDataInput);

    this.#reference =
      getCustomersContactDataInput[InvitationContactFields.COLUMN_REFERENCE];
    this.#firstname =
      getCustomersContactDataInput[SharedContactFields.COLUMN_FIRSTNAME];
    this.#username =
      getCustomersContactDataInput[InvitationContactFields.COLUMN_USERNAME];
    this.#lastname =
      getCustomersContactDataInput[SharedContactFields.COLUMN_LASTNAME];
    this.#email =
      getCustomersContactDataInput[SharedContactFields.COLUMN_EMAIL];
  }

  get reference(): string {
    return this.#reference;
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
      [InvitationContactFields.COLUMN_REFERENCE]: this.reference,
      [InvitationContactFields.COLUMN_USERNAME]: this.username,
      [InvitationContactFields.COLUMN_FIRSTNAME]: this.firstName,
      [InvitationContactFields.COLUMN_LASTNAME]: this.lastName,
      [InvitationContactFields.COLUMN_EMAIL]: this.email,
    };
  }
}
