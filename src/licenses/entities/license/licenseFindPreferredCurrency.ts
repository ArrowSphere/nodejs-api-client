import { AbstractEntity } from '../../../abstractEntity';
import {
  LicenseFindPreferredCurrencyValues,
  LicenseFindPreferredCurrencyValuesType,
} from './preferredCurrency/licenseFindPreferredCurrencyValues';
import {
  ConversionRules,
  ConversionRulesType,
} from '../../../shared/preferredCurrency/conversionRules';

export enum LicenseFindPreferredCurrencyFields {
  COLUMN_CONVERSION_RULES = 'conversionRules',
  COLUMN_VALUES = 'values',
}

export type LicenseFindPreferredCurrencyType = {
  [LicenseFindPreferredCurrencyFields.COLUMN_CONVERSION_RULES]: ConversionRulesType;
  [LicenseFindPreferredCurrencyFields.COLUMN_VALUES]: LicenseFindPreferredCurrencyValuesType;
};

export class LicenseFindPreferredCurrency extends AbstractEntity<LicenseFindPreferredCurrencyType> {
  readonly #conversionRules: ConversionRules;
  readonly #values: LicenseFindPreferredCurrencyValues;

  public constructor(input: LicenseFindPreferredCurrencyType) {
    super(input);
    this.#conversionRules = new ConversionRules(
      input[LicenseFindPreferredCurrencyFields.COLUMN_CONVERSION_RULES],
    );
    this.#values = new LicenseFindPreferredCurrencyValues(
      input[LicenseFindPreferredCurrencyFields.COLUMN_VALUES],
    );
  }

  get conversionRules(): ConversionRules {
    return this.#conversionRules;
  }
  get values(): LicenseFindPreferredCurrencyValues {
    return this.#values;
  }

  public toJSON(): LicenseFindPreferredCurrencyType {
    return {
      [LicenseFindPreferredCurrencyFields.COLUMN_CONVERSION_RULES]: this.conversionRules.toJSON(),
      [LicenseFindPreferredCurrencyFields.COLUMN_VALUES]: this.values.toJSON(),
    };
  }
}
