import { AbstractEntity } from '../../../abstractEntity';

export enum PartnerUserFields {
  COLUMN_LOGIN = 'login',
}

export type PartnerUserType = {
  [PartnerUserFields.COLUMN_LOGIN]: string;
};

export class PartnerUser extends AbstractEntity<PartnerUserType> {
  readonly #login: string;

  public constructor(userInput: PartnerUserType) {
    super(userInput);

    this.#login = userInput[PartnerUserFields.COLUMN_LOGIN];
  }

  get login(): string {
    return this.#login;
  }

  public toJSON(): PartnerUserType {
    return {
      [PartnerUserFields.COLUMN_LOGIN]: this.login,
    };
  }
}
