import { AbstractEntity } from '../../../../../../abstractEntity';
export enum LandingPageFooterFeatureItemFields {
  COLUMN_TITLE = 'title',
  COLUMN_DESCRIPTION = 'description',
  COLUMN_IMAGE_UUID = 'imageUuid',
  COLUMN_BUTTON_TEXT = 'buttonText',
  COLUMN_BUTTON_URL = 'buttonUrl',
  COLUMN_ICON = 'icon',
  COLUMN_SIZE = 'size',
}

export type LandingPageFooterFeatureItemType = {
  [LandingPageFooterFeatureItemFields.COLUMN_TITLE]?: string | undefined;
  [LandingPageFooterFeatureItemFields.COLUMN_DESCRIPTION]?: string | undefined;
  [LandingPageFooterFeatureItemFields.COLUMN_IMAGE_UUID]?: string | undefined;
  [LandingPageFooterFeatureItemFields.COLUMN_BUTTON_TEXT]?: string | undefined;
  [LandingPageFooterFeatureItemFields.COLUMN_BUTTON_URL]?: string | undefined;
  [LandingPageFooterFeatureItemFields.COLUMN_ICON]?: string | undefined;
  [LandingPageFooterFeatureItemFields.COLUMN_SIZE]?: number | undefined;
};

export class LandingPageFooterFeatureItem extends AbstractEntity<LandingPageFooterFeatureItemType> {
  readonly #title?: string;
  readonly #description?: string;
  readonly #imageUuid?: string;
  readonly #buttonText?: string;
  readonly #buttonUrl?: string;
  readonly #icon?: string;
  readonly #size?: number;

  constructor(
    landingPageFooterFeatureItemInput: LandingPageFooterFeatureItemType,
  ) {
    super(landingPageFooterFeatureItemInput);

    this.#title =
      landingPageFooterFeatureItemInput[
        LandingPageFooterFeatureItemFields.COLUMN_TITLE
      ];
    this.#description =
      landingPageFooterFeatureItemInput[
        LandingPageFooterFeatureItemFields.COLUMN_DESCRIPTION
      ];
    this.#imageUuid =
      landingPageFooterFeatureItemInput[
        LandingPageFooterFeatureItemFields.COLUMN_IMAGE_UUID
      ];
    this.#buttonText =
      landingPageFooterFeatureItemInput[
        LandingPageFooterFeatureItemFields.COLUMN_BUTTON_TEXT
      ];
    this.#buttonUrl =
      landingPageFooterFeatureItemInput[
        LandingPageFooterFeatureItemFields.COLUMN_BUTTON_URL
      ];
    this.#icon =
      landingPageFooterFeatureItemInput[
        LandingPageFooterFeatureItemFields.COLUMN_ICON
      ];
    this.#size =
      landingPageFooterFeatureItemInput[
        LandingPageFooterFeatureItemFields.COLUMN_SIZE
      ];
  }

  get title(): string | undefined {
    return this.#title;
  }

  get description(): string | undefined {
    return this.#description;
  }

  get imageUuid(): string | undefined {
    return this.#imageUuid;
  }

  get buttonText(): string | undefined {
    return this.#buttonText;
  }

  get buttonUrl(): string | undefined {
    return this.#buttonUrl;
  }

  get icon(): string | undefined {
    return this.#icon;
  }

  get size(): number | undefined {
    return this.#size;
  }

  public toJSON(): LandingPageFooterFeatureItemType {
    return {
      [LandingPageFooterFeatureItemFields.COLUMN_TITLE]: this.title,
      [LandingPageFooterFeatureItemFields.COLUMN_DESCRIPTION]: this.description,
      [LandingPageFooterFeatureItemFields.COLUMN_IMAGE_UUID]: this.imageUuid,
      [LandingPageFooterFeatureItemFields.COLUMN_BUTTON_TEXT]: this.buttonText,
      [LandingPageFooterFeatureItemFields.COLUMN_BUTTON_URL]: this.buttonUrl,
      [LandingPageFooterFeatureItemFields.COLUMN_ICON]: this.icon,
      [LandingPageFooterFeatureItemFields.COLUMN_SIZE]: this.size,
    };
  }
}
