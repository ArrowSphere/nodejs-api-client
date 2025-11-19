import { AbstractEntity } from '../../../abstractEntity';

export enum AttachmentLicenseFields {
  COLUMN_LAST_MODIFIED = 'lastModified',
  COLUMN_METADATA = 'metadata',
  COLUMN_NAME = 'name',
  COLUMN_URL = 'url',
}

export type AttachmentLicenseType = {
  [AttachmentLicenseFields.COLUMN_LAST_MODIFIED]: string;
  [AttachmentLicenseFields.COLUMN_METADATA]?: Record<string, string>;
  [AttachmentLicenseFields.COLUMN_NAME]: string;
  [AttachmentLicenseFields.COLUMN_URL]: string;
};

export enum AttachmentsLicenseFields {
  COLUMN_ATTACHMENTS = 'attachments',
}

export type AttachmentsLicenseType = {
  [AttachmentsLicenseFields.COLUMN_ATTACHMENTS]: AttachmentLicenseType[];
};

export class AttachmentLicense extends AbstractEntity<AttachmentLicenseType> {
  readonly #lastModified: string;
  readonly #metadata?: Record<string, string>;
  readonly #name: string;
  readonly #url: string;

  public constructor(attachment: AttachmentLicenseType) {
    super(attachment);

    this.#lastModified =
      attachment[AttachmentLicenseFields.COLUMN_LAST_MODIFIED];
    this.#metadata = attachment[AttachmentLicenseFields.COLUMN_METADATA];
    this.#name = attachment[AttachmentLicenseFields.COLUMN_NAME];
    this.#url = attachment[AttachmentLicenseFields.COLUMN_URL];
  }

  get lastModified(): string {
    return this.#lastModified;
  }

  get metadata(): Record<string, string> | undefined {
    return this.#metadata;
  }
  get name(): string {
    return this.#name;
  }
  get url(): string {
    return this.#url;
  }

  public toJSON(): AttachmentLicenseType {
    return {
      [AttachmentLicenseFields.COLUMN_LAST_MODIFIED]: this.lastModified,
      [AttachmentLicenseFields.COLUMN_METADATA]: this.metadata,
      [AttachmentLicenseFields.COLUMN_NAME]: this.name,
      [AttachmentLicenseFields.COLUMN_URL]: this.url,
    };
  }
}

export class AttachmentsLicense extends AbstractEntity<AttachmentsLicenseType> {
  readonly #attachments: AttachmentLicense[];

  public constructor(attachments: AttachmentsLicenseType) {
    super(attachments);

    this.#attachments = attachments[
      AttachmentsLicenseFields.COLUMN_ATTACHMENTS
    ].map(
      (attachment: AttachmentLicenseType): AttachmentLicense =>
        new AttachmentLicense(attachment),
    );
  }

  get attachments(): AttachmentLicense[] {
    return this.#attachments;
  }

  public toJSON(): AttachmentsLicenseType {
    return {
      [AttachmentsLicenseFields.COLUMN_ATTACHMENTS]: this.attachments.map(
        (attachment: AttachmentLicense): AttachmentLicenseType =>
          attachment.toJSON(),
      ),
    };
  }
}
