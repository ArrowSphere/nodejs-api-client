import { AbstractEntity } from '../../../abstractEntity';

export enum OrderEavKeyEnum {
  ORRDER_COMMENT_ONE = 'order_comment_1',
  ORRDER_COMMENT_TWO = 'order_comment_2',
}

export enum ExtraDataFields {
  EAV_KEY_NAME = 'eavkeyName',
  TABLE_NAME = 'tableName',
  VALUE = 'value',
}

export type ExtraData = {
  [ExtraDataFields.EAV_KEY_NAME]?: string;
  [ExtraDataFields.TABLE_NAME]?: string;
  [ExtraDataFields.VALUE]?: string;
};

export class ExtraDataFindResult extends AbstractEntity<ExtraData> {
  readonly #eavkeyName?: string;
  readonly #tableName?: string;
  readonly #value?: string;

  public constructor(data: ExtraData) {
    super(data);

    this.#eavkeyName = data[ExtraDataFields.EAV_KEY_NAME];
    this.#tableName = data[ExtraDataFields.TABLE_NAME];
    this.#value = data[ExtraDataFields.VALUE];
  }

  public toJSON(): ExtraData {
    return {
      [ExtraDataFields.EAV_KEY_NAME]: this.#eavkeyName,
      [ExtraDataFields.TABLE_NAME]: this.#tableName,
      [ExtraDataFields.VALUE]: this.#value,
    };
  }
}
