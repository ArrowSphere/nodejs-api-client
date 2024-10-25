import { AbstractEntity } from '../../../abstractEntity';

export type AssetsData = {
  eula: string;
  featurePictureUrl?: string;
  mainLogoUrl?: string;
  pictureUrl?: string;
  squareLogoUrl?: string;
};

export class AssetsFindResult extends AbstractEntity<AssetsData> {
  readonly #eula: string;
  readonly #featurePictureUrl?: string;
  readonly #mainLogoUrl?: string;
  readonly #pictureUrl?: string;
  readonly #squareLogoUrl?: string;

  public constructor(data: AssetsData) {
    super(data);

    this.#eula = data.eula;
    this.#featurePictureUrl = data.featurePictureUrl;
    this.#mainLogoUrl = data.mainLogoUrl;
    this.#pictureUrl = data.featurePictureUrl;
    this.#squareLogoUrl = data.squareLogoUrl;
  }

  get eula(): string {
    return this.#eula;
  }

  get featurePictureUrl(): string | undefined {
    return this.#featurePictureUrl;
  }

  get mainLogoUrl(): string | undefined {
    return this.#mainLogoUrl;
  }

  get pictureUrl(): string | undefined {
    return this.#pictureUrl;
  }

  get squareLogoUrl(): string | undefined {
    return this.#squareLogoUrl;
  }

  public toJSON(): AssetsData {
    return {
      eula: this.eula,
      featurePictureUrl: this.featurePictureUrl,
      mainLogoUrl: this.mainLogoUrl,
      pictureUrl: this.pictureUrl,
      squareLogoUrl: this.squareLogoUrl,
    };
  }
}
