export type SoftwareProductType = {
  id?: string;
  companyId?: number;
  vendorName?: string;
  programName?: string;
  subscriptionId?: number;
  productName?: string;
  versionName?: string;
  sku?: string;
  tierMin?: number;
  tierMax?: number;
  sellPrice?: number;
  price?: number;
  unitSymbol?: string;
  unitIfUsernoshow?: string;
  priority?: number;
};
