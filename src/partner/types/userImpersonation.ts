import { AbstractEntity } from '../../abstractEntity';

export enum UserImpersonationFields {
  COLUMN_USERNAME = 'username',
  COLUMN_FIRSTNAME = 'firstname',
  COLUMN_LASTNAME = 'lastname',
  COLUMN_COMPANY = 'company',
}

export type UserImpersonationData = {
  [UserImpersonationFields.COLUMN_USERNAME]: string;
  [UserImpersonationFields.COLUMN_FIRSTNAME]: string | null;
  [UserImpersonationFields.COLUMN_LASTNAME]: string | null;
  [UserImpersonationFields.COLUMN_COMPANY]: string;
};

export class UserImpersonation extends AbstractEntity<UserImpersonationData> {
  readonly #username: string;
  readonly #firstname: string | null;
  readonly #lastname: string | null;
  readonly #company: string;

  public constructor(dataInput: UserImpersonationData) {
    super(dataInput);

    this.#username = dataInput[UserImpersonationFields.COLUMN_USERNAME];
    this.#firstname = dataInput[UserImpersonationFields.COLUMN_FIRSTNAME];
    this.#lastname = dataInput[UserImpersonationFields.COLUMN_LASTNAME];
    this.#company = dataInput[UserImpersonationFields.COLUMN_COMPANY];
  }

  public get username(): string {
    return this.#username;
  }

  public get firstname(): string | null {
    return this.#firstname;
  }

  public get lastname(): string | null {
    return this.#lastname;
  }

  public get company(): string {
    return this.#company;
  }

  public toJSON(): UserImpersonationData {
    return {
      [UserImpersonationFields.COLUMN_USERNAME]: this.username,
      [UserImpersonationFields.COLUMN_FIRSTNAME]: this.firstname,
      [UserImpersonationFields.COLUMN_LASTNAME]: this.lastname,
      [UserImpersonationFields.COLUMN_COMPANY]: this.company,
    };
  }
}
