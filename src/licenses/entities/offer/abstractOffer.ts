import { AbstractEntity } from '../../../abstractEntity';
import { PriceBandFindResult } from './priceBandFindResult';
import { ActionFlagsFindResult } from './actionFlagsFindResult';
import { Rules } from 'validatorjs';
import {
  ActionFlagsData,
  ActionFlagsDataFiltersParameters,
  ActionFlagsDataKeywords,
  ActionFlagsDataSortParameters,
  ActionFlagsFields,
} from './abstractActionFlags';
import {
  PriceBandData,
  PriceBandDataFiltersParameters,
  PriceBandDataKeywords,
  PriceBandDataSortParameters,
  PriceBandFields,
} from './abstractPriceBand';
import {
  DataKeywords,
  FiltersParameters,
  SortParameters,
} from '../../licensesClient';

export enum OfferFields {
  COLUMN_ACTION_FLAGS = 'actionFlags',
  COLUMN_CLASSIFICATION = 'classification',
  COLUMN_IS_ENABLED = 'isEnabled',
  COLUMN_LAST_UPDATE = 'lastUpdate',
  COLUMN_NAME = 'name',
  COLUMN_PRICE_BAND = 'priceBand',
  COLUMN_ARROW_SUB_CATEGORIES = 'arrowSubCategories',
}

export type OfferData = {
  [OfferFields.COLUMN_ACTION_FLAGS]: ActionFlagsData;
  [OfferFields.COLUMN_CLASSIFICATION]: string;
  [OfferFields.COLUMN_IS_ENABLED]: boolean;
  [OfferFields.COLUMN_LAST_UPDATE]: string;
  [OfferFields.COLUMN_NAME]: string;
  [OfferFields.COLUMN_PRICE_BAND]: PriceBandData;
  [OfferFields.COLUMN_ARROW_SUB_CATEGORIES]: Array<string> | null;
};

export type OfferDataKeywords = {
  [OfferFields.COLUMN_ACTION_FLAGS]?: ActionFlagsDataKeywords;
  [OfferFields.COLUMN_CLASSIFICATION]?: DataKeywords;
  [OfferFields.COLUMN_IS_ENABLED]?: DataKeywords;
  [OfferFields.COLUMN_LAST_UPDATE]?: DataKeywords;
  [OfferFields.COLUMN_NAME]?: DataKeywords;
  [OfferFields.COLUMN_PRICE_BAND]?: PriceBandDataKeywords;
  [OfferFields.COLUMN_ARROW_SUB_CATEGORIES]?: DataKeywords;
};

export type OfferDataSortParameters = {
  [OfferFields.COLUMN_ACTION_FLAGS]?: ActionFlagsDataSortParameters;
  [OfferFields.COLUMN_CLASSIFICATION]?: SortParameters;
  [OfferFields.COLUMN_IS_ENABLED]?: SortParameters;
  [OfferFields.COLUMN_LAST_UPDATE]?: SortParameters;
  [OfferFields.COLUMN_NAME]?: SortParameters;
  [OfferFields.COLUMN_PRICE_BAND]?: PriceBandDataSortParameters;
  [OfferFields.COLUMN_ARROW_SUB_CATEGORIES]?: SortParameters;
};

export type OfferDataFiltersParameters = {
  [OfferFields.COLUMN_ACTION_FLAGS]?: ActionFlagsDataFiltersParameters;
  [OfferFields.COLUMN_CLASSIFICATION]?: FiltersParameters;
  [OfferFields.COLUMN_IS_ENABLED]?: FiltersParameters;
  [OfferFields.COLUMN_LAST_UPDATE]?: FiltersParameters;
  [OfferFields.COLUMN_NAME]?: FiltersParameters;
  [OfferFields.COLUMN_PRICE_BAND]?: PriceBandDataFiltersParameters;
  [OfferFields.COLUMN_ARROW_SUB_CATEGORIES]?: FiltersParameters;
};

export abstract class AbstractOffer extends AbstractEntity<OfferData> {
  protected VALIDATION_RULES: Rules = {
    [OfferFields.COLUMN_ACTION_FLAGS]: 'required|array',
    [OfferFields.COLUMN_CLASSIFICATION]: 'required|string',
    [OfferFields.COLUMN_IS_ENABLED]: 'required|boolean',
    [OfferFields.COLUMN_LAST_UPDATE]: 'required|string',
    [OfferFields.COLUMN_NAME]: 'required|string',
    [OfferFields.COLUMN_PRICE_BAND]: 'required|array',
    [OfferFields.COLUMN_ARROW_SUB_CATEGORIES]: 'required',
  };

  readonly #actionFlags: ActionFlagsFindResult;
  readonly #classification: string;
  readonly #isEnabled: boolean;
  readonly #lastUpdate: string;
  readonly #name: string;
  readonly #priceBand: PriceBandFindResult;
  readonly #arrowSubCategories: Array<string> | null;

  protected constructor(data: OfferData) {
    super(data);

    const actionFlags: ActionFlagsData = {
      [ActionFlagsFields.COLUMN_IS_AUTO_RENEW]:
        data[OfferFields.COLUMN_ACTION_FLAGS][
          ActionFlagsFields.COLUMN_IS_AUTO_RENEW
        ],
      [ActionFlagsFields.COLUMN_MANUAL_PROVISIONING]:
        data[OfferFields.COLUMN_ACTION_FLAGS][
          ActionFlagsFields.COLUMN_MANUAL_PROVISIONING
        ],
      [ActionFlagsFields.COLUMN_RENEWAL_SKU]:
        data[OfferFields.COLUMN_ACTION_FLAGS][
          ActionFlagsFields.COLUMN_RENEWAL_SKU
        ],
    };
    this.#actionFlags = new ActionFlagsFindResult(actionFlags);
    this.#classification = data[OfferFields.COLUMN_CLASSIFICATION];
    this.#isEnabled = data[OfferFields.COLUMN_IS_ENABLED];
    this.#lastUpdate = data[OfferFields.COLUMN_LAST_UPDATE];
    this.#name = data[OfferFields.COLUMN_NAME];
    const priceBand: PriceBandData = {
      [PriceBandFields.COLUMN_ACTION_FLAGS]:
        data[OfferFields.COLUMN_PRICE_BAND][
          PriceBandFields.COLUMN_ACTION_FLAGS
        ],
      [PriceBandFields.COLUMN_BILLING]:
        data[OfferFields.COLUMN_PRICE_BAND][PriceBandFields.COLUMN_BILLING],
      [PriceBandFields.COLUMN_CURRENCY]:
        data[OfferFields.COLUMN_PRICE_BAND][PriceBandFields.COLUMN_CURRENCY],
      [PriceBandFields.COLUMN_IS_ENABLED]:
        data[OfferFields.COLUMN_PRICE_BAND][PriceBandFields.COLUMN_IS_ENABLED],
      [PriceBandFields.COLUMN_MARKETPLACE]:
        data[OfferFields.COLUMN_PRICE_BAND][PriceBandFields.COLUMN_MARKETPLACE],
      [PriceBandFields.COLUMN_PRICES]:
        data[OfferFields.COLUMN_PRICE_BAND][PriceBandFields.COLUMN_PRICES],
      [PriceBandFields.COLUMN_SALE_CONSTRAINTS]:
        data[OfferFields.COLUMN_PRICE_BAND][
          PriceBandFields.COLUMN_SALE_CONSTRAINTS
        ],
      [PriceBandFields.COLUMN_IDENTIFIERS]:
        data[OfferFields.COLUMN_PRICE_BAND][PriceBandFields.COLUMN_IDENTIFIERS],
    };
    this.#priceBand = new PriceBandFindResult(priceBand);
    this.#arrowSubCategories = data[OfferFields.COLUMN_ARROW_SUB_CATEGORIES];
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

  public toJSON(): OfferData {
    return {
      [OfferFields.COLUMN_ACTION_FLAGS]: this.actionFlags.toJSON(),
      [OfferFields.COLUMN_CLASSIFICATION]: this.classification,
      [OfferFields.COLUMN_IS_ENABLED]: this.isEnabled,
      [OfferFields.COLUMN_LAST_UPDATE]: this.lastUpdate,
      [OfferFields.COLUMN_NAME]: this.name,
      [OfferFields.COLUMN_PRICE_BAND]: this.priceBand.toJSON(),
      [OfferFields.COLUMN_ARROW_SUB_CATEGORIES]: this.arrowSubCategories,
    };
  }
}
