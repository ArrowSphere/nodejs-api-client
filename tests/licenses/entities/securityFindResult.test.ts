import { SecurityFindResult, SecurityFindResultFields } from '../../../src';
import { expect } from 'chai';

describe('SecurityFindResult', () => {
  const SECURITY_PAYLOAD = {
    [SecurityFindResultFields.COLUMN_ACTIVE_FRAUD_EVENTS]: 0,
  };

  const result = new SecurityFindResult(SECURITY_PAYLOAD);

  describe('constructor', () => {
    it('sets a default value and test if object is correctly instanced', () => {
      expect(result.activeFraudEvents).to.eqls(0);
    });
  });

  describe('toJSON', () => {
    it('sets a default value for toJSON function', () => {
      expect(result.toJSON()).to.eqls(SECURITY_PAYLOAD);
    });
  });
});
