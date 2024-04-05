import { AbstractEntity } from '../../../abstractEntity';
import {
  GetScheduleTaskResult,
  GetScheduleTaskResultData,
} from './getScheduleTaskResult';

export enum GetSchedulesTasksResultFields {
  COLUMN_SCHEDULED_TASKS = 'scheduledTasks',
}

export type GetSchedulesTasksResultData = {
  [GetSchedulesTasksResultFields.COLUMN_SCHEDULED_TASKS]: GetScheduleTaskResultData[];
};

export class GetSchedulesTasksResult extends AbstractEntity<GetSchedulesTasksResultData> {
  readonly #scheduledTasks: GetScheduleTaskResult[];

  public constructor(
    getLicenseHistoryResultDataInput: GetSchedulesTasksResultData,
  ) {
    super(getLicenseHistoryResultDataInput);

    this.#scheduledTasks = getLicenseHistoryResultDataInput[
      GetSchedulesTasksResultFields.COLUMN_SCHEDULED_TASKS
    ].map(
      (result: GetScheduleTaskResultData) => new GetScheduleTaskResult(result),
    );
  }

  get scheduledTasks(): GetScheduleTaskResult[] {
    return this.#scheduledTasks;
  }

  public toJSON(): GetSchedulesTasksResultData {
    return {
      [GetSchedulesTasksResultFields.COLUMN_SCHEDULED_TASKS]: this.scheduledTasks.map(
        (result: GetScheduleTaskResult) => result.toJSON(),
      ),
    };
  }
}
