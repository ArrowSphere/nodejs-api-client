# ArrowSphere nodejs-api-client package

[![npm version](https://badgen.net/npm/v/@arrowsphere/api-client)](https://www.npmjs.com/package/@arrowsphere/api-client)
[![node version](https://badgen.net/badge/node/>=%2012.21.0/green?icon=terminal)](https://badgen.net/badge/node/>=%2012.21.0/green?icon=terminal)
[![Lint, Build, Test](https://github.com/ArrowSphere/nodejs-api-client/workflows/Lint,%20Build,%20Test/badge.svg)](https://github.com/ArrowSphere/nodejs-api-client/actions?query=workflow%3A%22Lint%2C+Build%2C+Test%22)
[![Coverage Status](https://coveralls.io/repos/github/ArrowSphere/nodejs-api-client/badge.svg?branch=main)](https://coveralls.io/github/ArrowSphere/nodejs-api-client?branch=main)

This package provides a Node.js HTTP client for ArrowSphere's public API.
It should be the only way to make calls to ArrowSphere's API with Node.js code.

To use this package, you need valid access to ArrowSphere, with a valid API key.

## Installation

Install the latest version with

```bash
npm install @arrowsphere/api-client
```

## Basic usage

```js
const { PublicApiClient } = require('@arrowsphere/api-client')

const URL = 'https://your-url-to-arrowsphere.example.com'
const API_KEY = 'your API key in ArrowSphere'

const client = new PublicApiClient().setUrl(URL).setApiKey(API_KEY)

client
  .getWhoamiClient()
  .getWhoami()
  .then((result) => console.log(result))
```

## TypeDoc documentation

To generate the [TypeDoc](https://typedoc.org/) documentation and explore it, use the following command

```shell
npm run doc
```

The output documentation should be located in the `docs/` folder, just open the index.html file in any local browser.

## Specific API clients

### Licenses

- [Licenses](./src/licenses/README.md)
