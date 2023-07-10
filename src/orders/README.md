# Order Client

## Entities

### DataListOrders

| Field  | Type        | Example       | Description                        |
|--------|-------------|---------------|------------------------------------|
| orders | ```array``` | [Order,Order] | Array of objects ([Order](#Order)) |

### Order

| Field           | Type                    | Example                      | Description                         |
|-----------------|-------------------------|------------------------------|-------------------------------------|
| reference       | ```string```            | XSPO123                      | Order reference ID                  |
| status          | ```string```            | In progress                  | Order status                        |
| dateStatus      | ```string```            | 2017-05-15 09:39:05          | Date the current status was updated |
| dateCreation    | ```string```            | 2017-05-15 09:39:05          | Date the order was created          |
| order_reference | ```string```            | O_ARWS-V7-2704f97d-656151    | Arrow order reference               |
| partner         | ```OrderPartnerType```  |                              | [OrderPartner](#OrderPartner)       |
| customer        | ```ReferenceLinkType``` |                              | [ReferenceLink](#ReferenceLink)     |
| ponumber        | ```string```            | 123456                       | PO number                           |
| products        | ```array```             | [OrderProduct, OrderProduct] |                                     |

### OrderPartner

| Field          | Type                         | Example                                                                                                      | Description                     |
|----------------|------------------------------|--------------------------------------------------------------------------------------------------------------|---------------------------------|
| companyName    | ```string```                 | MyCompany                                                                                                    | The company name of the partner |
| contact        | ```SharedContactInterface``` | {"email": "email@provider.com","firstName": "/api/customers/XSP17727","lastName": "/api/customers/XSP17727"} | Contact Object                  |

### OrderProduct

| Field              | Type                    | Example                                                                            | Description                                                    |
|--------------------|-------------------------|------------------------------------------------------------------------------------|----------------------------------------------------------------|
| sku                | ```string```            | Microsoft&#124;&#124;_MS-0ZH-VISIO&#124;&#124;B4D4B7F4-4089-43B6-9C44-DE97B760FB11 | Order SKU                                                      |
| quantity           | ```number```            | 2                                                                                  | Number of products bought                                      |
| status             | ```string```            | Provisioned                                                                        | Order status                                                   |
| dateStatus         | ```string```            | 2017-05-15 09:39:05                                                                | Date the product became the current "Status"                   |
| detailedStatus     | ```string```            | Provisioned                                                                        | An individual product can be a different status than the order |
| isAddon            | ```bool```              | true                                                                               | Is an Addon                                                    |
| arrowSubCategories | ```array```             | ["nce"]                                                                            | Arrow Sub Categories                                           |
| isTrial            | ```bool```              | true                                                                               | Is Trial                                                       |
| prices             | ```ProductPricesType``` |                                                                                    | [ProductPrices](#ProductPrices)                                |
| subscription       | ```ReferenceLinkType``` |                                                                                    | [ReferenceLink](#ReferenceLink)                                |
| license            | ```ReferenceLinkType``` |                                                                                    | [ReferenceLink](#ReferenceLink)                                |
| name               | ```string```            | name                                                                               | Product Name                                                   |
| classification     | ```string```            | classification                                                                     | Product Classification                                         |
| program            | ```ReferenceLinkType``` |                                                                                    | [ProductProgram](#ReferenceLink)                               |
| identifiers        | ```ReferenceLinkType``` |                                                                                    | [ProductIdentifiers](#ReferenceLink)                           |

### ProductPrices

| Field           | Type                  | Example | Description                                                          |
|-----------------|-----------------------|---------|----------------------------------------------------------------------|
| vendor          | ```tierPricingType``` |         | [tierPricing](#tierPricing) unit is not used for vendor tier pricing |
| buy             | ```tierPricingType``` |         | [tierPricing](#tierPricing)                                          |
| list            | ```tierPricingType``` |         | [tierPricing](#tierPricing)                                          |
| reseller        | ```tierPricingType``` |         | [tierPricing](#tierPricing)                                          |
| endCustomer     | ```tierPricingType``` |         | [tierPricing](#tierPricing)                                          |

### tierPricing

| Field        | Type         | Example | Description                                  |
|--------------|--------------|---------|----------------------------------------------|
| currency     | ```string``` | EUR     | tier pricing currency iso format             |
| unit         | ```number``` | 12.4    | tier pricing value                           |
| exchangeRate | ```number``` | 0.92    | exchange rate (use for vendor exchange rate) |


### ProductProgram

| Field      | Type          | Example    | Description |
|------------|---------------|------------|-------------|
| legacyCode | ```string```  | legacyCode | legacy code |

### ProductIdentifiers

| Field  | Type                    | Example | Description                         |
|--------|-------------------------|---------|-------------------------------------|
| vendor | ```IdentifiersVendor``` |         | [IdentifiersVendor](#ReferenceLink) |

### IdentifiersVendor

| Field | Type          | Example | Description     |
|-------|---------------|---------|-----------------|
| sky   | ```string```  | sku     | identifiers sku |

### ReferenceLink

| Field     | Type          | Example                | Description  |
|-----------|---------------|------------------------|--------------|
| reference | ```string```  | XSP87708               | reference ID |
| link      | ```string```  | /api/licenses/XSP87708 | API URL link |