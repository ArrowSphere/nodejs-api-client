import { expect } from 'chai';
import {
  PAYLOAD_SCHEMA_LICENSE,
  PAYLOAD_SCHEMA_LICENSE_WITHOUT_OPTIONAL_FIELDS,
} from '../licensesClient.test';
import {
  ActiveSeatsFindResultFields,
  BuySellFields,
  LicenseGetFields,
  LicenseGetResult,
  LicensePriceGetFields,
  OrderGetFields,
} from '../../../src';

describe('LicenseGetResult', () => {
  const PAYLOAD_WITHOUT_OPTIONAL_FIELDS_EXPECTED = {
    [LicenseGetFields.COLUMN_LICENSE_ID]: '123456',
    [LicenseGetFields.COLUMN_PARENT_LICENSE_ID]: 'parent_license_id',
    [LicenseGetFields.COLUMN_FRIENDLY_NAME]: 'friendly_name',
    [LicenseGetFields.COLUMN_CUSTOMER_REF]: 'customer_name',
    [LicenseGetFields.COLUMN_STATE]: 'state',
    [LicenseGetFields.COLUMN_SERVICE_REF]: 'service_ref',
    [LicenseGetFields.COLUMN_SKU]: 'sku',
    [LicenseGetFields.COLUMN_NAME]: 'name',
    [LicenseGetFields.COLUMN_SEATS]: 10,
    [LicenseGetFields.COLUMN_ACTIVE_SEATS]: {
      [ActiveSeatsFindResultFields.COLUMN_NUMBER]: 3,
      [ActiveSeatsFindResultFields.COLUMN_LAST_UPDATE]:
        PAYLOAD_SCHEMA_LICENSE_WITHOUT_OPTIONAL_FIELDS.data.license[
          LicenseGetFields.COLUMN_ACTIVE_SEATS
        ][ActiveSeatsFindResultFields.COLUMN_LAST_UPDATE],
    },
    [LicenseGetFields.COLUMN_ACTIVATION_DATETIME]: 'activation_datetime',
    [LicenseGetFields.COLUMN_EXPIRY_DATETIME]: 'expiry_datetime',
    [LicenseGetFields.COLUMN_AUTO_RENEW]: undefined,
    [LicenseGetFields.COLUMN_MESSAGE]: 'message',
    [LicenseGetFields.COLUMN_ACTIONS]: undefined,
    [LicenseGetFields.COLUMN_ACTION_MESSAGES]: undefined,
    [LicenseGetFields.COLUMN_ORDER_REFERENCE]: 'reference',
    [LicenseGetFields.COLUMN_ORDER]: {
      [OrderGetFields.COLUMN_LINK]: 'link',
      [OrderGetFields.COLUMN_REFERENCE]: 'reference',
    },
    [LicenseGetFields.COLUMN_VENDOR_LICENSE_ID]: 'vendor_license_id',
    [LicenseGetFields.COLUMN_PERIODICITY]: 'periodicity',
    [LicenseGetFields.COLUMN_TERM]: 'term',
    [LicenseGetFields.COLUMN_CATEGORY]: 'category',
    [LicenseGetFields.COLUMN_PROGRAM]: 'program',
    [LicenseGetFields.COLUMN_ASSOCIATED_SUBSCRIPTION_PROGRAM]:
      'associated_subscription_program',
    [LicenseGetFields.COLUMN_PRICE]: {
      [LicensePriceGetFields.COLUMN_UNIT]: {
        [BuySellFields.COLUMN_BUY]: 2,
        [BuySellFields.COLUMN_SELL]: 3,
      },
      [LicensePriceGetFields.COLUMN_TOTAL]: {
        [BuySellFields.COLUMN_BUY]: 2,
        [BuySellFields.COLUMN_SELL]: 3,
      },
    },
    [LicenseGetFields.COLUMN_ARROW_SUB_CATEGORIES]: undefined,
  };

  const result = new LicenseGetResult(
    PAYLOAD_SCHEMA_LICENSE_WITHOUT_OPTIONAL_FIELDS.data.license,
  );
  const resultWithOptionalPayload = new LicenseGetResult(
    PAYLOAD_SCHEMA_LICENSE.data.license,
  );
  describe('constructor', () => {
    it('sets a payload without optional fields', () => {
      expect(result).to.be.instanceof(LicenseGetResult);
    });

    it('sets a full payload', () => {
      expect(resultWithOptionalPayload).to.be.instanceof(LicenseGetResult);
    });
  });

  describe('toJSON', () => {
    it('sets a payload without optional fields', () => {
      expect(result.toJSON()).to.eqls(PAYLOAD_WITHOUT_OPTIONAL_FIELDS_EXPECTED);
    });

    it('sets a full payload', () => {
      expect(resultWithOptionalPayload.toJSON()).to.eqls(
        PAYLOAD_SCHEMA_LICENSE.data.license,
      );
    });
  });
});
