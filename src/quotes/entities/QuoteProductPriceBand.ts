import { AbstractEntity } from '../../abstractEntity';
import {
  QuoteProductPriceBandIdentifiers,
  QuoteProductPriceBandIdentifiersData,
} from './QuoteProductPriceBandIdentifiers';

export enum QuoteProductPriceBandFields {
  IDENTIFIERS = 'identifiers',
}

export type QuoteProductPriceBandData = {
  [QuoteProductPriceBandFields.IDENTIFIERS]: QuoteProductPriceBandIdentifiersData;
};

export class QuoteProductPriceBand extends AbstractEntity<QuoteProductPriceBandData> {
  readonly #identifiers: QuoteProductPriceBandIdentifiers;

  public constructor(data: QuoteProductPriceBandData) {
    super(data);

    this.#identifiers = new QuoteProductPriceBandIdentifiers(
      data[QuoteProductPriceBandFields.IDENTIFIERS],
    );
  }

  get identifiers(): QuoteProductPriceBandIdentifiers {
    return this.#identifiers;
  }

  public toJSON(): QuoteProductPriceBandData {
    return {
      [QuoteProductPriceBandFields.IDENTIFIERS]: this.identifiers.toJSON(),
    };
  }
}
