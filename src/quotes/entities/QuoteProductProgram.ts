import { AbstractEntity } from '../../abstractEntity';

export enum QuoteProductProgramFields {
  INTERNAL_NAME = 'internalName',
  LEGACY_CODE = 'legacyCode',
}

export type QuoteProductProgramData = {
  [QuoteProductProgramFields.INTERNAL_NAME]?: string;
  [QuoteProductProgramFields.LEGACY_CODE]: string;
};

export class QuoteProductProgram extends AbstractEntity<QuoteProductProgramData> {
  readonly #internalName?: string;
  readonly #legacyCode: string;

  public constructor(data: QuoteProductProgramData) {
    super(data);

    this.#internalName = data[QuoteProductProgramFields.INTERNAL_NAME];
    this.#legacyCode = data[QuoteProductProgramFields.LEGACY_CODE];
  }

  get internalName(): string | undefined {
    return this.#internalName;
  }

  get legacyCode(): string {
    return this.#legacyCode;
  }

  public toJSON(): QuoteProductProgramData {
    return {
      [QuoteProductProgramFields.INTERNAL_NAME]: this.internalName,
      [QuoteProductProgramFields.LEGACY_CODE]: this.legacyCode,
    };
  }
}
