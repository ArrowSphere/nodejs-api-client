import { AbstractEntity } from '../../../abstractEntity';

export enum ActionMessagesFields {
  COLUMN_ACTION = 'action',
  COLUMN_MESSAGE = 'message',
  COLUMN_MAX_DECREASE = 'maxDecrease',
  COLUMN_SUPPORTED_UNTIL = 'supportedUntil',
  COLUMN_SUSPEND_DATE = 'suspendDate',
}

export type ActionMessagesData = {
  [ActionMessagesFields.COLUMN_ACTION]: string;
  [ActionMessagesFields.COLUMN_MESSAGE]: string;
  [ActionMessagesFields.COLUMN_MAX_DECREASE]: number;
  [ActionMessagesFields.COLUMN_SUPPORTED_UNTIL]: string;
  [ActionMessagesFields.COLUMN_SUSPEND_DATE]: string;
};

export class AbstractActionMessages extends AbstractEntity<ActionMessagesData> {
  readonly #action: string;
  readonly #message: string;
  readonly #maxDecrease: number;
  readonly #supportedUntil: string;
  readonly #suspendDate: string;

  public constructor(data: ActionMessagesData) {
    super(data);

    this.#action = data[ActionMessagesFields.COLUMN_ACTION];
    this.#message = data[ActionMessagesFields.COLUMN_MESSAGE];
    this.#maxDecrease = data[ActionMessagesFields.COLUMN_MAX_DECREASE];
    this.#supportedUntil = data[ActionMessagesFields.COLUMN_SUPPORTED_UNTIL];
    this.#suspendDate = data[ActionMessagesFields.COLUMN_SUSPEND_DATE];
  }

  public get action(): string {
    return this.#action;
  }

  public get message(): string {
    return this.#message;
  }

  public get maxDecrease(): number {
    return this.#maxDecrease;
  }

  public get supportedUntil(): string {
    return this.#supportedUntil;
  }

  public get suspendDate(): string {
    return this.#suspendDate;
  }

  public toJSON(): ActionMessagesData {
    return {
      [ActionMessagesFields.COLUMN_ACTION]: this.action,
      [ActionMessagesFields.COLUMN_MESSAGE]: this.message,
      [ActionMessagesFields.COLUMN_MAX_DECREASE]: this.maxDecrease,
      [ActionMessagesFields.COLUMN_SUPPORTED_UNTIL]: this.supportedUntil,
      [ActionMessagesFields.COLUMN_SUSPEND_DATE]: this.suspendDate,
    };
  }
}
