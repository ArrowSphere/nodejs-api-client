import { AbstractEntity } from '../../../abstractEntity';
import { Rules } from 'validatorjs';
import {
  DataKeywords,
  FiltersParameters,
  SortParameters,
} from '../../licensesClient';
import {
  PriceBandActionFlagsFindResultDataKeywords,
  PriceBandActionFlagsFindResultData,
  PriceBandActionFlagsDataFindResultSortParameters,
  PriceBandActionFlagsFindResultDataFiltersParameters,
  PriceBandActionFlagsFindResult,
  PriceBandActionFlagsFindResultFields,
} from './priceband/priceBandActionFlagsFindResult';
import {
  BillingFindResult,
  BillingFindResultData,
  BillingFindResultDataFiltersParameters,
  BillingFindResultDataKeywords,
  BillingFindResultDataSortParameters,
  BillingFindResultFields,
} from './priceband/billingFindResult';
import {
  PriceBandPriceFindResult,
  PriceBandPriceFindResultData,
  PriceBandPriceFindResultDataFiltersParameters,
  PriceBandPriceFindResultDataKeywords,
  PriceBandPriceFindResultDataSortParameters,
  PriceBandPriceFindResultFields,
} from './priceband/priceBandPriceFindResult';
import {
  SaleConstraintsFindResult,
  SaleConstraintsFindResultData,
  SaleConstraintsFindResultDataFiltersParameters,
  SaleConstraintsFindResultDataKeywords,
  SaleConstraintsFindResultDataSortParameters,
  SaleConstraintsFindResultFields,
} from './priceband/saleConstraintsFindResult';
import {
  IdentifiersFindResultFields,
  IdentifiersFindResult,
  IdentifiersFindResultData,
  IdentifiersFindResultDataFiltersParameters,
  IdentifiersFindResultDataKeywords,
  IdentifiersFindResultDataSortParameters,
} from './priceband/identifiersFindResult';
import { ArrowsphereFindResultFields } from './priceband/identifiers/arrowsphereFindResult';

export enum PriceBandFindResultFields {
  COLUMN_ACTION_FLAGS = 'actionFlags',
  COLUMN_BILLING = 'billing',
  COLUMN_CURRENCY = 'currency',
  COLUMN_IS_ENABLED = 'isEnabled',
  COLUMN_MARKETPLACE = 'marketplace',
  COLUMN_PRICES = 'prices',
  COLUMN_SALE_CONSTRAINTS = 'saleConstraints',
  COLUMN_IDENTIFIERS = 'identifiers',
}

export type PriceBandFindResultData = {
  [PriceBandFindResultFields.COLUMN_ACTION_FLAGS]: PriceBandActionFlagsFindResultData;
  [PriceBandFindResultFields.COLUMN_BILLING]: BillingFindResultData;
  [PriceBandFindResultFields.COLUMN_CURRENCY]: string;
  [PriceBandFindResultFields.COLUMN_IS_ENABLED]: boolean;
  [PriceBandFindResultFields.COLUMN_MARKETPLACE]: string;
  [PriceBandFindResultFields.COLUMN_PRICES]: PriceBandPriceFindResultData;
  [PriceBandFindResultFields.COLUMN_SALE_CONSTRAINTS]: SaleConstraintsFindResultData;
  [PriceBandFindResultFields.COLUMN_IDENTIFIERS]: IdentifiersFindResultData;
};

export type PriceBandFindResultDataKeywords = {
  [PriceBandFindResultFields.COLUMN_ACTION_FLAGS]?: PriceBandActionFlagsFindResultDataKeywords;
  [PriceBandFindResultFields.COLUMN_BILLING]?: BillingFindResultDataKeywords;
  [PriceBandFindResultFields.COLUMN_CURRENCY]?: DataKeywords;
  [PriceBandFindResultFields.COLUMN_IS_ENABLED]?: DataKeywords;
  [PriceBandFindResultFields.COLUMN_MARKETPLACE]?: DataKeywords;
  [PriceBandFindResultFields.COLUMN_PRICES]?: PriceBandPriceFindResultDataKeywords;
  [PriceBandFindResultFields.COLUMN_SALE_CONSTRAINTS]?: SaleConstraintsFindResultDataKeywords;
  [PriceBandFindResultFields.COLUMN_IDENTIFIERS]?: IdentifiersFindResultDataKeywords;
};

export type PriceBandFindResultDataSortParameters = {
  [PriceBandFindResultFields.COLUMN_ACTION_FLAGS]?: PriceBandActionFlagsDataFindResultSortParameters;
  [PriceBandFindResultFields.COLUMN_BILLING]?: BillingFindResultDataSortParameters;
  [PriceBandFindResultFields.COLUMN_CURRENCY]?: SortParameters;
  [PriceBandFindResultFields.COLUMN_IS_ENABLED]?: SortParameters;
  [PriceBandFindResultFields.COLUMN_MARKETPLACE]?: SortParameters;
  [PriceBandFindResultFields.COLUMN_PRICES]?: PriceBandPriceFindResultDataSortParameters;
  [PriceBandFindResultFields.COLUMN_SALE_CONSTRAINTS]?: SaleConstraintsFindResultDataSortParameters;
  [PriceBandFindResultFields.COLUMN_IDENTIFIERS]?: IdentifiersFindResultDataSortParameters;
};

export type PriceBandFindResultDataFiltersParameters = {
  [PriceBandFindResultFields.COLUMN_ACTION_FLAGS]?: PriceBandActionFlagsFindResultDataFiltersParameters;
  [PriceBandFindResultFields.COLUMN_BILLING]?: BillingFindResultDataFiltersParameters;
  [PriceBandFindResultFields.COLUMN_CURRENCY]?: FiltersParameters;
  [PriceBandFindResultFields.COLUMN_IS_ENABLED]?: FiltersParameters;
  [PriceBandFindResultFields.COLUMN_MARKETPLACE]?: FiltersParameters;
  [PriceBandFindResultFields.COLUMN_PRICES]?: PriceBandPriceFindResultDataFiltersParameters;
  [PriceBandFindResultFields.COLUMN_SALE_CONSTRAINTS]?: SaleConstraintsFindResultDataFiltersParameters;
  [PriceBandFindResultFields.COLUMN_IDENTIFIERS]?: IdentifiersFindResultDataFiltersParameters;
};

export class PriceBandFindResult extends AbstractEntity<PriceBandFindResultData> {
  protected VALIDATION_RULES: Rules = {
    [PriceBandFindResultFields.COLUMN_ACTION_FLAGS]: 'required|array',
    [PriceBandFindResultFields.COLUMN_BILLING]: 'required|array',
    [PriceBandFindResultFields.COLUMN_CURRENCY]: 'required',
    [PriceBandFindResultFields.COLUMN_IS_ENABLED]: 'required|boolean',
    [PriceBandFindResultFields.COLUMN_MARKETPLACE]: 'required',
    [PriceBandFindResultFields.COLUMN_PRICES]: 'required|array',
    [PriceBandFindResultFields.COLUMN_SALE_CONSTRAINTS]: 'required|array',
    [PriceBandFindResultFields.COLUMN_IDENTIFIERS]: 'required|array',
  };

  readonly #actionFlags: PriceBandActionFlagsFindResult;
  readonly #billing: BillingFindResult;
  readonly #currency: string;
  readonly #isEnabled: boolean;
  readonly #marketplace: string;
  readonly #prices: PriceBandPriceFindResult;
  readonly #saleConstraints: SaleConstraintsFindResult;
  readonly #identifiers: IdentifiersFindResult;

  public constructor(data: PriceBandFindResultData) {
    super(data);

    const actionFlags: PriceBandActionFlagsFindResultData = {
      [PriceBandActionFlagsFindResultFields.COLUMN_CAN_BE_CANCELLED]:
        data[PriceBandFindResultFields.COLUMN_ACTION_FLAGS][
          PriceBandActionFlagsFindResultFields.COLUMN_CAN_BE_CANCELLED
        ],
      [PriceBandActionFlagsFindResultFields.COLUMN_CAN_BE_REACTIVATED]:
        data[PriceBandFindResultFields.COLUMN_ACTION_FLAGS][
          PriceBandActionFlagsFindResultFields.COLUMN_CAN_BE_REACTIVATED
        ],
      [PriceBandActionFlagsFindResultFields.COLUMN_CAN_BE_SUSPENDED]:
        data[PriceBandFindResultFields.COLUMN_ACTION_FLAGS][
          PriceBandActionFlagsFindResultFields.COLUMN_CAN_BE_SUSPENDED
        ],
      [PriceBandActionFlagsFindResultFields.COLUMN_CAN_DECREASE_SEATS]:
        data[PriceBandFindResultFields.COLUMN_ACTION_FLAGS][
          PriceBandActionFlagsFindResultFields.COLUMN_CAN_DECREASE_SEATS
        ],
      [PriceBandActionFlagsFindResultFields.COLUMN_CAN_INCREASE_SEATS]:
        data[PriceBandFindResultFields.COLUMN_ACTION_FLAGS][
          PriceBandActionFlagsFindResultFields.COLUMN_CAN_INCREASE_SEATS
        ],
    };
    this.#actionFlags = new PriceBandActionFlagsFindResult(actionFlags);
    const billing: BillingFindResultData = {
      [BillingFindResultFields.COLUMN_CYCLE]:
        data[PriceBandFindResultFields.COLUMN_BILLING][
          BillingFindResultFields.COLUMN_CYCLE
        ],
      [BillingFindResultFields.COLUMN_TERM]:
        data[PriceBandFindResultFields.COLUMN_BILLING][
          BillingFindResultFields.COLUMN_TERM
        ],
      [BillingFindResultFields.COLUMN_TYPE]:
        data[PriceBandFindResultFields.COLUMN_BILLING][
          BillingFindResultFields.COLUMN_TYPE
        ],
    };
    this.#billing = new BillingFindResult(billing);
    this.#currency = data[PriceBandFindResultFields.COLUMN_CURRENCY];
    this.#isEnabled = data[PriceBandFindResultFields.COLUMN_IS_ENABLED];
    this.#marketplace = data[PriceBandFindResultFields.COLUMN_MARKETPLACE];
    const prices: PriceBandPriceFindResultData = {
      [PriceBandPriceFindResultFields.COLUMN_BUY]:
        data[PriceBandFindResultFields.COLUMN_PRICES][
          PriceBandPriceFindResultFields.COLUMN_BUY
        ],
      [PriceBandPriceFindResultFields.COLUMN_SELL]:
        data[PriceBandFindResultFields.COLUMN_PRICES][
          PriceBandPriceFindResultFields.COLUMN_SELL
        ],
      [PriceBandPriceFindResultFields.COLUMN_PUBLIC]:
        data[PriceBandFindResultFields.COLUMN_PRICES][
          PriceBandPriceFindResultFields.COLUMN_PUBLIC
        ],
    };
    this.#prices = new PriceBandPriceFindResult(prices);
    const saleConstraints: SaleConstraintsFindResultData = {
      [SaleConstraintsFindResultFields.COLUMN_MIN_QUANTITY]:
        data[PriceBandFindResultFields.COLUMN_SALE_CONSTRAINTS][
          SaleConstraintsFindResultFields.COLUMN_MIN_QUANTITY
        ],
      [SaleConstraintsFindResultFields.COLUMN_MAX_QUANTITY]:
        data[PriceBandFindResultFields.COLUMN_SALE_CONSTRAINTS][
          SaleConstraintsFindResultFields.COLUMN_MAX_QUANTITY
        ],
    };
    this.#saleConstraints = new SaleConstraintsFindResult(saleConstraints);
    const identifiers: IdentifiersFindResultData = {
      [IdentifiersFindResultFields.COLUMN_ARROWSPHERE]: {
        [ArrowsphereFindResultFields.COLUMN_SKU]:
          data[PriceBandFindResultFields.COLUMN_IDENTIFIERS][
            IdentifiersFindResultFields.COLUMN_ARROWSPHERE
          ][ArrowsphereFindResultFields.COLUMN_SKU],
      },
    };
    this.#identifiers = new IdentifiersFindResult(identifiers);
  }

  public get actionFlags(): PriceBandActionFlagsFindResult {
    return this.#actionFlags;
  }

  public get billing(): BillingFindResult {
    return this.#billing;
  }

  public get currency(): string {
    return this.#currency;
  }

  public get isEnabled(): boolean {
    return this.#isEnabled;
  }

  public get marketplace(): string {
    return this.#marketplace;
  }

  public get prices(): PriceBandPriceFindResult {
    return this.#prices;
  }

  public get saleConstraints(): SaleConstraintsFindResult {
    return this.#saleConstraints;
  }

  public get identifiers(): IdentifiersFindResult {
    return this.#identifiers;
  }

  public toJSON(): PriceBandFindResultData {
    return {
      [PriceBandFindResultFields.COLUMN_ACTION_FLAGS]: this.actionFlags.toJSON(),
      [PriceBandFindResultFields.COLUMN_BILLING]: this.billing.toJSON(),
      [PriceBandFindResultFields.COLUMN_CURRENCY]: this.currency,
      [PriceBandFindResultFields.COLUMN_IS_ENABLED]: this.isEnabled,
      [PriceBandFindResultFields.COLUMN_MARKETPLACE]: this.marketplace,
      [PriceBandFindResultFields.COLUMN_PRICES]: this.prices.toJSON(),
      [PriceBandFindResultFields.COLUMN_SALE_CONSTRAINTS]: this.saleConstraints.toJSON(),
      [PriceBandFindResultFields.COLUMN_IDENTIFIERS]: this.identifiers.toJSON(),
    };
  }
}
