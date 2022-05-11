# Contact Client

## General information

A contact are the entity which holds information about the contacts.

## Entities

### Contact

A contact are managed by the `contact` entity.

| Field     | Type         | Example                | Description          |
|-----------|--------------|------------------------|----------------------|
| id        | ```number``` | 1                      | Contact id           |
| companyId | ```number``` | 1                      | The Company id       |
| reseller  | ```string``` | "XSP4767"              | The Reseller         |
| firstname | ```string``` | "John"                 | Contact first name   |
| lastname  | ```string``` | "Doe"                  | Contact last name    |
| email     | ```string``` | "john.doe@company.com" | Contact email        |
| phone     | ```string``` | "+33 (0)123456789"     | Contact phone number |
| erpId     | ```string``` | "1"                    | Contact erp id       |
| type      | ```string``` | "MSP"                  | Contact type         |
| role      | ```string``` | "primary"              | Contact role         |
| status    | ```string``` | "active"               | Contact status       |