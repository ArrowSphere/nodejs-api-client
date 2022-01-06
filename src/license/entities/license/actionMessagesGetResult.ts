import { AbstractEntity } from '../../../abstractEntity';

export enum ActionMessagesGetResultFields {
  COLUMN_ACTION = 'action',
  COLUMN_MESSAGE = 'message',
  COLUMN_MAX_DECREASE = 'maxDecrease',
  COLUMN_SUPPORTED_UNTIL = 'supportedUntil',
  COLUMN_SUSPEND_DATE = 'suspendDate',
}

export type ActionMessagesGetResultData = {
  [ActionMessagesGetResultFields.COLUMN_ACTION]: string;
  [ActionMessagesGetResultFields.COLUMN_MESSAGE]: string;
  [ActionMessagesGetResultFields.COLUMN_MAX_DECREASE]: number;
  [ActionMessagesGetResultFields.COLUMN_SUPPORTED_UNTIL]: string;
  [ActionMessagesGetResultFields.COLUMN_SUSPEND_DATE]: string;
};

export class ActionMessagesGetResult extends AbstractEntity<ActionMessagesGetResultData> {
  readonly #action: string;
  readonly #message: string;
  readonly #maxDecrease: number;
  readonly #supportedUntil: string;
  readonly #suspendDate: string;

  public constructor(data: ActionMessagesGetResultData) {
    super(data);

    this.#action = data[ActionMessagesGetResultFields.COLUMN_ACTION];
    this.#message = data[ActionMessagesGetResultFields.COLUMN_MESSAGE];
    this.#maxDecrease = data[ActionMessagesGetResultFields.COLUMN_MAX_DECREASE];
    this.#supportedUntil =
      data[ActionMessagesGetResultFields.COLUMN_SUPPORTED_UNTIL];
    this.#suspendDate = data[ActionMessagesGetResultFields.COLUMN_SUSPEND_DATE];
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

  public toJSON(): ActionMessagesGetResultData {
    return {
      [ActionMessagesGetResultFields.COLUMN_ACTION]: this.action,
      [ActionMessagesGetResultFields.COLUMN_MESSAGE]: this.message,
      [ActionMessagesGetResultFields.COLUMN_MAX_DECREASE]: this.maxDecrease,
      [ActionMessagesGetResultFields.COLUMN_SUPPORTED_UNTIL]: this
        .supportedUntil,
      [ActionMessagesGetResultFields.COLUMN_SUSPEND_DATE]: this.suspendDate,
    };
  }
}
