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

  public constructor(getLicenseRequesInput: LicenseRequestType) {
    super(getLicenseRequesInput);

    this.#action = getLicenseRequesInput[LicenseRequestFields.ACTION];
    this.#licenseReference =
      getLicenseRequesInput[LicenseRequestFields.LICENSE_REFERENCE];
    this.#message = getLicenseRequesInput[LicenseRequestFields.MESSAGE];
    this.#userName = getLicenseRequesInput[LicenseRequestFields.USER_NAME];
    this.#createdAt = getLicenseRequesInput[LicenseRequestFields.CREATED_AT];
    this.#updatedAt = getLicenseRequesInput[LicenseRequestFields.UPDATED_AT];
    this.#status = getLicenseRequesInput[LicenseRequestFields.STATUS];
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
