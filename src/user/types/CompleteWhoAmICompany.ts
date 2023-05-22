import { AbstractEntity } from '../../abstractEntity';

export enum CompleteWhoAmICompanyFields {
  COLUMN_HAS_ACCESS_TO_XCP = 'hasAccessToXcp',
  COLUMN_IS_PROTECTED = 'isProtected',
  COLUMN_MARKETPLACE = 'marketplace',
  COLUMN_NAME = 'name',
  COLUMN_REFERENCE = 'reference',
  COLUMN_TAGS = 'tags',
}

export type CompleteWhoAmICompanyData = {
  [CompleteWhoAmICompanyFields.COLUMN_HAS_ACCESS_TO_XCP]: boolean;
  [CompleteWhoAmICompanyFields.COLUMN_IS_PROTECTED]: boolean;
  [CompleteWhoAmICompanyFields.COLUMN_MARKETPLACE]?: string;
  [CompleteWhoAmICompanyFields.COLUMN_NAME]?: string;
  [CompleteWhoAmICompanyFields.COLUMN_REFERENCE]: string;
  [CompleteWhoAmICompanyFields.COLUMN_TAGS]: string[];
};

export class CompleteWhoAmICompany extends AbstractEntity<CompleteWhoAmICompanyData> {
  constructor(data: CompleteWhoAmICompanyData) {
    super(data);

    this.#hasAccessToXcp =
      data[CompleteWhoAmICompanyFields.COLUMN_HAS_ACCESS_TO_XCP];
    this.#isProtected = data[CompleteWhoAmICompanyFields.COLUMN_IS_PROTECTED];
    this.#marketplace = data[CompleteWhoAmICompanyFields.COLUMN_MARKETPLACE];
    this.#name = data[CompleteWhoAmICompanyFields.COLUMN_NAME];
    this.#reference = data[CompleteWhoAmICompanyFields.COLUMN_REFERENCE];
    this.#tags = data[CompleteWhoAmICompanyFields.COLUMN_TAGS];
  }

  readonly #hasAccessToXcp: boolean;
  readonly #isProtected: boolean;
  readonly #marketplace?: string;
  readonly #name?: string;
  readonly #reference: string;
  readonly #tags: string[];

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

  public toJSON(): CompleteWhoAmICompanyData {
    return {
      [CompleteWhoAmICompanyFields.COLUMN_HAS_ACCESS_TO_XCP]: this
        .hasAccessToXcp,
      [CompleteWhoAmICompanyFields.COLUMN_IS_PROTECTED]: this.isProtected,
      [CompleteWhoAmICompanyFields.COLUMN_MARKETPLACE]: this.marketplace,
      [CompleteWhoAmICompanyFields.COLUMN_NAME]: this.name,
      [CompleteWhoAmICompanyFields.COLUMN_REFERENCE]: this.reference,
      [CompleteWhoAmICompanyFields.COLUMN_TAGS]: this.tags,
    };
  }
}
