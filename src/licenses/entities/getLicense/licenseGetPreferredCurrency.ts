import { AbstractEntity } from '../../../abstractEntity';
import {
  LicenseGetPreferredCurrencyValues,
  LicenseGetPreferredCurrencyValuesType,
} from './preferredCurrency/licenseGetPreferredCurrencyValues';
import {
  ConversionRules,
  ConversionRulesType,
} from '../../../shared/preferredCurrency/conversionRules';

export enum LicenseGetPreferredCurrencyFields {
  COLUMN_CONVERSION_RULES = 'conversionRules',
  COLUMN_VALUES = 'values',
}

export type LicenseGetPreferredCurrencyType = {
  [LicenseGetPreferredCurrencyFields.COLUMN_CONVERSION_RULES]: ConversionRulesType;
  [LicenseGetPreferredCurrencyFields.COLUMN_VALUES]: LicenseGetPreferredCurrencyValuesType;
};

export class LicenseGetPreferredCurrency extends AbstractEntity<LicenseGetPreferredCurrencyType> {
  readonly #conversionRules: ConversionRules;
  readonly #values: LicenseGetPreferredCurrencyValues;

  public constructor(input: LicenseGetPreferredCurrencyType) {
    super(input);
    this.#conversionRules = new ConversionRules(
      input[LicenseGetPreferredCurrencyFields.COLUMN_CONVERSION_RULES],
    );
    this.#values = new LicenseGetPreferredCurrencyValues(
      input[LicenseGetPreferredCurrencyFields.COLUMN_VALUES],
    );
  }

  get conversionRules(): ConversionRules {
    return this.#conversionRules;
  }
  get values(): LicenseGetPreferredCurrencyValues {
    return this.#values;
  }

  public toJSON(): LicenseGetPreferredCurrencyType {
    return {
      [LicenseGetPreferredCurrencyFields.COLUMN_CONVERSION_RULES]: this.conversionRules.toJSON(),
      [LicenseGetPreferredCurrencyFields.COLUMN_VALUES]: this.values.toJSON(),
    };
  }
}
