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
  id?: number;
  vendorId?: number;
  name?: string;
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  countryId?: number;
  country?: CountryType;
  phoneNumber?: string;
  footprint?: string;
};
