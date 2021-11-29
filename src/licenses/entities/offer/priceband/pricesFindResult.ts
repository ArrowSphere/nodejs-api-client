import { AbstractPrices, PricesData } from './abstractPrices';

export class PricesFindResult extends AbstractPrices {
  public constructor(data: PricesData) {
    super(data);
  }

  public toJSON(): PricesData {
    return super.toJSON();
  }
}
