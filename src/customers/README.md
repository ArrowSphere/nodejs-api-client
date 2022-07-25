# Customers Client

## General information

A customers are the entity which holds information about the customer's.

## Entities

### Customer

A customers are managed by the `getCustomers` entity.

| Field             | Type                          | Example                  | Description                              |
|-------------------|-------------------------------|--------------------------|------------------------------------------|
| Reference         | ```string```                  | XSP76851                 | Company reference ID                     |
| CompanyName       | ```string```                  | MyCompany                | Company name                             |
| PartnerCompanyId  | ```string```                  | XSP76851                 | Company ERP ID                           |
| AddressLine1      | ```string```                  | 4 Goldfield Rd.          | Company address                          |
| AddressLine2      | ```string```                  | Suite 1500               | Company additional address information   |
| Zip               | ```number```                  | 80111                    | Company zip code                         |
| City              | ```string```                  | West Chicago             | Company city                             |
| CountryCode       | ```string```                  | US                       | Company county code (ISO 3166-1 alpha-2) |
| State             | ```string```                  | CO                       | Company State                            |
| ReceptionPhone    | ```string```                  | 913-766-4896             | Company phone number                     |
| WebsiteUrl        | ```string```                  | www.loremipsum.com       | Company website                          |
| EmailContact      | ```string```                  | contact@loremipsum.com   | Company contact email                    |
| Headcount         | ```number```                  | 17                       | Company head count                       |
| TaxNumber         | ```string```                  | ahkdo                    | Company VAT number                       |
| Ref               | ```string```                  | MyRef                    | Company acronym                          |
| BillingId         | ```number```                  | 1234                     | Company billing id                       |
| InternalReference | ```string```                  | ABC123                   | Company internal reference               |
| Contact           | ```GetCustomersContactData``` |                          | Company main contact                     |
| Details           | ```GetCustomersDetailsData``` |                          | Company specific vendor details          |
| DeletedAt         | ```string```                  | 2021-03-25T11:05:51.000Z | Customer deletion date                   |

### Contact

A customers contact are managed by the `customersContact` entity.

| Field                   | Type         | Example                     | Description                     |
|-------------------------|--------------|-----------------------------|---------------------------------|
| Firstname               | ```string``` | John                        | Company main contact first name |
| LastName                | ```string``` | Doe                         | Company main contact last name  |
| Email                   | ```string``` | john.doe@examplecompany.com | Company main contact email      |
| Phone                   | ```string``` | +33 (0)654321098            | Company main contact phone      |
| SyncPartnerContactRefId | ```number``` | 123456                      | Company main contact ID         |
| ContactPersonID         | ```string``` | ANY_STRING_ID               | InvitationContact ERP ID                  |

### CustomerDetails

A customers contact are managed by the `customersDetails` entity.

| Field             | Type          | Example                     | Description                                                                                                                                                                                                                       |
|-------------------|---------------|-----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Migration         | ```boolean``` | true                        | Indicates whether or not the customer has to be linked from Microsoft to ArrowSphere; onmicrosoft.com will be added to the domain.                                                                                                |
| DomainName        | ```string```  | XSPv8umwy0f.onmicrosoft.com | In case of an account migration, the Domain Name must be complete (e.g: test.examplecompany.com). If not a migration, we will assume that only a prefix was submitted and the suffix onmicrosoft.com will be added to the domain. |
| OracleOnlineKey   | ```string```  | MY_ORACLE_ONLINE_KEY        | Required for an Oracle product                                                                                                                                                                                                    |
| IBMCeId           | ```string```  | MY_IBM_CE_ID                | Required for an IBM product complete                                                                                                                                                                                              |
| Maas360ResellerId | ```string```  | MY_IBM_MAAS360              | Required for an IBM product                                                                                                                                                                                                       |
| TenantId          | ```string```  | MY_TENANT_ID                | Required for a Microsoft product when a migration is requested                                                                                                                                                                    |
| IbmCustomerNumber | ```string```  | MY_IBM_CUSTOMER_NUMBER      | Required for an IBM Importer command be complete                                                                                                                                                                                  |
| IbmMaasAccountId  | ```string```  | MY_IBM_MAAS_ACCOUNT_ID      | Required for an IBM product                                                                                                                                                                                                       |

### Invitation

A customer invitation are managed by the `getCustomerInvitation` entity.

| Field     | Type                          | Example                  | Description                                    |
|-----------|-------------------------------|--------------------------|------------------------------------------------|
| code      | ```string```                  | Abcd123efgH              | The invitation code                            |
| createdAt | ```string```                  | 2021-12-25T23:45:12.123Z | The date when this invitation was created      |
| updatedAt | ```string```                  | 2021-12-25T23:45:12.123Z | The date when this invitation was last updated |
| company   | ```getCustomersCompanyData``` |                          | Company reference                              |
| contact   | ```getCustomersContactData``` |                          | Invitation specific contact                    |
| policy    | ```string```                  | admin                    | Customers policy                               |

### InvitationContact

A customers invitation contact are managed by the `invitationContact` entity.

| Field                   | Type         | Example                     | Description                                |
|-------------------------|--------------|-----------------------------|--------------------------------------------|
| firstname               | ```string``` | John                        | The first name of the end customer contact |
| lastName                | ```string``` | Doe                         | The last name of the end customer contact  |
| email                   | ```string``` | john.doe@examplecompany.com | The e-mail of the end customer contact     |
| userName                | ```string``` | uidd-uidd-uidd              | Generated uidd username                    |

### Company

A customers company are managed by the `company` entity.

| Field                   | Type         | Example   | Description                         |
|-------------------------|--------------|-----------|-------------------------------------|
| reference               | ```string``` | XSP12345  | The end customer company reference  |


## Usage

The customer's client is simply called `CustomersClient`.
You can get it through the main entry point `PublicApiClient` and its method `getCustomersClient()`, or instanciate it directly.

