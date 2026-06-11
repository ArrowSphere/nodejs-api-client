import { AbstractEntity } from '../../../abstractEntity';
import { Alert, AlertType } from './alert';

export type AlertListType = Array<AlertType>;

export class AlertList extends AbstractEntity<AlertListType> {
  readonly #alertList: Array<Alert>;

  public constructor(data: Array<AlertType>) {
    super(data);

    this.#alertList = data.map((alert: AlertType) => new Alert(alert));
  }

  get alertList(): Array<Alert> {
    return this.#alertList;
  }

  public toJSON(): AlertListType {
    return this.alertList.map((alert: Alert): AlertType => alert.toJSON());
  }
}
