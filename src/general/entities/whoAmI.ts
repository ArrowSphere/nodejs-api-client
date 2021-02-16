import { AbstractEntity } from '../../abstractEntity'

/**
 * Response data fields that can be present in WhoAmI requests.
 */
export enum WhoAmIResponseFields {
  COLUMN_COMPANY_NAME = 'companyName',
  COLUMN_ADDRESS_LINE_1 = 'addressLine1',
  COLUMN_ADDRESS_LINE_2 = 'addressLine2',
  COLUMN_ZIP = 'zip',
  COLUMN_CITY = 'city',
  COLUMN_COUNTRY_CODE = 'countryCode',
  COLUMN_STATE = 'state',
  COLUMN_RECEPTION_PHONE = 'receptionPhone',
  COLUMN_WEBSITE_URL = 'websiteUrl',
  COLUMN_EMAIL_CONTACT = 'emailContact',
  COLUMN_HEADCOUNT = 'headcount',
  COLUMN_TAX_NUMBER = 'taxNumber',
  COLUMN_REFERENCE = 'reference',
  COLUMN_REF = 'ref',
  COLUMN_BILLING_ID = 'billingId',
  COLUMN_INTERNAL_REFERENCE = 'internalReference',
}

/**
 * Response data type for WhoAmI requests.
 */
export type WhoAmIResponseData = {
  [field in WhoAmIResponseFields]: string
}

/**
 * WhoAmI response Entity
 */
export class WhoAmI extends AbstractEntity<WhoAmIResponseData> {
  constructor(data: WhoAmIResponseData) {
    super(data)

    this.#companyName = data[WhoAmIResponseFields.COLUMN_COMPANY_NAME]
    this.#addressLine1 = data[WhoAmIResponseFields.COLUMN_ADDRESS_LINE_1]
    this.#addressLine2 = data[WhoAmIResponseFields.COLUMN_ADDRESS_LINE_2]
    this.#zip = data[WhoAmIResponseFields.COLUMN_ZIP]
    this.#city = data[WhoAmIResponseFields.COLUMN_CITY]
    this.#countryCode = data[WhoAmIResponseFields.COLUMN_COUNTRY_CODE]
    this.#state = data[WhoAmIResponseFields.COLUMN_STATE]
    this.#receptionPhone = data[WhoAmIResponseFields.COLUMN_RECEPTION_PHONE]
    this.#websiteUrl = data[WhoAmIResponseFields.COLUMN_WEBSITE_URL]
    this.#emailContact = data[WhoAmIResponseFields.COLUMN_EMAIL_CONTACT]
    this.#headcount = data[WhoAmIResponseFields.COLUMN_HEADCOUNT]
    this.#taxNumber = data[WhoAmIResponseFields.COLUMN_TAX_NUMBER]
    this.#reference = data[WhoAmIResponseFields.COLUMN_REFERENCE]
    this.#ref = data[WhoAmIResponseFields.COLUMN_REF]
    this.#billingId = data[WhoAmIResponseFields.COLUMN_BILLING_ID]
    this.#internalReference =
      data[WhoAmIResponseFields.COLUMN_INTERNAL_REFERENCE]
  }

  protected VALIDATION_RULES = {
    [WhoAmIResponseFields.COLUMN_COMPANY_NAME]: 'required',
    [WhoAmIResponseFields.COLUMN_ADDRESS_LINE_1]: 'present',
    [WhoAmIResponseFields.COLUMN_ADDRESS_LINE_2]: 'present',
    [WhoAmIResponseFields.COLUMN_ZIP]: 'present',
    [WhoAmIResponseFields.COLUMN_CITY]: 'present',
    [WhoAmIResponseFields.COLUMN_COUNTRY_CODE]: 'required',
    [WhoAmIResponseFields.COLUMN_STATE]: 'present',
    [WhoAmIResponseFields.COLUMN_RECEPTION_PHONE]: 'present',
    [WhoAmIResponseFields.COLUMN_WEBSITE_URL]: 'present',
    [WhoAmIResponseFields.COLUMN_EMAIL_CONTACT]: 'present',
    [WhoAmIResponseFields.COLUMN_HEADCOUNT]: 'present',
    [WhoAmIResponseFields.COLUMN_TAX_NUMBER]: 'present',
    [WhoAmIResponseFields.COLUMN_REFERENCE]: 'present',
    [WhoAmIResponseFields.COLUMN_REF]: 'present',
    [WhoAmIResponseFields.COLUMN_BILLING_ID]: 'present',
    [WhoAmIResponseFields.COLUMN_INTERNAL_REFERENCE]: 'present',
  }

  /**
   * @readonly
   */
  readonly #companyName: string

  /**
   * @readonly
   */
  readonly #addressLine1: string

  /**
   * @readonly
   */
  readonly #addressLine2: string

  /**
   * @readonly
   */
  readonly #zip: string

  /**
   * @readonly
   */
  readonly #city: string

  /**
   * @readonly
   */
  readonly #countryCode: string

  /**
   * @readonly
   */
  readonly #state: string

  /**
   * @readonly
   */
  readonly #receptionPhone: string

  /**
   * @readonly
   */
  readonly #websiteUrl: string

  /**
   * @readonly
   */
  readonly #emailContact: string

  /**
   * @readonly
   */
  readonly #headcount: string

  /**
   * @readonly
   */
  readonly #taxNumber: string

  /**
   * @readonly
   */
  readonly #reference: string

  /**
   * @readonly
   */
  readonly #ref: string

  /**
   * @readonly
   */
  readonly #billingId: string

  /**
   * @readonly
   */
  readonly #internalReference: string

  public getCompanyName(): string {
    return this.#companyName
  }

  public getAddressLine1(): string {
    return this.#addressLine1
  }

  public getAddressLine2(): string {
    return this.#addressLine2
  }

  public getZip(): string {
    return this.#zip
  }

  public getCity(): string {
    return this.#city
  }

  public getCountryCode(): string {
    return this.#countryCode
  }

  public getState(): string {
    return this.#state
  }

  public getReceptionPhone(): string {
    return this.#receptionPhone
  }

  public getWebsiteUrl(): string {
    return this.#websiteUrl
  }

  public getEmailContact(): string {
    return this.#emailContact
  }

  public getHeadcount(): string {
    return this.#headcount
  }

  public getTaxNumber(): string {
    return this.#taxNumber
  }

  public getReference(): string {
    return this.#reference
  }

  public getRef(): string {
    return this.#ref
  }

  public getBillingId(): string {
    return this.#billingId
  }

  public getInternalReference(): string {
    return this.#internalReference
  }

  /**
   * Returns the raw JSON properties
   */
  public toJSON(): WhoAmIResponseData {
    return {
      [WhoAmIResponseFields.COLUMN_COMPANY_NAME]: this.getCompanyName(),
      [WhoAmIResponseFields.COLUMN_ADDRESS_LINE_1]: this.getAddressLine1(),
      [WhoAmIResponseFields.COLUMN_ADDRESS_LINE_2]: this.getAddressLine2(),
      [WhoAmIResponseFields.COLUMN_ZIP]: this.getZip(),
      [WhoAmIResponseFields.COLUMN_CITY]: this.getCity(),
      [WhoAmIResponseFields.COLUMN_COUNTRY_CODE]: this.getCountryCode(),
      [WhoAmIResponseFields.COLUMN_STATE]: this.getState(),
      [WhoAmIResponseFields.COLUMN_RECEPTION_PHONE]: this.getReceptionPhone(),
      [WhoAmIResponseFields.COLUMN_WEBSITE_URL]: this.getWebsiteUrl(),
      [WhoAmIResponseFields.COLUMN_EMAIL_CONTACT]: this.getEmailContact(),
      [WhoAmIResponseFields.COLUMN_HEADCOUNT]: this.getHeadcount(),
      [WhoAmIResponseFields.COLUMN_TAX_NUMBER]: this.getTaxNumber(),
      [WhoAmIResponseFields.COLUMN_REFERENCE]: this.getReference(),
      [WhoAmIResponseFields.COLUMN_REF]: this.getRef(),
      [WhoAmIResponseFields.COLUMN_BILLING_ID]: this.getBillingId(),
      [WhoAmIResponseFields.COLUMN_INTERNAL_REFERENCE]: this.getInternalReference(),
    }
  }
}
