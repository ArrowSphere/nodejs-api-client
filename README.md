# ArrowSphere nodejs-api-client package

[![npm version](https://badgen.net/npm/v/@arrowsphere/api-client)](https://badgen.net/npm/v/@arrowsphere/api-client)
[![node version](https://badgen.net/badge/node/>=%2014.15.4/green?icon=terminal)](https://badgen.net/badge/node/>=%2014.15.4/green?icon=terminal)
![Lint, Build, Test](https://github.com/ArrowSphere/nodejs-api-client/workflows/Lint,%20Build,%20Test/badge.svg)

This package provides a Node.js for ArrowSphere's public API.
It should be the only way to make calls to ArrowSphere's API with Node.js code.

To use this package, you need valid access to ArrowSphere, with a valid API key.

## Installation

Install the latest version with

```bash
$ npm install @arrowsphere/api-client
```

## Basic usage
```js
const { PublicApiClient } = require('@arrowsphere/api-client')

const URL = 'https://your-url-to-arrowsphere.example.com';
const API_KEY = 'your API key in ArrowSphere';

const client = (new PublicApiClient())
  .setUrl(URL)
  .setApiKey(API_KEY);

client.getWhoamiClient().getWhoami().then(result => console.log(result))
```

## Specific API clients

WIP