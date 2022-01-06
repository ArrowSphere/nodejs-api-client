import { expect } from 'chai';
import { ActionMessagesGetResult, LicenseGetFields } from '../../../src';
import { PAYLOAD_SCHEMA_LICENSE } from '../licensesClient.test';

describe('ActionMessagesGetResult', () => {
  const result = new ActionMessagesGetResult(
    PAYLOAD_SCHEMA_LICENSE.data.license[
      LicenseGetFields.COLUMN_ACTION_MESSAGES
    ][0],
  );
  describe('constructor', () => {
    it('sets a default value for object', function () {
      expect(result).to.be.instanceof(ActionMessagesGetResult);
    });
  });

  describe('toJSON', () => {
    it('sets a default value for toJSON function', function () {
      expect(result.toJSON()).to.eqls(
        PAYLOAD_SCHEMA_LICENSE.data.license[
          LicenseGetFields.COLUMN_ACTION_MESSAGES
        ][0],
      );
    });
  });
});
