import { expect } from 'chai';
import { PAYLOAD_LICENSE_HISTORY } from '../licenses.mocks';
import { LicenceHistoryResult } from '../../../src';

describe('License History Result', () => {
  it('GetLicenceHistoryResult toJSON', () => {
    const result = new LicenceHistoryResult(PAYLOAD_LICENSE_HISTORY.data);
    expect(result.toJSON()).to.deep.equal(PAYLOAD_LICENSE_HISTORY.data);
  });
});
