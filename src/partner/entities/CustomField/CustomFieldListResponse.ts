import { AbstractEntity } from '../../../abstractEntity';
import { CustomFieldResponse, CustomFieldType } from './CustomFieldResponse';

export type CustomFieldListType = CustomFieldType[];

export class CustomFieldListResponse extends AbstractEntity<CustomFieldListType> {
  readonly #customFieldList: CustomFieldResponse[];

  public constructor(dataInput: CustomFieldListType) {
    super(dataInput);

    this.#customFieldList =
      dataInput?.map(
        (result: CustomFieldType) => new CustomFieldResponse(result),
      ) ?? [];
  }

  get customFieldList(): CustomFieldResponse[] {
    return this.#customFieldList;
  }

  public toJSON(): CustomFieldListType {
    return this.customFieldList.map((result: CustomFieldResponse) =>
      result.toJSON(),
    );
  }
}
