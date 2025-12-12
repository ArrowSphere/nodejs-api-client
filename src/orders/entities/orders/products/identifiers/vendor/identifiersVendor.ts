import { AbstractEntity } from '../../../../../../abstractEntity';
import {
  IdentifiersVendorAttributes,
  IdentifiersVendorAttributesType,
} from './attributes/identifiersVendorAttributes';

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
  readonly #name?: string;
  readonly #sku: string;

  public constructor(vendor: IdentifiersVendorType) {
    super(vendor);

    this.#attributes = vendor[IdentifiersVendorFields.COLUMN_ATTRIBUTES]
      ? new IdentifiersVendorAttributes(
          vendor[
            IdentifiersVendorFields.COLUMN_ATTRIBUTES
          ] as IdentifiersVendorAttributesType,
        )
      : undefined;
    this.#name = vendor[IdentifiersVendorFields.COLUMN_NAME];
    this.#sku = vendor[IdentifiersVendorFields.COLUMN_SKU];
  }

  get attributes(): IdentifiersVendorAttributes | undefined {
    return this.#attributes;
  }

  get name(): string | undefined {
    return this.#name;
  }

  get sku(): string {
    return this.#sku;
  }

  public toJSON(): IdentifiersVendorType {
    return {
      [IdentifiersVendorFields.COLUMN_ATTRIBUTES]: this.attributes?.toJSON(),
      [IdentifiersVendorFields.COLUMN_NAME]: this.name,
      [IdentifiersVendorFields.COLUMN_SKU]: this.sku,
    };
  }
}
