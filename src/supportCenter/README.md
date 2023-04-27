# Support Center

## General information

Allow client to create support tickets from Arrowsphere Support Center

## Entities

### Issue

A issue is managed by the `Issue` entity.

| Field          | Type                    | Example                                                                         | Description                                                                                            |
|----------------|-------------------------|---------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| id             | `int`                   | 12345                                                                           | Issue identifier                                                                                       |
| title          | `string`                | \[Platform issue] How to reset my Microsoft Password ?                          | The title given to the ticket                                                                          |
| description    | `string`                | Hi, I would Like to reset my password, how can I do this?<br>Thanks in advance! | Details of your question / problem                                                                     |
| topicId        | `int`                   | 1                                                                               | A Ticket must have a topic, check the List topic to get the proper ID to send Required for every topic |
| endCustomerRef | `string`                | XSP12345                                                                        | The end customer reference                                                                             |
| language       | `string`                | en                                                                              | Language of issue                                                                                      |
| offer          | `IssueOffer`            | [`IssueOffer`](#IssueOffer)                                                     | The Offer                                                                                              |
| priority       | `int`                   | 2                                                                               | Priority of issue                                                                                      |
| status         | `string`                | PENDING_ARROW                                                                   | Status of issue                                                                                        |
| createdBy      | `IssueCreatedBy`        | [`IssueCreatedBy`](#IssueCreatedBy)                                             | The contact information are not linked to ArrowSphere plateform                                        |
| supportPlan    | `SupportPlan`           | [`SupportPlan`](#SupportPlan)                                                   | The plan of support                                                                                    |
| program        | `string`                | MSCSP                                                                           | The product program associated to the problem                                                          |
| additionalData | `IssueAdditionalData[]` | \[[`IssueAdditionalData`](#SupportPlan)]                                        | This array is used to add more details on the ticket                                                   |
| created        | `date`                  | 2020-02-01T19:00:00.000Z                                                        | The current subscription version                                                                       |
| updated        | `date`                  | 2020-02-01T19:00:00.000Z                                                        | The version at which the subscription is enabled                                                       |

### IssueOffer

A IssueOffer is managed by the `IssueOffer` entity.

| Field   | Type     | Example                               | Description                                            |
|---------|----------|---------------------------------------|--------------------------------------------------------|
| sku     | `string` | 031C9E47-4802-4248-838E-778FB1D2CC05  | Subscription identifier                                |
| name    | `string` | Office 365 Business Essentials        | Partner tag labels                                     |
| vendor  | `string` | Microsoft                             | Marketplace where the subscription is registered       |

### IssueCreatedBy

A IssueCreatedBy is managed by the `IssueCreatedBy` entity.

| Field     | Type                      | Example                  | Description           |
|-----------|---------------------------|--------------------------|-----------------------|
| email     | `string`                  | gunn.wærsted@telenor.com | email of creator      |
| firstName | `string`                  | Gunn                     | first name of creator |
| lastName  | `string`                  | Wærsted                  | last name of creator  |
| phone     | `string`                  | 408-867-5309             | phone of creator      |

### SupportPlan

A SupportPlan is managed by the `SupportPlan` entity.

| Field        | Type                    | Example                      | Description   |
|--------------|-------------------------|------------------------------|---------------|
| label        | `string`                | Premium End Customer Support | Label plan    |
| sku          | `string`                | ARWMS-ECSUP-PREM-GOLD        | Sku plan      |
| sourcePortal | `string`                | Arrowsphere                  | Source portal |

### IssueAdditionalData

A IssueAdditionalData is managed by the `IssueAdditionalData` entity.

| Field | Type     | Example                                  | Description              |
|-------|----------|------------------------------------------|--------------------------|
| name  | `string` | endCustomerDomainName                    | name of additional data  |
| value | `string` | myendcustomerdomainename@onmicrosoft.com | value of additional data |

### IssueComment

A IssueComment is managed by the `IssueComment` entity.

| Field     | Type             | Example                                                                                     | Description            |
|-----------|------------------|---------------------------------------------------------------------------------------------|------------------------|
| id        | `int`            | 12345                                                                                       | Comment identifier     |
| body      | `string`         | Hi, I would like to reset my Microsoft password, how can I do this?<br>Best Regards<br>Gunn | Comment content        |
| date      | `string`         | 2020-02-01T13:42:00+01:00                                                                   | Comment creation date  |
| createdBy | `IssueCreatedBy` | [`IssueCreatedBy`](#IssueCreatedBy)                                                         | Creator of the comment |

### IssueAttachment

A IssueComment is managed by the `IssueAttachment` entity.

| Field    | Type     | Example                                                                                          | Description                           |
|----------|----------|--------------------------------------------------------------------------------------------------|---------------------------------------|
| id       | `int`    | 12345                                                                                            | Attachment identifier                 |
| fileName | `string` | capture.png                                                                                      | Name file attachment                  |
| mimeType | `string` | image/png                                                                                        | Cime type of file                     |
| content  | `string` | iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg== | Content of the file encoded in base64 |

## Usage

The support center client is `SupportCenterClient`
You can instance it throught the main entry point `PublicApiClient` and its method `getSupportCenterClient()`.

Example implementation:

```typescript
import {
  PublicApiClient,
} from '@arrowsphere/api-client'

const URL = 'https://your-url-to-arrowsphere.example.com'
const API_KEY = 'your API key in ArrowSphere'

const client = new PublicApiClient()
  .getSupportCenterClient()
  .setUrl(URL)
  .setApiKey(API_KEY)
```