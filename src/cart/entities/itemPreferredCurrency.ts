import { AbstractEntity } from '../../abstractEntity';
import {
  ItemPreferredCurrencyValues,
  ItemPreferredCurrencyValuesType,
} from './preferredCurrency/itemPreferredCurrencyValues';
import {
  ConversionRules,
  ConversionRulesType,
} from '../../shared/preferredCurrency/conversionRules';

export enum ItemPreferredCurrencyFields {
  CONVERSION_RULES = 'conversionRules',
  VALUES = 'values',
}

export type ItemPreferredCurrencyType = {
  [ItemPreferredCurrencyFields.CONVERSION_RULES]: ConversionRulesType;
  [ItemPreferredCurrencyFields.VALUES]: ItemPreferredCurrencyValuesType;
};

export class ItemPreferredCurrency extends AbstractEntity<ItemPreferredCurrencyType> {
  readonly #conversionRules: ConversionRules;
  readonly #values: ItemPreferredCurrencyValues;

  public constructor(input: ItemPreferredCurrencyType) {
    super(input);

    this.#conversionRules = new ConversionRules(
      input[ItemPreferredCurrencyFields.CONVERSION_RULES],
    );
    this.#values = new ItemPreferredCurrencyValues(
      input[ItemPreferredCurrencyFields.VALUES],
    );
  }

  get conversionRules(): ConversionRules {
    return this.#conversionRules;
  }

  get values(): ItemPreferredCurrencyValues {
    return this.#values;
  }

  public toJSON(): ItemPreferredCurrencyType {
    return {
      [ItemPreferredCurrencyFields.CONVERSION_RULES]: this.conversionRules.toJSON(),
      [ItemPreferredCurrencyFields.VALUES]: this.values.toJSON(),
    };
  }
}
