import { AbstractEntity } from '../../../../abstractEntity';
import {
  SharedContactFields,
  SharedContactInterface,
} from '../../../../shared/contact/contact';

enum InvitationContactEnum {
  COLUMN_USERNAME = 'username',
}

export const InvitationContactFields = {
  ...InvitationContactEnum,
  ...SharedContactFields,
};

interface InvitationContactInterface {
  [InvitationContactFields.COLUMN_USERNAME]: string;
}

export type InvitationContactType = InvitationContactInterface &
  SharedContactInterface;

export class InvitationContact extends AbstractEntity<InvitationContactType> {
  readonly #username: string;
  readonly #firstname: string;
  readonly #lastname: string;
  readonly #email: string;

  public constructor(getCustomersContactDataInput: InvitationContactType) {
    super(getCustomersContactDataInput);

    this.#firstname =
      getCustomersContactDataInput[SharedContactFields.COLUMN_FIRSTNAME];
    this.#username =
      getCustomersContactDataInput[InvitationContactFields.COLUMN_USERNAME];
    this.#lastname =
      getCustomersContactDataInput[SharedContactFields.COLUMN_LASTNAME];
    this.#email =
      getCustomersContactDataInput[SharedContactFields.COLUMN_EMAIL];
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
      [SharedContactFields.COLUMN_FIRSTNAME]: this.firstName,
      [SharedContactFields.COLUMN_LASTNAME]: this.lastName,
      [SharedContactFields.COLUMN_EMAIL]: this.email,
    };
  }
}
