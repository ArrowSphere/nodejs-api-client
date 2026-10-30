export type CheckEligibilityItemPayload = {
  pricebandArrowsphereSku: string;
  quantity: number;
  vendorProgram: string;
};

export type CheckEligibilityPayload = {
  customerReference: string;
  items: CheckEligibilityItemPayload[];
  resellerReference: string;
};
