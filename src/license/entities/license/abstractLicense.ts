import {
  ActiveSeatsData,
  ActiveSeatsFields,
} from '../../../common/entities/abstractActiveSeats';
import { ActionsData, ActionsFields } from './abstractActions';
import { ActionMessagesData } from './abstractActionMessages';
import { OrderData, OrderFields } from './abstractOrder';
import { LicensePriceData, LicensePriceFields } from './abstractLicensePrice';
import { AbstractEntity } from '../../../abstractEntity';
import { ActiveSeatsFindResult } from '../../../common/entities/activeSeatsFindResult';
import { ActionsFindResult } from './actionsFindResult';
import { OrderFindResult } from './orderFindResult';
import { LicensePriceFindResult } from './licensePriceFindResult';

export enum LicenseFields {
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

export type LicenseData = {
  [LicenseFields.COLUMN_LICENSE_ID]: string;
  [LicenseFields.COLUMN_PARENT_LICENSE_ID]: string;
  [LicenseFields.COLUMN_FRIENDLY_NAME]: string;
  [LicenseFields.COLUMN_CUSTOMER_REF]: string;
  [LicenseFields.COLUMN_STATE]: string;
  [LicenseFields.COLUMN_SERVICE_REF]: string;
  [LicenseFields.COLUMN_SKU]: string;
  [LicenseFields.COLUMN_NAME]: string;
  [LicenseFields.COLUMN_SEATS]: number;
  [LicenseFields.COLUMN_ACTIVE_SEATS]: ActiveSeatsData;
  [LicenseFields.COLUMN_ACTIVATION_DATETIME]: string;
  [LicenseFields.COLUMN_EXPIRY_DATETIME]: string;
  [LicenseFields.COLUMN_AUTO_RENEW]: boolean;
  [LicenseFields.COLUMN_MESSAGE]: string;
  [LicenseFields.COLUMN_ACTIONS]: ActionsData;
  [LicenseFields.COLUMN_ACTION_MESSAGES]: Array<ActionMessagesData>;
  [LicenseFields.COLUMN_ORDER]: OrderData;
  [LicenseFields.COLUMN_VENDOR_LICENSE_ID]: string;
  [LicenseFields.COLUMN_PERIODICITY]: string;
  [LicenseFields.COLUMN_TERM]: string;
  [LicenseFields.COLUMN_CATEGORY]: string;
  [LicenseFields.COLUMN_PROGRAM]: string;
  [LicenseFields.COLUMN_ASSOCIATED_SUBSCRIPTION_PROGRAM]: string;
  [LicenseFields.COLUMN_PRICE]: LicensePriceData;
  [LicenseFields.COLUMN_ARROW_SUB_CATEGORIES]: Array<string>;
};

export class AbstractLicense extends AbstractEntity<LicenseData> {
  readonly #license_id: string;
  readonly #parent_license_id: string;
  readonly #friendlyName: string;
  readonly #customer_ref: string;
  readonly #state: string;
  readonly #service_ref: string;
  readonly #sku: string;
  readonly #name: string;
  readonly #seats: number;
  readonly #activeSeats: ActiveSeatsFindResult;
  readonly #activation_datetime: string;
  readonly #expiry_datetime: string;
  readonly #autoRenew: boolean;
  readonly #message: string;
  readonly #actions: ActionsFindResult;
  readonly #actionMessages: Array<ActionMessagesData>;
  readonly #order: OrderFindResult;
  readonly #vendor_license_id: string;
  readonly #periodicity: string;
  readonly #term: string;
  readonly #category: string;
  readonly #program: string;
  readonly #associatedSubscriptionProgram: string;
  readonly #price: LicensePriceFindResult;
  readonly #arrowSubCategories: Array<string>;

  public constructor(data: LicenseData) {
    super(data);

    this.#license_id = data[LicenseFields.COLUMN_LICENSE_ID];
    this.#parent_license_id = data[LicenseFields.COLUMN_PARENT_LICENSE_ID];
    this.#friendlyName = data[LicenseFields.COLUMN_FRIENDLY_NAME];
    this.#customer_ref = data[LicenseFields.COLUMN_CUSTOMER_REF];
    this.#state = data[LicenseFields.COLUMN_STATE];
    this.#service_ref = data[LicenseFields.COLUMN_SERVICE_REF];
    this.#sku = data[LicenseFields.COLUMN_SKU];
    this.#name = data[LicenseFields.COLUMN_NAME];
    this.#seats = data[LicenseFields.COLUMN_SEATS];
    const activeSeats: ActiveSeatsData = {
      [ActiveSeatsFields.COLUMN_NUMBER]:
        data[LicenseFields.COLUMN_ACTIVE_SEATS][
          ActiveSeatsFields.COLUMN_NUMBER
        ],
      [ActiveSeatsFields.COLUMN_LAST_UPDATE]:
        data[LicenseFields.COLUMN_ACTIVE_SEATS][
          ActiveSeatsFields.COLUMN_LAST_UPDATE
        ],
    };
    this.#activeSeats = new ActiveSeatsFindResult(activeSeats);
    this.#activation_datetime = data[LicenseFields.COLUMN_ACTIVATION_DATETIME];
    this.#expiry_datetime = data[LicenseFields.COLUMN_EXPIRY_DATETIME];
    this.#autoRenew = data[LicenseFields.COLUMN_AUTO_RENEW];
    this.#message = data[LicenseFields.COLUMN_MESSAGE];
    const actions: ActionsData = {
      [ActionsFields.COLUMN_HISTORY]:
        data[LicenseFields.COLUMN_ACTIONS][ActionsFields.COLUMN_HISTORY],
      [ActionsFields.COLUMN_UPDATE]:
        data[LicenseFields.COLUMN_ACTIONS][ActionsFields.COLUMN_UPDATE],
      [ActionsFields.COLUMN_INCREASE_SEATS]:
        data[LicenseFields.COLUMN_ACTIONS][ActionsFields.COLUMN_INCREASE_SEATS],
      [ActionsFields.COLUMN_DECREASE_SEATS]:
        data[LicenseFields.COLUMN_ACTIONS][ActionsFields.COLUMN_DECREASE_SEATS],
      [ActionsFields.COLUMN_ADDONS_CATALOG]:
        data[LicenseFields.COLUMN_ACTIONS][ActionsFields.COLUMN_ADDONS_CATALOG],
      [ActionsFields.COLUMN_SUSPEND]:
        data[LicenseFields.COLUMN_ACTIONS][ActionsFields.COLUMN_SUSPEND],
      [ActionsFields.COLUMN_REACTIVATE]:
        data[LicenseFields.COLUMN_ACTIONS][ActionsFields.COLUMN_REACTIVATE],
      [ActionsFields.COLUMN_AUTO_RENEW_OFF]:
        data[LicenseFields.COLUMN_ACTIONS][ActionsFields.COLUMN_AUTO_RENEW_OFF],
      [ActionsFields.COLUMN_AUTO_RENEW_ON]:
        data[LicenseFields.COLUMN_ACTIONS][ActionsFields.COLUMN_AUTO_RENEW_ON],
      [ActionsFields.COLUMN_CANCEL]:
        data[LicenseFields.COLUMN_ACTIONS][ActionsFields.COLUMN_CANCEL],
    };
    this.#actions = new ActionsFindResult(actions);
    this.#actionMessages = data[LicenseFields.COLUMN_ACTION_MESSAGES];
    const order: OrderData = {
      [OrderFields.COLUMN_REFRENCE]:
        data[LicenseFields.COLUMN_ORDER][OrderFields.COLUMN_REFRENCE],
      [OrderFields.COLUMN_LINK]:
        data[LicenseFields.COLUMN_ORDER][OrderFields.COLUMN_LINK],
    };
    this.#order = new OrderFindResult(order);
    this.#vendor_license_id = data[LicenseFields.COLUMN_VENDOR_LICENSE_ID];
    this.#periodicity = data[LicenseFields.COLUMN_PERIODICITY];
    this.#term = data[LicenseFields.COLUMN_TERM];
    this.#category = data[LicenseFields.COLUMN_CATEGORY];
    this.#program = data[LicenseFields.COLUMN_PROGRAM];
    this.#associatedSubscriptionProgram =
      data[LicenseFields.COLUMN_ASSOCIATED_SUBSCRIPTION_PROGRAM];
    const price: LicensePriceData = {
      [LicensePriceFields.COLUMN_UNIT]:
        data[LicenseFields.COLUMN_PRICE][LicensePriceFields.COLUMN_UNIT],
      [LicensePriceFields.COLUMN_TOTAL]:
        data[LicenseFields.COLUMN_PRICE][LicensePriceFields.COLUMN_TOTAL],
    };
    this.#price = new LicensePriceFindResult(price);
    this.#arrowSubCategories = data[LicenseFields.COLUMN_ARROW_SUB_CATEGORIES];
  }

  public get id(): string {
    return this.#license_id;
  }

  public get parent_license_id(): string {
    return this.#parent_license_id;
  }

  public get friendlyName(): string {
    return this.#friendlyName;
  }

  public get customer_ref(): string {
    return this.#customer_ref;
  }

  public get state(): string {
    return this.#state;
  }

  public get service_ref(): string {
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

  public get activation_datetime(): string {
    return this.#activation_datetime;
  }

  public get expiry_datetime(): string {
    return this.#expiry_datetime;
  }

  public get autoRenew(): boolean {
    return this.#autoRenew;
  }

  public get message(): string {
    return this.#message;
  }

  public get actions(): ActionsFindResult {
    return this.#actions;
  }

  public get actionMessages(): Array<ActionMessagesData> {
    return this.#actionMessages;
  }

  public get order(): OrderFindResult {
    return this.#order;
  }

  public get vendor_license_id(): string {
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

  public get price(): LicensePriceFindResult {
    return this.#price;
  }

  public get arrowSubCategories(): Array<string> {
    return this.#arrowSubCategories;
  }

  public toJSON(): LicenseData {
    return {
      [LicenseFields.COLUMN_LICENSE_ID]: this.id,
      [LicenseFields.COLUMN_PARENT_LICENSE_ID]: this.parent_license_id,
      [LicenseFields.COLUMN_FRIENDLY_NAME]: this.friendlyName,
      [LicenseFields.COLUMN_CUSTOMER_REF]: this.customer_ref,
      [LicenseFields.COLUMN_STATE]: this.state,
      [LicenseFields.COLUMN_SERVICE_REF]: this.service_ref,
      [LicenseFields.COLUMN_SKU]: this.sku,
      [LicenseFields.COLUMN_NAME]: this.name,
      [LicenseFields.COLUMN_SEATS]: this.seats,
      [LicenseFields.COLUMN_ACTIVE_SEATS]: this.activeSeats.toJSON(),
      [LicenseFields.COLUMN_ACTIVATION_DATETIME]: this.activation_datetime,
      [LicenseFields.COLUMN_EXPIRY_DATETIME]: this.expiry_datetime,
      [LicenseFields.COLUMN_AUTO_RENEW]: this.autoRenew,
      [LicenseFields.COLUMN_MESSAGE]: this.message,
      [LicenseFields.COLUMN_ACTIONS]: this.actions.toJSON(),
      [LicenseFields.COLUMN_ACTION_MESSAGES]: this.actionMessages,
      [LicenseFields.COLUMN_ORDER]: this.order.toJSON(),
      [LicenseFields.COLUMN_VENDOR_LICENSE_ID]: this.vendor_license_id,
      [LicenseFields.COLUMN_PERIODICITY]: this.periodicity,
      [LicenseFields.COLUMN_TERM]: this.term,
      [LicenseFields.COLUMN_CATEGORY]: this.category,
      [LicenseFields.COLUMN_PROGRAM]: this.program,
      [LicenseFields.COLUMN_ASSOCIATED_SUBSCRIPTION_PROGRAM]: this
        .associatedSubscriptionProgram,
      [LicenseFields.COLUMN_PRICE]: this.price.toJSON(),
      [LicenseFields.COLUMN_ARROW_SUB_CATEGORIES]: this.arrowSubCategories,
    };
  }
}
