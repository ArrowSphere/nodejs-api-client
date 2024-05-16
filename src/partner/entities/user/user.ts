import { AbstractEntity } from '../../../abstractEntity';

export enum PartnerUserFields {
  COLUMN_LOGIN = 'login',
  COLUMN_PASSWORD = 'password',
  COLUMN_GLOBAL_ID = 'globalID',
}

export type PartnerUserType = {
  [PartnerUserFields.COLUMN_LOGIN]: string;
  [PartnerUserFields.COLUMN_PASSWORD]: string;
  [PartnerUserFields.COLUMN_GLOBAL_ID]: string;
};

export class PartnerUser extends AbstractEntity<PartnerUserType> {
  readonly #login: string;
  readonly #password: string;
  readonly #globalID: string;

  public constructor(userInput: PartnerUserType) {
    super(userInput);

    this.#login = userInput[PartnerUserFields.COLUMN_LOGIN];
    this.#password = userInput[PartnerUserFields.COLUMN_PASSWORD];
    this.#globalID = userInput[PartnerUserFields.COLUMN_GLOBAL_ID];
  }

  get login(): string {
    return this.#login;
  }

  get password(): string {
    return this.#password;
  }

  get globalID(): string {
    return this.#globalID;
  }

  public toJSON(): PartnerUserType {
    return {
      [PartnerUserFields.COLUMN_LOGIN]: this.login,
      [PartnerUserFields.COLUMN_PASSWORD]: this.password,
      [PartnerUserFields.COLUMN_GLOBAL_ID]: this.globalID,
    };
  }
}
