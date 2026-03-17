export type ExecuteLateRenewLicense = {
  numberOfSeats: number;
  licenseRef: string;
};

export type ExecuteLateRenewPayload = {
  licenses: ExecuteLateRenewLicense[];
  billingComments: Record<string, string>;
};
