import {
  DataKeywords,
  FiltersParameters,
  SortParameters,
} from '../../licensesClient';
import { AbstractEntity } from '../../../abstractEntity';
import { Rules } from 'validatorjs';

export enum ConfigFindResultFields {
  COLUMN_NAME = 'name',
  COLUMN_SCOPE = 'scope',
  COLUMN_STATE = 'state',
}

export type ConfigFindResultData = {
  [ConfigFindResultFields.COLUMN_NAME]: string | undefined;
  [ConfigFindResultFields.COLUMN_SCOPE]: string | undefined;
  [ConfigFindResultFields.COLUMN_STATE]: string | undefined;
};

export type ConfigFindResultDataKeywords = {
  [ConfigFindResultFields.COLUMN_NAME]?: DataKeywords;
  [ConfigFindResultFields.COLUMN_SCOPE]?: DataKeywords;
  [ConfigFindResultFields.COLUMN_STATE]?: DataKeywords;
};

export type ConfigFindResultDataSortParameters = {
  [ConfigFindResultFields.COLUMN_NAME]?: SortParameters;
  [ConfigFindResultFields.COLUMN_SCOPE]?: SortParameters;
  [ConfigFindResultFields.COLUMN_STATE]?: SortParameters;
};

export type ConfigFindResultDataFiltersParameters = {
  [ConfigFindResultFields.COLUMN_NAME]?: FiltersParameters;
  [ConfigFindResultFields.COLUMN_SCOPE]?: FiltersParameters;
  [ConfigFindResultFields.COLUMN_STATE]?: FiltersParameters;
};

export class ConfigFindResult extends AbstractEntity<ConfigFindResultData> {
  protected VALIDATION_RULES: Rules = {
    [ConfigFindResultFields.COLUMN_NAME]: 'required|string',
    [ConfigFindResultFields.COLUMN_SCOPE]: 'required|string',
    [ConfigFindResultFields.COLUMN_STATE]: 'required|string',
  };

  readonly #name: string | undefined;
  readonly #scope: string | undefined;
  readonly #state: string | undefined;

  public constructor(data: ConfigFindResultData) {
    super(data);

    this.#name = data[ConfigFindResultFields.COLUMN_NAME];
    this.#scope = data[ConfigFindResultFields.COLUMN_SCOPE];
    this.#state = data[ConfigFindResultFields.COLUMN_STATE];
  }

  public get name(): string | undefined {
    return this.#name;
  }

  public get scope(): string | undefined {
    return this.#scope;
  }

  public get state(): string | undefined {
    return this.#state;
  }

  public toJSON(): ConfigFindResultData {
    return {
      [ConfigFindResultFields.COLUMN_NAME]: this.name,
      [ConfigFindResultFields.COLUMN_SCOPE]: this.scope,
      [ConfigFindResultFields.COLUMN_STATE]: this.state,
    };
  }
}
