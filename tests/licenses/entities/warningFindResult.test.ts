import { WarningFindResult, WarningFindResultFields } from '../../../src';
import { expect } from 'chai';

describe('WarningFindResult', () => {
  const WARNING_PAYLOAD = {
    [WarningFindResultFields.COLUMN_KEY]: 'key',
    [WarningFindResultFields.COLUMN_MESSAGE]: 'message',
  };

  const result = new WarningFindResult(WARNING_PAYLOAD);

  describe('constructor', () => {
    it('sets a default value and test if object is correctly instanced', () => {
      expect(result.key).to.eqls('key');
    });
  });

  describe('toJSON', () => {
    it('sets a default value for toJSON function', () => {
      expect(result.toJSON()).to.eqls(WARNING_PAYLOAD);
    });
  });
});
