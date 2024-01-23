import { AbstractEntity } from '../../abstractEntity';

export enum CompleteWhoAmIUserFields {
  COLUMN_EMAIL = 'email',
  COLUMN_FIRSTNAME = 'firstname',
  COLUMN_LASTNAME = 'lastname',
  COLUMN_LOGIN = 'login',
  COLUMN_PHONE_NUMBER = 'phoneNumber',
  COLUMN_POLICIES = 'policies',
  COLUMN_REFERENCE = 'reference',
  COLUMN_RIGHTS = 'rights',
  COLUMN_SCOPES = 'scopes',
  COLUMN_XAP_USERNAME = 'xapUsername',
  COLUMN_CAN_IMPERSONATE = 'canImpersonate',
}

export type ImpersonableUser = {
  username: string;
  firstname: string;
  lastname: string;
  company: string;
};

export type CompleteWhoAmIUserData = {
  [CompleteWhoAmIUserFields.COLUMN_EMAIL]?: string;
  [CompleteWhoAmIUserFields.COLUMN_FIRSTNAME]?: string;
  [CompleteWhoAmIUserFields.COLUMN_LASTNAME]?: string;
  [CompleteWhoAmIUserFields.COLUMN_LOGIN]?: string;
  [CompleteWhoAmIUserFields.COLUMN_PHONE_NUMBER]?: string;
  [CompleteWhoAmIUserFields.COLUMN_POLICIES]: string[];
  [CompleteWhoAmIUserFields.COLUMN_REFERENCE]: string;
  [CompleteWhoAmIUserFields.COLUMN_RIGHTS]: string[];
  [CompleteWhoAmIUserFields.COLUMN_SCOPES]: string[];
  [CompleteWhoAmIUserFields.COLUMN_XAP_USERNAME]: string;
  [CompleteWhoAmIUserFields.COLUMN_CAN_IMPERSONATE]: ImpersonableUser[];
};

export class CompleteWhoAmIUser extends AbstractEntity<CompleteWhoAmIUserData> {
  constructor(data: CompleteWhoAmIUserData) {
    super(data);

    this.#email = data[CompleteWhoAmIUserFields.COLUMN_EMAIL];
    this.#firstname = data[CompleteWhoAmIUserFields.COLUMN_FIRSTNAME];
    this.#lastname = data[CompleteWhoAmIUserFields.COLUMN_LASTNAME];
    this.#login = data[CompleteWhoAmIUserFields.COLUMN_LOGIN];
    this.#policies = data[CompleteWhoAmIUserFields.COLUMN_POLICIES];
    this.#phoneNumber = data[CompleteWhoAmIUserFields.COLUMN_PHONE_NUMBER];
    this.#reference = data[CompleteWhoAmIUserFields.COLUMN_REFERENCE];
    this.#rights = data[CompleteWhoAmIUserFields.COLUMN_RIGHTS];
    this.#scopes = data[CompleteWhoAmIUserFields.COLUMN_SCOPES];
    this.#xapUsername = data[CompleteWhoAmIUserFields.COLUMN_XAP_USERNAME];
    this.#canImpersonate =
      data[CompleteWhoAmIUserFields.COLUMN_CAN_IMPERSONATE];
  }

  readonly #email?: string;
  readonly #firstname?: string;
  readonly #lastname?: string;
  readonly #login?: string;
  readonly #phoneNumber?: string;
  readonly #policies: string[];
  readonly #reference: string;
  readonly #rights: string[];
  readonly #scopes: string[];
  readonly #xapUsername: string;
  readonly #canImpersonate: ImpersonableUser[];

  get email(): string | undefined {
    return this.#email;
  }

  get firstname(): string | undefined {
    return this.#firstname;
  }

  get lastname(): string | undefined {
    return this.#lastname;
  }

  get login(): string | undefined {
    return this.#login;
  }

  get phoneNumber(): string | undefined {
    return this.#phoneNumber;
  }

  get policies(): string[] {
    return this.#policies;
  }

  get reference(): string {
    return this.#reference;
  }

  get rights(): string[] {
    return this.#rights;
  }

  get scopes(): string[] {
    return this.#scopes;
  }

  get xapUsername(): string {
    return this.#xapUsername;
  }

  get canImpersonate(): ImpersonableUser[] {
    return this.#canImpersonate;
  }

  public toJSON(): CompleteWhoAmIUserData {
    return {
      [CompleteWhoAmIUserFields.COLUMN_EMAIL]: this.email,
      [CompleteWhoAmIUserFields.COLUMN_FIRSTNAME]: this.firstname,
      [CompleteWhoAmIUserFields.COLUMN_LASTNAME]: this.lastname,
      [CompleteWhoAmIUserFields.COLUMN_LOGIN]: this.login,
      [CompleteWhoAmIUserFields.COLUMN_PHONE_NUMBER]: this.phoneNumber,
      [CompleteWhoAmIUserFields.COLUMN_POLICIES]: this.policies,
      [CompleteWhoAmIUserFields.COLUMN_REFERENCE]: this.reference,
      [CompleteWhoAmIUserFields.COLUMN_RIGHTS]: this.rights,
      [CompleteWhoAmIUserFields.COLUMN_SCOPES]: this.scopes,
      [CompleteWhoAmIUserFields.COLUMN_XAP_USERNAME]: this.xapUsername,
      [CompleteWhoAmIUserFields.COLUMN_CAN_IMPERSONATE]: this.canImpersonate,
    };
  }
}
