import { VendorAttributes, VendorAttributesType } from './vendorAttributes';
import { AbstractEntity } from '../../../../../../abstractEntity';

export enum IdentifiersVendorFields {
  COLUMN_SKU = 'sku',
  COLUMN_ATTRIBUTES = 'attributes',
  COLUMN_BRAND = 'brand',
}

export type IdentifiersVendorType = {
  [IdentifiersVendorFields.COLUMN_SKU]: string;
  [IdentifiersVendorFields.COLUMN_ATTRIBUTES]: VendorAttributesType;
  [IdentifiersVendorFields.COLUMN_BRAND]: string;
};

export class IdentifiersVendor extends AbstractEntity<IdentifiersVendorType> {
  readonly #sku: string;
  readonly #attributes: VendorAttributes;
  readonly #brand: string;

  public constructor(vendor: IdentifiersVendorType) {
    super(vendor);

    this.#sku = vendor[IdentifiersVendorFields.COLUMN_SKU];
    this.#attributes = new VendorAttributes(
      vendor[IdentifiersVendorFields.COLUMN_ATTRIBUTES],
    );
    this.#brand = vendor[IdentifiersVendorFields.COLUMN_BRAND];
  }

  get sku(): string {
    return this.#sku;
  }

  get attributes(): VendorAttributes {
    return this.#attributes;
  }

  get brand(): string {
    return this.#brand;
  }

  public toJSON(): IdentifiersVendorType {
    return {
      [IdentifiersVendorFields.COLUMN_SKU]: this.sku,
      [IdentifiersVendorFields.COLUMN_ATTRIBUTES]: this.attributes.toJSON(),
      [IdentifiersVendorFields.COLUMN_BRAND]: this.brand,
    };
  }
}
