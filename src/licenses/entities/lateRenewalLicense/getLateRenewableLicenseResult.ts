import { AbstractEntity } from '../../../abstractEntity';
import { GetLateRenewableLicenseData } from './LicenseRenewableLicenseData';

export class GetLateRenewableLicenseResult extends AbstractEntity<GetLateRenewableLicenseData> {
  readonly #vendorSku: string;
  readonly #quantity: number;
  readonly #licenseRef?: string;
  readonly #offerName?: string;

  public constructor(data: GetLateRenewableLicenseData) {
    super(data);

    this.#vendorSku = data.vendorSku;
    this.#quantity = data.quantity;
    this.#licenseRef = data?.licenseRef;
    this.#offerName = data?.offerName;
  }

  get vendorSku(): string {
    return this.#vendorSku;
  }

  get quantity(): number {
    return this.#quantity;
  }

  get licenseRef(): string | undefined {
    return this.#licenseRef;
  }

  get offerName(): string | undefined {
    return this.#offerName;
  }

  public toJSON(): GetLateRenewableLicenseData {
    return {
      vendorSku: this.vendorSku,
      quantity: this.quantity,
      ...(this.licenseRef ? { licenseRef: this.licenseRef } : {}),
      ...(this.offerName ? { offerName: this.offerName } : {}),
    };
  }
}
