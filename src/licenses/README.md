# License Client

## General information

A license is the entity which holds information about the customer's subscription.
A license is identified in ArrowSphere by its _partner ref_, which is typically 'XSP' followed by a few digits (e.g `XSP987654321`).

## Entities

### License

A license is managed by the `License` entity.

| Field                 | Type         | Example                                              | Description                                                                                           |
|-----------------------|--------------|------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| acceptEula            | ```bool```   | false                                                |                                                                                                       |
| activeSeatsLastUpdate | ```string``` | null                                                 | The last time the assigned seats have been modified                                                   |
| activeSeatsNumber     | ```float```  | null                                                 | The current number of assigned seats, if applicable                                                   |
| autoRenew             | ```bool```   | true                                                 | True if the license is renewed automatically upon expiration                                          |
| baseSeat              | ```int```    | 6                                                    | The number of seats at the time of the license purchase                                               |
| buyPrice              | ```float```  | 10.4                                                 | The buy price at the time of the license purchase                                                     |
| category              | ```string``` | BaseProduct                                          | Indicates if the offer is a BaseProduct or an Addon                                                   |
| classification        | ```string``` | SaaS                                                 | The [classification](catalog-classification.md)                                                       |
| currency              | ```string``` | USD                                                  | The currency used at the time of the license purchase                                                 |
| customerName          | ```string``` | My customer                                          | The name of the end-customer                                                                          |
| customerRef           | ```string``` | XSP123456789                                         | The reference of the end-customer                                                                     |
| endDate               | ```string``` | 2021-11-18T17:48:43.000Z                             | The end date of the license                                                                           |
| friendlyName          | ```string``` | XSP12345|MS-0B-O365-ENTERPRIS|XSP555555|XSP987654321 | The friendly name of the license                                                                      |
| id                    | ```int```    | 123456                                               | The license identifier (an internal identifier)                                                       |
| isEnabled             | ```bool```   | true                                                 | True if the license is active                                                                         |
| lastUpdate            | ```string``` | 2020-12-08T15:42:30.069Z                             | The last time the license's data was updated (for any reason)                                         |
| listPrice             | ```float```  | 15.52                                                | The list price at the time of the license purchase                                                    |
| marketplace           | ```string``` | US                                                   | The [marketplace](general-marketPlace.md)                                                             |
| message               | ```string``` |                                                      | If an action is currently performed on the license, this message will indicate it                     |
| offer                 | ```string``` |                                                      | The name of the offer                                                                                 |
| parentLineId          | ```int```    | null                                                 | An internal reference indicating a parent license for this license                                    |
| parentOrderRef        | ```string``` | null                                                 | An internal reference indicating a parent order                                                       |
| partnerRef            | ```string``` | XSP987654321                                         | The ArrowSphere identifier of the license, to be used as an identifier in other ArrowSphere endpoints |
| periodicity           | ```int```    | 720                                                  | The license's billing cycle (See [Term ans periodicity](#term-and-periodicity))                       |
| resellerName          | ```string``` | My reseller                                          | The name of the reseller                                                                              |
| resellerRef           | ```string``` | XSP12345                                             | The reference of the reseller                                                                         |
| seat                  | ```int```    | 6                                                    | The number of available seats                                                                         |
| serviceRef            | ```string``` | MS-0B-O365-ENTERPRIS                                 | The family identifier for this SKU (See [services](catalog-service.md))                               |
| sku                   | ```string``` | ABCDABCD-1234-5678-9876-ABCDEFABCDEF                 | The SKU of the license                                                                                |
| startDate             | ```string``` | 2020-11-18T17:48:43.000Z                             | The start date of the license                                                                         |
| statusCode            | ```int```    | 86                                                   | An internal code indicating the status of the license                                                 |
| statusLabel           | ```float```  | activation_ok                                        | An internal label indicating the status of the license                                                |
| subscriptionId        | ```string``` | 12345678-AAAA-CCCC-FFFF-987654321012                 | Another internal identifier for the license                                                           |
| subsidiaryName        | ```string``` | Arrow ECS Denmark                                    | The arrow company that manages the license                                                            |
| term                  | ```int```    | 8640                                                 | The license's term (See [Term ans periodicity](#term-and-periodicity)                                 |
| trial                 | ```bool```   | false                                                | True if the license is a trial                                                                        |
| type                  | ```string``` | recurring                                            |                                                                                                       |
| uom                   | ```string``` | LICENSE                                              | The unit of measure, is the unit of what is billed for this offer                                     |
| vendorCode            | ```string``` | Microsoft                                            | The vendor code of the offer                                                                          |
| vendorName            | ```string``` | Microsoft                                            | The vendor of the offer                                                                               |
| vendorSubscriptionId  | ```string``` | AABBCCDD-1111-2222-3333-ABCDEFABCDEF                 | An external identifier for the license                                                                |

### FilterFindResult

This entity represents a filter returned by the [Find endpoint](#find-endpoint).
It shows a number of possible filters in the search results and the count for each of them.

| Field  | Type     | Example     | Description              |
| ------ | -------- | ----------- | ------------------------ |
| name   | `string` | vendor      | The name of the filter   |
| values | `object` | (see below) | The values of the filter |

Each entry in the `values` array looks like this:

| Field | Type     | Example   | Description                                   |
| ----- | -------- | --------- | --------------------------------------------- |
| value | `string` | Microsoft | The value of the entry                        |
| count | `int`    | 3         | How many results are available for this entry |

The focus of these filters is to allow to display them to the user as a list of checkboxes
with how many results are available in each of them.

### LicenseFindResult

This entity represents a search result's license.
All fields of the [License](#License) entity are available.
This entity should be used to display search results or to make a listing of licenses.

In addition to the fields of the license entity, these fields are available:

| Field     | Type     | Example                         | Description                                                                                      |
| --------- | -------- | ------------------------------- | ------------------------------------------------------------------------------------------------ |
| highlight | `object` | { sku: '<strong>ABC</strong>' } | An associative array which shows which values are to be highlighted based on the search keywords |

Please note that the `highlight` field is only available if the `DATA_HIGHLIGHT` option is set to `true` while searching.

### LicenseOfferFindResult

This entity represents a search result's offer object.
The offer entity is not necessarily present.

| Field                     | Type    | Example                         | Description                                                                          |
| ------------------------- | ------- | ------------------------------- | ------------------------------------------------------------------------------------ |
| isAutoRenew               | boolean | false                           | Indicates if the offer is auto-renewable or not                                      |
| isManualProvisioning      | boolean | false                           | Indicates if the offer is provisioned manually or note                               |
| isEnabled                 | boolean | false                           | A flag that indicates whether or not the license offer is enabled                    |
| lastUpdate                | string  | 2021-06-18T14:07:12.668Z        | Last license offer update date                                                       |
| name                      | string  | Microsoft 365 Apps for business | License offer name                                                                   |
| priceBandCanIncreaseSeats | boolean | true                            | Indicates whether or not the number of seats for the price band can be increased     |
| priceBandCanBeCancelled   | boolean | false                           | Indicates whether or not the price band can be cancelled                             |
| priceBandCanBeReactivated | boolean | false                           | Indicates whether or not the price band can be reactivated                           |
| priceBandCanDecreaseSeats | boolean | false                           | Indicates whether or not the number of seats for the price band can be decreased     |
| priceBandCanBeSuspended   | boolean | true                            | Indicates whether or not the price band can be suspended                             |
| priceBandMarketplace      | string  | FR                              | The price band's marketplace                                                         |
| priceBandIsEnabled        | boolean | true                            | Indicates whether or not the price band is enabled                                   |
| priceBandCurrency         | string  | EUR                             | The price band's currency                                                            |
| priceBandPricePublic      | number  | 9.43                            | The price band's public price                                                        |
| priceBandPriceBuy         | number  | 7.54                            | The price band's buy price                                                           |
| priceBandPriceSell        | number  | 7.73                            | The price band's sell price                                                          |
| priceBandBillingTerm      | number  | 8640                            | Billing term for the price band (See [Term and periodicity](#term-and-periodicity))  |
| priceBandBillingType      | string  | PAYGO                           | Billing type for the price band (See [Term and periodicity](#term-and-periodicity))  |
| priceBandBillingCycle     | number  | 720                             | Billing cycle for the price band (See [Term and periodicity](#term-and-periodicity)) |

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
| ----- | ------------ | --------------------------- |
| 0     | No term      | one time (no billing cycle) |
| 24    | One day      | Daily                       |
| 720   | One month    | Monthly                     |
| 2160  | Three months | Per quarter                 |
| 8640  | One year     | Yearly                      |

### Find endpoint

The "Find" endpoint has been designed specifically to perform quick and easy search through the licenses.
This is the endpoint called by xSP on its search bar and on the listing pages

The postData is supposed to contain the following keys:

- `LicenseFields.DATA_KEYWORD`: a string to be searched in all the fields. Supports inexact matches (i.e. Ofice for Office)
- `LicenseFields.DATA_KEYWORDS`: an object containing the fields to search on for each entity, and their possible field/values combinations, as well as an operator to specify how to compare them. This object is indexed by column name, then contains 2 keys with `LicenseFields.KEYWORDS_VALUES` containing the values and `LicenseFields.KEYWORDS_OPERATOR` containing an operator (use `LicenseFields.OPERATOR_*` for the operator)
- `LicenseFields.DATA_FILTERS`: an array of strings containing exact matches for individual fields (field name as key and field value as value)
- `LicenseFields.DATA_SORT`: an array of strings containing the order in which sort the data (field name as key and a `LicenseFields.SORT_*` const for the sort direction)
- `LicenseFields.DATA_HIGHLIGHT`: a boolean value, search results will contain a field giving highlights if set to `true` (defaults to `false`)

Please note that the field names must be used with the `LicenseFields.COLUMN_*` consts from the `License` entity class.

```typescript
import {
  PublicApiClient,
  LicenseFindParameters,
  LicenseFields,
} from '@arrowsphere/api-client'

const URL = 'https://your-url-to-arrowsphere.example.com'
const API_KEY = 'your API key in ArrowSphere'

const client = new PublicApiClient()
  .getLicensesClient()
  .setUrl(URL)
  .setApiKey(API_KEY)

const searchResult = client.find({
  [LicenseFindParameters.DATA_KEYWORD]: 'microsoft 365',
  [LicenseFindParameters.DATA_KEYWORDS]: {
    license: {
      [LicenseFields.COLUMN_END_DATE]: {
        [LicenseFindParameters.KEYWORDS_VALUES]: [
          '2021-03-01T00:00:00.000Z',
          '2021-03-31T23:59:59.000Z',
        ],
        [LicenseFindParameters.KEYWORDS_OPERATOR]:
          LicenseFindParameters.OPERATOR_BETWEEN,
      },
    },
    offer: {
      [LicenseOfferFields.NAME]: {
        [LicenseFindParameters.KEYWORDS_VALUES]: [
          'Microsoft Office 365'
        ],
        [LicenseFindParameters.KEYWORDS_OPERATOR]:
          LicenseFindParameters.OPERATOR_AND,
      },
    },
  },
  [LicenseFindParameters.DATA_FILTERS]: {
    [LicenseFields.COLUMN_IS_ENABLED]: true,
  },
  [LicenseFindParameters.DATA_SORT]: {
    [LicenseFields.COLUMN_CUSTOMER_NAME]: [
      LicenseFindParameters.SORT_DESCENDING,
    ],
  },
  [LicenseFindParameters.DATA_HIGHLIGHT]: true,
})

console.log(`${searchResult.nbResults} results were found`)
console.log(`${searchResult.totalPages} pages`)

const filters = searchResult.filters
for await (const filter of filters) {
  console.log(`${filter.name}:  ${filter.values}`)
}

// You can get the current page's results
const results = searchResult.getResultsForCurrentPage()
for await (const result of results) {
  console.log(result.license.partnerRef)
  console.log(result.offer.name)
}

// You can also browse directly through all the results
// this will make the API call as many times as needed and traverse all the pages
const results = searchResult.getResults()
for await (const result of results) {
  console.log(result.license.partnerRef)
  console.log(result.offer.name)
}
```

The `LicensesClient.find()` method returns a `FindResult` object that allows these methods:

- `getNbResults()`: returns the total number of results for this search
- `getTotalPages()`: returns the total number of pages for this search
- `getFilters()`: returns an array of `FilterFindResult` entities (see [FilterFindResult entity](#FilterFindResult))
- `getResultsForCurrentPage()`: returns a `Generator` and yields instances of the `LicenseFindResult` entity (see [LicenseFindResult entity](#LicenseFindResult))
- `getResults()`: returns a `Generator` and yields instances of the `LicenseFindResult` entity

The difference between `getResultsForCurrentPage()` and `getResults()` is that `getResultsForCurrentPage()` only shows the results for the current page, you have to perform a new `find()` passing another `page` to get more licenses. `getResults()` automatically calls the API as many times as needed and yields all the licenses for the search results.
