import { AbstractEntity } from '../../../../../abstractEntity';
import {
  IdentifiersVendor,
  IdentifiersVendorType,
} from './vendor/identifiersVendor';

export enum ProductIdentifiersFields {
  COLUMN_VENDOR = 'vendor',
}

export type ProductIdentifiersType = {
  [ProductIdentifiersFields.COLUMN_VENDOR]: IdentifiersVendorType;
};

export class ProductIdentifiers extends AbstractEntity<ProductIdentifiersType> {
  readonly #vendor: IdentifiersVendor;

  public constructor(vendor: ProductIdentifiersType) {
    super(vendor);

    this.#vendor = new IdentifiersVendor(
      vendor[ProductIdentifiersFields.COLUMN_VENDOR],
    );
  }

  get vendor(): IdentifiersVendor {
    return this.#vendor;
  }

  public toJSON(): ProductIdentifiersType {
    return {
      [ProductIdentifiersFields.COLUMN_VENDOR]: this.vendor,
    };
  }
}
