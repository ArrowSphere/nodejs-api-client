import {
  GetData,
  NotificationsFields,
  NotificationDetailsFields,
  NotificationDetailsType,
  NotificationsType,
  TotalFields,
  TotalType,
} from '../../../src';

export const NOTIFICATION: NotificationDetailsType = {
  [NotificationDetailsFields.COLUMN_ID]: '6fab2422-e273-11ec-8fea-0242ac120002',
  [NotificationDetailsFields.COLUMN_USERNAME]: 'Kaizer Sauze',
  [NotificationDetailsFields.COLUMN_CREATED]: 6765765372,
  [NotificationDetailsFields.COLUMN_EXPIRES]: 8787687655,
  [NotificationDetailsFields.COLUMN_CONTENT]: 'Order fulfilled - [XSP656567]',
  [NotificationDetailsFields.COLUMN_SUBJECT]:
    'Your order has been fulfilled with success',
  [NotificationDetailsFields.COLUMN_HAS_BEEN_READ]: 0,
};

export const PAYLOAD_LIST_ALL_NOTIFICATIONS: GetData<NotificationsType> = {
  status: 200,
  data: {
    [NotificationsFields.COLUMN_NOTIFICATIONS]: [NOTIFICATION, NOTIFICATION],
  },
};

export const PAYLOAD_ONE_NOTIFICATION: GetData<NotificationsType> = {
  status: 200,
  data: {
    [NotificationsFields.COLUMN_NOTIFICATIONS]: [NOTIFICATION],
  },
};

export const PAYLOAD_COUNT_NOTIFICATION: GetData<TotalType> = {
  status: 200,
  data: {
    [TotalFields.COLUMN_TOTAL]: 25,
  },
};
