import { AbstractEntity } from '../../../../../../abstractEntity';
import {
  LandingPageFooterFeatureItem,
  LandingPageFooterFeatureItemType,
} from './landingPageFooterFeatureItem';

export enum LandingPageFooterFeatureV2Fields {
  COLUMN_TITLE = 'title',
  COLUMN_DESCRIPTION = 'description',
  COLUMN_ITEMS = 'items',
}

export type LandingPageFooterFeatureV2Type = {
  [LandingPageFooterFeatureV2Fields.COLUMN_TITLE]?: string;
  [LandingPageFooterFeatureV2Fields.COLUMN_DESCRIPTION]?: string;
  [LandingPageFooterFeatureV2Fields.COLUMN_ITEMS]?: LandingPageFooterFeatureItemType[];
};

export class LandingPageFooterFeatureV2 extends AbstractEntity<LandingPageFooterFeatureV2Type> {
  readonly #title?: string;
  readonly #description?: string;
  readonly #items?: LandingPageFooterFeatureItem[];

  constructor(landingPageFooterFeatureInput: LandingPageFooterFeatureV2Type) {
    super(landingPageFooterFeatureInput);
    this.#title =
      landingPageFooterFeatureInput[
        LandingPageFooterFeatureV2Fields.COLUMN_TITLE
      ];
    this.#description =
      landingPageFooterFeatureInput[
        LandingPageFooterFeatureV2Fields.COLUMN_DESCRIPTION
      ];
    this.#items = landingPageFooterFeatureInput[
      LandingPageFooterFeatureV2Fields.COLUMN_ITEMS
    ]?.map((item) => new LandingPageFooterFeatureItem(item));
  }

  get title(): string | undefined {
    return this.#title;
  }

  get description(): string | undefined {
    return this.#description;
  }

  get items(): LandingPageFooterFeatureItem[] | undefined {
    return this.#items;
  }

  public toJSON(): LandingPageFooterFeatureV2Type {
    return {
      [LandingPageFooterFeatureV2Fields.COLUMN_TITLE]: this.title,
      [LandingPageFooterFeatureV2Fields.COLUMN_DESCRIPTION]: this.description,
      [LandingPageFooterFeatureV2Fields.COLUMN_ITEMS]: this.items?.map((item) =>
        item.toJSON(),
      ),
    };
  }
}
