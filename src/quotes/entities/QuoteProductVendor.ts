import { AbstractEntity } from '../../abstractEntity';

export enum QuoteProductVendorFields {
  NAME = 'name',
}

export type QuoteProductVendorData = {
  [QuoteProductVendorFields.NAME]: string;
};

export class QuoteProductVendor extends AbstractEntity<QuoteProductVendorData> {
  readonly #name: string;

  public constructor(data: QuoteProductVendorData) {
    super(data);

    this.#name = data[QuoteProductVendorFields.NAME];
  }

  get name(): string {
    return this.#name;
  }

  public toJSON(): QuoteProductVendorData {
    return {
      [QuoteProductVendorFields.NAME]: this.name,
    };
  }
}
