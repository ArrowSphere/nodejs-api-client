import {
  GetResult,
  OrganizationUnitClient,
  OrganizationUnitClientActionFields,
  OrganizationUnitClientActionType,
  PublicApiClient,
} from '../../src';
import nock from 'nock';
import { expect } from 'chai';
import {
  ORGANIZATION_UNIT_CREATE_RESPONSE_MOCK,
  ORGANIZATION_UNIT_GET_RESPONSE_MOCK,
  ORGANIZATION_UNIT_PATCH_RESPONSE_MOCK,
  ORGANIZATION_UNIT_RESPONSE_LIST_MOCK,
} from './mocks/response.mocks';
import { ORGANIZATION_UNIT_CREATE_MOCK } from './mocks/create.mocks';
import { ORGANIZATION_UNIT_PATCH_MOCK } from './mocks/update.mocks';
import { constants } from 'http2';
import { beforeEach } from 'mocha';

export const ORGANIZATION_UNIT_MOCK_URL = 'https://organizationUnits.localhost';
export const ORGANIZATION_UNIT_DEFAULT = '/organizationUnits';
export const ORGANIZATION_UNIT_WITH_PARAMETERS = new RegExp(
  '/organizationUnits/*/*',
);
export const ORGANIZATION_UNIT_NEW_ENDPOINT_WITH_PARAMETERS = new RegExp(
  '/organizationUnits/*',
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
        .reply(constants.HTTP_STATUS_OK, ORGANIZATION_UNIT_RESPONSE_LIST_MOCK);

      const response = await client.getList();

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.eqls(ORGANIZATION_UNIT_RESPONSE_LIST_MOCK);
    });
  });

  describe('postOrganizationUnits', () => {
    it('calls the post method', async () => {
      nock(ORGANIZATION_UNIT_MOCK_URL)
        .post(ORGANIZATION_UNIT_DEFAULT)
        .reply(
          constants.HTTP_STATUS_CREATED,
          ORGANIZATION_UNIT_CREATE_RESPONSE_MOCK,
        );

      const response = await client.create(ORGANIZATION_UNIT_CREATE_MOCK);

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.eqls(ORGANIZATION_UNIT_CREATE_RESPONSE_MOCK);
    });
  });

  describe('getOneOrganizationUnits', () => {
    it('calls the get method', async () => {
      nock(ORGANIZATION_UNIT_MOCK_URL)
        .get(ORGANIZATION_UNIT_WITH_PARAMETERS)
        .reply(constants.HTTP_STATUS_OK, ORGANIZATION_UNIT_GET_RESPONSE_MOCK);

      const response = await client.getOne('XSPOU17727');

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.eqls(ORGANIZATION_UNIT_GET_RESPONSE_MOCK);
    });
  });

  describe('updateOrganizationUnits', () => {
    it('calls the patch method', async () => {
      nock(ORGANIZATION_UNIT_MOCK_URL)
        .patch(ORGANIZATION_UNIT_WITH_PARAMETERS)
        .reply(constants.HTTP_STATUS_OK, ORGANIZATION_UNIT_PATCH_RESPONSE_MOCK);

      const response = await client.update(
        'XSPOU17727',
        ORGANIZATION_UNIT_PATCH_MOCK,
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.eqls(ORGANIZATION_UNIT_PATCH_RESPONSE_MOCK);
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

  describe('patchAllOrganizationUnit', () => {
    it('calls the patch all method', async () => {
      nock(ORGANIZATION_UNIT_MOCK_URL)
        .patch(ORGANIZATION_UNIT_NEW_ENDPOINT_WITH_PARAMETERS)
        .reply(204);

      const payload: OrganizationUnitClientActionType = {
        licenses: ['XSPLI17727'],
        users: ['XSPOU17727'],
      };

      await client.batchUpdate(
        OrganizationUnitClientActionFields.ACTION_ATTACH,
        'REF42',
        payload,
      );

      expect(nock.isDone()).to.be.true;
    });
  });
});
