import { AbstractEntity } from '../../abstractEntity';
import { UserImpersonation, UserImpersonationData } from './userImpersonation';

export enum GetScheduledTasksResultFields {
  COLUMN_IMPERSONATIONS = 'impersonations',
}

export type GetUserImpersonationsResultData = {
  [GetScheduledTasksResultFields.COLUMN_IMPERSONATIONS]: UserImpersonationData[];
};

export class GetUserImpersonationsResult extends AbstractEntity<GetUserImpersonationsResultData> {
  readonly #impersonations: UserImpersonation[];

  public constructor(dataInput: GetUserImpersonationsResultData) {
    super(dataInput);

    this.#impersonations =
      dataInput[GetScheduledTasksResultFields.COLUMN_IMPERSONATIONS]?.map(
        (result: UserImpersonationData) => new UserImpersonation(result),
      ) ?? [];
  }

  get impersonations(): UserImpersonation[] {
    return this.#impersonations;
  }

  public toJSON(): GetUserImpersonationsResultData {
    return {
      [GetScheduledTasksResultFields.COLUMN_IMPERSONATIONS]: this.impersonations.map(
        (result: UserImpersonation) => result.toJSON(),
      ),
    };
  }
}
