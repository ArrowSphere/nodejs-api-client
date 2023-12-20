import type { Except } from 'type-fest';

export enum ActionTypes {
  SET_RATE = 'setRate',
  AUTO_RENEW = 'autoRenew',
}

export enum AutoRenewStatuses {
  OFF = 'off',
  ON = 'on',
}

export enum SpecialPriceRateTypes {
  DISCOUNT = 'discount',
  UPLIFT = 'uplift',
}

export enum SpecialRateEffectiveApplicationDate {
  APPLY_IMMEDIATELY = 'apply immediately',
  APPLY_ON_NEXT_BILLING_PERIOD = 'apply on next billing period',
}

export enum BulkBodyFields {
  ACTION_TYPE = 'actionType',
  AUTO_RENEW_STATUS = 'autoRenewStatus',
  LICENSES = 'licenses',
  SPECIAL_PRICE_RATE_TYPE = 'specialPriceRateType',
  SPECIAL_PRICE_RATE_VALUE = 'specialPriceRateValue',
  SPECIAL_RATE_EFFECTIVE_APPLICATION_DATE = 'specialRateEffectiveApplicationDate',
}

export type BulkBodyArgument = {
  [BulkBodyFields.ACTION_TYPE]: ActionTypes;
  [BulkBodyFields.LICENSES]: string[];
  [BulkBodyFields.AUTO_RENEW_STATUS]?: AutoRenewStatuses;
  [BulkBodyFields.SPECIAL_PRICE_RATE_TYPE]?: SpecialPriceRateTypes;
  [BulkBodyFields.SPECIAL_PRICE_RATE_VALUE]?: string;
  [BulkBodyFields.SPECIAL_RATE_EFFECTIVE_APPLICATION_DATE]?: SpecialRateEffectiveApplicationDate;
};

export type BulkAutoRenewBody = Except<
  BulkBodyArgument,
  BulkBodyFields.SPECIAL_PRICE_RATE_TYPE &
    BulkBodyFields.SPECIAL_PRICE_RATE_VALUE &
    BulkBodyFields.SPECIAL_RATE_EFFECTIVE_APPLICATION_DATE
>;

export type BulkSetRateBody = Except<
  BulkBodyArgument,
  BulkBodyFields.AUTO_RENEW_STATUS
>;
