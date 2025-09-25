import { AbstractEntity } from '../../abstractEntity';

export enum CompleteWhoAmICompanyFields {
  COLUMN_COMPANY_RESTRICTED = 'companyRestricted',
  COLUMN_COUNTRY_CODE = 'countryCode',
  COLUMN_ERP_ID = 'erpId',
  COLUMN_HAS_ACCESS_TO_CUSTOM_ASSISTANT = 'hasAccessToCustomAssistant',
  COLUMN_HAS_ACCESS_TO_XCM = 'hasAccessToXcm',
  COLUMN_HAS_ACCESS_TO_XCP = 'hasAccessToXcp',
  COLUMN_HAS_ACCESS_TO_XCP_AI = 'hasAccessToXcpAI',
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
  [CompleteWhoAmICompanyFields.COLUMN_ERP_ID]: string;
  [CompleteWhoAmICompanyFields.COLUMN_HAS_ACCESS_TO_CUSTOM_ASSISTANT]: boolean;
  [CompleteWhoAmICompanyFields.COLUMN_HAS_ACCESS_TO_XCM]: boolean;
  [CompleteWhoAmICompanyFields.COLUMN_HAS_ACCESS_TO_XCP]: boolean;
  [CompleteWhoAmICompanyFields.COLUMN_HAS_ACCESS_TO_XCP_AI]: boolean;
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
    this.#erpId = data[CompleteWhoAmICompanyFields.COLUMN_ERP_ID];
    this.#hasAccessToCustomAssistant =
      data[CompleteWhoAmICompanyFields.COLUMN_HAS_ACCESS_TO_CUSTOM_ASSISTANT];
    this.#hasAccessToXcm =
      data[CompleteWhoAmICompanyFields.COLUMN_HAS_ACCESS_TO_XCM];
    this.#hasAccessToXcp =
      data[CompleteWhoAmICompanyFields.COLUMN_HAS_ACCESS_TO_XCP];
    this.#hasAccessToXcpAI =
      data[CompleteWhoAmICompanyFields.COLUMN_HAS_ACCESS_TO_XCP_AI];
    this.#isProtected = data[CompleteWhoAmICompanyFields.COLUMN_IS_PROTECTED];
    this.#marketplace = data[CompleteWhoAmICompanyFields.COLUMN_MARKETPLACE];
    this.#name = data[CompleteWhoAmICompanyFields.COLUMN_NAME];
    this.#reference = data[CompleteWhoAmICompanyFields.COLUMN_REFERENCE];
    this.#tags = data[CompleteWhoAmICompanyFields.COLUMN_TAGS];
    this.#unit = data[CompleteWhoAmICompanyFields.COLUMN_UNIT];
  }

  readonly #companyRestricted: boolean;
  readonly #countryCode: string;
  readonly #erpId: string;
  readonly #hasAccessToCustomAssistant: boolean;
  readonly #hasAccessToXcm: boolean;
  readonly #hasAccessToXcp: boolean;
  readonly #hasAccessToXcpAI: boolean;
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

  get erpId(): string {
    return this.#erpId;
  }

  get hasAccessToCustomAssistant(): boolean {
    return this.#hasAccessToCustomAssistant;
  }

  get hasAccessToXcm(): boolean {
    return this.#hasAccessToXcm;
  }

  get hasAccessToXcp(): boolean {
    return this.#hasAccessToXcp;
  }

  get hasAccessToXcpAI(): boolean {
    return this.#hasAccessToXcpAI;
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
      [CompleteWhoAmICompanyFields.COLUMN_ERP_ID]: this.erpId,
      [CompleteWhoAmICompanyFields.COLUMN_HAS_ACCESS_TO_CUSTOM_ASSISTANT]: this
        .hasAccessToCustomAssistant,
      [CompleteWhoAmICompanyFields.COLUMN_HAS_ACCESS_TO_XCM]: this
        .hasAccessToXcm,
      [CompleteWhoAmICompanyFields.COLUMN_HAS_ACCESS_TO_XCP]: this
        .hasAccessToXcp,
      [CompleteWhoAmICompanyFields.COLUMN_HAS_ACCESS_TO_XCP_AI]: this
        .hasAccessToXcpAI,
      [CompleteWhoAmICompanyFields.COLUMN_IS_PROTECTED]: this.isProtected,
      [CompleteWhoAmICompanyFields.COLUMN_MARKETPLACE]: this.marketplace,
      [CompleteWhoAmICompanyFields.COLUMN_NAME]: this.name,
      [CompleteWhoAmICompanyFields.COLUMN_REFERENCE]: this.reference,
      [CompleteWhoAmICompanyFields.COLUMN_TAGS]: this.tags,
      [CompleteWhoAmICompanyFields.COLUMN_UNIT]: this.unit,
    };
  }
}
