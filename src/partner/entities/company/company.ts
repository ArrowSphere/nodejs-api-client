import { AbstractEntity } from '../../../abstractEntity';
import { Address, AddressType } from './address/address';

export enum PartnerCompanyFields {
  COLUMN_NAME = 'name',
  COLUMN_ACRONYM = 'acronym',
  COLUMN_INTERNAL_REFERENCE = 'internalReference',
  COLUMN_PHONE = 'phone',
  COLUMN_NUMBER_OF_EMPLOYEE = 'numberOfEmployee',
  COLUMN_CORPORATE_EMAIL = 'corporateEmail',
  COLUMN_WEBSITE = 'website',
  COLUMN_VAT_NUMBER = 'vatNumber',
  COLUMN_REGISTRATION_NUMBER = 'registrationNumber',
  COLUMN_ADDRESS = 'address',
  COLUMN_BILLING_ADDRESS = 'billingAddress',
}

export type PartnerCompanyType = {
  name: string;
  acronym?: string;
  internalReference?: string;
  phone: string;
  numberOfEmployee?: string;
  corporateEmail?: string;
  website?: string;
  vatNumber?: string;
  registrationNumber?: string;
  address: AddressType;
  billingAddress: AddressType;
};

export class PartnerCompany extends AbstractEntity<PartnerCompanyType> {
  readonly #name: string;
  readonly #acronym?: string;
  readonly #internalReference?: string;
  readonly #phone: string;
  readonly #numberOfEmployee?: string;
  readonly #corporateEmail?: string;
  readonly #website?: string;
  readonly #vatNumber?: string;
  readonly #registrationNumber?: string;
  readonly #address: Address;
  readonly #billingAddress: Address;

  public constructor(companyData: PartnerCompanyType) {
    super(companyData);
    this.#name = companyData[PartnerCompanyFields.COLUMN_NAME];
    this.#acronym = companyData[PartnerCompanyFields.COLUMN_ACRONYM];
    this.#internalReference =
      companyData[PartnerCompanyFields.COLUMN_INTERNAL_REFERENCE];
    this.#phone = companyData[PartnerCompanyFields.COLUMN_PHONE];
    this.#numberOfEmployee =
      companyData[PartnerCompanyFields.COLUMN_NUMBER_OF_EMPLOYEE];
    this.#corporateEmail =
      companyData[PartnerCompanyFields.COLUMN_CORPORATE_EMAIL];
    this.#website = companyData[PartnerCompanyFields.COLUMN_WEBSITE];
    this.#vatNumber = companyData[PartnerCompanyFields.COLUMN_VAT_NUMBER];
    this.#registrationNumber =
      companyData[PartnerCompanyFields.COLUMN_REGISTRATION_NUMBER];
    this.#address = new Address(
      companyData[PartnerCompanyFields.COLUMN_ADDRESS],
    );
    this.#billingAddress = new Address(
      companyData[PartnerCompanyFields.COLUMN_BILLING_ADDRESS],
    );
  }

  get name(): string {
    return this.#name;
  }

  get acronym(): string | undefined {
    return this.#acronym;
  }

  get internalReference(): string | undefined {
    return this.#internalReference;
  }

  get phone(): string {
    return this.#phone;
  }

  get numberOfEmployee(): string | undefined {
    return this.#numberOfEmployee;
  }

  get corporateEmail(): string | undefined {
    return this.#corporateEmail;
  }

  get website(): string | undefined {
    return this.#website;
  }

  get vatNumber(): string | undefined {
    return this.#vatNumber;
  }

  get registrationNumber(): string | undefined {
    return this.#registrationNumber;
  }

  get address(): Address {
    return this.#address;
  }

  get billingAddress(): Address {
    return this.#billingAddress;
  }

  public toJSON(): PartnerCompanyType {
    return {
      [PartnerCompanyFields.COLUMN_NAME]: this.name,
      [PartnerCompanyFields.COLUMN_ACRONYM]: this.acronym,
      [PartnerCompanyFields.COLUMN_INTERNAL_REFERENCE]: this.internalReference,
      [PartnerCompanyFields.COLUMN_PHONE]: this.phone,
      [PartnerCompanyFields.COLUMN_NUMBER_OF_EMPLOYEE]: this.numberOfEmployee,
      [PartnerCompanyFields.COLUMN_CORPORATE_EMAIL]: this.corporateEmail,
      [PartnerCompanyFields.COLUMN_WEBSITE]: this.website,
      [PartnerCompanyFields.COLUMN_VAT_NUMBER]: this.vatNumber,
      [PartnerCompanyFields.COLUMN_REGISTRATION_NUMBER]: this
        .registrationNumber,
      [PartnerCompanyFields.COLUMN_ADDRESS]: this.address.toJSON(),
      [PartnerCompanyFields.COLUMN_BILLING_ADDRESS]: this.billingAddress.toJSON(),
    };
  }
}
