# Organization Unit Client

## Entities

### DataListOrganizationUnits

| Field             | Type        | Example                             | Description                                              |
|-------------------|-------------|-------------------------------------|----------------------------------------------------------|
| organizationUnits | ```array``` | [OrganizationUnit,OrganizationUnit] | Array of objects ([OrganizationUnit](#OrganizationUnit)) |

### OrganizationUnit

| Field               | Type         | Example                  | Description                                             |
|---------------------|--------------|--------------------------|---------------------------------------------------------|
| organizationUnitRef | ```string``` | "XSPOU123456"            | Unique identifier of the organization unit              |
| companyRef          | ```string``` | "XSP12345"               | Unique identifier of the company                        |
| name                | ```string``` | "Administration service" | Name of the organization unit                           |
| countUsers          | ```number``` | 7                        | (optional) Number of users in the organization unit     |
| countCustomers      | ```number``` | 11                       | (optional) Number of customers in the organization unit |