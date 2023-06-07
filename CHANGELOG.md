# Changelog

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [3.34.1] - 2023-06-07

### Changed

- stop logging request and response

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
