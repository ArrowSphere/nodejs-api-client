import { AbstractEntity } from '../../../../../abstractEntity';

export enum LandingPageHeaderV2Fields {
  COLUMN_BACKGROUND_IMAGE_UUID = 'backgroundImageUuid',
  COLUMN_VENDOR_LOGO_UUID = 'vendorLogoUuid',
  COLUMN_TITLE = 'title',
  COLUMN_BACKGROUND_COLOR = 'backgroundColor',
  COLUMN_BASELINE = 'baseline',
  COLUMN_TEXT_COLOR = 'textColor',

  COLUMN_CIRCLE_COLOR = 'circleColor',
}

export type LandingPageHeaderV2Type = {
  [LandingPageHeaderV2Fields.COLUMN_BACKGROUND_IMAGE_UUID]: string;
  [LandingPageHeaderV2Fields.COLUMN_VENDOR_LOGO_UUID]: string;
  [LandingPageHeaderV2Fields.COLUMN_TITLE]?: string;
  [LandingPageHeaderV2Fields.COLUMN_BACKGROUND_COLOR]?: string;
  [LandingPageHeaderV2Fields.COLUMN_BASELINE]?: string;
  [LandingPageHeaderV2Fields.COLUMN_TEXT_COLOR]?: string;
  [LandingPageHeaderV2Fields.COLUMN_CIRCLE_COLOR]?: string;
};

export class LandingPageHeaderV2 extends AbstractEntity<LandingPageHeaderV2Type> {
  readonly #backgroundImageUuid: string;
  readonly #vendorLogoUuid: string;
  readonly #title?: string;
  readonly #backgroundColor?: string;
  readonly #baseline?: string;
  readonly #textColor?: string;
  readonly #circleColor?: string;

  constructor(landingPageHeaderInput: LandingPageHeaderV2Type) {
    super(landingPageHeaderInput);
    this.#backgroundImageUuid =
      landingPageHeaderInput[
        LandingPageHeaderV2Fields.COLUMN_BACKGROUND_IMAGE_UUID
      ];
    this.#vendorLogoUuid =
      landingPageHeaderInput[LandingPageHeaderV2Fields.COLUMN_VENDOR_LOGO_UUID];
    this.#title =
      landingPageHeaderInput[LandingPageHeaderV2Fields.COLUMN_TITLE];
    this.#backgroundColor =
      landingPageHeaderInput[LandingPageHeaderV2Fields.COLUMN_BACKGROUND_COLOR];
    this.#baseline =
      landingPageHeaderInput[LandingPageHeaderV2Fields.COLUMN_BASELINE];
    this.#textColor =
      landingPageHeaderInput[LandingPageHeaderV2Fields.COLUMN_TEXT_COLOR];
    this.#circleColor =
      landingPageHeaderInput[LandingPageHeaderV2Fields.COLUMN_CIRCLE_COLOR];
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

  get circleColor(): string | undefined {
    return this.#circleColor;
  }

  public toJSON(): LandingPageHeaderV2Type {
    return {
      [LandingPageHeaderV2Fields.COLUMN_BACKGROUND_IMAGE_UUID]: this
        .backgroundImageUuid,
      [LandingPageHeaderV2Fields.COLUMN_VENDOR_LOGO_UUID]: this.vendorLogoUuid,
      [LandingPageHeaderV2Fields.COLUMN_TITLE]: this.title,
      [LandingPageHeaderV2Fields.COLUMN_BACKGROUND_COLOR]: this.backgroundColor,
      [LandingPageHeaderV2Fields.COLUMN_BASELINE]: this.baseline,
      [LandingPageHeaderV2Fields.COLUMN_TEXT_COLOR]: this.textColor,
      [LandingPageHeaderV2Fields.COLUMN_CIRCLE_COLOR]: this.circleColor,
    };
  }
}
