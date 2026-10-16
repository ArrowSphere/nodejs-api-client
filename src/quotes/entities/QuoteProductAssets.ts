import { AbstractEntity } from '../../abstractEntity';

export enum QuoteProductAssetsFields {
  MAIN_LOGO_URL = 'mainLogoUrl',
  SQUARE_LOGO_URL = 'squareLogoUrl',
}

export type QuoteProductAssetsData = {
  [QuoteProductAssetsFields.MAIN_LOGO_URL]: string | null;
  [QuoteProductAssetsFields.SQUARE_LOGO_URL]: string | null;
};

export class QuoteProductAssets extends AbstractEntity<QuoteProductAssetsData> {
  readonly #mainLogoUrl: string | null;
  readonly #squareLogoUrl: string | null;

  public constructor(data: QuoteProductAssetsData) {
    super(data);

    this.#mainLogoUrl = data[QuoteProductAssetsFields.MAIN_LOGO_URL];
    this.#squareLogoUrl = data[QuoteProductAssetsFields.SQUARE_LOGO_URL];
  }

  get mainLogoUrl(): string | null {
    return this.#mainLogoUrl;
  }

  get squareLogoUrl(): string | null {
    return this.#squareLogoUrl;
  }

  public toJSON(): QuoteProductAssetsData {
    return {
      [QuoteProductAssetsFields.MAIN_LOGO_URL]: this.mainLogoUrl,
      [QuoteProductAssetsFields.SQUARE_LOGO_URL]: this.squareLogoUrl,
    };
  }
}
