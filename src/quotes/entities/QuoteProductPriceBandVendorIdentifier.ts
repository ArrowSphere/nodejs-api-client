import { AbstractEntity } from '../../abstractEntity';

export enum QuoteProductPriceBandVendorIdentifierFields {
  SKU = 'sku',
}

export type QuoteProductPriceBandVendorIdentifierData = {
  [QuoteProductPriceBandVendorIdentifierFields.SKU]?: string;
};

export class QuoteProductPriceBandVendorIdentifier extends AbstractEntity<QuoteProductPriceBandVendorIdentifierData> {
  readonly #sku?: string;

  public constructor(data: QuoteProductPriceBandVendorIdentifierData) {
    super(data);

    this.#sku = data[QuoteProductPriceBandVendorIdentifierFields.SKU];
  }

  get sku(): string | undefined {
    return this.#sku;
  }

  public toJSON(): QuoteProductPriceBandVendorIdentifierData {
    return {
      [QuoteProductPriceBandVendorIdentifierFields.SKU]: this.sku,
    };
  }
}
