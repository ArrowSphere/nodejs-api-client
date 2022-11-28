import { GetResult, PublicApiClient } from '../../../src';
import nock from 'nock';
import { expect } from 'chai';
import { PAYLOAD_STANDARDS_RESPONSE } from './mocks/standards.mocks';
import { PAYLOAD_CHECKS_RESPONSE } from './mocks/checks.mocks';
import { PAYLOAD_RESOURCES_RESPONSE } from './mocks/resources.mocks';

export const SECURITY_STANDARDS_MOCK_URL =
  'https://securitystandards.localhost';
export const GET_STANDARDS = new RegExp('/security/.*./standards');
export const GET_CHECKS = new RegExp('/security/.*./standards/.*./checks');
export const GET_RESOURCES = new RegExp(
  '/security/.*./standards/.*./checks/.*./resources',
);

describe('StandardsClient', () => {
  const client = new PublicApiClient()
    .getSecurityStandardsClient()
    .setUrl(SECURITY_STANDARDS_MOCK_URL);

  describe('listSecurityStandards', () => {
    it('should call get method', async function () {
      nock(SECURITY_STANDARDS_MOCK_URL)
        .get(GET_STANDARDS)
        .reply(200, PAYLOAD_STANDARDS_RESPONSE);

      const response = await client.listSecurityStandards('XSP12345');

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.eqls(PAYLOAD_STANDARDS_RESPONSE);
    });
  });

  describe('listSecurityChecks', () => {
    it('should call get method', async function () {
      nock(SECURITY_STANDARDS_MOCK_URL)
        .get(GET_CHECKS)
        .reply(200, PAYLOAD_CHECKS_RESPONSE);

      const response = await client.listSecurityChecks(
        'XSP12345',
        'c1617b95-db6e-40f0-8aa2-ad8c72b53bfb',
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.eqls(PAYLOAD_CHECKS_RESPONSE);
    });
  });

  describe('listSecurityResources', () => {
    it('should call get method', async function () {
      nock(SECURITY_STANDARDS_MOCK_URL)
        .get(GET_RESOURCES)
        .reply(200, PAYLOAD_RESOURCES_RESPONSE);

      const response = await client.listSecurityResources(
        'XSP12345',
        'c1617b95-db6e-40f0-8aa2-ad8c72b53bfb',
        'a2cb10a4-3c97-4927-a56a-a70c6266033b',
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.eqls(PAYLOAD_RESOURCES_RESPONSE);
    });
  });
});
