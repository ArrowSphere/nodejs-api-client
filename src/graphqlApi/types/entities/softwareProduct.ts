import { CurrencyType } from './currency';
import { ProgramLevelType } from './program';
import { WorkgroupType } from './workgroup';

export type SoftwareProductType = {
  id?: string;
  arrowSku?: string;
  sku?: string;
  name?: string;
  version?: string;
  versionShortName?: string;
  buyPrice?: number;
  sellPrice?: number;
  dateStart?: string;
  dateEnd?: string;
  tierMin?: number;
  tierMax?: number;
  workgroup?: WorkgroupType;
  buyCurrency?: CurrencyType;
  sellCurrency?: CurrencyType;
  programLevel?: ProgramLevelType;
};
