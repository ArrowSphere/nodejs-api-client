# Subscriptions Client

## General information

A subscription is the entity which represents a program enrollment between a vendor and a reseller.
A subscription is identified in ArrowSphere by its _id_ which is a sequential integer.

## Entities

### Subscription

A subscription is managed by the `Subscription` entity.

| Field                      | Type     | Example              | Description                                            |
| -------------------------- | -------- | -------------------- | ------------------------------------------------------ |
| subscriptionId             | `int`    | 2234                 | Subscription identifier                                |
| partnerTagLabels           | `string` | SDK,TIER2            | Partner tag labels                                     |
| workgroupCode              | `string` | FR                   | Marketplace where the subscription is registered       |
| companyName                | `string` | My Company           | Company name                                           |
| subscription               | `string` | MSCSP - Program name | Subscription program name                              |
| startDate                  | `string` | 2013-01-01           | Date at which the subscription starts                  |
| endDate                    | `string` | 2012-12-21           | Date at which the subscription ends                    |
| lastUpdate                 | `string` | 2012-12-21           | Last subscription update date                          |
| status                     | `string` | Active               | Whether the subscription is active or needs activation |
| subscriptionDateValidation | `string` | 2012-12-21           | Date at which the subscription was validated           |
| subscriptionDateDemand     | `string` | 2012-12-21           | Date at which the subscruotuib was demanded            |
| clickToAccept              | `bool`   | true                 | Whether the subscription EULA has been accepted        |
| unvalidated                | `bool`   | true                 | Whether or not the subscription has been validated     |
| version                    | `int`    | 8                    | The current subscription version                       |
| number                     | `int`    | 5                    | The version at which the subscription is enabled       |

## Usage

The subscription client is `SubscriptionClient`
You can instance it throught the main entry point `PublicApiClient` and its method `getSubscriptionsClient()`.

## List endpoint

The List endpoint is deisgn to perform easy filtered listing of subscriptions.

The query parameters are the following and match the table in [Subscription](#Subscription)

| Name          | Type            | Subscription field |
| ------------- | --------------- | ------------------ |
| subscription  | string[]        | -                  |
| status        | string[]        | -                  |
| partnerTag    | string[]        | partnerTagLabels   |
| marketplace   | string[]        | workgroupCode      |
| company       | string[]        | companyName        |
| startDate     | string          | -                  |
| endingDate    | string          | endDate            |
| lastUpdate    | string          | -                  |
| perPage       | string          | None               |
| page          | string          | None               |
| sortBy        | string          | -                  |
| sortDirection | 'ASC' or 'DESC' | -                  |

Example implementation:

```typescript
import {
  PublicApiClient,
  SubscriptionsListPayload,
  SubscriptionFields,
} from '@arrowsphere/api-client'

const URL = 'https://your-url-to-arrowsphere.example.com'
const API_KEY = 'your API key in ArrowSphere'

const client = new PublicApiClient()
  .getSubscriptionsClient()
  .setUrl(URL)
  .setApiKey(API_KEY)

const searchResult = client.list({
  subscription: ['MSCSP'],
  status: ['Active'],
  partnerTag: ['SDK', 'TIER2'],
  marketplace: ['FR', 'DE'],
  company: 'My Customer',
  startDate: '2021-03-21',
  endingDate: '2023-03-21',
  lastUpdate: '2021-03-24',
  perPage: '100',
  page: '1',
  sortBy: 'subscription',
  sortDirection: 'ASC'
})

console.log(`${searchResult.nbResults} results were found`)
console.log(`${searchResult.totalPages} pages`)

// You can get the current page's results
const subscriptions = searchResult.getSubscriptionsForCurrentPage()
for await (const subscription of subscriptions) {
  console.log(subscription.id)
}

// You can also browse directly through all the results
// this will make the API call as many times as needed and traverse all the pages
const subscriptions = searchResult.getSubscriptions()
for await (const subscription of subscriptions) {
  console.log(subscription.companyName)
}
```

### SubscriptionsListResult

The `SubscriptionsClient.list()` method returns a `SubscriptionsListResult` instance which is composed of the followings:

#### Members

```typescript
readonly #subscriptions: Array<SubscriptionData> // The subscriptions formatted data as an AsyncGenerator
readonly #client: SubscriptionsClient // Client used to make the call
readonly #payload: SubscriptionsListPayload // Payload (query) used to make the call
readonly #currentPage: number // Current page of the request
readonly #totalPage: number // Total page available for these payload
readonly #nbResults: number // Total count of results for this payload
readonly #nextPageURL: string // URL to get the next page (or null)
readonly #previousPageURL: string // URL to get the previous page (or null)
```

#### Methods

```typescript
*getSubscriptionsForCurrentPage(): Generator<SubscriptionData, void, undefined>
async *getSubscriptions(): AsyncGenerator<SubscriptionData, void, undefined>
toJSON(): SubscriptionsListResultData
```

**getSubscriptionsForCurrentPage**:

Returns the resolved subscriptions in `SubscriptionsListResult`.`subscriptions` (Which is usually the first page or `payload`.`page`) as an async iterator.

**getSubscriptions**:

Returns an iterator that fetches the next page of result with each iteration.

**toJson**:

Plain JSON object of the results.

```typescript
  subscriptions: AsyncGenerator<SubscriptionData, void, undefined>
  totalPage: number
  nbResults: number
```
