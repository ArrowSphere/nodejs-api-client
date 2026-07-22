import { AbstractEntity } from '../../../../../abstractEntity';
import {
  ConversionRules,
  ConversionRulesType,
} from './preferredCurrency/conversionRules';
import {
  PreferredCurrencyValues,
  PreferredCurrencyValuesType,
} from './preferredCurrency/preferredCurrencyValues';

export enum PreferredCurrencyFields {
  COLUMN_CONVERSION_RULES = 'conversionRules',
  COLUMN_VALUES = 'values',
}

export type PreferredCurrencyType = {
  [PreferredCurrencyFields.COLUMN_CONVERSION_RULES]: ConversionRulesType;
  [PreferredCurrencyFields.COLUMN_VALUES]: PreferredCurrencyValuesType;
};

export class PreferredCurrency extends AbstractEntity<PreferredCurrencyType> {
  readonly #conversionRules: ConversionRules;
  readonly #values: PreferredCurrencyValues;

  public constructor(input: PreferredCurrencyType) {
    super(input);
    this.#conversionRules = new ConversionRules(
      input[PreferredCurrencyFields.COLUMN_CONVERSION_RULES],
    );
    this.#values = new PreferredCurrencyValues(
      input[PreferredCurrencyFields.COLUMN_VALUES],
    );
  }

  get conversionRules(): ConversionRules {
    return this.#conversionRules;
  }
  get values(): PreferredCurrencyValues {
    return this.#values;
  }

  public toJSON(): PreferredCurrencyType {
    return {
      [PreferredCurrencyFields.COLUMN_CONVERSION_RULES]: this.conversionRules.toJSON(),
      [PreferredCurrencyFields.COLUMN_VALUES]: this.values.toJSON(),
    };
  }
}
