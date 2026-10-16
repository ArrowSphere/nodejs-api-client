import { AbstractEntity } from '../../abstractEntity';

export enum QuoteProductPriceBandErpIdentifierFields {
  SKU = 'sku',
}

export type QuoteProductPriceBandErpIdentifierData = {
  [QuoteProductPriceBandErpIdentifierFields.SKU]: string;
};

export class QuoteProductPriceBandErpIdentifier extends AbstractEntity<QuoteProductPriceBandErpIdentifierData> {
  readonly #sku: string;

  public constructor(data: QuoteProductPriceBandErpIdentifierData) {
    super(data);

    this.#sku = data[QuoteProductPriceBandErpIdentifierFields.SKU];
  }

  get sku(): string {
    return this.#sku;
  }

  public toJSON(): QuoteProductPriceBandErpIdentifierData {
    return {
      [QuoteProductPriceBandErpIdentifierFields.SKU]: this.sku,
    };
  }
}
