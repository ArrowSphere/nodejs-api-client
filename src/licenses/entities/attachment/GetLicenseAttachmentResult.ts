import { AbstractEntity } from '../../../abstractEntity';

export enum GetLicenseAttachmentResultFields {
  COLUMN_NAME = 'name',
  COLUMN_LAST_MODIFIED = 'lastModified',
  COLUMN_URL = 'url',
  COLUMN_METADATA = 'metadata',
}

export type GetLicenseAttachmentResultData = {
  [GetLicenseAttachmentResultFields.COLUMN_NAME]: string;
  [GetLicenseAttachmentResultFields.COLUMN_LAST_MODIFIED]: string;
  [GetLicenseAttachmentResultFields.COLUMN_URL]: string;
  [GetLicenseAttachmentResultFields.COLUMN_METADATA]?: Record<string, string>;
};

export class GetLicenseAttachmentResult extends AbstractEntity<GetLicenseAttachmentResultData> {
  readonly #name: string;
  readonly #lastModified: string;
  readonly #url: string;
  readonly #metadata?: Record<string, string>;

  public constructor(input: GetLicenseAttachmentResultData) {
    super(input);

    this.#name = input[GetLicenseAttachmentResultFields.COLUMN_NAME];
    this.#lastModified =
      input[GetLicenseAttachmentResultFields.COLUMN_LAST_MODIFIED];
    this.#url = input[GetLicenseAttachmentResultFields.COLUMN_URL];
    this.#metadata = input[GetLicenseAttachmentResultFields.COLUMN_METADATA];
  }

  get name(): string {
    return this.#name;
  }

  get lastModified(): string {
    return this.#lastModified;
  }

  get url(): string {
    return this.#url;
  }

  get metadata(): Record<string, string> | undefined {
    return this.#metadata;
  }

  public toJSON(): GetLicenseAttachmentResultData {
    return {
      [GetLicenseAttachmentResultFields.COLUMN_NAME]: this.name,
      [GetLicenseAttachmentResultFields.COLUMN_LAST_MODIFIED]: this
        .lastModified,
      [GetLicenseAttachmentResultFields.COLUMN_URL]: this.url,
      [GetLicenseAttachmentResultFields.COLUMN_METADATA]: this.metadata,
    };
  }
}
