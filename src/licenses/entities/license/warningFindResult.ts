import { AbstractEntity } from '../../../abstractEntity';
import {
  DataKeywords,
  FiltersParameters,
  SortParameters,
} from '../../licensesClient';

export enum WarningFindResultFields {
  COLUMN_KEY = 'key',
  COLUMN_MESSAGE = 'message',
}

export type WarningFindResultData = {
  [WarningFindResultFields.COLUMN_KEY]: string | undefined;
  [WarningFindResultFields.COLUMN_MESSAGE]: string | undefined;
};

export type WarningFindResultDataKeywords = {
  [WarningFindResultFields.COLUMN_KEY]?: DataKeywords;
  [WarningFindResultFields.COLUMN_MESSAGE]?: DataKeywords;
};

export type WarningFindResultDataSortParameters = {
  [WarningFindResultFields.COLUMN_KEY]?: SortParameters;
  [WarningFindResultFields.COLUMN_MESSAGE]?: SortParameters;
};

export type WarningFindResultDataFiltersParameters = {
  [WarningFindResultFields.COLUMN_KEY]?: FiltersParameters;
  [WarningFindResultFields.COLUMN_MESSAGE]?: FiltersParameters;
};

export class WarningFindResult extends AbstractEntity<WarningFindResultData> {
  protected VALIDATION_RULES = {
    [WarningFindResultFields.COLUMN_KEY]: 'required|string',
    [WarningFindResultFields.COLUMN_MESSAGE]: 'required|string',
  };

  readonly #key: string | undefined;
  readonly #message: string | undefined;

  public constructor(data: WarningFindResultData) {
    super(data);

    this.#key = data[WarningFindResultFields.COLUMN_KEY];
    this.#message = data[WarningFindResultFields.COLUMN_MESSAGE];
  }

  public get key(): string | undefined {
    return this.#key;
  }

  public get message(): string | undefined {
    return this.#message;
  }

  public toJSON(): WarningFindResultData {
    return {
      [WarningFindResultFields.COLUMN_KEY]: this.key,
      [WarningFindResultFields.COLUMN_MESSAGE]: this.message,
    };
  }
}
