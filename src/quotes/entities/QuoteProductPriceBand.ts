import { AbstractEntity } from '../../abstractEntity';

export enum QuoteProductPriceBandFields {
  IDENTIFIERS = 'identifiers',
}

export enum QuoteProductPriceBandIdentifiersFields {
  ARROWSPHERE = 'arrowsphere',
  ERP = 'erp',
  VENDOR = 'vendor',
}

export enum QuoteProductPriceBandSkuFields {
  SKU = 'sku',
}

export type QuoteProductPriceBandIdentifiersData = {
  [QuoteProductPriceBandIdentifiersFields.ARROWSPHERE]: {
    [QuoteProductPriceBandSkuFields.SKU]: string;
  };
  [QuoteProductPriceBandIdentifiersFields.ERP]: {
    [QuoteProductPriceBandSkuFields.SKU]: string;
  };
  [QuoteProductPriceBandIdentifiersFields.VENDOR]: {
    [QuoteProductPriceBandSkuFields.SKU]?: string;
  };
};

export type QuoteProductPriceBandData = {
  [QuoteProductPriceBandFields.IDENTIFIERS]: QuoteProductPriceBandIdentifiersData;
};

export class QuoteProductPriceBand extends AbstractEntity<QuoteProductPriceBandData> {
  readonly #identifiers: QuoteProductPriceBandIdentifiersData;

  public constructor(data: QuoteProductPriceBandData) {
    super(data);

    const identifiers: QuoteProductPriceBandIdentifiersData =
      data[QuoteProductPriceBandFields.IDENTIFIERS];

    this.#identifiers = {
      [QuoteProductPriceBandIdentifiersFields.ARROWSPHERE]: {
        [QuoteProductPriceBandSkuFields.SKU]:
          identifiers[QuoteProductPriceBandIdentifiersFields.ARROWSPHERE][
            QuoteProductPriceBandSkuFields.SKU
          ],
      },
      [QuoteProductPriceBandIdentifiersFields.ERP]: {
        [QuoteProductPriceBandSkuFields.SKU]:
          identifiers[QuoteProductPriceBandIdentifiersFields.ERP][
            QuoteProductPriceBandSkuFields.SKU
          ],
      },
      [QuoteProductPriceBandIdentifiersFields.VENDOR]: {
        [QuoteProductPriceBandSkuFields.SKU]:
          identifiers[QuoteProductPriceBandIdentifiersFields.VENDOR][
            QuoteProductPriceBandSkuFields.SKU
          ],
      },
    };
  }

  get identifiers(): QuoteProductPriceBandIdentifiersData {
    return this.#identifiers;
  }

  public toJSON(): QuoteProductPriceBandData {
    return {
      [QuoteProductPriceBandFields.IDENTIFIERS]: {
        [QuoteProductPriceBandIdentifiersFields.ARROWSPHERE]: {
          [QuoteProductPriceBandSkuFields.SKU]: this.identifiers.arrowsphere
            .sku,
        },
        [QuoteProductPriceBandIdentifiersFields.ERP]: {
          [QuoteProductPriceBandSkuFields.SKU]: this.identifiers.erp.sku,
        },
        [QuoteProductPriceBandIdentifiersFields.VENDOR]: {
          [QuoteProductPriceBandSkuFields.SKU]: this.identifiers.vendor.sku,
        },
      },
    };
  }
}
