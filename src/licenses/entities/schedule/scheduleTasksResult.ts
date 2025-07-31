import { AbstractEntity } from '../../../abstractEntity';

export type ScheduleTaskData = {
  scheduleTaskId?: number;
};

export class ScheduleTasksResult extends AbstractEntity<ScheduleTaskData> {
  readonly #scheduleTaskId: number | undefined;

  public constructor(data: ScheduleTaskData | undefined) {
    super(data ?? {});

    this.#scheduleTaskId = data?.scheduleTaskId;
  }

  public toJSON(): ScheduleTaskData {
    return {
      ...(this.#scheduleTaskId ? { scheduleTaskId: this.#scheduleTaskId } : {}),
    };
  }
}
