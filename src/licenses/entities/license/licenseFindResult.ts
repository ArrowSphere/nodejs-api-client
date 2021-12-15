import { AbstractLicense, LicenseData, LicenseFields } from './abstractLicense';

/**
 * License result fields.
 */
export enum LicenseFindResultFields {
  COLUMN_HIGHLIGHT = 'highlight',
}

/**
 * Highlight response object.
 */
export type Highlight = {
  [key in LicenseFields]?: string[];
};

/**
 * License result data. Combination of {@link LicenseData} and extra result specific fields.
 */
export type LicenseFindResultData = LicenseData & {
  [LicenseFindResultFields.COLUMN_HIGHLIGHT]?: Highlight;
};

export class LicenseFindResult extends AbstractLicense {
  readonly #highlight: Highlight;

  /**
   * LicenseFindResult constructor.
   *
   * @param data - License find result data from the response.
   */
  public constructor(data: LicenseFindResultData) {
    super(data);
    this.VALIDATION_RULES = {
      ...super.VALIDATION_RULES,
      [LicenseFindResultFields.COLUMN_HIGHLIGHT]: 'object',
    };

    this.#highlight = data[LicenseFindResultFields.COLUMN_HIGHLIGHT] ?? {};
  }

  public get highlight(): Highlight {
    return this.#highlight;
  }

  /**
   * Plain JSON object representation of the License result entity.
   * @returns {@link LicenseFindResultData}
   */
  public toJSON(): LicenseFindResultData {
    return {
      ...super.toJSON(),
      ...{
        [LicenseFindResultFields.COLUMN_HIGHLIGHT]: this.highlight,
      },
    };
  }
}
