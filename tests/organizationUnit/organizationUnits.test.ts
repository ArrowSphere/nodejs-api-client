import { PublicApiClient, GetResult, OrganizationUnitClient } from '../../src';
import nock from 'nock';
import { expect } from 'chai';
import {
  ORGANISATION_UNIT_CREATE_RESPONSE_MOCK,
  ORGANISATION_UNIT_GET_RESPONSE_MOCK,
  ORGANISATION_UNIT_PATCH_RESPONSE_MOCK,
  ORGANISATION_UNIT_RESPONSE_LIST_MOCK,
} from './mocks/response.mocks';
import { ORGANISATION_UNIT_CREATE_MOCK } from './mocks/create.mocks';
import { ORGANISATION_UNIT_PATCH_MOCK } from './mocks/update.mocks';
import { constants } from 'http2';
import { beforeEach } from 'mocha';

export const ORGANIZATION_UNIT_MOCK_URL = 'https://organizationUnits.localhost';
export const ORGANIZATION_UNIT_DEFAULT = '/partners/organisationUnits';
export const ORGANIZATION_UNIT_WITH_PARAMETERS = new RegExp(
  '/partners/organisationUnits/*',
);

let client: OrganizationUnitClient;

describe('organizationUnits', () => {
  beforeEach(() => {
    client = new PublicApiClient()
      .getOrganizationUnitClient()
      .setUrl(ORGANIZATION_UNIT_MOCK_URL);
  });

  afterEach(() => {
    nock.cleanAll();
  });

  describe('getListOrganizationUnits', () => {
    it('calls the get method', async () => {
      nock(ORGANIZATION_UNIT_MOCK_URL)
        .get(ORGANIZATION_UNIT_WITH_PARAMETERS)
        .reply(constants.HTTP_STATUS_OK, ORGANISATION_UNIT_RESPONSE_LIST_MOCK);

      const response = await client.getList();

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.eqls(ORGANISATION_UNIT_RESPONSE_LIST_MOCK);
    });
  });

  describe('postOrganizationUnits', () => {
    it('calls the post method', async () => {
      nock(ORGANIZATION_UNIT_MOCK_URL)
        .post(ORGANIZATION_UNIT_DEFAULT)
        .reply(
          constants.HTTP_STATUS_CREATED,
          ORGANISATION_UNIT_CREATE_RESPONSE_MOCK,
        );

      const response = await client.create(ORGANISATION_UNIT_CREATE_MOCK);

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.eqls(ORGANISATION_UNIT_CREATE_RESPONSE_MOCK);
    });
  });

  describe('getOneOrganizationUnits', () => {
    it('calls the get method', async () => {
      nock(ORGANIZATION_UNIT_MOCK_URL)
        .get(ORGANIZATION_UNIT_WITH_PARAMETERS)
        .reply(constants.HTTP_STATUS_OK, ORGANISATION_UNIT_GET_RESPONSE_MOCK);

      const response = await client.getOne('XSPOU17727');

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.eqls(ORGANISATION_UNIT_GET_RESPONSE_MOCK);
    });
  });

  describe('updateOrganizationUnits', () => {
    it('calls the patch method', async () => {
      nock(ORGANIZATION_UNIT_MOCK_URL)
        .patch(ORGANIZATION_UNIT_WITH_PARAMETERS)
        .reply(constants.HTTP_STATUS_OK, ORGANISATION_UNIT_PATCH_RESPONSE_MOCK);

      const response = await client.update(
        'XSPOU17727',
        ORGANISATION_UNIT_PATCH_MOCK,
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.eqls(ORGANISATION_UNIT_PATCH_RESPONSE_MOCK);
    });
  });

  describe('deleteOneOrganizationUnits', () => {
    it('calls the delete method', async () => {
      nock(ORGANIZATION_UNIT_MOCK_URL)
        .delete(ORGANIZATION_UNIT_WITH_PARAMETERS)
        .reply(204);

      await client.deleteOne('XSPOU17727');

      expect(nock.isDone()).to.be.true;
    });
  });
});
