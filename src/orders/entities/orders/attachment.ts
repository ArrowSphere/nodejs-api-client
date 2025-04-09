import { AbstractEntity } from '../../../abstractEntity';

export enum AttachmentOrderFields {
  COLUMN_LAST_MODIFIED = 'lastModified',
  COLUMN_METADATA = 'metadata',
  COLUMN_NAME = 'name',
  COLUMN_URL = 'url',
}

export type AttachmentOrderType = {
  [AttachmentOrderFields.COLUMN_LAST_MODIFIED]: string;
  [AttachmentOrderFields.COLUMN_METADATA]?: Record<string, string>;
  [AttachmentOrderFields.COLUMN_NAME]: string;
  [AttachmentOrderFields.COLUMN_URL]: string;
};

export enum AttachmentsOrderListFields {
  COLUMN_ATTACHMENTS = 'attachments',
}

export type AttachmentsOrderListType = {
  [AttachmentsOrderListFields.COLUMN_ATTACHMENTS]: AttachmentOrderType[];
};

export class AttachmentOrder extends AbstractEntity<AttachmentOrderType> {
  readonly #lastModified: string;
  readonly #metadata?: Record<string, string>;
  readonly #name: string;
  readonly #url: string;

  public constructor(attachmentOrderTypeInput: AttachmentOrderType) {
    super(attachmentOrderTypeInput);

    this.#lastModified =
      attachmentOrderTypeInput[AttachmentOrderFields.COLUMN_LAST_MODIFIED];
    this.#metadata =
      attachmentOrderTypeInput[AttachmentOrderFields.COLUMN_METADATA];
    this.#name = attachmentOrderTypeInput[AttachmentOrderFields.COLUMN_NAME];
    this.#url = attachmentOrderTypeInput[AttachmentOrderFields.COLUMN_URL];
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

  public toJSON(): AttachmentOrderType {
    return {
      [AttachmentOrderFields.COLUMN_LAST_MODIFIED]: this.lastModified,
      [AttachmentOrderFields.COLUMN_METADATA]: this.metadata,
      [AttachmentOrderFields.COLUMN_NAME]: this.name,
      [AttachmentOrderFields.COLUMN_URL]: this.url,
    };
  }
}

export class AttachmentsListOrder extends AbstractEntity<AttachmentsOrderListType> {
  readonly #attachments: AttachmentOrder[];

  public constructor(attachmentsListOrderTypeInput: AttachmentsOrderListType) {
    super(attachmentsListOrderTypeInput);

    this.#attachments = attachmentsListOrderTypeInput[
      AttachmentsOrderListFields.COLUMN_ATTACHMENTS
    ].map((attachment: AttachmentOrderType) => new AttachmentOrder(attachment));
  }

  get attachments(): AttachmentOrder[] {
    return this.#attachments;
  }

  public toJSON(): AttachmentsOrderListType {
    return {
      [AttachmentsOrderListFields.COLUMN_ATTACHMENTS]: this.attachments.map(
        (attachment: AttachmentOrder) => attachment.toJSON(),
      ),
    };
  }
}
