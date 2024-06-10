# Changelog

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.119.0] - 2024.06.10

### Added
- [partners] Add function to manage users (disable mfa, lock, unlock, unlock insecure login, update scope)
- [graphql-api] Get users update historic
- [licenses] Get license credentials

## [3.118.1] - 2024.06.07

### Fixed
- [customers] Fixes tenantId field for customers endpoints

## [3.118.0] - 2024.05.27

### Added
- [licenses] Adds priceband attributes on get license payload

## [3.117.0] - 2024.05.22

### Added
- [licenses] Adds get coupoun code history endpoint

## [3.116.0] - 2024.05.16

### Added
- [Graphql-api] Adds User and UserHistory types

## [3.115.0] - 2024.05.15

### Removed
- [License bulk action] set license bulk action endpoint url

## [3.114.2] - 2024.04.26

### Removed
- [License schedules tasks] remove deprecated and unsused endpoint getSchedulesTasks

## [3.114.1] - 2024.04.25

### Fixed
- [License schedules tasks] Fixes post/update scheduled task payload

## [3.114.0] - 2024.04.24

### Added
- [customer] add customer by Ref Api Call

## [3.113.0] - 2024.04.24

### Added
- [License Bulk actions] allow REST clients to post a file with form/multipart
- [License Bulk actions] send file to upload changes

## [3.112.0] - 2024.04.24

### Added
- [License find] Add keywords endCustomerOrganizationUnit to find licenses

## [3.111.0] - 2024.04.24

### Added
- [Get License] Add fields price.total.init, price.unit.init

## [3.110.0] - 2024.04.18

### Added
- [License schedules tasks] Update/Get/Delete scheduled tasks

## [3.109.0] - 2024.04.12

### Fixed
- [License schedules tasks] Fixes getSchedulesTasks to handle api payload data with key scheduledTasks

### Added
- [License schedules tasks] Added getScheduledTasks

## [3.108.1] - 2024.04.12

### Fixed
- [License schedules tasks] Fixes get all schedules tasks to prevent breaking changes of api

## [3.108.0] - 2024.04.08

### Added
- [License schedules tasks] Get all schedules tasks

## [3.107.0] - 2024.04.05

### Added
- [License Bulk Actions] Allow/Prepare client to bulk action to upload file

## [3.106.0] - 2024.04.04

### Added
- [Licenses Events] add field `type` in keywordByFields.keywordByFields

## [3.105.0] - 2024.04.04

### Added
- [Customers Contact] add field `organizationUnitIds` in customer contact payload

## [3.104.0] - 2024.03.25

### Added
- [licenses] add endpoints to save special bid and rewrite rate history

## [3.103.0] - 2024.03.22

### Added
- [campaign] add downloadUrls field on campaign

## [3.101.0] - 2024.03.19

### Added
- [customer/contact] add organization object in customer contact payload

### Updated
- Add some configs for IDE

## [3.101.0] - 2024.03.19

### Added
- [licenses] add new field configs and warnings
- [licenses] add new endpoint to get daily consumption predictions

### Fixed
- [licenses] fixes endpoint to post configs

## [3.100.0] - 2024.02.27

### Added
- [consumption] add endpoint to get and update budget settings
- [graphql-api] add license budget
- [licenses] add new field vendor_code 

## [3.99.0] - 2024.02.20

### Added
- [billing] add generate billing export async

## [3.98.0] - 2024-02-14

### Added
- [Well Architected] Add the Reports to the different schema

## [3.97.0] - 2024.02.12

### Updated
- [licenses] update filters and keywords for licenses

## [3.96.0] - 2024.02.06

### Added
- [licenses] add/remove licenses conversion sku payload properties

## [3.95.0] - 2024.02.06

### Added
- [licenses] add properties friendlyName, totalBuyPrice to licenses conversion sku payload

## [3.94.3] - 2024.02.01

### Fixed
- [orders] fix optional fields in order type and class

## [3.94.2] - 2024.01.29

### Fixed
- [licenses] add missing prop endDate to existing licenses conversion sku payload

## [3.94.1] - 2024.01.25

### Fixed
- [Graphql-api] remove Vendor from SelectDataField

## [3.94.0] - 2024.01.25

### Added
- feat(licenses): add new fields and event types

## [3.93.0] - 2024.01.25

### Added
- [Graphql-api] add subscribedProgram of a company

## [3.92.0] - 2024.01.23

### Added

- [Organization Unit] add organization unit endpoint for updating in mass

## [3.91.0] - 2024-01-23

### Added

- [partners] Added the `canImpersonate` field to the `/partners/users/rights` endpoint response

## [3.90.0] - 2024.01.11

### Added
- [License] source marketplace and vendorSku during GET License

## [3.89.0] - 2024.01.11

### Added
- [Organization Unit] add countLicenses fields to get List organization unit

## [3.88.0] - 2024.01.08

### Added
- [license] add bulk action on licenses

## [3.87.0] - 2024.01.08

### Added
- [Quote] allow to request for quote

## [3.86.0] - 2024.01.08

### Added
- [Customer Contact] add organization unit id in customer contact call

## [3.85.0] - 2024-01-05

### Added
- [license] Add Market Segment to License

## [3.84.1] - 2024-01-05

### Fixed
- [license] Fixed license test

## [3.84.0] - 2024-01-04

### Added
- [license] add license relation

## [3.83.0] - 2024-01-04

### Added
- [license] add patch license

## [3.82.0] - 2023-12-29

### Added
- [graphql-api] special price rates history

## [3.81.1] - 2023-12-21

### Fixed
- Fixed get license rate for null value

## [3.81.0] - 2023-12-21

### Added
- [license] Adds rates

## [3.80.1] - 2023-12-21

### Fixed
- Fixed get pricing rate unit tests

## [3.80.0] - 2023-12-21

### Added
- Adds post schedule tasks
- Adds Get/Set Pricing rate on a license

## [3.79.0] - 2023-12-20

### Changed
- [license] Add new columns price.priceBandArrowsphereSku, price.unit.list and price.total.list

## [3.78.0] - 2023-12-15

### Changed
- [graphql-api] Add company extraInformation

## [3.77.1] - 2023-12-15

### Fixed
- Fixed get licenseRequest data structure

## [3.77.0] - 2023-12-13

### Changed
- Add license get credentials endpoint and update get license extraData

## [3.76.0] - 2023-12-08

### Changed
- Add license upgrade to existing endpoint

## [3.75.1] - 2023-12-07

### Fixed
- Fixes get license conversion sku

## [3.75.0] - 2023-12-07

### Changed
- Add license conversion sku endpoints

## [3.74.0] - 2023-12-06

### Changed
- [Customers Contact] Add xcp invitation data in customer contact call

## [3.73.0] - 2023-12-06

### Changed
- Add License priceBand saleConstrainst

## [3.72.0] - 2023-12-05

### Changed
- Adds Organization unit client and endpoints

## [3.71.1] - 2023-12-05

### Fixed
- Fix save order eavs

## [3.71.0] - 2023-12-01

### Changed
- Adds save order eavs

## [3.70.6] - 2023-11-30

### Fixed
- Fix empty assets and promotion in LicenseGetResult

## [3.70.5] - 2023-11-29

### Fixed
- Fix update issue support center

## [3.70.4] - 2023-11-29

### Changed
- Adds score by group for the Checks in Well Architected


## [3.70.3] - 2023-11-29

### Changed
- Adds fields below to LicenseGetResult:

  * vendorBillingId
  * promotion
  * nextRenewalDate
  * assets

## [3.70.2] - 2023-11-29

### Fixed
- Add more criteria to search licenses event

## [3.70.1] - 2023-11-29

### Fixed
- Fixes licenses event schema

## [3.70.0] - 2023-11-28

### Fixed
- Add graphql-api company contacts

## [3.69.3] - 2023-11-24

### Fixed
- Add 'recurring' license event type

## [3.69.2] - 2023-11-24

### Fixed
- Fixed the code type in RegisterCheckReturnVendorStatus as a number and not a string.

### Changed
- Add the isLocked key in the RegisterCheckReturnData.

## [3.69.1] - 2023-11-23

### Fixed
- Fixed the bad schema for ExtraDataType

## [3.69.0] - 2023-11-23

### Changed
- Adds licenses upgrade

## [3.68.0] - 2023-11-21

### Changed
- [Well Architected] Add ExtraDataType to Checks
- [Well Architected] Add Status type to Standard
- [Well Architected] Pass a header with getVendorStatus for the register/check endpoint

## [3.67.0] - 2023-11-17

### Changed
- Order creation endpoint : Add coterminosity + promotion ID option

## [3.66.0] - 2023-11-17

### Changed
- graphql-api adds functions to find companies

## [3.65.1] - 2023-11-17

### Changed
- Fixes License security property

## [3.65.0] - 2023-11-15

### Changed
- Handle several stages of filters for license
- Add security property to License


## [3.64.0] - 2023-11-14

### Changed
- Add more license event types, add license event action enums

## [3.63.0] - 2023-11-13

### Changed
- Add ExtraParams to the RegisterLink type


## [3.62.0] - 2023-11-08

### Changed
- add partners delete endpoint

## [3.61.0] - 2023-11-02

### Changed
- add licenses get last request

## [3.60.0] - 2023-10-31

### Changed
- add licenses get events

## [3.59.1] - 2023-10-26

### Changed
- graphqlApi add field resellerId for Comapny

## [3.59.0] - 2023-10-24

### Changed
- Add hasResources to the check entity


## [3.58.1] - 2023-10-24

### Changed
- Update graphqlApi type add query valueType and idNullValue to InputFilterValueField

## [3.58.0] - 2023-10-19

### Changed
- Update customer client, add post invitation endpoint

## [3.57.1] - 2023-10-13

### Changed
- Fixing the missing pillar in the wellArchitected ressources endpoint

## [3.57.0] - 2023-10-10

### Changed
- add method findPriceBandsByQuery

## [3.56.0] - 2023-10-05

### Changed
- The **security** endpoint is now considered deprecrated.
- Add the **register** and **standards** functions that used the **security** endpoint in the wellArchitected one.

## [3.55.0] - 2023-09-25

### Changed
- update graphql-api spec, add field labelsSeralized


## [3.54.0] - 2023-09-21

### Changed
- Changing the CheckCountByDateAggType type in Well Architected. **count** is deprecated and adding **score** and **scoreUnit**.


## [3.53.0] - 2023-09-23

### Changed
- Creating the Well Architected GraphQL client, to support both Security Dashboard & Cost Optimization Dashboard.

## [3.52.0] - 2023-09-15

### Changed

- Add field program.hasProgramEnrollment
- Add field attributesParameters

## [3.51.2] - 2023-09-14

### Changed

- Update graphqlApi endpoint path

## [3.51.1] - 2023-09-11

### Changed

- Fix support center pagination issues

## [3.51.0] - 2023-08-21

### Fetch User infos

- Add field countryCode in userCompany
- Add field unit in userCompany

## [3.50.0] - 2023-08-21

### Create/update customers

- Add consumption download request

## [3.49.0] - 2023-08-16

### Changed

- Add consumption download request
- Revert Fix Order type, field license is now optional [3.48.2]

## [3.48.3] - 2023-08-09

### Changed

- Changes security score graphql path

## [3.48.2] - 2023-08-09

### Changed

- Fix Order type, field license is now optional

## [3.48.1] - 2023-08-01

### Changed

- Fix type value of SearchProductFilterArgument

## [3.48.0] - 2023-08-01

### Changed

- Fix notifications attributes types

## [3.47.0] - 2023-08-01

### Changed

- graphqlAPI Client

## [3.46.0] - 2023-07-18

### Changed

- security score unregistered

## [3.45.0] - 2023-07-11

### Changed

- Any client can retry calls if error handle is defined

## [3.44.0] - 2023-07-10

### Changed

- Update order type to add vendor tier pricing

## [3.43.2] - 2023-07-06

### Changed

- Fix create order type, name the type of product section

## [3.43.1] - 2023-07-04

### Changed

- Fix create order type, arrowsphere price band sku is optional

## [3.43.0] - 2023-07-04

### Changed

- Add arrowsphere price band sku in order create type

## [3.42.0] - 2023-06-27

### Changed

- Refactor url generation to allow complex origin url

## [3.41.0] - 2023-06-23

### Changed

- Add property to hasAccessToXcm to CompleteWhoAmICompany

## [3.40.0] - 2023-06-22

### Changed

- Add Query GetAdminData for Security Score
- Rename SearchFilterArgument to avoid name collision
- Refactor find products by query
- Add find one priceBand by query
- Add find one product by query
- Add fetch promotions

## [3.39.0] - 2023-06-20

### Changed

- Update security score queries fields

## [3.38.0] - 2023-06-19

### Changed

- Add extra information customer

## [3.37.0] - 2023-06-12

### Changed

- Add extra information order
- Fix path for notification Endpoint

## [3.36.0] - 2023-06-09

### Changed

- Reset path after each url generation

## [3.35.0] - 2023-06-08

### Changed

- Conditional logging of request and response

## [3.34.0] - 2023-05-10

### Changed

- add notification endpoint

## [3.33.0] - 2023-05-26

### Changed

- Update resource entity structure

## [3.32.0] - 2023-05-26

### Changed

- Fix standard client: add /accounts/:accountReference before /standard
- Fix security score fixes type standard

## [3.31.0] - 2023-05-26

### Changed

- Add method removeHeader

## [3.30.0] - 2023-05-26

### Changed

- Add a new Rest client & rename AbstractRestfulClient
- Allow to mergeHeaders
- Allow to propagate easily an error handler from PublicApiClient to its instances
- Add marketplacesAgg type
- Fix ScoresAggType
- Fix array type
- Fix CheckAggType

## [3.29.0] - 2023-05-11

### Changed

- Add GQL client with token security and strong typing
- Add GQL client with token security and strong typing
- Add option token security for the abstract restful client

## [3.28.0] - 2023-05-09

### Changed

- Add catalog programs endpoints

## [3.27.0] - 2023-05-10

### Changed

- update create order client to add attributes for injection scenario

## [3.26.0] - 2023-04-20

### Changed

- Add support center endpoints

## [3.25.0] - 2023-04-13

### Changed

- Add `isManualProvisioning` field in license event offer

## [3.24.1] - 2023-04-13

### Changed

- Fix Extra information type

## [3.24.0] - 2023-04-13

### Changed

- Node 12 is not supported on this client
- Version 16 and 18 of nodejs are supported
- Add Extra information
- Improve define configuration

## [3.23.0] - 2023-03-29

### Changed

- Add license event types

## [3.22.0] - 2023-03-06

### Changed

- Add column in order product

## [3.21.0] - 2023-03-06

### Changed

- Add reference in customer invitation contact

## [3.20.2] - 2023-03-01

### Changed

- Change log level axios

## [3.20.1] - 2023-02-23

### Changed

- Fix customer contact payloads exports

## [3.20.0] - 2023-02-22

### Changed

- Add customerContact endpoints

## [3.19.1] - 2023-02-21

### Changed

- Add imageUuid on feature item campaign v2

## [3.19.0] - 2023-01-23

### Changed

- Add endpoint campaign v2

## [3.18.0] - 2023-01-10

### Changed

- Add endpoint cart

## [3.17.0] - 2022-12-05

### Changed

- Add endpoint security score
- Add and improve logs

## [3.16.0] - 2022-11-09

### Changed

- Add endpoint license auto-renew on/off

## [3.15.1] - 2022-10-28

### Changed

- Update key "note" for license history

## [3.15.0] - 2022-10-24

### Changed

- Add setHeaders function for axios call

## [3.14.0] - 2022-10-20

### Changed

- Add endpoint get license history

## [3.13.3] - 2022-09-26

### Changed

- update Consumption lines Type

## [3.13.2] - 2022-09-23

### Changed

- update Parameters Type

## [3.13.1] - 2022-09-01

### Changed

- update Axios package

## [3.13.0] - 2022-08-26

### Changed

- add endpoint campaign email for campaign landing page

## [3.12.0] - 2022-08-22

### Changed

- refactor: import file and constant

## [3.11.0] - 2022-08-02

### Changed

- add new endpoint campaign details

## [3.10.0] - 2022-07-28

### Changed

- add new policy field in get invitation endpoint

## [3.9.2] - 2022-07-27

### Changed

- add exclusion Filters in find license

## [3.9.1] - 2022-07-26

### Changed

- add backgroundColor key mapping on getActiveCampaign payload

## [3.9.0] - 2022-07-11

### Changed

- Adding 3 new EndPoints of consumption:
  - Get Monthly Consumption
  - Get Daily Consumption
  - Get BI Consumption

## [3.8.0] - 2022-07-04

### Changed

- Adding 2 new EndPoints of Campaign:
  - Get campaign assets
  - Get active Campaign

## [3.7.0] - 2022-06-23

### Changed

- Adding new EndPoint of Customer orders:
  - Get customer orders

## [3.6.0] - 2022-05-17

### Changed

- Adding 4 new EndPoints of Contact Information:
  - Create Contact
  - Get a Contact
  - Get list of Contact
  - Update a Contact

## [3.5.0] - 2022-05-02

### Changed

- Object LicenseGetResult:
  - Add field termCode and periodicityCode

## [3.4.0] - 2022-04-28

### Changed

- Object ProductPrices:
  - Add field termCode and periodicityCode

## [3.3.0] - 2022-04-27

### Changed

- OrderProduct:
  - Add fields isAddon, isTrial, arrowSubCategories
- Create object ProductPrices:
  - Add field term

## [3.2.1] - 2022-04-06

### Changed

- OrderClient :
  - Update type CreateOrderInputType, Fields subscription was optional
  - Update type CreateOrderInputType, Add Fields discount and uplift
- Endpoint List Order :
  - add Pagination
  - Fields Partner was optional
- Endpoint Get Order :
  - Update generated URL
  - Fields Partner was optional

## [3.2.0] - 2022-04-01

### Changed

- Add endpoint create order
- Add endpoint list order
- Add endpoint get an order

## [3.1.0] - 2022-03-21

### Changed

- Add endpoint get customer invitation

## [3.0.0] - 2022-03-08

### Changed

- Moved the property `currency` of license from root to price object

## [2.8.0] - 2022-03-03

### Added

- Add endpoint graphQL

## [2.7.0] - 2022-03-03

### Added

- Update object license for getLicense endpoint
- Add endpoint update license friendlyName

## [2.6.0] - 2022-02-22

### Added

- Add endpoint get customers
- Move file GetResult to use it with all endpoint
- Update GetResult class to add pagination field

## [2.5.0] - 2022-02-14

### Added

- Add endpoint cancel license

## [2.4.0] - 2022-02-11

### Added

- Add endpoint reactivate license

## [2.3.0] - 2022-02-11

### Added

- Add endpoint suspend license

## [2.2.1] - 2022-02-10

### Added

- Fixed Class GetResult
- Add Class GetLicenseResult for intermediate level between GetResult Class and LicenseGetResult
- Refactoring of Units Tests
- Refactoring names of variable in class LicenseGetResult

## [2.2.0] - 2022-01-04

### Added

- Add endpoint update seats

## [2.1.2] - 2022-02-01

### Changed

- Fixed type of `GetLicense` endpoint
- Fixed type of `ActionMessagesGetResult` object
- Fixed type of `ActionsGetResult` object
- Fixed type of `BuySellFindResult` object
- Fixed type of `LicenseGetResult` object
- Fixed type of `OrderGetResult` object

## [2.1.1] - 2022-01-27

### Changed

- Fixed type of `GetLicense` endpoint

## [2.1.0] - 2022-01-25

### Added

- Add endpoint get license (warning, `LicenseGet` object is different `LicenseFind` Object)
- `ActiveSeatsFindresultData` has been renamed to `ActiveSeatsFindResultData` and name `ActiveSeatsFindresultData` is marked deprecated

## [2.0.1] - 2022-01-19

### Changed

- Fixed type `SortParameters` and `FiltersParameters`

## [2.0.0] - 2022-01-06

### Changed

- bad prettier library configuration, adding semicolon in file needed
- Update Offer object and Licence object

#### LicenseFind
- Add more objects to define a license:
  - Add object Warning as "warnings" field:
    - key
    - message
  - Add object Config as "configs" field :
    - name
    - scope
    - state
  - Update field active_seat, it's now an object of type ActiveSeatsData:
    - ActiveSeatsData:
      - lastUpdate
      - number
  - Update field price, it's now an object of type PriceData
    - PriceData:
      - priceBandArrowsphereSku
      - buy_price
      - sell_price
      - list_price
      - currency
#### OfferFind
- Add more objects to define an offer:
  - Add field "classification"
  - Add field "isEnabled"
  - Add field "lastUpdate"
  - Add field "name"
  - Add field "arrowSubCategories"
  - Add object ActionFlags as "actionFlags" field:
    - ActionFlagsData:
      - isAutoRenew
      - isManualProvisioning
      - renewalSku
  - Add object PriceBand as "priceBand" field:
    - PriceBandData:
      - actionFlags
      - billing
      - currency
      - isEnabled
      - marketplace
      - prices
      - saleConstraints
      - identifiers

## [1.0.3] - 2021-06-21

### Changed

- Fixed sort key for licenses v2

## [1.0.2] - 2021-06-21 - BROKEN

### Changed

- Fixed filters for licenses v2

## [1.0.1] - 2021-06-21 - BROKEN

### Changed

- Fixed keywords for licenses v2

## [1.0.0] - 2021-06-18 - BROKEN

### Changed

- Uses licenses/v2 endpoint for licenses client.
- The license endpoint result now has an additional `result` top level object comprised of the previous `license` object alongside with a new `offer` one.
- Updated documentation and changelog matching the changes.
- Updated tests to reflect the new changes.

### Breaking

- `license` object is now one level below inside the find endpoint response result (i.e.: `license.partnerRef` -> `result.license.partnerRef`) leading to a major version update as per the semantic versioning rules.

## [0.4.0] - 2021-04-14

### Changed

- Use correct syntax for private members with actual getters
- Fixed some naming in tests
- Fixed get function parameter generation for abstract client

### Added

- Subscriptions client
- Pre-release workflow
- CheckDomainClient
- General clients specific documentation
- GET/POST admin prefix option for abstract client
- Camel case pagination handling
- Unit testing

## [0.3.4] - 2021-03-02

### Changed

- Fixed currency retrieval field in license find result

## [0.3.3] - 2021-03-02

### Added

- Node strategy matrix for 12.x and 14.x Lint, Build, Test jobs

### Changed

- Build for ES2018 instead of ES2020
- Use setup-node@2 in actions

## [0.3.2] - 2021-02-26

### Changed

- Validatorjs types in production bundle

## [0.3.1] - 2021-02-23

### Added

- Licenses client documentation

## [0.3.0] - 2021-02-23

### Added

- Final licenses client implementation
- Joi for test schema validation
- Licenses client unit tests

### Changed

- Yarn as package manager
- More TSDoc

### Removed

- NPM lock file

## [0.2.1] - 2021-02-19

### Added

- Coveralls coverage report browser
- Coverage badge in readme
- Documentation for generation TSDoc

### Changed

- Fixed main entry point for types and build
- Fixed deps versions in package.json

## [0.2.0] - 2021-02-17

### Added

- AbstractClient
- PublicApiClient
- Exceptions (NotFoundException, PublicApiException, EntityValidationException)
- AbstractEntity
- TSDoc
- WhoAmI Client and Entity
- validatorjs and axios dependencies
- Type declarations to output
- Unit tests

### Changed

- Fix README.md badges (CI and NPM version)
- Changed README.md example
- Build commands
- NPM package only includes built files

### Removed

- Dummy original index files
- Default exports, only use named exports

## [0.1.0] - 2021-02-15

### Added

- Base project configuration (Typescript, Tests, Linters)
- GitHub workflows (build, publish)
- Base documentation (Readme, Changelog, Contributing)
