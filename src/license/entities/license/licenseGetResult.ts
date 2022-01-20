import {
  ActionsGetData,
  ActionsGetFields,
  ActionsGetResult,
} from './actionsGetResult';
import { ActionMessagesGetResultData } from './actionMessagesGetResult';
import { OrderGetData, OrderGetFields, OrderGetResult } from './orderGetResult';
import {
  LicensePriceGetData,
  LicensePriceGetFields,
  LicensePriceFindResult,
} from './licensePriceFindResult';
import { AbstractEntity } from '../../../abstractEntity';
import {
  ActiveSeatsGetResult,
  ActiveSeatsGetResultData,
} from './activeSeatsGetResult';
import { ActiveSeatsFields } from '../../../common/abstract/abstractActiveSeats';

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
  [LicenseGetFields.COLUMN_PARENT_LICENSE_ID]: string;
  [LicenseGetFields.COLUMN_FRIENDLY_NAME]: string;
  [LicenseGetFields.COLUMN_CUSTOMER_REF]: string;
  [LicenseGetFields.COLUMN_STATE]: string;
  [LicenseGetFields.COLUMN_SERVICE_REF]: string;
  [LicenseGetFields.COLUMN_SKU]: string;
  [LicenseGetFields.COLUMN_NAME]: string;
  [LicenseGetFields.COLUMN_SEATS]: number;
  [LicenseGetFields.COLUMN_ACTIVE_SEATS]: ActiveSeatsGetResultData;
  [LicenseGetFields.COLUMN_ACTIVATION_DATETIME]: string;
  [LicenseGetFields.COLUMN_EXPIRY_DATETIME]: string;
  [LicenseGetFields.COLUMN_AUTO_RENEW]: boolean;
  [LicenseGetFields.COLUMN_MESSAGE]: string;
  [LicenseGetFields.COLUMN_ACTIONS]: ActionsGetData;
  [LicenseGetFields.COLUMN_ACTION_MESSAGES]: Array<ActionMessagesGetResultData>;
  [LicenseGetFields.COLUMN_ORDER_REFERENCE]: string;
  [LicenseGetFields.COLUMN_ORDER]: OrderGetData;
  [LicenseGetFields.COLUMN_VENDOR_LICENSE_ID]: string;
  [LicenseGetFields.COLUMN_PERIODICITY]: string;
  [LicenseGetFields.COLUMN_TERM]: string;
  [LicenseGetFields.COLUMN_CATEGORY]: string;
  [LicenseGetFields.COLUMN_PROGRAM]: string;
  [LicenseGetFields.COLUMN_ASSOCIATED_SUBSCRIPTION_PROGRAM]: string;
  [LicenseGetFields.COLUMN_PRICE]: LicensePriceGetData;
  [LicenseGetFields.COLUMN_ARROW_SUB_CATEGORIES]: Array<string>;
};

export class LicenseGetResult extends AbstractEntity<LicenseGetData> {
  readonly #license_id: string;
  readonly #parent_license_id: string;
  readonly #friendlyName: string;
  readonly #customer_ref: string;
  readonly #state: string;
  readonly #service_ref: string;
  readonly #sku: string;
  readonly #name: string;
  readonly #seats: number;
  readonly #activeSeats: ActiveSeatsGetResult;
  readonly #activation_datetime: string;
  readonly #expiry_datetime: string;
  readonly #autoRenew: boolean;
  readonly #message: string;
  readonly #actions: ActionsGetResult;
  readonly #actionMessages: Array<ActionMessagesGetResultData>;
  readonly #order_reference: string;
  readonly #order: OrderGetResult;
  readonly #vendor_license_id: string;
  readonly #periodicity: string;
  readonly #term: string;
  readonly #category: string;
  readonly #program: string;
  readonly #associatedSubscriptionProgram: string;
  readonly #price: LicensePriceFindResult;
  readonly #arrowSubCategories: Array<string>;

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
    const activeSeats: ActiveSeatsGetResultData = {
      [ActiveSeatsFields.COLUMN_NUMBER]:
        data[LicenseGetFields.COLUMN_ACTIVE_SEATS][
          ActiveSeatsFields.COLUMN_NUMBER
        ],
      [ActiveSeatsFields.COLUMN_LAST_UPDATE]:
        data[LicenseGetFields.COLUMN_ACTIVE_SEATS][
          ActiveSeatsFields.COLUMN_LAST_UPDATE
        ],
    };
    this.#activeSeats = new ActiveSeatsGetResult(activeSeats);
    this.#activation_datetime =
      data[LicenseGetFields.COLUMN_ACTIVATION_DATETIME];
    this.#expiry_datetime = data[LicenseGetFields.COLUMN_EXPIRY_DATETIME];
    this.#autoRenew = data[LicenseGetFields.COLUMN_AUTO_RENEW];
    this.#message = data[LicenseGetFields.COLUMN_MESSAGE];
    const actions: ActionsGetData = {
      [ActionsGetFields.COLUMN_HISTORY]:
        data[LicenseGetFields.COLUMN_ACTIONS][ActionsGetFields.COLUMN_HISTORY],
      [ActionsGetFields.COLUMN_UPDATE]:
        data[LicenseGetFields.COLUMN_ACTIONS][ActionsGetFields.COLUMN_UPDATE],
      [ActionsGetFields.COLUMN_INCREASE_SEATS]:
        data[LicenseGetFields.COLUMN_ACTIONS][
          ActionsGetFields.COLUMN_INCREASE_SEATS
        ],
      [ActionsGetFields.COLUMN_DECREASE_SEATS]:
        data[LicenseGetFields.COLUMN_ACTIONS][
          ActionsGetFields.COLUMN_DECREASE_SEATS
        ],
      [ActionsGetFields.COLUMN_ADDONS_CATALOG]:
        data[LicenseGetFields.COLUMN_ACTIONS][
          ActionsGetFields.COLUMN_ADDONS_CATALOG
        ],
      [ActionsGetFields.COLUMN_SUSPEND]:
        data[LicenseGetFields.COLUMN_ACTIONS][ActionsGetFields.COLUMN_SUSPEND],
      [ActionsGetFields.COLUMN_REACTIVATE]:
        data[LicenseGetFields.COLUMN_ACTIONS][
          ActionsGetFields.COLUMN_REACTIVATE
        ],
      [ActionsGetFields.COLUMN_AUTO_RENEW_OFF]:
        data[LicenseGetFields.COLUMN_ACTIONS][
          ActionsGetFields.COLUMN_AUTO_RENEW_OFF
        ],
      [ActionsGetFields.COLUMN_AUTO_RENEW_ON]:
        data[LicenseGetFields.COLUMN_ACTIONS][
          ActionsGetFields.COLUMN_AUTO_RENEW_ON
        ],
      [ActionsGetFields.COLUMN_CANCEL]:
        data[LicenseGetFields.COLUMN_ACTIONS][ActionsGetFields.COLUMN_CANCEL],
    };
    this.#actions = new ActionsGetResult(actions);
    this.#actionMessages = data[LicenseGetFields.COLUMN_ACTION_MESSAGES];
    const order: OrderGetData = {
      [OrderGetFields.COLUMN_REFERENCE]:
        data[LicenseGetFields.COLUMN_ORDER][OrderGetFields.COLUMN_REFERENCE],
      [OrderGetFields.COLUMN_LINK]:
        data[LicenseGetFields.COLUMN_ORDER][OrderGetFields.COLUMN_LINK],
    };
    this.#order_reference = data[LicenseGetFields.COLUMN_ORDER_REFERENCE];
    this.#order = new OrderGetResult(order);
    this.#vendor_license_id = data[LicenseGetFields.COLUMN_VENDOR_LICENSE_ID];
    this.#periodicity = data[LicenseGetFields.COLUMN_PERIODICITY];
    this.#term = data[LicenseGetFields.COLUMN_TERM];
    this.#category = data[LicenseGetFields.COLUMN_CATEGORY];
    this.#program = data[LicenseGetFields.COLUMN_PROGRAM];
    this.#associatedSubscriptionProgram =
      data[LicenseGetFields.COLUMN_ASSOCIATED_SUBSCRIPTION_PROGRAM];
    const price: LicensePriceGetData = {
      [LicensePriceGetFields.COLUMN_UNIT]:
        data[LicenseGetFields.COLUMN_PRICE][LicensePriceGetFields.COLUMN_UNIT],
      [LicensePriceGetFields.COLUMN_TOTAL]:
        data[LicenseGetFields.COLUMN_PRICE][LicensePriceGetFields.COLUMN_TOTAL],
    };
    this.#price = new LicensePriceFindResult(price);
    this.#arrowSubCategories =
      data[LicenseGetFields.COLUMN_ARROW_SUB_CATEGORIES];
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

  public get activeSeats(): ActiveSeatsGetResult {
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

  public get actions(): ActionsGetResult {
    return this.#actions;
  }

  public get actionMessages(): Array<ActionMessagesGetResultData> {
    return this.#actionMessages;
  }

  public get orderReference(): string {
    return this.#order_reference;
  }

  public get order(): OrderGetResult {
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

  public toJSON(): LicenseGetData {
    return {
      [LicenseGetFields.COLUMN_LICENSE_ID]: this.id,
      [LicenseGetFields.COLUMN_PARENT_LICENSE_ID]: this.parent_license_id,
      [LicenseGetFields.COLUMN_FRIENDLY_NAME]: this.friendlyName,
      [LicenseGetFields.COLUMN_CUSTOMER_REF]: this.customer_ref,
      [LicenseGetFields.COLUMN_STATE]: this.state,
      [LicenseGetFields.COLUMN_SERVICE_REF]: this.service_ref,
      [LicenseGetFields.COLUMN_SKU]: this.sku,
      [LicenseGetFields.COLUMN_NAME]: this.name,
      [LicenseGetFields.COLUMN_SEATS]: this.seats,
      [LicenseGetFields.COLUMN_ACTIVE_SEATS]: this.activeSeats.toJSON(),
      [LicenseGetFields.COLUMN_ACTIVATION_DATETIME]: this.activation_datetime,
      [LicenseGetFields.COLUMN_EXPIRY_DATETIME]: this.expiry_datetime,
      [LicenseGetFields.COLUMN_AUTO_RENEW]: this.autoRenew,
      [LicenseGetFields.COLUMN_MESSAGE]: this.message,
      [LicenseGetFields.COLUMN_ACTIONS]: this.actions.toJSON(),
      [LicenseGetFields.COLUMN_ACTION_MESSAGES]: this.actionMessages,
      [LicenseGetFields.COLUMN_ORDER_REFERENCE]: this.orderReference,
      [LicenseGetFields.COLUMN_ORDER]: this.order.toJSON(),
      [LicenseGetFields.COLUMN_VENDOR_LICENSE_ID]: this.vendor_license_id,
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
