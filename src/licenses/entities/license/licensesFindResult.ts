import {
  AbstractLicenses,
  LicensesData,
  LicensesFields,
} from './abstractLicenses';

/**
 * License result fields.
 */
export enum LicensesFindResultFields {
  COLUMN_HIGHLIGHT = 'highlight',
}

/**
 * Highlight response object.
 */
export type Highlight = {
  [key in LicensesFields]?: string[];
};

/**
 * License result data. Combination of {@link LicensesData} and extra result specific fields.
 */
export type LicensesFindResultData = LicensesData & {
  [LicensesFindResultFields.COLUMN_HIGHLIGHT]?: Highlight;
};

export class LicensesFindResult extends AbstractLicenses {
  readonly #highlight: Highlight;

  /**
   * LicensesFindResult constructor.
   *
   * @param data - License find result data from the response.
   */
  public constructor(data: LicensesFindResultData) {
    super(data);
    this.VALIDATION_RULES = {
      ...super.VALIDATION_RULES,
      [LicensesFindResultFields.COLUMN_HIGHLIGHT]: 'object',
    };

    this.#highlight = data[LicensesFindResultFields.COLUMN_HIGHLIGHT] ?? {};
  }

  public get highlight(): Highlight {
    return this.#highlight;
  }

  /**
   * Plain JSON object representation of the License result entity.
   * @returns {@link LicenseFindResultData}
   */
  public toJSON(): LicensesFindResultData {
    return {
      ...super.toJSON(),
      ...{
        [LicensesFindResultFields.COLUMN_HIGHLIGHT]: this.highlight,
      },
    };
  }
}
