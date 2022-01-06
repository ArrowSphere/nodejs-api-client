import { ConfigFindResult, ConfigFindResultFields } from '../../../src';
import { expect } from 'chai';

describe('ConfigFindResult', () => {
  const CONFIG_PAYLOAD = {
    [ConfigFindResultFields.COLUMN_NAME]: 'name',
    [ConfigFindResultFields.COLUMN_SCOPE]: 'scope',
    [ConfigFindResultFields.COLUMN_STATE]: 'state',
  };

  const result = new ConfigFindResult(CONFIG_PAYLOAD);

  describe('constructor', () => {
    it('sets a default value for the warning field', () => {
      expect(result).to.be.instanceof(ConfigFindResult);
    });
  });

  describe('toJSON', () => {
    it('sets a default value for the toJSON function', () => {
      expect(result.toJSON()).to.eqls(CONFIG_PAYLOAD);
    });
  });
});
