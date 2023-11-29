import { AbstractEntity } from '../../../abstractEntity';

export type AssetsData = {
  mainLogoUrl?: string;
  squareLogoUrl?: string;
};

export class AssetsFindResult extends AbstractEntity<AssetsData> {
  readonly #mainLogoUrl?: string;
  readonly #squareLogoUrl?: string;

  public constructor(data: AssetsData) {
    super(data);

    this.#mainLogoUrl = data.mainLogoUrl;
    this.#squareLogoUrl = data.squareLogoUrl;
  }

  public toJSON(): AssetsData {
    return {
      mainLogoUrl: this.#mainLogoUrl,
      squareLogoUrl: this.#squareLogoUrl,
    };
  }
}
