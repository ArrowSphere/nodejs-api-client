import { AbstractEntity } from '../../abstractEntity';

export enum UserApiKeyFields {
  CONTACT_NAME = 'contactName',
  COLUMN_DISABLE_EXPIRATION_DATE = 'disableExpirationDate',
  COLUMN_EXPIRATION_DATE = 'expiration_date',
  COLUMN_IS_ACTIVE = 'isActive',
  COLUMN_KEY = 'key',
  COLUMN_LAST_CHARACTERS = 'lastCharacters',
  COLUMN_NAME = 'name',
  COLUMN_REFERENCE = 'reference',
  COLUMN_SINCE = 'since',
  COLUMN_USER_LOGIN = 'userLogin',
  COLUMN_USED_AT = 'usedAt',
}

export type CreateUserApiKeyPayload = {
  [UserApiKeyFields.COLUMN_NAME]: string;
  [UserApiKeyFields.COLUMN_EXPIRATION_DATE]: string;
};

export type UserApiKeyData = {
  [UserApiKeyFields.COLUMN_NAME]?: string;
  [UserApiKeyFields.COLUMN_DISABLE_EXPIRATION_DATE]?: boolean;
  [UserApiKeyFields.COLUMN_EXPIRATION_DATE]?: string;
  [UserApiKeyFields.COLUMN_IS_ACTIVE]?: boolean;
  [UserApiKeyFields.COLUMN_LAST_CHARACTERS]?: string;
  [UserApiKeyFields.CONTACT_NAME]?: string;
  [UserApiKeyFields.COLUMN_REFERENCE]?: string;
  [UserApiKeyFields.COLUMN_SINCE]?: string;
  [UserApiKeyFields.COLUMN_USER_LOGIN]?: string;
  [UserApiKeyFields.COLUMN_USED_AT]?: string;
};

export class UserApiKey extends AbstractEntity<UserApiKeyData> {
  readonly #contactName?: string;
  readonly #disableExpirationDate?: boolean;
  readonly #expirationDate?: string;
  readonly #isActive?: boolean;
  readonly #lastCharacters?: string;
  readonly #name?: string;
  readonly #reference?: string;
  readonly #since?: string;
  readonly #userLogin?: string;
  readonly #usedAt?: string;

  public constructor(dataInput: UserApiKeyData) {
    super(dataInput);
    this.#contactName = dataInput[UserApiKeyFields.CONTACT_NAME];
    this.#disableExpirationDate =
      dataInput[UserApiKeyFields.COLUMN_DISABLE_EXPIRATION_DATE];
    this.#expirationDate = dataInput[UserApiKeyFields.COLUMN_EXPIRATION_DATE];
    this.#isActive = dataInput[UserApiKeyFields.COLUMN_IS_ACTIVE];
    this.#lastCharacters = dataInput[UserApiKeyFields.COLUMN_LAST_CHARACTERS];
    this.#name = dataInput[UserApiKeyFields.COLUMN_NAME];
    this.#reference = dataInput[UserApiKeyFields.COLUMN_REFERENCE];
    this.#since = dataInput[UserApiKeyFields.COLUMN_SINCE];
    this.#userLogin = dataInput[UserApiKeyFields.COLUMN_USER_LOGIN];
    this.#usedAt = dataInput[UserApiKeyFields.COLUMN_USED_AT];
  }

  public get contactName(): string | undefined {
    return this.#contactName;
  }

  public get disableExpirationDate(): boolean | undefined {
    return this.#disableExpirationDate;
  }

  public get expirationDate(): string | undefined {
    return this.#expirationDate;
  }

  public get isActive(): boolean | undefined {
    return this.#isActive;
  }

  public get lastCharacters(): string | undefined {
    return this.#lastCharacters;
  }

  public get name(): string | undefined {
    return this.#name;
  }

  public get reference(): string | undefined {
    return this.#reference;
  }

  public get since(): string | undefined {
    return this.#since;
  }

  public get userLogin(): string | undefined {
    return this.#userLogin;
  }

  public get usedAt(): string | undefined {
    return this.#usedAt;
  }

  public toJSON(): UserApiKeyData {
    return {
      [UserApiKeyFields.CONTACT_NAME]: this.contactName,
      [UserApiKeyFields.COLUMN_DISABLE_EXPIRATION_DATE]: this
        .disableExpirationDate,
      [UserApiKeyFields.COLUMN_EXPIRATION_DATE]: this.expirationDate,
      [UserApiKeyFields.COLUMN_IS_ACTIVE]: this.isActive,
      [UserApiKeyFields.COLUMN_LAST_CHARACTERS]: this.lastCharacters,
      [UserApiKeyFields.COLUMN_NAME]: this.name,
      [UserApiKeyFields.COLUMN_REFERENCE]: this.reference,
      [UserApiKeyFields.COLUMN_SINCE]: this.since,
      [UserApiKeyFields.COLUMN_USER_LOGIN]: this.userLogin,
      [UserApiKeyFields.COLUMN_USED_AT]: this.usedAt,
    };
  }
}
