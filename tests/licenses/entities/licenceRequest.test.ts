import { expect } from 'chai';
import { LicenseRequestResult, LicenseRequestType } from '../../../src';

describe('License Request', () => {
  it('GetLicenceRequest toJSON', () => {
    const input: LicenseRequestType[] = [
      {
        licenseReference: 'XSP123',
        action: 'updateFriendlyName',
        status: 'In progress',
        userName: 'API xCP',
        createdAt: '2023-10-31 16:51:00',
      },
      {
        licenseReference: 'XSP456',
        action: 'setAutoRenewOn',
        status: 'Done',
        userName: 'API xCP',
        createdAt: '2023-10-31 12:45:00',
        message: 'The license has been updated',
        updatedAt: '2023-10-31 12:46:00',
      },
    ];

    const result = new LicenseRequestResult(input);

    expect(result.toJSON()).to.deep.equal({
      licenseRequests: [
        {
          ...input[0],
          message: undefined,
          updatedAt: undefined,
        },
        {
          ...input[1],
        },
      ],
    });
  });
});
