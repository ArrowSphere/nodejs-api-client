import { AbstractEntity } from '../../../abstractEntity';

export enum ActionsFields {
  COLUMN_HISTORY = 'history',
  COLUMN_UPDATE = 'update',
  COLUMN_INCREASE_SEATS = 'increaseSeats',
  COLUMN_DECREASE_SEATS = 'decreaseSeats',
  COLUMN_ADDONS_CATALOG = 'addons catalog',
  COLUMN_SUSPEND = 'suspend',
  COLUMN_REACTIVATE = 'reactivate',
  COLUMN_AUTO_RENEW_OFF = 'autoRenewOff',
  COLUMN_AUTO_RENEW_ON = 'autoRenewOn',
  COLUMN_CANCEL = 'cancel',
}

export type ActionsData = {
  [ActionsFields.COLUMN_HISTORY]: string;
  [ActionsFields.COLUMN_UPDATE]: string;
  [ActionsFields.COLUMN_INCREASE_SEATS]: string;
  [ActionsFields.COLUMN_DECREASE_SEATS]: string;
  [ActionsFields.COLUMN_ADDONS_CATALOG]: string;
  [ActionsFields.COLUMN_SUSPEND]: string;
  [ActionsFields.COLUMN_REACTIVATE]: string;
  [ActionsFields.COLUMN_AUTO_RENEW_OFF]: string;
  [ActionsFields.COLUMN_AUTO_RENEW_ON]: string;
  [ActionsFields.COLUMN_CANCEL]: string;
};

export class AbstractActions extends AbstractEntity<ActionsData> {
  readonly #history: string;
  readonly #update: string;
  readonly #increaseSeats: string;
  readonly #decreaseSeats: string;
  readonly #addons_catalog: string;
  readonly #suspend: string;
  readonly #reactivate: string;
  readonly #autoRenewOff: string;
  readonly #autoRenewOn: string;
  readonly #cancel: string;

  public constructor(data: ActionsData) {
    super(data);

    this.#history = data[ActionsFields.COLUMN_HISTORY];
    this.#update = data[ActionsFields.COLUMN_HISTORY];
    this.#increaseSeats = data[ActionsFields.COLUMN_HISTORY];
    this.#decreaseSeats = data[ActionsFields.COLUMN_HISTORY];
    this.#addons_catalog = data[ActionsFields.COLUMN_HISTORY];
    this.#suspend = data[ActionsFields.COLUMN_HISTORY];
    this.#reactivate = data[ActionsFields.COLUMN_HISTORY];
    this.#autoRenewOff = data[ActionsFields.COLUMN_HISTORY];
    this.#autoRenewOn = data[ActionsFields.COLUMN_HISTORY];
    this.#cancel = data[ActionsFields.COLUMN_HISTORY];
  }

  public get history(): string {
    return this.#history;
  }

  public get update(): string {
    return this.#update;
  }

  public get increaseSeats(): string {
    return this.#increaseSeats;
  }

  public get decreaseSeats(): string {
    return this.#decreaseSeats;
  }

  public get addonsCatalog(): string {
    return this.#addons_catalog;
  }

  public get suspend(): string {
    return this.#suspend;
  }

  public get reactivate(): string {
    return this.#reactivate;
  }

  public get autoRenewOff(): string {
    return this.#autoRenewOff;
  }

  public get autoRenewOn(): string {
    return this.#autoRenewOn;
  }

  public get cancel(): string {
    return this.#cancel;
  }

  public toJSON(): ActionsData {
    return {
      [ActionsFields.COLUMN_HISTORY]: this.history,
      [ActionsFields.COLUMN_UPDATE]: this.update,
      [ActionsFields.COLUMN_INCREASE_SEATS]: this.increaseSeats,
      [ActionsFields.COLUMN_DECREASE_SEATS]: this.decreaseSeats,
      [ActionsFields.COLUMN_ADDONS_CATALOG]: this.addonsCatalog,
      [ActionsFields.COLUMN_SUSPEND]: this.suspend,
      [ActionsFields.COLUMN_REACTIVATE]: this.reactivate,
      [ActionsFields.COLUMN_AUTO_RENEW_OFF]: this.autoRenewOff,
      [ActionsFields.COLUMN_AUTO_RENEW_ON]: this.autoRenewOn,
      [ActionsFields.COLUMN_CANCEL]: this.cancel,
    };
  }
}
