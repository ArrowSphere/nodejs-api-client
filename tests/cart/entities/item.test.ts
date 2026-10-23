import {
  EndCustomer,
  EndCustomerFields,
  EndCustomerMicrosoftFields,
  EndCustomerVendorInfoFields,
  Item,
  ItemFields,
  ItemType,
} from '../../../src';
import { expect } from 'chai';

describe('Item endCustomer', () => {
  const END_CUSTOMER_PAYLOAD = {
    [EndCustomerFields.REFERENCE]: 'XSP12456',
    [EndCustomerFields.VENDOR_INFO]: {
      [EndCustomerVendorInfoFields.MICROSOFT]: {
        [EndCustomerMicrosoftFields.HAS_MICROSOFT_PROGRAM]: true,
        [EndCustomerMicrosoftFields.IS_MCA_VALIDATED]: false,
        [EndCustomerMicrosoftFields.IS_PROVISIONED]: true,
      },
    },
  };

  const ITEM_PAYLOAD: ItemType = {
    [ItemFields.ITEM_ID]: '2587c69e-667a-11ed-9022-0242ac120002',
    [ItemFields.OFFER_NAME]: 'Microsoft 365 Business Premium',
    [ItemFields.PRICE_BAND_ARROWSPHERE_SKU]:
      '031C9E47-4802-4248-838E-778FB1D2CC05',
    [ItemFields.QUANTITY]: 5,
  };

  it('creates an EndCustomer entity from the payload', () => {
    const item = new Item({
      ...ITEM_PAYLOAD,
      [ItemFields.END_CUSTOMER]: END_CUSTOMER_PAYLOAD,
    });

    expect(item.endCustomer).to.be.instanceOf(EndCustomer);
    expect(item.endCustomer?.reference).to.equal('XSP12456');
    expect(item.endCustomer?.vendorInfo?.microsoft).to.deep.equal({
      hasMicrosoftProgram: true,
      isMcaValidated: false,
      isProvisioned: true,
    });
  });

  it('serializes the end customer in toJSON', () => {
    const item = new Item({
      ...ITEM_PAYLOAD,
      [ItemFields.END_CUSTOMER]: END_CUSTOMER_PAYLOAD,
    });

    expect(item.toJSON()[ItemFields.END_CUSTOMER]).to.deep.equal(
      END_CUSTOMER_PAYLOAD,
    );
  });

  it('leaves endCustomer undefined when it is missing', () => {
    const item = new Item(ITEM_PAYLOAD);

    expect(item.endCustomer).to.be.undefined;
    expect(item.toJSON()[ItemFields.END_CUSTOMER]).to.be.undefined;
  });

  it('accepts an end customer without vendor info', () => {
    const endCustomer = new EndCustomer({
      [EndCustomerFields.REFERENCE]: 'XSP12456',
    });

    expect(endCustomer.reference).to.equal('XSP12456');
    expect(endCustomer.vendorInfo).to.be.undefined;
  });
});
