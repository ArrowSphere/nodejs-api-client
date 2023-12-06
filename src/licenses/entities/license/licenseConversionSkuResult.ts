import { AbstractEntity } from '../../../abstractEntity';
import {
  ConversionSkuExistingResultData,
  ConversionSkuResult,
  ConversionSkuResultData,
} from './conversionSkuResult';

export enum LicenseConversionSkuFields {
  COLUMN_OFFERS = 'offers',
}

export type LicenseConversionSkuResultData = {
  [LicenseConversionSkuFields.COLUMN_OFFERS]:
    | ConversionSkuExistingResultData[]
    | ConversionSkuResultData[];
};

export class LicenseConversionSkuResult extends AbstractEntity<LicenseConversionSkuResultData> {
  readonly #offers: ConversionSkuResult[];

  public constructor(data: LicenseConversionSkuResultData) {
    super(data);

    this.#offers = data[LicenseConversionSkuFields.COLUMN_OFFERS].map(
      (result: ConversionSkuExistingResultData) =>
        new ConversionSkuResult(result),
    );
  }

  get offers(): ConversionSkuResult[] {
    return this.#offers;
  }

  public toJSON(): LicenseConversionSkuResultData {
    return {
      [LicenseConversionSkuFields.COLUMN_OFFERS]: this.offers.map(
        (result: ConversionSkuResult) => result.toJSON(),
      ),
    };
  }
}
