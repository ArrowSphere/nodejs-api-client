import { ArrowCompanyType } from './company';
import { CurrencyType } from './currency';

export type WorkgroupType = {
  arrowCompany?: ArrowCompanyType;
  code?: string;
  id?: number;
  name?: string;
  currency?: CurrencyType;
};
