# Report Client

## Entities

### DataListReport

| Field   | Type        | Example | Description                          |
|---------|-------------|---------|--------------------------------------|
| reports | ```array``` |         | Array of objects ([Report](#Report)) |

### Report

| Field             | Type                  | Example                  | Description                                        |
|-------------------|-----------------------|--------------------------|----------------------------------------------------|
| reference         | ```string```          | XSPRO000                 | Report reference ID                                |
| status            | ```string```          | In progress              | Report status                                      |
| month             | ```string```          | 2020-01                  | Month of the report                                |
| program           | ```string```          | SPLA-CORPORATE - PARTNER | Program name                                       |
| products          | ```array```           |                          | Array of objects ([ReportProduct](#ReportProduct)) |
| subcription       | ```Reference```       |                          | [Reference](#Reference)                            |

### ReportProduct

| Field           | Type            | Example                             | Description             |
|-----------------|-----------------|-------------------------------------|-------------------------|
| sku             | ```string```    | SPLA-0000-C                         | Product SKU             |
| quantity        | ```integer```   | 1                                   | Product quantity        |
| customer        | ```Reference``` |                                     | [Reference](#Reference) |
| productName     | ```string```    | Dynamics NAV Hosted                 | Product name            |
| productVersion  | ```string```    | DynNAVHstd ALNG LicSAPk MVL Std SAL | Product version         |
| price           | ```object ```   |                                     | [Price](#Price)         |

### Reference

| Field              | Type                    | Example             | Description                                                    |
|--------------------|-------------------------|---------------------|----------------------------------------------------------------|
| reference          | ```string```            | XSPR1102            | Entity reference                                               |

### Price

| Field        | Type          | Example | Description  |
|--------------|---------------|---------|--------------|
| unitPrice    | ```number```  | 2.4     | Unit pricing |
| totalPrice   | ```number```  | 33      | Total price  |
| currency     | ```string```  | EUR     | Currency     |

### ReportReferenceLink

| Field        | Type            | Example | Description              |
|--------------|-----------------|---------|--------------------------|
| report       | ```Reference``` |         | [Reference](#Reference)  |

### ReportValidationReference

| Field   | Type        | Example | Description                                                      |
|---------|-------------|---------|------------------------------------------------------------------|
| orders  | ```array``` |         | array of [ReportValidationReference](#ReportValidationReference) |

### ReportValidation

| Field      | Type                 | Example     | Description      |
|------------|----------------------|-------------|------------------|
| reference  | ```string```         | XSPR1234    | Report reference |
| status     | ```string```         | In Progress | Report status    |
| link       | ```string```         | -           | Report api link  |
