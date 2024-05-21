import { AbstractEntity } from '../../../abstractEntity';
import {
  CouponCodeHistoryResult,
  CouponCodeHistoryResultData,
} from './couponCodeHistoryResult';

export enum LicenceCouponCodeHistoryResultFields {
  COLUMN_COUPON_CODES = 'couponCodes',
}

export type LicenceCouponCodeHistoryResultData = {
  [LicenceCouponCodeHistoryResultFields.COLUMN_COUPON_CODES]: CouponCodeHistoryResultData[];
};

export class LicenceCouponCodeHistoryResult extends AbstractEntity<LicenceCouponCodeHistoryResultData> {
  readonly #couponCodes: CouponCodeHistoryResult[];

  public constructor(
    getLicenseHistoryResultDataInput: LicenceCouponCodeHistoryResultData,
  ) {
    super(getLicenseHistoryResultDataInput);

    this.#couponCodes = getLicenseHistoryResultDataInput[
      LicenceCouponCodeHistoryResultFields.COLUMN_COUPON_CODES
    ].map(
      (result: CouponCodeHistoryResultData) =>
        new CouponCodeHistoryResult(result),
    );
  }

  get couponCodes(): CouponCodeHistoryResult[] {
    return this.#couponCodes;
  }

  public toJSON(): LicenceCouponCodeHistoryResultData {
    return {
      [LicenceCouponCodeHistoryResultFields.COLUMN_COUPON_CODES]: this.couponCodes.map(
        (result: CouponCodeHistoryResult) => result.toJSON(),
      ),
    };
  }
}
