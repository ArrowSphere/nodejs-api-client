import { AbstractEntity } from "../../../../abstractEntity";

export enum AddressFields {
  COLUMN_LINE1 = 'line1',
  COLUMN_LINE2 = 'line2',
  COLUMN_CITY = 'city',
  COLUMN_STATE = 'state',
  COLUMN_ZIP = 'zip',
  COUNTRY_CODE = 'countryCode',
}

export type AddressType = {
  [AddressFields.COLUMN_LINE1]: string;
  [AddressFields.COLUMN_LINE2]: string;
  [AddressFields.COLUMN_CITY]: string;
  [AddressFields.COLUMN_STATE]: string;
  [AddressFields.COLUMN_ZIP]: string;
  [AddressFields.COUNTRY_CODE]: string;
};

export class Address extends AbstractEntity<AddressType> {
  readonly #line1: string;
  readonly #line2: string;
  readonly #city: string;
  readonly #state: string;
  readonly #zip: string;
  readonly #countryCode: string;

  public constructor(addressInput: AddressType) {
    super(addressInput);

    this.#line1 = addressInput[AddressFields.COLUMN_LINE1];
    this.#line2 = addressInput[AddressFields.COLUMN_LINE2];
    this.#city = addressInput[AddressFields.COLUMN_CITY];
    this.#state = addressInput[AddressFields.COLUMN_STATE];
    this.#zip = addressInput[AddressFields.COLUMN_ZIP];
    this.#countryCode = addressInput[AddressFields.COUNTRY_CODE];
  }

  get line1(): string {
    return this.#line1;
  }

  get line2(): string {
    return this.#line2;
  }

  get city(): string {
    return this.#city;
  }

  get state(): string {
    return this.#state;
  }

  get zip(): string {
    return this.#zip;
  }

  get countryCode(): string {
    return this.#countryCode;
  }

  public toJSON(): AddressType {
    return {
      [AddressFields.COLUMN_LINE1]: this.line1,
      [AddressFields.COLUMN_LINE2]: this.line2,
      [AddressFields.COLUMN_CITY]: this.city,
      [AddressFields.COLUMN_STATE]: this.state,
      [AddressFields.COLUMN_ZIP]: this.zip,
      [AddressFields.COUNTRY_CODE]: this.countryCode,
    };
  }
}
