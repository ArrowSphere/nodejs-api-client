import {
  NotificationDetails,
  NotificationDetailsType,
} from './details/notificationDetails';
import { AbstractEntity } from '../../abstractEntity';

export enum NotificationFields {
  COLUMN_NOTIFICATION = 'notification',
}

export type NotificationType = {
  [NotificationFields.COLUMN_NOTIFICATION]: NotificationDetailsType;
};

export class Notification extends AbstractEntity<NotificationType> {
  readonly #notification: NotificationDetails;

  public constructor(notification: NotificationType) {
    super(notification);

    this.#notification = new NotificationDetails(
      notification[NotificationFields.COLUMN_NOTIFICATION],
    );
  }

  get notification(): NotificationDetails {
    return this.#notification;
  }

  public toJSON(): NotificationType {
    return {
      [NotificationFields.COLUMN_NOTIFICATION]: this.notification.toJSON(),
    };
  }
}
