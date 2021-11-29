import { AbstractEntity } from '../../../../abstractEntity';
import { Rules } from 'validatorjs';
import {
  DataKeywords,
  FiltersParameters,
  SortParameters,
} from '../../../licensesClient';

export enum PriceBandActionFlagsFields {
  COLUMN_CAN_BE_CANCELLED = 'canBeCancelled',
  COLUMN_CAN_BE_REACTIVATED = 'canBeReactivated',
  COLUMN_CAN_BE_SUSPENDED = 'canBeSuspended',
  COLUMN_CAN_DECREASE_SEATS = 'canDecreaseSeats',
  COLUMN_CAN_INCREASE_SEATS = 'canIncreaseSeats',
}

export type PriceBandActionFlagsData = {
  [PriceBandActionFlagsFields.COLUMN_CAN_BE_CANCELLED]: boolean;
  [PriceBandActionFlagsFields.COLUMN_CAN_BE_REACTIVATED]: boolean;
  [PriceBandActionFlagsFields.COLUMN_CAN_BE_SUSPENDED]: boolean;
  [PriceBandActionFlagsFields.COLUMN_CAN_DECREASE_SEATS]: boolean;
  [PriceBandActionFlagsFields.COLUMN_CAN_INCREASE_SEATS]: boolean;
};

export type PriceBandActionFlagsDataKeywords = {
  [PriceBandActionFlagsFields.COLUMN_CAN_BE_CANCELLED]?: DataKeywords;
  [PriceBandActionFlagsFields.COLUMN_CAN_BE_REACTIVATED]?: DataKeywords;
  [PriceBandActionFlagsFields.COLUMN_CAN_BE_SUSPENDED]?: DataKeywords;
  [PriceBandActionFlagsFields.COLUMN_CAN_DECREASE_SEATS]?: DataKeywords;
  [PriceBandActionFlagsFields.COLUMN_CAN_INCREASE_SEATS]?: DataKeywords;
};

export type PriceBandActionFlagsDataSortParameters = {
  [PriceBandActionFlagsFields.COLUMN_CAN_BE_CANCELLED]?: SortParameters;
  [PriceBandActionFlagsFields.COLUMN_CAN_BE_REACTIVATED]?: SortParameters;
  [PriceBandActionFlagsFields.COLUMN_CAN_BE_SUSPENDED]?: SortParameters;
  [PriceBandActionFlagsFields.COLUMN_CAN_DECREASE_SEATS]?: SortParameters;
  [PriceBandActionFlagsFields.COLUMN_CAN_INCREASE_SEATS]?: SortParameters;
};

export type PriceBandActionFlagsDataFiltersParameters = {
  [PriceBandActionFlagsFields.COLUMN_CAN_BE_CANCELLED]?: FiltersParameters;
  [PriceBandActionFlagsFields.COLUMN_CAN_BE_REACTIVATED]?: FiltersParameters;
  [PriceBandActionFlagsFields.COLUMN_CAN_BE_SUSPENDED]?: FiltersParameters;
  [PriceBandActionFlagsFields.COLUMN_CAN_DECREASE_SEATS]?: FiltersParameters;
  [PriceBandActionFlagsFields.COLUMN_CAN_INCREASE_SEATS]?: FiltersParameters;
};

export abstract class AbstractPriceBandActionFlags extends AbstractEntity<PriceBandActionFlagsData> {
  protected VALIDATION_RULES: Rules = {
    [PriceBandActionFlagsFields.COLUMN_CAN_BE_CANCELLED]: 'required|boolean',
    [PriceBandActionFlagsFields.COLUMN_CAN_BE_REACTIVATED]: 'required|boolean',
    [PriceBandActionFlagsFields.COLUMN_CAN_BE_SUSPENDED]: 'required|boolean',
    [PriceBandActionFlagsFields.COLUMN_CAN_DECREASE_SEATS]: 'required|boolean',
    [PriceBandActionFlagsFields.COLUMN_CAN_INCREASE_SEATS]: 'required|boolean',
  };

  readonly #canBeCancelled: boolean;
  readonly #canBeReactivated: boolean;
  readonly #canBeSuspended: boolean;
  readonly #canDecreaseSeats: boolean;
  readonly #canIncreaseSeats: boolean;

  protected constructor(data: PriceBandActionFlagsData) {
    super(data);

    this.#canBeCancelled =
      data[PriceBandActionFlagsFields.COLUMN_CAN_BE_CANCELLED];
    this.#canBeReactivated =
      data[PriceBandActionFlagsFields.COLUMN_CAN_BE_REACTIVATED];
    this.#canBeSuspended =
      data[PriceBandActionFlagsFields.COLUMN_CAN_BE_SUSPENDED];
    this.#canDecreaseSeats =
      data[PriceBandActionFlagsFields.COLUMN_CAN_DECREASE_SEATS];
    this.#canIncreaseSeats =
      data[PriceBandActionFlagsFields.COLUMN_CAN_INCREASE_SEATS];
  }

  public get canBeCancelled(): boolean {
    return this.#canBeCancelled;
  }

  public get canBeReactivated(): boolean {
    return this.#canBeReactivated;
  }

  public get canBeSuspended(): boolean {
    return this.#canBeSuspended;
  }

  public get canDecreaseSeats(): boolean {
    return this.#canDecreaseSeats;
  }

  public get canIncreaseSeats(): boolean {
    return this.#canIncreaseSeats;
  }

  public toJSON(): PriceBandActionFlagsData {
    return {
      [PriceBandActionFlagsFields.COLUMN_CAN_BE_CANCELLED]: this.canBeCancelled,
      [PriceBandActionFlagsFields.COLUMN_CAN_BE_REACTIVATED]: this
        .canBeReactivated,
      [PriceBandActionFlagsFields.COLUMN_CAN_BE_SUSPENDED]: this.canBeSuspended,
      [PriceBandActionFlagsFields.COLUMN_CAN_DECREASE_SEATS]: this
        .canDecreaseSeats,
      [PriceBandActionFlagsFields.COLUMN_CAN_INCREASE_SEATS]: this
        .canIncreaseSeats,
    };
  }
}
