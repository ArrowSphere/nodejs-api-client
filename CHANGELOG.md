# Changelog

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased
### Added
- Coveralls coverage report browser
- Coverage badge in readme
- Documentation for generation TSDoc

### Changed
- Fixed deps versions in package.json

## [0.2.1] - 2021-02-19
### Changed
- Fixed main entry point for types and build

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