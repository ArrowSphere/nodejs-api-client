import { AbstractEntity } from '../../../../abstractEntity';
import { RenewalFilters, RenewalFiltersType } from './renewalFilters';

export enum AlertFiltersFields {
  COLUMN_RENEWAL = 'renewal',
}

export type AlertFiltersType = {
  [AlertFiltersFields.COLUMN_RENEWAL]?: RenewalFiltersType;
};

export class AlertFilters extends AbstractEntity<AlertFiltersType> {
  readonly #renewal?: RenewalFilters;

  public constructor(data: AlertFiltersType) {
    super(data);

    this.#renewal = data[AlertFiltersFields.COLUMN_RENEWAL]
      ? new RenewalFilters(
          data[AlertFiltersFields.COLUMN_RENEWAL] as RenewalFiltersType,
        )
      : undefined;
  }

  public get renewal(): RenewalFilters | undefined {
    return this.#renewal;
  }

  public toJSON(): AlertFiltersType {
    return {
      [AlertFiltersFields.COLUMN_RENEWAL]: this.renewal?.toJSON(),
    };
  }
}
