import { AbstractEntity } from '../../../abstractEntity';
import {
  LicenseConversionRules,
  LicenseConversionRulesType,
} from './licensePreferredCurrency/licenseConversionRules';
import {
  LicensePreferredCurrencyValues,
  LicensePreferredCurrencyValuesType,
} from './licensePreferredCurrency/licensePreferredCurrencyValues';

export enum LicensePreferredCurrencyFields {
  COLUMN_CONVERSION_RULES = 'conversionRules',
  COLUMN_VALUES = 'values',
}

export type LicensePreferredCurrencyType = {
  [LicensePreferredCurrencyFields.COLUMN_CONVERSION_RULES]: LicenseConversionRulesType;
  [LicensePreferredCurrencyFields.COLUMN_VALUES]: LicensePreferredCurrencyValuesType;
};

export class LicensePreferredCurrency extends AbstractEntity<LicensePreferredCurrencyType> {
  readonly #conversionRules: LicenseConversionRules;
  readonly #values: LicensePreferredCurrencyValues;

  public constructor(input: LicensePreferredCurrencyType) {
    super(input);
    this.#conversionRules = new LicenseConversionRules(
      input[LicensePreferredCurrencyFields.COLUMN_CONVERSION_RULES],
    );
    this.#values = new LicensePreferredCurrencyValues(
      input[LicensePreferredCurrencyFields.COLUMN_VALUES],
    );
  }

  get conversionRules(): LicenseConversionRules {
    return this.#conversionRules;
  }
  get values(): LicensePreferredCurrencyValues {
    return this.#values;
  }

  public toJSON(): LicensePreferredCurrencyType {
    return {
      [LicensePreferredCurrencyFields.COLUMN_CONVERSION_RULES]: this.conversionRules.toJSON(),
      [LicensePreferredCurrencyFields.COLUMN_VALUES]: this.values.toJSON(),
    };
  }
}
