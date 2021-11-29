import { AbstractEntity } from '../../../abstractEntity';
import { PriceBandActionFlagsFindResult } from './priceband/priceBandActionFlagsFindResult';
import { BillingFindResult } from './priceband/billingFindResult';
import { SaleConstraintsFindResult } from './priceband/saleConstraintsFindResult';
import { IdentifiersFindResult } from './priceband/identifiersFindResult';
import { PricesFindResult } from './priceband/pricesFindResult';
import { Rules } from 'validatorjs';
import {
  PriceBandActionFlagsData,
  PriceBandActionFlagsDataFiltersParameters,
  PriceBandActionFlagsDataKeywords,
  PriceBandActionFlagsDataSortParameters,
  PriceBandActionFlagsFields,
} from './priceband/abstractPriceBandActionFlags';
import {
  BillingData,
  BillingDataFiltersParameters,
  BillingDataKeywords,
  BillingDataSortParameters,
  BillingFields,
} from './priceband/abstractBilling';
import {
  PricesData,
  PricesDataFiltersParameters,
  PricesDataKeywords,
  PricesDataSortParameters,
  PricesFields,
} from './priceband/abstractPrices';
import {
  SaleConstraintsData,
  SaleConstraintsDataFiltersParameters,
  SaleConstraintsDataKeywords,
  SaleConstraintsDataSortParameters,
  SaleConstraintsFields,
} from './priceband/abstractSaleConstraints';
import {
  IdentifiersData,
  IdentifiersDataFiltersParameters,
  IdentifiersDataKeywords,
  IdentifiersDataSortParameters,
  IdentifiersFields,
} from './priceband/abstractIdentifiers';
import { ArrowsphereFields } from './priceband/identifiers/abstractArrowsphere';
import {
  DataKeywords,
  FiltersParameters,
  SortParameters,
} from '../../licensesClient';

export enum PriceBandFields {
  COLUMN_ACTION_FLAGS = 'actionFlags',
  COLUMN_BILLING = 'billing',
  COLUMN_CURRENCY = 'currency',
  COLUMN_IS_ENABLED = 'isEnabled',
  COLUMN_MARKETPLACE = 'marketplace',
  COLUMN_PRICES = 'prices',
  COLUMN_SALE_CONSTRAINTS = 'saleConstraints',
  COLUMN_IDENTIFIERS = 'identifiers',
}

export type PriceBandData = {
  [PriceBandFields.COLUMN_ACTION_FLAGS]: PriceBandActionFlagsData;
  [PriceBandFields.COLUMN_BILLING]: BillingData;
  [PriceBandFields.COLUMN_CURRENCY]: string;
  [PriceBandFields.COLUMN_IS_ENABLED]: boolean;
  [PriceBandFields.COLUMN_MARKETPLACE]: string;
  [PriceBandFields.COLUMN_PRICES]: PricesData;
  [PriceBandFields.COLUMN_SALE_CONSTRAINTS]: SaleConstraintsData;
  [PriceBandFields.COLUMN_IDENTIFIERS]: IdentifiersData;
};

export type PriceBandDataKeywords = {
  [PriceBandFields.COLUMN_ACTION_FLAGS]?: PriceBandActionFlagsDataKeywords;
  [PriceBandFields.COLUMN_BILLING]?: BillingDataKeywords;
  [PriceBandFields.COLUMN_CURRENCY]?: DataKeywords;
  [PriceBandFields.COLUMN_IS_ENABLED]?: DataKeywords;
  [PriceBandFields.COLUMN_MARKETPLACE]?: DataKeywords;
  [PriceBandFields.COLUMN_PRICES]?: PricesDataKeywords;
  [PriceBandFields.COLUMN_SALE_CONSTRAINTS]?: SaleConstraintsDataKeywords;
  [PriceBandFields.COLUMN_IDENTIFIERS]?: IdentifiersDataKeywords;
};

export type PriceBandDataSortParameters = {
  [PriceBandFields.COLUMN_ACTION_FLAGS]?: PriceBandActionFlagsDataSortParameters;
  [PriceBandFields.COLUMN_BILLING]?: BillingDataSortParameters;
  [PriceBandFields.COLUMN_CURRENCY]?: SortParameters;
  [PriceBandFields.COLUMN_IS_ENABLED]?: SortParameters;
  [PriceBandFields.COLUMN_MARKETPLACE]?: SortParameters;
  [PriceBandFields.COLUMN_PRICES]?: PricesDataSortParameters;
  [PriceBandFields.COLUMN_SALE_CONSTRAINTS]?: SaleConstraintsDataSortParameters;
  [PriceBandFields.COLUMN_IDENTIFIERS]?: IdentifiersDataSortParameters;
};

export type PriceBandDataFiltersParameters = {
  [PriceBandFields.COLUMN_ACTION_FLAGS]?: PriceBandActionFlagsDataFiltersParameters;
  [PriceBandFields.COLUMN_BILLING]?: BillingDataFiltersParameters;
  [PriceBandFields.COLUMN_CURRENCY]?: FiltersParameters;
  [PriceBandFields.COLUMN_IS_ENABLED]?: FiltersParameters;
  [PriceBandFields.COLUMN_MARKETPLACE]?: FiltersParameters;
  [PriceBandFields.COLUMN_PRICES]?: PricesDataFiltersParameters;
  [PriceBandFields.COLUMN_SALE_CONSTRAINTS]?: SaleConstraintsDataFiltersParameters;
  [PriceBandFields.COLUMN_IDENTIFIERS]?: IdentifiersDataFiltersParameters;
};

export abstract class AbstractPriceBand extends AbstractEntity<PriceBandData> {
  protected VALIDATION_RULES: Rules = {
    [PriceBandFields.COLUMN_ACTION_FLAGS]: 'required|array',
    [PriceBandFields.COLUMN_BILLING]: 'required|array',
    [PriceBandFields.COLUMN_CURRENCY]: 'required',
    [PriceBandFields.COLUMN_IS_ENABLED]: 'required|boolean',
    [PriceBandFields.COLUMN_MARKETPLACE]: 'required',
    [PriceBandFields.COLUMN_PRICES]: 'required|array',
    [PriceBandFields.COLUMN_SALE_CONSTRAINTS]: 'required|array',
    [PriceBandFields.COLUMN_IDENTIFIERS]: 'required|array',
  };

  readonly #actionFlags: PriceBandActionFlagsFindResult;
  readonly #billing: BillingFindResult;
  readonly #currency: string;
  readonly #isEnabled: boolean;
  readonly #marketplace: string;
  readonly #prices: PricesFindResult;
  readonly #saleConstraints: SaleConstraintsFindResult;
  readonly #identifiers: IdentifiersFindResult;

  protected constructor(data: PriceBandData) {
    super(data);

    const actionFlags: PriceBandActionFlagsData = {
      [PriceBandActionFlagsFields.COLUMN_CAN_BE_CANCELLED]:
        data[PriceBandFields.COLUMN_ACTION_FLAGS][
          PriceBandActionFlagsFields.COLUMN_CAN_BE_CANCELLED
        ],
      [PriceBandActionFlagsFields.COLUMN_CAN_BE_REACTIVATED]:
        data[PriceBandFields.COLUMN_ACTION_FLAGS][
          PriceBandActionFlagsFields.COLUMN_CAN_BE_REACTIVATED
        ],
      [PriceBandActionFlagsFields.COLUMN_CAN_BE_SUSPENDED]:
        data[PriceBandFields.COLUMN_ACTION_FLAGS][
          PriceBandActionFlagsFields.COLUMN_CAN_BE_SUSPENDED
        ],
      [PriceBandActionFlagsFields.COLUMN_CAN_DECREASE_SEATS]:
        data[PriceBandFields.COLUMN_ACTION_FLAGS][
          PriceBandActionFlagsFields.COLUMN_CAN_DECREASE_SEATS
        ],
      [PriceBandActionFlagsFields.COLUMN_CAN_INCREASE_SEATS]:
        data[PriceBandFields.COLUMN_ACTION_FLAGS][
          PriceBandActionFlagsFields.COLUMN_CAN_INCREASE_SEATS
        ],
    };
    this.#actionFlags = new PriceBandActionFlagsFindResult(actionFlags);
    const billing: BillingData = {
      [BillingFields.COLUMN_CYCLE]:
        data[PriceBandFields.COLUMN_BILLING][BillingFields.COLUMN_CYCLE],
      [BillingFields.COLUMN_TERM]:
        data[PriceBandFields.COLUMN_BILLING][BillingFields.COLUMN_TERM],
      [BillingFields.COLUMN_TYPE]:
        data[PriceBandFields.COLUMN_BILLING][BillingFields.COLUMN_TYPE],
    };
    this.#billing = new BillingFindResult(billing);
    this.#currency = data[PriceBandFields.COLUMN_CURRENCY];
    this.#isEnabled = data[PriceBandFields.COLUMN_IS_ENABLED];
    this.#marketplace = data[PriceBandFields.COLUMN_MARKETPLACE];
    const prices: PricesData = {
      [PricesFields.COLUMN_BUY]:
        data[PriceBandFields.COLUMN_PRICES][PricesFields.COLUMN_BUY],
      [PricesFields.COLUMN_SELL]:
        data[PriceBandFields.COLUMN_PRICES][PricesFields.COLUMN_SELL],
      [PricesFields.COLUMN_PUBLIC]:
        data[PriceBandFields.COLUMN_PRICES][PricesFields.COLUMN_PUBLIC],
    };
    this.#prices = new PricesFindResult(prices);
    const saleConstraints: SaleConstraintsData = {
      [SaleConstraintsFields.COLUMN_MIN_QUANTITY]:
        data[PriceBandFields.COLUMN_SALE_CONSTRAINTS][
          SaleConstraintsFields.COLUMN_MIN_QUANTITY
        ],
      [SaleConstraintsFields.COLUMN_MAX_QUANTITY]:
        data[PriceBandFields.COLUMN_SALE_CONSTRAINTS][
          SaleConstraintsFields.COLUMN_MAX_QUANTITY
        ],
    };
    this.#saleConstraints = new SaleConstraintsFindResult(saleConstraints);
    const identifiers: IdentifiersData = {
      [IdentifiersFields.COLUMN_ARROWSPHERE]: {
        [ArrowsphereFields.COLUMN_SKU]:
          data[PriceBandFields.COLUMN_IDENTIFIERS][
            IdentifiersFields.COLUMN_ARROWSPHERE
          ][ArrowsphereFields.COLUMN_SKU],
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

  public get prices(): PricesFindResult {
    return this.#prices;
  }

  public get saleConstraints(): SaleConstraintsFindResult {
    return this.#saleConstraints;
  }

  public get identifiers(): IdentifiersFindResult {
    return this.#identifiers;
  }

  public toJSON(): PriceBandData {
    return {
      [PriceBandFields.COLUMN_ACTION_FLAGS]: this.actionFlags.toJSON(),
      [PriceBandFields.COLUMN_BILLING]: this.billing.toJSON(),
      [PriceBandFields.COLUMN_CURRENCY]: this.currency,
      [PriceBandFields.COLUMN_IS_ENABLED]: this.isEnabled,
      [PriceBandFields.COLUMN_MARKETPLACE]: this.marketplace,
      [PriceBandFields.COLUMN_PRICES]: this.prices.toJSON(),
      [PriceBandFields.COLUMN_SALE_CONSTRAINTS]: this.saleConstraints.toJSON(),
      [PriceBandFields.COLUMN_IDENTIFIERS]: this.identifiers.toJSON(),
    };
  }
}
