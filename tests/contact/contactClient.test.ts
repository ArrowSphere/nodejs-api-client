import { ContactInformation, GetResult, PublicApiClient } from '../../src';
import nock from 'nock';
import { constants } from 'http2';
import { expect } from 'chai';
import {
  CONTACT_CREATE_REQUEST,
  CONTACT_CREATE_RESPONSE,
  CONTACT_GET_RESPONSE,
  CONTACT_LIST_RESPONSE,
  CONTACT_PATCH_REQUEST,
  CONTACT_PATCH_RESPONSE,
} from './mocks/contacts.mocks';

export const CONTACT_MOCK_URL = 'https://contacts.localhost';
export const CONTACT = '/contacts';
export const GET_CONTACT_URL = new RegExp('/contacts.*');
const ANONYMIZE_PATH = `/contacts/anonymize`;

describe('ContactClient', function () {
  const client = new PublicApiClient()
    .getContactClient()
    .setUrl(CONTACT_MOCK_URL);

  describe('createContact', function () {
    it('call the post method', async function () {
      nock(CONTACT_MOCK_URL)
        .post(CONTACT)
        .reply(constants.HTTP_STATUS_OK, CONTACT_CREATE_RESPONSE);

      const response: GetResult<ContactInformation.ContactCreate> = await client.createContact(
        CONTACT_CREATE_REQUEST,
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equal(CONTACT_CREATE_RESPONSE);
    });
  });

  describe('listContact', function () {
    it('call the get method without parameters (list)', async function () {
      nock(CONTACT_MOCK_URL)
        .get(GET_CONTACT_URL)
        .reply(constants.HTTP_STATUS_OK, CONTACT_LIST_RESPONSE);

      const response: GetResult<ContactInformation.ContactList> = await client.listContact();

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equal(CONTACT_LIST_RESPONSE);
    });
  });

  describe('getContact', function () {
    it('call the get method', async function () {
      nock(CONTACT_MOCK_URL)
        .get(GET_CONTACT_URL)
        .reply(constants.HTTP_STATUS_OK, CONTACT_GET_RESPONSE);

      const response: GetResult<ContactInformation.Contact> = await client.getContact(
        1234,
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equal(CONTACT_GET_RESPONSE);
    });
  });

  describe('updateContact', function () {
    it('call the patch method', async function () {
      nock(CONTACT_MOCK_URL)
        .patch(GET_CONTACT_URL)
        .reply(constants.HTTP_STATUS_OK, CONTACT_PATCH_RESPONSE);

      const response: GetResult<ContactInformation.Contact> = await client.updateContact(
        1234,
        CONTACT_PATCH_REQUEST,
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equal(CONTACT_PATCH_RESPONSE);
    });
  });

  describe('unlockInsecureLoginContact', () => {
    it('calls the unlockInsecureLoginContact method', async () => {
      nock(CONTACT_MOCK_URL)
        .patch(`${CONTACT}/123/unlock-insecure-login`)
        .reply(204);

      await client.unlockInsecureLoginContact(123);
      expect(nock.isDone()).to.be.true;
    });
  });

  describe('disableMfaContact', () => {
    it('calls the disableMfaContact method', async () => {
      nock(CONTACT_MOCK_URL).patch(`${CONTACT}/123/disable-mfa`).reply(204);

      await client.disableMfaContact(123);
      expect(nock.isDone()).to.be.true;
    });
  });

  describe('lockContact', () => {
    it('calls the lockContact method', async () => {
      nock(CONTACT_MOCK_URL).patch(`${CONTACT}/123/status`).reply(204);

      await client.lockContact(123);
      expect(nock.isDone()).to.be.true;
    });
  });

  describe('unlockContact', () => {
    it('calls the unlockContact method', async () => {
      nock(CONTACT_MOCK_URL).patch(`${CONTACT}/123/status`).reply(204);

      await client.unlockContact(123);
      expect(nock.isDone()).to.be.true;
    });
  });

  describe('disableAliasContact', () => {
    it('calls the disableAliasContact method', async () => {
      nock(CONTACT_MOCK_URL).patch(`${CONTACT}/123/disable-alias`).reply(204);

      await client.disableAliasContact(123, 'aliasUsername');
      expect(nock.isDone()).to.be.true;
    });
  });

  describe('anonymizeContacts', () => {
    it('calls the patchUser method', async () => {
      nock(CONTACT_MOCK_URL).patch(ANONYMIZE_PATH).reply(204);

      await client.anonymizeContacts({
        contacts: [123],
        partnerRef: 'XSP123',
      });

      expect(nock.isDone()).to.be.true;
    });
  });
});
