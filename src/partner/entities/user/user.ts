import { AbstractEntity } from '../../../abstractEntity';

export enum PartnerUserFields {
  COLUMN_REFERENCE = 'reference',
  COLUMN_LOGIN = 'login',
}

export type PartnerUserType = {
  [PartnerUserFields.COLUMN_REFERENCE]: string;
  [PartnerUserFields.COLUMN_LOGIN]: string;
};

export class PartnerUser extends AbstractEntity<PartnerUserType> {
  readonly #reference: string;
  readonly #login: string;

  public constructor(userInput: PartnerUserType) {
    super(userInput);

    this.#reference = userInput[PartnerUserFields.COLUMN_REFERENCE];
    this.#login = userInput[PartnerUserFields.COLUMN_LOGIN];
  }

  get reference(): string {
    return this.#reference;
  }

  get login(): string {
    return this.#login;
  }

  public toJSON(): PartnerUserType {
    return {
      [PartnerUserFields.COLUMN_REFERENCE]: this.reference,
      [PartnerUserFields.COLUMN_LOGIN]: this.login,
    };
  }
}
