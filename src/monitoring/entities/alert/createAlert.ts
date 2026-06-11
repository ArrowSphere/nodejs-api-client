import { AbstractEntity } from '../../../abstractEntity';

export enum CreateAlertFields {
  COLUMN_ALERT_ID = 'alertId',
}
export type CreateAlertType = {
  [CreateAlertFields.COLUMN_ALERT_ID]: number;
};

export class CreateAlert extends AbstractEntity<CreateAlertType> {
  readonly #alertId: number;

  public constructor(data: CreateAlertType) {
    super(data);

    this.#alertId = data.alertId;
  }

  public get alertId(): number {
    return this.#alertId;
  }

  public toJSON(): CreateAlertType {
    return {
      [CreateAlertFields.COLUMN_ALERT_ID]: this.alertId,
    };
  }
}
