import { AbstractEntity } from '../../../abstractEntity';
import { LateRenewableLicenseData } from './LicenseRenewableLicenseData';

export class LateRenewableLicenseResult extends AbstractEntity<LateRenewableLicenseData> {
  readonly #vendorSku: string;
  readonly #quantity: number;
  readonly #licenseRef?: string;
  readonly #offerName?: string;

  public constructor(data: LateRenewableLicenseData) {
    super(data ?? {});

    this.#vendorSku = data.vendorSku;
    this.#quantity = data.quantity;
    this.#licenseRef = data?.licenseRef;
    this.#offerName = data?.offerName;
  }

  public toJSON(): LateRenewableLicenseData {
    return {
      vendorSku: this.#vendorSku,
      quantity: this.#quantity,
      ...(this.#licenseRef ? { licenseRef: this.#licenseRef } : {}),
      ...(this.#offerName ? { offerName: this.#offerName } : {}),
    };
  }
}
