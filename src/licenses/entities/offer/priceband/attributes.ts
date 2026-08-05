import {
  DataKeywords,
  FiltersParameters,
  SortParameters,
} from '../../../licensesClient';
import { AbstractEntity } from '../../../../abstractEntity';

export enum AttributesFields {
  COLUMN_NAME = 'name',
  COLUMN_VALUE = 'value',
}

export type AttributesData = {
  [AttributesFields.COLUMN_NAME]: string;
  [AttributesFields.COLUMN_VALUE]?: string | null;
};

export type AttributesDataKeywords = {
  [AttributesFields.COLUMN_NAME]?: DataKeywords;
  [AttributesFields.COLUMN_VALUE]?: DataKeywords;
};

export type AttributesDataSortParameters = {
  [AttributesFields.COLUMN_NAME]?: SortParameters;
  [AttributesFields.COLUMN_VALUE]?: SortParameters;
};

export type AttributesDataFiltersParameters = {
  [AttributesFields.COLUMN_NAME]?: FiltersParameters;
  [AttributesFields.COLUMN_VALUE]?: FiltersParameters;
};

export class Attributes extends AbstractEntity<AttributesData> {
  protected VALIDATION_RULES = {
    [AttributesFields.COLUMN_NAME]: 'required|string',
    [AttributesFields.COLUMN_VALUE]: 'string',
  };

  readonly #name: string;
  readonly #value: string | null | undefined;

  public constructor(data: AttributesData) {
    super(data);
    this.#name = data[AttributesFields.COLUMN_NAME];
    this.#value = data[AttributesFields.COLUMN_VALUE];
  }

  public get name(): string {
    return this.#name;
  }

  public get value(): string | null | undefined {
    return this.#value;
  }

  public toJSON(): AttributesData {
    return {
      [AttributesFields.COLUMN_NAME]: this.name,
      [AttributesFields.COLUMN_VALUE]: this.value,
    };
  }
}
