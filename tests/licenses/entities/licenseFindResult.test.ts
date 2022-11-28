import { expect } from 'chai';
import {
  ActiveSeatsFindResultFields,
  LicenseFindResult,
  LicenseFindResultData,
  LicenseFindResultFields,
  PriceFindResultFields,
} from '../../../src';
import { MOCK_RESULT_DATA } from '../licensesClient.test';

const date = new Date().toISOString();

export const MOCK_LICENSE_DATA_WITHOUT_OPTIONAL_DATA_INPUT: LicenseFindResultData = {
  [LicenseFindResultFields.COLUMN_HIGHLIGHT]: {},
  [LicenseFindResultFields.COLUMN_ACCEPT_EULA]: true,
  [LicenseFindResultFields.COLUMN_ACTIVE_SEATS]: {
    [ActiveSeatsFindResultFields.COLUMN_LAST_UPDATE]: date,
    [ActiveSeatsFindResultFields.COLUMN_NUMBER]: 1,
  },
  [LicenseFindResultFields.COLUMN_AUTO_RENEW]: true,
  [LicenseFindResultFields.COLUMN_BASE_SEAT]: 1,
  [LicenseFindResultFields.COLUMN_CATEGORY]: 'category',
  [LicenseFindResultFields.COLUMN_CLOUD_TYPE]: 'cloud_type',
  [LicenseFindResultFields.COLUMN_CUSTOMER_NAME]: 'customer_name',
  [LicenseFindResultFields.COLUMN_CUSTOMER_REF]: 'ref',
  [LicenseFindResultFields.COLUMN_END_DATE]: date,
  [LicenseFindResultFields.COLUMN_FRIENDLY_NAME]: 'friendly_name',
  [LicenseFindResultFields.COLUMN_ID]: 1,
  [LicenseFindResultFields.COLUMN_IS_ENABLED]: true,
  [LicenseFindResultFields.COLUMN_LAST_UPDATE]: date,
  [LicenseFindResultFields.COLUMN_MARKETPLACE]: 'marketplace',
  [LicenseFindResultFields.COLUMN_MESSAGE]: 'message',
  [LicenseFindResultFields.COLUMN_OFFER]: 'offer',
  [LicenseFindResultFields.COLUMN_PARENT_LINE_ID]: 2,
  [LicenseFindResultFields.COLUMN_PARENT_ORDER_REF]: 'parent_order_ref',
  [LicenseFindResultFields.COLUMN_PARTNER_REF]: 'partner_ref',
  [LicenseFindResultFields.COLUMN_PERIODICITY]: 1,
  [LicenseFindResultFields.COLUMN_PRICE]: {
    [PriceFindResultFields.COLUMN_PRICE_BAND_ARROWSPHERE_SKU]:
      'priceBandArrowsphereSku',
    [PriceFindResultFields.COLUMN_BUY_PRICE]: 1000,
    [PriceFindResultFields.COLUMN_SELL_PRICE]: 1000,
    [PriceFindResultFields.COLUMN_LIST_PRICE]: 1000,
    [PriceFindResultFields.COLUMN_CURRENCY]: 'CURRENCY',
  },
  [LicenseFindResultFields.COLUMN_RESELLER_NAME]: 'reseller_name',
  [LicenseFindResultFields.COLUMN_RESELLER_REF]: 'reseller_ref',
  [LicenseFindResultFields.COLUMN_SEAT]: 1,
  [LicenseFindResultFields.COLUMN_SERVICE_REF]: 'service_ref',
  [LicenseFindResultFields.COLUMN_SKU]: 'SKU',
  [LicenseFindResultFields.COLUMN_START_DATE]: date,
  [LicenseFindResultFields.COLUMN_STATUS_CODE]: 200,
  [LicenseFindResultFields.COLUMN_STATUS_LABEL]: 'Success',
  [LicenseFindResultFields.COLUMN_SUBSCRIPTION_ID]: 'subscription_id',
  [LicenseFindResultFields.COLUMN_SUBSIDIARY_NAME]: 'subsidiary_name',
  [LicenseFindResultFields.COLUMN_TERM]: 1,
  [LicenseFindResultFields.COLUMN_TRIAL]: false,
  [LicenseFindResultFields.COLUMN_TYPE]: 'string',
  [LicenseFindResultFields.COLUMN_UOM]: 'uom',
  [LicenseFindResultFields.COLUMN_VENDOR_CODE]: 'vendor_code',
  [LicenseFindResultFields.COLUMN_VENDOR_NAME]: 'vendor_name',
  [LicenseFindResultFields.COLUMN_VENDOR_SUBSCRIPTION_ID]:
    'vendor_subscription_id',
};

export const MOCK_LICENSE_DATA_WITHOUT_OPTIONAL_DATA_RESPONSE: LicenseFindResultData = {
  [LicenseFindResultFields.COLUMN_HIGHLIGHT]: {},
  [LicenseFindResultFields.COLUMN_ACCEPT_EULA]: true,
  [LicenseFindResultFields.COLUMN_ACTIVE_SEATS]: {
    [ActiveSeatsFindResultFields.COLUMN_LAST_UPDATE]: date,
    [ActiveSeatsFindResultFields.COLUMN_NUMBER]: 1,
  },
  [LicenseFindResultFields.COLUMN_AUTO_RENEW]: true,
  [LicenseFindResultFields.COLUMN_BASE_SEAT]: 1,
  [LicenseFindResultFields.COLUMN_CATEGORY]: 'category',
  [LicenseFindResultFields.COLUMN_CLOUD_TYPE]: 'cloud_type',
  [LicenseFindResultFields.COLUMN_CONFIGS]: undefined,
  [LicenseFindResultFields.COLUMN_WARNINGS]: undefined,
  [LicenseFindResultFields.COLUMN_CUSTOMER_NAME]: 'customer_name',
  [LicenseFindResultFields.COLUMN_CUSTOMER_REF]: 'ref',
  [LicenseFindResultFields.COLUMN_END_DATE]: date,
  [LicenseFindResultFields.COLUMN_FRIENDLY_NAME]: 'friendly_name',
  [LicenseFindResultFields.COLUMN_ID]: 1,
  [LicenseFindResultFields.COLUMN_IS_ENABLED]: true,
  [LicenseFindResultFields.COLUMN_LAST_UPDATE]: date,
  [LicenseFindResultFields.COLUMN_MARKETPLACE]: 'marketplace',
  [LicenseFindResultFields.COLUMN_MESSAGE]: 'message',
  [LicenseFindResultFields.COLUMN_OFFER]: 'offer',
  [LicenseFindResultFields.COLUMN_PARENT_LINE_ID]: 2,
  [LicenseFindResultFields.COLUMN_PARENT_ORDER_REF]: 'parent_order_ref',
  [LicenseFindResultFields.COLUMN_PARTNER_REF]: 'partner_ref',
  [LicenseFindResultFields.COLUMN_PERIODICITY]: 1,
  [LicenseFindResultFields.COLUMN_PRICE]: {
    [PriceFindResultFields.COLUMN_PRICE_BAND_ARROWSPHERE_SKU]:
      'priceBandArrowsphereSku',
    [PriceFindResultFields.COLUMN_BUY_PRICE]: 1000,
    [PriceFindResultFields.COLUMN_SELL_PRICE]: 1000,
    [PriceFindResultFields.COLUMN_LIST_PRICE]: 1000,
    [PriceFindResultFields.COLUMN_CURRENCY]: 'CURRENCY',
  },
  [LicenseFindResultFields.COLUMN_RESELLER_NAME]: 'reseller_name',
  [LicenseFindResultFields.COLUMN_RESELLER_REF]: 'reseller_ref',
  [LicenseFindResultFields.COLUMN_SEAT]: 1,
  [LicenseFindResultFields.COLUMN_SERVICE_REF]: 'service_ref',
  [LicenseFindResultFields.COLUMN_SKU]: 'SKU',
  [LicenseFindResultFields.COLUMN_START_DATE]: date,
  [LicenseFindResultFields.COLUMN_STATUS_CODE]: 200,
  [LicenseFindResultFields.COLUMN_STATUS_LABEL]: 'Success',
  [LicenseFindResultFields.COLUMN_SUBSCRIPTION_ID]: 'subscription_id',
  [LicenseFindResultFields.COLUMN_SUBSIDIARY_NAME]: 'subsidiary_name',
  [LicenseFindResultFields.COLUMN_TERM]: 1,
  [LicenseFindResultFields.COLUMN_TRIAL]: false,
  [LicenseFindResultFields.COLUMN_TYPE]: 'string',
  [LicenseFindResultFields.COLUMN_UOM]: 'uom',
  [LicenseFindResultFields.COLUMN_VENDOR_CODE]: 'vendor_code',
  [LicenseFindResultFields.COLUMN_VENDOR_NAME]: 'vendor_name',
  [LicenseFindResultFields.COLUMN_VENDOR_SUBSCRIPTION_ID]:
    'vendor_subscription_id',
};

describe('LicenseFindResult', () => {
  describe('constructor', () => {
    it('sets a default value for the highlight column', () => {
      const result = new LicenseFindResult({
        ...MOCK_RESULT_DATA.license,
        [LicenseFindResultFields.COLUMN_HIGHLIGHT]: undefined,
      });
      expect(result.highlight).to.eqls({});
    });

    it('sets license with all optional fields', () => {
      const result = new LicenseFindResult(MOCK_RESULT_DATA.license);
      expect(result.toJSON()).to.eqls(MOCK_RESULT_DATA.license);
    });

    it('sets license without optional fields', () => {
      const result = new LicenseFindResult(
        MOCK_LICENSE_DATA_WITHOUT_OPTIONAL_DATA_INPUT,
      );
      expect(result.toJSON()).to.eqls(
        MOCK_LICENSE_DATA_WITHOUT_OPTIONAL_DATA_RESPONSE,
      );
    });
  });
});
