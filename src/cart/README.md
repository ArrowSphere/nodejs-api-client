# Cart Client

## General information

A cart is composed of a list of items, which can contains promotions.

## Entities

### Item

An item is managed by the `item` entity.

| Field                        | Type                                  | Example                                              | Description                                                   |
|------------------------------|---------------------------------------|------------------------------------------------------|---------------------------------------------------------------|
| additionalData               | ```ItemAdditionalDataType[]```        | {cycle: 0}                                           | Additional Data                                               |
| cotermPrices                 | ```Record<string\|number>```          | {arrow: 0, partner: 2, endCustomer: 3, retail: 4}    | The Coterm prices                                             |
| cotermPricesWithoutPromotion | ```Record<string\|number>```          | {arrow: 0, partner: 2.5, endCustomer: 8, retail: 10} | If undefined (but cotermPrices is not), there is no promotion |
| currency                     | ```string```                          | "USD"                                                | Item currency                                                 |
| isAddon                      | ```boolean```                         | true                                                 | If the item is an addon                                       |
| isTrial                      | ```boolean```                         | true                                                 | If the item is a trial                                        |
| itemId                       | ```string```                          | "bc1a75b1-3458-4be7-b204-aab560e8a6a9"               | Item's id                                                     |
| offerName                    | ```string```                          | "Office 365"                                         | The name of the offer in the item                             |
| priceBandArrowsphereSku      | ```string```                          | "MSCSP_CFQ7TTC0LF8R-0001_FR_EUR_1_720_720"           | Sku of Arrowsphere's Priceband                                |
| prices                       | ```Record<string\|number>```          | {arrow: 0, partner: 2, endCustomer: 3, retail: 4}    | Prices of the item                                            |
| pricesWithoutPromotion       | ```Record<string\|number>```          | {arrow: 0, partner: 2.5, endCustomer: 8, retail: 10} | If undefined, there is no promotion                           |
| quantity                     | ```number```                          | 1                                                    | The item's quantity                                           |
| rules                        | ```Record<string\|PricingRuleType>``` | {arrow: {rateType: 'uplift', value: 0.041}}          | Billing rules for the item                                    |

### ItemList

It's a list of items.

| Field | Type         | Example | Description       |
|-------|--------------|---------|-------------------|
| items | ```Item[]``` | []      | The list of items |
