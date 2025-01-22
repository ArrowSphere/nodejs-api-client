import { AbstractEntity } from '../../abstractEntity';

export enum ProgramFields {
  REFERENCE = 'reference',
  NAME = 'name',
  ASSOCIATED_SUBSCRIPTION_PROGRAM = 'associatedSubscriptionProgram',
  LOGO = 'logo',
  CATEGORY = 'category',
  LINKS = 'links',
  EXTRA_INFORMATION = 'extraInformation',
}

export enum ProgramLinksFields {
  PROGRAM = 'program',
  PRODUCTS = 'products',
}

export enum ProgramExtraInfoFields {
  RESELLER = 'reseller',
  END_CUSTOMER = 'endCustomer',
  ORDER = 'order',
}

export enum ProgramExtraInfoItemFields {
  NAME = 'name',
  LABEL = 'label',
  TYPE = 'type',
  REGEX = 'regex',
  MANDATORY = 'mandatory',
  DESCRIPTION = 'description',
}

export type ProgramType = {
  [ProgramFields.REFERENCE]?: string;
  [ProgramFields.NAME]: string;
  [ProgramFields.ASSOCIATED_SUBSCRIPTION_PROGRAM]: string;
  [ProgramFields.LOGO]: string;
  [ProgramFields.CATEGORY]: string;
  [ProgramFields.LINKS]: ProgramLinksType;
  [ProgramFields.EXTRA_INFORMATION]: ExtraInfoType;
};

export type ProgramLinksType = {
  [ProgramLinksFields.PROGRAM]: string;
  [ProgramLinksFields.PRODUCTS]: string;
};

export type ExtraInfoType = {
  [ProgramExtraInfoFields.RESELLER]: ExtraInfoItemType[];
  [ProgramExtraInfoFields.END_CUSTOMER]: ExtraInfoItemType[];
  [ProgramExtraInfoFields.ORDER]: ExtraInfoItemType[];
};

export type ExtraInfoItemType = {
  [ProgramExtraInfoItemFields.NAME]: string;
  [ProgramExtraInfoItemFields.LABEL]: string;
  [ProgramExtraInfoItemFields.TYPE]: string;
  [ProgramExtraInfoItemFields.REGEX]: string;
  [ProgramExtraInfoItemFields.MANDATORY]: boolean;
  [ProgramExtraInfoItemFields.DESCRIPTION]?: string;
};

export class Program extends AbstractEntity<ProgramType> {
  readonly #reference?: string;
  readonly #name: string;
  readonly #associatedSubscriptionProgram: string;
  readonly #logo: string;
  readonly #category: string;
  readonly #links: { program: string; products: string };
  readonly #extraInformation: ExtraInfoType;

  constructor(input: ProgramType) {
    super(input);
    this.#reference = input[ProgramFields.REFERENCE];
    this.#name = input[ProgramFields.NAME];
    this.#associatedSubscriptionProgram =
      input[ProgramFields.ASSOCIATED_SUBSCRIPTION_PROGRAM];
    this.#logo = input[ProgramFields.LOGO];
    this.#category = input[ProgramFields.CATEGORY];
    this.#links = input[ProgramFields.LINKS];
    this.#extraInformation = input[ProgramFields.EXTRA_INFORMATION];
  }

  get reference(): string | undefined {
    return this.#reference;
  }

  get name(): string {
    return this.#name;
  }

  get associatedSubscriptionProgram(): string {
    return this.#associatedSubscriptionProgram;
  }

  get logo(): string {
    return this.#logo;
  }

  get category(): string {
    return this.#category;
  }

  get links(): { program: string; products: string } {
    return this.#links;
  }

  get extraInformation(): ExtraInfoType {
    return this.#extraInformation;
  }

  public toJSON(): ProgramType {
    return {
      [ProgramFields.REFERENCE]: this.reference,
      [ProgramFields.NAME]: this.name,
      [ProgramFields.ASSOCIATED_SUBSCRIPTION_PROGRAM]: this
        .associatedSubscriptionProgram,
      [ProgramFields.LOGO]: this.logo,
      [ProgramFields.CATEGORY]: this.category,
      [ProgramFields.LINKS]: this.links,
      [ProgramFields.EXTRA_INFORMATION]: this.extraInformation,
    };
  }
}
