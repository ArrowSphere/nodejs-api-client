import { AbstractEntity } from '../../../abstractEntity';

export enum HistoryNoteFields {
  COLUMN_BEFORE = 'before',
  COLUMN_AFTER = 'after',
  COLUMN_EXTRA_INFORMATION = 'extra_information',
}

export type HistoryNoteGetData = {
  [HistoryNoteFields.COLUMN_BEFORE]: Record<string, unknown>;
  [HistoryNoteFields.COLUMN_AFTER]: Record<string, unknown>;
  [HistoryNoteFields.COLUMN_EXTRA_INFORMATION]: Record<string, unknown>;
};

export enum ActionHistoryResultFields {
  COLUMN_ACTION = 'action',
  COLUMN_NOTE = 'note',
  COLUMN_CREATED_AT = 'created_at',
  COLUMN_UPDATED_AT = 'updated_at',
}

export type ActionHistoryResultData = {
  [ActionHistoryResultFields.COLUMN_ACTION]: string;
  [ActionHistoryResultFields.COLUMN_NOTE]: HistoryNoteGetData;
  [ActionHistoryResultFields.COLUMN_CREATED_AT]: string;
  [ActionHistoryResultFields.COLUMN_UPDATED_AT]: string;
};

export class ActionHistoryResult extends AbstractEntity<ActionHistoryResultData> {
  readonly #action: string;
  readonly #note: HistoryNoteGetData;
  readonly #created_at: string;
  readonly #updated_at: string;

  public constructor(licenseHistoryGetDataInput: ActionHistoryResultData) {
    super(licenseHistoryGetDataInput);

    this.#action =
      licenseHistoryGetDataInput[ActionHistoryResultFields.COLUMN_ACTION];
    this.#note =
      licenseHistoryGetDataInput[ActionHistoryResultFields.COLUMN_NOTE];
    this.#created_at =
      licenseHistoryGetDataInput[ActionHistoryResultFields.COLUMN_CREATED_AT];
    this.#updated_at =
      licenseHistoryGetDataInput[ActionHistoryResultFields.COLUMN_UPDATED_AT];
  }

  public get action(): string {
    return this.#action;
  }

  public get note(): HistoryNoteGetData {
    return this.#note;
  }

  public get createdAt(): string {
    return this.#created_at;
  }

  public get updatedAt(): string {
    return this.#updated_at;
  }

  public toJSON(): ActionHistoryResultData {
    return {
      [ActionHistoryResultFields.COLUMN_ACTION]: this.action,
      [ActionHistoryResultFields.COLUMN_NOTE]: this.note,
      [ActionHistoryResultFields.COLUMN_CREATED_AT]: this.createdAt,
      [ActionHistoryResultFields.COLUMN_UPDATED_AT]: this.updatedAt,
    };
  }
}
