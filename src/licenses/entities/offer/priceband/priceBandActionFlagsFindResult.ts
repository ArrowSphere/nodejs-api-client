import {
  DataKeywords,
  FiltersParameters,
  SortParameters,
} from '../../../licensesClient';
import { AbstractEntity } from '../../../../abstractEntity';
import { Rules } from 'validatorjs';

export enum PriceBandActionFlagsFindResultFields {
  COLUMN_CAN_BE_CANCELLED = 'canBeCancelled',
  COLUMN_CAN_BE_REACTIVATED = 'canBeReactivated',
  COLUMN_CAN_BE_SUSPENDED = 'canBeSuspended',
  COLUMN_CAN_DECREASE_SEATS = 'canDecreaseSeats',
  COLUMN_CAN_INCREASE_SEATS = 'canIncreaseSeats',
}

export type PriceBandActionFlagsFindResultData = {
  [PriceBandActionFlagsFindResultFields.COLUMN_CAN_BE_CANCELLED]: boolean;
  [PriceBandActionFlagsFindResultFields.COLUMN_CAN_BE_REACTIVATED]: boolean;
  [PriceBandActionFlagsFindResultFields.COLUMN_CAN_BE_SUSPENDED]: boolean;
  [PriceBandActionFlagsFindResultFields.COLUMN_CAN_DECREASE_SEATS]: boolean;
  [PriceBandActionFlagsFindResultFields.COLUMN_CAN_INCREASE_SEATS]: boolean;
};

export type PriceBandActionFlagsFindResultDataKeywords = {
  [PriceBandActionFlagsFindResultFields.COLUMN_CAN_BE_CANCELLED]?: DataKeywords;
  [PriceBandActionFlagsFindResultFields.COLUMN_CAN_BE_REACTIVATED]?: DataKeywords;
  [PriceBandActionFlagsFindResultFields.COLUMN_CAN_BE_SUSPENDED]?: DataKeywords;
  [PriceBandActionFlagsFindResultFields.COLUMN_CAN_DECREASE_SEATS]?: DataKeywords;
  [PriceBandActionFlagsFindResultFields.COLUMN_CAN_INCREASE_SEATS]?: DataKeywords;
};

export type PriceBandActionFlagsDataFindResultSortParameters = {
  [PriceBandActionFlagsFindResultFields.COLUMN_CAN_BE_CANCELLED]?: SortParameters;
  [PriceBandActionFlagsFindResultFields.COLUMN_CAN_BE_REACTIVATED]?: SortParameters;
  [PriceBandActionFlagsFindResultFields.COLUMN_CAN_BE_SUSPENDED]?: SortParameters;
  [PriceBandActionFlagsFindResultFields.COLUMN_CAN_DECREASE_SEATS]?: SortParameters;
  [PriceBandActionFlagsFindResultFields.COLUMN_CAN_INCREASE_SEATS]?: SortParameters;
};

export type PriceBandActionFlagsFindResultDataFiltersParameters = {
  [PriceBandActionFlagsFindResultFields.COLUMN_CAN_BE_CANCELLED]?: FiltersParameters;
  [PriceBandActionFlagsFindResultFields.COLUMN_CAN_BE_REACTIVATED]?: FiltersParameters;
  [PriceBandActionFlagsFindResultFields.COLUMN_CAN_BE_SUSPENDED]?: FiltersParameters;
  [PriceBandActionFlagsFindResultFields.COLUMN_CAN_DECREASE_SEATS]?: FiltersParameters;
  [PriceBandActionFlagsFindResultFields.COLUMN_CAN_INCREASE_SEATS]?: FiltersParameters;
};

export class PriceBandActionFlagsFindResult extends AbstractEntity<PriceBandActionFlagsFindResultData> {
  protected VALIDATION_RULES: Rules = {
    [PriceBandActionFlagsFindResultFields.COLUMN_CAN_BE_CANCELLED]:
      'required|boolean',
    [PriceBandActionFlagsFindResultFields.COLUMN_CAN_BE_REACTIVATED]:
      'required|boolean',
    [PriceBandActionFlagsFindResultFields.COLUMN_CAN_BE_SUSPENDED]:
      'required|boolean',
    [PriceBandActionFlagsFindResultFields.COLUMN_CAN_DECREASE_SEATS]:
      'required|boolean',
    [PriceBandActionFlagsFindResultFields.COLUMN_CAN_INCREASE_SEATS]:
      'required|boolean',
  };

  readonly #canBeCancelled: boolean;
  readonly #canBeReactivated: boolean;
  readonly #canBeSuspended: boolean;
  readonly #canDecreaseSeats: boolean;
  readonly #canIncreaseSeats: boolean;

  public constructor(data: PriceBandActionFlagsFindResultData) {
    super(data);

    this.#canBeCancelled =
      data[PriceBandActionFlagsFindResultFields.COLUMN_CAN_BE_CANCELLED];
    this.#canBeReactivated =
      data[PriceBandActionFlagsFindResultFields.COLUMN_CAN_BE_REACTIVATED];
    this.#canBeSuspended =
      data[PriceBandActionFlagsFindResultFields.COLUMN_CAN_BE_SUSPENDED];
    this.#canDecreaseSeats =
      data[PriceBandActionFlagsFindResultFields.COLUMN_CAN_DECREASE_SEATS];
    this.#canIncreaseSeats =
      data[PriceBandActionFlagsFindResultFields.COLUMN_CAN_INCREASE_SEATS];
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

  public toJSON(): PriceBandActionFlagsFindResultData {
    return {
      [PriceBandActionFlagsFindResultFields.COLUMN_CAN_BE_CANCELLED]: this
        .canBeCancelled,
      [PriceBandActionFlagsFindResultFields.COLUMN_CAN_BE_REACTIVATED]: this
        .canBeReactivated,
      [PriceBandActionFlagsFindResultFields.COLUMN_CAN_BE_SUSPENDED]: this
        .canBeSuspended,
      [PriceBandActionFlagsFindResultFields.COLUMN_CAN_DECREASE_SEATS]: this
        .canDecreaseSeats,
      [PriceBandActionFlagsFindResultFields.COLUMN_CAN_INCREASE_SEATS]: this
        .canIncreaseSeats,
    };
  }
}
