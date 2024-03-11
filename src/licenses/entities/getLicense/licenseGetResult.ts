import { ActionsGetData, ActionsGetResult } from './actionsGetResult';
import {
  ActionMessagesGetResult,
  ActionMessagesGetResultData,
} from './actionMessagesGetResult';
import { OrderGetData, OrderGetResult } from './orderGetResult';
import {
  LicensePriceGetData,
  LicensePriceGetResult,
} from './licensePriceGetResult';
import { AbstractEntity } from '../../../abstractEntity';
import {
  ActiveSeatsFindResult,
  ActiveSeatsFindResultData,
} from '../license/activeSeatsFindResult';
import {
  SecurityFindResult,
  SecurityFindResultData,
} from '../license/securityFindResult';
import { PromotionData, PromotionFindResult } from './promotionFindResult';
import { AssetsData, AssetsFindResult } from './assetsFindResult';
import { ExtraDataResult, ExtraDataType } from './extraDataGetResult';
import { PriceBandData, PriceBandGetResult } from './priceBandGetResult';
import { RatesGetData, RatesGetResult } from './ratesGetResult';
import { RelationGetData, RelationGetResult } from './relationGetResult';
import {
  ConfigFindResult,
  ConfigFindResultData,
} from '../license/configFindResult';
import {
  WarningFindResult,
  WarningFindResultData,
} from '../license/warningFindResult';

export enum LicenseGetFields {
  COLUMN_LICENSE_ID = 'license_id',
  COLUMN_PARENT_LICENSE_ID = 'parent_license_id',
  COLUMN_FRIENDLY_NAME = 'friendlyName',
  COLUMN_CUSTOMER_REF = 'customer_ref',
  COLUMN_STATE = 'state',
  COLUMN_STATUS_CODE = 'statusCode',
  COLUMN_IS_TRIAL = 'isTrial',
  COLUMN_IS_ADDON = 'isAddon',
  COLUMN_SERVICE_REF = 'service_ref',
  COLUMN_SKU = 'sku',
  COLUMN_NAME = 'name',
  COLUMN_SEATS = 'seats',
  COLUMN_ACTIVE_SEATS = 'activeSeats',
  COLUMN_ACTIVATION_DATETIME = 'activation_datetime',
  COLUMN_EXPIRY_DATETIME = 'expiry_datetime',
  COLUMN_AUTO_RENEW = 'autoRenew',
  COLUMN_MARKETPLACE = 'marketplace',
  COLUMN_MESSAGE = 'message',
  COLUMN_ACTIONS = 'actions',
  COLUMN_ACTION_MESSAGES = 'actionMessages',
  COLUMN_ORDER_REFERENCE = 'order_reference',
  COLUMN_ORDER = 'order',
  COLUMN_VENDOR_LICENSE_ID = 'vendor_license_id',
  COLUMN_PERIODICITY = 'periodicity',
  COLUMN_PERIODICITY_CODE = 'periodicityCode',
  COLUMN_TERM = 'term',
  COLUMN_TERM_CODE = 'termCode',
  COLUMN_CATEGORY = 'category',
  COLUMN_PROGRAM = 'program',
  COLUMN_ASSOCIATED_SUBSCRIPTION_PROGRAM = 'associatedSubscriptionProgram',
  COLUMN_PRICE = 'price',
  COLUMN_ARROW_SUB_CATEGORIES = 'arrowSubCategories',
  COLUMN_SECURITY = 'security',
  COLUMN_NEXT_RENEWAL_DATE = 'nextRenewalDate',
  COLUMN_PROMOTION = 'promotion',
  COLUMN_ASSETS = 'assets',
  COLUMN_VENDOR_BILLING_ID = 'vendorBillingId',
  COLUMN_EXTRA_DATA = 'extraData',
  COLUMN_PRICE_BAND = 'priceBand',
  COLUMN_VENDOR_CODE = 'vendorCode', //Does not exist in the public-api
  COLUMN_VENDOR_CODE_2 = 'vendor_code',
  COLUMN_VENDOR_SKU = 'vendorSku',
  COLUMN_RATES = 'rates',
  COLUMN_ORGANIZATION_UNIT_ID = 'organizationUnitId',
  COLUMN_RELATION = 'relation',
  COLUMN_MARKET_SEGMENT = 'marketSegment',
  COLUMN_CONFIGS = 'configs',
  COLUMN_WARNINGS = 'warnings',
}

export type LicenseGetData = {
  [LicenseGetFields.COLUMN_LICENSE_ID]: string;
  [LicenseGetFields.COLUMN_PARENT_LICENSE_ID]: string | null;
  [LicenseGetFields.COLUMN_FRIENDLY_NAME]: string | null;
  [LicenseGetFields.COLUMN_CUSTOMER_REF]: string;
  [LicenseGetFields.COLUMN_STATE]: string;
  [LicenseGetFields.COLUMN_STATUS_CODE]: number;
  [LicenseGetFields.COLUMN_IS_TRIAL]: boolean;
  [LicenseGetFields.COLUMN_IS_ADDON]: boolean;
  [LicenseGetFields.COLUMN_SERVICE_REF]: string;
  [LicenseGetFields.COLUMN_SKU]: string;
  [LicenseGetFields.COLUMN_NAME]: string;
  [LicenseGetFields.COLUMN_SEATS]: number;
  [LicenseGetFields.COLUMN_ACTIVE_SEATS]: ActiveSeatsFindResultData;
  [LicenseGetFields.COLUMN_SECURITY]?: SecurityFindResultData;
  [LicenseGetFields.COLUMN_ACTIVATION_DATETIME]: string | null;
  [LicenseGetFields.COLUMN_EXPIRY_DATETIME]: string | null;
  [LicenseGetFields.COLUMN_AUTO_RENEW]?: boolean;
  [LicenseGetFields.COLUMN_MARKETPLACE]: string;
  [LicenseGetFields.COLUMN_MESSAGE]: string;
  [LicenseGetFields.COLUMN_ACTIONS]?: ActionsGetData;
  [LicenseGetFields.COLUMN_ACTION_MESSAGES]?: Array<ActionMessagesGetResultData>;
  [LicenseGetFields.COLUMN_ORDER_REFERENCE]: string;
  [LicenseGetFields.COLUMN_ORDER]: OrderGetData;
  [LicenseGetFields.COLUMN_VENDOR_LICENSE_ID]: string | null;
  [LicenseGetFields.COLUMN_PERIODICITY]: string;
  [LicenseGetFields.COLUMN_PERIODICITY_CODE]: number;
  [LicenseGetFields.COLUMN_TERM]: string;
  [LicenseGetFields.COLUMN_TERM_CODE]: number;
  [LicenseGetFields.COLUMN_CATEGORY]: string;
  [LicenseGetFields.COLUMN_PROGRAM]: string;
  [LicenseGetFields.COLUMN_ASSOCIATED_SUBSCRIPTION_PROGRAM]: string;
  [LicenseGetFields.COLUMN_PRICE]: LicensePriceGetData;
  [LicenseGetFields.COLUMN_ARROW_SUB_CATEGORIES]?: Array<string> | null;
  [LicenseGetFields.COLUMN_NEXT_RENEWAL_DATE]?: string;
  [LicenseGetFields.COLUMN_PROMOTION]?: PromotionData;
  [LicenseGetFields.COLUMN_ASSETS]?: AssetsData;
  [LicenseGetFields.COLUMN_VENDOR_BILLING_ID]?: string | null;
  [LicenseGetFields.COLUMN_EXTRA_DATA]?: ExtraDataType[];
  [LicenseGetFields.COLUMN_PRICE_BAND]?: PriceBandData;
  [LicenseGetFields.COLUMN_VENDOR_CODE]?: string;
  [LicenseGetFields.COLUMN_VENDOR_CODE_2]?: string;
  [LicenseGetFields.COLUMN_VENDOR_SKU]?: string;
  [LicenseGetFields.COLUMN_RATES]?: RatesGetData;
  [LicenseGetFields.COLUMN_ORGANIZATION_UNIT_ID]?: number;
  [LicenseGetFields.COLUMN_RELATION]?: RelationGetData[];
  [LicenseGetFields.COLUMN_MARKET_SEGMENT]?: string | null;
  [LicenseGetFields.COLUMN_CONFIGS]?: Array<ConfigFindResultData> | null;
  [LicenseGetFields.COLUMN_WARNINGS]?: Array<WarningFindResultData> | null;
};

export class LicenseGetResult extends AbstractEntity<LicenseGetData> {
  readonly #license_id: string;
  readonly #parent_license_id: string | null;
  readonly #friendlyName: string | null;
  readonly #customer_ref: string;
  readonly #state: string;
  readonly #statusCode: number;
  readonly #isTrial: boolean;
  readonly #isAddon: boolean;
  readonly #service_ref: string;
  readonly #sku: string;
  readonly #name: string;
  readonly #seats: number;
  readonly #activeSeats: ActiveSeatsFindResult;
  readonly #security?: SecurityFindResult;
  readonly #activation_datetime: string | null;
  readonly #expiry_datetime: string | null;
  readonly #autoRenew?: boolean;
  readonly #marketplace: string;
  readonly #message: string;
  readonly #actions?: ActionsGetResult;
  readonly #actionMessages?: Array<ActionMessagesGetResult>;
  readonly #order_reference: string;
  readonly #order: OrderGetResult;
  readonly #vendor_license_id: string | null;
  readonly #periodicity: string;
  readonly #periodicityCode: number;
  readonly #term: string;
  readonly #termCode: number;
  readonly #category: string;
  readonly #program: string;
  readonly #associatedSubscriptionProgram: string;
  readonly #price: LicensePriceGetResult;
  readonly #arrowSubCategories?: Array<string> | null;
  readonly #nextRenewalDate?: string;
  readonly #promotion?: PromotionFindResult;
  readonly #assets?: AssetsFindResult;
  readonly #vendorBillingId?: string | null;
  readonly #extraData?: ExtraDataResult[];
  readonly #priceBand?: PriceBandGetResult;
  readonly #vendorCode?: string;
  readonly #vendor_code?: string;
  readonly #vendorSku?: string;
  readonly #rates?: RatesGetResult;
  readonly #organizationUnitId?: number;
  readonly #relation?: RelationGetResult[];
  readonly #marketSegment?: string | null;
  readonly #configs?: Array<ConfigFindResult> | null;
  readonly #warnings?: Array<WarningFindResult> | null;

  public constructor(licenseGetDataInput: LicenseGetData) {
    super(licenseGetDataInput);

    this.#license_id = licenseGetDataInput[LicenseGetFields.COLUMN_LICENSE_ID];
    this.#parent_license_id =
      licenseGetDataInput[LicenseGetFields.COLUMN_PARENT_LICENSE_ID];
    this.#friendlyName =
      licenseGetDataInput[LicenseGetFields.COLUMN_FRIENDLY_NAME];
    this.#customer_ref =
      licenseGetDataInput[LicenseGetFields.COLUMN_CUSTOMER_REF];
    this.#state = licenseGetDataInput[LicenseGetFields.COLUMN_STATE];
    this.#statusCode = licenseGetDataInput[LicenseGetFields.COLUMN_STATUS_CODE];
    this.#isTrial = licenseGetDataInput[LicenseGetFields.COLUMN_IS_TRIAL];
    this.#isAddon = licenseGetDataInput[LicenseGetFields.COLUMN_IS_ADDON];
    this.#service_ref =
      licenseGetDataInput[LicenseGetFields.COLUMN_SERVICE_REF];
    this.#sku = licenseGetDataInput[LicenseGetFields.COLUMN_SKU];
    this.#name = licenseGetDataInput[LicenseGetFields.COLUMN_NAME];
    this.#seats = licenseGetDataInput[LicenseGetFields.COLUMN_SEATS];
    this.#activeSeats = new ActiveSeatsFindResult(
      licenseGetDataInput[LicenseGetFields.COLUMN_ACTIVE_SEATS],
    );
    this.#security = licenseGetDataInput[LicenseGetFields.COLUMN_SECURITY]
      ? new SecurityFindResult(
          licenseGetDataInput[
            LicenseGetFields.COLUMN_SECURITY
          ] as SecurityFindResultData,
        )
      : undefined;
    this.#activation_datetime =
      licenseGetDataInput[LicenseGetFields.COLUMN_ACTIVATION_DATETIME];
    this.#expiry_datetime =
      licenseGetDataInput[LicenseGetFields.COLUMN_EXPIRY_DATETIME];
    this.#autoRenew = licenseGetDataInput[LicenseGetFields.COLUMN_AUTO_RENEW];
    this.#marketplace =
      licenseGetDataInput[LicenseGetFields.COLUMN_MARKETPLACE];
    this.#message = licenseGetDataInput[LicenseGetFields.COLUMN_MESSAGE];
    this.#actions = licenseGetDataInput[LicenseGetFields.COLUMN_ACTIONS]
      ? new ActionsGetResult(
          licenseGetDataInput[
            LicenseGetFields.COLUMN_ACTIONS
          ] as ActionsGetData,
        )
      : undefined;
    this.#actionMessages = licenseGetDataInput[
      LicenseGetFields.COLUMN_ACTION_MESSAGES
    ]?.map((result) => new ActionMessagesGetResult(result));
    this.#order_reference =
      licenseGetDataInput[LicenseGetFields.COLUMN_ORDER_REFERENCE];
    this.#order = new OrderGetResult(
      licenseGetDataInput[LicenseGetFields.COLUMN_ORDER],
    );
    this.#vendor_license_id =
      licenseGetDataInput[LicenseGetFields.COLUMN_VENDOR_LICENSE_ID];
    this.#periodicity =
      licenseGetDataInput[LicenseGetFields.COLUMN_PERIODICITY];
    this.#periodicityCode =
      licenseGetDataInput[LicenseGetFields.COLUMN_PERIODICITY_CODE];
    this.#term = licenseGetDataInput[LicenseGetFields.COLUMN_TERM];
    this.#termCode = licenseGetDataInput[LicenseGetFields.COLUMN_TERM_CODE];
    this.#category = licenseGetDataInput[LicenseGetFields.COLUMN_CATEGORY];
    this.#program = licenseGetDataInput[LicenseGetFields.COLUMN_PROGRAM];
    this.#associatedSubscriptionProgram =
      licenseGetDataInput[
        LicenseGetFields.COLUMN_ASSOCIATED_SUBSCRIPTION_PROGRAM
      ];
    this.#price = new LicensePriceGetResult(
      licenseGetDataInput[LicenseGetFields.COLUMN_PRICE],
    );
    this.#arrowSubCategories =
      licenseGetDataInput[LicenseGetFields.COLUMN_ARROW_SUB_CATEGORIES];
    this.#nextRenewalDate =
      licenseGetDataInput[LicenseGetFields.COLUMN_NEXT_RENEWAL_DATE];
    this.#vendorBillingId =
      licenseGetDataInput[LicenseGetFields.COLUMN_VENDOR_BILLING_ID];
    this.#promotion = licenseGetDataInput[LicenseGetFields.COLUMN_PROMOTION]
      ? new PromotionFindResult(
          licenseGetDataInput[
            LicenseGetFields.COLUMN_PROMOTION
          ] as PromotionData,
        )
      : undefined;
    this.#assets = licenseGetDataInput[LicenseGetFields.COLUMN_ASSETS]
      ? new AssetsFindResult(
          licenseGetDataInput[LicenseGetFields.COLUMN_ASSETS] as AssetsData,
        )
      : undefined;
    this.#extraData = licenseGetDataInput[
      LicenseGetFields.COLUMN_EXTRA_DATA
    ]?.map((e: ExtraDataType): ExtraDataResult => new ExtraDataResult(e));
    this.#priceBand =
      licenseGetDataInput[LicenseGetFields.COLUMN_PRICE_BAND] !== undefined
        ? new PriceBandGetResult(
            licenseGetDataInput[
              LicenseGetFields.COLUMN_PRICE_BAND
            ] as PriceBandData,
          )
        : undefined;
    this.#vendorCode = licenseGetDataInput[LicenseGetFields.COLUMN_VENDOR_CODE];
    this.#vendor_code =
      licenseGetDataInput[LicenseGetFields.COLUMN_VENDOR_CODE_2];
    this.#vendorSku = licenseGetDataInput[LicenseGetFields.COLUMN_VENDOR_SKU];
    this.#rates = licenseGetDataInput[LicenseGetFields.COLUMN_RATES]
      ? new RatesGetResult(
          licenseGetDataInput[LicenseGetFields.COLUMN_RATES] as RatesGetData,
        )
      : undefined;
    this.#organizationUnitId =
      licenseGetDataInput[LicenseGetFields.COLUMN_ORGANIZATION_UNIT_ID];
    this.#relation = licenseGetDataInput[LicenseGetFields.COLUMN_RELATION]
      ? licenseGetDataInput[LicenseGetFields.COLUMN_RELATION]?.map(
          (v: RelationGetData): RelationGetResult => new RelationGetResult(v),
        )
      : undefined;
    this.#marketSegment =
      licenseGetDataInput[LicenseGetFields.COLUMN_MARKET_SEGMENT];
    this.#configs = licenseGetDataInput[LicenseGetFields.COLUMN_CONFIGS]?.map(
      (configData: ConfigFindResultData): ConfigFindResult =>
        new ConfigFindResult(configData),
    );
    this.#warnings = licenseGetDataInput[LicenseGetFields.COLUMN_WARNINGS]?.map(
      (warningData: WarningFindResultData): WarningFindResult =>
        new WarningFindResult(warningData),
    );
  }

  public get id(): string {
    return this.#license_id;
  }

  public get parentLicenseId(): string | null {
    return this.#parent_license_id;
  }

  public get friendlyName(): string | null {
    return this.#friendlyName;
  }

  public get customerRef(): string {
    return this.#customer_ref;
  }

  public get state(): string {
    return this.#state;
  }

  get statusCode(): number {
    return this.#statusCode;
  }

  get isTrial(): boolean {
    return this.#isTrial;
  }

  get isAddon(): boolean {
    return this.#isAddon;
  }

  public get serviceRef(): string {
    return this.#service_ref;
  }

  public get sku(): string {
    return this.#sku;
  }

  public get name(): string {
    return this.#name;
  }

  public get seats(): number {
    return this.#seats;
  }

  public get activeSeats(): ActiveSeatsFindResult {
    return this.#activeSeats;
  }

  public get security(): SecurityFindResult | undefined {
    return this.#security;
  }

  public get activationDatetime(): string | null {
    return this.#activation_datetime;
  }

  public get expiryDatetime(): string | null {
    return this.#expiry_datetime;
  }

  public get autoRenew(): boolean | undefined {
    return this.#autoRenew;
  }

  public get marketplace(): string {
    return this.#marketplace;
  }

  public get message(): string {
    return this.#message;
  }

  public get actions(): ActionsGetResult | undefined {
    return this.#actions;
  }

  public get actionMessages(): Array<ActionMessagesGetResult> | undefined {
    return this.#actionMessages;
  }

  public get orderReference(): string {
    return this.#order_reference;
  }

  public get order(): OrderGetResult {
    return this.#order;
  }

  public get vendorLicenseId(): string | null {
    return this.#vendor_license_id;
  }

  public get periodicity(): string {
    return this.#periodicity;
  }

  get periodicityCode(): number {
    return this.#periodicityCode;
  }

  public get term(): string {
    return this.#term;
  }

  get termCode(): number {
    return this.#termCode;
  }

  public get category(): string {
    return this.#category;
  }

  public get program(): string {
    return this.#program;
  }

  public get associatedSubscriptionProgram(): string {
    return this.#associatedSubscriptionProgram;
  }

  public get price(): LicensePriceGetResult {
    return this.#price;
  }

  public get arrowSubCategories(): Array<string> | null | undefined {
    return this.#arrowSubCategories;
  }

  public get nextRenewalDate(): string | undefined {
    return this.#nextRenewalDate;
  }

  get promotion(): PromotionFindResult | undefined {
    return this.#promotion;
  }

  get assets(): AssetsFindResult | undefined {
    return this.#assets;
  }

  get vendorBillingId(): string | null | undefined {
    return this.#vendorBillingId;
  }

  get extraData(): ExtraDataResult[] | undefined {
    return this.#extraData;
  }

  get priceBand(): PriceBandGetResult | undefined {
    return this.#priceBand;
  }

  /*
   * @deprecated use vendor_code() instead
   */
  get vendorCode(): string | undefined {
    return this.#vendorCode;
  }

  get vendor_code(): string | undefined {
    return this.#vendor_code;
  }

  get vendorSku(): string | undefined {
    return this.#vendorSku;
  }

  get rates(): RatesGetResult | undefined {
    return this.#rates;
  }

  get organizationUnitId(): number | undefined {
    return this.#organizationUnitId;
  }

  get relation(): RelationGetResult[] | undefined {
    return this.#relation;
  }

  get marketSegment(): string | null | undefined {
    return this.#marketSegment;
  }

  public get configs(): Array<ConfigFindResult> | null | undefined {
    return this.#configs;
  }

  public get warnings(): Array<WarningFindResult> | null | undefined {
    return this.#warnings;
  }

  public toJSON(): LicenseGetData {
    return {
      [LicenseGetFields.COLUMN_LICENSE_ID]: this.id,
      [LicenseGetFields.COLUMN_PARENT_LICENSE_ID]: this.parentLicenseId,
      [LicenseGetFields.COLUMN_FRIENDLY_NAME]: this.friendlyName,
      [LicenseGetFields.COLUMN_CUSTOMER_REF]: this.customerRef,
      [LicenseGetFields.COLUMN_STATE]: this.state,
      [LicenseGetFields.COLUMN_STATUS_CODE]: this.statusCode,
      [LicenseGetFields.COLUMN_IS_TRIAL]: this.isTrial,
      [LicenseGetFields.COLUMN_IS_ADDON]: this.isAddon,
      [LicenseGetFields.COLUMN_SERVICE_REF]: this.serviceRef,
      [LicenseGetFields.COLUMN_SKU]: this.sku,
      [LicenseGetFields.COLUMN_NAME]: this.name,
      [LicenseGetFields.COLUMN_SEATS]: this.seats,
      [LicenseGetFields.COLUMN_ACTIVE_SEATS]: this.activeSeats.toJSON(),
      [LicenseGetFields.COLUMN_SECURITY]: this.security?.toJSON(),
      [LicenseGetFields.COLUMN_ACTIVATION_DATETIME]: this.activationDatetime,
      [LicenseGetFields.COLUMN_EXPIRY_DATETIME]: this.expiryDatetime,
      [LicenseGetFields.COLUMN_AUTO_RENEW]: this.autoRenew,
      [LicenseGetFields.COLUMN_MARKETPLACE]: this.#marketplace,
      [LicenseGetFields.COLUMN_MESSAGE]: this.message,
      [LicenseGetFields.COLUMN_ACTIONS]: this.actions?.toJSON(),
      [LicenseGetFields.COLUMN_ACTION_MESSAGES]: this.actionMessages?.map(
        (result) => result.toJSON(),
      ),
      [LicenseGetFields.COLUMN_ORDER_REFERENCE]: this.orderReference,
      [LicenseGetFields.COLUMN_ORDER]: this.order.toJSON(),
      [LicenseGetFields.COLUMN_VENDOR_LICENSE_ID]: this.vendorLicenseId,
      [LicenseGetFields.COLUMN_PERIODICITY]: this.periodicity,
      [LicenseGetFields.COLUMN_PERIODICITY_CODE]: this.periodicityCode,
      [LicenseGetFields.COLUMN_TERM]: this.term,
      [LicenseGetFields.COLUMN_TERM_CODE]: this.termCode,
      [LicenseGetFields.COLUMN_CATEGORY]: this.category,
      [LicenseGetFields.COLUMN_PROGRAM]: this.program,
      [LicenseGetFields.COLUMN_ASSOCIATED_SUBSCRIPTION_PROGRAM]: this
        .associatedSubscriptionProgram,
      [LicenseGetFields.COLUMN_PRICE]: this.price.toJSON(),
      [LicenseGetFields.COLUMN_ARROW_SUB_CATEGORIES]: this.arrowSubCategories,
      [LicenseGetFields.COLUMN_NEXT_RENEWAL_DATE]: this.nextRenewalDate,
      [LicenseGetFields.COLUMN_VENDOR_BILLING_ID]: this.vendorBillingId,
      [LicenseGetFields.COLUMN_PROMOTION]: this.promotion?.toJSON(),
      [LicenseGetFields.COLUMN_ASSETS]: this.assets?.toJSON(),
      [LicenseGetFields.COLUMN_EXTRA_DATA]: this.extraData?.map(
        (e: ExtraDataResult): ExtraDataType => e.toJSON(),
      ),
      [LicenseGetFields.COLUMN_PRICE_BAND]: this.priceBand?.toJSON(),
      [LicenseGetFields.COLUMN_VENDOR_CODE]: this.vendorCode,
      [LicenseGetFields.COLUMN_VENDOR_CODE_2]: this.vendor_code,
      [LicenseGetFields.COLUMN_VENDOR_SKU]: this.vendorSku,
      [LicenseGetFields.COLUMN_RATES]: this.rates?.toJSON(),
      [LicenseGetFields.COLUMN_ORGANIZATION_UNIT_ID]: this.organizationUnitId,
      [LicenseGetFields.COLUMN_RELATION]: this.relation?.map(
        (v: RelationGetResult): RelationGetData => v.toJSON(),
      ),
      [LicenseGetFields.COLUMN_MARKET_SEGMENT]: this.marketSegment,
      [LicenseGetFields.COLUMN_CONFIGS]: this.configs?.map(
        (config: ConfigFindResult) => config.toJSON(),
      ),
      [LicenseGetFields.COLUMN_WARNINGS]: this.warnings?.map(
        (warning: WarningFindResult) => warning.toJSON(),
      ),
    };
  }
}
