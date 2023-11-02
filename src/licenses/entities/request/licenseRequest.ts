import { AbstractEntity } from '../../../abstractEntity';

export enum LicenseRequestFields {
  ACTION = 'action',
  CREATED_AT = 'createdAt',
  LICENSE_REFERENCE = 'licenseReference',
  MESSAGE = 'message',
  STATUS = 'status',
  UPDATED_AT = 'updatedAt',
  USER_NAME = 'userName',
}

export type LicenseRequestType = {
  [LicenseRequestFields.ACTION]?: string;
  [LicenseRequestFields.CREATED_AT]?: string;
  [LicenseRequestFields.LICENSE_REFERENCE]?: string;
  [LicenseRequestFields.MESSAGE]?: string;
  [LicenseRequestFields.STATUS]?: string;
  [LicenseRequestFields.UPDATED_AT]?: string;
  [LicenseRequestFields.USER_NAME]?: string;
};

export class LicenseRequest extends AbstractEntity<LicenseRequestType> {
  readonly #action?: string;
  readonly #createdAt?: string;
  readonly #licenseReference?: string;
  readonly #message?: string;
  readonly #status?: string;
  readonly #updatedAt?: string;
  readonly #userName?: string;

  public constructor(input: LicenseRequestType) {
    super(input);

    this.#action = input[LicenseRequestFields.ACTION];
    this.#createdAt = input[LicenseRequestFields.CREATED_AT];
    this.#licenseReference = input[LicenseRequestFields.LICENSE_REFERENCE];
    this.#message = input[LicenseRequestFields.MESSAGE];
    this.#status = input[LicenseRequestFields.STATUS];
    this.#updatedAt = input[LicenseRequestFields.UPDATED_AT];
    this.#userName = input[LicenseRequestFields.USER_NAME];
  }

  get userName(): string | undefined {
    return this.#userName;
  }

  get licenseReference(): string | undefined {
    return this.#licenseReference;
  }

  get createdAt(): string | undefined {
    return this.#createdAt;
  }

  get updatedAt(): string | undefined {
    return this.#updatedAt;
  }

  get status(): string | undefined {
    return this.#status;
  }

  get action(): string | undefined {
    return this.#action;
  }

  get message(): string | undefined {
    return this.#message;
  }

  public toJSON(): LicenseRequestType {
    return {
      [LicenseRequestFields.ACTION]: this.action,
      [LicenseRequestFields.CREATED_AT]: this.createdAt,
      [LicenseRequestFields.LICENSE_REFERENCE]: this.licenseReference,
      [LicenseRequestFields.MESSAGE]: this.message,
      [LicenseRequestFields.STATUS]: this.status,
      [LicenseRequestFields.UPDATED_AT]: this.updatedAt,
      [LicenseRequestFields.USER_NAME]: this.userName,
    };
  }
}
