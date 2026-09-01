export type GetLicensePricingRateParameters = {
  continuationToken?: string;
  perPage?: number;
};

export type LicensePricingRateItem = {
  rateType: string;
  value: string;
  changeRequestDate: string;
  effectiveDate: string;
  source: string;
  tier: number;
};

export type LicensePricingRatePagination = {
  perPage: number;
  continuationToken: string | null;
};

export type GetLicensePricingRateResponse = {
  status: number;
  data: LicensePricingRateItem[];
  pagination: LicensePricingRatePagination;
};
