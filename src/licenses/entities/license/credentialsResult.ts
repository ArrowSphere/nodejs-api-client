import { AbstractEntity } from '../../../abstractEntity';

export enum CredentialsResultFields {
  COLUMN_USERNAME = 'username',
  COLUMN_PASSWORD_RESET_URL = 'passwordResetUrl',
  COLUMN_URL = 'url',
}

export type CredentialsResultType = {
  [CredentialsResultFields.COLUMN_USERNAME]?: string;
  [CredentialsResultFields.COLUMN_PASSWORD_RESET_URL]?: string;
  [CredentialsResultFields.COLUMN_URL]?: string;
};

export class CredentialsResult extends AbstractEntity<CredentialsResultType> {
  readonly #username?: string;
  readonly #passwordResetUrl?: string;
  readonly #url?: string;

  constructor(input: CredentialsResultType) {
    super(input);

    this.#username = input[CredentialsResultFields.COLUMN_USERNAME];
    this.#passwordResetUrl =
      input[CredentialsResultFields.COLUMN_PASSWORD_RESET_URL];
    this.#url = input[CredentialsResultFields.COLUMN_URL];
  }

  get username(): string | undefined {
    return this.#username;
  }

  get passwordResetUrl(): string | undefined {
    return this.#passwordResetUrl;
  }

  get url(): string | undefined {
    return this.#url;
  }

  public toJSON(): CredentialsResultType {
    return {
      [CredentialsResultFields.COLUMN_USERNAME]: this.username,
      [CredentialsResultFields.COLUMN_PASSWORD_RESET_URL]: this
        .passwordResetUrl,
      [CredentialsResultFields.COLUMN_URL]: this.url,
    };
  }
}
