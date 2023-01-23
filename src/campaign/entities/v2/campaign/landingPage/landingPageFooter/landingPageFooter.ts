import { AbstractEntity } from '../../../../../../abstractEntity';
import {
  LandingPageFooterFeatureV2,
  LandingPageFooterFeatureV2Type,
} from './landingPageFooterFeature';

export enum LandingPageFooterV2Fields {
  COLUMN_TITLE = 'title',
  COLUMN_BACKGROUND_COLOR = 'backgroundColor',
  COLUMN_BUTTON_TEXT = 'buttonText',
  COLUMN_BUTTON_URL = 'buttonUrl',
  COLUMN_TEXT_COLOR = 'textColor',
  COLUMN_FEATURE = 'feature',
  COLUMN_MARKETING_FEATURE = 'marketingFeature',
}

export type LandingPageFooterV2Type = {
  [LandingPageFooterV2Fields.COLUMN_TITLE]?: string;
  [LandingPageFooterV2Fields.COLUMN_BACKGROUND_COLOR]?: string;
  [LandingPageFooterV2Fields.COLUMN_BUTTON_TEXT]?: string;
  [LandingPageFooterV2Fields.COLUMN_BUTTON_URL]?: string;
  [LandingPageFooterV2Fields.COLUMN_TEXT_COLOR]?: string;
  [LandingPageFooterV2Fields.COLUMN_FEATURE]?: LandingPageFooterFeatureV2Type;
  [LandingPageFooterV2Fields.COLUMN_MARKETING_FEATURE]?: LandingPageFooterFeatureV2Type;
};

export class LandingPageFooterV2 extends AbstractEntity<LandingPageFooterV2Type> {
  readonly #title?: string;
  readonly #backgroundColor?: string;
  readonly #buttonText?: string;
  readonly #buttonUrl?: string;
  readonly #textColor?: string;
  readonly #feature?: LandingPageFooterFeatureV2 | undefined;
  readonly #marketingFeature?: LandingPageFooterFeatureV2;

  constructor(landingPageFooterInput: LandingPageFooterV2Type) {
    super(landingPageFooterInput);
    this.#title =
      landingPageFooterInput[LandingPageFooterV2Fields.COLUMN_TITLE];
    this.#backgroundColor =
      landingPageFooterInput[LandingPageFooterV2Fields.COLUMN_BACKGROUND_COLOR];
    this.#buttonText =
      landingPageFooterInput[LandingPageFooterV2Fields.COLUMN_BUTTON_TEXT];
    this.#buttonUrl =
      landingPageFooterInput[LandingPageFooterV2Fields.COLUMN_BUTTON_URL];
    this.#textColor =
      landingPageFooterInput[LandingPageFooterV2Fields.COLUMN_TEXT_COLOR];

    this.#feature = landingPageFooterInput[
      LandingPageFooterV2Fields.COLUMN_FEATURE
    ]
      ? new LandingPageFooterFeatureV2(
          landingPageFooterInput[
            LandingPageFooterV2Fields.COLUMN_FEATURE
          ] as LandingPageFooterV2Type,
        )
      : undefined;

    this.#marketingFeature = landingPageFooterInput[
      LandingPageFooterV2Fields.COLUMN_MARKETING_FEATURE
    ]
      ? new LandingPageFooterFeatureV2(
          landingPageFooterInput[
            LandingPageFooterV2Fields.COLUMN_MARKETING_FEATURE
          ] as LandingPageFooterV2Type,
        )
      : undefined;
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

  get feature(): LandingPageFooterFeatureV2 | undefined {
    return this.#feature;
  }

  get marketingFeature(): LandingPageFooterFeatureV2 | undefined {
    return this.#marketingFeature;
  }

  public toJSON(): LandingPageFooterV2Type {
    return {
      [LandingPageFooterV2Fields.COLUMN_TITLE]: this.title,
      [LandingPageFooterV2Fields.COLUMN_BACKGROUND_COLOR]: this.backgroundColor,
      [LandingPageFooterV2Fields.COLUMN_BUTTON_TEXT]: this.buttonText,
      [LandingPageFooterV2Fields.COLUMN_BUTTON_URL]: this.buttonUrl,
      [LandingPageFooterV2Fields.COLUMN_TEXT_COLOR]: this.textColor,
      [LandingPageFooterV2Fields.COLUMN_FEATURE]: this.feature?.toJSON(),
      [LandingPageFooterV2Fields.COLUMN_MARKETING_FEATURE]: this.marketingFeature?.toJSON(),
    };
  }
}
