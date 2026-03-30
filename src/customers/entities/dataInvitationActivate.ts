import { AbstractEntity } from '../../abstractEntity';

export enum DataInvitationActivateFields {
  COLUMN_USERNAME = 'username',
}

export type DataInvitationActivateType = {
  [DataInvitationActivateFields.COLUMN_USERNAME]: string;
};

export class DataInvitationActivate extends AbstractEntity<DataInvitationActivateType> {
  readonly #username: string;

  public constructor(
    getDataInvitationActivateInput: DataInvitationActivateType,
  ) {
    super(getDataInvitationActivateInput);

    this.#username =
      getDataInvitationActivateInput[
        DataInvitationActivateFields.COLUMN_USERNAME
      ];
  }

  get username(): string {
    return this.#username;
  }

  public toJSON(): DataInvitationActivateType {
    return {
      [DataInvitationActivateFields.COLUMN_USERNAME]: this.username,
    };
  }
}
