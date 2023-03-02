import { IssueAttachmentFields } from '../entities/issue/attachment';

export type AddIssueAttachmentPayload = {
  [IssueAttachmentFields.COLUMN_FILE_NAME]: string;
  [IssueAttachmentFields.COLUMN_MIME_TYPE]: string;
  [IssueAttachmentFields.COLUMN_CONTENT]: string;
};
