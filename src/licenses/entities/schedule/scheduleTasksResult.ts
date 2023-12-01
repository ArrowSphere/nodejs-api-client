import { AbstractEntity } from '../../../abstractEntity';

export type ScheduleTaskData = {
  scheduleTaskId: number;
};

export class ScheduleTasksResult extends AbstractEntity<ScheduleTaskData> {
  readonly #scheduleTaskId: number;

  public constructor(data: ScheduleTaskData) {
    super(data);

    this.#scheduleTaskId = data.scheduleTaskId;
  }

  public toJSON(): ScheduleTaskData {
    return {
      scheduleTaskId: this.#scheduleTaskId,
    };
  }
}
