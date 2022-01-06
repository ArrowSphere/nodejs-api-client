# License Client

## General information

A license is the entity which holds information about the customer's subscription.
A license is identified in ArrowSphere by its _partner ref_, which is typically 'XSP' followed by a few digits (e.g `XSP987654321`).

## Entities

### License

A license is managed by the `LicenseFind` entity.

| Field                         | Type                                     | Example                                               | Description                                                                                                                                                                                                                                                                                                  |
|-------------------------------|------------------------------------------|-------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| license_id                    | ```string```                             | XSP123456                                             | License ID                                                                                                                                                                                                                                                                                                   |
| parent_license_id             | ```string```                             | XSP23456                                              | In case of an addon the base license reference will appear here, otherwise value will be null                                                                                                                                                                                                                |
| friendlyName                  | ```string```                             | This is an office 365 license                         | The reseller can associate a friendly name to a license which will display here.                                                                                                                                                                                                                             |                                                                                            |
| customer_ref                  | ```string```                             | XSP123456                                             | Customer reference ID linked to the license                                                                                                                                                                                                                                                                  |
| state                         | ```string```                             | active                                                | Whether the license is active or not                                                                                                                                                                                                                                                                         |
| service_ref                   | ```string```                             | MS-0A-O365-BUSINESS                                   | Product SKU category                                                                                                                                                                                                                                                                                         |
| sku                           | ```string```                             | ABCDABCD-1234-5678-9876-ABCDEFABCDEF                  | Product SKU                                                                                                                                                                                                                                                                                                  |
| name                          | ```string```                             | Office 365 Business Premium                           | Product name                                                                                                                                                                                                                                                                                                 |
| seats                         | ```number```                             | 10                                                    | Number of licenses                                                                                                                                                                                                                                                                                           |
| activeSeats                   | ```ActiveSeatsGetResultData```           | [ActiveSeatsGetResult](#ActiveSeatsGetResult)         | The number of seats bought and the number of active seats might differ. This object defines how many seats are used.                                                                                                                                                                                         |
| activation_datetime           | ```string```                             | 2020-10-28T00:00:00+00:00                             | Seats activation date and time (ISO 8601)                                                                                                                                                                                                                                                                    |
| expiry_datetime               | ```string```                             | 2021-10-28T00:00:00+00:00                             | Seats expiration date and time (ISO 8601)                                                                                                                                                                                                                                                                    |
| autoRenew                     | ```bool```                               | false                                                 |                                                                                                                                                                                                                                                                                                              |
| message                       | ```string```                             | Conversion in progress                                | A message describing an action done on the license                                                                                                                                                                                                                                                           |
| actions                       | ```ActionsGetData```                     | [ActionsGetResult](#ActionsGetResult)                 | Available URL actions that can be done on the license                                                                                                                                                                                                                                                        |
| actionMessages                | ```array<ActionMessagesGetResultData>``` | [[ActionMessagesGetResult](#ActionMessagesGetResult)] | An array of actions messages, some actions may have attached messages/complementary information, you will find them in this array                                                                                                                                                                            |
| order_reference               | ```string```                             | O_ARWS-V7-2704f97d-656151                             | Arrow order reference                                                                                                                                                                                                                                                                                        |
| order                         | ```OrderGetData```                       | [OrderGetResult](#OrderGetResult)                     | The object that identifies the order associated to the current license                                                                                                                                                                                                                                       |
| vendor_license_id             | ```string```                             | 05552F04-D3FE-4E9C-A90F-53ECF31007F4                  | Vendor license ID                                                                                                                                                                                                                                                                                            |
| periodicity                   | ```string```                             | per Month                                             | Enum: `per Hour` `One-Time` `per Day` `per Year` `per Month` `per Month (based on 730 hours)` `per Month (based on 744 hours)` `per Quarter` `per Six Months` `per Two Years` `per Three Years` `per Four Years` `per Five Years` `per Six Years`. Periodicity of the license (`per Month`, `per Year`, etc) |
| term                          | ```string```                             | 1 Year                                                | Enum: `No Term` `Month-to-Month` `3 Months` `6 Months` `1 Year` `2 Years` `3 Years` `4 Years` `5 Years` `6 Years`. Billing term of the license (`1 Year`, `2 Years`, etc).                                                                                                                                   |
| category                      | ```string```                             | SAAS                                                  | Category associated to the license                                                                                                                                                                                                                                                                           |
| program                       | ```string```                             | Microsoft                                             | Program associated to the license                                                                                                                                                                                                                                                                            |
| associatedSubscriptionProgram | ```string```                             | MSCSP                                                 | Program associated to the license in ArrowSphere format                                                                                                                                                                                                                                                      |
| price                         | ```LicensePriceGetData```                | [LicensePriceFindResult](#LicensePriceFindResult)     |                                                                                                                                                                                                                                                                                                              |
| arrowSubCategories            | ```array```                              | ['nce']                                               | Arrow sub categories                                                                                                                                                                                                                                                                                         |

### ActiveSeatsGetResult

| Field      | Type         | Example                   | Description                                         |
|------------|--------------|---------------------------|-----------------------------------------------------|
| lastUpdate | ```string``` | 2020-11-14T01:52:36+00:00 | The last time the assigned seats have been modified |
| number     | ```number``` | 5                         | Number of seats currently used                      |

### ActionsGetResult

| Field          | Type         | Example                                                | Description                                                                                                                              |
|----------------|--------------|--------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| history        | ```string``` | {{baseApiUrl}}/licenses/XSP123546/history              | The URL that list the license history                                                                                                    |
| update         | ```string``` | {{baseApiUrl}}/licenses/XSP123456                      | The URL that allow to update a license (here for compatibility, please use /increaseSeats or /decreaseSeats to modify the license seats) |
| increaseSeats  | ```string``` | {{baseApiUrl}}/licenses/XSP123456/increaseSeats        | The URL that allow to increase a license number of seats                                                                                 |
| decreaseSeats  | ```string``` | {{baseApiUrl}}/licenses/XSP123456/decreaseSeats        | The URL that allow to decrease a license number of seats                                                                                 |
| addons catalog | ```string``` | {{baseApiUrl}}/licenses/XSP123456/addons               | The addon that can be linked to the license base product (addons can have addons too)                                                    |
| suspend        | ```string``` | {{baseApiUrl}}/licenses/XSP123456/suspend              | The URL that allow to suspend a license                                                                                                  |
| reactivate     | ```string``` | {{baseApiUrl}}/licenses/XSP123456/reactivate           | The URL that allow to reactivate a license                                                                                               |
| autoRenewOff   | ```string``` | {{baseApiUrl}}/licenses/XSP123456/autorenew/cancel     | The URL that allow to turn the auto renew OFF                                                                                            |
| autoRenewOn    | ```string``` | {{baseApiUrl}}/licenses/XSP123456/autorenew/reactivate | The URL that allow to turn the auto renew ON                                                                                             |
| cancel         | ```string``` | {{baseApiUrl}}/licenses/XSP123456/cancel               | The URL that allow to cancel a license                                                                                                   |

### ActionMessagesGetResult

| Field          | Type         | Example                                                  | Description                                                                    |
|----------------|--------------|----------------------------------------------------------|--------------------------------------------------------------------------------|
| action         | ```string``` | decreaseSeats                                            | The name of the action associated with this message                            |
| message        | ```string``` | You can decrease 5 seats until 2021/09/13 14:22:02 (UTC) | The message linked to the action                                               |
| maxDecrease    | ```number``` | 5                                                        | Only available for decreaseSeats actions, the maximum number of editable seats |
| supportedUntil | ```string``` | 2021/09/13 14:22:02 (UTC)                                | The limit date this action is available                                        |
| suspendDate    | ```string``` | 2021/09/13 14:22:02 (UTC)                                | The date this license was suspended                                            |

### OrderGetResult

| Field     | Type         | Example                | Description        |
|-----------|--------------|------------------------|--------------------|
| reference | ```string``` | XSPO312456             | Order reference ID |
| link      | ```string``` | /api/orders/XSPO123456 | Order API URL link |

### LicensePriceFindResult

| Field | Type              | Example | Description |
|-------|-------------------|---------|-------------|
| unit  | ```BuySellData``` |         |             |
| total | ```BuySellData``` |         |             |

### BuySellGetResult

| Field | Type         | Example  | Description |
|-------|--------------|----------|-------------|
| buy   | ```number``` | 4007.52  |             |
| sell  | ```number``` | 4554     |             |

## Usage

The license client is simply called `LicenseClient`.
You can get it through the main entry point `PublicApiClient` and its method `getLicenseClient()`, or instanciate it directly.

## Term and periodicity

The term and periodicity are two key-concepts to understand in ArrowSphere.
These values represent time values, expressed as hours, using a basis of 24 hours a day, 30 days a month, 360 days a year.

The term is the customer's commitment. He has to pay as long as the term value.
The periodicity, also known as billing cycle, is the deadline at which the customer is billed.

For example, the typical license has a term of 8640 and a periodicity of 720, which means the customer is committed for 1 year, and he is billed every month.
Here are some possible values for these values:

| value | Term         | Periodicity                 |
|-------|--------------|-----------------------------|
| 0     | No term      | one time (no billing cycle) |
| 24    | One day      | Daily                       |
| 720   | One month    | Monthly                     |
| 2160  | Three months | Per quarter                 |
| 8640  | One year     | Yearly                      |