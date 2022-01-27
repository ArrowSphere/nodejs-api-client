import { AbstractEntity } from '../../../abstractEntity';

export enum ActionsGetFields {
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

export type ActionsGetData = {
  [ActionsGetFields.COLUMN_HISTORY]: string;
  [ActionsGetFields.COLUMN_UPDATE]?: string;
  [ActionsGetFields.COLUMN_INCREASE_SEATS]?: string;
  [ActionsGetFields.COLUMN_DECREASE_SEATS]?: string;
  [ActionsGetFields.COLUMN_ADDONS_CATALOG]?: string;
  [ActionsGetFields.COLUMN_SUSPEND]?: string;
  [ActionsGetFields.COLUMN_REACTIVATE]?: string;
  [ActionsGetFields.COLUMN_AUTO_RENEW_OFF]?: string;
  [ActionsGetFields.COLUMN_AUTO_RENEW_ON]?: string;
  [ActionsGetFields.COLUMN_CANCEL]?: string;
};

export class ActionsGetResult extends AbstractEntity<ActionsGetData> {
  readonly #history: string;
  readonly #update?: string;
  readonly #increaseSeats?: string;
  readonly #decreaseSeats?: string;
  readonly #addons_catalog?: string;
  readonly #suspend?: string;
  readonly #reactivate?: string;
  readonly #autoRenewOff?: string;
  readonly #autoRenewOn?: string;
  readonly #cancel?: string;

  public constructor(data: ActionsGetData) {
    super(data);

    this.#history = data[ActionsGetFields.COLUMN_HISTORY];
    this.#update = data[ActionsGetFields.COLUMN_UPDATE];
    this.#increaseSeats = data[ActionsGetFields.COLUMN_INCREASE_SEATS];
    this.#decreaseSeats = data[ActionsGetFields.COLUMN_DECREASE_SEATS];
    this.#addons_catalog = data[ActionsGetFields.COLUMN_ADDONS_CATALOG];
    this.#suspend = data[ActionsGetFields.COLUMN_SUSPEND];
    this.#reactivate = data[ActionsGetFields.COLUMN_REACTIVATE];
    this.#autoRenewOff = data[ActionsGetFields.COLUMN_AUTO_RENEW_OFF];
    this.#autoRenewOn = data[ActionsGetFields.COLUMN_AUTO_RENEW_ON];
    this.#cancel = data[ActionsGetFields.COLUMN_CANCEL];
  }

  public get history(): string {
    return this.#history;
  }

  public get update(): string | undefined {
    return this.#update;
  }

  public get increaseSeats(): string | undefined {
    return this.#increaseSeats;
  }

  public get decreaseSeats(): string | undefined {
    return this.#decreaseSeats;
  }

  public get addonsCatalog(): string | undefined {
    return this.#addons_catalog;
  }

  public get suspend(): string | undefined {
    return this.#suspend;
  }

  public get reactivate(): string | undefined {
    return this.#reactivate;
  }

  public get autoRenewOff(): string | undefined {
    return this.#autoRenewOff;
  }

  public get autoRenewOn(): string | undefined {
    return this.#autoRenewOn;
  }

  public get cancel(): string | undefined {
    return this.#cancel;
  }

  public toJSON(): ActionsGetData {
    return {
      [ActionsGetFields.COLUMN_HISTORY]: this.history,
      [ActionsGetFields.COLUMN_UPDATE]: this.update,
      [ActionsGetFields.COLUMN_INCREASE_SEATS]: this.increaseSeats,
      [ActionsGetFields.COLUMN_DECREASE_SEATS]: this.decreaseSeats,
      [ActionsGetFields.COLUMN_ADDONS_CATALOG]: this.addonsCatalog,
      [ActionsGetFields.COLUMN_SUSPEND]: this.suspend,
      [ActionsGetFields.COLUMN_REACTIVATE]: this.reactivate,
      [ActionsGetFields.COLUMN_AUTO_RENEW_OFF]: this.autoRenewOff,
      [ActionsGetFields.COLUMN_AUTO_RENEW_ON]: this.autoRenewOn,
      [ActionsGetFields.COLUMN_CANCEL]: this.cancel,
    };
  }
}
