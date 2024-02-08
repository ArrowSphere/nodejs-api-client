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
          buyPrice: 400.2,
          classification: 'SaaS',
          currency: 'EUR',
          endDate: '2023-06-08T10:34:28+00:00',
          friendlyName: 'XSP30064|MS-0A-O365-BUSINESS|XSP30070|XSP174',
          offerName: 'Office 365 E3',
          partnerRef: 'XSP5046568',
          priceBandArrowsphereSku:
            'XSP30064|MS-0A-O365-BUSINESS|XSP30070|XSP174',
          seats: 1,
          sku: 'CFQ7TTC0LF8R:0001',
          uom: 'LICENSE',
          vendorCode: 'Microsoft',
        },
      ],
    };

    const result = new LicenseConversionSkuResult(input);
    expect(result.toJSON()).to.deep.equal({
      offers: [
        {
          ...input.offers[0],
          billingCycle: undefined,
          minQuantity: undefined,
          sellPrice: undefined,
          term: undefined,
        },
      ],
    });
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
    expect(result.toJSON()).to.deep.equal({
      offers: [
        {
          ...input.offers[0],
          buyPrice: undefined,
          endDate: undefined,
          friendlyName: undefined,
          partnerRef: undefined,
          seats: undefined,
        },
      ],
    });
  });
});
