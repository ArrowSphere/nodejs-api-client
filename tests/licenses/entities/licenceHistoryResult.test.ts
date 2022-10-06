import { expect } from 'chai';
import { LicenseHistoryResult } from '../../../src/licenses/entities/history/getLicenseHistoryResult';
import { HISTORY_PAYLOAD, PAYLOAD_LICENSE_HISTORY } from '../licenses.mocks';
import { GetLicenceHistoryResult } from '../../../src/licenses/entities/getLicense/licenceHistoryResult';

describe('License History Result', () => {
  it('licenseHistoryResult toJSON', () => {
    const result = new LicenseHistoryResult(HISTORY_PAYLOAD);
    expect(result.toJSON()).to.deep.equal(HISTORY_PAYLOAD);
  });

  it('GetLicenceHistoryResult toJSON', () => {
    const result = new GetLicenceHistoryResult(PAYLOAD_LICENSE_HISTORY.data);
    expect(result.toJSON()).to.deep.equal(PAYLOAD_LICENSE_HISTORY.data);
  });
});
