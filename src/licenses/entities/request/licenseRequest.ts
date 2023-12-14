import { AbstractEntity } from '../../../abstractEntity';

export enum LicenseRequestFields {
  COLUMN_ACTION = 'action',
  COLUMN_CREATED_AT = 'createdAt',
  COLUMN_LICENSE_REFERENCE = 'licenseReference',
  COLUMN_MESSAGE = 'message',
  COLUMN_STATUS = 'status',
  COLUMN_UPDATED_AT = 'updatedAt',
  COLUMN_USER_NAME = 'userName',
}

export type LicenseRequestType = {
  [LicenseRequestFields.COLUMN_ACTION]?: string;
  [LicenseRequestFields.COLUMN_CREATED_AT]?: string;
  [LicenseRequestFields.COLUMN_LICENSE_REFERENCE]?: string;
  [LicenseRequestFields.COLUMN_MESSAGE]?: string;
  [LicenseRequestFields.COLUMN_STATUS]?: string;
  [LicenseRequestFields.COLUMN_UPDATED_AT]?: string;
  [LicenseRequestFields.COLUMN_USER_NAME]?: string;
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

    this.#action = input[LicenseRequestFields.COLUMN_ACTION];
    this.#createdAt = input[LicenseRequestFields.COLUMN_CREATED_AT];
    this.#licenseReference =
      input[LicenseRequestFields.COLUMN_LICENSE_REFERENCE];
    this.#message = input[LicenseRequestFields.COLUMN_MESSAGE];
    this.#status = input[LicenseRequestFields.COLUMN_STATUS];
    this.#updatedAt = input[LicenseRequestFields.COLUMN_UPDATED_AT];
    this.#userName = input[LicenseRequestFields.COLUMN_USER_NAME];
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
      [LicenseRequestFields.COLUMN_ACTION]: this.action,
      [LicenseRequestFields.COLUMN_CREATED_AT]: this.createdAt,
      [LicenseRequestFields.COLUMN_LICENSE_REFERENCE]: this.licenseReference,
      [LicenseRequestFields.COLUMN_MESSAGE]: this.message,
      [LicenseRequestFields.COLUMN_STATUS]: this.status,
      [LicenseRequestFields.COLUMN_UPDATED_AT]: this.updatedAt,
      [LicenseRequestFields.COLUMN_USER_NAME]: this.userName,
    };
  }
}

export type LicenseRequestResultDataType = LicenseRequestType[];

export enum LicenseRequestResultFields {
  COLUMN_LICENSE_REQUEST = 'licenseRequests',
}

export type LicenseRequestResultType = {
  [LicenseRequestResultFields.COLUMN_LICENSE_REQUEST]?: LicenseRequestType[];
};

export class LicenseRequestResult extends AbstractEntity<LicenseRequestResultDataType> {
  readonly #licenseRequests?: LicenseRequest[];

  public constructor(input: LicenseRequestResultDataType) {
    super(input);

    this.#licenseRequests = input.map((result) => new LicenseRequest(result));
  }

  get licenseRequest(): LicenseRequest[] | undefined {
    return this.#licenseRequests;
  }

  public toJSON(): LicenseRequestResultType | undefined {
    return {
      [LicenseRequestResultFields.COLUMN_LICENSE_REQUEST]: this.licenseRequest?.map(
        (result: LicenseRequest): LicenseRequestType => result.toJSON(),
      ),
    };
  }
}
