import { AbstractEntity } from '../../../../../../abstractEntity';

export enum IdentifiersVendorFields {
  COLUMN_SKU = 'sku',
}

export type IdentifiersVendorType = {
  [IdentifiersVendorFields.COLUMN_SKU]: string;
};

export class IdentifiersVendor extends AbstractEntity<IdentifiersVendorType> {
  readonly #sku: string;

  public constructor(vendor: IdentifiersVendorType) {
    super(vendor);

    this.#sku = vendor[IdentifiersVendorFields.COLUMN_SKU];
  }

  get sku(): string {
    return this.#sku;
  }

  public toJSON(): IdentifiersVendorType {
    return {
      [IdentifiersVendorFields.COLUMN_SKU]: this.sku,
    };
  }
}
