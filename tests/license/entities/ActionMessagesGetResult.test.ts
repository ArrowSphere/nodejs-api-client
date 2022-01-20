import { expect } from 'chai';
import { ActionMessagesGetResult, LicenseGetFields } from '../../../src';
import { PAYLOAD_SCHEMA_LICENSE } from '../licenseClient.test';

describe('ActionMessagesGetResult', () => {
  const result = new ActionMessagesGetResult(
    PAYLOAD_SCHEMA_LICENSE.data.license[
      LicenseGetFields.COLUMN_ACTION_MESSAGES
    ][0],
  );
  describe('constructor', () => {
    it('', function () {
      expect(result).to.be.instanceof(ActionMessagesGetResult);
    });
  });

  describe('toJSON', () => {
    expect(result.toJSON()).to.eqls(
      PAYLOAD_SCHEMA_LICENSE.data.license[
        LicenseGetFields.COLUMN_ACTION_MESSAGES
      ][0],
    );
  });
});
