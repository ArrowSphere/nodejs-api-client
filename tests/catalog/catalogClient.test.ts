import { GetResult, PublicApiClient } from '../../src';
import nock from 'nock';
import { constants } from 'http2';
import { expect } from 'chai';
import {
  GET_PROGRAM_RESPONSE,
  LIST_PROGRAMS_RESPONSE,
} from './mocks/program.mocks';

export const CATALOG_MOCK_URL = 'https://catalog.localhost/';
export const CATALOG_MOCK_PATH = '/catalog';

export const LIST_PROGRAMS_URL_INTERCEPTOR = new RegExp(
  `^${CATALOG_MOCK_PATH}/categories/[A-Za-z0-9]+/programs+(\\?.*)?`,
);

export const GET_PROGRAM_URL_INTERCEPTOR = new RegExp(
  `^${CATALOG_MOCK_PATH}/categories/[A-Za-z0-9]+/programs/[A-Za-z0-9]+(\\?.*)?`,
);

describe('CatalogClient', function () {
  const client = new PublicApiClient()
    .getCatalogClient()
    .setUrl(CATALOG_MOCK_URL);

  describe('list programs', function () {
    it('call the get method', async function () {
      nock(CATALOG_MOCK_URL)
        .get(LIST_PROGRAMS_URL_INTERCEPTOR)
        .reply(constants.HTTP_STATUS_OK, LIST_PROGRAMS_RESPONSE);

      const response = await client.listPrograms('SASS');

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equal(LIST_PROGRAMS_RESPONSE);
    });
  });

  describe('get program', function () {
    it('call the get method', async function () {
      nock(CATALOG_MOCK_URL)
        .get(GET_PROGRAM_URL_INTERCEPTOR)
        .reply(constants.HTTP_STATUS_OK, GET_PROGRAM_RESPONSE);

      const response = await client.getProgram('SASS', 'Microsoft');

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equal(GET_PROGRAM_RESPONSE);
    });
  });
});
