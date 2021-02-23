import { AbstractLicense, LicenseData } from './abstractLicense'

export enum LicenseFindResultFields {
  COLUMN_HIGHLIGHT = 'highlight',
}

export type LicenseFindResultData = LicenseData & {
  [LicenseFindResultFields.COLUMN_HIGHLIGHT]?: Record<string, unknown>
}

export class LicenseFindResult extends AbstractLicense {
  private readonly highlight: Record<string, unknown>

  /**
   * OfferFindResult constructor.
   *
   * @param data -
   */
  public constructor(data: LicenseFindResultData) {
    super(data)
    this.VALIDATION_RULES = {
      ...super.VALIDATION_RULES,
      [LicenseFindResultFields.COLUMN_HIGHLIGHT]: 'object',
    }

    this.highlight = data[LicenseFindResultFields.COLUMN_HIGHLIGHT] ?? {}
  }

  public getHighlight(): Record<string, unknown> {
    return this.highlight
  }

  public toJSON(): LicenseFindResultData {
    return {
      ...super.toJSON(),
      ...{
        [LicenseFindResultFields.COLUMN_HIGHLIGHT]: this.getHighlight(),
      },
    }
  }
}
