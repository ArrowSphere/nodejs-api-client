import { AbstractEntity } from "../../../abstractEntity";
import { Address, AddressType } from "./address/address";

export enum CompanyFields {
  COLUMN_REFERENCE = 'reference',
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
  COLUMN_BILLING_ADDRESS = 'billingAddress'
}

export type CompanyType = {
  reference: string;
  name: string;
  acronym: string;
  internalReference: string;
  phone: string;
  numberOfEmployee: string;
  corporateEmail: string;
  website: string;
  vatNumber: string;
  registrationNumber: string;
  address: AddressType;
  billingAddress: AddressType;
};

export class Company extends AbstractEntity<CompanyType> {
  readonly #reference: string;
  readonly #name: string;
  readonly #acronym: string;
  readonly #internalReference: string;
  readonly #phone: string;
  readonly #numberOfEmployee: string;
  readonly #corporateEmail: string;
  readonly #website: string;
  readonly #vatNumber: string;
  readonly #registrationNumber: string;
  readonly #address: Address;
  readonly #billingAddress: Address;

  public constructor(companyData: CompanyType) {
    super(companyData);
    this.#reference = companyData[CompanyFields.COLUMN_REFERENCE];
    this.#name = companyData[CompanyFields.COLUMN_NAME];
    this.#acronym = companyData[CompanyFields.COLUMN_ACRONYM];
    this.#internalReference = companyData[CompanyFields.COLUMN_INTERNAL_REFERENCE];
    this.#phone = companyData[CompanyFields.COLUMN_PHONE];
    this.#numberOfEmployee = companyData[CompanyFields.COLUMN_NUMBER_OF_EMPLOYEE];
    this.#corporateEmail = companyData[CompanyFields.COLUMN_CORPORATE_EMAIL];
    this.#website = companyData[CompanyFields.COLUMN_WEBSITE];
    this.#vatNumber = companyData[CompanyFields.COLUMN_VAT_NUMBER];
    this.#registrationNumber = companyData[CompanyFields.COLUMN_REGISTRATION_NUMBER];
    this.#address = new Address(companyData[CompanyFields.COLUMN_ADDRESS]);
    this.#billingAddress = new Address(companyData[CompanyFields.COLUMN_BILLING_ADDRESS]);
  }

  get reference(): string {
    return this.#reference;
  }

  get name(): string {
    return this.#name;
  }

  get acronym(): string {
    return this.#acronym;
  }

  get internalReference(): string {
    return this.#internalReference;
  }

  get phone(): string {
    return this.#phone;
  }

  get numberOfEmployee(): string {
    return this.#numberOfEmployee;
  }

  get corporateEmail(): string {
    return this.#corporateEmail;
  }

  get website(): string {
    return this.#website;
  }

  get vatNumber(): string {
    return this.#vatNumber;
  }

  get registrationNumber(): string {
    return this.#registrationNumber;
  }

  get address(): Address {
    return this.#address;
  }

  get billingAddress(): Address {
    return this.#billingAddress;
  }

  public toJSON(): CompanyType {
    return {
      [CompanyFields.COLUMN_REFERENCE]: this.reference,
      [CompanyFields.COLUMN_NAME]: this.name,
      [CompanyFields.COLUMN_ACRONYM]: this.acronym,
      [CompanyFields.COLUMN_INTERNAL_REFERENCE]: this.internalReference,
      [CompanyFields.COLUMN_PHONE]: this.phone,
      [CompanyFields.COLUMN_NUMBER_OF_EMPLOYEE]: this.numberOfEmployee,
      [CompanyFields.COLUMN_CORPORATE_EMAIL]: this.corporateEmail,
      [CompanyFields.COLUMN_WEBSITE]: this.website,
      [CompanyFields.COLUMN_VAT_NUMBER]: this.vatNumber,
      [CompanyFields.COLUMN_REGISTRATION_NUMBER]: this.registrationNumber,
      [CompanyFields.COLUMN_ADDRESS]: this.address.toJSON(),
      [CompanyFields.COLUMN_BILLING_ADDRESS]: this.billingAddress.toJSON(),
    };
  }
}
