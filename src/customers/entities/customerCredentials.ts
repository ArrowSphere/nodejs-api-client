import { AbstractEntity } from '../../abstractEntity';

export enum CustomerCredentialsFields {
  COLUMN_PASSWORD = 'password',
  COLUMN_URL = 'url',
  COLUMN_USERNAME = 'username',
  COLUMN_VENDOR = 'vendor',
}

export type CustomerCredentialsType = {
  [CustomerCredentialsFields.COLUMN_PASSWORD]: string;
  [CustomerCredentialsFields.COLUMN_URL]: string;
  [CustomerCredentialsFields.COLUMN_USERNAME]: string;
  [CustomerCredentialsFields.COLUMN_VENDOR]: string;
};

export class CustomerCredentials extends AbstractEntity<CustomerCredentialsType> {
  readonly #password: string;
  readonly #url: string;
  readonly #username: string;
  readonly #vendor: string;

  constructor(data: CustomerCredentialsType) {
    super(data);
    this.#password = data.password;
    this.#url = data.url;
    this.#username = data.username;
    this.#vendor = data.vendor;
  }

  get password(): string {
    return this.#password;
  }

  get url(): string {
    return this.#url;
  }

  get username(): string {
    return this.#username;
  }

  get vendor(): string {
    return this.#vendor;
  }

  public toJSON(): CustomerCredentialsType {
    return {
      [CustomerCredentialsFields.COLUMN_PASSWORD]: this.password,
      [CustomerCredentialsFields.COLUMN_URL]: this.url,
      [CustomerCredentialsFields.COLUMN_USERNAME]: this.username,
      [CustomerCredentialsFields.COLUMN_VENDOR]: this.vendor,
    };
  }
}
