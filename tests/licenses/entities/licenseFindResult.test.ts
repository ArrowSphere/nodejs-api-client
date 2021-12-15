import { expect } from 'chai';
import { LicenseFindResult } from '../../../src/licenses';
import { LicenseFindResultFields } from '../../../src/licenses/entities/license/licenseFindResult';
import { MOCK_RESULT_DATA } from '../licensesClient.test';

describe('LicenseFindResult', () => {
  describe('constructor', () => {
    it('sets a default value for the highlight column', () => {
      const result = new LicenseFindResult({
        ...MOCK_RESULT_DATA.license,
        [LicenseFindResultFields.COLUMN_HIGHLIGHT]: undefined,
      });
      expect(result.highlight).to.eqls({});
    });
  });
});
