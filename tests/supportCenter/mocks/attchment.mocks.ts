import {
  GetData,
  GetResultFields,
  IssueAttachmentsType,
  IssueAttachmentFields,
  AddIssueAttachmentPayload,
  IssueAttachmentType,
} from '../../../src';

export const ADD_ISSUE_ATTACHMENT_PAYLOAD: AddIssueAttachmentPayload = {
  [IssueAttachmentFields.COLUMN_FILE_NAME]: 'fileName',
  [IssueAttachmentFields.COLUMN_MIME_TYPE]: 'mimeType',
  [IssueAttachmentFields.COLUMN_CONTENT]: 'content',
};

export const LIST_ISSUE_ATTACHMENTS_RESPONSE: GetData<IssueAttachmentsType> = {
  [GetResultFields.COLUMN_STATUS]: 200,
  [GetResultFields.COLUMN_DATA]: [
    {
      [IssueAttachmentFields.COLUMN_ID]: 'id',
      [IssueAttachmentFields.COLUMN_CONTENT]: 'content',
      [IssueAttachmentFields.COLUMN_FILE_NAME]: 'fileName',
      [IssueAttachmentFields.COLUMN_MIME_TYPE]: 'mimeType',
    },
  ],
};

export const DOWNLOAD_ISSUE_ATTACHMENT_RESPONSE: GetData<IssueAttachmentType> = {
  [GetResultFields.COLUMN_STATUS]: 200,
  [GetResultFields.COLUMN_DATA]: {
    [IssueAttachmentFields.COLUMN_ID]: 'id',
    [IssueAttachmentFields.COLUMN_CONTENT]: 'content',
    [IssueAttachmentFields.COLUMN_FILE_NAME]: 'fileName',
    [IssueAttachmentFields.COLUMN_MIME_TYPE]: 'mimeType',
  },
};
