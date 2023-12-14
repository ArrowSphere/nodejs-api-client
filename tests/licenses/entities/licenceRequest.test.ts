import { expect } from 'chai';
import {
  LicenseRequestResult,
  LicenseRequestResultType,
  LicenseRequestType,
} from '../../../src';

describe('License Request', () => {
  it('GetLicenceRequest toJSON', () => {
    const firstLicenseRequest: LicenseRequestType = {
      licenseReference: 'XSP123',
      action: 'updateFriendlyName',
      status: 'In progress',
      userName: 'API xCP',
      createdAt: '2023-10-31 16:51:00',
    };

    const secondLicenseRequest: LicenseRequestType = {
      licenseReference: 'XSP456',
      action: 'setAutoRenewOn',
      status: 'Done',
      userName: 'API xCP',
      createdAt: '2023-10-31 12:45:00',
      message: 'The license has been updated',
      updatedAt: '2023-10-31 12:46:00',
    };

    const input: LicenseRequestResultType = {
      licenseRequests: [
        {
          ...firstLicenseRequest,
        },
        {
          ...secondLicenseRequest,
        },
      ],
    };

    const result = new LicenseRequestResult(input);

    expect(result.toJSON()).to.deep.equal({
      licenseRequests: [
        {
          ...firstLicenseRequest,
          message: undefined,
          updatedAt: undefined,
        },
        {
          ...secondLicenseRequest,
        },
      ],
    });
  });
});
