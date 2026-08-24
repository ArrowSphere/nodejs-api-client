import { AbstractEntity } from '../../../../../abstractEntity';
import {
  CampaignBackground,
  CampaignButton,
  CampaignMedia,
  CampaignTextColor,
} from '../campaign';

// Campaign Popup Types
export type CampaignPopupType = {
  background: CampaignBackground;
  button: CampaignButton;
  description: string;
  displayConfiguration: number;
  media: CampaignMedia;
  textColor: CampaignTextColor;
  title: string;
};

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
  readonly #background: CampaignBackground;
  readonly #button: CampaignButton;
  readonly #description: string;
  readonly #displayConfiguration: number;
  readonly #media: CampaignMedia;
  readonly #textColor: CampaignTextColor;
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

  get background(): CampaignBackground {
    return this.#background;
  }

  get button(): CampaignButton {
    return this.#button;
  }

  get description(): string {
    return this.#description;
  }

  get displayConfiguration(): number {
    return this.#displayConfiguration;
  }

  get media(): CampaignMedia {
    return this.#media;
  }

  get textColor(): CampaignTextColor {
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
