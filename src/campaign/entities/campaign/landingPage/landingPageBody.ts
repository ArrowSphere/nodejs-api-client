import { AbstractEntity } from '../../../../abstractEntity';

export enum LandingPageBodyFields {
  COLUMN_BACKGROUND_IMAGE_UUID = 'backgroundImageUuid',
  COLUMN_BACKGROUND_COLOR = 'backgroundColor',
  COLUMN_TYPE = 'type',
  COLUMN_TITLE = 'title',
  COLUMN_DESCRIPTION = 'description',
  COLUMN_VIDEO_URL = 'videoUrl',
  COLUMN_BUTTON_TEXT = 'buttonText',
  COLUMN_CONTACT_EMAIL = 'contactEmail',
}

export type LandingPageBodyType = {
  [LandingPageBodyFields.COLUMN_BACKGROUND_IMAGE_UUID]: string;
  [LandingPageBodyFields.COLUMN_BACKGROUND_COLOR]?: string;
  [LandingPageBodyFields.COLUMN_TYPE]?: string;
  [LandingPageBodyFields.COLUMN_TITLE]?: string;
  [LandingPageBodyFields.COLUMN_DESCRIPTION]?: string;
  [LandingPageBodyFields.COLUMN_VIDEO_URL]?: string;
  [LandingPageBodyFields.COLUMN_BUTTON_TEXT]?: string;
  [LandingPageBodyFields.COLUMN_CONTACT_EMAIL]?: string;
};

export class LandingPageBody extends AbstractEntity<LandingPageBodyType> {
  readonly #backgroundImageUuid: string;
  readonly #backgroundColor?: string;
  readonly #type?: string;
  readonly #title?: string;
  readonly #description?: string;
  readonly #videoUrl?: string;
  readonly #buttonText?: string;
  readonly #contactEmail?: string;

  constructor(landingPageBodyInput: LandingPageBodyType) {
    super(landingPageBodyInput);
    this.#backgroundImageUuid =
      landingPageBodyInput[LandingPageBodyFields.COLUMN_BACKGROUND_IMAGE_UUID];
    this.#backgroundColor =
      landingPageBodyInput[LandingPageBodyFields.COLUMN_BACKGROUND_COLOR];
    this.#type = landingPageBodyInput[LandingPageBodyFields.COLUMN_TYPE];
    this.#title = landingPageBodyInput[LandingPageBodyFields.COLUMN_TITLE];
    this.#description =
      landingPageBodyInput[LandingPageBodyFields.COLUMN_DESCRIPTION];
    this.#videoUrl =
      landingPageBodyInput[LandingPageBodyFields.COLUMN_VIDEO_URL];
    this.#buttonText =
      landingPageBodyInput[LandingPageBodyFields.COLUMN_BUTTON_TEXT];
    this.#contactEmail =
      landingPageBodyInput[LandingPageBodyFields.COLUMN_CONTACT_EMAIL];
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

  get title(): string | undefined {
    return this.#title;
  }

  get description(): string | undefined {
    return this.#description;
  }

  get videoUrl(): string | undefined {
    return this.#videoUrl;
  }

  get buttonText(): string | undefined {
    return this.#buttonText;
  }

  get contactEmail(): string | undefined {
    return this.#contactEmail;
  }

  public toJSON(): LandingPageBodyType {
    return {
      [LandingPageBodyFields.COLUMN_BACKGROUND_IMAGE_UUID]: this
        .backgroundImageUuid,
      [LandingPageBodyFields.COLUMN_BACKGROUND_COLOR]: this.backgroundColor,
      [LandingPageBodyFields.COLUMN_TYPE]: this.type,
      [LandingPageBodyFields.COLUMN_TITLE]: this.title,
      [LandingPageBodyFields.COLUMN_DESCRIPTION]: this.description,
      [LandingPageBodyFields.COLUMN_VIDEO_URL]: this.videoUrl,
      [LandingPageBodyFields.COLUMN_BUTTON_TEXT]: this.buttonText,
      [LandingPageBodyFields.COLUMN_CONTACT_EMAIL]: this.contactEmail,
    };
  }
}
