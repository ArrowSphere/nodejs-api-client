# Notification Client

## Entities

### Notifications

| Field         | Type        | Example                     | Description                                                    |
|---------------|-------------|-----------------------------|----------------------------------------------------------------|
| notifications | ```array``` | [Notification,Notification] | Array of objects ([NotificationDetails](#NotificationDetails)) |

### Notification

| Field        | Type         | Example      | Description                                                           |
|--------------|--------------|--------------|-----------------------------------------------------------------------|
| notification | ```object``` | Notification | Notification of objects ([NotificationDetails](#NotificationDetails)) |

### NotificationDetails

| Field       | Type         | Example                                    | Description                                   |
|-------------|--------------|--------------------------------------------|-----------------------------------------------|
| id          | ```string``` | 6fab2422-e273-11ec-8fea-0242ac120002       | Notification ID                               |
| userName    | ```string``` | Kaizer Sauze                               | Name of the related user for the notification |
| created     | ```number``` | 6765765372                                 | The creation date timestamp                   |
| expires     | ```number``` | 8787687655                                 | The expires date timestamp                    |
| subject     | ```string``` | Order fulfilled - [XSP656567]              | The notification subject                      |
| content     | ```string``` | Your order has been fulfilled with success | The notification content                      |
| hasBeenRead | ```number``` | 0                                          | If the notif has been read or not             |