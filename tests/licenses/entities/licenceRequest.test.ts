import { expect } from 'chai';
import {
  LicenseRequestResult,
  LicenseRequestResultType,
  LicenseRequestType,
  OrderStatusEnum,
} from '../../../src';

describe('License Request', () => {
  it('GetLicenceRequest toJSON', () => {
    const firstLicenseRequest: LicenseRequestType = {
      licenseReference: 'XSP123',
      action: 'updateFriendlyName',
      status: OrderStatusEnum.IN_PROGRESS,
      userName: 'API xCP',
      createdAt: '2023-10-31 16:51:00',
    };

    const secondLicenseRequest: LicenseRequestType = {
      licenseReference: 'XSP456',
      action: 'setAutoRenewOn',
      status: OrderStatusEnum.FULFILLED,
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

  it('GetLicenceRequest toJSON should return empty', () => {
    const result = new LicenseRequestResult({});

    expect(result.toJSON()).to.deep.equal({
      licenseRequests: undefined,
    });
  });
});
