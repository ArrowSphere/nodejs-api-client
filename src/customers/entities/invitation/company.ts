import { AbstractEntity } from '../../../abstractEntity';

export enum CompanyFields {
  COLUMN_REFERENCE = 'reference',
}

export type CompanyData = {
  [CompanyFields.COLUMN_REFERENCE]: string;
};

export class Company extends AbstractEntity<CompanyData> {
  readonly #reference: string;

  constructor(data: CompanyData) {
    super(data);

    this.#reference = data[CompanyFields.COLUMN_REFERENCE];
  }

  get reference(): string {
    return this.#reference;
  }

  public toJSON(): CompanyData {
    return {
      [CompanyFields.COLUMN_REFERENCE]: this.reference,
    };
  }
}
