import { AbstractEntity } from '../../../abstractEntity';

export enum ScheduleTaskStatus {
  STATUS_ACTIVATION_NOK = '85',
  STATUS_CREATION_NOK = '63',
  STATUS_PROCESSING_OK = '66',
  STATUS_PROCESSING_REFUSED = '65',
}

export enum GetScheduleTaskResultFields {
  COLUMN_CREATED_AT = 'createdAt',
  COLUMN_EXECUTION_DATE = 'executionDate',
  COLUMN_PERIODICITY = 'periodicity',
  COLUMN_SCHEDULE_TASK_ID = 'scheduleTaskId',
  COLUMN_SEATS = 'seats',
  COLUMN_STATUS = 'status',
  COLUMN_STATUS_CODE = 'statusCode',
  COLUMN_TERM = 'term',
  COLUMN_UPDATED_AT = 'updatedAt',
  COLUMN_COTERMINOSITY_DATE = 'coterminosityDate',
}

export type GetScheduleTaskResultData = {
  [GetScheduleTaskResultFields.COLUMN_CREATED_AT]: string;
  [GetScheduleTaskResultFields.COLUMN_EXECUTION_DATE]: string;
  [GetScheduleTaskResultFields.COLUMN_PERIODICITY]: number;
  [GetScheduleTaskResultFields.COLUMN_SCHEDULE_TASK_ID]: number;
  [GetScheduleTaskResultFields.COLUMN_SEATS]: number;
  [GetScheduleTaskResultFields.COLUMN_STATUS]: string;
  [GetScheduleTaskResultFields.COLUMN_STATUS_CODE]: string;
  [GetScheduleTaskResultFields.COLUMN_TERM]: number;
  [GetScheduleTaskResultFields.COLUMN_UPDATED_AT]: string;
  [GetScheduleTaskResultFields.COLUMN_COTERMINOSITY_DATE]: string;
};

export class GetScheduleTaskResult extends AbstractEntity<GetScheduleTaskResultData> {
  readonly #createdAt: string;
  readonly #executionDate: string;
  readonly #periodicity: number;
  readonly #scheduleTaskId: number;
  readonly #seats: number;
  readonly #status: string;
  readonly #statusCode: string;
  readonly #term: number;
  readonly #updatedAt: string;
  readonly #coterminosityDate: string;

  public constructor(dataInput: GetScheduleTaskResultData) {
    super(dataInput);

    this.#createdAt = dataInput[GetScheduleTaskResultFields.COLUMN_CREATED_AT];
    this.#executionDate =
      dataInput[GetScheduleTaskResultFields.COLUMN_EXECUTION_DATE];
    this.#periodicity =
      dataInput[GetScheduleTaskResultFields.COLUMN_PERIODICITY];
    this.#scheduleTaskId =
      dataInput[GetScheduleTaskResultFields.COLUMN_SCHEDULE_TASK_ID];
    this.#seats = dataInput[GetScheduleTaskResultFields.COLUMN_SEATS];
    this.#status = dataInput[GetScheduleTaskResultFields.COLUMN_STATUS];
    this.#statusCode =
      dataInput[GetScheduleTaskResultFields.COLUMN_STATUS_CODE];
    this.#term = dataInput[GetScheduleTaskResultFields.COLUMN_TERM];
    this.#updatedAt = dataInput[GetScheduleTaskResultFields.COLUMN_UPDATED_AT];
    this.#coterminosityDate =
      dataInput[GetScheduleTaskResultFields.COLUMN_COTERMINOSITY_DATE];
  }

  public get createdAt(): string {
    return this.#createdAt;
  }

  public get executionDate(): string {
    return this.#executionDate;
  }

  public get periodicity(): number {
    return this.#periodicity;
  }

  public get scheduleTaskId(): number {
    return this.#scheduleTaskId;
  }

  public get seats(): number {
    return this.#seats;
  }

  public get status(): string {
    return this.#status;
  }

  public get statusCode(): string {
    return this.#statusCode;
  }

  public get term(): number {
    return this.#term;
  }

  public get updatedAt(): string {
    return this.#updatedAt;
  }

  public get coterminosityDate(): string {
    return this.#coterminosityDate;
  }

  public toJSON(): GetScheduleTaskResultData {
    return {
      [GetScheduleTaskResultFields.COLUMN_CREATED_AT]: this.createdAt,
      [GetScheduleTaskResultFields.COLUMN_EXECUTION_DATE]: this.executionDate,
      [GetScheduleTaskResultFields.COLUMN_PERIODICITY]: this.periodicity,
      [GetScheduleTaskResultFields.COLUMN_SCHEDULE_TASK_ID]: this
        .scheduleTaskId,
      [GetScheduleTaskResultFields.COLUMN_SEATS]: this.seats,
      [GetScheduleTaskResultFields.COLUMN_STATUS]: this.status,
      [GetScheduleTaskResultFields.COLUMN_STATUS_CODE]: this.statusCode,
      [GetScheduleTaskResultFields.COLUMN_TERM]: this.term,
      [GetScheduleTaskResultFields.COLUMN_UPDATED_AT]: this.updatedAt,
      [GetScheduleTaskResultFields.COLUMN_COTERMINOSITY_DATE]: this
        .coterminosityDate,
    };
  }
}
