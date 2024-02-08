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
          classification: 'SaaS',
          currency: 'EUR',
          offerName: 'Office 365 E3',
          minQuantity: 1,
          priceBandArrowsphereSku:
            'XSP30064|MS-0A-O365-BUSINESS|XSP30070|XSP174',
          sellPrice: 410.2,
          sku: 'CFQ7TTC0LF8R:0001',
          term: 8640,
          uom: 'LICENSE',
          vendorCode: 'Microsoft',
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
          classification: 'SaaS',
          currency: 'EUR',
          offerName: 'Office 365 E3',
          minQuantity: 1,
          priceBandArrowsphereSku:
            'XSP30064|MS-0A-O365-BUSINESS|XSP30070|XSP174',
          sellPrice: 410.2,
          sku: 'CFQ7TTC0LF8R:0001',
          term: 8640,
          uom: 'LICENSE',
          vendorCode: 'Microsoft',
        },
      ],
    };

    const result = new LicenseConversionSkuResult(input);
    expect(result.toJSON()).to.deep.equal(input);
  });
});
