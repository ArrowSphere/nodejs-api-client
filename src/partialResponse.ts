import { AbstractEntity } from './abstractEntity';

/**
 * Filter data values
 */
export enum PartialResponseFields {
  COLUMN_STATUS = 'status',
  COLUMN_ERROR = 'error',
  COLUMN_MESSAGES = 'messages',
}

/**
 * Filter data
 */
export type PartialResponseData = {
  [PartialResponseFields.COLUMN_STATUS]: number;
  [PartialResponseFields.COLUMN_ERROR]: string;
  [PartialResponseFields.COLUMN_MESSAGES]: string[];
};

export class PartialResponse extends AbstractEntity<PartialResponseData> {
  readonly #status: number;
  readonly #error: string;
  readonly #messages: string[];
  public constructor(data: PartialResponseData) {
    super(data);

    this.#status = data['status'];
    this.#error = data['error'];
    this.#messages = data['messages'];
  }

  public get status(): number {
    return this.#status;
  }

  public get error(): string {
    return this.#error;
  }

  public get messages(): string[] {
    return this.#messages;
  }

  public toJSON(): PartialResponseData {
    return {
      [PartialResponseFields.COLUMN_STATUS]: this.status,
      [PartialResponseFields.COLUMN_ERROR]: this.error,
      [PartialResponseFields.COLUMN_MESSAGES]: this.messages,
    };
  }
}
