import { AbstractEntity } from '../../../../../abstractEntity';

export enum LandingPageFooterFeatureFields {
  COLUMN_TITLE = 'title',
  COLUMN_DESCRIPTION = 'description',
  COLUMN_ICON = 'icon',
  COLUMN_SIZE = 'size',
}

export type LandingPageFooterFeatureType = {
  [LandingPageFooterFeatureFields.COLUMN_TITLE]?: string;
  [LandingPageFooterFeatureFields.COLUMN_DESCRIPTION]?: string;
  [LandingPageFooterFeatureFields.COLUMN_ICON]?: string;
  [LandingPageFooterFeatureFields.COLUMN_SIZE]?: number;
};

export class LandingPageFooterFeature extends AbstractEntity<LandingPageFooterFeatureType> {
  readonly #title?: string;
  readonly #description?: string;
  readonly #icon?: string;
  readonly #size?: number;

  constructor(landingPageFooterFeatureInput: LandingPageFooterFeatureType) {
    super(landingPageFooterFeatureInput);
    this.#title =
      landingPageFooterFeatureInput[
        LandingPageFooterFeatureFields.COLUMN_TITLE
      ];
    this.#description =
      landingPageFooterFeatureInput[
        LandingPageFooterFeatureFields.COLUMN_DESCRIPTION
      ];
    this.#icon =
      landingPageFooterFeatureInput[LandingPageFooterFeatureFields.COLUMN_ICON];
    this.#size =
      landingPageFooterFeatureInput[LandingPageFooterFeatureFields.COLUMN_SIZE];
  }

  get title(): string | undefined {
    return this.#title;
  }

  get description(): string | undefined {
    return this.#description;
  }

  get icon(): string | undefined {
    return this.#icon;
  }

  get size(): number | undefined {
    return this.#size;
  }

  public toJSON(): LandingPageFooterFeatureType {
    return {
      [LandingPageFooterFeatureFields.COLUMN_TITLE]: this.title,
      [LandingPageFooterFeatureFields.COLUMN_DESCRIPTION]: this.description,
      [LandingPageFooterFeatureFields.COLUMN_ICON]: this.icon,
      [LandingPageFooterFeatureFields.COLUMN_SIZE]: this.size,
    };
  }
}
