import { AbstractEntity } from '../../abstractEntity';

export enum CustomerProvisionFields {
  COLUMN_STATUS = 'status',
  COLUMN_MESSAGE = 'message',
  COLUMN_ATTRIBUTES = 'attributes',
}

export type CustomerProvisionType = {
  [CustomerProvisionFields.COLUMN_STATUS]: string;
  [CustomerProvisionFields.COLUMN_MESSAGE]: string;
  [CustomerProvisionFields.COLUMN_ATTRIBUTES]: {
    [key: string]: string;
  };
};

export class CustomerProvision extends AbstractEntity<CustomerProvisionType> {
  readonly #status: string;
  readonly #message: string;
  readonly #attributes: {
    [key: string]: string;
  };

  constructor(data: CustomerProvisionType) {
    super(data);
    this.#status = data.status;
    this.#message = data.message;
    this.#attributes = data.attributes;
  }

  get status(): string {
    return this.#status;
  }

  get message(): string {
    return this.#message;
  }

  get attributes(): {
    [key: string]: string;
  } {
    return this.#attributes;
  }

  public toJSON(): CustomerProvisionType {
    return {
      [CustomerProvisionFields.COLUMN_STATUS]: this.status,
      [CustomerProvisionFields.COLUMN_MESSAGE]: this.message,
      [CustomerProvisionFields.COLUMN_ATTRIBUTES]: this.attributes,
    };
  }
}
