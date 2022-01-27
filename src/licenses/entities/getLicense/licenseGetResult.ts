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

export enum LicenseGetFields {
  COLUMN_LICENSE_ID = 'license_id',
  COLUMN_PARENT_LICENSE_ID = 'parent_license_id',
  COLUMN_FRIENDLY_NAME = 'friendlyName',
  COLUMN_CUSTOMER_REF = 'customer_ref',
  COLUMN_STATE = 'state',
  COLUMN_SERVICE_REF = 'service_ref',
  COLUMN_SKU = 'sku',
  COLUMN_NAME = 'name',
  COLUMN_SEATS = 'seats',
  COLUMN_ACTIVE_SEATS = 'activeSeats',
  COLUMN_ACTIVATION_DATETIME = 'activation_datetime',
  COLUMN_EXPIRY_DATETIME = 'expiry_datetime',
  COLUMN_AUTO_RENEW = 'autoRenew',
  COLUMN_MESSAGE = 'message',
  COLUMN_ACTIONS = 'actions',
  COLUMN_ACTION_MESSAGES = 'actionMessages',
  COLUMN_ORDER_REFERENCE = 'order_reference',
  COLUMN_ORDER = 'order',
  COLUMN_VENDOR_LICENSE_ID = 'vendor_license_id',
  COLUMN_PERIODICITY = 'periodicity',
  COLUMN_TERM = 'term',
  COLUMN_CATEGORY = 'category',
  COLUMN_PROGRAM = 'program',
  COLUMN_ASSOCIATED_SUBSCRIPTION_PROGRAM = 'associatedSubscriptionProgram',
  COLUMN_PRICE = 'price',
  COLUMN_ARROW_SUB_CATEGORIES = 'arrowSubCategories',
}

export type LicenseGetData = {
  [LicenseGetFields.COLUMN_LICENSE_ID]: string;
  [LicenseGetFields.COLUMN_PARENT_LICENSE_ID]: string | null;
  [LicenseGetFields.COLUMN_FRIENDLY_NAME]: string | null;
  [LicenseGetFields.COLUMN_CUSTOMER_REF]: string;
  [LicenseGetFields.COLUMN_STATE]: string;
  [LicenseGetFields.COLUMN_SERVICE_REF]: string;
  [LicenseGetFields.COLUMN_SKU]: string;
  [LicenseGetFields.COLUMN_NAME]: string;
  [LicenseGetFields.COLUMN_SEATS]: number;
  [LicenseGetFields.COLUMN_ACTIVE_SEATS]: ActiveSeatsFindResultData;
  [LicenseGetFields.COLUMN_ACTIVATION_DATETIME]: string | null;
  [LicenseGetFields.COLUMN_EXPIRY_DATETIME]: string | null;
  [LicenseGetFields.COLUMN_AUTO_RENEW]?: boolean;
  [LicenseGetFields.COLUMN_MESSAGE]: string;
  [LicenseGetFields.COLUMN_ACTIONS]?: ActionsGetData;
  [LicenseGetFields.COLUMN_ACTION_MESSAGES]?: Array<ActionMessagesGetResultData>;
  [LicenseGetFields.COLUMN_ORDER_REFERENCE]: string;
  [LicenseGetFields.COLUMN_ORDER]: OrderGetData;
  [LicenseGetFields.COLUMN_VENDOR_LICENSE_ID]: string | null;
  [LicenseGetFields.COLUMN_PERIODICITY]: string;
  [LicenseGetFields.COLUMN_TERM]: string;
  [LicenseGetFields.COLUMN_CATEGORY]: string;
  [LicenseGetFields.COLUMN_PROGRAM]: string;
  [LicenseGetFields.COLUMN_ASSOCIATED_SUBSCRIPTION_PROGRAM]: string;
  [LicenseGetFields.COLUMN_PRICE]: LicensePriceGetData;
  [LicenseGetFields.COLUMN_ARROW_SUB_CATEGORIES]?: Array<string> | null;
};

export class LicenseGetResult extends AbstractEntity<LicenseGetData> {
  readonly #license_id: string;
  readonly #parent_license_id: string | null;
  readonly #friendlyName: string | null;
  readonly #customer_ref: string;
  readonly #state: string;
  readonly #service_ref: string;
  readonly #sku: string;
  readonly #name: string;
  readonly #seats: number;
  readonly #activeSeats: ActiveSeatsFindResult;
  readonly #activation_datetime: string | null;
  readonly #expiry_datetime: string | null;
  readonly #autoRenew?: boolean;
  readonly #message: string;
  readonly #actions?: ActionsGetResult;
  readonly #actionMessages?: Array<ActionMessagesGetResult>;
  readonly #order_reference: string;
  readonly #order: OrderGetResult;
  readonly #vendor_license_id: string | null;
  readonly #periodicity: string;
  readonly #term: string;
  readonly #category: string;
  readonly #program: string;
  readonly #associatedSubscriptionProgram: string;
  readonly #price: LicensePriceGetResult;
  readonly #arrowSubCategories?: Array<string> | null;

  public constructor(data: LicenseGetData) {
    super(data);

    this.#license_id = data[LicenseGetFields.COLUMN_LICENSE_ID];
    this.#parent_license_id = data[LicenseGetFields.COLUMN_PARENT_LICENSE_ID];
    this.#friendlyName = data[LicenseGetFields.COLUMN_FRIENDLY_NAME];
    this.#customer_ref = data[LicenseGetFields.COLUMN_CUSTOMER_REF];
    this.#state = data[LicenseGetFields.COLUMN_STATE];
    this.#service_ref = data[LicenseGetFields.COLUMN_SERVICE_REF];
    this.#sku = data[LicenseGetFields.COLUMN_SKU];
    this.#name = data[LicenseGetFields.COLUMN_NAME];
    this.#seats = data[LicenseGetFields.COLUMN_SEATS];
    this.#activeSeats = new ActiveSeatsFindResult(
      data[LicenseGetFields.COLUMN_ACTIVE_SEATS],
    );
    this.#activation_datetime =
      data[LicenseGetFields.COLUMN_ACTIVATION_DATETIME];
    this.#expiry_datetime = data[LicenseGetFields.COLUMN_EXPIRY_DATETIME];
    this.#autoRenew = data[LicenseGetFields.COLUMN_AUTO_RENEW];
    this.#message = data[LicenseGetFields.COLUMN_MESSAGE];
    this.#actions = data[LicenseGetFields.COLUMN_ACTIONS]
      ? new ActionsGetResult(
          data[LicenseGetFields.COLUMN_ACTIONS] as ActionsGetData,
        )
      : undefined;
    this.#actionMessages = data[LicenseGetFields.COLUMN_ACTION_MESSAGES]?.map(
      (result) => new ActionMessagesGetResult(result),
    );
    this.#order_reference = data[LicenseGetFields.COLUMN_ORDER_REFERENCE];
    this.#order = new OrderGetResult(data[LicenseGetFields.COLUMN_ORDER]);
    this.#vendor_license_id = data[LicenseGetFields.COLUMN_VENDOR_LICENSE_ID];
    this.#periodicity = data[LicenseGetFields.COLUMN_PERIODICITY];
    this.#term = data[LicenseGetFields.COLUMN_TERM];
    this.#category = data[LicenseGetFields.COLUMN_CATEGORY];
    this.#program = data[LicenseGetFields.COLUMN_PROGRAM];
    this.#associatedSubscriptionProgram =
      data[LicenseGetFields.COLUMN_ASSOCIATED_SUBSCRIPTION_PROGRAM];
    this.#price = new LicensePriceGetResult(
      data[LicenseGetFields.COLUMN_PRICE],
    );
    this.#arrowSubCategories =
      data[LicenseGetFields.COLUMN_ARROW_SUB_CATEGORIES];
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

  public get activationDatetime(): string | null {
    return this.#activation_datetime;
  }

  public get expiryDatetime(): string | null {
    return this.#expiry_datetime;
  }

  public get autoRenew(): boolean | undefined {
    return this.#autoRenew;
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

  public get term(): string {
    return this.#term;
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

  public toJSON(): LicenseGetData {
    return {
      [LicenseGetFields.COLUMN_LICENSE_ID]: this.id,
      [LicenseGetFields.COLUMN_PARENT_LICENSE_ID]: this.parentLicenseId,
      [LicenseGetFields.COLUMN_FRIENDLY_NAME]: this.friendlyName,
      [LicenseGetFields.COLUMN_CUSTOMER_REF]: this.customerRef,
      [LicenseGetFields.COLUMN_STATE]: this.state,
      [LicenseGetFields.COLUMN_SERVICE_REF]: this.serviceRef,
      [LicenseGetFields.COLUMN_SKU]: this.sku,
      [LicenseGetFields.COLUMN_NAME]: this.name,
      [LicenseGetFields.COLUMN_SEATS]: this.seats,
      [LicenseGetFields.COLUMN_ACTIVE_SEATS]: this.activeSeats.toJSON(),
      [LicenseGetFields.COLUMN_ACTIVATION_DATETIME]: this.activationDatetime,
      [LicenseGetFields.COLUMN_EXPIRY_DATETIME]: this.expiryDatetime,
      [LicenseGetFields.COLUMN_AUTO_RENEW]: this.autoRenew,
      [LicenseGetFields.COLUMN_MESSAGE]: this.message,
      [LicenseGetFields.COLUMN_ACTIONS]: this.actions?.toJSON(),
      [LicenseGetFields.COLUMN_ACTION_MESSAGES]: this.actionMessages?.map(
        (result) => result.toJSON(),
      ),
      [LicenseGetFields.COLUMN_ORDER_REFERENCE]: this.orderReference,
      [LicenseGetFields.COLUMN_ORDER]: this.order.toJSON(),
      [LicenseGetFields.COLUMN_VENDOR_LICENSE_ID]: this.vendorLicenseId,
      [LicenseGetFields.COLUMN_PERIODICITY]: this.periodicity,
      [LicenseGetFields.COLUMN_TERM]: this.term,
      [LicenseGetFields.COLUMN_CATEGORY]: this.category,
      [LicenseGetFields.COLUMN_PROGRAM]: this.program,
      [LicenseGetFields.COLUMN_ASSOCIATED_SUBSCRIPTION_PROGRAM]: this
        .associatedSubscriptionProgram,
      [LicenseGetFields.COLUMN_PRICE]: this.price.toJSON(),
      [LicenseGetFields.COLUMN_ARROW_SUB_CATEGORIES]: this.arrowSubCategories,
    };
  }
}
