export type GetLateRenewableLicenseData = {
  vendorSku: string;
  quantity: number;
  licenseRef?: string;
  offerName?: string;
};

export type GetLateRenewableLicensesData = {
  lateRenewableLicenses: GetLateRenewableLicenseData[];
};
