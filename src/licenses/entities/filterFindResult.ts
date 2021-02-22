import { AbstractEntity } from '../../abstractEntity'

export type FilterFindResultData = {
  [FilterFindFields.COLUMN_NAME]: string
  [FilterFindFields.COLUMN_VALUES]: Record<string, string>
}

export enum FilterFindFields {
  COLUMN_NAME = 'name',
  COLUMN_VALUES = 'values',
}

export class FilterFindResult extends AbstractEntity<FilterFindResultData> {
  private readonly name: string
  private readonly values: Record<string, string>

  protected VALIDATION_RULES = {
    [FilterFindFields.COLUMN_NAME]: 'present',
    [FilterFindFields.COLUMN_VALUES]: 'present|array',
    [`${FilterFindFields.COLUMN_VALUES}.*.value`]: 'present',
    [`${FilterFindFields.COLUMN_VALUES}.*.count`]: 'required|numeric',
  }

  /**
   * FilterFindResult constructor.
   *
   * @param data -
   */
  public constructor(data: FilterFindResultData) {
    super(data)

    this.name = data['name']
    this.values = data['values']
  }

  public getName(): string {
    return this.name
  }

  public getValues(): Record<string, string> {
    return this.values
  }

  public toJSON(): FilterFindResultData {
    return {
      [FilterFindFields.COLUMN_NAME]: this.getName(),
      [FilterFindFields.COLUMN_VALUES]: this.getValues(),
    }
  }
}
