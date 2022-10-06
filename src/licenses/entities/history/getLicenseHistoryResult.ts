import { AbstractEntity } from '../../../abstractEntity';

export enum HistoryNotesFields {
  COLUMN_BEFORE = 'before',
  COLUMN_AFTER = 'after',
  COLUMN_EXTRA_INFORMATION = 'extra_information',
}

export type HistoryNotesGetData = {
  [HistoryNotesFields.COLUMN_BEFORE]: Record<string, unknown>;
  [HistoryNotesFields.COLUMN_AFTER]: Record<string, unknown>;
  [HistoryNotesFields.COLUMN_EXTRA_INFORMATION]: Record<string, unknown>;
};

export enum LicenseHistoryGetFields {
  COLUMN_LICENSE_HISTORY_ACTION = 'action',
  COLUMN_LICENSE_HISTORY_NOTES = 'notes',
  COLUMN_LICENSE_HISTORY_CREATED_AT = 'created_at',
  COLUMN_LICENSE_HISTORY_UPDATED_AT = 'updated_at',
}

export type LicenseHistoryGetData = {
  [LicenseHistoryGetFields.COLUMN_LICENSE_HISTORY_ACTION]: string;
  [LicenseHistoryGetFields.COLUMN_LICENSE_HISTORY_NOTES]: HistoryNotesGetData;
  [LicenseHistoryGetFields.COLUMN_LICENSE_HISTORY_CREATED_AT]: string;
  [LicenseHistoryGetFields.COLUMN_LICENSE_HISTORY_UPDATED_AT]: string;
};

export class LicenseHistoryResult extends AbstractEntity<LicenseHistoryGetData> {
  readonly #action: string;
  readonly #notes: HistoryNotesGetData;
  readonly #created_at: string;
  readonly #updated_at: string;

  public constructor(licenseHistoryGetDataInput: LicenseHistoryGetData) {
    super(licenseHistoryGetDataInput);

    this.#action =
      licenseHistoryGetDataInput[
        LicenseHistoryGetFields.COLUMN_LICENSE_HISTORY_ACTION
      ];
    this.#notes =
      licenseHistoryGetDataInput[
        LicenseHistoryGetFields.COLUMN_LICENSE_HISTORY_NOTES
      ];
    this.#created_at =
      licenseHistoryGetDataInput[
        LicenseHistoryGetFields.COLUMN_LICENSE_HISTORY_CREATED_AT
      ];
    this.#updated_at =
      licenseHistoryGetDataInput[
        LicenseHistoryGetFields.COLUMN_LICENSE_HISTORY_UPDATED_AT
      ];
  }

  public get action(): string {
    return this.#action;
  }

  public get notes(): HistoryNotesGetData {
    return this.#notes;
  }

  public get createdAt(): string {
    return this.#created_at;
  }

  public get updatedAt(): string {
    return this.#updated_at;
  }

  public toJSON(): LicenseHistoryGetData {
    return {
      [LicenseHistoryGetFields.COLUMN_LICENSE_HISTORY_ACTION]: this.action,
      [LicenseHistoryGetFields.COLUMN_LICENSE_HISTORY_NOTES]: this.notes,
      [LicenseHistoryGetFields.COLUMN_LICENSE_HISTORY_CREATED_AT]: this
        .createdAt,
      [LicenseHistoryGetFields.COLUMN_LICENSE_HISTORY_UPDATED_AT]: this
        .updatedAt,
    };
  }
}
