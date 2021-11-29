import {
  ActiveSeatsFindresultData,
  ActiveSeatsFindResultDataKeywords,
  ActiveSeatsFindResultDataSortParameters,
  ActiveSeatsFindResultFields,
  ActiveSeatsFindResult,
  ActiveSeatsFindResultDataFiltersParameters,
} from './activeSeatsFindResult';
import { AbstractEntity } from '../../../abstractEntity';
import { Rules } from 'validatorjs';
import {
  ConfigFindResultData,
  ConfigFindResultDataFiltersParameters,
  ConfigFindResultDataKeywords,
  ConfigFindResultDataSortParameters,
} from './configFindResult';
import {
  DataKeywords,
  FiltersParameters,
  SortParameters,
} from '../../licensesClient';
import {
  WarningFindResultData,
  WarningFindResultDataFiltersParameters,
  WarningFindResultDataKeywords,
  WarningFindResultDataSortParameters,
} from './warningFindResult';
import {
  PriceFindResult,
  PriceFindResultData,
  PriceFindResultDataFiltersParameters,
  PriceFindResultDataKeywords,
  PriceFindResultFields,
  PriceFindResutDataSortParameters,
} from './priceFindResult';

/**
 * Highlight response object.
 */
export type Highlight = {
  [key in LicenseFindResultFields]?: string[];
};

/**
 * Fields that can be present in License response and request data.
 */
export enum LicenseFindResultFields {
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
  COLUMN_HIGHLIGHT = 'highlight',
}

/**
 * License data fields and their corresponding types
 */
export type LicenseFindResultData = {
  [LicenseFindResultFields.COLUMN_ACCEPT_EULA]: boolean;
  [LicenseFindResultFields.COLUMN_ACTIVE_SEATS]: ActiveSeatsFindresultData;
  [LicenseFindResultFields.COLUMN_AUTO_RENEW]: boolean;
  [LicenseFindResultFields.COLUMN_BASE_SEAT]: number;
  [LicenseFindResultFields.COLUMN_CATEGORY]: string;
  [LicenseFindResultFields.COLUMN_CLOUD_TYPE]: string;
  [LicenseFindResultFields.COLUMN_CONFIGS]:
    | Array<ConfigFindResultData>
    | null
    | undefined;
  [LicenseFindResultFields.COLUMN_WARNINGS]:
    | Array<WarningFindResultData>
    | null
    | undefined;
  [LicenseFindResultFields.COLUMN_CUSTOMER_NAME]: string;
  [LicenseFindResultFields.COLUMN_CUSTOMER_REF]: string;
  [LicenseFindResultFields.COLUMN_END_DATE]: string;
  [LicenseFindResultFields.COLUMN_FRIENDLY_NAME]: string | null;
  [LicenseFindResultFields.COLUMN_ID]: number;
  [LicenseFindResultFields.COLUMN_IS_ENABLED]: boolean;
  [LicenseFindResultFields.COLUMN_LAST_UPDATE]: string | null;
  [LicenseFindResultFields.COLUMN_MARKETPLACE]: string;
  [LicenseFindResultFields.COLUMN_MESSAGE]: string;
  [LicenseFindResultFields.COLUMN_OFFER]: string;
  [LicenseFindResultFields.COLUMN_PARENT_LINE_ID]: number | null;
  [LicenseFindResultFields.COLUMN_PARENT_ORDER_REF]: string | null;
  [LicenseFindResultFields.COLUMN_PARTNER_REF]: string;
  [LicenseFindResultFields.COLUMN_PERIODICITY]: number;
  [LicenseFindResultFields.COLUMN_PRICE]: PriceFindResultData;
  [LicenseFindResultFields.COLUMN_RESELLER_NAME]: string;
  [LicenseFindResultFields.COLUMN_RESELLER_REF]: string;
  [LicenseFindResultFields.COLUMN_SEAT]: number;
  [LicenseFindResultFields.COLUMN_SERVICE_REF]: string;
  [LicenseFindResultFields.COLUMN_SKU]: string;
  [LicenseFindResultFields.COLUMN_START_DATE]: string;
  [LicenseFindResultFields.COLUMN_STATUS_CODE]: number;
  [LicenseFindResultFields.COLUMN_STATUS_LABEL]: string;
  [LicenseFindResultFields.COLUMN_SUBSCRIPTION_ID]: string;
  [LicenseFindResultFields.COLUMN_SUBSIDIARY_NAME]: string;
  [LicenseFindResultFields.COLUMN_TERM]: number;
  [LicenseFindResultFields.COLUMN_TRIAL]: boolean;
  [LicenseFindResultFields.COLUMN_TYPE]: string;
  [LicenseFindResultFields.COLUMN_UOM]: string;
  [LicenseFindResultFields.COLUMN_VENDOR_CODE]: string;
  [LicenseFindResultFields.COLUMN_VENDOR_NAME]: string;
  [LicenseFindResultFields.COLUMN_VENDOR_SUBSCRIPTION_ID]: string | null;
  [LicenseFindResultFields.COLUMN_HIGHLIGHT]?: Highlight;
};

export type LicenceFindDataKeywords = {
  [LicenseFindResultFields.COLUMN_ACCEPT_EULA]?: DataKeywords;
  [LicenseFindResultFields.COLUMN_ACTIVE_SEATS]?: ActiveSeatsFindResultDataKeywords;
  [LicenseFindResultFields.COLUMN_AUTO_RENEW]?: DataKeywords;
  [LicenseFindResultFields.COLUMN_BASE_SEAT]?: DataKeywords;
  [LicenseFindResultFields.COLUMN_CATEGORY]?: DataKeywords;
  [LicenseFindResultFields.COLUMN_CLOUD_TYPE]?: DataKeywords;
  [LicenseFindResultFields.COLUMN_CONFIGS]?: ConfigFindResultDataKeywords;
  [LicenseFindResultFields.COLUMN_WARNINGS]?: WarningFindResultDataKeywords;
  [LicenseFindResultFields.COLUMN_CUSTOMER_NAME]?: DataKeywords;
  [LicenseFindResultFields.COLUMN_CUSTOMER_REF]?: DataKeywords;
  [LicenseFindResultFields.COLUMN_END_DATE]?: DataKeywords;
  [LicenseFindResultFields.COLUMN_FRIENDLY_NAME]?: DataKeywords;
  [LicenseFindResultFields.COLUMN_ID]?: DataKeywords;
  [LicenseFindResultFields.COLUMN_IS_ENABLED]?: DataKeywords;
  [LicenseFindResultFields.COLUMN_LAST_UPDATE]?: DataKeywords;
  [LicenseFindResultFields.COLUMN_MARKETPLACE]?: DataKeywords;
  [LicenseFindResultFields.COLUMN_MESSAGE]?: DataKeywords;
  [LicenseFindResultFields.COLUMN_OFFER]?: DataKeywords;
  [LicenseFindResultFields.COLUMN_PARENT_LINE_ID]?: DataKeywords;
  [LicenseFindResultFields.COLUMN_PARENT_ORDER_REF]?: DataKeywords;
  [LicenseFindResultFields.COLUMN_PARTNER_REF]?: DataKeywords;
  [LicenseFindResultFields.COLUMN_PERIODICITY]?: DataKeywords;
  [LicenseFindResultFields.COLUMN_PRICE]?: PriceFindResultDataKeywords;
  [LicenseFindResultFields.COLUMN_RESELLER_NAME]?: DataKeywords;
  [LicenseFindResultFields.COLUMN_RESELLER_REF]?: DataKeywords;
  [LicenseFindResultFields.COLUMN_SEAT]?: DataKeywords;
  [LicenseFindResultFields.COLUMN_SERVICE_REF]?: DataKeywords;
  [LicenseFindResultFields.COLUMN_SKU]?: DataKeywords;
  [LicenseFindResultFields.COLUMN_START_DATE]?: DataKeywords;
  [LicenseFindResultFields.COLUMN_STATUS_CODE]?: DataKeywords;
  [LicenseFindResultFields.COLUMN_STATUS_LABEL]?: DataKeywords;
  [LicenseFindResultFields.COLUMN_SUBSCRIPTION_ID]?: DataKeywords;
  [LicenseFindResultFields.COLUMN_SUBSIDIARY_NAME]?: DataKeywords;
  [LicenseFindResultFields.COLUMN_TERM]?: DataKeywords;
  [LicenseFindResultFields.COLUMN_TRIAL]?: DataKeywords;
  [LicenseFindResultFields.COLUMN_TYPE]?: DataKeywords;
  [LicenseFindResultFields.COLUMN_UOM]?: DataKeywords;
  [LicenseFindResultFields.COLUMN_VENDOR_CODE]?: DataKeywords;
  [LicenseFindResultFields.COLUMN_VENDOR_NAME]?: DataKeywords;
  [LicenseFindResultFields.COLUMN_VENDOR_SUBSCRIPTION_ID]?: DataKeywords;
};

export type LicenceFindDataSortParameters = {
  [LicenseFindResultFields.COLUMN_ACCEPT_EULA]?: SortParameters;
  [LicenseFindResultFields.COLUMN_ACTIVE_SEATS]?: ActiveSeatsFindResultDataSortParameters;
  [LicenseFindResultFields.COLUMN_AUTO_RENEW]?: SortParameters;
  [LicenseFindResultFields.COLUMN_BASE_SEAT]?: SortParameters;
  [LicenseFindResultFields.COLUMN_CATEGORY]?: SortParameters;
  [LicenseFindResultFields.COLUMN_CLOUD_TYPE]?: SortParameters;
  [LicenseFindResultFields.COLUMN_CONFIGS]?: ConfigFindResultDataSortParameters;
  [LicenseFindResultFields.COLUMN_WARNINGS]?: WarningFindResultDataSortParameters;
  [LicenseFindResultFields.COLUMN_CUSTOMER_NAME]?: SortParameters;
  [LicenseFindResultFields.COLUMN_CUSTOMER_REF]?: SortParameters;
  [LicenseFindResultFields.COLUMN_END_DATE]?: SortParameters;
  [LicenseFindResultFields.COLUMN_FRIENDLY_NAME]?: SortParameters;
  [LicenseFindResultFields.COLUMN_ID]?: SortParameters;
  [LicenseFindResultFields.COLUMN_IS_ENABLED]?: SortParameters;
  [LicenseFindResultFields.COLUMN_LAST_UPDATE]?: SortParameters;
  [LicenseFindResultFields.COLUMN_MARKETPLACE]?: SortParameters;
  [LicenseFindResultFields.COLUMN_MESSAGE]?: SortParameters;
  [LicenseFindResultFields.COLUMN_OFFER]?: SortParameters;
  [LicenseFindResultFields.COLUMN_PARENT_LINE_ID]?: SortParameters;
  [LicenseFindResultFields.COLUMN_PARENT_ORDER_REF]?: SortParameters;
  [LicenseFindResultFields.COLUMN_PARTNER_REF]?: SortParameters;
  [LicenseFindResultFields.COLUMN_PERIODICITY]?: SortParameters;
  [LicenseFindResultFields.COLUMN_PRICE]?: PriceFindResutDataSortParameters;
  [LicenseFindResultFields.COLUMN_RESELLER_NAME]?: SortParameters;
  [LicenseFindResultFields.COLUMN_RESELLER_REF]?: SortParameters;
  [LicenseFindResultFields.COLUMN_SEAT]?: SortParameters;
  [LicenseFindResultFields.COLUMN_SERVICE_REF]?: SortParameters;
  [LicenseFindResultFields.COLUMN_SKU]?: SortParameters;
  [LicenseFindResultFields.COLUMN_START_DATE]?: SortParameters;
  [LicenseFindResultFields.COLUMN_STATUS_CODE]?: SortParameters;
  [LicenseFindResultFields.COLUMN_STATUS_LABEL]?: SortParameters;
  [LicenseFindResultFields.COLUMN_SUBSCRIPTION_ID]?: SortParameters;
  [LicenseFindResultFields.COLUMN_SUBSIDIARY_NAME]?: SortParameters;
  [LicenseFindResultFields.COLUMN_TERM]?: SortParameters;
  [LicenseFindResultFields.COLUMN_TRIAL]?: SortParameters;
  [LicenseFindResultFields.COLUMN_TYPE]?: SortParameters;
  [LicenseFindResultFields.COLUMN_UOM]?: SortParameters;
  [LicenseFindResultFields.COLUMN_VENDOR_CODE]?: SortParameters;
  [LicenseFindResultFields.COLUMN_VENDOR_NAME]?: SortParameters;
  [LicenseFindResultFields.COLUMN_VENDOR_SUBSCRIPTION_ID]?: SortParameters;
};

export type LicenceFindDataFiltersParameters = {
  [LicenseFindResultFields.COLUMN_ACCEPT_EULA]?: FiltersParameters;
  [LicenseFindResultFields.COLUMN_ACTIVE_SEATS]?: ActiveSeatsFindResultDataFiltersParameters;
  [LicenseFindResultFields.COLUMN_AUTO_RENEW]?: FiltersParameters;
  [LicenseFindResultFields.COLUMN_BASE_SEAT]?: FiltersParameters;
  [LicenseFindResultFields.COLUMN_CATEGORY]?: FiltersParameters;
  [LicenseFindResultFields.COLUMN_CLOUD_TYPE]?: FiltersParameters;
  [LicenseFindResultFields.COLUMN_CONFIGS]?: ConfigFindResultDataFiltersParameters;
  [LicenseFindResultFields.COLUMN_WARNINGS]?: WarningFindResultDataFiltersParameters;
  [LicenseFindResultFields.COLUMN_CUSTOMER_NAME]?: FiltersParameters;
  [LicenseFindResultFields.COLUMN_CUSTOMER_REF]?: FiltersParameters;
  [LicenseFindResultFields.COLUMN_END_DATE]?: FiltersParameters;
  [LicenseFindResultFields.COLUMN_FRIENDLY_NAME]?: FiltersParameters;
  [LicenseFindResultFields.COLUMN_ID]?: FiltersParameters;
  [LicenseFindResultFields.COLUMN_IS_ENABLED]?: FiltersParameters;
  [LicenseFindResultFields.COLUMN_LAST_UPDATE]?: FiltersParameters;
  [LicenseFindResultFields.COLUMN_MARKETPLACE]?: FiltersParameters;
  [LicenseFindResultFields.COLUMN_MESSAGE]?: FiltersParameters;
  [LicenseFindResultFields.COLUMN_OFFER]?: FiltersParameters;
  [LicenseFindResultFields.COLUMN_PARENT_LINE_ID]?: FiltersParameters;
  [LicenseFindResultFields.COLUMN_PARENT_ORDER_REF]?: FiltersParameters;
  [LicenseFindResultFields.COLUMN_PARTNER_REF]?: FiltersParameters;
  [LicenseFindResultFields.COLUMN_PERIODICITY]?: FiltersParameters;
  [LicenseFindResultFields.COLUMN_PRICE]?: PriceFindResultDataFiltersParameters;
  [LicenseFindResultFields.COLUMN_RESELLER_NAME]?: FiltersParameters;
  [LicenseFindResultFields.COLUMN_RESELLER_REF]?: FiltersParameters;
  [LicenseFindResultFields.COLUMN_SEAT]?: FiltersParameters;
  [LicenseFindResultFields.COLUMN_SERVICE_REF]?: FiltersParameters;
  [LicenseFindResultFields.COLUMN_SKU]?: FiltersParameters;
  [LicenseFindResultFields.COLUMN_START_DATE]?: FiltersParameters;
  [LicenseFindResultFields.COLUMN_STATUS_CODE]?: FiltersParameters;
  [LicenseFindResultFields.COLUMN_STATUS_LABEL]?: FiltersParameters;
  [LicenseFindResultFields.COLUMN_SUBSCRIPTION_ID]?: FiltersParameters;
  [LicenseFindResultFields.COLUMN_SUBSIDIARY_NAME]?: FiltersParameters;
  [LicenseFindResultFields.COLUMN_TERM]?: FiltersParameters;
  [LicenseFindResultFields.COLUMN_TRIAL]?: FiltersParameters;
  [LicenseFindResultFields.COLUMN_TYPE]?: FiltersParameters;
  [LicenseFindResultFields.COLUMN_UOM]?: FiltersParameters;
  [LicenseFindResultFields.COLUMN_VENDOR_CODE]?: FiltersParameters;
  [LicenseFindResultFields.COLUMN_VENDOR_NAME]?: FiltersParameters;
  [LicenseFindResultFields.COLUMN_VENDOR_SUBSCRIPTION_ID]?: FiltersParameters;
};

export class LicenseFindResult extends AbstractEntity<LicenseFindResultData> {
  protected VALIDATION_RULES: Rules = {
    [LicenseFindResultFields.COLUMN_ACCEPT_EULA]: 'present|boolean',
    [LicenseFindResultFields.COLUMN_AUTO_RENEW]: 'present|boolean',
    [LicenseFindResultFields.COLUMN_BASE_SEAT]: 'present|numeric',
    [LicenseFindResultFields.COLUMN_CLOUD_TYPE]: 'required',
    [LicenseFindResultFields.COLUMN_ID]: 'required|numeric',
    [LicenseFindResultFields.COLUMN_OFFER]: 'required',
    [LicenseFindResultFields.COLUMN_PARTNER_REF]: 'required',
    [LicenseFindResultFields.COLUMN_PRICE]: 'required|object',
    [LicenseFindResultFields.COLUMN_SEAT]: 'present|numeric',
    [LicenseFindResultFields.COLUMN_SKU]: 'required',
    [LicenseFindResultFields.COLUMN_STATUS_CODE]: 'required|numeric',
    [LicenseFindResultFields.COLUMN_STATUS_LABEL]: 'required',
    [LicenseFindResultFields.COLUMN_SUBSCRIPTION_ID]: 'required',
    [LicenseFindResultFields.COLUMN_SUBSIDIARY_NAME]: 'required',
    [LicenseFindResultFields.COLUMN_TRIAL]: 'present|boolean',
    [LicenseFindResultFields.COLUMN_VENDOR_NAME]: 'required',
    [LicenseFindResultFields.COLUMN_VENDOR_CODE]: 'required',
    [LicenseFindResultFields.COLUMN_HIGHLIGHT]: 'object',
  };

  readonly #acceptEula: boolean;
  readonly #activeSeats: ActiveSeatsFindResult;
  readonly #autoRenew: boolean;
  readonly #baseSeat: number;
  readonly #category: string;
  readonly #classification: string;
  readonly #configs?: Array<ConfigFindResultData> | null | undefined;
  readonly #warnings?: Array<WarningFindResultData> | null | undefined;
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
  readonly #highlight: Highlight;

  /**
   * LicenseFindResult constructor.
   *
   * @param data - License find result data from the response.
   */
  public constructor(data: LicenseFindResultData) {
    super(data);

    this.#acceptEula = data[LicenseFindResultFields.COLUMN_ACCEPT_EULA];
    const activeSeats: ActiveSeatsFindresultData = {
      [ActiveSeatsFindResultFields.COLUMN_LAST_UPDATE]:
        data[LicenseFindResultFields.COLUMN_ACTIVE_SEATS][
          ActiveSeatsFindResultFields.COLUMN_LAST_UPDATE
        ],
      [ActiveSeatsFindResultFields.COLUMN_NUMBER]:
        data[LicenseFindResultFields.COLUMN_ACTIVE_SEATS][
          ActiveSeatsFindResultFields.COLUMN_NUMBER
        ],
    };
    this.#activeSeats = new ActiveSeatsFindResult(activeSeats);
    this.#autoRenew = data[LicenseFindResultFields.COLUMN_AUTO_RENEW];
    this.#baseSeat = data[LicenseFindResultFields.COLUMN_BASE_SEAT];
    this.#category = data[LicenseFindResultFields.COLUMN_CATEGORY];
    this.#classification = data[LicenseFindResultFields.COLUMN_CLOUD_TYPE];
    if (typeof data[LicenseFindResultFields.COLUMN_CONFIGS] !== 'undefined') {
      this.#configs = data?.[LicenseFindResultFields.COLUMN_CONFIGS];
    }
    if (typeof data[LicenseFindResultFields.COLUMN_WARNINGS] !== 'undefined') {
      this.#warnings = data?.[LicenseFindResultFields.COLUMN_WARNINGS];
    }
    this.#customerName = data[LicenseFindResultFields.COLUMN_CUSTOMER_NAME];
    this.#customerRef = data[LicenseFindResultFields.COLUMN_CUSTOMER_REF];
    this.#endDate = data[LicenseFindResultFields.COLUMN_END_DATE];
    this.#friendlyName = data[LicenseFindResultFields.COLUMN_FRIENDLY_NAME];
    this.#id = data[LicenseFindResultFields.COLUMN_ID];
    this.#enabled = data[LicenseFindResultFields.COLUMN_IS_ENABLED];
    this.#lastUpdate = data[LicenseFindResultFields.COLUMN_LAST_UPDATE];
    this.#marketplace = data[LicenseFindResultFields.COLUMN_MARKETPLACE];
    this.#message = data[LicenseFindResultFields.COLUMN_MESSAGE];
    this.#offer = data[LicenseFindResultFields.COLUMN_OFFER];
    this.#parentLineId = data[LicenseFindResultFields.COLUMN_PARENT_LINE_ID];
    this.#parentOrderRef =
      data[LicenseFindResultFields.COLUMN_PARENT_ORDER_REF];
    this.#partnerRef = data[LicenseFindResultFields.COLUMN_PARTNER_REF];
    this.#periodicity = data[LicenseFindResultFields.COLUMN_PERIODICITY];
    const price = {
      [PriceFindResultFields.COLUMN_PRICE_BAND_ARROWSPHERE_SKU]:
        data[LicenseFindResultFields.COLUMN_PRICE][
          PriceFindResultFields.COLUMN_PRICE_BAND_ARROWSPHERE_SKU
        ],
      [PriceFindResultFields.COLUMN_BUY_PRICE]:
        data[LicenseFindResultFields.COLUMN_PRICE][
          PriceFindResultFields.COLUMN_BUY_PRICE
        ],
      [PriceFindResultFields.COLUMN_SELL_PRICE]:
        data[LicenseFindResultFields.COLUMN_PRICE][
          PriceFindResultFields.COLUMN_SELL_PRICE
        ],
      [PriceFindResultFields.COLUMN_LIST_PRICE]:
        data[LicenseFindResultFields.COLUMN_PRICE][
          PriceFindResultFields.COLUMN_LIST_PRICE
        ],
      [PriceFindResultFields.COLUMN_CURRENCY]:
        data[LicenseFindResultFields.COLUMN_PRICE][
          PriceFindResultFields.COLUMN_CURRENCY
        ],
    };
    this.#price = new PriceFindResult(price);
    this.#resellerName = data[LicenseFindResultFields.COLUMN_RESELLER_NAME];
    this.#resellerRef = data[LicenseFindResultFields.COLUMN_RESELLER_REF];
    this.#seat = data[LicenseFindResultFields.COLUMN_SEAT];
    this.#serviceRef = data[LicenseFindResultFields.COLUMN_SERVICE_REF];
    this.#sku = data[LicenseFindResultFields.COLUMN_SKU];
    this.#startDate = data[LicenseFindResultFields.COLUMN_START_DATE];
    this.#statusCode = data[LicenseFindResultFields.COLUMN_STATUS_CODE];
    this.#statusLabel = data[LicenseFindResultFields.COLUMN_STATUS_LABEL];
    this.#subscriptionId = data[LicenseFindResultFields.COLUMN_SUBSCRIPTION_ID];
    this.#subsidiaryName = data[LicenseFindResultFields.COLUMN_SUBSIDIARY_NAME];
    this.#term = data[LicenseFindResultFields.COLUMN_TERM];
    this.#trial = data[LicenseFindResultFields.COLUMN_TRIAL];
    this.#type = data[LicenseFindResultFields.COLUMN_TYPE];
    this.#uom = data[LicenseFindResultFields.COLUMN_UOM];
    this.#vendorCode = data[LicenseFindResultFields.COLUMN_VENDOR_CODE];
    this.#vendorName = data[LicenseFindResultFields.COLUMN_VENDOR_NAME];
    this.#vendorSubscriptionId =
      data[LicenseFindResultFields.COLUMN_VENDOR_SUBSCRIPTION_ID];
    this.#highlight = data[LicenseFindResultFields.COLUMN_HIGHLIGHT] ?? {};
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

  public get configs(): Array<ConfigFindResultData> | null | undefined {
    return this.#configs;
  }

  public get warnings(): Array<WarningFindResultData> | null | undefined {
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

  public get highlight(): Highlight {
    return this.#highlight;
  }

  /**
   * Plain JSON object representation of the license entity.
   * @returns {@link LicenseData}
   */
  public toJSON(): LicenseFindResultData {
    return {
      [LicenseFindResultFields.COLUMN_ACCEPT_EULA]: this.acceptEula,
      [LicenseFindResultFields.COLUMN_ACTIVE_SEATS]: this.activeSeats.toJSON(),
      [LicenseFindResultFields.COLUMN_AUTO_RENEW]: this.autoRenew,
      [LicenseFindResultFields.COLUMN_BASE_SEAT]: this.baseSeat,
      [LicenseFindResultFields.COLUMN_CATEGORY]: this.category,
      [LicenseFindResultFields.COLUMN_CLOUD_TYPE]: this.classification,
      [LicenseFindResultFields.COLUMN_CONFIGS]: this.configs,
      [LicenseFindResultFields.COLUMN_WARNINGS]: this.warnings,
      [LicenseFindResultFields.COLUMN_CUSTOMER_NAME]: this.customerName,
      [LicenseFindResultFields.COLUMN_CUSTOMER_REF]: this.customerRef,
      [LicenseFindResultFields.COLUMN_END_DATE]: this.endDate,
      [LicenseFindResultFields.COLUMN_FRIENDLY_NAME]: this.friendlyName,
      [LicenseFindResultFields.COLUMN_ID]: this.id,
      [LicenseFindResultFields.COLUMN_IS_ENABLED]: this.enabled,
      [LicenseFindResultFields.COLUMN_LAST_UPDATE]: this.lastUpdate,
      [LicenseFindResultFields.COLUMN_MARKETPLACE]: this.marketplace,
      [LicenseFindResultFields.COLUMN_MESSAGE]: this.message,
      [LicenseFindResultFields.COLUMN_OFFER]: this.offer,
      [LicenseFindResultFields.COLUMN_PARENT_LINE_ID]: this.parentLineId,
      [LicenseFindResultFields.COLUMN_PARENT_ORDER_REF]: this.parentOrderRef,
      [LicenseFindResultFields.COLUMN_PARTNER_REF]: this.partnerRef,
      [LicenseFindResultFields.COLUMN_PERIODICITY]: this.periodicity,
      [LicenseFindResultFields.COLUMN_PRICE]: this.price.toJSON(),
      [LicenseFindResultFields.COLUMN_RESELLER_NAME]: this.resellerName,
      [LicenseFindResultFields.COLUMN_RESELLER_REF]: this.resellerRef,
      [LicenseFindResultFields.COLUMN_SEAT]: this.seat,
      [LicenseFindResultFields.COLUMN_SERVICE_REF]: this.serviceRef,
      [LicenseFindResultFields.COLUMN_SKU]: this.sku,
      [LicenseFindResultFields.COLUMN_START_DATE]: this.startDate,
      [LicenseFindResultFields.COLUMN_STATUS_CODE]: this.statusCode,
      [LicenseFindResultFields.COLUMN_STATUS_LABEL]: this.statusLabel,
      [LicenseFindResultFields.COLUMN_SUBSCRIPTION_ID]: this.subscriptionId,
      [LicenseFindResultFields.COLUMN_SUBSIDIARY_NAME]: this.subsidiaryName,
      [LicenseFindResultFields.COLUMN_TERM]: this.term,
      [LicenseFindResultFields.COLUMN_TRIAL]: this.isTrial(),
      [LicenseFindResultFields.COLUMN_TYPE]: this.type,
      [LicenseFindResultFields.COLUMN_UOM]: this.uom,
      [LicenseFindResultFields.COLUMN_VENDOR_CODE]: this.vendorCode,
      [LicenseFindResultFields.COLUMN_VENDOR_NAME]: this.vendorName,
      [LicenseFindResultFields.COLUMN_VENDOR_SUBSCRIPTION_ID]: this
        .vendorSubscriptionId,
      [LicenseFindResultFields.COLUMN_HIGHLIGHT]: this.highlight,
    };
  }
}
