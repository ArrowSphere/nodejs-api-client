import { AbstractEntity } from '../../abstractEntity';

export enum CompleteWhoAmICompanyFields {
  COLUMN_COMPANY_RESTRICTED = 'companyRestricted',
  COLUMN_COUNTRY_CODE = 'countryCode',
  COLUMN_HAS_ACCESS_TO_XCM = 'hasAccessToXcm',
  COLUMN_HAS_ACCESS_TO_XCP = 'hasAccessToXcp',
  COLUMN_IS_PROTECTED = 'isProtected',
  COLUMN_MARKETPLACE = 'marketplace',
  COLUMN_NAME = 'name',
  COLUMN_REFERENCE = 'reference',
  COLUMN_TAGS = 'tags',
  COLUMN_UNIT = 'unit',
}

export type CompanyUnit = {
  name: string;
  symbol: string;
};

export type CompleteWhoAmICompanyData = {
  [CompleteWhoAmICompanyFields.COLUMN_COMPANY_RESTRICTED]: boolean;
  [CompleteWhoAmICompanyFields.COLUMN_COUNTRY_CODE]: string;
  [CompleteWhoAmICompanyFields.COLUMN_HAS_ACCESS_TO_XCM]: boolean;
  [CompleteWhoAmICompanyFields.COLUMN_HAS_ACCESS_TO_XCP]: boolean;
  [CompleteWhoAmICompanyFields.COLUMN_IS_PROTECTED]: boolean;
  [CompleteWhoAmICompanyFields.COLUMN_MARKETPLACE]?: string;
  [CompleteWhoAmICompanyFields.COLUMN_NAME]?: string;
  [CompleteWhoAmICompanyFields.COLUMN_REFERENCE]: string;
  [CompleteWhoAmICompanyFields.COLUMN_TAGS]: string[];
  [CompleteWhoAmICompanyFields.COLUMN_UNIT]: CompanyUnit;
};

export class CompleteWhoAmICompany extends AbstractEntity<CompleteWhoAmICompanyData> {
  constructor(data: CompleteWhoAmICompanyData) {
    super(data);

    this.#companyRestricted =
      data[CompleteWhoAmICompanyFields.COLUMN_COMPANY_RESTRICTED];
    this.#countryCode = data[CompleteWhoAmICompanyFields.COLUMN_COUNTRY_CODE];
    this.#hasAccessToXcm =
      data[CompleteWhoAmICompanyFields.COLUMN_HAS_ACCESS_TO_XCM];
    this.#hasAccessToXcp =
      data[CompleteWhoAmICompanyFields.COLUMN_HAS_ACCESS_TO_XCP];
    this.#isProtected = data[CompleteWhoAmICompanyFields.COLUMN_IS_PROTECTED];
    this.#marketplace = data[CompleteWhoAmICompanyFields.COLUMN_MARKETPLACE];
    this.#name = data[CompleteWhoAmICompanyFields.COLUMN_NAME];
    this.#reference = data[CompleteWhoAmICompanyFields.COLUMN_REFERENCE];
    this.#tags = data[CompleteWhoAmICompanyFields.COLUMN_TAGS];
    this.#unit = data[CompleteWhoAmICompanyFields.COLUMN_UNIT];
  }

  readonly #companyRestricted: boolean;
  readonly #countryCode: string;
  readonly #hasAccessToXcm: boolean;
  readonly #hasAccessToXcp: boolean;
  readonly #isProtected: boolean;
  readonly #marketplace?: string;
  readonly #name?: string;
  readonly #reference: string;
  readonly #tags: string[];
  readonly #unit: CompanyUnit;

  get companyRestricted(): boolean {
    return this.#companyRestricted;
  }

  get countryCode(): string {
    return this.#countryCode;
  }

  get hasAccessToXcm(): boolean {
    return this.#hasAccessToXcm;
  }

  get hasAccessToXcp(): boolean {
    return this.#hasAccessToXcp;
  }

  get isProtected(): boolean {
    return this.#isProtected;
  }

  get marketplace(): string | undefined {
    return this.#marketplace;
  }

  get name(): string | undefined {
    return this.#name;
  }

  get reference(): string {
    return this.#reference;
  }

  get tags(): string[] {
    return this.#tags;
  }

  get unit(): CompanyUnit {
    return this.#unit;
  }

  public toJSON(): CompleteWhoAmICompanyData {
    return {
      [CompleteWhoAmICompanyFields.COLUMN_COMPANY_RESTRICTED]: this
        .companyRestricted,
      [CompleteWhoAmICompanyFields.COLUMN_COUNTRY_CODE]: this.countryCode,
      [CompleteWhoAmICompanyFields.COLUMN_HAS_ACCESS_TO_XCM]: this
        .hasAccessToXcm,
      [CompleteWhoAmICompanyFields.COLUMN_HAS_ACCESS_TO_XCP]: this
        .hasAccessToXcp,
      [CompleteWhoAmICompanyFields.COLUMN_IS_PROTECTED]: this.isProtected,
      [CompleteWhoAmICompanyFields.COLUMN_MARKETPLACE]: this.marketplace,
      [CompleteWhoAmICompanyFields.COLUMN_NAME]: this.name,
      [CompleteWhoAmICompanyFields.COLUMN_REFERENCE]: this.reference,
      [CompleteWhoAmICompanyFields.COLUMN_TAGS]: this.tags,
      [CompleteWhoAmICompanyFields.COLUMN_UNIT]: this.unit,
    };
  }
}
