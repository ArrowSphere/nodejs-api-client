import { expect } from 'chai';
import { LicenseRequest, LicenseRequestType } from '../../../src';

describe('License Request', () => {
  it('GetLicenceRequest toJSON', () => {
    const input: LicenseRequestType = {
      licenseReference: 'XSP4289490',
      action: 'updateFriendlyName',
      status: 'In progress',
      userName: 'API xCP',
      createdAt: '2023-10-31 16:51:00',
    };
    const result = new LicenseRequest(input);
    expect(result.toJSON()).to.deep.equal({
      ...input,
      message: undefined,
      updatedAt: undefined,
    });
  });
});
