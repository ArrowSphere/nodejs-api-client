import { AbstractEntity } from '../../../abstractEntity';

export enum ScheduledTaskDetailsFields {
  COLUMN_CREATE = 'create',
  COLUMN_DELETE = 'delete',
  COLUMN_UPDATE = 'update',
}

export type ScheduledTaskDetailsType = {
  [ScheduledTaskDetailsFields.COLUMN_CREATE]?: string;
  [ScheduledTaskDetailsFields.COLUMN_DELETE]?: string;
  [ScheduledTaskDetailsFields.COLUMN_UPDATE]?: string;
};

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
  COLUMN_AUTO_RENEW_TO_EST = 'autoRenewToEst',
  COLUMN_CANCEL = 'cancel',
  COLUMN_CONVERSION = 'conversion',
  COLUMN_PAUSE = 'pause',
  COLUMN_UPGRADE = 'upgrade',
  COLUMN_UPDATE_FRIENDLY_NAME = 'updateFriendlyName',
  COLUMN_SCHEDULED_TASK = 'scheduledTask',
  COLUMN_SCHEDULED_TASK_DETAILS = 'scheduledTaskDetails',
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
  [ActionsGetFields.COLUMN_AUTO_RENEW_TO_EST]?: string;
  [ActionsGetFields.COLUMN_CANCEL]?: string;
  [ActionsGetFields.COLUMN_CONVERSION]?: string;
  [ActionsGetFields.COLUMN_PAUSE]?: string;
  [ActionsGetFields.COLUMN_UPGRADE]?: string;
  [ActionsGetFields.COLUMN_UPDATE_FRIENDLY_NAME]?: string;
  [ActionsGetFields.COLUMN_SCHEDULED_TASK]?: string;
  [ActionsGetFields.COLUMN_SCHEDULED_TASK_DETAILS]?: ScheduledTaskDetailsType;
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
  readonly #autoRenewToEst?: string;
  readonly #cancel?: string;
  readonly #conversion?: string;
  readonly #pause?: string;
  readonly #upgrade?: string;
  readonly #updateFriendlyName?: string;
  readonly #scheduledTask?: string;
  readonly #scheduledTaskDetails?: Record<string, string>;

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
    this.#autoRenewToEst = data[ActionsGetFields.COLUMN_AUTO_RENEW_TO_EST];
    this.#cancel = data[ActionsGetFields.COLUMN_CANCEL];
    this.#conversion = data[ActionsGetFields.COLUMN_CONVERSION];
    this.#pause = data[ActionsGetFields.COLUMN_PAUSE];
    this.#upgrade = data[ActionsGetFields.COLUMN_UPGRADE];
    this.#updateFriendlyName =
      data[ActionsGetFields.COLUMN_UPDATE_FRIENDLY_NAME];
    this.#scheduledTask = data[ActionsGetFields.COLUMN_SCHEDULED_TASK];
    this.#scheduledTaskDetails =
      data[ActionsGetFields.COLUMN_SCHEDULED_TASK_DETAILS];
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

  public get autoRenewToEst(): string | undefined {
    return this.#autoRenewToEst;
  }

  public get cancel(): string | undefined {
    return this.#cancel;
  }

  public get conversion(): string | undefined {
    return this.#conversion;
  }

  public get pause(): string | undefined {
    return this.#pause;
  }

  public get upgrade(): string | undefined {
    return this.#upgrade;
  }

  public get updateFriendlyName(): string | undefined {
    return this.#updateFriendlyName;
  }

  public get scheduledTask(): string | undefined {
    return this.#scheduledTask;
  }

  public get scheduledTaskDetails(): Record<string, string> | undefined {
    return this.#scheduledTaskDetails;
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
      [ActionsGetFields.COLUMN_AUTO_RENEW_TO_EST]: this.autoRenewToEst,
      [ActionsGetFields.COLUMN_CANCEL]: this.cancel,
      [ActionsGetFields.COLUMN_CONVERSION]: this.conversion,
      [ActionsGetFields.COLUMN_PAUSE]: this.pause,
      [ActionsGetFields.COLUMN_UPGRADE]: this.upgrade,
      [ActionsGetFields.COLUMN_UPDATE_FRIENDLY_NAME]: this.updateFriendlyName,
      [ActionsGetFields.COLUMN_SCHEDULED_TASK]: this.scheduledTask,
      [ActionsGetFields.COLUMN_SCHEDULED_TASK_DETAILS]: this
        .scheduledTaskDetails,
    };
  }
}
