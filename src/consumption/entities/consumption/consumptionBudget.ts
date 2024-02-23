import { AbstractEntity } from '../../../abstractEntity';

export enum ConsumptionBudgetFields {
  COLUMN_BUDGET_TYPE = 'budgetType',
  COLUMN_NOTIFICATIONS = 'notifications',
  COLUMN_SEND_NOTIFICATION = 'sendNotification',
  COLUMN_THRESHOLD = 'threshold',
}

export type ConsumptionBudgetType = {
  [ConsumptionBudgetFields.COLUMN_BUDGET_TYPE]: string;
  [ConsumptionBudgetFields.COLUMN_NOTIFICATIONS]?: number[];
  [ConsumptionBudgetFields.COLUMN_SEND_NOTIFICATION]: boolean;
  [ConsumptionBudgetFields.COLUMN_THRESHOLD]: number;
};

export class ConsumptionBudget extends AbstractEntity<ConsumptionBudgetType> {
  readonly #budgetType: string;
  readonly #notifications: number[] | undefined;
  readonly #sendNotification: boolean;
  readonly #threshold: number;

  public constructor(consumptionBudgetResponse: ConsumptionBudgetType) {
    super(consumptionBudgetResponse);

    this.#budgetType =
      consumptionBudgetResponse[ConsumptionBudgetFields.COLUMN_BUDGET_TYPE];
    this.#notifications =
      consumptionBudgetResponse[ConsumptionBudgetFields.COLUMN_NOTIFICATIONS];
    this.#sendNotification =
      consumptionBudgetResponse[
        ConsumptionBudgetFields.COLUMN_SEND_NOTIFICATION
      ];
    this.#threshold =
      consumptionBudgetResponse[ConsumptionBudgetFields.COLUMN_THRESHOLD];
  }

  get budgetType(): string {
    return this.#budgetType;
  }

  get threshold(): number {
    return this.#threshold;
  }

  get sendNotification(): boolean {
    return this.#sendNotification;
  }

  get notifications(): number[] | undefined {
    return this.#notifications;
  }

  public toJSON(): ConsumptionBudgetType {
    return {
      [ConsumptionBudgetFields.COLUMN_BUDGET_TYPE]: this.budgetType,
      [ConsumptionBudgetFields.COLUMN_NOTIFICATIONS]: this.notifications,
      [ConsumptionBudgetFields.COLUMN_SEND_NOTIFICATION]: this.sendNotification,
      [ConsumptionBudgetFields.COLUMN_THRESHOLD]: this.threshold,
    };
  }
}
