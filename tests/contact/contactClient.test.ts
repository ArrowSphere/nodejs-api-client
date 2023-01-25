import { ContactInformation, GetResult, PublicApiClient } from '../../src';
import nock from 'nock';
import { constants } from 'http2';
import { expect } from 'chai';
import {
  CONTACT_CREATE_REQUEST,
  CONTACT_CREATE_RESPONSE,
  CONTACT_CREATE_WITH_USERNAME_REQUEST,
  CONTACT_GET_RESPONSE,
  CONTACT_GET_WITH_USERNAME_RESPONSE,
  CONTACT_LIST_RESPONSE,
  CONTACT_PATCH_REQUEST,
  CONTACT_PATCH_RESPONSE,
  CONTACT_PATCH_WITH_USERNAME_REQUEST,
  CONTACT_PATCH_WITH_USERNAME_RESPONSE,
} from './mocks/contacts.mocks';

export const CONTACT_MOCK_URL = 'https://contacts.localhost';
export const CONTACT = '/contacts';
export const GET_CONTACT_URL = new RegExp('/contacts.*');

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

    it('call the post method with username', async function () {
      nock(CONTACT_MOCK_URL)
        .post(CONTACT)
        .reply(constants.HTTP_STATUS_OK, CONTACT_CREATE_RESPONSE);

      const response: GetResult<ContactInformation.ContactCreate> = await client.createContact(
        CONTACT_CREATE_WITH_USERNAME_REQUEST,
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
        '1234',
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equal(CONTACT_GET_RESPONSE);
    });

    it('call the get method contact has username', async function () {
      nock(CONTACT_MOCK_URL)
        .get(GET_CONTACT_URL)
        .reply(constants.HTTP_STATUS_OK, CONTACT_GET_WITH_USERNAME_RESPONSE);

      const response: GetResult<ContactInformation.Contact> = await client.getContact(
        '1234',
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equal(
        CONTACT_GET_WITH_USERNAME_RESPONSE,
      );
    });
  });

  describe('updateContact', function () {
    it('call the patch method', async function () {
      nock(CONTACT_MOCK_URL)
        .patch(GET_CONTACT_URL)
        .reply(constants.HTTP_STATUS_OK, CONTACT_PATCH_RESPONSE);

      const response: GetResult<ContactInformation.Contact> = await client.updateContact(
        '1234',
        CONTACT_PATCH_REQUEST,
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equal(CONTACT_PATCH_RESPONSE);
    });

    it('call the patch method with username contact', async function () {
      nock(CONTACT_MOCK_URL)
        .patch(GET_CONTACT_URL)
        .reply(constants.HTTP_STATUS_OK, CONTACT_PATCH_WITH_USERNAME_RESPONSE);

      const response: GetResult<ContactInformation.Contact> = await client.updateContact(
        '1234',
        CONTACT_PATCH_WITH_USERNAME_REQUEST,
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equal(
        CONTACT_PATCH_WITH_USERNAME_RESPONSE,
      );
    });
  });
});
