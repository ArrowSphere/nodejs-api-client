import { AbstractEntity } from '../../abstractEntity';

export enum QuoteProductProgramFields {
  LEGACY_CODE = 'legacyCode',
  INTERNAL_NAME = 'internalName',
}

export type QuoteProductProgramData = {
  [QuoteProductProgramFields.LEGACY_CODE]: string;
  [QuoteProductProgramFields.INTERNAL_NAME]?: string;
};

export class QuoteProductProgram extends AbstractEntity<QuoteProductProgramData> {
  readonly #legacyCode: string;
  readonly #internalName?: string;

  public constructor(data: QuoteProductProgramData) {
    super(data);

    this.#legacyCode = data[QuoteProductProgramFields.LEGACY_CODE];
    this.#internalName = data[QuoteProductProgramFields.INTERNAL_NAME];
  }

  get legacyCode(): string {
    return this.#legacyCode;
  }

  get internalName(): string | undefined {
    return this.#internalName;
  }

  public toJSON(): QuoteProductProgramData {
    return {
      [QuoteProductProgramFields.LEGACY_CODE]: this.legacyCode,
      [QuoteProductProgramFields.INTERNAL_NAME]: this.internalName,
    };
  }
}
