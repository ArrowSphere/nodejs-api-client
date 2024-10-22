import { CountryType } from './country';

export type VendorsType = {
  id?: number;
  identifier?: string;
  licenseUrl?: string;
  location?: VendorLocationType;
  logoLarge?: string;
  logoSmall?: string;
  logoStandard?: string;
  name?: string;
  url?: string;
};

export type VendorLocationType = {
  name?: string;
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: CountryType;
};
