import { AbstractEntity } from '../../abstractEntity';

export enum EndCustomerMicrosoftFields {
  HAS_MICROSOFT_PROGRAM = 'hasMicrosoftProgram',
  IS_MCA_VALIDATED = 'isMcaValidated',
  IS_PROVISIONED = 'isProvisioned',
}

export enum EndCustomerVendorInfoFields {
  MICROSOFT = 'microsoft',
}

export enum EndCustomerFields {
  REFERENCE = 'reference',
  VENDOR_INFO = 'vendorInfo',
}

export type EndCustomerMicrosoftType = {
  [EndCustomerMicrosoftFields.HAS_MICROSOFT_PROGRAM]?: boolean | undefined;
  [EndCustomerMicrosoftFields.IS_MCA_VALIDATED]?: boolean | undefined;
  [EndCustomerMicrosoftFields.IS_PROVISIONED]?: boolean | undefined;
};

export type EndCustomerVendorInfoType = {
  [EndCustomerVendorInfoFields.MICROSOFT]?:
    | EndCustomerMicrosoftType
    | undefined;
};

export type CartEndCustomerType = {
  [EndCustomerFields.REFERENCE]?: string | undefined;
  [EndCustomerFields.VENDOR_INFO]?: EndCustomerVendorInfoType | undefined;
};

export class EndCustomer extends AbstractEntity<CartEndCustomerType> {
  readonly #reference?: string | undefined;
  readonly #vendorInfo?: EndCustomerVendorInfoType | undefined;

  public constructor(endCustomerResponse: CartEndCustomerType) {
    super(endCustomerResponse);

    this.#reference = endCustomerResponse[EndCustomerFields.REFERENCE];
    this.#vendorInfo = endCustomerResponse[EndCustomerFields.VENDOR_INFO];
  }

  get reference(): string | undefined {
    return this.#reference;
  }

  get vendorInfo(): EndCustomerVendorInfoType | undefined {
    return this.#vendorInfo;
  }

  public toJSON(): CartEndCustomerType {
    return {
      [EndCustomerFields.REFERENCE]: this.reference,
      [EndCustomerFields.VENDOR_INFO]: this.vendorInfo,
    };
  }
}
