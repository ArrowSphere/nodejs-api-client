# Changelog

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.4.0] - TBD

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
