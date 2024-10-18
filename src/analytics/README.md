# Analytics Client

## General information

An Analytics are the entity which holds information about the monthly analytics.

## Entities

### Get monthly analytics

An analytics are managed by the `Analytics` entity.

| Field          | Type         | Example     | Description     |
|----------------|--------------|-------------|-----------------|
| vendor         | ```string``` | "Microsoft" | Vendor          |
| marketplace    | ```string``` | "FR"        | MarketPlace     |
| classification | ```string``` | "IAAS"      | Classification  |
| tag            | ```string``` | "Pax8"      | tag             |
| month          | ```string``` | "2024-09"   | Month           |
| usdPrice       | ```object``` |             | [Price](#Price) |
| localPrice     | ```object``` |             | [Price](#Price) |

### Price

A Price are managed by the `Price` entity.

| Field               | Type         | Example | Description                |
|---------------------|--------------|---------|----------------------------|
| arrowBuyPrice       | ```number``` | 10.1    | Buy price for Arrow        |
| resellerBuyPrice    | ```number``` | 10.1    | Buy price for reseller     |
| endCustomerBuyPrice | ```number``` | 10.1    | Buy price for end customer |
| listBuyPrice        | ```number``` | 10.1    | Buy price - list           |
| currency            | ```number``` | 10.1    | Currency                   |
