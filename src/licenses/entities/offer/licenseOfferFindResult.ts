import { AbstractEntity } from '../../../abstractEntity';

/**
 * Fields that can be present in License offer response.
 */
export enum LicenseOfferFields {
  COLUMN_ACTION_FLAGS = 'actionFlags',
  COLUMN_BILLING = 'billing',
  COLUMN_BUY = 'buy',
  COLUMN_MARKETPLACE = 'marketplace',
  COLUMN_CAN_BE_CANCELLED = 'canBeCancelled',
  COLUMN_CAN_BE_REACTIVATED = 'canBeReactivated',
  COLUMN_CAN_BE_SUSPENDED = 'canBeSuspended',
  COLUMN_CAN_DECREASE_SEATS = 'canDecreaseSeats',
  COLUMN_CAN_INCREASE_SEATS = 'canIncreaseSeats',
  COLUMN_CURRENCY = 'currency',
  COLUMN_CYCLE = 'cycle',
  COLUMN_IS_AUTO_RENEW = 'isAutoRenew',
  COLUMN_IS_ENABLED = 'isEnabled',
  COLUMN_IS_MANUAL_PROVISIONING = 'isManualProvisioning',
  COLUMN_LAST_UPDATE = 'lastUpdate',
  COLUMN_NAME = 'name',
  COLUMN_PRICE_BAND = 'priceBand',
  COLUMN_PRICES = 'prices',
  COLUMN_PUBLIC = 'public',
  COLUMN_SELL = 'sell',
  COLUMN_TYPE = 'type',
  COLUMN_TERM = 'term',
}

/**
 * License data fields and their corresponding types
 */
export type LicenseOfferFindResultData = {
  [LicenseOfferFields.COLUMN_ACTION_FLAGS]: {
    [LicenseOfferFields.COLUMN_IS_AUTO_RENEW]: boolean;
    [LicenseOfferFields.COLUMN_IS_MANUAL_PROVISIONING]: boolean;
  };
  [LicenseOfferFields.COLUMN_IS_ENABLED]: boolean;
  [LicenseOfferFields.COLUMN_LAST_UPDATE]: string;
  [LicenseOfferFields.COLUMN_NAME]: string;
  [LicenseOfferFields.COLUMN_PRICE_BAND]: {
    [LicenseOfferFields.COLUMN_ACTION_FLAGS]: {
      [LicenseOfferFields.COLUMN_CAN_BE_CANCELLED]: boolean;
      [LicenseOfferFields.COLUMN_CAN_BE_REACTIVATED]: boolean;
      [LicenseOfferFields.COLUMN_CAN_BE_SUSPENDED]: boolean;
      [LicenseOfferFields.COLUMN_CAN_DECREASE_SEATS]: boolean;
      [LicenseOfferFields.COLUMN_CAN_INCREASE_SEATS]: boolean;
    };
    [LicenseOfferFields.COLUMN_MARKETPLACE]: string;
    [LicenseOfferFields.COLUMN_IS_ENABLED]: boolean;
    [LicenseOfferFields.COLUMN_CURRENCY]: string;
    [LicenseOfferFields.COLUMN_PRICES]: {
      [LicenseOfferFields.COLUMN_PUBLIC]: number;
      [LicenseOfferFields.COLUMN_BUY]: number;
      [LicenseOfferFields.COLUMN_SELL]: number;
    };
    [LicenseOfferFields.COLUMN_BILLING]: {
      [LicenseOfferFields.COLUMN_TERM]: number;
      [LicenseOfferFields.COLUMN_TYPE]: string;
      [LicenseOfferFields.COLUMN_CYCLE]: number;
    };
  };
};

/**
 * Class of a License Offer entity.
 */
export class LicenseOfferFindResult extends AbstractEntity<LicenseOfferFindResultData> {
  protected VALIDATION_RULES = {
    // General
    [LicenseOfferFields.COLUMN_IS_ENABLED]: 'required|boolean',
    [LicenseOfferFields.COLUMN_LAST_UPDATE]: 'required',
    [LicenseOfferFields.COLUMN_NAME]: 'required',
    // Action flags
    [LicenseOfferFields.COLUMN_ACTION_FLAGS]: 'required|object',
    [`${LicenseOfferFields.COLUMN_ACTION_FLAGS}.${LicenseOfferFields.COLUMN_IS_AUTO_RENEW}`]: 'required|boolean',
    [`${LicenseOfferFields.COLUMN_ACTION_FLAGS}.${LicenseOfferFields.COLUMN_IS_MANUAL_PROVISIONING}`]: 'required|boolean',
    // Price band
    [LicenseOfferFields.COLUMN_PRICE_BAND]: 'required|object',
    [LicenseOfferFields.COLUMN_MARKETPLACE]: 'required',
    [LicenseOfferFields.COLUMN_IS_ENABLED]: 'required|boolean',
    [LicenseOfferFields.COLUMN_CURRENCY]: 'required',
    // Price band action flags
    [`${LicenseOfferFields.COLUMN_PRICE_BAND}.${LicenseOfferFields.COLUMN_ACTION_FLAGS}`]: 'required|object',
    [`${LicenseOfferFields.COLUMN_PRICE_BAND}.${LicenseOfferFields.COLUMN_ACTION_FLAGS}.${LicenseOfferFields.COLUMN_CAN_BE_CANCELLED}`]: 'required|object',
    [`${LicenseOfferFields.COLUMN_PRICE_BAND}.${LicenseOfferFields.COLUMN_ACTION_FLAGS}.${LicenseOfferFields.COLUMN_CAN_BE_REACTIVATED}`]: 'required|object',
    [`${LicenseOfferFields.COLUMN_PRICE_BAND}.${LicenseOfferFields.COLUMN_ACTION_FLAGS}.${LicenseOfferFields.COLUMN_CAN_BE_SUSPENDED}`]: 'required|object',
    [`${LicenseOfferFields.COLUMN_PRICE_BAND}.${LicenseOfferFields.COLUMN_ACTION_FLAGS}.${LicenseOfferFields.COLUMN_CAN_DECREASE_SEATS}`]: 'required|object',
    [`${LicenseOfferFields.COLUMN_PRICE_BAND}.${LicenseOfferFields.COLUMN_ACTION_FLAGS}.${LicenseOfferFields.COLUMN_CAN_INCREASE_SEATS}`]: 'required|object',
    // Price band prices
    [`${LicenseOfferFields.COLUMN_PRICE_BAND}.${LicenseOfferFields.COLUMN_PRICES}`]: 'required|object',
    [`${LicenseOfferFields.COLUMN_PRICE_BAND}.${LicenseOfferFields.COLUMN_PRICES}.${LicenseOfferFields.COLUMN_PUBLIC}`]: 'required|numeric',
    [`${LicenseOfferFields.COLUMN_PRICE_BAND}.${LicenseOfferFields.COLUMN_PRICES}.${LicenseOfferFields.COLUMN_BUY}`]: 'required|numeric',
    [`${LicenseOfferFields.COLUMN_PRICE_BAND}.${LicenseOfferFields.COLUMN_PRICES}.${LicenseOfferFields.COLUMN_SELL}`]: 'required|numeric',
    // Price band billing
    [`${LicenseOfferFields.COLUMN_PRICE_BAND}.${LicenseOfferFields.COLUMN_BILLING}`]: 'required|object',
    [`${LicenseOfferFields.COLUMN_PRICE_BAND}.${LicenseOfferFields.COLUMN_BILLING}.${LicenseOfferFields.COLUMN_TERM}`]: 'required|numeric',
    [`${LicenseOfferFields.COLUMN_PRICE_BAND}.${LicenseOfferFields.COLUMN_BILLING}.${LicenseOfferFields.COLUMN_TYPE}`]: 'required',
    [`${LicenseOfferFields.COLUMN_PRICE_BAND}.${LicenseOfferFields.COLUMN_BILLING}.${LicenseOfferFields.COLUMN_CYCLE}`]: 'required|numeric',
  };

  readonly #isAutoRenew: boolean;
  readonly #isManualProvisioning: boolean;
  readonly #isEnabled: boolean;
  readonly #lastUpdate: string;
  readonly #name: string;
  readonly #priceBandCanIncreaseSeats: boolean;
  readonly #priceBandCanBeCancelled: boolean;
  readonly #priceBandCanBeReactivated: boolean;
  readonly #priceBandCanDecreaseSeats: boolean;
  readonly #priceBandCanBeSuspended: boolean;
  readonly #priceBandMarketplace: string;
  readonly #priceBandIsEnabled: boolean;
  readonly #priceBandCurrency: string;
  readonly #priceBandPricePublic: number;
  readonly #priceBandPriceBuy: number;
  readonly #priceBandPriceSell: number;
  readonly #priceBandBillingTerm: number;
  readonly #priceBandBillingType: string;
  readonly #priceBandBillingCycle: number;

  /**
   * LicenseOfferFindResult constructor.
   *
   * @param data - License offer data to construct the entity with.
   */
  constructor(data: LicenseOfferFindResultData) {
    super(data);

    this.#isAutoRenew =
      data[LicenseOfferFields.COLUMN_ACTION_FLAGS][
        LicenseOfferFields.COLUMN_IS_AUTO_RENEW
      ];
    this.#isManualProvisioning =
      data[LicenseOfferFields.COLUMN_ACTION_FLAGS][
        LicenseOfferFields.COLUMN_IS_MANUAL_PROVISIONING
      ];
    this.#isEnabled = data[LicenseOfferFields.COLUMN_IS_ENABLED];
    this.#lastUpdate = data[LicenseOfferFields.COLUMN_LAST_UPDATE];
    this.#name = data[LicenseOfferFields.COLUMN_NAME];
    this.#priceBandCanIncreaseSeats =
      data[LicenseOfferFields.COLUMN_PRICE_BAND][
        LicenseOfferFields.COLUMN_ACTION_FLAGS
      ][LicenseOfferFields.COLUMN_CAN_INCREASE_SEATS];
    this.#priceBandCanBeCancelled =
      data[LicenseOfferFields.COLUMN_PRICE_BAND][
        LicenseOfferFields.COLUMN_ACTION_FLAGS
      ][LicenseOfferFields.COLUMN_CAN_BE_CANCELLED];
    this.#priceBandCanBeReactivated =
      data[LicenseOfferFields.COLUMN_PRICE_BAND][
        LicenseOfferFields.COLUMN_ACTION_FLAGS
      ][LicenseOfferFields.COLUMN_CAN_BE_REACTIVATED];
    this.#priceBandCanDecreaseSeats =
      data[LicenseOfferFields.COLUMN_PRICE_BAND][
        LicenseOfferFields.COLUMN_ACTION_FLAGS
      ][LicenseOfferFields.COLUMN_CAN_DECREASE_SEATS];
    this.#priceBandCanBeSuspended =
      data[LicenseOfferFields.COLUMN_PRICE_BAND][
        LicenseOfferFields.COLUMN_ACTION_FLAGS
      ][LicenseOfferFields.COLUMN_CAN_BE_SUSPENDED];
    this.#priceBandMarketplace =
      data[LicenseOfferFields.COLUMN_PRICE_BAND][
        LicenseOfferFields.COLUMN_MARKETPLACE
      ];
    this.#priceBandIsEnabled =
      data[LicenseOfferFields.COLUMN_PRICE_BAND][
        LicenseOfferFields.COLUMN_IS_ENABLED
      ];
    this.#priceBandCurrency =
      data[LicenseOfferFields.COLUMN_PRICE_BAND][
        LicenseOfferFields.COLUMN_CURRENCY
      ];
    this.#priceBandPricePublic =
      data[LicenseOfferFields.COLUMN_PRICE_BAND][
        LicenseOfferFields.COLUMN_PRICES
      ][LicenseOfferFields.COLUMN_PUBLIC];
    this.#priceBandPriceBuy =
      data[LicenseOfferFields.COLUMN_PRICE_BAND][
        LicenseOfferFields.COLUMN_PRICES
      ][LicenseOfferFields.COLUMN_BUY];
    this.#priceBandPriceSell =
      data[LicenseOfferFields.COLUMN_PRICE_BAND][
        LicenseOfferFields.COLUMN_PRICES
      ][LicenseOfferFields.COLUMN_SELL];
    this.#priceBandBillingTerm =
      data[LicenseOfferFields.COLUMN_PRICE_BAND][
        LicenseOfferFields.COLUMN_BILLING
      ][LicenseOfferFields.COLUMN_TERM];
    this.#priceBandBillingType =
      data[LicenseOfferFields.COLUMN_PRICE_BAND][
        LicenseOfferFields.COLUMN_BILLING
      ][LicenseOfferFields.COLUMN_TYPE];
    this.#priceBandBillingCycle =
      data[LicenseOfferFields.COLUMN_PRICE_BAND][
        LicenseOfferFields.COLUMN_BILLING
      ][LicenseOfferFields.COLUMN_CYCLE];
  }

  public get isAutoRenew(): boolean {
    return this.#isAutoRenew;
  }

  public get isManualProvisioning(): boolean {
    return this.#isManualProvisioning;
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

  public get priceBandCanIncreaseSeats(): boolean {
    return this.#priceBandCanIncreaseSeats;
  }

  public get priceBandCanBeCancelled(): boolean {
    return this.#priceBandCanBeCancelled;
  }

  public get priceBandCanBeReactivated(): boolean {
    return this.#priceBandCanBeReactivated;
  }

  public get priceBandCanDecreaseSeats(): boolean {
    return this.#priceBandCanDecreaseSeats;
  }

  public get priceBandCanBeSuspended(): boolean {
    return this.#priceBandCanBeSuspended;
  }

  public get priceBandMarketplace(): string {
    return this.#priceBandMarketplace;
  }

  public get priceBandIsEnabled(): boolean {
    return this.#priceBandIsEnabled;
  }

  public get priceBandCurrency(): string {
    return this.#priceBandCurrency;
  }

  public get priceBandPricePublic(): number {
    return this.#priceBandPricePublic;
  }

  public get priceBandPriceBuy(): number {
    return this.#priceBandPriceBuy;
  }

  public get priceBandPriceSell(): number {
    return this.#priceBandPriceSell;
  }

  public get priceBandBillingTerm(): number {
    return this.#priceBandBillingTerm;
  }

  public get priceBandBillingType(): string {
    return this.#priceBandBillingType;
  }

  public get priceBandBillingCycle(): number {
    return this.#priceBandBillingCycle;
  }

  /**
   * Plain JSON object representation of the license entity.
   * @returns {@link LicenseData}
   */
  public toJSON(): LicenseOfferFindResultData {
    return {
      [LicenseOfferFields.COLUMN_ACTION_FLAGS]: {
        [LicenseOfferFields.COLUMN_IS_AUTO_RENEW]: this.isAutoRenew,
        [LicenseOfferFields.COLUMN_IS_MANUAL_PROVISIONING]: this
          .isManualProvisioning,
      },
      [LicenseOfferFields.COLUMN_IS_ENABLED]: this.isEnabled,
      [LicenseOfferFields.COLUMN_LAST_UPDATE]: this.lastUpdate,
      [LicenseOfferFields.COLUMN_NAME]: this.name,
      [LicenseOfferFields.COLUMN_PRICE_BAND]: {
        [LicenseOfferFields.COLUMN_ACTION_FLAGS]: {
          [LicenseOfferFields.COLUMN_CAN_BE_CANCELLED]: this
            .priceBandCanBeCancelled,
          [LicenseOfferFields.COLUMN_CAN_BE_REACTIVATED]: this
            .priceBandCanBeReactivated,
          [LicenseOfferFields.COLUMN_CAN_BE_SUSPENDED]: this
            .priceBandCanBeSuspended,
          [LicenseOfferFields.COLUMN_CAN_DECREASE_SEATS]: this
            .priceBandCanDecreaseSeats,
          [LicenseOfferFields.COLUMN_CAN_INCREASE_SEATS]: this
            .priceBandCanIncreaseSeats,
        },
        [LicenseOfferFields.COLUMN_MARKETPLACE]: this.priceBandMarketplace,
        [LicenseOfferFields.COLUMN_IS_ENABLED]: this.priceBandIsEnabled,
        [LicenseOfferFields.COLUMN_CURRENCY]: this.priceBandCurrency,
        [LicenseOfferFields.COLUMN_PRICES]: {
          [LicenseOfferFields.COLUMN_PUBLIC]: this.priceBandPricePublic,
          [LicenseOfferFields.COLUMN_BUY]: this.priceBandPriceBuy,
          [LicenseOfferFields.COLUMN_SELL]: this.priceBandPriceSell,
        },
        [LicenseOfferFields.COLUMN_BILLING]: {
          [LicenseOfferFields.COLUMN_TERM]: this.priceBandBillingTerm,
          [LicenseOfferFields.COLUMN_TYPE]: this.priceBandBillingType,
          [LicenseOfferFields.COLUMN_CYCLE]: this.priceBandBillingCycle,
        },
      },
    };
  }
}
