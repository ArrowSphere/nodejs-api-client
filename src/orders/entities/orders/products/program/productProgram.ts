import { AbstractEntity } from '../../../../../abstractEntity';

export enum ProductProgramFields {
  COLUMN_LEGACY_CODE = 'legacyCode',
}

export type ProductProgramType = {
  [ProductProgramFields.COLUMN_LEGACY_CODE]: string;
};

export class ProductProgram extends AbstractEntity<ProductProgramType> {
  readonly #legacyCode: string;

  public constructor(program: ProductProgramType) {
    super(program);

    this.#legacyCode = program[ProductProgramFields.COLUMN_LEGACY_CODE];
  }

  get legacyCode(): string {
    return this.#legacyCode;
  }

  public toJSON(): ProductProgramType {
    return {
      [ProductProgramFields.COLUMN_LEGACY_CODE]: this.legacyCode,
    };
  }
}
