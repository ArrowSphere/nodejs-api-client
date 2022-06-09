import { AbstractEntity } from '../../../../abstractEntity';

export enum LandingPageHeaderFields {
  COLUMN_BACKGROUND_IMAGE_UUID = 'backgroundImageUuid',
  COLUMN_VENDOR_LOGO_UUID = 'vendorLogoUuid',
  COLUMN_TITLE = 'title',
  COLUMN_BACKGROUND_COLOR = 'backgroundColor',
  COLUMN_BASELINE = 'baseline',
  COLUMN_TEXT_COLOR = 'textColor',
}

export type LandingPageHeaderType = {
  [LandingPageHeaderFields.COLUMN_BACKGROUND_IMAGE_UUID]: string;
  [LandingPageHeaderFields.COLUMN_VENDOR_LOGO_UUID]: string;
  [LandingPageHeaderFields.COLUMN_TITLE]?: string;
  [LandingPageHeaderFields.COLUMN_BACKGROUND_COLOR]?: string;
  [LandingPageHeaderFields.COLUMN_BASELINE]?: string;
  [LandingPageHeaderFields.COLUMN_TEXT_COLOR]?: string;
};

export class LandingPageHeader extends AbstractEntity<LandingPageHeaderType> {
  readonly #backgroundImageUuid: string;
  readonly #vendorLogoUuid: string;
  readonly #title?: string;
  readonly #backgroundColor?: string;
  readonly #baseline?: string;
  readonly #textColor?: string;

  constructor(landingPageHeaderInput: LandingPageHeaderType) {
    super(landingPageHeaderInput);
    this.#backgroundImageUuid =
      landingPageHeaderInput[
        LandingPageHeaderFields.COLUMN_BACKGROUND_IMAGE_UUID
      ];
    this.#vendorLogoUuid =
      landingPageHeaderInput[LandingPageHeaderFields.COLUMN_VENDOR_LOGO_UUID];
    this.#title = landingPageHeaderInput[LandingPageHeaderFields.COLUMN_TITLE];
    this.#backgroundColor =
      landingPageHeaderInput[LandingPageHeaderFields.COLUMN_BACKGROUND_COLOR];
    this.#baseline =
      landingPageHeaderInput[LandingPageHeaderFields.COLUMN_BASELINE];
    this.#textColor =
      landingPageHeaderInput[LandingPageHeaderFields.COLUMN_TEXT_COLOR];
  }

  get backgroundImageUuid(): string {
    return this.#backgroundImageUuid;
  }

  get vendorLogoUuid(): string {
    return this.#vendorLogoUuid;
  }

  get title(): string | undefined {
    return this.#title;
  }

  get backgroundColor(): string | undefined {
    return this.#backgroundColor;
  }

  get baseline(): string | undefined {
    return this.#baseline;
  }

  get textColor(): string | undefined {
    return this.#textColor;
  }

  public toJSON(): LandingPageHeaderType {
    return {
      [LandingPageHeaderFields.COLUMN_BACKGROUND_IMAGE_UUID]: this
        .backgroundImageUuid,
      [LandingPageHeaderFields.COLUMN_VENDOR_LOGO_UUID]: this.vendorLogoUuid,
      [LandingPageHeaderFields.COLUMN_TITLE]: this.title,
      [LandingPageHeaderFields.COLUMN_BACKGROUND_COLOR]: this.backgroundColor,
      [LandingPageHeaderFields.COLUMN_BASELINE]: this.baseline,
      [LandingPageHeaderFields.COLUMN_TEXT_COLOR]: this.textColor,
    };
  }
}
