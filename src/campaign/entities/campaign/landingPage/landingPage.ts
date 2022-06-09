import { AbstractEntity } from '../../../../abstractEntity';
import { LandingPageBody, LandingPageBodyType } from './landingPageBody';
import {
  LandingPageFooter,
  LandingPageFooterType,
} from './landingPageFooter/landingPageFooter';
import { LandingPageHeader, LandingPageHeaderType } from './landingPageHeader';

export enum LandingPageFields {
  COLUMN_URL = 'url',
  COLUMN_HEADER = 'header',
  COLUMN_BODY = 'body',
  COLUMN_FOOTER = 'footer',
}

export type LandingPageType = {
  [LandingPageFields.COLUMN_URL]?: string;
  [LandingPageFields.COLUMN_HEADER]: LandingPageHeaderType;
  [LandingPageFields.COLUMN_BODY]: LandingPageBodyType;
  [LandingPageFields.COLUMN_FOOTER]?: LandingPageFooterType;
};

export class LandingPage extends AbstractEntity<LandingPageType> {
  readonly #url?: string;
  readonly #header: LandingPageHeader;
  readonly #body: LandingPageBody;
  readonly #footer?: LandingPageFooter;

  constructor(landingPageInput: LandingPageType) {
    super(landingPageInput);
    this.#url = landingPageInput[LandingPageFields.COLUMN_URL];
    this.#header = new LandingPageHeader(
      landingPageInput[LandingPageFields.COLUMN_HEADER],
    );
    this.#body = new LandingPageBody(
      landingPageInput[LandingPageFields.COLUMN_BODY],
    );
    this.#footer = landingPageInput[LandingPageFields.COLUMN_FOOTER]
      ? new LandingPageFooter(
          landingPageInput[
            LandingPageFields.COLUMN_FOOTER
          ] as LandingPageFooter,
        )
      : undefined;
  }

  get url(): string | undefined {
    return this.#url;
  }

  get header(): LandingPageHeader {
    return this.#header;
  }

  get body(): LandingPageBody {
    return this.#body;
  }

  get footer(): LandingPageFooter | undefined {
    return this.#footer;
  }

  public toJSON(): LandingPageType {
    return {
      [LandingPageFields.COLUMN_URL]: this.url,
      [LandingPageFields.COLUMN_HEADER]: this.header.toJSON(),
      [LandingPageFields.COLUMN_BODY]: this.body.toJSON(),
      [LandingPageFields.COLUMN_FOOTER]: this.footer?.toJSON(),
    };
  }
}
