import { expect } from 'chai';
import {
  LicenseConversionSkuResult,
  LicenseConversionSkuResultData,
} from '../../../src';

describe('License Conversion Sku', () => {
  it('License Conversion Sku for existing', () => {
    const input: LicenseConversionSkuResultData = {
      offers: [
        {
          billingCycle: 720,
          endDate: '2021-12-31T23:59:59Z',
          licenseReference: 'XSP5046568',
          name: 'Office 365 E3',
          seats: 1,
          sku: 'CFQ7TTC0LF8R:0001',
          term: 8640,
        },
      ],
    };

    const result = new LicenseConversionSkuResult(input);
    expect(result.toJSON()).to.deep.equal(input);
  });

  it('License Conversion Sku', () => {
    const input: LicenseConversionSkuResultData = {
      offers: [
        {
          billingCycle: 720,
          name: 'Office 365 E3',
          sku: 'CFQ7TTC0LF8R:0001',
          term: 8640,
        },
      ],
    };

    const result = new LicenseConversionSkuResult(input);
    expect(result.toJSON()).to.deep.equal(input);
  });
});
