import { expect } from 'chai';
import { PAYLOAD_SCHEMA_LICENSE } from '../licensesClient.test';
import { LicenseGetResult } from '../../../src';

describe('LicenseGetResult', () => {
  const result = new LicenseGetResult(PAYLOAD_SCHEMA_LICENSE.data.license);
  describe('constructor', () => {
    it('sets a default value for object', () => {
      expect(result).to.be.instanceof(LicenseGetResult);
    });
  });

  describe('toJSON', () => {
    it('set default value and get JSON', () => {
      expect(result.toJSON()).to.eqls(PAYLOAD_SCHEMA_LICENSE.data.license);
    });
  });
});
