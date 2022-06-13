# ConsumptionBI Client

## General information

A ConsumptionBI are the entity which holds information about the ConsumptionBI.

## Entities

### Consumption Monthly or Daily

A consumption are managed by the `Consumption` entity.

| Field    | Type        | Example             | Description                       |
|----------|-------------|---------------------|-----------------------------------|
| headers  | ```array``` | ['Report Period']   | Headers, array of string          |
| lines    | ```array``` | ['2021-10', 412.02] | Lines, array of string and number |

### ConsumptionBI

A consumptionBI are managed by the `ConsumptionBI` entity.

| Field     | Type         | Example       | Description         |
|-----------|--------------|---------------|---------------------|
| currency  | ```string``` | 1             | Currency            |
| period    | ```object``` |               | [Period](#Period)   |
| aggregate | ```string``` | "marketPlace" | Type of aggregation |
| metric    | ```string``` | "revenue"     | type of Metric      |
| top       | ```array```  |               | [Top](#Top)         |

### Period

A period are managed by the `Period` entity.

| Field | Type         | Example | Description       |
|-------|--------------|---------|-------------------|
| from  | ```string``` | 2019-12 | Period from Start |
| to    | ```string``` | 2020-03 | Period from End   |

### Top

A top are managed by the `Top` entity.

| Field  | Type         | Example         | Description |
|--------|--------------|-----------------|-------------|
| rank   | ```string``` | "1"             | Rank        |
| metric | ```number``` | 420.42          | Metric      |
| name   | ```string``` | "L33T Reseller" | Name        |
| ref    | ```string``` | "XSP1337"       | Reference   |