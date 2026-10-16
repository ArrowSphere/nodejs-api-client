import { AbstractEntity } from '../../abstractEntity';

export enum QuoteProductPriceBandArrowsphereIdentifierFields {
  SKU = 'sku',
}

export type QuoteProductPriceBandArrowsphereIdentifierData = {
  [QuoteProductPriceBandArrowsphereIdentifierFields.SKU]: string;
};

export class QuoteProductPriceBandArrowsphereIdentifier extends AbstractEntity<QuoteProductPriceBandArrowsphereIdentifierData> {
  readonly #sku: string;

  public constructor(data: QuoteProductPriceBandArrowsphereIdentifierData) {
    super(data);

    this.#sku = data[QuoteProductPriceBandArrowsphereIdentifierFields.SKU];
  }

  get sku(): string {
    return this.#sku;
  }

  public toJSON(): QuoteProductPriceBandArrowsphereIdentifierData {
    return {
      [QuoteProductPriceBandArrowsphereIdentifierFields.SKU]: this.sku,
    };
  }
}
