import { expect } from 'chai';
import {
  UpgradeResult,
  UpgradeResultType,
} from '../../../src/licenses/entities/license/upgradeResult';

describe('Upgrade result', () => {
  it('UpgradeResult toJSON', () => {
    const input: UpgradeResultType = {
      quantity: 2,
      name: 'Microsoft 365',
      order: {
        link: '/order/123',
        reference: 'XSP123',
      },
      periodicity: '720',
      sku: 'MSCSP:123',
      term: '1 year',
    };

    const result = new UpgradeResult(input);

    expect(result.toJSON()).to.deep.equal(input);
  });

  it('UpgradeResult toJSON with empty order', () => {
    const input: UpgradeResultType = {
      quantity: 2,
      name: 'Microsoft 365',
      periodicity: '720',
      sku: 'MSCSP:123',
      term: '1 year',
    };

    const result = new UpgradeResult(input);

    expect(result.toJSON()).to.deep.equal({
      ...input,
      order: undefined,
    });
  });
});
