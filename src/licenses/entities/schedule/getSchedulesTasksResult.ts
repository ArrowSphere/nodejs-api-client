import { AbstractEntity } from '../../../abstractEntity';
import {
  GetScheduleTaskResult,
  GetScheduleTaskResultData,
} from './getScheduleTaskResult';

export enum GetSchedulesTasksResultFields {
  COLUMN_SCHEDULES_TASKS = 'schedulesTasks',
}

export type GetSchedulesTasksResultData = {
  [GetSchedulesTasksResultFields.COLUMN_SCHEDULES_TASKS]: GetScheduleTaskResultData[];
};

/**
 * @deprecated Use GetScheduledTasksResult instead
 */
export class GetSchedulesTasksResult extends AbstractEntity<GetSchedulesTasksResultData> {
  readonly #scheduledTasks: GetScheduleTaskResult[];

  public constructor(dataInput: GetSchedulesTasksResultData) {
    super(dataInput);

    this.#scheduledTasks = dataInput[
      GetSchedulesTasksResultFields.COLUMN_SCHEDULES_TASKS
    ].map(
      (result: GetScheduleTaskResultData) => new GetScheduleTaskResult(result),
    );
  }

  get scheduledTasks(): GetScheduleTaskResult[] {
    return this.#scheduledTasks;
  }

  public toJSON(): GetSchedulesTasksResultData {
    return {
      [GetSchedulesTasksResultFields.COLUMN_SCHEDULES_TASKS]: this.scheduledTasks.map(
        (result: GetScheduleTaskResult) => result.toJSON(),
      ),
    };
  }
}
