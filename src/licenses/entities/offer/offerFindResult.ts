import { AbstractEntity } from '../../../abstractEntity';
import { Rules } from 'validatorjs';
import {
  DataKeywords,
  FiltersParameters,
  SortParameters,
} from '../../licensesClient';
import {
  ActionFlagsFindResult,
  ActionFlagsFindResultData,
  ActionFlagsFindResultDataFiltersParameters,
  ActionFlagsFindResultDataKeywords,
  ActionFlagsFindResultDataSortParameters,
  ActionFlagsFindResultFields,
} from './actionFlagsFindResult';
import {
  PriceBandFindResult,
  PriceBandFindResultData,
  PriceBandFindResultDataFiltersParameters,
  PriceBandFindResultDataKeywords,
  PriceBandFindResultDataSortParameters,
  PriceBandFindResultFields,
} from './priceBandFindResult';

export enum OfferFindResultFields {
  COLUMN_ACTION_FLAGS = 'actionFlags',
  COLUMN_CLASSIFICATION = 'classification',
  COLUMN_IS_ENABLED = 'isEnabled',
  COLUMN_LAST_UPDATE = 'lastUpdate',
  COLUMN_NAME = 'name',
  COLUMN_PRICE_BAND = 'priceBand',
  COLUMN_ARROW_SUB_CATEGORIES = 'arrowSubCategories',
}

export type OfferFindResultData = {
  [OfferFindResultFields.COLUMN_ACTION_FLAGS]: ActionFlagsFindResultData;
  [OfferFindResultFields.COLUMN_CLASSIFICATION]: string;
  [OfferFindResultFields.COLUMN_IS_ENABLED]: boolean;
  [OfferFindResultFields.COLUMN_LAST_UPDATE]: string;
  [OfferFindResultFields.COLUMN_NAME]: string;
  [OfferFindResultFields.COLUMN_PRICE_BAND]: PriceBandFindResultData;
  [OfferFindResultFields.COLUMN_ARROW_SUB_CATEGORIES]: Array<string> | null;
};

export type OfferFindResultDataKeywords = {
  [OfferFindResultFields.COLUMN_ACTION_FLAGS]?: ActionFlagsFindResultDataKeywords;
  [OfferFindResultFields.COLUMN_CLASSIFICATION]?: DataKeywords;
  [OfferFindResultFields.COLUMN_IS_ENABLED]?: DataKeywords;
  [OfferFindResultFields.COLUMN_LAST_UPDATE]?: DataKeywords;
  [OfferFindResultFields.COLUMN_NAME]?: DataKeywords;
  [OfferFindResultFields.COLUMN_PRICE_BAND]?: PriceBandFindResultDataKeywords;
  [OfferFindResultFields.COLUMN_ARROW_SUB_CATEGORIES]?: DataKeywords;
};

export type OfferFindResultDataSortParameters = {
  [OfferFindResultFields.COLUMN_ACTION_FLAGS]?: ActionFlagsFindResultDataSortParameters;
  [OfferFindResultFields.COLUMN_CLASSIFICATION]?: SortParameters;
  [OfferFindResultFields.COLUMN_IS_ENABLED]?: SortParameters;
  [OfferFindResultFields.COLUMN_LAST_UPDATE]?: SortParameters;
  [OfferFindResultFields.COLUMN_NAME]?: SortParameters;
  [OfferFindResultFields.COLUMN_PRICE_BAND]?: PriceBandFindResultDataSortParameters;
  [OfferFindResultFields.COLUMN_ARROW_SUB_CATEGORIES]?: SortParameters;
};

export type OfferFindResultDataFiltersParameters = {
  [OfferFindResultFields.COLUMN_ACTION_FLAGS]?: ActionFlagsFindResultDataFiltersParameters;
  [OfferFindResultFields.COLUMN_CLASSIFICATION]?: FiltersParameters;
  [OfferFindResultFields.COLUMN_IS_ENABLED]?: FiltersParameters;
  [OfferFindResultFields.COLUMN_LAST_UPDATE]?: FiltersParameters;
  [OfferFindResultFields.COLUMN_NAME]?: FiltersParameters;
  [OfferFindResultFields.COLUMN_PRICE_BAND]?: PriceBandFindResultDataFiltersParameters;
  [OfferFindResultFields.COLUMN_ARROW_SUB_CATEGORIES]?: FiltersParameters;
};

export class OfferFindResult extends AbstractEntity<OfferFindResultData> {
  protected VALIDATION_RULES: Rules = {
    [OfferFindResultFields.COLUMN_ACTION_FLAGS]: 'required|array',
    [OfferFindResultFields.COLUMN_CLASSIFICATION]: 'required|string',
    [OfferFindResultFields.COLUMN_IS_ENABLED]: 'required|boolean',
    [OfferFindResultFields.COLUMN_LAST_UPDATE]: 'required|string',
    [OfferFindResultFields.COLUMN_NAME]: 'required|string',
    [OfferFindResultFields.COLUMN_PRICE_BAND]: 'required|array',
    [OfferFindResultFields.COLUMN_ARROW_SUB_CATEGORIES]: 'required',
  };

  readonly #actionFlags: ActionFlagsFindResult;
  readonly #classification: string;
  readonly #isEnabled: boolean;
  readonly #lastUpdate: string;
  readonly #name: string;
  readonly #priceBand: PriceBandFindResult;
  readonly #arrowSubCategories: Array<string> | null;

  public constructor(data: OfferFindResultData) {
    super(data);

    const actionFlags: ActionFlagsFindResultData = {
      [ActionFlagsFindResultFields.COLUMN_IS_AUTO_RENEW]:
        data[OfferFindResultFields.COLUMN_ACTION_FLAGS][
          ActionFlagsFindResultFields.COLUMN_IS_AUTO_RENEW
        ],
      [ActionFlagsFindResultFields.COLUMN_MANUAL_PROVISIONING]:
        data[OfferFindResultFields.COLUMN_ACTION_FLAGS][
          ActionFlagsFindResultFields.COLUMN_MANUAL_PROVISIONING
        ],
      [ActionFlagsFindResultFields.COLUMN_RENEWAL_SKU]:
        data[OfferFindResultFields.COLUMN_ACTION_FLAGS][
          ActionFlagsFindResultFields.COLUMN_RENEWAL_SKU
        ],
    };
    this.#actionFlags = new ActionFlagsFindResult(actionFlags);
    this.#classification = data[OfferFindResultFields.COLUMN_CLASSIFICATION];
    this.#isEnabled = data[OfferFindResultFields.COLUMN_IS_ENABLED];
    this.#lastUpdate = data[OfferFindResultFields.COLUMN_LAST_UPDATE];
    this.#name = data[OfferFindResultFields.COLUMN_NAME];
    const priceBand: PriceBandFindResultData = {
      [PriceBandFindResultFields.COLUMN_ACTION_FLAGS]:
        data[OfferFindResultFields.COLUMN_PRICE_BAND][
          PriceBandFindResultFields.COLUMN_ACTION_FLAGS
        ],
      [PriceBandFindResultFields.COLUMN_BILLING]:
        data[OfferFindResultFields.COLUMN_PRICE_BAND][
          PriceBandFindResultFields.COLUMN_BILLING
        ],
      [PriceBandFindResultFields.COLUMN_CURRENCY]:
        data[OfferFindResultFields.COLUMN_PRICE_BAND][
          PriceBandFindResultFields.COLUMN_CURRENCY
        ],
      [PriceBandFindResultFields.COLUMN_IS_ENABLED]:
        data[OfferFindResultFields.COLUMN_PRICE_BAND][
          PriceBandFindResultFields.COLUMN_IS_ENABLED
        ],
      [PriceBandFindResultFields.COLUMN_MARKETPLACE]:
        data[OfferFindResultFields.COLUMN_PRICE_BAND][
          PriceBandFindResultFields.COLUMN_MARKETPLACE
        ],
      [PriceBandFindResultFields.COLUMN_PRICES]:
        data[OfferFindResultFields.COLUMN_PRICE_BAND][
          PriceBandFindResultFields.COLUMN_PRICES
        ],
      [PriceBandFindResultFields.COLUMN_SALE_CONSTRAINTS]:
        data[OfferFindResultFields.COLUMN_PRICE_BAND][
          PriceBandFindResultFields.COLUMN_SALE_CONSTRAINTS
        ],
      [PriceBandFindResultFields.COLUMN_IDENTIFIERS]:
        data[OfferFindResultFields.COLUMN_PRICE_BAND][
          PriceBandFindResultFields.COLUMN_IDENTIFIERS
        ],
    };
    this.#priceBand = new PriceBandFindResult(priceBand);
    this.#arrowSubCategories =
      data[OfferFindResultFields.COLUMN_ARROW_SUB_CATEGORIES];
  }

  public get actionFlags(): ActionFlagsFindResult {
    return this.#actionFlags;
  }

  public get classification(): string {
    return this.#classification;
  }

  public get isEnabled(): boolean {
    return this.#isEnabled;
  }

  public get lastUpdate(): string {
    return this.#lastUpdate;
  }

  public get name(): string {
    return this.#name;
  }

  public get priceBand(): PriceBandFindResult {
    return this.#priceBand;
  }

  public get arrowSubCategories(): Array<string> | null {
    return this.#arrowSubCategories;
  }

  public toJSON(): OfferFindResultData {
    return {
      [OfferFindResultFields.COLUMN_ACTION_FLAGS]: this.actionFlags.toJSON(),
      [OfferFindResultFields.COLUMN_CLASSIFICATION]: this.classification,
      [OfferFindResultFields.COLUMN_IS_ENABLED]: this.isEnabled,
      [OfferFindResultFields.COLUMN_LAST_UPDATE]: this.lastUpdate,
      [OfferFindResultFields.COLUMN_NAME]: this.name,
      [OfferFindResultFields.COLUMN_PRICE_BAND]: this.priceBand.toJSON(),
      [OfferFindResultFields.COLUMN_ARROW_SUB_CATEGORIES]: this
        .arrowSubCategories,
    };
  }
}
