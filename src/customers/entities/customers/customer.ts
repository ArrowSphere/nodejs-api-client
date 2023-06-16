import { AbstractEntity } from '../../../abstractEntity';
import { Contact, ContactType } from './contact/contact';
import { Details, DetailsType } from './details/details';
import {
  AdditionalExtraInformation,
  AdditionalExtraInformationType,
} from '../../../shared';

export enum CustomerFields {
  COLUMN_REFERENCE = 'Reference',
  COLUMN_COMPANY_NAME = 'CompanyName',
  COLUMN_PARTNER_COMPANY_ID = 'PartnerCompanyId',
  COLUMN_ADDRESS_LINE_1 = 'AddressLine1',
  COLUMN_ADDRESS_LINE_2 = 'AddressLine2',
  COLUMN_ZIP = 'Zip',
  COLUMN_CITY = 'City',
  COLUMN_COUNTRY_CODE = 'CountryCode',
  COLUMN_STATE = 'State',
  COLUMN_RECEPTION_PHONE = 'ReceptionPhone',
  COLUMN_WEBSITE_URL = 'WebsiteUrl',
  COLUMN_EMAIL_CONTACT = 'EmailContact',
  COLUMN_HEADCOUNT = 'Headcount',
  COLUMN_TAX_NUMBER = 'TaxNumber',
  COLUMN_REF = 'Ref',
  COLUMN_BILLING_ID = 'BillingId',
  COLUMN_INTERNAL_REFERENCE = 'InternalReference',
  COLUMN_CONTACT = 'Contact',
  COLUMN_DELETED_AT = 'DeletedAt',
  COLUMN_DETAILS = 'Details',
  COLUMN_EXTRA_INFORMATION = 'extraInformation',
}

export type CustomerType = {
  [CustomerFields.COLUMN_REFERENCE]: string;
  [CustomerFields.COLUMN_COMPANY_NAME]: string;
  [CustomerFields.COLUMN_PARTNER_COMPANY_ID]: string;
  [CustomerFields.COLUMN_ADDRESS_LINE_1]?: string;
  [CustomerFields.COLUMN_ADDRESS_LINE_2]?: string;
  [CustomerFields.COLUMN_ZIP]: string;
  [CustomerFields.COLUMN_CITY]: string;
  [CustomerFields.COLUMN_COUNTRY_CODE]: string;
  [CustomerFields.COLUMN_STATE]: string;
  [CustomerFields.COLUMN_RECEPTION_PHONE]: string;
  [CustomerFields.COLUMN_WEBSITE_URL]: string;
  [CustomerFields.COLUMN_EMAIL_CONTACT]: string;
  [CustomerFields.COLUMN_HEADCOUNT]: number;
  [CustomerFields.COLUMN_TAX_NUMBER]: string;
  [CustomerFields.COLUMN_REF]: string;
  [CustomerFields.COLUMN_BILLING_ID]: string;
  [CustomerFields.COLUMN_INTERNAL_REFERENCE]: string;
  [CustomerFields.COLUMN_CONTACT]: ContactType;
  [CustomerFields.COLUMN_DELETED_AT]?: string | null;
  [CustomerFields.COLUMN_DETAILS]: DetailsType;
  [CustomerFields.COLUMN_EXTRA_INFORMATION]?: AdditionalExtraInformationType;
};

export class Customer extends AbstractEntity<CustomerType> {
  readonly #reference: string;
  readonly #companyName: string;
  readonly #partnerCompanyId: string;
  readonly #addressLine1?: string;
  readonly #addressLine2?: string;
  readonly #zip: string;
  readonly #city: string;
  readonly #countryCode: string;
  readonly #state: string;
  readonly #receptionPhone: string;
  readonly #websiteUrl: string;
  readonly #emailContact: string;
  readonly #headcount: number;
  readonly #taxNumber: string;
  readonly #ref: string;
  readonly #billingId: string;
  readonly #internalReference: string;
  readonly #contact: Contact;
  readonly #deletedAt?: string | null;
  readonly #details: Details;
  readonly #extraInformation?: AdditionalExtraInformation;

  public constructor(getCustomersDataInput: CustomerType) {
    super(getCustomersDataInput);

    this.#reference = getCustomersDataInput[CustomerFields.COLUMN_REFERENCE];
    this.#companyName =
      getCustomersDataInput[CustomerFields.COLUMN_COMPANY_NAME];
    this.#partnerCompanyId =
      getCustomersDataInput[CustomerFields.COLUMN_PARTNER_COMPANY_ID];
    this.#addressLine1 =
      getCustomersDataInput[CustomerFields.COLUMN_ADDRESS_LINE_1];
    this.#addressLine2 =
      getCustomersDataInput[CustomerFields.COLUMN_ADDRESS_LINE_2];
    this.#zip = getCustomersDataInput[CustomerFields.COLUMN_ZIP];
    this.#city = getCustomersDataInput[CustomerFields.COLUMN_CITY];
    this.#countryCode =
      getCustomersDataInput[CustomerFields.COLUMN_COUNTRY_CODE];
    this.#state = getCustomersDataInput[CustomerFields.COLUMN_STATE];
    this.#receptionPhone =
      getCustomersDataInput[CustomerFields.COLUMN_RECEPTION_PHONE];
    this.#websiteUrl = getCustomersDataInput[CustomerFields.COLUMN_WEBSITE_URL];
    this.#emailContact =
      getCustomersDataInput[CustomerFields.COLUMN_EMAIL_CONTACT];
    this.#headcount = getCustomersDataInput[CustomerFields.COLUMN_HEADCOUNT];
    this.#taxNumber = getCustomersDataInput[CustomerFields.COLUMN_TAX_NUMBER];
    this.#ref = getCustomersDataInput[CustomerFields.COLUMN_REF];
    this.#billingId = getCustomersDataInput[CustomerFields.COLUMN_BILLING_ID];
    this.#internalReference =
      getCustomersDataInput[CustomerFields.COLUMN_INTERNAL_REFERENCE];
    this.#contact = new Contact(
      getCustomersDataInput[CustomerFields.COLUMN_CONTACT],
    );
    this.#deletedAt = getCustomersDataInput[CustomerFields.COLUMN_DELETED_AT];
    this.#details = new Details(
      getCustomersDataInput[CustomerFields.COLUMN_DETAILS],
    );
    this.#extraInformation = getCustomersDataInput[
      CustomerFields.COLUMN_EXTRA_INFORMATION
    ]
      ? new AdditionalExtraInformation(
          getCustomersDataInput[
            CustomerFields.COLUMN_EXTRA_INFORMATION
          ] as AdditionalExtraInformationType,
        )
      : undefined;
  }

  get Reference(): string {
    return this.#reference;
  }

  get CompanyName(): string {
    return this.#companyName;
  }

  get PartnerCompanyId(): string {
    return this.#partnerCompanyId;
  }

  get AddressLine1(): string | undefined {
    return this.#addressLine1;
  }

  get AddressLine2(): string | undefined {
    return this.#addressLine2;
  }

  get Zip(): string {
    return this.#zip;
  }

  get City(): string {
    return this.#city;
  }

  get CountryCode(): string {
    return this.#countryCode;
  }

  get State(): string {
    return this.#state;
  }

  get ReceptionPhone(): string {
    return this.#receptionPhone;
  }

  get WebsiteUrl(): string {
    return this.#websiteUrl;
  }

  get EmailContact(): string {
    return this.#emailContact;
  }

  get Headcount(): number {
    return this.#headcount;
  }

  get TaxNumber(): string {
    return this.#taxNumber;
  }

  get Ref(): string {
    return this.#ref;
  }

  get BillingId(): string {
    return this.#billingId;
  }

  get InternalReference(): string {
    return this.#internalReference;
  }

  get Contact(): Contact {
    return this.#contact;
  }

  get Details(): Details {
    return this.#details;
  }

  get DeletedAt(): string | null | undefined {
    return this.#deletedAt;
  }

  get ExtraInformation(): AdditionalExtraInformation | undefined {
    return this.#extraInformation;
  }

  public toJSON(): CustomerType {
    return {
      [CustomerFields.COLUMN_REFERENCE]: this.Reference,
      [CustomerFields.COLUMN_COMPANY_NAME]: this.CompanyName,
      [CustomerFields.COLUMN_PARTNER_COMPANY_ID]: this.PartnerCompanyId,
      [CustomerFields.COLUMN_ADDRESS_LINE_1]: this.AddressLine1,
      [CustomerFields.COLUMN_ADDRESS_LINE_2]: this.AddressLine2,
      [CustomerFields.COLUMN_ZIP]: this.Zip,
      [CustomerFields.COLUMN_CITY]: this.City,
      [CustomerFields.COLUMN_COUNTRY_CODE]: this.CountryCode,
      [CustomerFields.COLUMN_STATE]: this.State,
      [CustomerFields.COLUMN_RECEPTION_PHONE]: this.ReceptionPhone,
      [CustomerFields.COLUMN_WEBSITE_URL]: this.WebsiteUrl,
      [CustomerFields.COLUMN_EMAIL_CONTACT]: this.EmailContact,
      [CustomerFields.COLUMN_HEADCOUNT]: this.Headcount,
      [CustomerFields.COLUMN_TAX_NUMBER]: this.TaxNumber,
      [CustomerFields.COLUMN_REF]: this.Ref,
      [CustomerFields.COLUMN_BILLING_ID]: this.BillingId,
      [CustomerFields.COLUMN_INTERNAL_REFERENCE]: this.InternalReference,
      [CustomerFields.COLUMN_CONTACT]: this.Contact.toJSON(),
      [CustomerFields.COLUMN_DETAILS]: this.Details.toJSON(),
      [CustomerFields.COLUMN_DELETED_AT]: this.DeletedAt,
      [CustomerFields.COLUMN_EXTRA_INFORMATION]: this.ExtraInformation?.toJSON(),
    };
  }
}
