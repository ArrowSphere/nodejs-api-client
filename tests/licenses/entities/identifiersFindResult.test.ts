import {
  ArrowsphereFindResultFields,
  ErpFindResultFields,
  IdentifiersFindResult,
  IdentifiersFindResultData,
  IdentifiersFindResultFields,
} from '../../../src';
import { expect } from 'chai';

describe('IdentifiersFindResult', () => {
  const IDENTIFIERS_PAYLOAD: IdentifiersFindResultData = {
    [IdentifiersFindResultFields.COLUMN_ARROWSPHERE]: {
      [ArrowsphereFindResultFields.COLUMN_SKU]: 'arrowsphereSku',
    },
    [IdentifiersFindResultFields.COLUMN_ERP]: {
      [ErpFindResultFields.COLUMN_SKU]: 'erpSku',
    },
  };

  describe('constructor', () => {
    it('sets the arrowsphere and erp identifiers', () => {
      const result = new IdentifiersFindResult(IDENTIFIERS_PAYLOAD);

      expect(result.arrowsphere.arrowsphereSku).to.equal('arrowsphereSku');
      expect(result.erp?.erpSku).to.equal('erpSku');
    });

    it('accepts a null erp sku', () => {
      const result = new IdentifiersFindResult({
        ...IDENTIFIERS_PAYLOAD,
        [IdentifiersFindResultFields.COLUMN_ERP]: {
          [ErpFindResultFields.COLUMN_SKU]: null,
        },
      });

      expect(result.erp?.erpSku).to.be.null;
    });

    it('does not create an erp identifier if it is missing', () => {
      const result = new IdentifiersFindResult({
        [IdentifiersFindResultFields.COLUMN_ARROWSPHERE]:
          IDENTIFIERS_PAYLOAD[IdentifiersFindResultFields.COLUMN_ARROWSPHERE],
      });

      expect(result.erp).to.be.undefined;
      expect(result.toJSON()).to.not.have.property(
        IdentifiersFindResultFields.COLUMN_ERP,
      );
    });
  });

  describe('toJSON', () => {
    it('returns the identifiers payload', () => {
      const result = new IdentifiersFindResult(IDENTIFIERS_PAYLOAD);

      expect(result.toJSON()).to.eql(IDENTIFIERS_PAYLOAD);
    });
  });
});
