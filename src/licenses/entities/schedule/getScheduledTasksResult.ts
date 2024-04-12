import { AbstractEntity } from '../../../abstractEntity';
import {
  GetScheduleTaskResult,
  GetScheduleTaskResultData,
} from './getScheduleTaskResult';

export enum GetScheduledTasksResultFields {
  COLUMN_SCHEDULED_TASKS = 'scheduledTasks',
}

export type GetScheduledTasksResultData = {
  [GetScheduledTasksResultFields.COLUMN_SCHEDULED_TASKS]: GetScheduleTaskResultData[];
};

export class GetScheduledTasksResult extends AbstractEntity<GetScheduledTasksResultData> {
  readonly #scheduledTasks: GetScheduleTaskResult[];

  public constructor(dataInput: GetScheduledTasksResultData) {
    super(dataInput);

    this.#scheduledTasks = dataInput[
      GetScheduledTasksResultFields.COLUMN_SCHEDULED_TASKS
    ].map(
      (result: GetScheduleTaskResultData) => new GetScheduleTaskResult(result),
    );
  }

  get scheduledTasks(): GetScheduleTaskResult[] {
    return this.#scheduledTasks;
  }

  public toJSON(): GetScheduledTasksResultData {
    return {
      [GetScheduledTasksResultFields.COLUMN_SCHEDULED_TASKS]: this.scheduledTasks.map(
        (result: GetScheduleTaskResult) => result.toJSON(),
      ),
    };
  }
}
