import { AbstractEntity } from '../../../abstractEntity';
import { Rules } from 'validatorjs';
import {
  DataKeywords,
  FiltersParameters,
  SortParameters,
} from '../../licensesClient';

export enum ConfigFields {
  COLUMN_NAME = 'name',
  COLUMN_SCOPE = 'scope',
  COLUMN_STATE = 'state',
}

export type ConfigData = {
  [ConfigFields.COLUMN_NAME]: string | undefined;
  [ConfigFields.COLUMN_SCOPE]: string | undefined;
  [ConfigFields.COLUMN_STATE]: string | undefined;
};

export type ConfigDataKeywords = {
  [ConfigFields.COLUMN_NAME]?: DataKeywords;
  [ConfigFields.COLUMN_SCOPE]?: DataKeywords;
  [ConfigFields.COLUMN_STATE]?: DataKeywords;
};

export type ConfigDataSortParameters = {
  [ConfigFields.COLUMN_NAME]?: SortParameters;
  [ConfigFields.COLUMN_SCOPE]?: SortParameters;
  [ConfigFields.COLUMN_STATE]?: SortParameters;
};

export type ConfigDataFiltersParameters = {
  [ConfigFields.COLUMN_NAME]?: FiltersParameters;
  [ConfigFields.COLUMN_SCOPE]?: FiltersParameters;
  [ConfigFields.COLUMN_STATE]?: FiltersParameters;
};

export abstract class AbstractConfig extends AbstractEntity<ConfigData> {
  protected VALIDATION_RULES: Rules = {
    [ConfigFields.COLUMN_NAME]: 'required|string',
    [ConfigFields.COLUMN_SCOPE]: 'required|string',
    [ConfigFields.COLUMN_STATE]: 'required|string',
  };

  readonly #name: string | undefined;
  readonly #scope: string | undefined;
  readonly #state: string | undefined;

  protected constructor(data: ConfigData) {
    super(data);

    this.#name = data[ConfigFields.COLUMN_NAME];
    this.#scope = data[ConfigFields.COLUMN_SCOPE];
    this.#state = data[ConfigFields.COLUMN_STATE];
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

  public toJSON(): ConfigData {
    return {
      [ConfigFields.COLUMN_NAME]: this.name,
      [ConfigFields.COLUMN_SCOPE]: this.scope,
      [ConfigFields.COLUMN_STATE]: this.state,
    };
  }
}
