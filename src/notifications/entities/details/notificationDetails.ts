import { AbstractEntity } from '../../../abstractEntity';

export enum NotificationDetailsFields {
  COLUMN_ID = 'id',
  COLUMN_USERNAME = 'userName',
  COLUMN_CREATED = 'created',
  COLUMN_EXPIRES = 'expires',
  COLUMN_SUBJECT = 'subject',
  COLUMN_CONTENT = 'content',
  COLUMN_HAS_BEEN_READ = 'hasBeenRead',
}

export type NotificationDetailsType = {
  [NotificationDetailsFields.COLUMN_ID]: string;
  [NotificationDetailsFields.COLUMN_USERNAME]: string;
  [NotificationDetailsFields.COLUMN_CREATED]: number;
  [NotificationDetailsFields.COLUMN_EXPIRES]: number;
  [NotificationDetailsFields.COLUMN_SUBJECT]: string;
  [NotificationDetailsFields.COLUMN_CONTENT]: string;
  [NotificationDetailsFields.COLUMN_HAS_BEEN_READ]: number;
};

export class NotificationDetails extends AbstractEntity<NotificationDetailsType> {
  readonly #id: string;
  readonly #userName: string;
  readonly #created: number;
  readonly #expires: number;
  readonly #subject: string;
  readonly #content: string;
  readonly #hasBeenRead: number;

  public constructor(notification: NotificationDetailsType) {
    super(notification);

    this.#id = notification[NotificationDetailsFields.COLUMN_ID];
    this.#userName = notification[NotificationDetailsFields.COLUMN_USERNAME];
    this.#created = notification[NotificationDetailsFields.COLUMN_CREATED];
    this.#expires = notification[NotificationDetailsFields.COLUMN_EXPIRES];
    this.#subject = notification[NotificationDetailsFields.COLUMN_SUBJECT];
    this.#content = notification[NotificationDetailsFields.COLUMN_CONTENT];
    this.#hasBeenRead =
      notification[NotificationDetailsFields.COLUMN_HAS_BEEN_READ];
  }

  get id(): string {
    return this.#id;
  }

  get userName(): string {
    return this.#userName;
  }

  get created(): number {
    return this.#created;
  }

  get expires(): number {
    return this.#expires;
  }

  get subject(): string {
    return this.#subject;
  }

  get content(): string {
    return this.#content;
  }

  get hasBeenRead(): number {
    return this.#hasBeenRead;
  }

  public toJSON(): NotificationDetailsType {
    return {
      [NotificationDetailsFields.COLUMN_ID]: this.id,
      [NotificationDetailsFields.COLUMN_USERNAME]: this.userName,
      [NotificationDetailsFields.COLUMN_CREATED]: this.created,
      [NotificationDetailsFields.COLUMN_EXPIRES]: this.expires,
      [NotificationDetailsFields.COLUMN_SUBJECT]: this.subject,
      [NotificationDetailsFields.COLUMN_CONTENT]: this.content,
      [NotificationDetailsFields.COLUMN_HAS_BEEN_READ]: this.hasBeenRead,
    };
  }
}
