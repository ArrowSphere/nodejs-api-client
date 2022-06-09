import { AbstractEntity } from '../../../../../abstractEntity';
import {
  LandingPageFooterFeature,
  LandingPageFooterFeatureType,
} from './landingPageFooterFeature';

export enum LandingPageFooterFields {
  COLUMN_TITLE = 'title',
  COLUMN_BACKGROUND_COLOR = 'backgroundColor',
  COLUMN_BUTTON_TEXT = 'buttonText',
  COLUMN_BUTTON_URL = 'buttonUrl',
  COLUMN_TEXT_COLOR = 'textColor',
  COLUMN_FEATURES = 'features',
}

export type LandingPageFooterType = {
  [LandingPageFooterFields.COLUMN_TITLE]?: string;
  [LandingPageFooterFields.COLUMN_BACKGROUND_COLOR]?: string;
  [LandingPageFooterFields.COLUMN_BUTTON_TEXT]?: string;
  [LandingPageFooterFields.COLUMN_BUTTON_URL]?: string;
  [LandingPageFooterFields.COLUMN_TEXT_COLOR]?: string;
  [LandingPageFooterFields.COLUMN_FEATURES]?: Array<LandingPageFooterFeatureType>;
};

export class LandingPageFooter extends AbstractEntity<LandingPageFooterType> {
  readonly #title?: string;
  readonly #backgroundColor?: string;
  readonly #buttonText?: string;
  readonly #buttonUrl?: string;
  readonly #textColor?: string;
  readonly #features?: Array<LandingPageFooterFeature>;

  constructor(landingPageFooterInput: LandingPageFooterType) {
    super(landingPageFooterInput);
    this.#title = landingPageFooterInput[LandingPageFooterFields.COLUMN_TITLE];
    this.#backgroundColor =
      landingPageFooterInput[LandingPageFooterFields.COLUMN_BACKGROUND_COLOR];
    this.#buttonText =
      landingPageFooterInput[LandingPageFooterFields.COLUMN_BUTTON_TEXT];
    this.#buttonUrl =
      landingPageFooterInput[LandingPageFooterFields.COLUMN_BUTTON_URL];
    this.#textColor =
      landingPageFooterInput[LandingPageFooterFields.COLUMN_TEXT_COLOR];
    this.#features = landingPageFooterInput[
      LandingPageFooterFields.COLUMN_FEATURES
    ]?.map(
      (landingPageFooterFeature: LandingPageFooterFeatureType) =>
        new LandingPageFooterFeature(landingPageFooterFeature),
    );
  }

  get title(): string | undefined {
    return this.#title;
  }

  get backgroundColor(): string | undefined {
    return this.#backgroundColor;
  }

  get buttonText(): string | undefined {
    return this.#buttonText;
  }

  get buttonUrl(): string | undefined {
    return this.#buttonUrl;
  }

  get textColor(): string | undefined {
    return this.#textColor;
  }

  get features(): Array<LandingPageFooterFeature> | undefined {
    return this.#features;
  }

  public toJSON(): LandingPageFooterType {
    return {
      [LandingPageFooterFields.COLUMN_TITLE]: this.title,
      [LandingPageFooterFields.COLUMN_BACKGROUND_COLOR]: this.backgroundColor,
      [LandingPageFooterFields.COLUMN_BUTTON_TEXT]: this.buttonText,
      [LandingPageFooterFields.COLUMN_BUTTON_URL]: this.buttonUrl,
      [LandingPageFooterFields.COLUMN_TEXT_COLOR]: this.textColor,
      [LandingPageFooterFields.COLUMN_FEATURES]: this.features?.map(
        (landingPageFooterFeature: LandingPageFooterFeature) =>
          landingPageFooterFeature.toJSON(),
      ),
    };
  }
}
