import { AbstractEntity } from '../../../abstractEntity';

export enum CompanyTypeEnum {
  UNKNOWN = 'UKW',
  MSP_CUSTOMER = 'MSP',
  VAR_CUSTOMER = 'VAR',
  ARROW = 'ARW',
}

export enum RateTypeEnum {
  DISCOUNT = 'discount',
  UPLIFT = 'uplift',
}

type RateType = {
  id: number;
  name: RateTypeEnum;
};

type CompanyType = {
  id: number;
  type: CompanyTypeEnum;
};

export type GetPricingRateData = {
  id: number;
  rate: number;
  start_date: string;
  end_date: string | null;
  created_at: string;
  rateType: RateType;
  companyType: CompanyType;
};

export class GetPricingRateResult extends AbstractEntity<GetPricingRateData> {
  readonly #id: number;
  readonly #rate: number;
  readonly #start_date: string;
  readonly #end_date: string | null;
  readonly #created_at: string;
  readonly #rateType: RateType;
  readonly #companyType: CompanyType;

  public constructor(data: GetPricingRateData) {
    super(data);

    this.#id = data?.id;
    this.#rate = data?.rate;
    this.#start_date = data?.start_date;
    this.#end_date = data?.end_date;
    this.#created_at = data?.created_at;
    this.#rateType = data?.rateType;
    this.#companyType = data?.companyType;
  }

  public toJSON(): GetPricingRateData {
    return {
      id: this.#id,
      rate: this.#rate,
      start_date: this.#start_date,
      end_date: this.#end_date,
      created_at: this.#created_at,
      rateType: this.#rateType,
      companyType: this.#companyType,
    };
  }
}
