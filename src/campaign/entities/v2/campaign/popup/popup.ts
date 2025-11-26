import { AbstractEntity } from '../../../../../abstractEntity';

// Campaign Popup Types
export type CampaignPopupType = {
  background: PopupBackground;
  button: PopupButton;
  description: string;
  displayConfiguration: number;
  media: PopupMedia;
  textColor: PopupTextColor;
  title: string;
};

export type PopupBackground = {
  type: PopupBackgroundType;
  color1?: string;
  color2?: string;
  uuidImage?: string;
};

export type PopupButton = {
  buttonClass: BootstrapVariants;
  linkUrl: string;
  text: string;
};

export type PopupMedia = {
  imageUuid?: string;
  linkUrl?: string;
  type: PopupMediaType;
};

export enum PopupBackgroundType {
  IMAGE = 'IMAGE',
  COLOR = 'COLOR',
}

export enum BootstrapVariants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  DANGER = 'danger',
  WARNING = 'warning',
  INFO = 'info',
  LIGHT = 'light',
  DARK = 'dark',
}

export enum PopupMediaType {
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
}

export enum PopupTextColor {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

export enum PopupFields {
  COLUMN_BACKGROUND = 'background',
  COLUMN_BUTTON = 'button',
  COLUMN_DESCRIPTION = 'description',
  COLUMN_DISPLAY_CONFIGURATION = 'displayConfiguration',
  COLUMN_MEDIA = 'media',
  COLUMN_TEXT_COLOR = 'textColor',
  COLUMN_TITLE = 'title',
}

export class CampaignPopup extends AbstractEntity<CampaignPopupType> {
  readonly #background: PopupBackground;
  readonly #button: PopupButton;
  readonly #description: string;
  readonly #displayConfiguration: number;
  readonly #media: PopupMedia;
  readonly #textColor: PopupTextColor;
  readonly #title: string;

  constructor(popupInput: CampaignPopupType) {
    super(popupInput);
    this.#background = popupInput[PopupFields.COLUMN_BACKGROUND];
    this.#button = popupInput[PopupFields.COLUMN_BUTTON];
    this.#description = popupInput[PopupFields.COLUMN_DESCRIPTION];
    this.#displayConfiguration =
      popupInput[PopupFields.COLUMN_DISPLAY_CONFIGURATION];
    this.#media = popupInput[PopupFields.COLUMN_MEDIA];
    this.#textColor = popupInput[PopupFields.COLUMN_TEXT_COLOR];
    this.#title = popupInput[PopupFields.COLUMN_TITLE];
  }

  get background(): PopupBackground {
    return this.#background;
  }

  get button(): PopupButton {
    return this.#button;
  }

  get description(): string {
    return this.#description;
  }

  get displayConfiguration(): number {
    return this.#displayConfiguration;
  }

  get media(): PopupMedia {
    return this.#media;
  }

  get textColor(): PopupTextColor {
    return this.#textColor;
  }

  get title(): string {
    return this.#title;
  }

  public toJSON(): CampaignPopupType {
    return {
      [PopupFields.COLUMN_BACKGROUND]: this.background,
      [PopupFields.COLUMN_BUTTON]: this.button,
      [PopupFields.COLUMN_DESCRIPTION]: this.description,
      [PopupFields.COLUMN_DISPLAY_CONFIGURATION]: this.displayConfiguration,
      [PopupFields.COLUMN_MEDIA]: this.media,
      [PopupFields.COLUMN_TEXT_COLOR]: this.textColor,
      [PopupFields.COLUMN_TITLE]: this.title,
    };
  }
}
