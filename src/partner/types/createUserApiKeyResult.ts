import { AbstractEntity } from '../../abstractEntity';
import { UserApiKeyFields } from './userApiKey';

export type CreateUserApiKeyResultData = {
  [UserApiKeyFields.CONTACT_NAME]?: string;
  [UserApiKeyFields.COLUMN_EXPIRATION_DATE]?: string;
  [UserApiKeyFields.COLUMN_IS_ACTIVE]?: boolean;
  [UserApiKeyFields.COLUMN_KEY]?: string;
  [UserApiKeyFields.COLUMN_LAST_CHARACTERS]?: string;
  [UserApiKeyFields.COLUMN_NAME]?: string;
  [UserApiKeyFields.COLUMN_REFERENCE]?: string;
  [UserApiKeyFields.COLUMN_SINCE]?: string;
  [UserApiKeyFields.COLUMN_USED_AT]?: string;
  [UserApiKeyFields.COLUMN_USER_LOGIN]?: string;
};

export class CreateUserApiKeyResult extends AbstractEntity<CreateUserApiKeyResultData> {
  readonly #contactName?: string;
  readonly #expirationDate?: string;
  readonly #isActive?: boolean;
  readonly #key?: string;
  readonly #lastCharacters?: string;
  readonly #name?: string;
  readonly #reference?: string;
  readonly #since?: string;
  readonly #usedAt?: string;
  readonly #userLogin?: string;

  public constructor(dataInput: CreateUserApiKeyResultData) {
    super(dataInput);
    this.#contactName = dataInput[UserApiKeyFields.CONTACT_NAME];
    this.#expirationDate = dataInput[UserApiKeyFields.COLUMN_EXPIRATION_DATE];
    this.#isActive = dataInput[UserApiKeyFields.COLUMN_IS_ACTIVE];
    this.#key = dataInput[UserApiKeyFields.COLUMN_KEY];
    this.#lastCharacters = dataInput[UserApiKeyFields.COLUMN_LAST_CHARACTERS];
    this.#name = dataInput[UserApiKeyFields.COLUMN_NAME];
    this.#reference = dataInput[UserApiKeyFields.COLUMN_REFERENCE];
    this.#since = dataInput[UserApiKeyFields.COLUMN_SINCE];
    this.#usedAt = dataInput[UserApiKeyFields.COLUMN_USED_AT];
    this.#userLogin = dataInput[UserApiKeyFields.COLUMN_USER_LOGIN];
  }

  public get contactName(): string | undefined {
    return this.#contactName;
  }

  public get expirationDate(): string | undefined {
    return this.#expirationDate;
  }

  public get isActive(): boolean | undefined {
    return this.#isActive;
  }

  public get key(): string | undefined {
    return this.#key;
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

  public get usedAt(): string | undefined {
    return this.#usedAt;
  }

  public get userLogin(): string | undefined {
    return this.#userLogin;
  }

  public toJSON(): CreateUserApiKeyResultData {
    return {
      [UserApiKeyFields.CONTACT_NAME]: this.contactName,
      [UserApiKeyFields.COLUMN_EXPIRATION_DATE]: this.expirationDate,
      [UserApiKeyFields.COLUMN_IS_ACTIVE]: this.isActive,
      [UserApiKeyFields.COLUMN_KEY]: this.key,
      [UserApiKeyFields.COLUMN_LAST_CHARACTERS]: this.lastCharacters,
      [UserApiKeyFields.COLUMN_NAME]: this.name,
      [UserApiKeyFields.COLUMN_REFERENCE]: this.reference,
      [UserApiKeyFields.COLUMN_SINCE]: this.since,
      [UserApiKeyFields.COLUMN_USED_AT]: this.usedAt,
      [UserApiKeyFields.COLUMN_USER_LOGIN]: this.userLogin,
    };
  }
}
