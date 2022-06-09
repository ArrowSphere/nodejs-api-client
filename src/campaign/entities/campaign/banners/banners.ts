import { AbstractEntity } from '../../../../abstractEntity';

export enum BannersFields {
  COLUMN_BACKGROUND_IMAGE_UUID = 'backgroundImageUuid',
  COLUMN_TYPE = 'type',
  COLUMN_BUTTON_PLACEMENT = 'buttonPlacement',
  COLUMN_BUTTON_TEXT = 'buttonText',
  COLUMN_TEXT = 'text',
  COLUMN_TEXT_COLOR = 'textColor',
}

export type BannersType = {
  [BannersFields.COLUMN_BACKGROUND_IMAGE_UUID]: string;
  [BannersFields.COLUMN_TYPE]?: string;
  [BannersFields.COLUMN_BUTTON_PLACEMENT]?: string;
  [BannersFields.COLUMN_BUTTON_TEXT]?: string;
  [BannersFields.COLUMN_TEXT]?: string;
  [BannersFields.COLUMN_TEXT_COLOR]?: string;
};

export class Banners extends AbstractEntity<BannersType> {
  readonly #backgroundImageUuid: string;
  readonly #type?: string;
  readonly #buttonPlacement?: string;
  readonly #buttonText?: string;
  readonly #text?: string;
  readonly #textColor?: string;

  constructor(bannerInput: BannersType) {
    super(bannerInput);
    this.#backgroundImageUuid =
      bannerInput[BannersFields.COLUMN_BACKGROUND_IMAGE_UUID];
    this.#type = bannerInput[BannersFields.COLUMN_TYPE];
    this.#buttonPlacement = bannerInput[BannersFields.COLUMN_BUTTON_PLACEMENT];
    this.#buttonText = bannerInput[BannersFields.COLUMN_BUTTON_TEXT];
    this.#text = bannerInput[BannersFields.COLUMN_TEXT];
    this.#textColor = bannerInput[BannersFields.COLUMN_TEXT_COLOR];
  }

  get backgroundImageUuid(): string {
    return this.#backgroundImageUuid;
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

  public toJSON(): BannersType {
    return {
      [BannersFields.COLUMN_BACKGROUND_IMAGE_UUID]: this.backgroundImageUuid,
      [BannersFields.COLUMN_TYPE]: this.type,
      [BannersFields.COLUMN_BUTTON_PLACEMENT]: this.buttonPlacement,
      [BannersFields.COLUMN_BUTTON_TEXT]: this.buttonText,
      [BannersFields.COLUMN_TEXT]: this.text,
      [BannersFields.COLUMN_TEXT_COLOR]: this.textColor,
    };
  }
}
