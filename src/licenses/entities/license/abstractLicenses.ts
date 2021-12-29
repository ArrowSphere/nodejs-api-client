import { AbstractEntity } from '../../../abstractEntity';
import { ActiveSeatsFindResult } from '../../../common/entities/activeSeatsFindResult';
import {
  ActiveSeatsData,
  ActiveSeatsDataFiltersParameters,
  ActiveSeatsDataKeywords,
  ActiveSeatsDataSortParameters,
  ActiveSeatsFields,
} from '../../../common/entities/abstractActiveSeats';
import { ConfigFindResult } from './configFindResult';
import {
  ConfigData,
  ConfigDataFiltersParameters,
  ConfigDataKeywords,
  ConfigDataSortParameters,
  ConfigFields,
} from './abstractConfig';
import { WarningsFindResult } from './warningsFindResult';
import {
  WarningData,
  WarningDataFiltersParameters,
  WarningDataKeywords,
  WarningDataSortParameters,
  WarningFields,
} from './abstractWarning';
import { PriceFindResult } from './priceFindResult';
import {
  PriceData,
  PriceDataFiltersParameters,
  PriceDataKeywords,
  PriceDataSortParameters,
  PriceFields,
} from './abstractPrice';
import { Rules } from 'validatorjs';
import {
  DataKeywords,
  FiltersParameters,
  SortParameters,
} from '../../licensesClient';

/**
 * Fields that can be present in License response and request data.
 */
export enum LicensesFields {
  COLUMN_ACCEPT_EULA = 'accept_eula',
  COLUMN_ACTIVE_SEATS = 'active_seats',
  COLUMN_AUTO_RENEW = 'auto_renew',
  COLUMN_BASE_SEAT = 'base_seat',
  COLUMN_CATEGORY = 'category',
  COLUMN_CLOUD_TYPE = 'cloud_type',
  COLUMN_CONFIGS = 'configs',
  COLUMN_WARNINGS = 'warnings',
  COLUMN_CUSTOMER_NAME = 'customer_name',
  COLUMN_CUSTOMER_REF = 'customer_ref',
  COLUMN_END_DATE = 'end_date',
  COLUMN_FRIENDLY_NAME = 'friendly_name',
  COLUMN_ID = 'id',
  COLUMN_IS_ENABLED = 'isEnabled',
  COLUMN_LAST_UPDATE = 'lastUpdate',
  COLUMN_MARKETPLACE = 'marketplace',
  COLUMN_MESSAGE = 'message',
  COLUMN_OFFER = 'offer',
  COLUMN_PARENT_LINE_ID = 'parent_line_id',
  COLUMN_PARENT_ORDER_REF = 'parent_order_ref',
  COLUMN_PARTNER_REF = 'partner_ref',
  COLUMN_PERIODICITY = 'periodicity',
  COLUMN_PRICE = 'price',
  COLUMN_RESELLER_NAME = 'reseller_name',
  COLUMN_RESELLER_REF = 'reseller_ref',
  COLUMN_SEAT = 'seat',
  COLUMN_SERVICE_REF = 'service_ref',
  COLUMN_SKU = 'sku',
  COLUMN_START_DATE = 'start_date',
  COLUMN_STATUS_CODE = 'status_code',
  COLUMN_STATUS_LABEL = 'status_label',
  COLUMN_SUBSCRIPTION_ID = 'subscription_id',
  COLUMN_SUBSIDIARY_NAME = 'subsidiary_name',
  COLUMN_TERM = 'term',
  COLUMN_TRIAL = 'trial',
  COLUMN_TYPE = 'type',
  COLUMN_UOM = 'uom',
  COLUMN_VENDOR_CODE = 'vendor_code',
  COLUMN_VENDOR_NAME = 'vendor_name',
  COLUMN_VENDOR_SUBSCRIPTION_ID = 'vendor_subscription_id',
}

/**
 * License data fields and their corresponding types
 */
export type LicensesData = {
  [LicensesFields.COLUMN_ACCEPT_EULA]: boolean;
  [LicensesFields.COLUMN_ACTIVE_SEATS]: ActiveSeatsData;
  [LicensesFields.COLUMN_AUTO_RENEW]: boolean;
  [LicensesFields.COLUMN_BASE_SEAT]: number;
  [LicensesFields.COLUMN_CATEGORY]: string;
  [LicensesFields.COLUMN_CLOUD_TYPE]: string;
  [LicensesFields.COLUMN_CONFIGS]: ConfigData | null | undefined;
  [LicensesFields.COLUMN_WARNINGS]: WarningData | null | undefined;
  [LicensesFields.COLUMN_CUSTOMER_NAME]: string;
  [LicensesFields.COLUMN_CUSTOMER_REF]: string;
  [LicensesFields.COLUMN_END_DATE]: string;
  [LicensesFields.COLUMN_FRIENDLY_NAME]: string | null;
  [LicensesFields.COLUMN_ID]: number;
  [LicensesFields.COLUMN_IS_ENABLED]: boolean;
  [LicensesFields.COLUMN_LAST_UPDATE]: string | null;
  [LicensesFields.COLUMN_MARKETPLACE]: string;
  [LicensesFields.COLUMN_MESSAGE]: string;
  [LicensesFields.COLUMN_OFFER]: string;
  [LicensesFields.COLUMN_PARENT_LINE_ID]: number | null;
  [LicensesFields.COLUMN_PARENT_ORDER_REF]: string | null;
  [LicensesFields.COLUMN_PARTNER_REF]: string;
  [LicensesFields.COLUMN_PERIODICITY]: number;
  [LicensesFields.COLUMN_PRICE]: PriceData;
  [LicensesFields.COLUMN_RESELLER_NAME]: string;
  [LicensesFields.COLUMN_RESELLER_REF]: string;
  [LicensesFields.COLUMN_SEAT]: number;
  [LicensesFields.COLUMN_SERVICE_REF]: string;
  [LicensesFields.COLUMN_SKU]: string;
  [LicensesFields.COLUMN_START_DATE]: string;
  [LicensesFields.COLUMN_STATUS_CODE]: number;
  [LicensesFields.COLUMN_STATUS_LABEL]: string;
  [LicensesFields.COLUMN_SUBSCRIPTION_ID]: string;
  [LicensesFields.COLUMN_SUBSIDIARY_NAME]: string;
  [LicensesFields.COLUMN_TERM]: number;
  [LicensesFields.COLUMN_TRIAL]: boolean;
  [LicensesFields.COLUMN_TYPE]: string;
  [LicensesFields.COLUMN_UOM]: string;
  [LicensesFields.COLUMN_VENDOR_CODE]: string;
  [LicensesFields.COLUMN_VENDOR_NAME]: string;
  [LicensesFields.COLUMN_VENDOR_SUBSCRIPTION_ID]: string | null;
};

export type LicencesDataKeywords = {
  [LicensesFields.COLUMN_ACCEPT_EULA]?: DataKeywords;
  [LicensesFields.COLUMN_ACTIVE_SEATS]?: ActiveSeatsDataKeywords;
  [LicensesFields.COLUMN_AUTO_RENEW]?: DataKeywords;
  [LicensesFields.COLUMN_BASE_SEAT]?: DataKeywords;
  [LicensesFields.COLUMN_CATEGORY]?: DataKeywords;
  [LicensesFields.COLUMN_CLOUD_TYPE]?: DataKeywords;
  [LicensesFields.COLUMN_CONFIGS]?: ConfigDataKeywords;
  [LicensesFields.COLUMN_WARNINGS]?: WarningDataKeywords;
  [LicensesFields.COLUMN_CUSTOMER_NAME]?: DataKeywords;
  [LicensesFields.COLUMN_CUSTOMER_REF]?: DataKeywords;
  [LicensesFields.COLUMN_END_DATE]?: DataKeywords;
  [LicensesFields.COLUMN_FRIENDLY_NAME]?: DataKeywords;
  [LicensesFields.COLUMN_ID]?: DataKeywords;
  [LicensesFields.COLUMN_IS_ENABLED]?: DataKeywords;
  [LicensesFields.COLUMN_LAST_UPDATE]?: DataKeywords;
  [LicensesFields.COLUMN_MARKETPLACE]?: DataKeywords;
  [LicensesFields.COLUMN_MESSAGE]?: DataKeywords;
  [LicensesFields.COLUMN_OFFER]?: DataKeywords;
  [LicensesFields.COLUMN_PARENT_LINE_ID]?: DataKeywords;
  [LicensesFields.COLUMN_PARENT_ORDER_REF]?: DataKeywords;
  [LicensesFields.COLUMN_PARTNER_REF]?: DataKeywords;
  [LicensesFields.COLUMN_PERIODICITY]?: DataKeywords;
  [LicensesFields.COLUMN_PRICE]?: PriceDataKeywords;
  [LicensesFields.COLUMN_RESELLER_NAME]?: DataKeywords;
  [LicensesFields.COLUMN_RESELLER_REF]?: DataKeywords;
  [LicensesFields.COLUMN_SEAT]?: DataKeywords;
  [LicensesFields.COLUMN_SERVICE_REF]?: DataKeywords;
  [LicensesFields.COLUMN_SKU]?: DataKeywords;
  [LicensesFields.COLUMN_START_DATE]?: DataKeywords;
  [LicensesFields.COLUMN_STATUS_CODE]?: DataKeywords;
  [LicensesFields.COLUMN_STATUS_LABEL]?: DataKeywords;
  [LicensesFields.COLUMN_SUBSCRIPTION_ID]?: DataKeywords;
  [LicensesFields.COLUMN_SUBSIDIARY_NAME]?: DataKeywords;
  [LicensesFields.COLUMN_TERM]?: DataKeywords;
  [LicensesFields.COLUMN_TRIAL]?: DataKeywords;
  [LicensesFields.COLUMN_TYPE]?: DataKeywords;
  [LicensesFields.COLUMN_UOM]?: DataKeywords;
  [LicensesFields.COLUMN_VENDOR_CODE]?: DataKeywords;
  [LicensesFields.COLUMN_VENDOR_NAME]?: DataKeywords;
  [LicensesFields.COLUMN_VENDOR_SUBSCRIPTION_ID]?: DataKeywords;
};

export type LicencesDataSortParameters = {
  [LicensesFields.COLUMN_ACCEPT_EULA]?: SortParameters;
  [LicensesFields.COLUMN_ACTIVE_SEATS]?: ActiveSeatsDataSortParameters;
  [LicensesFields.COLUMN_AUTO_RENEW]?: SortParameters;
  [LicensesFields.COLUMN_BASE_SEAT]?: SortParameters;
  [LicensesFields.COLUMN_CATEGORY]?: SortParameters;
  [LicensesFields.COLUMN_CLOUD_TYPE]?: SortParameters;
  [LicensesFields.COLUMN_CONFIGS]?: ConfigDataSortParameters;
  [LicensesFields.COLUMN_WARNINGS]?: WarningDataSortParameters;
  [LicensesFields.COLUMN_CUSTOMER_NAME]?: SortParameters;
  [LicensesFields.COLUMN_CUSTOMER_REF]?: SortParameters;
  [LicensesFields.COLUMN_END_DATE]?: SortParameters;
  [LicensesFields.COLUMN_FRIENDLY_NAME]?: SortParameters;
  [LicensesFields.COLUMN_ID]?: SortParameters;
  [LicensesFields.COLUMN_IS_ENABLED]?: SortParameters;
  [LicensesFields.COLUMN_LAST_UPDATE]?: SortParameters;
  [LicensesFields.COLUMN_MARKETPLACE]?: SortParameters;
  [LicensesFields.COLUMN_MESSAGE]?: SortParameters;
  [LicensesFields.COLUMN_OFFER]?: SortParameters;
  [LicensesFields.COLUMN_PARENT_LINE_ID]?: SortParameters;
  [LicensesFields.COLUMN_PARENT_ORDER_REF]?: SortParameters;
  [LicensesFields.COLUMN_PARTNER_REF]?: SortParameters;
  [LicensesFields.COLUMN_PERIODICITY]?: SortParameters;
  [LicensesFields.COLUMN_PRICE]?: PriceDataSortParameters;
  [LicensesFields.COLUMN_RESELLER_NAME]?: SortParameters;
  [LicensesFields.COLUMN_RESELLER_REF]?: SortParameters;
  [LicensesFields.COLUMN_SEAT]?: SortParameters;
  [LicensesFields.COLUMN_SERVICE_REF]?: SortParameters;
  [LicensesFields.COLUMN_SKU]?: SortParameters;
  [LicensesFields.COLUMN_START_DATE]?: SortParameters;
  [LicensesFields.COLUMN_STATUS_CODE]?: SortParameters;
  [LicensesFields.COLUMN_STATUS_LABEL]?: SortParameters;
  [LicensesFields.COLUMN_SUBSCRIPTION_ID]?: SortParameters;
  [LicensesFields.COLUMN_SUBSIDIARY_NAME]?: SortParameters;
  [LicensesFields.COLUMN_TERM]?: SortParameters;
  [LicensesFields.COLUMN_TRIAL]?: SortParameters;
  [LicensesFields.COLUMN_TYPE]?: SortParameters;
  [LicensesFields.COLUMN_UOM]?: SortParameters;
  [LicensesFields.COLUMN_VENDOR_CODE]?: SortParameters;
  [LicensesFields.COLUMN_VENDOR_NAME]?: SortParameters;
  [LicensesFields.COLUMN_VENDOR_SUBSCRIPTION_ID]?: SortParameters;
};

export type LicencesDataFiltersParameters = {
  [LicensesFields.COLUMN_ACCEPT_EULA]?: FiltersParameters;
  [LicensesFields.COLUMN_ACTIVE_SEATS]?: ActiveSeatsDataFiltersParameters;
  [LicensesFields.COLUMN_AUTO_RENEW]?: FiltersParameters;
  [LicensesFields.COLUMN_BASE_SEAT]?: FiltersParameters;
  [LicensesFields.COLUMN_CATEGORY]?: FiltersParameters;
  [LicensesFields.COLUMN_CLOUD_TYPE]?: FiltersParameters;
  [LicensesFields.COLUMN_CONFIGS]?: ConfigDataFiltersParameters;
  [LicensesFields.COLUMN_WARNINGS]?: WarningDataFiltersParameters;
  [LicensesFields.COLUMN_CUSTOMER_NAME]?: FiltersParameters;
  [LicensesFields.COLUMN_CUSTOMER_REF]?: FiltersParameters;
  [LicensesFields.COLUMN_END_DATE]?: FiltersParameters;
  [LicensesFields.COLUMN_FRIENDLY_NAME]?: FiltersParameters;
  [LicensesFields.COLUMN_ID]?: FiltersParameters;
  [LicensesFields.COLUMN_IS_ENABLED]?: FiltersParameters;
  [LicensesFields.COLUMN_LAST_UPDATE]?: FiltersParameters;
  [LicensesFields.COLUMN_MARKETPLACE]?: FiltersParameters;
  [LicensesFields.COLUMN_MESSAGE]?: FiltersParameters;
  [LicensesFields.COLUMN_OFFER]?: FiltersParameters;
  [LicensesFields.COLUMN_PARENT_LINE_ID]?: FiltersParameters;
  [LicensesFields.COLUMN_PARENT_ORDER_REF]?: FiltersParameters;
  [LicensesFields.COLUMN_PARTNER_REF]?: FiltersParameters;
  [LicensesFields.COLUMN_PERIODICITY]?: FiltersParameters;
  [LicensesFields.COLUMN_PRICE]?: PriceDataFiltersParameters;
  [LicensesFields.COLUMN_RESELLER_NAME]?: FiltersParameters;
  [LicensesFields.COLUMN_RESELLER_REF]?: FiltersParameters;
  [LicensesFields.COLUMN_SEAT]?: FiltersParameters;
  [LicensesFields.COLUMN_SERVICE_REF]?: FiltersParameters;
  [LicensesFields.COLUMN_SKU]?: FiltersParameters;
  [LicensesFields.COLUMN_START_DATE]?: FiltersParameters;
  [LicensesFields.COLUMN_STATUS_CODE]?: FiltersParameters;
  [LicensesFields.COLUMN_STATUS_LABEL]?: FiltersParameters;
  [LicensesFields.COLUMN_SUBSCRIPTION_ID]?: FiltersParameters;
  [LicensesFields.COLUMN_SUBSIDIARY_NAME]?: FiltersParameters;
  [LicensesFields.COLUMN_TERM]?: FiltersParameters;
  [LicensesFields.COLUMN_TRIAL]?: FiltersParameters;
  [LicensesFields.COLUMN_TYPE]?: FiltersParameters;
  [LicensesFields.COLUMN_UOM]?: FiltersParameters;
  [LicensesFields.COLUMN_VENDOR_CODE]?: FiltersParameters;
  [LicensesFields.COLUMN_VENDOR_NAME]?: FiltersParameters;
  [LicensesFields.COLUMN_VENDOR_SUBSCRIPTION_ID]?: FiltersParameters;
};

/**
 * Abstract class of a License entity. Can only be instantiated through a {@link LicensesFindResult} object class
 */
export abstract class AbstractLicenses extends AbstractEntity<LicensesData> {
  protected VALIDATION_RULES: Rules = {
    [LicensesFields.COLUMN_ACCEPT_EULA]: 'present|boolean',
    [LicensesFields.COLUMN_AUTO_RENEW]: 'present|boolean',
    [LicensesFields.COLUMN_BASE_SEAT]: 'present|numeric',
    [LicensesFields.COLUMN_CLOUD_TYPE]: 'required',
    [LicensesFields.COLUMN_ID]: 'required|numeric',
    [LicensesFields.COLUMN_OFFER]: 'required',
    [LicensesFields.COLUMN_PARTNER_REF]: 'required',
    [LicensesFields.COLUMN_PRICE]: 'required|object',
    [LicensesFields.COLUMN_SEAT]: 'present|numeric',
    [LicensesFields.COLUMN_SKU]: 'required',
    [LicensesFields.COLUMN_STATUS_CODE]: 'required|numeric',
    [LicensesFields.COLUMN_STATUS_LABEL]: 'required',
    [LicensesFields.COLUMN_SUBSCRIPTION_ID]: 'required',
    [LicensesFields.COLUMN_SUBSIDIARY_NAME]: 'required',
    [LicensesFields.COLUMN_TRIAL]: 'present|boolean',
    [LicensesFields.COLUMN_VENDOR_NAME]: 'required',
    [LicensesFields.COLUMN_VENDOR_CODE]: 'required',
  };

  readonly #acceptEula: boolean;
  readonly #activeSeats: ActiveSeatsFindResult;
  readonly #autoRenew: boolean;
  readonly #baseSeat: number;
  readonly #category: string;
  readonly #classification: string;
  readonly #configs?: ConfigFindResult | null | undefined;
  readonly #warnings?: WarningsFindResult | null | undefined;
  readonly #customerName: string;
  readonly #customerRef: string;
  readonly #endDate: string;
  readonly #friendlyName: string | null;
  readonly #id: number;
  readonly #enabled: boolean;
  readonly #lastUpdate: string | null;
  readonly #marketplace: string;
  readonly #message: string;
  readonly #offer: string;
  readonly #parentLineId: number | null;
  readonly #parentOrderRef: string | null;
  readonly #partnerRef: string;
  readonly #periodicity: number;
  readonly #price: PriceFindResult;
  readonly #resellerName: string;
  readonly #resellerRef: string;
  readonly #seat: number;
  readonly #serviceRef: string;
  readonly #sku: string;
  readonly #startDate: string;
  readonly #statusCode: number;
  readonly #statusLabel: string;
  readonly #subscriptionId: string;
  readonly #subsidiaryName: string;
  readonly #term: number;
  readonly #trial: boolean;
  readonly #type: string;
  readonly #uom: string;
  readonly #vendorCode: string;
  readonly #vendorName: string;
  readonly #vendorSubscriptionId: string | null;

  /**
   * AbstractLicenses constructor.
   *
   * @param data - License data to construct the entity with.
   */
  protected constructor(data: LicensesData) {
    super(data);

    this.#acceptEula = data[LicensesFields.COLUMN_ACCEPT_EULA];
    const activeSeats: ActiveSeatsData = {
      [ActiveSeatsFields.COLUMN_LAST_UPDATE]:
        data[LicensesFields.COLUMN_ACTIVE_SEATS][
          ActiveSeatsFields.COLUMN_LAST_UPDATE
        ],
      [ActiveSeatsFields.COLUMN_NUMBER]:
        data[LicensesFields.COLUMN_ACTIVE_SEATS][
          ActiveSeatsFields.COLUMN_NUMBER
        ],
    };
    this.#activeSeats = new ActiveSeatsFindResult(activeSeats);
    this.#autoRenew = data[LicensesFields.COLUMN_AUTO_RENEW];
    this.#baseSeat = data[LicensesFields.COLUMN_BASE_SEAT];
    this.#category = data[LicensesFields.COLUMN_CATEGORY];
    this.#classification = data[LicensesFields.COLUMN_CLOUD_TYPE];
    if (typeof data[LicensesFields.COLUMN_CONFIGS] !== 'undefined') {
      const configs: ConfigData = {
        [ConfigFields.COLUMN_NAME]:
          data?.[LicensesFields.COLUMN_CONFIGS]?.[ConfigFields.COLUMN_NAME],
        [ConfigFields.COLUMN_SCOPE]:
          data?.[LicensesFields.COLUMN_CONFIGS]?.[ConfigFields.COLUMN_SCOPE],
        [ConfigFields.COLUMN_STATE]:
          data?.[LicensesFields.COLUMN_CONFIGS]?.[ConfigFields.COLUMN_STATE],
      };
      this.#configs = new ConfigFindResult(configs);
    }
    if (typeof data[LicensesFields.COLUMN_WARNINGS] !== 'undefined') {
      const warnings: WarningData = {
        [WarningFields.COLUMN_KEY]:
          data?.[LicensesFields.COLUMN_WARNINGS]?.[WarningFields.COLUMN_KEY],
        [WarningFields.COLUMN_MESSAGE]:
          data?.[LicensesFields.COLUMN_WARNINGS]?.[
            WarningFields.COLUMN_MESSAGE
          ],
      };
      this.#warnings = new WarningsFindResult(warnings);
    }
    this.#customerName = data[LicensesFields.COLUMN_CUSTOMER_NAME];
    this.#customerRef = data[LicensesFields.COLUMN_CUSTOMER_REF];
    this.#endDate = data[LicensesFields.COLUMN_END_DATE];
    this.#friendlyName = data[LicensesFields.COLUMN_FRIENDLY_NAME];
    this.#id = data[LicensesFields.COLUMN_ID];
    this.#enabled = data[LicensesFields.COLUMN_IS_ENABLED];
    this.#lastUpdate = data[LicensesFields.COLUMN_LAST_UPDATE];
    this.#marketplace = data[LicensesFields.COLUMN_MARKETPLACE];
    this.#message = data[LicensesFields.COLUMN_MESSAGE];
    this.#offer = data[LicensesFields.COLUMN_OFFER];
    this.#parentLineId = data[LicensesFields.COLUMN_PARENT_LINE_ID];
    this.#parentOrderRef = data[LicensesFields.COLUMN_PARENT_ORDER_REF];
    this.#partnerRef = data[LicensesFields.COLUMN_PARTNER_REF];
    this.#periodicity = data[LicensesFields.COLUMN_PERIODICITY];
    const price = {
      [PriceFields.COLUMN_PRICE_BAND_ARROWSPHERE_SKU]:
        data[LicensesFields.COLUMN_PRICE][
          PriceFields.COLUMN_PRICE_BAND_ARROWSPHERE_SKU
        ],
      [PriceFields.COLUMN_BUY_PRICE]:
        data[LicensesFields.COLUMN_PRICE][PriceFields.COLUMN_BUY_PRICE],
      [PriceFields.COLUMN_SELL_PRICE]:
        data[LicensesFields.COLUMN_PRICE][PriceFields.COLUMN_SELL_PRICE],
      [PriceFields.COLUMN_LIST_PRICE]:
        data[LicensesFields.COLUMN_PRICE][PriceFields.COLUMN_LIST_PRICE],
      [PriceFields.COLUMN_CURRENCY]:
        data[LicensesFields.COLUMN_PRICE][PriceFields.COLUMN_CURRENCY],
    };
    this.#price = new PriceFindResult(price);
    this.#resellerName = data[LicensesFields.COLUMN_RESELLER_NAME];
    this.#resellerRef = data[LicensesFields.COLUMN_RESELLER_REF];
    this.#seat = data[LicensesFields.COLUMN_SEAT];
    this.#serviceRef = data[LicensesFields.COLUMN_SERVICE_REF];
    this.#sku = data[LicensesFields.COLUMN_SKU];
    this.#startDate = data[LicensesFields.COLUMN_START_DATE];
    this.#statusCode = data[LicensesFields.COLUMN_STATUS_CODE];
    this.#statusLabel = data[LicensesFields.COLUMN_STATUS_LABEL];
    this.#subscriptionId = data[LicensesFields.COLUMN_SUBSCRIPTION_ID];
    this.#subsidiaryName = data[LicensesFields.COLUMN_SUBSIDIARY_NAME];
    this.#term = data[LicensesFields.COLUMN_TERM];
    this.#trial = data[LicensesFields.COLUMN_TRIAL];
    this.#type = data[LicensesFields.COLUMN_TYPE];
    this.#uom = data[LicensesFields.COLUMN_UOM];
    this.#vendorCode = data[LicensesFields.COLUMN_VENDOR_CODE];
    this.#vendorName = data[LicensesFields.COLUMN_VENDOR_NAME];
    this.#vendorSubscriptionId =
      data[LicensesFields.COLUMN_VENDOR_SUBSCRIPTION_ID];
  }

  public get id(): number {
    return this.#id;
  }

  public get acceptEula(): boolean {
    return this.#acceptEula;
  }

  public get activeSeats(): ActiveSeatsFindResult {
    return this.#activeSeats;
  }

  public get autoRenew(): boolean {
    return this.#autoRenew;
  }

  public get baseSeat(): number {
    return this.#baseSeat;
  }

  public get category(): string {
    return this.#category;
  }

  public get classification(): string {
    return this.#classification;
  }

  public get configs(): ConfigFindResult | null | undefined {
    return this.#configs;
  }

  public get warnings(): WarningsFindResult | null | undefined {
    return this.#warnings;
  }

  public get customerName(): string {
    return this.#customerName;
  }

  public get customerRef(): string {
    return this.#customerRef;
  }

  public get endDate(): string {
    return this.#endDate;
  }

  public get friendlyName(): string | null {
    return this.#friendlyName;
  }

  public get enabled(): boolean {
    return this.#enabled;
  }

  public get lastUpdate(): string | null {
    return this.#lastUpdate;
  }

  public get marketplace(): string {
    return this.#marketplace;
  }

  public get message(): string {
    return this.#message;
  }

  public get offer(): string {
    return this.#offer;
  }

  public get parentLineId(): number | null {
    return this.#parentLineId;
  }

  public get parentOrderRef(): string | null {
    return this.#parentOrderRef;
  }

  public get partnerRef(): string {
    return this.#partnerRef;
  }

  public get periodicity(): number {
    return this.#periodicity;
  }

  public get price(): PriceFindResult {
    return this.#price;
  }

  public get resellerName(): string {
    return this.#resellerName;
  }

  public get resellerRef(): string {
    return this.#resellerRef;
  }

  public get seat(): number {
    return this.#seat;
  }

  public get serviceRef(): string {
    return this.#serviceRef;
  }

  public get sku(): string {
    return this.#sku;
  }

  public get startDate(): string {
    return this.#startDate;
  }

  public get statusCode(): number {
    return this.#statusCode;
  }

  public get statusLabel(): string {
    return this.#statusLabel;
  }

  public get subscriptionId(): string {
    return this.#subscriptionId;
  }

  public get subsidiaryName(): string {
    return this.#subsidiaryName;
  }

  public get term(): number {
    return this.#term;
  }

  public isTrial(): boolean {
    return this.#trial;
  }

  public get type(): string {
    return this.#type;
  }

  public get uom(): string {
    return this.#uom;
  }

  public get vendorCode(): string {
    return this.#vendorCode;
  }

  public get vendorName(): string {
    return this.#vendorName;
  }

  public get vendorSubscriptionId(): string | null {
    return this.#vendorSubscriptionId;
  }

  /**
   * Plain JSON object representation of the license entity.
   * @returns {@link LicenseData}
   */
  public toJSON(): LicensesData {
    return {
      [LicensesFields.COLUMN_ACCEPT_EULA]: this.acceptEula,
      [LicensesFields.COLUMN_ACTIVE_SEATS]: this.activeSeats.toJSON(),
      [LicensesFields.COLUMN_AUTO_RENEW]: this.autoRenew,
      [LicensesFields.COLUMN_BASE_SEAT]: this.baseSeat,
      [LicensesFields.COLUMN_CATEGORY]: this.category,
      [LicensesFields.COLUMN_CLOUD_TYPE]: this.classification,
      [LicensesFields.COLUMN_CONFIGS]: this.configs?.toJSON(),
      [LicensesFields.COLUMN_WARNINGS]: this.warnings?.toJSON(),
      [LicensesFields.COLUMN_CUSTOMER_NAME]: this.customerName,
      [LicensesFields.COLUMN_CUSTOMER_REF]: this.customerRef,
      [LicensesFields.COLUMN_END_DATE]: this.endDate,
      [LicensesFields.COLUMN_FRIENDLY_NAME]: this.friendlyName,
      [LicensesFields.COLUMN_ID]: this.id,
      [LicensesFields.COLUMN_IS_ENABLED]: this.enabled,
      [LicensesFields.COLUMN_LAST_UPDATE]: this.lastUpdate,
      [LicensesFields.COLUMN_MARKETPLACE]: this.marketplace,
      [LicensesFields.COLUMN_MESSAGE]: this.message,
      [LicensesFields.COLUMN_OFFER]: this.offer,
      [LicensesFields.COLUMN_PARENT_LINE_ID]: this.parentLineId,
      [LicensesFields.COLUMN_PARENT_ORDER_REF]: this.parentOrderRef,
      [LicensesFields.COLUMN_PARTNER_REF]: this.partnerRef,
      [LicensesFields.COLUMN_PERIODICITY]: this.periodicity,
      [LicensesFields.COLUMN_PRICE]: this.price.toJSON(),
      [LicensesFields.COLUMN_RESELLER_NAME]: this.resellerName,
      [LicensesFields.COLUMN_RESELLER_REF]: this.resellerRef,
      [LicensesFields.COLUMN_SEAT]: this.seat,
      [LicensesFields.COLUMN_SERVICE_REF]: this.serviceRef,
      [LicensesFields.COLUMN_SKU]: this.sku,
      [LicensesFields.COLUMN_START_DATE]: this.startDate,
      [LicensesFields.COLUMN_STATUS_CODE]: this.statusCode,
      [LicensesFields.COLUMN_STATUS_LABEL]: this.statusLabel,
      [LicensesFields.COLUMN_SUBSCRIPTION_ID]: this.subscriptionId,
      [LicensesFields.COLUMN_SUBSIDIARY_NAME]: this.subsidiaryName,
      [LicensesFields.COLUMN_TERM]: this.term,
      [LicensesFields.COLUMN_TRIAL]: this.isTrial(),
      [LicensesFields.COLUMN_TYPE]: this.type,
      [LicensesFields.COLUMN_UOM]: this.uom,
      [LicensesFields.COLUMN_VENDOR_CODE]: this.vendorCode,
      [LicensesFields.COLUMN_VENDOR_NAME]: this.vendorName,
      [LicensesFields.COLUMN_VENDOR_SUBSCRIPTION_ID]: this.vendorSubscriptionId,
    };
  }
}
