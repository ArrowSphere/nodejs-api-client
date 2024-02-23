export type LicenseBudgetType = {
  id?: number;
  licenseId?: number;
  notifications?: LicenseBudgetNotificationType[];
  threshold?: number;
  type?: string;
};

export type LicenseBudgetNotificationType = {
  id?: number;
  name?: string;
};
