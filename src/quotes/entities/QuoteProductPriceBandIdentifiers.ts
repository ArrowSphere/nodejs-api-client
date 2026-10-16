import { AbstractEntity } from '../../abstractEntity';
import {
  QuoteProductPriceBandArrowsphereIdentifier,
  QuoteProductPriceBandArrowsphereIdentifierData,
} from './QuoteProductPriceBandArrowsphereIdentifier';
import {
  QuoteProductPriceBandErpIdentifier,
  QuoteProductPriceBandErpIdentifierData,
} from './QuoteProductPriceBandErpIdentifier';
import {
  QuoteProductPriceBandVendorIdentifier,
  QuoteProductPriceBandVendorIdentifierData,
} from './QuoteProductPriceBandVendorIdentifier';

export enum QuoteProductPriceBandIdentifiersFields {
  ARROWSPHERE = 'arrowsphere',
  ERP = 'erp',
  VENDOR = 'vendor',
}

export type QuoteProductPriceBandIdentifiersData = {
  [QuoteProductPriceBandIdentifiersFields.ARROWSPHERE]: QuoteProductPriceBandArrowsphereIdentifierData;
  [QuoteProductPriceBandIdentifiersFields.ERP]: QuoteProductPriceBandErpIdentifierData;
  [QuoteProductPriceBandIdentifiersFields.VENDOR]: QuoteProductPriceBandVendorIdentifierData;
};

export class QuoteProductPriceBandIdentifiers extends AbstractEntity<QuoteProductPriceBandIdentifiersData> {
  readonly #arrowsphere: QuoteProductPriceBandArrowsphereIdentifier;
  readonly #erp: QuoteProductPriceBandErpIdentifier;
  readonly #vendor: QuoteProductPriceBandVendorIdentifier;

  public constructor(data: QuoteProductPriceBandIdentifiersData) {
    super(data);

    this.#arrowsphere = new QuoteProductPriceBandArrowsphereIdentifier(
      data[QuoteProductPriceBandIdentifiersFields.ARROWSPHERE],
    );
    this.#erp = new QuoteProductPriceBandErpIdentifier(
      data[QuoteProductPriceBandIdentifiersFields.ERP],
    );
    this.#vendor = new QuoteProductPriceBandVendorIdentifier(
      data[QuoteProductPriceBandIdentifiersFields.VENDOR],
    );
  }

  get arrowsphere(): QuoteProductPriceBandArrowsphereIdentifier {
    return this.#arrowsphere;
  }

  get erp(): QuoteProductPriceBandErpIdentifier {
    return this.#erp;
  }

  get vendor(): QuoteProductPriceBandVendorIdentifier {
    return this.#vendor;
  }

  public toJSON(): QuoteProductPriceBandIdentifiersData {
    return {
      [QuoteProductPriceBandIdentifiersFields.ARROWSPHERE]: this.arrowsphere.toJSON(),
      [QuoteProductPriceBandIdentifiersFields.ERP]: this.erp.toJSON(),
      [QuoteProductPriceBandIdentifiersFields.VENDOR]: this.vendor.toJSON(),
    };
  }
}
