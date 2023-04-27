import { AbstractEntity } from '../../../abstractEntity';

export enum IssueAttachmentFields {
  COLUMN_ID = 'id',
  COLUMN_FILE_NAME = 'fileName',
  COLUMN_MIME_TYPE = 'mimeType',
  COLUMN_CONTENT = 'content',
}

export type IssueAttachmentType = {
  [IssueAttachmentFields.COLUMN_ID]: string;
  [IssueAttachmentFields.COLUMN_FILE_NAME]?: string;
  [IssueAttachmentFields.COLUMN_MIME_TYPE]?: string;
  [IssueAttachmentFields.COLUMN_CONTENT]?: string;
};

export class IssueAttachment extends AbstractEntity<IssueAttachmentType> {
  readonly #id: string;
  readonly #fileName?: string;
  readonly #mimeType?: string;
  readonly #content?: string;

  constructor(input: IssueAttachmentType) {
    super(input);

    this.#id = input[IssueAttachmentFields.COLUMN_ID];
    this.#fileName = input[IssueAttachmentFields.COLUMN_FILE_NAME];
    this.#mimeType = input[IssueAttachmentFields.COLUMN_MIME_TYPE];
    this.#content = input[IssueAttachmentFields.COLUMN_CONTENT];
  }

  get id(): string {
    return this.#id;
  }

  get fileName(): string | undefined {
    return this.#fileName;
  }

  get mimeType(): string | undefined {
    return this.#mimeType;
  }

  get content(): string | undefined {
    return this.#content;
  }

  public toJSON(): IssueAttachmentType {
    return {
      [IssueAttachmentFields.COLUMN_ID]: this.id,
      [IssueAttachmentFields.COLUMN_FILE_NAME]: this.fileName,
      [IssueAttachmentFields.COLUMN_MIME_TYPE]: this.mimeType,
      [IssueAttachmentFields.COLUMN_CONTENT]: this.content,
    };
  }
}

export type IssueAttachmentsType = Array<IssueAttachmentType>;

export class IssueAttachments extends AbstractEntity<IssueAttachmentsType> {
  readonly #list: IssueAttachment[];

  constructor(input: IssueAttachmentsType) {
    super(input);

    this.#list = input.map((item) => new IssueAttachment(item));
  }

  get list(): IssueAttachment[] {
    return this.#list;
  }
  public toJSON(): IssueAttachmentsType {
    return this.list.map((item) => item.toJSON());
  }
}
