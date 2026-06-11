import { AbstractEntity } from '../../../../abstractEntity';

export enum RenewalAlertWhenEnum {
  END_OF_MONTH = 'end_of_month',
  IN_TWO_MONTH = 'two_months',
  IN_A_YEAR = 'one_year',
  EXPIRED = 'expired',
}

export enum RenewalFiltersFields {
  COLUMN_END_CUSTOMERS = 'endCustomers',
  COLUMN_VENDOR = 'vendor',
  COLUMN_WHEN = 'when',
  COLUMN_CLASSIFICATION = 'classification',
  COLUMN_ONLY_AUTO_RENEWAL = 'onlyAutoRenewal',
  COLUMN_ONLY_PRICE_CHANGE = 'onlyPriceChange',
}

export type RenewalFiltersType = {
  [RenewalFiltersFields.COLUMN_END_CUSTOMERS]?: string[];
  [RenewalFiltersFields.COLUMN_VENDOR]?: string;
  [RenewalFiltersFields.COLUMN_WHEN]?: RenewalAlertWhenEnum;
  [RenewalFiltersFields.COLUMN_CLASSIFICATION]?: string;
  [RenewalFiltersFields.COLUMN_ONLY_AUTO_RENEWAL]?: boolean;
  [RenewalFiltersFields.COLUMN_ONLY_PRICE_CHANGE]?: boolean;
};

export class RenewalFilters extends AbstractEntity<RenewalFiltersType> {
  readonly #endCustomers?: string[];
  readonly #vendor?: string;
  readonly #when?: RenewalAlertWhenEnum;
  readonly #classification?: string;
  readonly #onlyAutoRenewal?: boolean;
  readonly #onlyPriceChange?: boolean;

  public constructor(data: RenewalFiltersType) {
    super(data);

    this.#endCustomers = data[RenewalFiltersFields.COLUMN_END_CUSTOMERS];
    this.#vendor = data[RenewalFiltersFields.COLUMN_VENDOR];
    this.#when = data[RenewalFiltersFields.COLUMN_WHEN];
    this.#classification = data[RenewalFiltersFields.COLUMN_CLASSIFICATION];
    this.#onlyAutoRenewal = data[RenewalFiltersFields.COLUMN_ONLY_AUTO_RENEWAL];
    this.#onlyPriceChange = data[RenewalFiltersFields.COLUMN_ONLY_PRICE_CHANGE];
  }

  get endCustomers(): string[] | undefined {
    return this.#endCustomers;
  }

  get vendor(): string | undefined {
    return this.#vendor;
  }

  get when(): RenewalAlertWhenEnum | undefined {
    return this.#when;
  }

  get classification(): string | undefined {
    return this.#classification;
  }

  get onlyAutoRenewal(): boolean | undefined {
    return this.#onlyAutoRenewal;
  }

  get onlyPriceChange(): boolean | undefined {
    return this.#onlyPriceChange;
  }

  public toJSON(): RenewalFiltersType {
    return {
      [RenewalFiltersFields.COLUMN_END_CUSTOMERS]: this.endCustomers,
      [RenewalFiltersFields.COLUMN_VENDOR]: this.vendor,
      [RenewalFiltersFields.COLUMN_WHEN]: this.when,
      [RenewalFiltersFields.COLUMN_CLASSIFICATION]: this.classification,
      [RenewalFiltersFields.COLUMN_ONLY_AUTO_RENEWAL]: this.onlyAutoRenewal,
      [RenewalFiltersFields.COLUMN_ONLY_PRICE_CHANGE]: this.onlyPriceChange,
    };
  }
}
