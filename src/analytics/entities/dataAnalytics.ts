import { AbstractEntity } from '../../abstractEntity';
import { Analytics, AnalyticsType } from './analytics';

export type DataAnalyticsType = Array<AnalyticsType>;
export class DataAnalytics extends AbstractEntity<DataAnalyticsType> {
  readonly #data: Array<Analytics>;

  public constructor(dataInput: DataAnalyticsType) {
    super(dataInput);

    this.#data = dataInput.map((it) => new Analytics(it));
  }

  get data(): Array<Analytics> {
    return this.#data;
  }

  public toJSON(): DataAnalyticsType {
    return this.data.map((it) => it.toJSON());
  }
}
