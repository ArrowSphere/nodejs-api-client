import { AbstractEntity } from '../../../../../abstractEntity';

export enum BannerV2Fields {
  COLUMN_BACKGROUND_IMAGE_UUID = 'backgroundImageUuid',
  COLUMN_BACKGROUND_COLOR = 'backgroundColor',
  COLUMN_TYPE = 'type',
  COLUMN_BUTTON_PLACEMENT = 'buttonPlacement',
  COLUMN_BUTTON_TEXT = 'buttonText',
  COLUMN_TEXT = 'text',
  COLUMN_TEXT_COLOR = 'textColor',
}

export type BannerV2Type = {
  [BannerV2Fields.COLUMN_BACKGROUND_IMAGE_UUID]: string;
  [BannerV2Fields.COLUMN_BACKGROUND_COLOR]?: string;
  [BannerV2Fields.COLUMN_TYPE]?: string;
  [BannerV2Fields.COLUMN_BUTTON_PLACEMENT]?: string;
  [BannerV2Fields.COLUMN_BUTTON_TEXT]?: string;
  [BannerV2Fields.COLUMN_TEXT]?: string;
  [BannerV2Fields.COLUMN_TEXT_COLOR]?: string;
};

export class BannerV2 extends AbstractEntity<BannerV2Type> {
  readonly #backgroundImageUuid: string;
  readonly #type?: string;
  readonly #buttonPlacement?: string;
  readonly #buttonText?: string;
  readonly #text?: string;
  readonly #textColor?: string;
  readonly #backgroundColor?: string;

  constructor(bannerInput: BannerV2Type) {
    super(bannerInput);
    this.#backgroundImageUuid =
      bannerInput[BannerV2Fields.COLUMN_BACKGROUND_IMAGE_UUID];
    this.#type = bannerInput[BannerV2Fields.COLUMN_TYPE];
    this.#buttonPlacement = bannerInput[BannerV2Fields.COLUMN_BUTTON_PLACEMENT];
    this.#buttonText = bannerInput[BannerV2Fields.COLUMN_BUTTON_TEXT];
    this.#text = bannerInput[BannerV2Fields.COLUMN_TEXT];
    this.#textColor = bannerInput[BannerV2Fields.COLUMN_TEXT_COLOR];
    this.#backgroundColor = bannerInput[BannerV2Fields.COLUMN_BACKGROUND_COLOR];
  }

  get backgroundImageUuid(): string {
    return this.#backgroundImageUuid;
  }
  get backgroundColor(): string | undefined {
    return this.#backgroundColor;
  }
  get type(): string | undefined {
    return this.#type;
  }
  get buttonPlacement(): string | undefined {
    return this.#buttonPlacement;
  }
  get buttonText(): string | undefined {
    return this.#buttonText;
  }
  get text(): string | undefined {
    return this.#text;
  }
  get textColor(): string | undefined {
    return this.#textColor;
  }

  public toJSON(): BannerV2Type {
    return {
      [BannerV2Fields.COLUMN_BACKGROUND_IMAGE_UUID]: this.backgroundImageUuid,
      [BannerV2Fields.COLUMN_BACKGROUND_COLOR]: this.backgroundColor,
      [BannerV2Fields.COLUMN_TYPE]: this.type,
      [BannerV2Fields.COLUMN_BUTTON_PLACEMENT]: this.buttonPlacement,
      [BannerV2Fields.COLUMN_BUTTON_TEXT]: this.buttonText,
      [BannerV2Fields.COLUMN_TEXT]: this.text,
      [BannerV2Fields.COLUMN_TEXT_COLOR]: this.textColor,
    };
  }
}
