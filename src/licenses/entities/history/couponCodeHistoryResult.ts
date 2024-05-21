import { AbstractEntity } from '../../../abstractEntity';

export enum CouponCodeHistoryResultFields {
  COLUMN_CODE = 'code',
  COLUMN_UPDATED_AT = 'updated_at',
}

export type CouponCodeHistoryResultData = {
  [CouponCodeHistoryResultFields.COLUMN_CODE]: string;
  [CouponCodeHistoryResultFields.COLUMN_UPDATED_AT]: string;
};

export class CouponCodeHistoryResult extends AbstractEntity<CouponCodeHistoryResultData> {
  readonly #code: string;
  readonly #updated_at: string;

  public constructor(dataInput: CouponCodeHistoryResultData) {
    super(dataInput);

    this.#code = dataInput[CouponCodeHistoryResultFields.COLUMN_CODE];
    this.#updated_at =
      dataInput[CouponCodeHistoryResultFields.COLUMN_UPDATED_AT];
  }

  public get code(): string {
    return this.#code;
  }

  public get updatedAt(): string {
    return this.#updated_at;
  }

  public toJSON(): CouponCodeHistoryResultData {
    return {
      [CouponCodeHistoryResultFields.COLUMN_CODE]: this.code,
      [CouponCodeHistoryResultFields.COLUMN_UPDATED_AT]: this.updatedAt,
    };
  }
}
