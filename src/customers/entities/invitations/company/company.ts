import { AbstractEntity } from '../../../../abstractEntity';

export enum CompanyFields {
  COLUMN_REFERENCE = 'reference',
}

export type CompanyType = {
  [CompanyFields.COLUMN_REFERENCE]: string;
};

export class Company extends AbstractEntity<CompanyType> {
  readonly #reference: string;

  public constructor(getCustomersCompanyDataInput: CompanyType) {
    super(getCustomersCompanyDataInput);

    this.#reference =
      getCustomersCompanyDataInput[CompanyFields.COLUMN_REFERENCE];
  }

  get reference(): string {
    return this.#reference;
  }

  public toJSON(): CompanyType {
    return {
      [CompanyFields.COLUMN_REFERENCE]: this.reference,
    };
  }
}
