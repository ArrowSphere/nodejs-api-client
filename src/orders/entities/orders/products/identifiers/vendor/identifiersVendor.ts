import { AbstractEntity } from '../../../../../../abstractEntity';
import { IdentifiersVendorAttributes, IdentifiersVendorAttributesType } from './attributes/identifiersVendorAttributes';

export enum IdentifiersVendorFields {
  COLUMN_ATTRIBUTES = 'attributes',
  COLUMN_SKU = 'sku',
  COLUMN_NAME = 'name',
}

export type IdentifiersVendorType = {
  [IdentifiersVendorFields.COLUMN_ATTRIBUTES]?: IdentifiersVendorAttributesType;
  [IdentifiersVendorFields.COLUMN_SKU]: string;
  [IdentifiersVendorFields.COLUMN_NAME]?: string;
};

export class IdentifiersVendor extends AbstractEntity<IdentifiersVendorType> {
  readonly #attributes?: IdentifiersVendorAttributes;
  readonly #sku: string;
  readonly #name?: string;

  public constructor(vendor: IdentifiersVendorType) {
    super(vendor);

    this.#attributes = vendor[
        IdentifiersVendorFields.COLUMN_ATTRIBUTES
      ]
      ? new IdentifiersVendorAttributes(
        vendor[IdentifiersVendorFields.COLUMN_ATTRIBUTES],
      )
      : undefined;

    this.#sku = vendor[IdentifiersVendorFields.COLUMN_SKU];
    this.#name = vendor[IdentifiersVendorFields.COLUMN_NAME];
  }

  get attributes(): IdentifiersVendorAttributes | undefined {
    return this.#attributes;
  }

  get sku(): string {
    return this.#sku;
  }

  get name(): string | undefined {
    return this.#name;
  }

  public toJSON(): IdentifiersVendorType {
    return {
      [IdentifiersVendorFields.COLUMN_ATTRIBUTES]: this.attributes?.toJSON(),
      [IdentifiersVendorFields.COLUMN_SKU]: this.sku,
      [IdentifiersVendorFields.COLUMN_NAME]: this.name,
    };
  }
}
