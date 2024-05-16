import { AbstractEntity } from "../../../abstractEntity";

export enum UserFields {
  COLUMN_REFERENCE = 'reference',
  COLUMN_LOGIN = 'login',
}

export type UserType = {
  [UserFields.COLUMN_REFERENCE]: string;
  [UserFields.COLUMN_LOGIN]: string;
};

export class User extends AbstractEntity<UserType> {
  readonly #reference: string;
  readonly #login: string;

  public constructor(userInput: UserType) {
    super(userInput);

    this.#reference = userInput[UserFields.COLUMN_REFERENCE];
    this.#login = userInput[UserFields.COLUMN_LOGIN];
  }

  get reference(): string {
    return this.#reference;
  }

  get login(): string {
    return this.#login;
  }

  public toJSON(): UserType {
    return {
      [UserFields.COLUMN_REFERENCE]: this.reference,
      [UserFields.COLUMN_LOGIN]: this.login,
    };
  }
}
