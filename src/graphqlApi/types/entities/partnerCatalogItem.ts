import { CurrencyType } from './currency';
import { PartnerType } from './company';
import { SoftwareProductType } from './softwareProduct';
import { SubscriptionType } from './subscription';

export type PartnerCatalogItemType = {
  id?: number;
  sid?: number;
  sellPrice?: number;
  price?: number;
  partner?: PartnerType;
  currency?: CurrencyType;
  softwareProduct?: SoftwareProductType;
  subscription?: SubscriptionType;
};
