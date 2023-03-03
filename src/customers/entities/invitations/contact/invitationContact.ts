import { AbstractEntity } from '../../../../abstractEntity';
import {
  SharedContactFields,
  SharedContactInterface,
} from '../../../../shared';

enum InvitationContactEnum {
  COLUMN_ID = 'id',
  COLUMN_USERNAME = 'username',
}

export const InvitationContactFields = {
  ...InvitationContactEnum,
  ...SharedContactFields,
};

interface InvitationContactInterface {
  [InvitationContactFields.COLUMN_ID]: string;
  [InvitationContactFields.COLUMN_USERNAME]: string | null;
}

export type InvitationContactType = InvitationContactInterface &
  SharedContactInterface;

export class InvitationContact extends AbstractEntity<InvitationContactType> {
  readonly #id: string;
  readonly #username: string | null;
  readonly #firstname: string;
  readonly #lastname: string;
  readonly #email: string;

  public constructor(getCustomersContactDataInput: InvitationContactType) {
    super(getCustomersContactDataInput);

    this.#id = getCustomersContactDataInput[InvitationContactFields.COLUMN_ID];
    this.#firstname =
      getCustomersContactDataInput[SharedContactFields.COLUMN_FIRSTNAME];
    this.#username =
      getCustomersContactDataInput[InvitationContactFields.COLUMN_USERNAME];
    this.#lastname =
      getCustomersContactDataInput[SharedContactFields.COLUMN_LASTNAME];
    this.#email =
      getCustomersContactDataInput[SharedContactFields.COLUMN_EMAIL];
  }

  get id(): string {
    return this.#id;
  }

  get username(): string | null {
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
      [InvitationContactFields.COLUMN_ID]: this.id,
      [InvitationContactFields.COLUMN_USERNAME]: this.username,
      [SharedContactFields.COLUMN_FIRSTNAME]: this.firstName,
      [SharedContactFields.COLUMN_LASTNAME]: this.lastName,
      [SharedContactFields.COLUMN_EMAIL]: this.email,
    };
  }
}
