import { GetResult, PublicApiClient } from '../../../src';
import nock from 'nock';
import { PAYLOAD_REGISTER_RESPONSE } from './mocks/register.mocks';
import { expect } from 'chai';

export const SECURITY_REGISTER_MOCK_URL = 'https://securityregister.localhost';
export const POST_REGISTER = new RegExp('/security/.*./register');
export const POST_DEREGISTER = new RegExp('/security/.*./deregister');
export const GET_REGISTER_CHECK = new RegExp('/security/.*./register/check');
export const POST_TRIGGER_ASYNCHRONOUS_UPDATE = new RegExp(
  '/security/.*./update',
);

describe('RegisterClient', function () {
  const client = new PublicApiClient()
    .getSecurityRegisterClient()
    .setUrl(SECURITY_REGISTER_MOCK_URL);

  describe('register', function () {
    it('should call post method', async function () {
      nock(SECURITY_REGISTER_MOCK_URL)
        .post(POST_REGISTER)
        .reply(200, PAYLOAD_REGISTER_RESPONSE);

      const response = await client.register('XSP12345');

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.eqls(PAYLOAD_REGISTER_RESPONSE);
    });
  });

  describe('deregister', function () {
    it('should call post method', async function () {
      nock(SECURITY_REGISTER_MOCK_URL).post(POST_DEREGISTER).reply(204);

      await client.deregister('XSP12345');
      expect(nock.isDone()).to.be.true;
    });
  });

  describe('checkRegister', function () {
    it('should call get method', async function () {
      nock(SECURITY_REGISTER_MOCK_URL).get(GET_REGISTER_CHECK).reply(202);

      await client.checkRegister('XSP12345');
      expect(nock.isDone()).to.be.true;
    });
  });

  describe('triggerAsynchronousUpdate', function () {
    it('should call post method', async function () {
      nock(SECURITY_REGISTER_MOCK_URL)
        .post(POST_TRIGGER_ASYNCHRONOUS_UPDATE)
        .reply(204);

      await client.triggerAsynchronousUpdate('XSP12345');
      expect(nock.isDone()).to.be.true;
    });
  });
});
