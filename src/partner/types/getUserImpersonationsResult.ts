import { AbstractEntity } from '../../abstractEntity';
import { UserImpersonation, UserImpersonationData } from './userImpersonation';

export enum GetUserImpersonationsResultFields {
  COLUMN_IMPERSONATIONS = 'impersonations',
}

export type GetUserImpersonationsResultData = {
  [GetUserImpersonationsResultFields.COLUMN_IMPERSONATIONS]: UserImpersonationData[];
};

export class GetUserImpersonationsResult extends AbstractEntity<GetUserImpersonationsResultData> {
  readonly #impersonations: UserImpersonation[];

  public constructor(dataInput: GetUserImpersonationsResultData) {
    super(dataInput);

    this.#impersonations =
      dataInput[GetUserImpersonationsResultFields.COLUMN_IMPERSONATIONS]?.map(
        (result: UserImpersonationData) => new UserImpersonation(result),
      ) ?? [];
  }

  get impersonations(): UserImpersonation[] {
    return this.#impersonations;
  }

  public toJSON(): GetUserImpersonationsResultData {
    return {
      [GetUserImpersonationsResultFields.COLUMN_IMPERSONATIONS]: this.impersonations.map(
        (result: UserImpersonation) => result.toJSON(),
      ),
    };
  }
}
