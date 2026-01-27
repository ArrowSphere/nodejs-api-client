import { AbstractEntity } from '../../../abstractEntity';

export enum PostLicenseAttachmentResultFields {
  COLUMN_NAME = 'name',
  COLUMN_LAST_MODIFIED = 'lastModified',
  COLUMN_URL = 'url',
  COLUMN_METADATA = 'metadata',
}

export type PostLicenseAttachmentResultData = {
  [PostLicenseAttachmentResultFields.COLUMN_NAME]: string;
  [PostLicenseAttachmentResultFields.COLUMN_LAST_MODIFIED]: string;
  [PostLicenseAttachmentResultFields.COLUMN_URL]: string;
  [PostLicenseAttachmentResultFields.COLUMN_METADATA]?: Record<string, string>;
};

export class PostLicenseAttachmentResult extends AbstractEntity<PostLicenseAttachmentResultData> {
  readonly #name: string;
  readonly #lastModified: string;
  readonly #url: string;
  readonly #metadata?: Record<string, string>;

  public constructor(input: PostLicenseAttachmentResultData) {
    super(input);

    this.#name = input[PostLicenseAttachmentResultFields.COLUMN_NAME];
    this.#lastModified =
      input[PostLicenseAttachmentResultFields.COLUMN_LAST_MODIFIED];
    this.#url = input[PostLicenseAttachmentResultFields.COLUMN_URL];
    this.#metadata = input[PostLicenseAttachmentResultFields.COLUMN_METADATA];
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

  public toJSON(): PostLicenseAttachmentResultData {
    return {
      [PostLicenseAttachmentResultFields.COLUMN_NAME]: this.name,
      [PostLicenseAttachmentResultFields.COLUMN_LAST_MODIFIED]: this
        .lastModified,
      [PostLicenseAttachmentResultFields.COLUMN_URL]: this.url,
      [PostLicenseAttachmentResultFields.COLUMN_METADATA]: this.metadata,
    };
  }
}
