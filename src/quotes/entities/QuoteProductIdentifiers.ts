import { AbstractEntity } from '../../abstractEntity';

export enum QuoteProductIdentifiersFields {
  VENDOR = 'vendor',
}

export enum QuoteProductIdentifiersVendorFields {
  NAME = 'name',
  SKU = 'sku',
}

export type QuoteProductIdentifiersVendorData = {
  [QuoteProductIdentifiersVendorFields.NAME]: string;
  [QuoteProductIdentifiersVendorFields.SKU]: string;
};

export type QuoteProductIdentifiersData = {
  [QuoteProductIdentifiersFields.VENDOR]: QuoteProductIdentifiersVendorData;
};

export class QuoteProductIdentifiers extends AbstractEntity<QuoteProductIdentifiersData> {
  readonly #vendor: QuoteProductIdentifiersVendorData;

  public constructor(data: QuoteProductIdentifiersData) {
    super(data);

    this.#vendor = {
      [QuoteProductIdentifiersVendorFields.NAME]:
        data[QuoteProductIdentifiersFields.VENDOR][
          QuoteProductIdentifiersVendorFields.NAME
        ],
      [QuoteProductIdentifiersVendorFields.SKU]:
        data[QuoteProductIdentifiersFields.VENDOR][
          QuoteProductIdentifiersVendorFields.SKU
        ],
    };
  }

  get vendor(): QuoteProductIdentifiersVendorData {
    return this.#vendor;
  }

  public toJSON(): QuoteProductIdentifiersData {
    return {
      [QuoteProductIdentifiersFields.VENDOR]: {
        [QuoteProductIdentifiersVendorFields.NAME]: this.vendor.name,
        [QuoteProductIdentifiersVendorFields.SKU]: this.vendor.sku,
      },
    };
  }
}
