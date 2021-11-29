import { AbstractEntity } from '../../../abstractEntity';
import {
  DataKeywords,
  FiltersParameters,
  SortParameters,
} from '../../licensesClient';

export enum WarningFields {
  COLUMN_KEY = 'key',
  COLUMN_MESSAGE = 'message',
}

export type WarningData = {
  [WarningFields.COLUMN_KEY]: string | undefined;
  [WarningFields.COLUMN_MESSAGE]: string | undefined;
};

export type WarningDataKeywords = {
  [WarningFields.COLUMN_KEY]?: DataKeywords;
  [WarningFields.COLUMN_MESSAGE]?: DataKeywords;
};

export type WarningDataSortParameters = {
  [WarningFields.COLUMN_KEY]?: SortParameters;
  [WarningFields.COLUMN_MESSAGE]?: SortParameters;
};

export type WarningDataFiltersParameters = {
  [WarningFields.COLUMN_KEY]?: FiltersParameters;
  [WarningFields.COLUMN_MESSAGE]?: FiltersParameters;
};

export abstract class AbstractWarning extends AbstractEntity<WarningData> {
  protected VALIDATION_RULES = {
    [WarningFields.COLUMN_KEY]: 'required|string',
    [WarningFields.COLUMN_MESSAGE]: 'required|string',
  };

  readonly #key: string | undefined;
  readonly #message: string | undefined;

  protected constructor(data: WarningData) {
    super(data);

    this.#key = data[WarningFields.COLUMN_KEY];
    this.#message = data[WarningFields.COLUMN_MESSAGE];
  }

  public get key(): string | undefined {
    return this.#key;
  }

  public get message(): string | undefined {
    return this.#message;
  }

  public toJSON(): WarningData {
    return {
      [WarningFields.COLUMN_KEY]: this.key,
      [WarningFields.COLUMN_MESSAGE]: this.message,
    };
  }
}
