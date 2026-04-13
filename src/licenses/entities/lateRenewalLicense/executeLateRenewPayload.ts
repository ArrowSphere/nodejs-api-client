export type ExecuteLateRenewLicense = {
  numberOfSeats: number;
  licenseRef: string;
};

export type CustomField = {
  label: string;
  value: string;
};

export type ExecuteLateRenewPayload = {
  licenses: ExecuteLateRenewLicense[];
  billingComments: Record<string, string>;
  customFields: CustomField[];
};
