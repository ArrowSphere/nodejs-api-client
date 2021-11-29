import { expect } from 'chai';
import { LicensesFindResult } from '../../../src/licenses';
import { LicensesFindResultFields } from '../../../src/licenses/entities/license/licensesFindResult';
import { MOCK_RESULT_DATA } from '../licensesClient.test';

describe('LicenseFindResult', () => {
  describe('constructor', () => {
    it('sets a default value for the highlight column', () => {
      const result = new LicensesFindResult({
        ...MOCK_RESULT_DATA.license,
        [LicensesFindResultFields.COLUMN_HIGHLIGHT]: undefined,
      });
      expect(result.highlight).to.eqls({});
    });
  });
});
