import { CountryType } from './country';
import { CurrencyType } from './currency';

export type GraphqlApiTaxType = {
  id?: number;
  name?: string;
  rate?: number;
  amount?: number;
  stateReg?: string;
  since?: string;
  until?: string;
  country?: CountryType;
  currency?: CurrencyType;
};
