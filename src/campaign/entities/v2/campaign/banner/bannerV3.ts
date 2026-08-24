import { AbstractEntity } from '../../../../../abstractEntity';
import { CampaignBackground, CampaignButton, CampaignMedia } from '../campaign';

// Campaign Banner Types
export type CampaignBannerType = {
  background: CampaignBackground;
  button: CampaignButton;
  description?: string;
  displayConfiguration: number;
  media: CampaignMedia;
  subtitle?: string;
  textColor: string;
  title: string;
};

export enum BannerFields {
  COLUMN_BACKGROUND = 'background',
  COLUMN_BUTTON = 'button',
  COLUMN_DESCRIPTION = 'description',
  COLUMN_DISPLAY_CONFIGURATION = 'displayConfiguration',
  COLUMN_MEDIA = 'media',
  COLUMN_SUBTITLE = 'subtitle',
  COLUMN_TEXT_COLOR = 'textColor',
  COLUMN_TITLE = 'title',
}

export class CampaignBanner extends AbstractEntity<CampaignBannerType> {
  readonly #background: CampaignBackground;
  readonly #button: CampaignButton;
  readonly #description: string | undefined;
  readonly #displayConfiguration: number;
  readonly #media: CampaignMedia;
  readonly #subtitle: string | undefined;
  readonly #textColor: string;
  readonly #title: string;

  constructor(popupInput: CampaignBannerType) {
    super(popupInput);
    this.#background = popupInput[BannerFields.COLUMN_BACKGROUND];
    this.#button = popupInput[BannerFields.COLUMN_BUTTON];
    this.#description = popupInput[BannerFields.COLUMN_DESCRIPTION];
    this.#displayConfiguration =
      popupInput[BannerFields.COLUMN_DISPLAY_CONFIGURATION];
    this.#media = popupInput[BannerFields.COLUMN_MEDIA];
    this.#subtitle = popupInput[BannerFields.COLUMN_SUBTITLE];
    this.#textColor = popupInput[BannerFields.COLUMN_TEXT_COLOR];
    this.#title = popupInput[BannerFields.COLUMN_TITLE];
  }

  get background(): CampaignBackground {
    return this.#background;
  }

  get button(): CampaignButton {
    return this.#button;
  }

  get description(): string | undefined {
    return this.#description;
  }

  get displayConfiguration(): number {
    return this.#displayConfiguration;
  }

  get media(): CampaignMedia {
    return this.#media;
  }

  get subtitle(): string | undefined {
    return this.#subtitle;
  }

  get textColor(): string {
    return this.#textColor;
  }

  get title(): string {
    return this.#title;
  }

  public toJSON(): CampaignBannerType {
    return {
      [BannerFields.COLUMN_BACKGROUND]: this.background,
      [BannerFields.COLUMN_BUTTON]: this.button,
      [BannerFields.COLUMN_DESCRIPTION]: this.description,
      [BannerFields.COLUMN_DISPLAY_CONFIGURATION]: this.displayConfiguration,
      [BannerFields.COLUMN_MEDIA]: this.media,
      [BannerFields.COLUMN_SUBTITLE]: this.subtitle,
      [BannerFields.COLUMN_TEXT_COLOR]: this.textColor,
      [BannerFields.COLUMN_TITLE]: this.title,
    };
  }
}
