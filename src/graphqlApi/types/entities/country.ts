export type ContinentType = {
  id?: number;
  name?: string;
};

export type CountryType = {
  code2?: string;
  code3?: string;
  continent?: ContinentType;
  id?: number;
  lat?: number;
  lng?: number;
  name?: string;
  phoneCode?: string;
};
