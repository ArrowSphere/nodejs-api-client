import { GetResult } from '../../../src/licenses/entities/getResult';
import { expect } from 'chai';
import { PAYLOAD_SCHEMA_LICENSE } from '../licensesClient.test';

describe('GetResult', () => {
  const result = new GetResult(PAYLOAD_SCHEMA_LICENSE);

  describe('constructor', () => {
    it('sets a default value and test if object is correctly instanced', () => {
      expect(result).to.be.instanceof(GetResult);
    });
  });

  describe('toJSON', () => {
    it('set default value and get JSON', () => {
      expect(result.toJSON()).to.eqls(PAYLOAD_SCHEMA_LICENSE);
    });
  });
});
