import {
  NotificationDetails,
  NotificationDetailsType,
} from './details/notificationDetails';
import { AbstractEntity } from '../../abstractEntity';

export enum NotificationsFields {
  COLUMN_NOTIFICATIONS = 'notifications',
}

export type NotificationsType = {
  [NotificationsFields.COLUMN_NOTIFICATIONS]: NotificationDetailsType[];
};

export class Notifications extends AbstractEntity<NotificationsType> {
  readonly #notifications: NotificationDetails[];

  public constructor(notification: NotificationsType) {
    super(notification);

    this.#notifications = notification[
      NotificationsFields.COLUMN_NOTIFICATIONS
    ].map((notification) => new NotificationDetails(notification));
  }

  get notifications(): NotificationDetails[] {
    return this.#notifications;
  }

  public toJSON(): NotificationsType {
    return {
      [NotificationsFields.COLUMN_NOTIFICATIONS]: this.notifications.map(
        (notification) => notification.toJSON(),
      ),
    };
  }
}
