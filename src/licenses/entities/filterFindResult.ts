import { AbstractEntity } from '../../abstractEntity'
import { LicenseFields } from './abstractLicense'

/**
 * Filter data values
 */
export type FilterFindResultDataValues = {
  [field in LicenseFields]?: unknown
}

/**
 * Filter data
 */
export type FilterFindResultData = {
  [FilterFindFields.COLUMN_NAME]: string
  [FilterFindFields.COLUMN_VALUES]: FilterFindResultDataValues
}

/**
 * Filter data fields
 */
export enum FilterFindFields {
  COLUMN_NAME = 'name',
  COLUMN_VALUES = 'values',
}

/**
 * Represents the result of the find response's filters part.
 */
export class FilterFindResult extends AbstractEntity<FilterFindResultData> {
  private readonly name: string
  private readonly values: FilterFindResultDataValues

  protected VALIDATION_RULES = {
    [FilterFindFields.COLUMN_NAME]: 'present',
    [FilterFindFields.COLUMN_VALUES]: 'present|array',
    [`${FilterFindFields.COLUMN_VALUES}.*.value`]: 'present',
    [`${FilterFindFields.COLUMN_VALUES}.*.count`]: 'required|numeric',
  }

  /**
   * FilterFindResult constructor.
   *
   * @param data - Filter result data
   */
  public constructor(data: FilterFindResultData) {
    super(data)

    this.name = data['name']
    this.values = data['values']
  }

  public getName(): string {
    return this.name
  }

  public getValues(): FilterFindResultDataValues {
    return this.values
  }

  /**
   * Plain JSON object representation of the filter entity.
   * @returns {@link FilterFindResultData}
   */
  public toJSON(): FilterFindResultData {
    return {
      [FilterFindFields.COLUMN_NAME]: this.getName(),
      [FilterFindFields.COLUMN_VALUES]: this.getValues(),
    }
  }
}
