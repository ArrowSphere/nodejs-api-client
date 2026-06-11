import { AbstractEntity } from '../../../abstractEntity';
import { AlertFilters, AlertFiltersType } from './filters/alertFilters';

export enum AlertFrequencyEnum {
  DAILY = 'daily',
  MONTHLY = 'monthly',
  WEEKLY = 'weekly',
}

export enum AlertFormatEnum {
  CSV = 'csv',
  XLSX = 'xlsx',
}

export enum AlertFields {
  COLUMN_ID = 'id',
  COLUMN_CATEGORY_ID = 'categoryId',
  COLUMN_NAME = 'name',
  COLUMN_FREQUENCY = 'frequency',
  COLUMN_RECIPIENT = 'recipient',
  COLUMN_FORMAT = 'format',
  COLUMN_FILTERS = 'filters',
}

export type AlertType = {
  [AlertFields.COLUMN_ID]: number;
  [AlertFields.COLUMN_CATEGORY_ID]: number;
  [AlertFields.COLUMN_NAME]: string;
  [AlertFields.COLUMN_FREQUENCY]: AlertFrequencyEnum;
  [AlertFields.COLUMN_RECIPIENT]: string;
  [AlertFields.COLUMN_FORMAT]: AlertFormatEnum;
  [AlertFields.COLUMN_FILTERS]: AlertFiltersType;
};

export class Alert extends AbstractEntity<AlertType> {
  readonly #id: number;
  readonly #categoryId: number;
  readonly #name: string;
  readonly #frequency: AlertFrequencyEnum;
  readonly #recipient: string;
  readonly #format: AlertFormatEnum;
  readonly #filters: AlertFilters;

  public constructor(data: AlertType) {
    super(data);

    this.#id = data.id;
    this.#categoryId = data.categoryId;
    this.#name = data.name;
    this.#frequency = data.frequency;
    this.#recipient = data.recipient;
    this.#format = data.format;
    this.#filters = new AlertFilters(
      data[AlertFields.COLUMN_FILTERS] as AlertFiltersType,
    );
  }

  public get id(): number {
    return this.#id;
  }

  public get categoryId(): number {
    return this.#categoryId;
  }

  public get name(): string {
    return this.#name;
  }

  public get frequency(): AlertFrequencyEnum {
    return this.#frequency;
  }

  public get recipient(): string {
    return this.#recipient;
  }

  public get format(): AlertFormatEnum {
    return this.#format;
  }

  public get filters(): AlertFilters {
    return this.#filters;
  }

  public toJSON(): AlertType {
    return {
      [AlertFields.COLUMN_ID]: this.id,
      [AlertFields.COLUMN_CATEGORY_ID]: this.categoryId,
      [AlertFields.COLUMN_NAME]: this.name,
      [AlertFields.COLUMN_FREQUENCY]: this.frequency,
      [AlertFields.COLUMN_RECIPIENT]: this.recipient,
      [AlertFields.COLUMN_FORMAT]: this.format,
      [AlertFields.COLUMN_FILTERS]: this.filters.toJSON(),
    };
  }
}
