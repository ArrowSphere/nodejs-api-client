import { AbstractEntity } from '../../../../../abstractEntity';
import {
  LandingPageBody,
  LandingPageBodyType,
} from '../../../campaign/landingPage/landingPageBody';
import {
  LandingPageFooterV2,
  LandingPageFooterV2Type,
} from './landingPageFooter/landingPageFooter';
import {
  LandingPageHeaderV2,
  LandingPageHeaderV2Type,
} from './landingPageHeader';

export enum LandingPageV2Fields {
  COLUMN_URL = 'url',
  COLUMN_HEADER = 'header',
  COLUMN_BODY = 'body',
  COLUMN_FOOTER = 'footer',
}

export type LandingPageV2Type = {
  [LandingPageV2Fields.COLUMN_URL]?: string;
  [LandingPageV2Fields.COLUMN_HEADER]: LandingPageHeaderV2Type;
  [LandingPageV2Fields.COLUMN_BODY]: LandingPageBodyType;
  [LandingPageV2Fields.COLUMN_FOOTER]?: LandingPageFooterV2Type;
};

export class LandingPageV2 extends AbstractEntity<LandingPageV2Type> {
  readonly #url?: string;
  readonly #header: LandingPageHeaderV2;
  readonly #body: LandingPageBody;
  readonly #footer?: LandingPageFooterV2;

  constructor(landingPageInput: LandingPageV2Type) {
    super(landingPageInput);
    this.#url = landingPageInput[LandingPageV2Fields.COLUMN_URL];
    this.#header = new LandingPageHeaderV2(
      landingPageInput[LandingPageV2Fields.COLUMN_HEADER],
    );
    this.#body = new LandingPageBody(
      landingPageInput[LandingPageV2Fields.COLUMN_BODY],
    );
    this.#footer = landingPageInput[LandingPageV2Fields.COLUMN_FOOTER]
      ? new LandingPageFooterV2(
          landingPageInput[
            LandingPageV2Fields.COLUMN_FOOTER
          ] as LandingPageFooterV2,
        )
      : undefined;
  }

  get url(): string | undefined {
    return this.#url;
  }

  get header(): LandingPageHeaderV2 {
    return this.#header;
  }

  get body(): LandingPageBody {
    return this.#body;
  }

  get footer(): LandingPageFooterV2 | undefined {
    return this.#footer;
  }

  public toJSON(): LandingPageV2Type {
    return {
      [LandingPageV2Fields.COLUMN_URL]: this.url,
      [LandingPageV2Fields.COLUMN_HEADER]: this.header.toJSON(),
      [LandingPageV2Fields.COLUMN_BODY]: this.body.toJSON(),
      [LandingPageV2Fields.COLUMN_FOOTER]: this.footer?.toJSON(),
    };
  }
}
